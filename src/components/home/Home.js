import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const videoElement = document.querySelector('video');

        if (videoElement) {
            videoElement.addEventListener('loadeddata', () => {
                setVideoLoaded(true);
                console.log("El video se ha cargado por completo");
            });
        }
    }, []);

    const videoComponent = (
        <div className="brightness">
            <video autoPlay={true} loop={true} muted={true} src="/video/video-kinder.mp4"></video>
        </div>
    );

    return (
        <div className="bg-video-wrap">
            {videoLoaded ? (
                <>
                    {videoComponent}
                    <div className="overlay"></div>
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
                </>
            ) : (
                <>
                    {videoComponent}
                    <div className="overlay"></div>
                    <div className="center-div text-center">
                        <div className="margin-top">
                            <div className=''>
                                <img src="/img/logo-kinder.png" className='img-cargando' alt="" />
                            </div>
                            <div className='text-wel'>
                                <p className="p-2">Cargando...</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
