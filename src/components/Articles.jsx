import CollapsibleComponent from './CollapsibleComponent';
function Articles() {
  const articles = [
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./images/1yearanniversaryupdate-logo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./images/ArchiveThisLogo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./Logo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./images/otxo.png", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./images/téléchargé.gif", link: "https://google.com"},
    { titleClosed: "Titre", titleOpen: "Titre plus long", content: "content", imgAlt: "Image", img: "./images/Unoculus_transparent.png", link: "https://google.com"},
  ];

  return (
    <div className="container mx-auto">
      {articles.map((article, index) => (
        <CollapsibleComponent key={index} titleClosed={article.titleClosed} titleOpen={article.titleOpen} content={article.content} imgAlt={article.imgAlt} img={article.img} link={article.link} />
      ))}
    </div>
  );
}

export default Articles;