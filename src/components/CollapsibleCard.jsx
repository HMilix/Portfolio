import { useState, useRef, useEffect } from 'react';

function CollapsibleCard({ images, titleOpen, titleClosed, content, link }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0';
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
      <div
          className={`card card-side bg-neutral shadow-xl my-4 transition-all duration-500 overflow-hidden ${
              isOpen ? 'h-72 md:h-96' : 'h-32 md:h-40'
          }`}
      >
        <figure>
          <div
              className={`carousel w-80 rounded-box transition-all duration-500 ${
                  isOpen ? 'w-48 md:w-80' : 'w-24 md:w-36'
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

        <div className="card-body transition-all duration-500">
          <h2
              className="card-title text-neutral-content cursor-pointer"
              onClick={handleToggle}
          >
            {isOpen ? titleOpen : titleClosed}
          </h2>
          <div
              ref={contentRef}
              className="transition-max-height duration-500 overflow-hidden"
              style={{ maxHeight: '0' }}
          >
            <p className="text-neutral-content">{content}</p>
            <div className="card-actions justify-end">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-accent">En savoir plus</button>
              </a>
            </div>
          </div>
        </div>

        {isModalOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={handleCloseModal}
            >
              <div
                  className="bg-neutral rounded-box p-4 relative max-w-lg"
                  onClick={(e) => e.stopPropagation()}
              >
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                  {images.map((image, index) => (
                      <div key={index} className="carousel-item">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover rounded-box"
                        />
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
