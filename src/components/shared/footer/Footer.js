import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className=' container-fluid bg-footer'>
            <div class="row pb-2">

                <div class="col-md-8 text-center">
                    <div class="p-2 mt-3">
                        <span className='pe-1'> Todos los Derechos Reservados © 2023 | Community Technology | Desarrollado por BinasCode </span>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="row p-2 text-center mt-1">

                        <div className='col-md-6 d-flex justify-content-center'>
                            <div class="p-2">
                                <img src="/img/logoBinasCode.png" width={30} alt="" />
                            </div>
                            <div class="p-2">
                                <a href='https://binascode.com/' target='_blank' rel="noreferrer"> www.binascode.com</a>
                            </div>
                        </div>

                        <div className='col-md-6 d-flex justify-content-center'>
                            <div class="p-2">
                                <img src="/img/facebook.png" width={30} alt="" />
                            </div>
                            <div class="p-2">
                                <a href='https://www.facebook.com/profile.php?id=100092163859160' target='_blank' rel="noreferrer">/BinasCode</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
