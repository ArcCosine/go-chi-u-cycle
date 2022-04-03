const Cycle = () => {
    const images = [
        {
            imageUrl: "chino.jpg",
            imageText: "chino",
        },
        {
            imageUrl: "chino.png",
            imageText: "chino",
        },
        {
            imageUrl: "chino_anime.jpg",
            imageText: "chino_anime",
        },
        {
            imageUrl: "chiya.jpg",
            imageText: "chiya",
        },
        {
            imageUrl: "chiya.png",
            imageText: "chiya",
        },
        {
            imageUrl: "chiya_anime.jpg",
            imageText: "chino_anime",
        },
        {
            imageUrl: "cocoa.jpg",
            imageText: "cocoa",
        },
        {
            imageUrl: "cocoa.png",
            imageText: "cocoa",
        },
        {
            imageUrl: "cocoa_anime.jpg",
            imageText: "cocoa_anime",
        },
        {
            imageUrl: "rize.jpg",
            imageText: "rize",
        },
        {
            imageUrl: "rize.png",
            imageText: "rize",
        },
        {
            imageUrl: "rize_anime.jpg",
            imageText: "rize_anime",
        },
        {
            imageUrl: "sharo_anime.jpg",
            imageText: "sharo_anime",
        },
        {
            imageUrl: "syaro.jpg",
            imageText: "syaro",
        },
        {
            imageUrl: "syaro.png",
            imageText: "syaro",
        },
    ];

    return 
    (
        <div>
            {images.map((item) =>(
                <img
                    src={'image/' + item.imageUrl}
                    alt={item.imageText}
                />
            ))}
        </div>
    );
};

export default Cycle;
