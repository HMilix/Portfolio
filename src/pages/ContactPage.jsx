import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
    
    return (
        <div>
            <div className="flex justify-center flex-col">
                <h2 className="m-auto my-4 text-center text-4xl font-MADESoulmazeOutline">Contact</h2>
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
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;