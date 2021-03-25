// import scss
import "../scss/gochiucycle.scss";

// import other
import renderCycle from "./renderCycle";
import bindEvent from "./bindEvent";
import calcPos from "./calcPos";

declare global {
  interface Window { __gochi_u_cycle: any; }
}

const init = async ()=>{
    console.error('debug');

    // init global
    window.__gochi_u_cycle = 0;

    renderCycle();
    bindEvent();
    calcPos(0);
};

document.addEventListener('DOMContentLoaded', init, false );

