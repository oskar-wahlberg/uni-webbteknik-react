import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const prevSlide = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="image-slider-container">
            <div style={slideStyles} className="slide"></div>
            <div onClick={prevSlide} className="prev">&#10094;</div>
            <div onClick={nextSlide} className="next">&#10095;</div>
            <div className="dots">
                {slides.map((slide, slideIndex) => (
                    <div className="dot" key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;