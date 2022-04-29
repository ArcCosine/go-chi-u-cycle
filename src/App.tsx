import "./App.css";
import RotateButton from "./components/RotateButton";
import CycleArea from "./components/CycleArea";
import { CountProvider } from "./context/CountContext";

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
                <h1>ごちうサイクル - ご注文はサイクルですか？ -</h1>
            </header>
            <CountProvider>
                <CycleArea images={images} />
                <RotateButton length={images.length} />
            </CountProvider>
            <footer>
                <div className="column-container">
                    <div className="column">
                        <h1>Special Thanks</h1>
                        <ul>
                            <li>
                                
                                <a href="https://gochiusa.com/bloom/">
                                    ご注文はうさぎですか？
                                </a>
                            </li>
                            <li>
                                <a href="https://gochiusa.com/special/c00370000.html">
                                    Twitterアイコン＆待ち受け配布
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/usagi_anime">
                                    TVアニメ『ご注文はうさぎですか？』公式Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1>Powerd By</h1>
                        <ul>
                            <li>
                                <a href="https://vitejs.dev/">Vite</a>
                            </li>
                            <li>
                                <a href="https://reactjs.org/">React</a>
                            </li>
                            <li>
                                <a href="https://www.typescriptlang.org/">
                                    TypeScript
                                </a>
                            </li>
                        </ul>
                        <h1>Source</h1>
                        <ul>
                            <li>
                                <a href="https://github.com/ArcCosine/go-chi-u-cycle" target="_blank" rel="noopener">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copy-right">
                    Since:2016-2022 ごちうサイクル - ご注文はサイクルですか？ -{" "}
                    <a href="https://twitter.com/ArcCosine">&#64;ArcCosine</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
