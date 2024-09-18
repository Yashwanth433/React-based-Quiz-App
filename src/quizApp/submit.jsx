import { useState , useContext} from "react"
import { Questions } from "./helpers/questions"
import { QuizContext } from "./helpers/contexts"
import "../quizApp/quiz.css"

export default function Submit (){

    const { score} = useContext(QuizContext)


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
                <div className="infodiv1" style={{backgroundColor:'transparent', color:'black'}}>
                    <div className="name1">
                        <p id="p1" style={{fontSize: 55, marginLeft:140 ,paddingTop:100, color:'black'}} >QUIZ WAS ENDED</p>
                        <p id="p2" style={{marginTop:100, marginLeft:250, color:'black'}}>SCORE : {score}</p>
                    </div>
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