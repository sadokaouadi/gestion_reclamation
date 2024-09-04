// src/Reclamation/ChequeForm.jsx
import React from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import Reclamations from './Reclamations'; // Assurez-vous d'importer le composant Reclamations

const ChequeForm = () => {
  const [showReclamationModal, setShowReclamationModal] = React.useState(false);
  const [selectedChequeName, setSelectedChequeName] = React.useState(''); // État pour stocker le nom du chèque sélectionné

  const cheques = [
    { beneficiaryName: 'Alice', issuerName: 'Company A', amount: 1000 },
    { beneficiaryName: 'Bob', issuerName: 'Company B', amount: 2000 },
    { beneficiaryName: 'Charlie', issuerName: 'Company C', amount: 3000 },
    { beneficiaryName: 'David', issuerName: 'Company D', amount: 4000 },
    { beneficiaryName: 'Eve', issuerName: 'Company E', amount: 5000 },
  ];

  const handleShowReclamation = (chequeName) => {
    setSelectedChequeName(chequeName); // Met à jour le nom du chèque sélectionné
    setShowReclamationModal(true);
  };

  const handleCloseReclamation = () => setShowReclamationModal(false);

  return (
    <div>
      <h2 className="text-center mt-5">Tableau des Chèques</h2>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Nom du Bénéficiaire</th>
            <th>Nom de l'Émetteur</th>
            <th>Montant</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cheques.map((cheque, index) => (
            <tr key={index}>
              <td>{cheque.beneficiaryName}</td>
              <td>{cheque.issuerName}</td>
              <td>{cheque.amount}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleShowReclamation(cheque.beneficiaryName)} // Passe le nom du chèque
                >
                  Faire une Réclamation
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal pour afficher le formulaire de réclamation */}
      <Modal
        show={showReclamationModal}
        onHide={handleCloseReclamation}
        size="lg"
        aria-labelledby="reclamation-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="reclamation-modal-title">Faire une Réclamation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Reclamations chequeName={selectedChequeName} /> {/* Passe le nom du chèque comme prop */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReclamation}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChequeForm;
