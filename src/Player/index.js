// Core
import React, { useState, useRef } from 'react';

// Instruments
import './styles.css';

import video from './video.mp4';

export const Player = () => {
    const [ isPlaying, setIsPlaying ] = useState(false);

    /**
     * Создаём реф для элемента video.
     * Реф в React — это прямой доступ к html-элементу.
     * С его помощью мы сможем управлять видеоплеером в явном виде.
     */
    const videoRef = useRef(null);

    /* Включаем или выключаем проигрывание видео. */
    const togglePlay = () => {
        const method = videoRef.current.paused ? 'play' : 'pause';

        videoRef.current[ method ]();
        setIsPlaying(method === 'play');
    };

    /* Прокручиваем прогресс проигрывания. */
    const skip = (event) => {
        const seconds = event.target.dataset.skip;

        videoRef.current.currentTime += Number.parseFloat(seconds);
    };

    const playControl = isPlaying ? <>&#10074;&#10074;</> : <>&#9654;</>;

    return (
        <div className = 'player'>
            <video
                ref = { videoRef }
                src = { video }
                onClick = { togglePlay }
            />
            <div className = 'controls'>
                <div className = 'progress'>
                    <div className = 'filled' />
                </div>
                <button
                    title = 'Toggle Play'
                    onClick = { togglePlay }>
                    {playControl}
                </button>
                <input
                    className = 'slider'
                    max = '1'
                    min = '0'
                    name = 'volume'
                    step = '0.05'
                    type = 'range'
                />
                <button
                    onClick = { skip }
                    data-skip = '-10'>
                    « 10s
                </button>
                <button
                    onClick = { skip }
                    data-skip = '25'>
                    25s »
                </button>
                <button>&#10021;</button>
            </div>
        </div>
    );
};
