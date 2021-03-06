const calcPos = (num) => {


    const position = window.__gochi_u_cycle + num;
    window.__gochi_u_cycle = position;

    const cycleIcons = document.querySelectorAll(".cycle-icon");

    const offset = document.querySelector(".control-area").clientHeight;
    const geta = cycleIcons[0].clientHeight;
    const r = Math.floor(
        (document.documentElement.clientHeight - offset - geta * 2) / 2
    );
    const x = document.body.clientWidth / 2 - geta / 2;
    const y = r;
    const limit = cycleIcons.length;
    const sep = Math.floor(360 / limit);

    for (let i = 0; i < limit; i++) {
        const deg = (position + i) * sep;
        const theta = (Math.PI / 180) * deg;
        cycleIcons[i].style.transform = `translate3d(${Math.floor( x + r * Math.cos(theta))}px, ${Math.floor(y + r * Math.sin(theta))}px, 0px)`;
    }

    // render count
    document.getElementById("result").textContent = position;

};

export default calcPos;
