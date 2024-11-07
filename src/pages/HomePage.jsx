import Header from "../components/Header";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import {themeChange} from "theme-change";

function HomePage() {
    useEffect(() => {
        themeChange(false);
    }, []);
    return (
        <>
            <body className="App overflow-x-hidden flex items-center justify-center flex-col py-8">

            <div className="flex flex-row font-MADESoulmaze mx-auto text-3xl py-8">
                <h1 className="">MON TRAVAIL</h1>
                <h1 className="pl-2 animate-blink">_</h1>
            </div>

            <div className="h-fit w-[100%] rounded-xl">
                <Articles />
            </div>
            <div className="divider"></div>
            <div className="bg-primary h-fit w-[90%]    rounded-xl">
                <p>A</p>
            </div>
            </body>

            <Footer />
        </>
    );
}

export default HomePage;