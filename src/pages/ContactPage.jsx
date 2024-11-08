import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
    
    return (
        <div>
            <div className="flex justify-center flex-col my-7">
                <h2 className="m-auto text-center text-4xl font-MADESoulmazeOutline">Contact</h2>
                <div className="container w-[50%] flex flex-col">
                    <div>
                        <t>Email: </t>  
                        <a>axel.wilfart.etu@univ-lille.fr</a>
                    </div>
                    <div>
                        <t>Discord: </t>
                        <a>milix_</a>
                    </div>
                    <div>
                        <t>Github: </t>
                        <a href="https://github.com/HMilix" className="text-blue-500 underline">github.com/HMilix</a>
                    </div>
                    <div>
                        <t>Gitlab: </t>
                        <a href="https://gitlab.univ-lille.fr/axel.wilfart.etu" className="text-blue-500 underline" >gitlab.univ-lille.fr/axel.wilfart.etu</a>
                    </div>
                </div>
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;