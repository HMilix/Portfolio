import CollapsibleComponent from './CollapsibleComponent';
function ArticlesPage() {
  const articles = [
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "public/Logo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "Portfolio/ArchiveThisLogo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "/Logo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./src/assets/images/otxo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./assets/images/téléchargé.gif", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./assets/images/Unoculus_transparent.png", link: "https://google.com"},
  ];

  return (
    <div className="container mx-auto">
      {articles.map((article, index) => (
        <CollapsibleComponent key={index} titleClosed={article.titleClosed} titleOpen={article.titleOpen} content={article.content} imgAlt={article.imgAlt} img={article.img} link={article.link} />
      ))}
    </div>
  );
}

export default ArticlesPage;