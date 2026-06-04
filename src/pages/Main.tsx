import GameCard from "../components/GameCard";
import all_countries from "../images/world.svg";
import africa from "../images/africa.svg";
import europe from "../images/europe.svg";
import northamerica from "../images/north-america.svg";
import southamerica from "../images/south-america.svg";
import asia from "../images/asia.svg";
import oceania from "../images/oceania.svg";
import LoadGame from "../components/Game";
import { useState } from "react";

const Main = () => {
    const [game, setGame] = useState("");

    if (game) {
        return (
            <LoadGame gameTitle={game} />
        );
    }
    
    return (
    <div>
    <h2>Think you can <span className="text-red-400">flag the country</span><span className="text-yellow-400">?</span> Put your knowledge to the test with flags from every country — how many can you recognize?</h2>
    <h1>Choose a Game:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        <GameCard title="World" description="All countries, the ultimate challenge." imageUrl={all_countries} onGameStart={() => setGame("World")} />
        <GameCard title="Europe" description="From Iceland to Cyprus — know your flags?" imageUrl={europe} onGameStart={() => setGame("Europe")} />
        <GameCard title="Asia" description="The largest continent, the biggest test." imageUrl={asia} onGameStart={() => setGame("Asia")} />
        <GameCard title="Oceania" description="Island nations and hidden gems await." imageUrl={oceania} onGameStart={() => setGame("Oceania")} />
        <GameCard title="Africa" description="54 countries, countless flags to master." imageUrl={africa} onGameStart={() => setGame("Africa")} />
        <GameCard title="North America" description="From Canada to the Caribbean." imageUrl={northamerica} onGameStart={() => setGame("North America")} />
        <GameCard title="South America" description="12 nations, one continent to conquer." imageUrl={southamerica} onGameStart={() => setGame("South America")} />
        </div>
    </div>
    );
}

export default Main;