import React from 'react';

function AddressCard({ address, onSave, onRemove, isNew }) {
  const { cep, logradouro, bairro, localidade, uf } = address;

  return (
    <div className={`address-card ${isNew ? 'new-card' : 'saved-card'}`}>
      <div className="card-header">
        <h3>CEP: {cep}</h3>
        <span className="badge-uf">{uf}</span>
      </div>
      
      <div className="card-body">
        <p><strong>Rua:</strong> {logradouro || 'Não informado'}</p>
        <p><strong>Bairro:</strong> {bairro || 'Não informado'}</p>
        <p><strong>Cidade:</strong> {localidade}</p>
      </div>

      <div className="card-actions">
        {isNew ? (
          <button onClick={onSave} className="btn-save">
            💾 Salvar no Painel
          </button>
        ) : (
          <button onClick={() => onRemove(cep)} className="btn-remove">
            ❌ Remover
          </button>
        )}
      </div>
    </div>
  );
}

export default AddressCard;
