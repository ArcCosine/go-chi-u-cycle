import { useCountContext } from "../context/CountContext";
interface HTMLStyle {
    [name: string]: string;
}

interface ImageObject {
    [imageUrl:string]: string;
    [imageText:string]: string;
}

interface ImageProps {
    [images:Array]: [
        ImageObject
    ];
}

const CycleArea: React.FC<ImageProps> = ({ images }) => {
    const { counter, setCounter } = useCountContext();

    const zSize = 600;
    const r = 360 / images.length;

    const deg = counter * r;

    const rotateStyle: HTMLStyle = {
        transform: "rotateY(" + deg + "deg)",
    };

    const handleWheel = (eve: WheelEvent) => {
        const delta = -1 * Math.max(-1, Math.min(1, Math.floor(-eve.deltaY)));
        setCounter(counter + delta);
    };

    let isTouch = false;
    let startPos = 0,
        movePos = 0;
    const handleTouch = (eve: TouchEvent) => {
        switch (eve._reactName) {
            case "onTouchStart":
                isTouch = true;
                startPos = eve.touches[0].clientX;
                break;
            case "onTouchEnd":
                isTouch = false;
                setCounter(counter - Math.floor((startPos - movePos) / 50));
                break;
            case "onTouchMove":
                if (isTouch) {
                    movePos = eve.touches[0].clientX;
                }
                break;
        }
    };

    return (
        <div
            className="carousel-container"
            onWheel={handleWheel}
            onTouchStart={handleTouch}
            onTouchMove={handleTouch}
            onTouchEnd={handleTouch}
        >
            <div className="carousel" style={rotateStyle}>
                {images.map((item:ImageObject, imageCounter:number) => {
                    const degSize = r * imageCounter;
                    const figureStyle = {
                        transform:
                            "rotateY(" +
                            degSize +
                            "deg) translateZ(" +
                            zSize +
                            "px)",
                    };
                    return (
                        <figure key={imageCounter} style={figureStyle}>
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
