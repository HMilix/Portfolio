import Footer from "../components/Footer";
import {useEffect} from "react";
import {themeChange} from "theme-change";
import CollapsibleCard from "../components/CollapsibleCard";
import CollapsibleComponent from "../components/CollapsibleComponent";
import WelcomeToast from "../components/WelcomeToast";

function HomePage() {
    useEffect(() => {
        themeChange(false);
    }, []);
    return (
        <>
            <div className="App overflow-x-hidden flex items-center justify-center flex-col">
                <div className="flex flex-row font-MADESoulmazeOutline font-bold mx-auto text-4xl py-8">
                    <h1 className="">MES PROJETS</h1>
                    <h1 className="pl-2 animate-blink">_</h1>
                </div>

                <WelcomeToast/>

                <div className="h-fit w-full">
                    <div className="container mx-auto mb-4">
                        <CollapsibleComponent
                            titleClosed="Jeu ludopédagogique"
                            titleOpen="Réalisation d'un jeu ludopédagogique en tour par tour"
                            content="En 2023 j'ai dû réaliser un jeu ludopédagogique en tour par tour en Java.
                                    Le jeu se présente sous la forme d'une sorte de RPG avec des objets avec différentes statistiques,
                                    un marchant, et des combats. Le côté ludopédagogique se passe lors du combat. Lors d'un combat,
                                    des questions sont posées à l'utilsateur de manière aléatoires et certaines questions sont générée."
                            img="./images/projects/2023-SAE1.1.png"
                            imgAlt="Image d'un combat entre un héro et un monstre"
                            link="https://github.com/HMilix/2023-SAE1.1"
                            showbutton={true}/>
                        <CollapsibleComponent
                            titleClosed="Site web problème de transport"
                            titleOpen="Réalisation d'un site web pour répondre à un problème de transport (fictif)"
                            content="En binôme nous avons du imaginer une entreprise fictive qui propose des moyens de transports
                                    divers et variés pour les employés d'une autre entreprise. Accompagné de rendu de 'Gestion Organisation',
                                    nous avons du réaliser un site web en HTML / CSS pour cette entreprise fictive, proposant les moyens
                                    de transports."
                            img="./images/projects/2023-SAE-RdB-EE.png"
                            imgAlt="Image d'un site web"
                            link="https://github.com/HMilix/2023-SAE-RdB-EE"
                            showbutton={true}/>
                        <CollapsibleComponent
                            titleClosed="Application / exploration algorithmique"
                            titleOpen="Développement d'une application et exploration algorithmique"
                            content="En groupe de 3, nous avons dû exploiter un CSV pour en extraire les données et trouvers les plus
                            court chemins selon certain critères."
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
                            content="Début de deuxième année nous avons du réaliser en groupe (où personne ne se connaissait) un jeu
                            ou application en utilisant la méthode Agile Scrum Master. Pour notre cas nous avons réalisé un jeu  de combat
                            en tour par tour avec plusieurs classes : Guerrier, Mage et Voleur. Le projet à été réalisé en seulement 3 jours consécutif."
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
                            content="Nous avons réalisé une application en JavaFX par équipe de 4 où le but était de classifier et d'afficher
                            des données chargés d'un CSV sur un nuage de points. Il a également la possibilité de choisir la plage de valeurs
                            les axes X et Y, et d'ajouter des points/valeurs sur le nuage."
                            img="./images/projects/2024-SAE3.3.png"
                            imgAlt="Logiciel de visualisation de donnée avec un graphique"
                            link="https://github.com/HMilix/2024-SAE3.3"
                            showbutton={true}/>
                    </div>
                </div>

                <div className="divider font-MADESoulmazeOutline font-bold text-4xl">PROJETS PERSONNELS</div>

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
                                {<span>Avec le temps, j'ai eu l'occasion de pouvoir faire du graphisme. Ne serait-ce que pour moi et ma chaîne Youtube
                                    ou bien la réalisation d'affiches pour ma ville, le graphisme ma permit d'aiguiser ma regard critique sur l'art digital.
                                    Mixé avec l'animation, le rapprochement avec le motion design se fait naturellement et cela m'a permet de faire des logo par exemples.
                                    <br/><br/>
                                    Image 1, Logo animé : Fait sous after effect en quelques jours, c'est un exemple de motion design.<br/>
                                    Image 2, Affiche Retro'Cappelle 2 : Affiche d'un évènement de ma ville.<br/>
                                    Image 3, Carte Aperture Science : Des cartes de visite fictive pour l'entreprise fictive Aperture Science<br/>
                                    Image 4, Affiche Morphine : Affiche d'un évènement de ma ville.<br/>
                                    Image 5, Rollup Ozkilt : Rollup de l'entreprise Ozkilt Artisanal, créateurs de kilts.<br/>
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
                                {<span>En correlation avec l'animation et le graphisme, la modélisation et conception 3D me suivent depuis tout petit.
                                    Tout en partant d'animation et de rendu basés sur le jeu Minecraft en utilisant les modèles que les gens proposait,
                                    avec le temps, j'ai pû commencer à réaliser moi même ces modèles. Ma curiosité m'as également poussé à faire de la
                                    3D "générale" et pas centré uniquement sur Minecraft.
                                    <br/><br/>
                                    Image 1, Roobis dans un salon : Roobis est un petit robot découvrant le monde des humains.<br/>
                                    Image 2, Roobis devant un ordinateur.<br/>
                                    Image 3, Roobis découvrant un robinet<br/>
                                    Image 4, Rendu réaliste : Essai de rendu réaliste avec des carte de visite fictive vue précédemment.<br/>
                                    Image 5, Fond d'écran : Mise en scène d'un personnage Minecraft allant dans les mines.<br/>
                                    Image 6, Modèle de larmes : Modèle 3D de larmes pour des personnage Minecraft, utilisable par tous.<br/>
                                    Image 7, Modèle de cape : Modèle 3D de cape pour des personnage Minecraft, utilisable par tous.<br/>
                                    Image 8, Modèle de bandana & rendu: Modèle 3D de bandana pour des personnage Minecraft, utilisable par tous.<br/>

                                </span>}
                            link="."
                            showbutton={false}/>
                        <CollapsibleComponent
                            titleClosed="Musique"
                            titleOpen="Compostion de musique"
                            content={<span>
                                Écoutant de la musique tous les jours, il était naturel pour moi de m'avanturer dans ce domaine.
                                    J'ai essayé de faire de la musique depuis tout petit, mais évidemment, étant trop jeune le résultat n'était pas.. disont correct.
                                    Cependant je n'ai jamais arrêté et je continue d'en faire encore aujourd'hui, préparant même un album.
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
                                {src: 'https://i.imgur.com/AiHGzvQ.gif', alt: `Animation de l'Unoculus passant devant un oeil géant.`}
                            ]}
                            titleClosed="Unoculus"
                            titleOpen="Unoculus (Un Oeil) = Uno (un) + Oculus (oeil)"
                            content={<span>
                                L'Unoculus est un peu spécial car en soit c'est du contenu supplémentaire pour le jeu Barotrauma, mais c'est également l'un de mes plus gros projet. J'explique cela en détails.<br/>
                                Barotrauma est une simulation de sous-marin 2D en coop intégrant des éléments de survival horror.<br/>
                                Mais Barotrauma inclût également un créateur de sous-marin, et vous l'aurez deviné, en tant que créatif je me devait d'en créer un.
                                Donc plusieurs essais de sous-marin sont sortis, tous avec quelque chose d'innovant pour le jeu, et vins l'Unoculus, succès immédiat et inattendu.<br/>
                                J'ai mis plusieurs mois à réaliser ce sous-marin tellement il est complexe et fourmille de détails. <br/>
                                Le créateur de sous-marin est simple à comprendre mais très dur à maitriser, car c'est un mélange des maths "classique",
                                d'algorithmie et d'algèbre de boole (avec un peu d'ingénierie électrique aussi).
                                Tous ça mixé par des câblages complexes (voir image 3).<br/>
                                Mais une fois le sous-marin terminé, il faut aussi faire la communication et le rendre ouvert au publique.
                                C'est là que mes autres compétences rentre en jeu.<br/>
                                Comme vous pouvez le voir sur la première et dernière image, l'oeil à été réalisé en 3D, le tout édité sur Photoshop
                                et animé sur After Effect (et le "O" de Unoculus designé sur Illustrator), combinant donc 3D, graphisme et animation/motion design.<br/>
                                Et le résultat final semble plaire au gens étant donné que en quelques jours,
                                il a atteint la 15ème place mondiale sur ~30 000 sous-marin créé par la communauté.
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