declare global {
  interface Window { __gochi_u_cycle: any; }
}
const calcPos = (num: Number) => {
    const position = window.__gochi_u_cycle + num;
    window.__gochi_u_cycle = position;

    // document.querySelector('#cycle-area').style.transform = `rotate(${position}deg)`;

    // render count
    document.getElementById("result").textContent = position;

    // update link
    const link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        document.getElementById("result-wrapper").textContent
    )} - ${document.title} ${window.location.href}`;
    document.getElementById("share-link").setAttribute("href",link);
};

export default calcPos;
