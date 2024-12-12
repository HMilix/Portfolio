import React, { useEffect, useState } from "react";
import { checkFirstVisit } from "./checkFirstVisit";


const WelcomeToast = () => {
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (checkFirstVisit()) {
            setShowToast(true);
        }
    }, []);

    const handleOpenModal = () => {
        setShowToast(false);
        setShowModal(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className="relative">
            {showToast && (
                <div className="toast toast-end z-10">
                    <div className="alert alert-info">
                        <span>Oh ! Il semblerait que ce soit votre première fois ici. <br/> Cliquez sur le bouton si vous voulez un petit tour !</span>
                        <button className="btn btn-sm btn-primary ml-2" onClick={handleOpenModal}>
                            P'tit tour
                        </button>
                        <button className="btn btn-sm btn-error ml-2" onClick={handleCloseToast}>
                            Fermer
                        </button>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg font-MADESoulmazeOutline">P'tit tour</h3>
                        <p className="py-4">
                            <h3 className="font-MADESoulmaze text-center my-4">Bienvenue ! Voici quelques astuces pour bien naviguer.</h3>
                            <h4>Vous pouvez cliquer sur les projets pour afficher leurs contenu et en savoir plus.</h4>
                            <img src="./images/Tuto1.png" className="my-4 mb-8"/>
                            <h4>Il est possible d'ouvrir les images dans une fenêtre pour les voir en grand.</h4>
                            <img src="./images/Tuto2.png" className="my-4 mb-8"/>
                            <h4>Certains projets son différents (voir image si dessous), il est possible de scroller horizontalement pour voir la suite d'image (la même technique s'applique quand la fenêtre de visualisation d'image est ouverte).</h4>
                            <img src="./images/Tuto3.png" className="my-4 mb-8"/>

                        </p>
                        <div className="modal-action">
                            <button className="btn" onClick={handleCloseModal}>
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WelcomeToast;
