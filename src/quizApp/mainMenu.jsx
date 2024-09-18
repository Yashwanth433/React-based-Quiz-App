import { useContext } from "react"
import { QuizContext } from "./helpers/contexts"
import "../quizApp/quiz.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></link>
export default function MainMenu (){
    const {gameState ,setGameState} = useContext(QuizContext);

    return (
        <div className="mainmenu">
            <div className="topdiv">
                <div className="menu1"></div>
                <div className="logo"></div>
                <div className="others"></div>
                <div className="profile"></div>
            </div>
            <div className="middiv">
                <div className="mleft">
                    <div className="infodiv1" style={{backgroundColor: 'transparent'}}>
                        <div className="name1">
                            <b><p id="p1" style={{color:'black'}} >REACT</p></b>
                            <b><p id="p2" style={{color:'black'}}>SIMPLE QUIZ APPLICATION</p></b>
                        </div>
                        
                    <button id="mm" onClick={()=>{setGameState("Quiz")}}><p>START QUIZ</p></button>
                    </div>
                    <div className="bottom">
                        <div className="botbig">
                        <div id="what" className="bot1"></div>
                        <div id="insta" className="bot1"></div>
                        <div id="face" className="bot1"></div>
                        <div id="you" className="bot1"></div>
                        </div>
                        <div className="botsmall">
                            <p>Created by YASHWANTH</p>
                        </div>
                        
                    </div>
                
                </div>
                <div className="mright"></div>
            </div>
           
        </div>
    )
}