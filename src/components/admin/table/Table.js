import React from 'react'
import './Table.css'
import Footer from '../../shared/footer/Footer'


export default function Table() {
    return (
        <div className='bg-login'>
            <div className='container-fluid con-position d-flex justify-content-center pb-5 pt-5'>
                <div className='row con-ins-table p-3'>
                    <div className='col-md-12 p-2'>
                        <div className='text-start'>
                            <h1 className='text-center'>Resultados</h1>
                        </div>
                        <p className='text-start' style={{ color: 'rgb(235, 235, 245)' }}>
                            Los resultados de la encuesta se muestran en porcentaje con respecto al
                            total de participantes. Cada opción tiene su propio porcentaje, lo que
                            refleja la preferencia o elección de la audiencia.</p>
                    </div>
                    <div className='col-md-12 p-2'>
                        <table>
                            <tr>
                                <th>Pregunta</th>
                                <th>Opción</th>
                                <th>Porcentaje</th>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 1</td>
                                <td>Opción 1</td>
                                <td>20%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>10%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>15%</td>
                            </tr>

                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td rowspan="5">Pregunta 2</td>
                                <td>Opción 1</td>
                                <td>40%</td>
                            </tr>
                            <tr>
                                <td>Opción 2</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Opción 3</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 4</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>Opción 5</td>
                                <td>25%</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
