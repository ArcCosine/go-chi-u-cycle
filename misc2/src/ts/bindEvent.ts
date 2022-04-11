import rotateCycle from "./rotateCycle";
import inverseRotateCycle from "./inverseRotateCycle";
import wheel from "./wheel";
import calcPos from "./calcPos";
import isMobile from "./isMobile";

const bindEvent = () => {
    const rotate = document.getElementById("control-rotate");
    const inverserotate = document.getElementById("control-inverserotate");

    if (isMobile()) {
        rotate.addEventListener("touchstart", rotateCycle, false);
        inverserotate.addEventListener("touchstart", inverseRotateCycle, false);
    }

    rotate.addEventListener("click", rotateCycle, false);
    inverserotate.addEventListener("click", inverseRotateCycle, false);

    window.addEventListener("mousewheel", wheel, false);
    window.addEventListener("resize", calcPos.bind(null,0), false);

};

export default bindEvent;
