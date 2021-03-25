const renderImage = (icon: String, div: HTMLElement, eve:Event )=>{
    div.style.backgroundImage  = `url('${icon}')`;
};

export default renderImage;
