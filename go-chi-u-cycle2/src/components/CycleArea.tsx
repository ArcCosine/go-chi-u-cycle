import { loadConfigFromFile } from "vite";

const CycleArea = ({images}) => {
    const zSize = 600;

    const r = 360/images.length;

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((item, counter) => {
                    const degSize = r*counter;
                    const figureStyle = {
                        transform: "rotateY(" + degSize +"deg) translateZ(" + zSize + "px)",
                    };
                    return (
                        <figure key={counter} style={figureStyle}>
                            <img
                                src={"src/image/" + item.imageUrl}
                                alt={item.imageText}
                            />
                        </figure>
                    );
                })}
            </div>
        </div>
    );
};

export default CycleArea;
