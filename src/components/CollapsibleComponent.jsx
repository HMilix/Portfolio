import { useState, useRef, useEffect } from 'react';

function CollapsibleComponent({ img, imgAlt, titleOpen, titleClosed, content, link }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      contentRef.current.style.opacity = '1';
    } else {
      contentRef.current.style.maxHeight = '0';
      contentRef.current.style.opacity = '0';
    }
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
        <div className={`overflow-hidden transition-all duration-500 rounded-box ${
            isOpen ? 'w-48 h-32 md:w-60 md:h-40' : 'w-20 h-20'
          }`}
          onClick={handleImageClick}>
          <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 flex-1">
          <h1 className="text-2xl font-bold text-neutral-content">
            {isOpen ? titleOpen : titleClosed}
          </h1>
          <div
            ref={contentRef}
            className="transition-max-height duration-500 ease-in-out overflow-hidden opacity-0 mt-4"
            style={{ maxHeight: '0', transition: 'max-height 0.3s ease, opacity 0.3s ease' }} >
            <p className="text-neutral-content text-justify">{content}</p>
            <a href={link} target="parent" onClick={(e) => e.stopPropagation()}>
              <button className="btn btn-accent mt-4">En savoir plus</button>
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
          <div className="max-w-lg bg-neutral p-4 rounded-box relative" onClick={(e) => e.stopPropagation()}>
            <img src={img} alt={imgAlt} className="max-w-full max-h-screen rounded-box" />
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={handleCloseModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollapsibleComponent;
