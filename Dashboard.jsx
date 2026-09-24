import React, { useState } from 'react';
import AddressCard from './AddressCard';

function Dashboard({ addresses, onRemove }) {
  const [filterText, setFilterText] = useState('');

  // Interação: Filtragem dinâmica baseada no que o usuário digita
  const filteredAddresses = addresses.filter((addr) => {
    const searchLower = filterText.toLowerCase();
    return (
      addr.localidade.toLowerCase().includes(searchLower) ||
      addr.uf.toLowerCase().includes(searchLower) ||
      addr.cep.includes(searchLower)
    );
  });

  return (
    <div className="dashboard-container">
      {/* Barra de Filtro e Estatísticas */}
      <div className="dashboard-controls">
        <input
          type="text"
          placeholder="🌎 Filtrar por cidade, UF ou CEP..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="filter-input"
        />
        <div className="counter-badge">
          Registros: <strong>{filteredAddresses.length}</strong> de {addresses.length}
        </div>
      </div>

      {/* Lista de Endereços */}
      {filteredAddresses.length === 0 ? (
        <p className="empty-message">
          {addresses.length === 0 
            ? 'Nenhum endereço salvo ainda. Faça uma busca acima!' 
            : 'Nenhum endereço corresponde ao filtro aplicado.'}
        </p>
      ) : (
        <div className="address-grid">
          {filteredAddresses.map((addr) => (
            <AddressCard
              key={addr.cep}
              address={addr}
              onRemove={onRemove}
              isNew={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
