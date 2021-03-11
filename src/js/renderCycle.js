import shuffle from "./shuffle";

const renderCycle = () => {
    const icons = [
        "./image/cocoa.jpg",
        "./image/chino.jpg",
        "./image/rize.jpg",
        "./image/syaro.jpg",
        "./image/chiya.jpg",
        "./image/cocoa_anime.jpg",
        "./image/chino_anime.jpg",
        "./image/rize_anime.jpg",
        "./image/sharo_anime.jpg",
        "./image/chiya_anime.jpg",
        "./image/cocoa.png",
        "./image/chino.png",
        "./image/rize.png",
        "./image/syaro.png",
        "./image/chiya.png",
    ];
    const cycleArea = document.getElementById("cycle-area");
    const randomIcons = shuffle(icons);
    randomIcons.forEach((icon) => {
        const div = cycleArea.appendChild(document.createElement("div"));
        div.classList.add("cycle-icon");

        const img = new Image();
        img.src = icon;
        img.addEventListener(
            "load",
            {
                handleEvent: (eve) => {
                    eve.preventDefault();
                    div.style.backgroundImage = `url('${icon}')`;
                },
            },
            false
        );
    });
};

export default renderCycle;
