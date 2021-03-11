const calcPos = (num) => {
    const position = window.__gochi_u_cycle + num;
    window.__gochi_u_cycle = position;

    const cycleIcons = document.querySelectorAll(".cycle-icon");

    const offset = document.querySelector(".control-area").clientHeight;
    const geta = cycleIcons[0].clientHeight;

    const r = (document.body.clientHeight - offset - geta) / 2;
    //console.error(r);
    const x = (document.body.clientWidth - geta) / 2;
    const y = (document.body.clientHeight + offset - geta) / 2;

    const limit = cycleIcons.length;

    for (let i = 0; i < limit; i++) {
        const theta = (2 * Math.PI * (i+position)) / limit;
        const x1 = x + r * Math.cos(theta);
        const y1 = y + r * Math.sin(theta);
        cycleIcons[i].style.top = `${y1}px`;
        cycleIcons[i].style.left = `${x1}px`;
    }

    // render count
    document.getElementById("result").textContent = position;

    // update link
    const link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        document.getElementById("result-wrapper").textContent
    )} - ${document.title} ${window.location.href}`;
    document.getElementById("share-link").href = link;
};

export default calcPos;
