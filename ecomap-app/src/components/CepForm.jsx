import React from 'react';

function CepForm({ cepInput, setCepInput, onSubmit, loading }) {
  // Máscara simples para o input (99999-999)
  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (value.length > 8) value = value.slice(0, 8); // Limita a 8 dígitos
    
    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    setCepInput(value);
  };

  return (
    <form onSubmit={onSubmit} className="cep-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Digite o CEP (Ex: 01001-000)"
          value={cepInput}
          onChange={handleInputChange}
          disabled={loading}
          maxLength="9"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Pesquisar'}
        </button>
      </div>
    </form>
  );
}

export default CepForm;
