import React from 'react';
import './Questions.css';
import QuestionContent from './QuestionContent';

export default function Question() {
    return (
        <div className='bg-encuesta'>
            <div className='container con-position d-flex justify-content-center'>
                <div className='row con-ins p-3'>
                    <div className='col-md-4 text-center pt-3'>
                        <img src="/img/logo-kinder.png" alt="" />
                    </div>
                    <div className='col-md-8 p-2'>
                        <div className='text-center'>
                            <h1 className='text-center'>Instrucciones</h1>
                        </div>
                        <p className='pt-4'>
                            Esperamos que estén bien. Queremos mejorar
                            la experiencia de sus hijos en el jardín de
                            niños. Por favor, participen en nuestra encuesta
                            en línea para proporcionarnos sus valiosas opiniones
                            y sugerencias. Sus comentarios son esenciales para nosotros.
                        </p>
                        <p className='pt-4'>
                            1.- Responda a las preguntas de la encuesta de manera sincera y objetiva.<br />
                            2.- Asegúrese de completar todas las preguntas obligatorias marcadas con un asterisco (*).<br />
                            3.- Puede proporcionar comentarios adicionales en la sección de comentarios si lo desea.<br />
                            4.- Haga clic en el botón "Enviar" al final de la encuesta para registrar sus respuestas.<br />
                        </p>
                    </div>
                </div>
            </div>

            <div className='container con-position d-flex justify-content-center pb-5'>
                <div className='row con-ins p-3'>
                    <div className='col-12 text-center pt-4'>
                        <h1 className='text-center'>Encuesta</h1>
                    </div>
                    <div className='col-12 col-md-6 p-2'>
                        <div className='pt-4'>
                            <QuestionContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}