import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import FormInput from '../components/Form/FormInput';
import TextArea from '../components/Form/TextArea';
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/pages/_contact.scss';

const Contact = () => {
    const form = useRef();
    const history = useNavigate()
    const [textareaValues, setTextAreaValues] = useState('')
    const [values, setValues] = useState({
        nom: "",
        mail: "",
    })

    const inputs = [
        {
            id: "name",
            label: 'name',
            name: 'name',
            type: 'text',
            maxLength: '15',
            errorMessage: " The last name should be 3-15 characters, allow spaces between words and shouldn't include any special character or a nummber !",
            required: true,
            pattern: '^[A-Za-z ]{3,15}$'
        }, {
            id: "email",
            name: 'email',
            label: 'email',
            type: 'email',
            errorMessage: "The email must be valable",
            maxLength: '15',
            required: true,
            pattern: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i'
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    function refreshPage() {
        window.location.reload(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_API_SERVICE, process.env.REACT_APP_API_TEMP, form.current, process.env.REACT_APP_API_PUBLIC)
            .then((result) => {
                if (result.status === 200) {
                    alert("Votre message a bien été envoyé")
                    refreshPage();
                } else {
                    alert("Une erreur est survenue veuillez réessayer plus tard");
                    history('/')
                }
            }, (error) => {
                console.log(error);
            });
        form.current.reset()
    }

    return (
        <motion.div
            className='container'
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
                duration: .3,
                ease: "easeInOut",
            }}
        >
            <Header />
            <main className="main-contact">
                <h1>Contact</h1>
                <div className="formulaire">
                    <div className="form">
                        <form className='for-form' ref={form} onSubmit={handleSubmit}>
                            {
                                inputs.map((input) => (
                                    <FormInput key={input.id} {...input} value={values[input.name] || ''} onChange={onChange} className="form-input" />
                                ))
                            }
                            <TextArea placeholder="Laissez-moi un message ainsi qu'un numéro de téléphone." setTextAreaValues={setTextAreaValues} value={textareaValues} />
                            <button type="submit" className='btn-form'>Envoyer</button>
                        </form>
                        <Link
                            to='https://github.com/KABUYA-SINA'
                            className='btn-link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button type='button' className='btn'>
                                Github
                            </button>
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </motion.div>
    )
}

export default Contact