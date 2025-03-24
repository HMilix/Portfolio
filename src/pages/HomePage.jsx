import {useEffect} from "react";
import {themeChange} from "theme-change";
import CollapsibleCard from "../components/CollapsibleCard";
import CollapsibleComponent from "../components/CollapsibleComponent";
import WelcomeToast from "../components/WelcomeToast";

function HomePage({ changePage }) {
    useEffect(() => {
        themeChange(false);
    }, []);
    return (
        <>
            <div className="App overflow-x-hidden flex items-center justify-center flex-col">
            <div className="inset-0 relative w-[80vw] mt-8">
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 from-[12%] to-transparent pointer-events-none"></div>
                <button onClick={() => changePage('about')}>
                    <img src="images/aboutPreview.png" alt="about preview" className="pointer-events-none w-full"/>
                </button>
            </div>
                <div className="flex flex-row font-MADESoulmazeOutline font-bold mx-auto lg:text-4xl text-3xl py-8">
                    <h1 className="">MES PROJETS</h1>
                    <h1 className="pl-2 animate-blink">_</h1>
                </div>

                <WelcomeToast/>

                <div className="h-fit w-full">
                    <div className="container mx-auto mb-4">
                        <CollapsibleComponent
                            titleClosed="Jeu ludopédagogique"
                            titleOpen="Réalisation d'un jeu ludopédagogique en tour par tour"
                            content="En 2023 j'ai réalisé un jeu ludopédagogique en tour par tour en Java.
                                    Le jeu se présente sous la forme d'une sorte de RPG avec des objets de différentes statistiques,
                                    un marchand et des combats. Le côté ludopédagogique se passe lors du combat. Lors d'un combat,
                                    des questions prédéfinies sont posées à l'utilsateur et d'autre questions sont entièrement générées."
                            img="./images/projects/2023-SAE1.1.png"
                            imgAlt="Image d'un combat entre un héro et un monstre"
                            link="https://github.com/HMilix/2023-SAE1.1"
                            showbutton={true}/>
                        <CollapsibleComponent
                            titleClosed="Site web problème de transport"
                            titleOpen="Réalisation d'un site web pour répondre à un problème de transport (fictif)"
                            content="En binôme, nous avons imaginé une entreprise fictive qui propose des moyens de transports
                                    divers et variés pour les employés d'une autre entreprise. Accompagné de rendu de 'Gestion Organisation',
                                    nous avons réalisé un site web en HTML / CSS pour notre entreprise fictive."
                            img="./images/projects/2023-SAE-RdB-EE.png"
                            imgAlt="Image d'un site web"
                            link="https://github.com/HMilix/2023-SAE-RdB-EE"
                            showbutton={true}/>
                        <CollapsibleComponent
                            titleClosed="Application / exploration algorithmique"
                            titleOpen="Développement d'une application et exploration algorithmique"
                            content="En groupe de 3, nous avons exploité un CSV pour en extraire les données et prendre les plus
                            courts chemins selon certains critères listés."
                            img="./images/projects/2024-SAE2.01-2.02.png"
                            imgAlt="Interface de l'application"
                            link="https://github.com/HMilix/2024-SAE2.01-2.02"
                            showbutton={true}/>
                        <CollapsibleCard
                            images={[
                                {src: './images/projects/Survivor/Survivor-logo.png', alt: 'Logo du jeu Survivor'},
                                {src: './images/projects/Survivor/TitleScreen.png', alt: 'Écran titre du jeu'},
                                {src: './images/projects/Survivor/classChose.png', alt: 'Choix de la classe'},
                                {src: './images/projects/Survivor/FightStart.png', alt: 'Début du combat'},
                                {src: './images/projects/Survivor/FightMid.png', alt: 'Milieu de combat'},
                                {src: './images/projects/Survivor/WinScreen.png', alt: 'Écran du gagnant'},
                                {src: './images/projects/Survivor/classement.png', alt: 'Classement des joueurs'},
                            ]}
                            titleOpen="Réalisation d'un jeu en tour par tour en utilisant la méthodologie Agile"
                            titleClosed="Jeu tour par tour en Agile"
                            content="Début de deuxième année, nous avons conçu en groupe (dans lequel personne ne se connaissait) un jeu
                            ou une application en utilisant la méthode Agile Scrum Master. Notre groupe a choisit de créer un jeu de combat
                            en tour par tour avec plusieurs classes : Guerrier, Mage et Voleur. Le projet a été réalisé en 3 jours consécutif seulement."
                            link="https://example.com"
                            showbutton={true}/>
                        <CollapsibleComponent
                            titleClosed="Portfolio"
                            titleOpen="Ce site web même :)"
                            content={<span>Ai-je vraiment besoin d'expliquer ? C'est un portfolio ! Celui que vous regardez actuellement ! <em>(si si j'te jure)</em></span>}
                            img="./images/projects/Portfolio.png"
                            imgAlt="Image de ce même site web"
                            link="https://github.com/HMilix/Portfolio"
                            showbutton={true}/>
                        <CollapsibleComponent
                            titleClosed="Application de classification de données"
                            titleOpen="Réalisation d'un logiciel de classification de données à partir d'un CSV"
                            content="Nous avons conçu une application en JavaFX par équipe de 4 où le but était de classifier et d'afficher
                            des données chargées d'un CSV sur un nuage de points. Le programme a la possibilité de choisir la plage de valeurs
                            des axes X et Y et d'ajouter des points sur le nuage."
                            img="./images/projects/2024-SAE3.3.png"
                            imgAlt="Logiciel de visualisation de donnée avec un graphique"
                            link="https://github.com/HMilix/2024-SAE3.3"
                            showbutton={true}/>
                        <CollapsibleComponent
                            titleClosed="Application de communication"
                            titleOpen={`Réalisation d'une application de communication à la "Discord"`}
                            content={`Par équipe de deux, nous avons créé une application de communication de type "fils de discussion", resemblant
                                à Discord. Ce projet à été réalisé en quelques jours seulement et utilise Postgresql avec une API Rest pour le backend et
                                Tailwindcss avec DaisyUI pour le frontend.`}
                            img="./images/projects/2025-SA-S4.A02.1.png"
                            imgAlt="Application de communication par fils"
                            link="https://github.com/HMilix/2025-SA-S4.A02.1"
                            showbutton={true}/>
                    </div>
                </div>

                <div className="divider font-MADESoulmazeOutline font-bold lg:text-4xl text-3xl">PROJETS PERSONNELS</div>

                <div className="h-fit w-full">
                    <div className="container mx-auto mb-8">
                        <CollapsibleCard
                            images={[
                                {src: './images/projects/Personal/Graph/Logo 2.gif', alt: 'Mon logo stylisé et animé'},
                                {
                                    src: './images/projects/Personal/Graph/Retrocappelleweb.png',
                                    alt: 'Affiche de rétro Cappelle'
                                },
                                {
                                    src: './images/projects/Personal/Graph/Buisness-Card-Aperture-Present.png',
                                    alt: 'Image de présentation de carte Aperture Science fictive'
                                },
                                {
                                    src: './images/projects/Personal/Graph/Morphine-Concert-120x176.png',
                                    alt: 'Affiche de concert'
                                },
                                {
                                    src: './images/projects/Personal/Graph/Ozkilt-Rollup.png',
                                    alt: `Rollup de l'entreprise Ozkilt`
                                },
                            ]}
                            titleClosed="Graphisme"
                            titleOpen="Graphisme et Motion design"
                            content=
                                {<span>De nature curieuse, j'ai eu l'occasion de pouvoir faire du graphisme.
                                    Cela m'a permis d'enrichir ma chaîne Youtube et d'imaginer, le graphisme ma permit d'aiguiser ma regard critique sur l'art digital.
                                    Mixé avec l'animation, le rapprochement avec le Motion Design se fait naturellement et cela m'a permit de concevoir des logos par exemples.
                                    <br/><br/>
                                    Image 1 - Logo animé : réalisé sous after effect en quelques jours, c'est un exemple de motion design.<br/>
                                    Image 2 - Affiche Retro'Cappelle 2 : affiche d'un évènement de ma ville.<br/>
                                    Image 3 - Carte Aperture Science : des cartes de visite fictives pour l'entreprise fictive Aperture Science<br/>
                                    Image 4 - Affiche Morphine : affiche d'un évènement de ma ville.<br/>
                                    Image 5 - Rollup Ozkilt : rollup de l'entreprise Ozkilt Artisanal, créateurs de kilts.<br/>
                                </span>}
                            link="."
                            showbutton={false}/>
                        <CollapsibleCard
                            images={[
                                {
                                    src: './images/projects/Personal/3D/Roobis-LivingRoom.png',
                                    alt: `Image d'un petit robot dans un salon`
                                },
                                {
                                    src: './images/projects/Personal/3D/Roobis-Desk.png',
                                    alt: `Image d'un petit robot sur un clavier devant un ordinateur`
                                },
                                {
                                    src: './images/projects/Personal/3D/Roobis-Water.png',
                                    alt: `Image d'un petit robot jouant avec un robinet`
                                },
                                {
                                    src: './images/projects/Personal/3D/Buisness-Card-Aperture-Final.png',
                                    alt: `Rendu de cartes de visite fictive d'Aperture Science`
                                },
                                {
                                    src: './images/projects/Personal/3D/Wallpaper-Mine-S.png',
                                    alt: `Fond d'écran d'un personnage Minecraft dans les mines`
                                },
                                {
                                    src: './images/projects/Personal/3D/Tears-Rig.png',
                                    alt: `Image d'un rig de larme pour Minecraft`
                                },
                                {
                                    src: './images/projects/Personal/3D/Cape-Preview.png',
                                    alt: `Image d'un rig de cape pour Minecraft`
                                },
                                {
                                    src: './images/projects/Personal/3D/BandanaRig.jpg',
                                    alt: `Image d'un rig de bandana pour Minecraft`
                                },
                            ]}
                            titleClosed="3D"
                            titleOpen="Modélisation, conception et mise en scène 3D"
                            content=
                                {<span>En corrélation avec l'animation et le graphisme, la modélisation et la conception 3D me suivent.
                                    En partant d'animations et de rendus basés sur le jeu Minecraft en utilisant les modèles que la communauté proposait,
                                    avec le temps et de la persévérance, j'ai commencé à réaliser moi même ce types modèles. Ma curiosité m'as également poussé à concevoir de la
                                    3D "générale" et pas centré uniquement sur Minecraft.
                                    <br/><br/>
                                    Image 1 - Roobis dans un salon : Roobis est un petit robot découvrant le monde des humains.<br/>
                                    Image 2 - Roobis devant un ordinateur.<br/>
                                    Image 3 - Roobis découvrant un robinet<br/>
                                    Image 4 - rendu réaliste : Essai de rendu réaliste avec des carte de visite fictives, vues précédemment.<br/>
                                    Image 5 - fond d'écran : Mise en scène d'un personnage Minecraft dans les mines.<br/>
                                    Image 6 - modèle de larmes : Modèle 3D de larmes pour des personnages Minecraft, utilisable par tous.<br/>
                                    Image 7 - modèle de cape : Modèle 3D de cape pour des personnages Minecraft, utilisable par tous.<br/>
                                    Image 8 - modèle de bandana & rendu : Modèle 3D de bandana pour des personnages Minecraft, utilisable par tous.<br/>
                                </span>}
                            link="."
                            showbutton={false}/>
                        <CollapsibleComponent
                            titleClosed="Musique"
                            titleOpen="Compostion de musique"
                            content={<span>
                                    Fan invétéré, il était naturel pour moi de m'aventurer dans ce domaine.
                                    J'ai essayé de faire de la musique depuis tout petit, mais évidemment, étant trop jeune le résultat n'était pas.. dison correct.
                                    Néanmoins, je n'ai jamais arrêté et je continue d'en composer encore aujourd'hui, préparant même un album.
                                <br/>
                                <br/>

                            </span>}
                            img="./images/projects/Personal/Others/Music.png"
                            imgAlt="Image de ma chaîne Youtube avec des vidéos de musique"
                            link="."
                            showbutton={false}/>
                        <CollapsibleCard
                            images={[
                                {src: './images/projects/Personal/Others/Unoculus.gif', alt: `Image de présentation de l'Unoculus`},
                                {src: './images/projects/Personal/Others/Unoculus.png', alt: `Image de l'Unoculus en entier`},
                                {src: './images/projects/Personal/Others/UnoculusSystem.png', alt: `Image d'un des nombreux système de l'Unoculus`},
                                {src: 'https://i.imgur.com/AiHGzvQ.gif', alt: `Animation de l'Unoculus passant devant un œil géant.`}
                            ]}
                            titleClosed="Unoculus"
                            titleOpen="Unoculus (Un œil) = Uno (un) + Oculus (œil)"
                            content={<span>
                                Le sujet "Unoculus" est un peu spécial car, en soit, c'est un contenu supplémentaire pour le jeu Barotrauma et l'un de mes plus gros projet. J'explique cela en détails.<br/>
                                Barotrauma est un jeu simulation de sous-marin 2D en co-op intégrant des éléments de survival horror.<br/>
                                De plus, Barotrauma inclut également un créateur de sous-marin et vous l'aurez deviné, en tant que créatif, je me devais d'en créer un.
                                Après plusieurs essais de sous-marins, tous avec quelque chose d'innovant pour la richesse le jeu,
                                <br/><em>surgit l'Unoculus et la surprise de son succès immédiat et inattendu. </em><br/>
                                J'ai mis plusieurs mois à réaliser ce sous-marin tellement il est complexe et fourmille de détails. <br/>
                                Le créateur de sous-marin est simple à comprendre mais très dur à maitriser, car c'est un mélange des maths "classiques",
                                d'algorithmie et d'algèbre de boole (avec un peu d'ingénierie électrique aussi).
                                Le tout mixé par des câblages complexes (voir image 3).<br/>
                                Une fois le sous-marin terminé, il faut aussi faire la communication et le rendre ouvert au public.
                                C'est ici que mes autres compétences entrent en jeu.<br/>
                                Comme vous pouvez le voir sur la première et la dernière images, l'œil à été réalisé en 3D, le tout édité sur Photoshop
                                et animé sur After Effect (le "O" de Unoculus designé sur Illustrator), combinant donc 3D, graphisme et animation/motion design.<br/>
                                Le résultat final semble plaire à la communauté étant donné que en quelques jours,
                                il a atteint la 15ème place mondiale sur ~30 000 sous-marins créés.
                                <br/><br/>
                                <em>J'en profite pour remercier mes amis qui m'ont aidé au travers de ce projet : <br/>
                                    Artaliana, Nas4xou, Only_Shinoa, Wyvern, Luukex, Attila</em>
                            </span>}
                            link="https://steamcommunity.com/sharedfiles/filedetails/?id=2946617451"
                            showbutton={true}/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomePage;