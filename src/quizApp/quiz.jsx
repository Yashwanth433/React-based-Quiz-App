import { useState , useContext} from "react"
import { Questions } from "./helpers/questions"
import { QuizContext } from "./helpers/contexts"
import "../quizApp/quiz.css"
export default function Quiz (){

    const [curQuestion, setCurQuestion] = useState(0)
    const [optChoosen, setOptChoosen]= useState("")
    const [bgColor, setBgColor] = useState()
    const { score, setScore, setGameState} = useContext(QuizContext)

    const nextquestion = ()=>{
        if(Questions[curQuestion].ans == optChoosen){
            setScore(score+1)
        }
        setCurQuestion(curQuestion+1)}

    const finishQuiz = ()=>{
        if(Questions[curQuestion].ans == optChoosen){
            setScore(score+1)
        }
        setGameState("Submit");
    }

    

    return (<>

        <div className="mainmenu">
            <div className="topdiv">
                <div className="menu1"></div>
                 <div className="logo"></div>
                <div className="others"></div>
                <div className="profile"></div>
            </div>
            <div className="middiv">
                <div className="mleft">
                    <div className="infodiv">
                    <div className="quizno">
                        <p>question : {curQuestion+1}</p>
                    </div>
                    <div className="quizq">
                    <h1>{Questions[curQuestion].q}</h1>
                    </div>
                    <div className="options">
                    <button onClick={()=>setOptChoosen("A")}>{Questions[curQuestion].opta}</button>
                    <button onClick={()=>setOptChoosen("B")} >{Questions[curQuestion].optb}</button>
                    <button onClick={()=>setOptChoosen("C")} >{Questions[curQuestion].optc}</button>
                    <button onClick={()=>setOptChoosen("D")} >{Questions[curQuestion].optd}</button></div>
                    </div>
                </div>
                <div className="mright">
                    <div className="next">{curQuestion == Questions.length-1 ? (
            <button  className="nextquest" onClick={finishQuiz} >finish quiz</button>):(
            <button className="nextquest" onClick={nextquestion} >Next Question</button>)}
                    </div>
                </div>
            </div>
           
        </div> </>
    )
}