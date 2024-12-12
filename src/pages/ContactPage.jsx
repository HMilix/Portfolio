import ContactForm from '../components/ContactForm';

function Contact() {
    
    return (
        <div>
            <div className="flex justify-center flex-col">
                <div className="flex flex-row font-MADESoulmazeOutline font-bold mx-auto text-4xl py-8">
                    <h1 className="">CONTACT</h1>
                    <h1 className="pl-2 animate-blink">_</h1>
                </div>
                <div className="container w-[50%] grid grid-cols-[0.10fr_0.01fr_1fr] gap-2">
                    <p>Email</p>
                    <p className="justify-self-center">:</p>
                    <a>axel.wilfart.etu@univ-lille.fr</a>
                    <p>Discord</p>
                    <p className="justify-self-center">:</p>
                    <a>milix_</a>
                    <p>Linkedin</p>
                    <p className="justify-self-center">:</p>
                    <a href="https://www.linkedin.com" className="text-blue-500 underline">linkedin.com</a>
                </div>
                <div className="mb-8">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Contact;