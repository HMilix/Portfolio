import {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const captchaRef = useRef(null);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };


    useEffect(() => {
        const savedName = sessionStorage.getItem('name');
        const savedEmail = sessionStorage.getItem('email');
        const savedMessage = sessionStorage.getItem('message');

        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
        if (savedMessage) setMessage(savedMessage);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('name', name);
    }, [name]);

    useEffect(() => {
        sessionStorage.setItem('email', email);
    }, [email]);

    useEffect(() => {
        sessionStorage.setItem('message', message);
    }, [message]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Veuillez valider le reCAPTCHA avant de soumettre le formulaire.');
            return;
        }

        setIsSending(true);

        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        try {
            await emailjs.send(
                'service_0rgobeo',
                'template_ydai4n9',
                templateParams,
                'uI3Wpdeknaz2z7kwN'
            );
            alert('Email envoyé avec succès !');
            setName('');
            setEmail('');
            setMessage('');
            setCaptchaValue(null);
            sessionStorage.clear();
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('message');
            captchaRef.current.reset();
            setCaptchaValue(null);
        } catch (error) {
            alert('Erreur lors de l\'envoi de l\'email. Réessayez plus tard.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="bg-secondary text-secondary-content card py-8 pl-4 pr-12 m-auto my-8 w-3/4 gap-2">
            <form onSubmit={handleSubmit}
                  className="contact-form grid lg:grid-cols-[0.11fr_1fr] grid-cols-[0.15fr_1fr] gap-4">
                <label htmlFor="name" className="self-center justify-self-end">
                    Nom :
                </label>
                <input
                    className="input input-bordered input-info w-[14rem]"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                <label htmlFor="email" className="self-center justify-self-end">
                    Email :
                </label>
                <input
                    className="input input-bordered input-info w-[14rem]"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                <label htmlFor="message" className="self-start justify-self-end">
                    Message :
                </label>
                <textarea
                    className="textarea textarea-info"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required/>

                <div className="col-span-2 flex justify-center">
                    <ReCAPTCHA
                        ref={captchaRef}
                        sitekey="6LdCsJoqAAAAAAXTK7-MmTxmLpXN70dJUALS7plZ"
                        onChange={handleCaptchaChange}
                    />
                </div>

                {/* Bouton Envoyer */}
                <div className="col-span-2 flex justify-center">
                    <button
                        className={`btn btn-info mt-4 ${isSending ? "loading" : ""}`}
                        type="submit"
                        disabled={isSending}>
                        {isSending ? "Envoi..." : "Envoyer"}
                    </button>
                </div>
            </form>
        </div>

    );
}

export default ContactForm;