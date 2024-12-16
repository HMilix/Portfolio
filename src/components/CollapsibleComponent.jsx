import { useState, useRef, useEffect } from 'react';

function CollapsibleComponent({ img, imgAlt, titleOpen, titleClosed, content, link, showbutton }) {
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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="bg-gradient-to-br from-neutral to-accent hover:to-secondary z-auto p-4 mt-4 card shadow-lg shadow-info transition-all duration-500">
        <div className="flex items-start cursor-pointer" onClick={handleToggle}>
          <div
              className={`overflow-auto lg:overflow-hidden transition-all duration-500 rounded-box ${
                  isOpen ? "w-32 h-48 lg:w-60 lg:h-48" : "w-20 h-20"
              }`}
              onClick={handleImageClick}>
            <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
          </div>
          <div className="ml-4 flex-1">
            <h1 className="card-title text-neutral-content">{isOpen ? titleOpen : titleClosed}</h1>
            <div
                ref={contentRef}
                className="transition-all duration-500 ease-in-out opacity-0 overflow-auto lg:overflow-hidden mt-4"
                style={{ height: "0", transition: "height 0.3s ease, opacity 0.3s ease" }}>
              <p className="text-neutral-content text-justify mb-46">{content}</p>
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
        </div>

        {isModalOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={handleCloseModal}>
              <div
                  className="lg:max-w-[65vw] lg:max-h-fit bg-neutral p-4 rounded-box relative"
                  onClick={(e) => e.stopPropagation()}>
                <img src={img} alt={imgAlt} className="max-w-full max-h-screen rounded-box" />
                <button className="absolute top-2 right-2 text-white text-2xl" onClick={handleCloseModal}>
                  &times;
                </button>
              </div>
            </div>
        )}
      </div>
  );
}

export default CollapsibleComponent;
