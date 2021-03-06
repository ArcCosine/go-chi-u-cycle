const loadJson = async ()=>{

    const response = await fetch('js/config.json');
    return await response.json();

};

export default loadJson;
