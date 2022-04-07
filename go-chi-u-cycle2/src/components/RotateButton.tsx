import { useCountContext } from "../context/CountContext";

interface Props {
    length: Number
};

const RotateButton:React.FC<Props> = ({length}) => {
    const {counter, setCounter} = useCountContext();

    const countUp = () => {
        setCounter(counter + 1);
    };

    const countDown = () => {
        setCounter(counter - 1);
    };

    const rotateCounter = Math.floor(counter/length);
    const twitterText = window.encodeURIComponent(`${rotateCounter}回 回転させました。`);
    const twitterLink =`https://twitter.com/intent/tweet?text=${twitterText} - ${document.title} ${window.location.href}`;


    return (
        <div className="rotate-container">
            <div className="rotate-button">
                <button type="button" onClick={countDown}>
                    左回転
                </button>
                <button type="button" onClick={countUp}>
                    右回転
                </button>
            </div>
            <div className="rotate-result">
                <span data-testid="countup">{rotateCounter}</span>回 回転させました。
            </div>
            <div className="rotate-tweet">
                <a href={twitterLink}>Twitterで報告</a>
            </div>
        </div>
    );
}

export default RotateButton;
