import { useState, useEffect } from 'react';
import logotipo from '../assets/img/betalent-logo.svg';
import '../styles/loading.css';

const Loading = () => {
    const [loaded, setLoaded] = useState(document.readyState === 'complete');

    useEffect(() => {
        if (!loaded) {
            const handleLoad = () => {
                setTimeout(() => setLoaded(true), 500);
            };

            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [loaded]);

    if (loaded) return null;

    return (
        <div className="loading-overlay">
            <img src={logotipo} alt="Betalent Logo" className="loading-logo" width={200} height={"auto"} />
        </div>
    );
};

export default Loading;