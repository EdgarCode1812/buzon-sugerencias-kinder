import React from 'react'
import './Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../../shared/footer/Footer';

const validationSchema = Yup.object().shape({
    correo: Yup.string().required('El correo es requerido'),
    contrasena: Yup.string().required('La contraseña es requerida'),
});

const initialValues = {
    correo: '',
    contrasena: '',
};

export default function Login() {

    const handleSubmit = (values, { resetForm }) => {
        // Aquí puedes manejar el envío de los datos del formulario
        console.log(values);
        resetForm();
    };

    return (
        <div className='bg-login'>
            <div className='container con-position d-flex justify-content-center pb-5 pt-5'>
                <div className='row con-ins-login p-3'>
                    <div className='col-md-12 p-2'>
                        <div className='text-center'>
                            <h1 className='text-center'>Iniciar sesión</h1>
                        </div>
                        <div className='text-center'>
                            <img src="/img/logo-kinder.png" alt="" />
                        </div>
                        <p className='pt-2 text-center' style={{color:'rgb(235, 235, 245)'}}>
                            Los resultados podran ser visualizados por los integrantes de participación social
                        </p>
                        <div className='p-md-5 p-1'>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ values, handleSubmit }) => (

                                    <Form>
                                        <div className="form-group-login">
                                            <label >Correo</label>
                                            <Field type="email" id="correo" name="correo" className="llisting-login" />
                                            <ErrorMessage name="correo" component="div" />
                                        </div>

                                        <div className="form-group-login">
                                            <label>Contraseña</label>
                                            <Field type="password" id="contrasena" name="contrasena" className="llisting-login" />
                                            <ErrorMessage name="contrasena" component="div" />
                                        </div>

                                        <div className="form-group text-center pt-4">
                                            <button type="submit" className="btn-login w-100 p-2">Inisiar Sesión</button>
                                        </div>
                                    </Form>

                                )}

                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
