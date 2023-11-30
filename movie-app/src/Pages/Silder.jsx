import React, { useEffect, useState } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://www.ksrmovies.com/Modules/CineUploadFiles/Movie/HDImage/TIGER_683581.png",
        "https://assets.thehansindia.com/h-upload/2023/01/01/1327897-animal-movie.webp",
        "https://www.bollywoodhungama.com/wp-content/uploads/2019/06/Sam-Bahadur-1-2.jpg",
        "https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg",
        "https://www.bollywoodhungama.com/wp-content/uploads/2020/08/WhatsApp-Image-2023-06-15-at-1.28.59-PM.jpeg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const slideStyle = { width: '100%', height: '70vh', objectFit: 'cover' };
    const dotContainerStyle = { textAlign: 'center', marginTop: '10px' };
    const dotStyle = { display: 'inline-block', margin: '0 5px', width: '10px', height: '10px', borderRadius: '50%', background: '#bbb', cursor: 'pointer' };
    const arrowStyle = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '24px', color: '#fff', background: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' };

    return (
        <div style={{ position: 'relative' }}>
            <img src={images[currentIndex]} style={slideStyle} alt={""} />

            <div style={dotContainerStyle}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        style={{ ...dotStyle, background: index === currentIndex ? '#555' : '#bbb' }}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>

            <div style={{ ...arrowStyle, left: 0 }} onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}>
                &lt;
            </div>

            <div style={{ ...arrowStyle, right: 0 }} onClick={() => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}>
                &gt;
            </div>
        </div>
    );
};

export default Slider;