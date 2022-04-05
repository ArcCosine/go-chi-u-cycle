import "./App.css";
import RotateButton from "./components/RotateButton";
import CycleArea from "./components/CycleArea";

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

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>ごちうサイクル - ご注文はサイクルですか？ -</p>
            </header>
            <RotateButton  />
            <CycleArea images={images} />
        </div>
    );
}

export default App;
