import Window from "@components/Window.tsx";
import questionMarkImg from "@assets/questionMark.png";
import HomeScreenImg from "@assets/HomeScreen.png";
import emergencyExitImg from "@assets/EmergencyExit.png";
import magnifierIconImg from "@assets/MagnifierIcon.png";
import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Help from "../../help/help.tsx";

export default function Level() {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [renderLibrary, setRenderLibrary] = useState(false)
  const navigate = useNavigate()

  if (renderLibrary) {
    window.ref.current.className += " hidden"
    return (
      <div className={"grid w-full h-full"} style={{
        gridTemplateRows: "repeat(auto-fill, 20px)",
        gridTemplateColumns: "repeat(auto-fill, 20px)",
        zIndex: "100"
      }}>

        <button className={"hover_size z-10"} onClick={() => {
            setRenderLibrary(false)
        }} style={{gridArea: "3 / 4 / span 3 / span 3", backgroundImage: `url(${emergencyExitImg})`}}>
        </button>
        <div></div>
        <Link to={"/help/caesar/ХОЧУПИТСЫ"} style={{gridArea: "10 / 20 / span 20 / span 20"}}
              className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 disabled:bg-gray-200 w-[600px] flex align-middle items-center justify-center"}>Симметричное
          шифрование
        </Link>
        <Link to={"/help/caesar/ПИТСААААА"} style={{gridArea: "20 / 20 / span 20 / span 20"}}
              className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 disabled:bg-gray-200 w-[600px] flex align-middle items-center justify-center"}>Асимметричное
          шифрование

        </Link>
      </div>
    )
  } else {
    window.ref.current.className =  window.ref.current.className.replace(" hidden", "")
  }

  return (
    <>
      <div className={"grid w-full h-full"} style={{
        gridTemplateRows: "repeat(auto-fill, 20px)",
        gridTemplateColumns: "repeat(auto-fill, 20px)"
      }}>
        <button className={"hover_size text-[30px] border-black border-4 bg-orange-100"}
                style={{gridArea: "4 / 41 / span 3 / span 12"}}>
          Пропустить
        </button>
        <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"Ответ..."}
               style={{gridArea: "32 / 4 / span 3 / span 32"}} onChange={(e) => {
          setAnswer(e.currentTarget.value)
        }}>

        </input>
        <div className={"p-1 border-black border-4 bg-orange-100 text-[20px]"} style={{gridArea: "8 / 4 / 31 / 49"}}>
          <p>
            Тут какой-то текст задания. Бла-бла-бла, сюжет, город, могила, листок, надпись рядом с миской салата цезарь:
          </p>
          <p style={{fontFamily: "monospace"}}>
            Хцх нгнсм-хс хзнфх, февкгррюм ф фбйзхсп л кгёгжнсм
          </p>
        </div>
          <button className={`${isCorrect === true ? "border-green-700" : isCorrect === false ? "border-red-800" : "border-black"} text-[30px] border-4 bg-orange-100`} style={{gridArea: "32 / 37 / span 3 / span 12"}} onClick={(e) => {
            e.preventDefault()
            axios.post("http://localhost:8000/check_level_answer/1", { answer }).then((v) => {
              setIsCorrect(true)
            }).catch((e) => {
              setIsCorrect(false)

            })
          }}>
            Проверить
          </button>
          <button className={"hover_size"}
                  style={{gridArea: "28 / 50 / span 3 / span 3", backgroundImage: `url(${questionMarkImg})`}}>
          </button>
          <button className={"hover_size"} onClick={() => { setRenderLibrary(true) }}
                  style={{gridArea: "32 / 50 / span 3 / span 3", backgroundImage: `url(${magnifierIconImg})`}}>
          </button>
        </div>
      </>
  )
}