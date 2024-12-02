import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import {themeChange} from "theme-change";
import CollapsibleCard from "../components/CollapsibleCard";
import Articles from "../components/Articles";

function HomePage() {
    useEffect(() => {
        themeChange(false);
    }, []);
    return (
        <>
            <div className="App overflow-x-hidden flex items-center justify-center flex-col">
                <div className="flex flex-row font-MADESoulmazeOutline mx-auto text-4xl py-8">
                    <h1 className="">MES PROJETS</h1>
                    <h1 className="pl-2 animate-blink">_</h1>
                </div>

                <div className="h-fit w-full">
                    <Articles/>
                </div>
                <div className="divider"></div>
                <div className="container mx-auto">
                    <CollapsibleCard
                        images={[
                            { src: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp', alt: 'Burger 1' },
                            { src: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp', alt: 'Burger 2' },
                            { src: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp', alt: 'Burger 3' },
                        ]}
                        titleOpen="Titre ouvert"
                        titleClosed="Titre fermé"
                        content="Voici un exemple de contenu dynamique."
                        link="https://example.com"
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;