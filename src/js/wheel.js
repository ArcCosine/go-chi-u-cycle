import calcPos from "./calcPos";

const wheel = (eve) => {
    const delta = -1 * Math.max(-1, Math.min(1, eve.wheelDelta));
    calcPos(delta);
};

export default wheel;
