import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Questions.css';

const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    nombreHijo: Yup.string().required('El nombre de su hijo es requerido'),
    gradoHijo: Yup.string().required('El grado de su hijo es requerido'),
    frecuencia: Yup.string().required('Seleccione una opción'),
    tallerFavorito: Yup.string().required('Seleccione una opción'),
    aspectosFavoritos: Yup.array().min(1, 'Seleccione al menos una opción'),
    talleresFuturos: Yup.string(),
    comunicacion: Yup.string().required('Seleccione una opción'),
    experienciaNegativa: Yup.string(),
    sugerencias: Yup.string(),
    voluntario: Yup.string().required('Seleccione una opción'),
    enterado: Yup.string().required('Seleccione una opción'),
    calificacion: Yup.number().required('Ingrese una calificación').min(1).max(10),
});

const initialValues = {
    nombre: '',
    nombreHijo: '',
    gradoHijo: '',
    frecuencia: '',
    tallerFavorito: '',
    aspectosFavoritos: [],
    talleresFuturos: '',
    comunicacion: '',
    experienciaNegativa: '',
    sugerencias: '',
    voluntario: '',
    enterado: '',
    calificacion: '',
};

const talleresOptions = [
    'Diariamente',
    'Varias veces por semana',
    'Una vez por semana',
    'Menos de una vez por semana',
    'Nunca',
];

const favoritoOptions = [
    'Arte y manualidades',
    'Música',
    'Deportes',
    'Ciencias',
    'Otro',
];

const aspectosOptions = [
    'La diversidad de actividades',
    'La interacción con otros niños',
    'El aprendizaje práctico',
    'La creatividad fomentada',
    'La calidad de los materiales y recursos',
];

const comunicacionOptions = [
    'Excelente',
    'Buena',
    'Regular',
    'Necesita mejora',
    'Insatisfactoria',
];

const enteradoOptions = [
    'Comunicación en papel',
    'Correo electrónico',
    'Sitio web de la escuela',
    'Redes sociales',
    'Otro',
];


export default function QuestionContent() {

    const handleSubmit = (values, { resetForm }) => {
        // Aquí puedes manejar el envío de los datos del formulario
        console.log(values);
        resetForm();
    };

    return (
        <div className='questions-content'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleSubmit }) => (
                    <Form>
                        <div className="form-group">
                            <label > Nombre del tutor:</label>
                            <Field type="text" id="nombre" name="nombre" className="llisting" />
                            <ErrorMessage name="nombre" component="div" />
                        </div>

                        <div className="form-group">
                            <label>Nombre de su hijo:</label>
                            <Field type="text" id="nombreHijo" name="nombreHijo" className="llisting" />
                            <ErrorMessage name="nombreHijo" component="div" />
                        </div>

                        <div className="form-group">
                            <label>Grado de su hijo:</label>
                            <Field type="text" id="gradoHijo" name="gradoHijo" className="llisting" />
                            <ErrorMessage name="gradoHijo" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Con qué frecuencia su hijo(a) participa en los talleres del jardín de niños?</label>
                            {talleresOptions.map((option) => (
                                <div key={option}>
                                    <label>
                                        <Field type="radio" name="frecuencia" value={option} />
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <ErrorMessage name="frecuencia" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Cuál es el taller favorito de su hijo(a)?</label>
                            {favoritoOptions.map((option) => (
                                <div key={option}>
                                    <label>
                                        <Field type="radio" name="tallerFavorito" value={option} />
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <ErrorMessage name="tallerFavorito" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Qué aspectos de los talleres le gustan más a su hijo(a)? (Seleccione hasta 3 opciones)</label>
                            {aspectosOptions.map((option) => (
                                <div key={option}>
                                    <label>
                                        <Field type="checkbox" name="aspectosFavoritos" value={option} />
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <ErrorMessage name="aspectosFavoritos" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Hay algún taller específico que le gustaría que se ofrezca en el jardín de niños y que no se esté proporcionando actualmente? (Por favor, especifique)</label>
                            <Field type="text" id="talleresFuturos" name="talleresFuturos" className="llisting" />
                            <ErrorMessage name="talleresFuturos" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Cómo calificaría la comunicación entre el personal del jardín de niños y los padres con respecto a los talleres?</label>
                            {comunicacionOptions.map((option) => (
                                <div key={option}>
                                    <label>
                                        <Field type="radio" name="comunicacion" value={option} />
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <ErrorMessage name="comunicacion" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Ha tenido alguna experiencia negativa o preocupación con respecto a los talleres? (Por favor, describa brevemente)</label>
                            <Field as="textarea" id="experienciaNegativa" name="experienciaNegativa" className="llisting-textare" />
                            <ErrorMessage name="experienciaNegativa" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Qué sugerencias tiene para mejorar la organización de los talleres?</label>
                            <Field as="textarea" id="sugerencias" name="sugerencias" className="llisting-textare" />
                            <ErrorMessage name="sugerencias" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Le gustaría participar activamente en algún taller como voluntario o recurso adicional?</label>
                            {['Sí', 'No', 'Tal vez, me gustaría obtener más información'].map((option) => (
                                <div key={option}>
                                    <label>
                                        <Field type="radio" name="voluntario" value={option} />
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <ErrorMessage name="voluntario" component="div" />
                        </div>

                        <div className="form-group">
                            <label>¿Cómo se enteró de los talleres disponibles en el jardín de niños?</label>
                            {enteradoOptions.map((option) => (
                                <div key={option}>
                                    <label>
                                        <Field type="radio" name="enterado" value={option} />
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <ErrorMessage name="enterado" component="div" />
                        </div>

                        <div className="form-group">
                            <label>En una escala del 1 al 10, ¿qué calificación general daría a los talleres ofrecidos en el jardín de niños? (Siendo 1 muy insatisfactorio y 10 excelente)</label>
                            <Field type="number" id="calificacion" name="calificacion" className="llisting" />
                            <ErrorMessage name="calificacion" component="div" />
                        </div>

                        <div className="form-group text-center pt-4">
                            <button type="submit" className="btn-kinder w-100 p-2">Enviar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
