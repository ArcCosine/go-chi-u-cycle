import { useState } from "react";

function RotateButton() {
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
            <button type="button" onClick={countUp}>回転</button>
            <button type="button" onClick={countDown}>逆回転</button>
        </div>
    );
}
export default RotateButton;
