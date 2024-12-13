import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

function Header({ changePage }) {
    const [isHovered, setIsHovered] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'milixstheme');

    //Theme changer
    useEffect(() => {
        themeChange(false);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    //Used to store Theme choice
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    //Used to display options
    const themeOptions = {
        milixstheme: 'Default',
        light: 'Light',
        dark: 'Dark',
        cyberpunk: 'Cyberpunk',
        synthwave: 'Synthwave',
        pastel: 'Pastel'
    };

    return (
        <header>
            <div
                className="navbar grid grid-cols-[minmax(100px,150px)_1fr_minmax(100px,150px)] lg:grid-cols-[30vw_35vw_30vw] lg:gap-4 rounded-b-box bg-gradient-to-b from-base-300 via-base-100 to-base-300 bg-[length:auto_200%] animate-scrollGradient">

                <div className="lg:m-2 flex flex-row dropdown z-[100]">
                    <div tabIndex={0} role="button" className="btn m-1 btn-neutral text-neutral-content">
                        Theme
                        <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="mt-[18rem] ml-1 bg-neutral-content dropdown-content outline-info rounded-box w-15 p-2 shadow-2xl">
                        {Object.entries(themeOptions).map(([value, label]) => (
                            <li key={value}>
                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="theme-dropdown"
                                        className="theme-controller btn btn-sm btn-block justify-center"
                                        aria-label={label}
                                        value={value}
                                        checked={theme === value}
                                        onChange={() => handleThemeChange(value)}
                                    />
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative mx-auto flex flex-auto justify-center" onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>
                    <h1 className="font-MADESoulmaze hover:font-MADESoulmazeOutline w-fit text-balance leading-none text-center whitespace-nowrap lg:text-[2.5rem] text-[1.5rem] mx-auto my-auto">{isHovered ? 'NEVER STOP TO BEING CREATIVE.' : 'Portfolio'}</h1>
                </div>

                {/* --- BIG SCREEN --- */}
                <ul className="p-2 hidden lg:grid grid-cols-3 bg-neutral text-neutral-content rounded-box w-fit justify-self-end">
                    <li>
                        <button className="btn btn-neutral shadow-none min-h-[2.5rem] h-[2.5rem] min-w-[95px]" onClick={() => changePage("home")}>Accueil</button>
                    </li>
                    <li>
                        <button className="btn btn-neutral shadow-none min-h-[2.5rem] h-[2.5rem] min-w-[95px]" onClick={() => changePage("about")}>À propos</button>
                    </li>
                    <li>
                        <button className="btn btn-neutral shadow-none min-h-[2.5rem] h-[2.5rem] min-w-[95px]" onClick={() => changePage("contact")}>Contact</button>
                    </li>
                </ul>

                {/* --- SMALL SCREEN / PHONE--- */}
                <ul className="lg:hidden menu rounded-box w-auto px-2 bg-neutral justify-self-end text-neutral-content">
                    <li className="tooltip tooltip-left" data-tip="Accueil">
                        <button onClick={() => changePage("home")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                        </button>
                    </li>
                    <li className="tooltip tooltip-left" data-tip="À propos">
                        <button onClick={() => changePage("about")}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-5 w-5"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="2"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>
                    </li>
                    <li className="tooltip tooltip-left" data-tip="Contact">
                        <button onClick={() => changePage("contact")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </button>
                    </li>
                </ul>
                <h1 className="font-MADESoulmaze text-1xl lg:text-2xl text-balance text-center justify-self-center col-start-2 justify-start">Axel "Milix" WILFART</h1>
            </div>
        </header>
    );
}

export default Header;