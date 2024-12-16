function About() {
    return (
        <div>
            <div className="flex justify-center flex-col">
                <div className="flex flex-row font-MADESoulmazeOutline font-bold mx-auto text-4xl py-8">
                    <h1 className="">À PROPOS</h1>
                    <h1 className="pl-2 animate-blink">_</h1>
                </div>

                {/* ---------------- WHO I AM ? ---------------- */}
                <div className="my-8 divider divider-neutral place-self-center w-[90vw]">
                    <h1 className="m-auto my-4 text-center lg:text-5xl text-4xl font-MADESoulmaze">Qui suis-je ?</h1>
                </div>
                <p className="py-8 text-justify place-self-center text-wrap w-[70vw]">
                    Je suis <b>Axel Wilfart</b>, plus connu sous le nom de <b>Milix</b>, mon nom de créateur.
                    J'ai actuellement 20 ans et je suis <b>étudiant à l'université</b> de Lille en <b>BUT
                    informatique</b> (anciennement DUT).
                    Je veux faire de l'informatique mon métier car c'est un domaine qui <b>m'intéresse énormément</b>,
                    et que j'aimerais différencier mes passions de mon métier. En effet, <b>la création</b> de contenu
                    sur internet
                    me passionne, <b>Graphisme, Musique, Vidéo, Photo, 3D, Montage, Jeux</b> si c'est créatif et que
                    c'est sur internet.
                    Même <b>ce site est un exemple de créativité</b> : il utilise la <b>charte graphique</b> mise en
                    place pour ma chaîne.
                    Tout ce qui n'est pas "scolaire" / "universitaire" est appris sur mon temps libre et <b>entièrement
                    en autodidacte</b>,
                    car je suis de nature <b>très curieux</b>.
                </p>

                {/* ---------------- EXPERIENCES ---------------- */}
                <div className="my-8 divider divider-neutral place-self-center w-[90vw]">
                    <h1 className="m-auto my-4 text-center lg:text-5xl text-4xl font-MADESoulmaze">Éxperiences</h1>
                </div>
                <p className="py-8 text-justify place-self-center text-wrap w-[70vw]">
                    Pour ce qui est de l'expérience professionnelle et informatique, pour mon stage de troisième
                    j'ai eu la chance de faire une <b>stage à Norsys</b>. Mis à part quelques petits boulots par-ci
                    par-là, étant encore jeune
                    j'ai n'ai pas une grande connaissance du monde de l'entreprise. Mais ça ne serait tarder, ma
                    formation actuelle
                    oblige à faire <b>plusieurs mois de stages</b>. Cela dit j'ai fait un petit séjour de <b>Game
                    Design</b> pour les jeunes.
                </p>

                {/* ---------------- FORMATIONS ---------------- */}
                <div className="my-8 divider divider-neutral place-self-center w-[90vw]">
                    <h1 className="m-auto my-4 text-center lg:text-5xl text-4xl font-MADESoulmaze">Formations</h1>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <div className="overflow-x-auto scrollbar-hide">
                            <ul className="timeline w-fit">
                                <li>
                                    <div className="timeline-start timeline-box border-neutral">Brevet des collèges
                                    </div>
                                    <div
                                        className="timeline-end timeline-box border-neutral/15 shadow-none text-[0.5rem] text-neutral-content/15">(celui
                                        là est pas très utile en vrai)
                                    </div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="text-success h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <hr className="bg-primary"/>
                                </li>
                                <li>
                                    <hr className="bg-primary"/>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="text-success h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div className="timeline-end timeline-box border-neutral">Bac STI2D</div>
                                    <hr className="bg-primary"/>
                                </li>
                                <li>
                                    <hr className="bg-primary"/>
                                    <div className="timeline-start timeline-box border-neutral">BUT 1ère année</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="text-success h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <hr className="bg-primary"/>
                                </li>
                                <li>
                                    <hr className="bg-primary"/>
                                    <div className="timeline-end timeline-box border-neutral">BUT 2ème année</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="text-success h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <hr className="bg-primary"/>
                                </li>
                                <li>
                                    <hr/>
                                    <div className="timeline-start timeline-box border-neutral">BUT 3ème année</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="text-info h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16z M6 10a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 01-1.5-1.5z"
                                                clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <hr/>
                                </li>
                                <li>
                                    <hr/>
                                    <div className="timeline-end timeline-box border-neutral">Master ?</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="text-warning h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16z M10 6a2.5 2.5 0 00-2.5 2.5.75.75 0 001.5 0 1 1 0 112 0c0 .59-.355.933-.744 1.203-.422.292-.99.479-.99 1.297v.25a.75.75 0 001.5 0v-.25c0-.062.056-.154.244-.28.422-.292.99-.703.99-1.47A2.5 2.5 0 0010 6zm-.75 8a.75.75 0 101.5 0 .75.75 0 00-1.5 0z"
                                                clipRule="evenodd"/>
                                        </svg>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="py-8 text-justify w-[90vw] md:w-[70vw]">
                        Mon parcours et mes formations restent traditionnels. Un brevet, un
                        baccalauréat <b>STI2D</b> (Sciences et Technologies de l'Industrie et du Développement Durable),
                        une formation <b>PIX</b> (d'une utilité relative) et une <b>formation BUT Informatique</b> en 3
                        ans pour l'instant à mi-chemin.
                        Mis à part le parcours scolaire, je dispose du <b>permis B</b> et suis <b>véhiculé</b>.
                    </p>
                </div>

                <div className="my-8 divider divider-neutral place-self-center w-[90vw]"></div>

                <div className="my-4 flex flex-col lg:flex-row w-full">
                    {/* ---------------- SKILLS ---------------- */}
                    <div className="flex flex-grow flex-col place-items-center h-fit">
                        <h1 className="m-auto my-4 text-center lg:text-3xl text-2xl font-MADESoulmaze">Compétences</h1>
                        <p className="py-8 text-center place-self-center w-[90vw] md:w-[70vw] lg:w-[38.75vw]">
                            <b><u>Informatique / Professionel :</u></b> <br/>
                            Java - Jave EE - JavaFX <br/>
                            HTML <br/>
                            CSS <br/>
                            C <br/>
                            SQL / Postgresql <br/>
                            Méthodologie Agile <br/>
                            React* <br/>
                            Tailwindcss - DaisyUI <br/>

                            <br/> <br/>

                            <b><u>Autres compétences :</u></b> <br/>
                            Graphisme / Graphiste <br/>
                            Modélisation / Conception 3D <br/>
                            Compositeur* <br/>
                            Vidéaste <br/>
                            Photographe* <br/>
                            Régisseur Lumière <br/>
                        </p>
                        <p className="text-xs">*text</p>
                    </div>

                    <div className="divider lg:divider-horizontal divider-neutral w-[90vw] m-auto py-8"></div>

                    {/* ---------------- INTERESTS ---------------- */}
                    <div className="flex flex-grow flex-col place-items-center h-fit">
                        <h1 className="m-auto my-4 text-center lg:text-3xl text-2xl font-MADESoulmaze">Centres
                            d'intérêts</h1>
                        <p className="py-8 text-justify place-self-center w-[90vw] md:w-[70vw] lg:w-[38.75vw] h-fit">
                            Du <b>graphisme</b> à la <b>création de jeux</b> en passant par <b>la musique, la vidéo, la photo, le montage, la
                            modélisation et conception 3D </b> si cela se fait sur ordinateur, que c'est créatif, c'est digne de mon intérêt.<br/>
                            Dans les détails : j'ai eu besoin du <b>graphisme</b> pour mon <b>logo</b>, <b>ma bannière</b> ainsi que pour les <b>miniatures</b> pour ma <b>chaîne Youtube</b>.
                            Avec ces expériences, j'ai commençé à <b>concevoir des affiches pour ma ville</b> puisque mon père était président du Comité d'Animation.<br/>
                            <b>La vidéo et la photo</b> (bien que néophyte dans ce dernier domaine) - mixé avec le graphisme - m'ont permis de faire quelques projets comme
                            <b>les covers</b> et <b>vidéos de mes musiques</b>.<br/>
                            La <b>modélisation</b> et la <b>conception 3D </b>
                            sont principalement centrés sur le jeu Minecraft ; en faisant des "renders", je me suis aperçu que c'était
                            <b> relativement complexe</b> et <b>difficile d'accès</b>. J'ai donc <b>conçu des modèles gratuits</b> et <b>tout public</b>, rendant plus accessible la création 3D.
                            Même si cela reste globalement centré sur le jeu Minecraft, les <b>techniques</b> utilisées sont <b>applicables</b> pour de la <b>création 3D générale</b>.<br/>
                            <b>Ce site web</b> est aussi un exemple de créativité. En effet, il <b>combine le graphisme</b> et le <b>dévelopment web</b>.
                            Ma curiosité m'a poussé à utiliser un nouveau language de programmation qui est le <b>React</b> (avec <b>Tailwindcss</b> et <b>DaisyUI</b> pour le côté graphique).<br/>
                            J'y ai consacré mon temps libre, en <b>autodidacte</b>, aucun cours, aucune formation,
                            juste de la curiosité - <em>quelques heures de galère, c'est vrai</em> - et des tutos, m'ont permis d'<b>être créatif sur internet</b>.
                        </p>
                    </div>
                </div>

                {/* ---------------- MISC. ---------------- */}
                <div className="divider divider-neutral place-self-center w-[90vw]">
                    <h4 className="m-auto my-4 text-center text-xl font-MADESoulmaze">Autres</h4>
                </div>
                <div className="my-8 container w-[50%] grid grid-cols-[0.10fr_0.01fr_1fr] gap-2">
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
        </div>
    );
}

export default About;