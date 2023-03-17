import { Link } from 'react-router-dom';
import ErrorData from '../page/ErrorData'
import Loader from '../components/Loader'
import { useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import SomeProjets from '../datas/projets'
import '../sass/pages/_projets.scss'



function Projets () {

    const [projet, SetProjet] = useState(SomeProjets)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
     }, []);

    if(!projet) return <ErrorData />

    return (
        <div className="projets">
            <div className='projet--flex'>
                <h2 id='/#projets'>Projets</h2>
                <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
                    {isLoading ?
                        <Loader />
                        :
                        <section>
                            {projet.map((projet, index) => (
                                <div className='projet' key={`${projet.id}-${index}`}>
                                    <div className='image__projet'>
                                        <img src={projet.cover} alt={projet.alt}/>
                                    </div>
                                    <div className='text__projet'>
                                        <span>{projet.name.toUpperCase()}</span>
                                        <p>{projet.comment}</p>
                                        <button type='button' className='button' id='button'>
                                            <Link to={projet.src} target="_blank" >
                                                Voir ce projet sur Github
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </section>
                    }
                </ErrorBoundary>
            </div>
        </div>
    );
};



export default Projets;