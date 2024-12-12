import './App.css';
import { useState } from 'react';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [activePage, setActivePage] = useState("home");

    const changePage = (page) => {
        setActivePage(page);
    };

    const renderPage = () => {
        switch (activePage) {
            case "about":
                return <AboutPage />;
            case "contact":
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="">
            <Header changePage={changePage} />
                {renderPage()}
            <Footer/>
        </div>
    );
}

export default App;
