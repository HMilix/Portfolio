import {useEffect, useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            alert('Veuillez valider le reCAPTCHA.');
            return;
        }

        setIsSubmitting(true);

        const templateParams = {
            name,
            email,
            message,
            'g-recaptcha-response': recaptchaToken,  // Ajout du token reCAPTCHA
        };

        emailjs
            .send(
                'service_0rgobeo',
                'template_5ydhz3p',
                templateParams,
                'uI3Wpdeknaz2z7kwN'
            )
            .then(() => {
                alert('Message envoyé avec succès !');
                setName('');
                setEmail('');
                setMessage('');
                sessionStorage.clear();
                setRecaptchaToken(null);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi :', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="bg-secondary text-secondary-content card py-8 pl-4 pr-12 m-auto my-8 lg:w-3/4 w-[90%] gap-2">
            <form onSubmit={handleSubmit}
                  className="contact-form grid lg:grid-cols-[0.11fr_1fr] grid-cols-[0.15fr_1fr] gap-4">
                <label htmlFor="name" className="self-center justify-self-end">
                    Nom
                </label>
                <input
                    className="input input-bordered input-info w-[14rem]"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email" className="self-center justify-self-end">
                    Email
                </label>
                <input
                    className="input input-bordered input-info w-[14rem]"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="message" className="self-start justify-self-end">
                    Message
                </label>
                <textarea
                    className="textarea textarea-info"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required/>

                <div className="col-span-2 flex justify-center">
                    <ReCAPTCHA
                        sitekey="6LdCsJoqAAAAAAXTK7-MmTxmLpXN70dJUALS7plZ"
                        onChange={handleRecaptchaChange}
                    />
                </div>

                <div className="col-span-2 flex justify-center">
                    <button
                        className="btn btn-info mt-4"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                </div>
            </form>
        </div>

    );
}

export default ContactForm;