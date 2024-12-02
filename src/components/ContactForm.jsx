import {useEffect, useState} from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:axel.wilfart.etu@univ-lille.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + "\nEmail: " + email)}`;
        window.location.href = mailtoLink;
        setName('');
        setEmail('');
        setMessage('');
        sessionStorage.clear();
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
                    required
                />

                <label htmlFor="email" className="self-center justify-self-end">
                    Email :
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
                    Message :
                </label>
                <textarea
                    className="textarea textarea-info"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                {/* Bouton Envoyer */}
                <div className="col-span-2 flex justify-center">
                    <button className="btn btn-info mt-4" type="submit">
                        Envoyer
                    </button>
                </div>
            </form>
        </div>

    );
}

export default ContactForm;