import calcPos from "./calcPos";

const wheel = (eve: WheelEvent) => {
    const delta = -1 * Math.max(-1, Math.min(1, Math.floor(-eve.deltaY)));
    calcPos(delta);
};

export default wheel;
