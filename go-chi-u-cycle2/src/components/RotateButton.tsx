import { useState } from "react";

const RotateButton = () => {
    const [counter, setCounter] = useState(0);

    const countUp = () => {
        setCounter(counter + 1);
    };

    const countDown = () => {
        setCounter(counter - 1);
    };

    //useEffect(() => {
    //    window._gochiCounter = counter;
    //}, []);

    return (
        <div>
            <div className="RotateButton">
                <button type="button" onClick={countUp}>
                    回転
                </button>
                <button type="button" onClick={countDown}>
                    逆回転
                </button>
            </div>
            <div className="RotateResult">
                <span data-testid="countup">{counter}</span>回 回転させました。
            </div>
        </div>
    );
}

export default RotateButton;
