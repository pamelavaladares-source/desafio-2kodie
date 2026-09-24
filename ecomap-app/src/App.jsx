import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CepForm from './components/CepForm';
import AddressCard from './components/AddressCard';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './App.css'; // Seu CSS responsivo aqui

function App() {
  const [cepInput, setCepInput] = useState('');
  const [currentAddress, setCurrentAddress] = useState(null);
  const [savedAddresses, setSavedAddresses] = useState(() => {
    // Carrega do LocalStorage para manter os dados ao atualizar a página
    const localData = localStorage.getItem('savedAddresses');
    return localData ? JSON.parse(localData) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Salva no LocalStorage sempre que a lista de favoritos mudar
  useEffect(() => {
    localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
  }, [savedAddresses]);

  // Função para buscar o CEP na API
  const handleSearchCep = async (e) => {
    e.preventDefault();
    const cleanCep = cepInput.replace(/\D/g, ''); // Remove traços ou espaços

    if (cleanCep.length !== 8) {
      setError('O CEP deve conter exatamente 8 dígitos.');
      return;
    }

    setLoading(true);
    setError('');
    setCurrentAddress(null);

    try {
          const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);

      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado na base de dados.');
      } else {
        setCurrentAddress(data);
      }
    } catch (err) {
      setError('Erro ao conectar à API. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  // Interação: Salvar endereço na lista do painel
  const handleSaveAddress = () => {
    if (currentAddress && !savedAddresses.some(addr => addr.cep === currentAddress.cep)) {
      setSavedAddresses([...savedAddresses, currentAddress]);
      setCurrentAddress(null);
      setCepInput('');
    }
  };

  // Interação: Remover endereço
  const handleRemoveAddress = (cepToRemove) => {
    setSavedAddresses(savedAddresses.filter(addr => addr.cep !== cepToRemove));
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <section className="search-section">
          <h2>🔍 Consultar Novo CEP</h2>
          <CepForm 
            cepInput={cepInput} 
            setCepInput={setCepInput} 
            onSubmit={handleSearchCep} 
            loading={loading}
          />
          
          {error && <p className="error-message">{error}</p>}
          
          {currentAddress && (
            <AddressCard 
              address={currentAddress} 
              onSave={handleSaveAddress} 
              isNew={true}
            />
          )}
        </section>

        <section className="dashboard-section">
          <h2>📊 Painel de Endereços Salvos</h2>
          <Dashboard 
            addresses={savedAddresses} 
            onRemove={handleRemoveAddress}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
