import { useState, useContext } from "react"
import MainMenu from "./mainMenu"
import Quiz from "./quiz"
import Submit from "./submit"
import { QuizContext } from "./helpers/contexts"

export default function HostPage(){

    const [gameState, setGameState] = useState("Menu")
    const [score, setScore] = useState(0);



    return (<>

        <div className="app">

            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
            { gameState === 'Menu' && <MainMenu/>}
            { gameState === 'Quiz' && <Quiz/>}
            { gameState === 'Submit' && <Submit/>}

            </QuizContext.Provider>

           
        </div>
    
    
    </>



    )
}