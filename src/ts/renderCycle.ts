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
                handleEvent: () => {
                    div.style.backgroundImage = `url('${icon}')`;
                },
            },
            false
        );
    });

    const cycleIcons = document.querySelectorAll(".cycle-icon");

    const offset = document.querySelector(".control-area").clientHeight;
    const geta = cycleIcons[0].clientHeight;

    const r = (document.body.clientHeight - offset - geta) / 2;
    const x = (document.body.clientWidth - geta) / 2;
    const y = r;

    const limit = cycleIcons.length;


    for (let i = 0; i < limit; i++) {
        const theta = (2 * Math.PI * i) / limit;
        const x1 = x + r * Math.cos(theta);
        const y1 = y + r * Math.sin(theta);
        const cycleIcon = <HTMLElement>cycleIcons[i];
        cycleIcon.style.transform = `translate3d(${x1}px,${y1}px,0px)`;
    }

    // const renderArea = <HTMLElement>document.querySelector('.render-area');
    // renderArea.style.height = (document.body.clientHeight - offset) + 'px';

};

export default renderCycle;
