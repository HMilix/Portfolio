import { useState, useRef, useEffect } from 'react';

function CollapsibleCard({ images, titleOpen, titleClosed, content, link, showbutton}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null);

  const updateHeight = () => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight + (contentRef.current.scrollHeight /4.25)}px`;
        contentRef.current.style.opacity = "1";
      } else {
        contentRef.current.style.height = "0";
        contentRef.current.style.opacity = "0";
      }
    }
  };

  useEffect(() => {
    updateHeight();
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        updateHeight();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
      <div
          className={`card card-side bg-gradient-to-br from-neutral to-accent hover:to-secondary shadow-lg shadow-info my-4 transition-all duration-500 ${
              isOpen ? 'h-80 lg:h-96' : 'h-40 lg:h-44'
          }`}>
        <figure>
          <div
              className={`carousel rounded-box transition-all duration-500 ${
                  isOpen ? 'lg:w-80' : 'lg:w-36'
              }`}>
            {images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover cursor-pointer"
                      onClick={handleImageClick}
                  />
                </div>
            ))}
          </div>
        </figure>

        <div className="card-body transition-all duration-500 ">
          <h2 className="card-title text-neutral-content cursor-pointer"
              onClick={handleToggle}>
            {isOpen ? titleOpen : titleClosed}
          </h2>
          <div
              ref={contentRef}
              className="transition-all duration-500 ease-in-out opacity-0 overflow-auto mt-4"
              style={{height: "0", transition: "height 0.3s ease, opacity 0.3s ease"}}>
            <p className="text-neutral-content text-justify w-[60vw] mb-4">{content}</p>
            <div className="card-actions justify-end">
              {showbutton && (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-accent" onClick={(e) => e.stopPropagation()}>
                      En savoir plus
                    </button>
                  </a>
              )}
            </div>
          </div>
        </div>

        {isModalOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={handleCloseModal}>
              <div
                  className="bg-neutral rounded-box p-4 relative lg:max-w-[87vw] lg:max-h-fit"
                  onClick={(e) => e.stopPropagation()}>
                <div
                    className="carousel bg-neutral rounded-box overflow-x-auto whitespace-nowrap max-w-full lg:max-h-[46vw] flex items-center space-x-4">
                  {images.map((image, index) => (
                      <div
                          key={index}
                          className="carousel-item inline-block w-auto flex-shrink-0">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-contain rounded-box max-w-full max-h-[46vw]"
                            style={{ width: "auto", height: "auto" }}/>
                      </div>
                  ))}
                </div>
                <button
                    className="absolute top-2 right-2 text-white text-2xl"
                    onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>
            </div>
        )}
      </div>
  );
}

export default CollapsibleCard;
