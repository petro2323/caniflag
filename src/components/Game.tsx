import { useState, useEffect } from 'react';
import { getAllCountries } from '../services/countries';
import { type Country } from '../types/country';
import backArrow from "../icons/back-arrow.svg";
import GlobalButton from './GlobalButton';

type Game = {
    gameTitle: string
}

type ScoreThreshold = {
    threshold: number;
    message: string;
    color: string;
};

const LoadGame = ({ gameTitle }: Game) => {
    const [countries, setCountries] = useState<Country[]>([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [currentInput, setCurrentInput] = useState("");
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");
    const [guess, setGuess] = useState(false);

    useEffect(() => {
        getAllCountries(gameTitle).then((data) => {
            setCountries(data.sort(() => Math.random() - 0.5));
        })
    }, [gameTitle]);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (currentInput.trim().toLowerCase() === country.name.common.trim().toLowerCase() || 
        currentInput.trim().toLowerCase() === country.name.official.trim().toLowerCase()) {
            setScore(prevScore => prevScore + 1);
            setMessage(`Correct! This is the flag of ${country.name.common}`);
            setMessageColor("#10B981");
        } else {
            setMessage(`Incorrect! This is the flag of ${country.name.common}`);
            setMessageColor("#EF4444");
        }

        setGuess(true);
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { 
        if (e.key === "Enter") handleSubmit(e);
    }

    const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter") moveToNext();
    }

    const moveToNext = () => {
        setMessage("");
        setCurrentInput("");
        setCurrentIndex(prevIndex => prevIndex + 1);
        setGuess(false);
    }

    const retry = () => {
        countries.sort(() => Math.random() - 0.5);
        setScore(0);
        setCurrentIndex(0);
        setGuess(false);
        setMessage("");
        setCurrentInput("");
    }

    if (countries.length === 0) return <span className="loading"></span>

    const end = currentIndex === countries.length - 1 && guess;
    const country = !end ? countries[currentIndex] : countries[countries.length - 1];
    let finalMessage = "";
    let finalMessageColor = "";

    const SCORE_THRESHOLDS: ScoreThreshold[] = [
    { threshold: 0.4,  color: "#EF4444",    message: "Better luck next time! 😅 Geography is tough, the flags are waiting for you to try again." },
    { threshold: 0.6,  color: "#F59E0B", message: "Not bad, keep exploring! 🗺️ You know your way around the globe, a little more practice and you'll nail it." },
    { threshold: 0.75, color: "#3B82F6",   message: "Solid flag knowledge! 🌍 You clearly have a passport or at least a good atlas." },
    { threshold: 0.99,  color: "#10B981",  message: "Impressive world knowledge! 🧭 Most people wouldn't get this far." },
    { threshold: 1.0,  color: "#8B5CF6",  message: "Flag master! 🏆 You know every stripe and star. The world has no secrets from you." }
];

    if (end) {
        const totalScore = score / countries.length;
        
        const analyzedScore = SCORE_THRESHOLDS.find(s => totalScore <= s.threshold);

        finalMessage = analyzedScore.message;
        finalMessageColor = analyzedScore.color;
    }
    
    return (
        <div>
           <div className="flex flex-col items-center justify-center">
                <div className="flex mb-3">
                    <button className="cursor-pointer float-right p-1 leading-none opacity-70 dark:fill-honeydew hover:opacity-100 transition" onClick={() => document.location.pathname = "/" }><img src={backArrow} alt="Back Arrow" className="w-12 h-12" /></button>
                    <div className="ml-3">
                        <p>Game: {gameTitle}</p>
                        <p>Progress: {currentIndex + 1}/{countries.length}</p>
                        <p>Score: {score}/{countries.length}</p>
                    </div>
                </div>
                <img src={country.flags.svg} className="mx-auto h-44 min-h-full object-cover md:h-46" />
                {!guess && !end && <input type="text" autoFocus onKeyDown={handleInputKeyDown} value={currentInput} onChange={(e) => setCurrentInput(e.target.value) } placeholder="Type country name..." autoComplete="off" spellCheck="false" className="mb-2 mt-5 w-5/6 text-center dark:bg-gray-900 focus:outline-cyan-500 dark:focus:outline-cambridge-blue md:w-2/5 border-1 rounded-lg focus:outline-none focus:ring-0" />}
                {!guess && !end && <GlobalButton title="Submit" onClick={handleSubmit} />}
                {guess && !end && <GlobalButton autoFocus={true} title="Next" onClick={moveToNext} onKeyDown={handleButtonKeyDown} additionalCss='mt-2 mb-2' />}
            </div>
            {message && <p style={{ color: messageColor }}>{message}</p>}
            {finalMessage && <p style={{ color: finalMessageColor, fontSize: "1.3rem", marginTop: "0.4rem" }}>{finalMessage}</p>}
            {end && <GlobalButton additionalCss='mt-2' title="Retry" onClick={retry} />}
        </div>
    );
}

export default LoadGame;