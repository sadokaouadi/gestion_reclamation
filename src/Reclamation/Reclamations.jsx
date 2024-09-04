// src/Reclamation/Reclamations.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addReclamation } from '../Redux/reclamationSlice';
import { useNavigate } from 'react-router-dom';

function Reclamations({ chequeName }) { // Accepte chequeName comme prop
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(50, 'Le titre doit comporter 50 caractères ou moins')
      .required('Titre requis'),
    description: Yup.string()
      .max(200, 'La description doit comporter 200 caractères ou moins')
      .required('Description requise'),
    chequeName: Yup.string()
      .required('Nom du chèque requis'),
  });

  return (
    <div className="reclamation-form">
      <h2>Réclamation</h2>
      <Formik
        initialValues={{ title: '', description: '', chequeName: chequeName || '' }} // Utilise chequeName comme valeur initiale
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addReclamation({
            ...values,
            id: Date.now(),
          }));
          resetForm();
          navigate('/reclamations');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <Field
                name="title"
                type="text"
                className="form-control"
                placeholder="Entrez le titre de la réclamation"
              />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                name="description"
                as="textarea"
                rows="3"
                className="form-control"
                placeholder="Entrez la description de la réclamation"
              />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="chequeName">Nom du Chèque</label>
              <Field
                name="chequeName"
                type="text"
                className="form-control"
                placeholder="Entrez le nom du chèque"
                readOnly // Rendre le champ en lecture seule
              />
              <ErrorMessage name="chequeName" component="div" className="text-danger" />
            </div>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Soumettre
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Reclamations;
