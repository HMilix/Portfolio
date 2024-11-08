import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from "../components/ContactForm";

function About() {
    return (
        <div>
            <div className="flex justify-center flex-col">
                <h2 className="m-auto my-4 text-center text-4xl font-MADESoulmazeOutline">Contact</h2>
                <div className="container w-[50%] grid grid-cols-[0.10fr_0.01fr_1fr] gap-2">
                    <p>Discord</p>
                    <p className="justify-self-center">:</p>
                    <a>milix_</a>
                    <p>Github</p>
                    <p className="justify-self-center">:</p>
                    <a href="https://github.com/HMilix" className="text-blue-500 underline">github.com/HMilix</a>
                    <p>Gitlab</p>
                    <p className="justify-self-center">:</p>
                    <a href="https://gitlab.univ-lille.fr/axel.wilfart.etu"
                       className="text-blue-500 underline">gitlab.univ-lille.fr/axel.wilfart.etu</a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;