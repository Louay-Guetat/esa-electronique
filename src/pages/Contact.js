import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../css/pages/contact.css'

const Contact = () =>{
    const form = useRef()
    const sendEmail = (e) =>{
        e.preventDefault();
        
        emailjs.sendForm(process.env.GMAIL_API_KEY, process.env.TEMPLATE_API_KEY, form.current, process.env.CREADENTIALS_KEY)
        .then(() => {
            toast.success('Votre Mail a été envoyer avec succés!', {
                position: toast.POSITION.BOTTOM_CENTER
            });

            const name = document.getElementById('nom')
            const email = document.getElementById('email')
            const sujet = document.getElementById('sujet')
            const phone = document.getElementById('phone')
            const message = document.getElementById('message') 

            if (name) name.value = '';
            if (email) email.value = '';
            if (sujet) sujet.value = '';
            if (phone) phone.value = '';
            if (message) message.value = '';
        }, () => {
            toast.error('Une erreur inattendue est survenue lors de l\'envoi du mail', {
                position: toast.POSITION.BOTTOM_CENTER
            })
        });
    }

    return(
        <div id='contact' className='contact'>
            <ToastContainer style={{ zIndex: 9999 }} />
            <div className='in-touch'>
                <h1> Prendre Contact</h1>
                <form ref={form} onSubmit={sendEmail}> 
                    <div className='inputs-style'> 
                        <input id='nom' type='text' placeholder='Nom *' name='user_name' required/>
                        <input id='email' type='text' placeholder='Email *' name='user_email' required/>
                    </div>
                    <div className='inputs-style'> 
                        <input id='sujet' type='text' placeholder='Sujet *' name='Subject' required/>
                        <input id='phone' type='text' placeholder='Numéro de Téléphone' name='user_phone' />
                    </div>
                    <textarea id='message' placeholder='Votre Message *' name='message' required/>
                    <button type='submit'> Envoyer message </button>
                </form>
            </div>
            <div className='localisation'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1896.5730285435461!2d-16.000205000000005!3d18.064792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe964d9c24ce421f%3A0xfec3cd36b7d2b7f9!2sAve%20Kennedy%2C%20Mauritanie!5e0!3m2!1sfr!2stn!4v1704448697200!5m2!1sfr!2stn"
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
    )
}

export default Contact;