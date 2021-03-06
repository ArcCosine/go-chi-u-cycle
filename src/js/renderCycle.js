import shareEvent from "./shareEvent";
import renderImage from "./renderImage";
import shuffle from "./shuffle";

const renderCycle = (config) => {

    const title = document.getElementById("title");
    title.textContent = config.title;

    const share = document.getElementById("share");

    const shareLink = share.appendChild(document.createElement("a"));
    shareLink.href = "#";
    shareLink.textContent = config.share;
    shareLink.addEventListener("click", shareEvent, false);

    const rotate = document.getElementById("control-rotate");
    rotate.value = config.rotate;
    const inverserotate = document.getElementById("control-inverserotate");
    inverserotate.value = config.inverserotate;

    const cycleArea = document.getElementById("cycle-area");
    const randomIcons = shuffle(config.icons);
    randomIcons.forEach((icon) =>{
        const div = cycleArea.appendChild(document.createElement("div"));
        div.classList.add("cycle-icon");

        const img = new Image();
        img.src = icon;

        img.addEventListener("load", renderImage.bind(null, icon, div), false);
    });
};

export default renderCycle;
