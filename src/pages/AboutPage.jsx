import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <div className="flex justify-center flex-col">
                <h2 className="m-auto my-4 text-center text-4xl font-MADESoulmazeOutline">À PROPOS</h2>
                <div className="my-8 divider divider-neutral">
                    <h1 className="m-auto my-4 text-center text-5xl font-MADESoulmaze">Qui suis-je ?</h1>
                </div>

                <div className="my-8 divider divider-neutral">
                    <h1 className="m-auto my-4 text-center text-5xl font-MADESoulmaze">Éxperiences</h1>
                </div>

                <div className="my-8 divider divider-neutral">
                    <h1 className="m-auto my-4 text-center text-5xl font-MADESoulmaze">Formations</h1>
                </div>

                <div className="my-4 flex w-full">
                    <div className="flex h-20 flex-grow place-items-center">
                        <h1 className="m-auto my-4 text-center text-3xl font-MADESoulmaze">Compétences</h1>
                        <div className="radial-progress" style={{"--value": 0}} role="progressbar">0%</div>
                        <div className="radial-progress" style={{"--value": 20}} role="progressbar">20%</div>
                        <div className="radial-progress" style={{"--value": 60}} role="progressbar">60%</div>
                        <div className="radial-progress" style={{"--value": 80}} role="progressbar">80%</div>
                        <div className="radial-progress" style={{"--value": 100}} role="progressbar">100%</div>
                    </div>
                    <div className="divider divider-horizontal divider-neutral"></div>
                    <div className="grid h-20 flex-grow place-items-center">
                        <h1 className="m-auto my-4 text-center text-3xl font-MADESoulmaze">Centres d'intérêts</h1>
                    </div>
                </div>

                <div className="divider divider-neutral">
                    <h4 className="m-auto my-4 text-center text-xl font-MADESoulmaze">Autres</h4>
                </div>
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