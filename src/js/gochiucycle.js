// import scss
import "../scss/gochiucycle.scss";

// import other
import renderCycle from "./renderCycle";
import bindEvent from "./bindEvent";
import calcPos from "./calcPos";
import * as config from "./config.json";

const init = async ()=>{

    // init global
    window.__gochi_u_cycle = 0;

    renderCycle(config);
    bindEvent();
    calcPos(0);
};

document.addEventListener('DOMContentLoaded', init, false );

