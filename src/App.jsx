import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticlesPage from "./components/ArticlesPage";

function App() {
  return (
    <>
        <Header />

        <body className="App overflow-x-hidden flex items-center justify-center flex-col py-8">

        <div className="flex flex-row font-MADESoulmaze mx-auto text-3xl py-8">
            <h1 className="">MON TRAVAIL</h1>
            <h1 className="pl-2 animate-blink">_</h1>
        </div>

        <div className="h-fit w-[100%] rounded-xl">
            <ArticlesPage />
        </div>
        <div className="divider"></div>
        <div className="bg-primary h-fit w-[90%]    rounded-xl">
            <p>A</p>
        </div>
        </body>

        <Footer />
    </>
  )
}

export default App
