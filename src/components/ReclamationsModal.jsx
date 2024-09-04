import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addReclamation } from '../Redux/reclamationSlice';
import { useNavigate } from 'react-router-dom';

function ReclamationsModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(50, 'Le titre doit comporter 50 caractères ou moins')
      .required('Titre requis'),
    description: Yup.string()
      .max(200, 'La description doit comporter 200 caractères ou moins')
      .required('Description requise'),
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ouvrir le formulaire de réclamation
      </Button>

      <Modal show={showModal} onHide={handleClose} size="lg" aria-labelledby="reclamation-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="reclamation-modal-title">Réclamation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addReclamation({
                ...values,
                id: Date.now(),
              }));
              resetForm();
              handleClose(); // Ferme le modal après la soumission
              navigate('/reclamations');
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="title" className="form-label fw-bold">Titre</label>
                  <Field
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Entrez le titre de la réclamation"
                  />
                  <ErrorMessage name="title" component="div" className="text-danger mt-2" />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="description" className="form-label fw-bold">Description</label>
                  <Field
                    name="description"
                    as="textarea"
                    rows="3"
                    className="form-control"
                    placeholder="Entrez la description de la réclamation"
                  />
                  <ErrorMessage name="description" component="div" className="text-danger mt-2" />
                </div>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
                    Soumettre
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ReclamationsModal;
