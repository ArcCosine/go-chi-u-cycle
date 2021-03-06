// import scss
import "../scss/gochiucycle.scss";

// import other
import loadJson from "./loadJson";
import renderCycle from "./renderCycle";
import bindEvent from "./bindEvent";
import calcPos from "./calcPos";

const init = async ()=>{
    const json = await loadJson();

    // init global
    window.__gochi_u_cycle = 0;

    renderCycle(json);
    bindEvent();
    calcPos(0);
};

document.addEventListener('DOMContentLoaded', init, false );

