import { useCountContext } from "../context/CountContext";

interface Props {
    length: number;
}

const RotateButton: React.FC<Props> = ({ length }) => {
    const { counter, setCounter }: any = useCountContext();

    const countUp = () => {
        setCounter(counter + 1);
    };

    const countDown = () => {
        setCounter(counter - 1);
    };

    const rotateCheat = document.getElementById("cheat-box") as HTMLInputElement;
    const isCheat:boolean = rotateCheat && rotateCheat.checked;
    const rotateCounter = isCheat ? counter : Math.floor(counter / length);
    const twitterText = window.encodeURIComponent(
        `${rotateCounter}回 回転させました。`
    );
    const twitterLink = `https://twitter.com/intent/tweet?text=${twitterText} - ${document.title} ${window.location.href}`;

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
                <span data-testid="countup">{rotateCounter}</span>回
                回転させました。
            </div>
            <div className="rotate-cheat">
                <label htmlFor="cheat-box">
                    <input type="checkbox" id="cheat-box" />
                    ズルをする
                </label>
            </div>
            <div className="rotate-tweet">
                <a href={twitterLink}>Twitterで報告</a>
            </div>
        </div>
    );
};

export default RotateButton;
