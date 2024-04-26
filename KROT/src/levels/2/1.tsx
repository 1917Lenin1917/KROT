import Window from "@components/Window.tsx";
import questionMarkImg from "@assets/questionMark.png";
import HomeScreenImg from "@assets/HomeScreen.png";
import emergencyExitImg from "@assets/EmergencyExit.png";
import magnifierIconImg from "@assets/MagnifierIcon.png";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Level() {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const navigate = useNavigate()
  return (
    <div className={"flex justify-center "}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>
        <div className={"grid w-full h-full"} style={{
          gridTemplateRows: "repeat(auto-fill, 20px)",
          gridTemplateColumns: "repeat(auto-fill, 20px)"
        }}>
          <button className={"hover_size"} onClick={() => { navigate(-1) }}
                  style={{gridArea: "4 / 4 / span 3 / span 3", backgroundImage: `url(${emergencyExitImg})`}}>
          </button>

          <button className={"hover_size text-[30px] border-black border-4 bg-orange-100"}
                  style={{gridArea: "4 / 41 / span 3 / span 12"}}>
            Пропустить
          </button>
          <input className={"p-1 border-black border-4 bg-orange-100"} placeholder={"Ответ..."} style={{gridArea: "32 / 4 / span 3 / span 32"}} onChange={(e) => { setAnswer(e.currentTarget.value) }}>

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
          <button className={"hover_size"}
                  style={{gridArea: "32 / 50 / span 3 / span 3", backgroundImage: `url(${magnifierIconImg})`}}>
          </button>
        </div>
      </Window>
    </div>
  )
}