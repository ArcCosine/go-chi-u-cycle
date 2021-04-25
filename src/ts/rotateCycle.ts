import calcPos from "./calcPos";

const rotateCycle = (eve: Event) => {
    eve.preventDefault();
    calcPos(1);
};

export default rotateCycle;
