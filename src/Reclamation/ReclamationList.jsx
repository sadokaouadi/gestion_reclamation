import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button } from 'react-bootstrap';

function ReclamationList() {
  const reclamations = useSelector((state) => state.reclamations);

  const initialValues = {
    search: '', // Champ de recherche
  };

  // Fonction pour filtrer les réclamations
  const filteredReclamations = (search) => {
    if (!search) return reclamations;
    return reclamations.filter(reclamation =>
      reclamation.title.toLowerCase().includes(search.toLowerCase()) ||
      reclamation.description.toLowerCase().includes(search.toLowerCase()) ||
      reclamation.chequeName.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="reclamation-list">
      <h2>Liste des Réclamations</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          // Vous pouvez ajouter une logique de filtrage ici si vous le souhaitez
        }}
      >
        {({ values }) => (
          <Form className="mb-4">
            <div className="form-group">
              <Field
                name="search"
                type="text"
                className="form-control"
                placeholder="Rechercher une réclamation"
              />
            </div>
            <Button type="submit" variant="primary" className="mt-2">
              Rechercher
            </Button>
          </Form>
        )}
      </Formik>

      {reclamations.length > 0 ? (
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Nom du Chèque</th>
            </tr>
          </thead>
          <tbody>
            {filteredReclamations(initialValues.search).map((reclamation) => (
              <tr key={reclamation.id}>
                <td>{reclamation.title}</td>
                <td>{reclamation.description}</td>
                <td>{reclamation.chequeName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucune réclamation disponible.</p>
      )}
    </div>
  );
}

export default ReclamationList;
