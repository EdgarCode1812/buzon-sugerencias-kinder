import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className="bg-video-wrap">
            <div className="brightness">
                <video autoPlay={true} loop={true} muted={true} src="/video/video-kinder.mp4">
                </video>
            </div>

            <div className="overlay">
            </div>
            <div className="center-div text-center">
                <div className="margin-top">
                    <div className=''>
                        <img src="/img/logo-kinder.png" alt="" />
                    </div>
                    <div className='text-wel'>
                        <p className="p-2">Bienvenido al buzón de sugerencias</p>
                    </div>
                    <div className='btn-start'>
                        <Link to="/Encuesta" className="btn btn-primary btn-lg pt-2 pb-2 ps-4 pe-4"> Iniciar </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
