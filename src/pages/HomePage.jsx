import Header from "../components/Header";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import {themeChange} from "theme-change";
import CollapsibleComponentTest from "../components/CollapsibleComponentTest";

function HomePage() {
    useEffect(() => {
        themeChange(false);
    }, []);
    return (
        <>
            <div className="App overflow-x-hidden flex items-center justify-center flex-col py-8">
                <div className="flex flex-row font-MADESoulmaze mx-auto text-3xl py-8">
                    <h1 className="">MON TRAVAIL</h1>
                    <h1 className="pl-2 animate-blink">_</h1>
                </div>

                {/* CARD WITH CAROUSEL
                <div className="card card-side bg-neutral h-fit w-[87%] my-2 shadow-xl">
                    <figure>
                        <div className="carousel justify-self-start w-80 rounded-box">
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                    alt="Burger"/>
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-neutral-content">New movie is released!</h2>
                        <p className="text-neutral-content">Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">Watch</button>
                        </div>
                    </div>
                </div>
                */}

                {/* CARD WITHOUT CAROUSEL
                <div className="card card-side bg-neutral h-fit w-[87%] my-2 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-neutral-content">New movie is released!</h2>
                        <p className="text-neutral-content">Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">Watch</button>
                        </div>
                    </div>
                </div>
                */}

                {/* CARD WITHOUT CAROUSEL
                <CollapsibleComponentTest titleClosed={"Titre"} titleOpen={"Titre plus long"} content={"content"} imgAlt={"Image"} img={"./images/1yearanniversaryupdate-logo.png"} link={"https://google.com"}/>
                */}
                <div className="h-fit w-[100%]">
                    <Articles/>
                </div>
                <div className="divider"></div>
                <div className="card card-side bg-neutral shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;