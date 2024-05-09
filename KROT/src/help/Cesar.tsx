import {ElementRef, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Window from "@components/Window.tsx";

import HomeScreenImg from "@assets/HomeScreen.png";
import Left from "@assets/arrowLeft.png";
import Right from "@assets/arrowRight.png";
import Pegament from "@assets/pergament.png"
import emergencyExitImg from "@assets/EmergencyExit.png";

const convert = (char: string, count: number) => String.fromCharCode((char.charCodeAt(0)-'А'.charCodeAt(0)-count+32)%32+'А'.charCodeAt(0))
const getLowerArray = (char: string) => {
  const res = []
  for (let i = 3; i > -4; i--) {
    res.push(convert(char, i))
  }
  return res
}
export default function CesarHelp() {
  const qWord = 'НЕОКОЛОНИАЛИЗМ'
  // const { qWord } = useParams() as { qWord: string }
  const ref = useRef<ElementRef<"div">>(null)
  const refCurr = useRef<ElementRef<"div">>(null)
  const [i, setI] = useState(0)
  const [word, setWord] = useState(Array.from(qWord))
  const [currentChar, setCurrentChar] = useState(word[i])
  const [isButton, setIsButton] = useState(true)
  const lowerArray = getLowerArray(currentChar)
  const [currPosition, setCurrPosition] = useState(3)
  const moveChar = async (nextChar: string) => {
    setIsButton(false)
    refCurr.current!.className += " down"
    setTimeout(() => {
      ref.current!.className = ref.current!.className.replace("op-0", "vis")
    }, 1000)
    setTimeout(() => {
      refCurr.current!.className += " op-0"

      setWord([...word.slice(0, i), nextChar, ...word.slice(i+1)])
    }, 1400)
    setTimeout(() => {
      ref.current!.className = ref.current!.className.replace("translate-x-[-100px]", " move-left-3")
      setCurrPosition(4)
    }, 4000)

    setTimeout(() => {
      ref.current!.className = ref.current!.className.replace("move-left-3", "move-left-4")
      setCurrPosition(5)
    }, 5000)

    setTimeout(() => {
      ref.current!.className = ref.current!.className.replace("move-left-4", "move-left-5")
      setCurrPosition(6)
    }, 6000)
    setTimeout(() => {
      refCurr.current!.className = refCurr.current!.className.replace("op-0", "move-up").replace("down", "")
      ref.current!.className = ref.current!.className.replace("vis", "op-0").replace("move-left-5", "translate-x-[-100px]")

    }, 7000)
    setTimeout(() => {
      refCurr.current!.className = refCurr.current!.className.replace("move-up", "")
      setI((i+1))
      setCurrentChar(word[(i+1)%word.length])
      setIsButton(true)
      setCurrPosition(3)
    }, 7500)
  }

  return (
    <div style={{display: "grid", alignItems: "center", justifyContent: "center", gap: "30px", width: "800px"}}>
      <div className={"flex flex-[50%]"}>
        {word.map((char, key) => {
          return <div key={key} ref={key === i ? refCurr : null} style={{borderColor: key === i ? "red" : "black"}}
                      className={`border w-[50px] h-[50px] text-center text-4xl relative`}>{char}</div>
        })}
      </div>
      <div style={{translate: `${-150 + 50 * (i + 1)}px`}}>
        <div ref={ref} className={"flex flex-[50%] op-0 translate-x-[-100px]"}>
          <div className={"border border-black w-[50px] h-[50px] text-center text-4xl relative"}>...</div>
          {lowerArray.map((a, key) => <div key={key}
                                           style={{
                                             borderColor: key === 3 && currPosition === 3 ||
                                             key === 4 && currPosition === 4 ||
                                             key === 5 && currPosition === 5 ||
                                             key === 6 && currPosition === 6 ? "red" : "black"
                                           }}
                                           className={"border border-black w-[50px] h-[50px] text-center text-4xl relative"}>{a}</div>)}

          <div className={"border border-black w-[50px] h-[50px] text-center text-4xl relative"}>...</div>
        </div>
      </div>
      <button disabled={!isButton || i >= word.length}
              className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 disabled:bg-gray-200 w-[400px]"} onClick={() => {
        moveChar(lowerArray[6])
      }}>Следующий шаг
      </button>
      <button disabled={!isButton} className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 disabled:bg-gray-200 w-[400px]"} onClick={() => {
        setI(0)
        setWord(Array.from(qWord))
        setCurrPosition(0)
        setCurrentChar(qWord[0])
      }}>Заново
      </button>
    </div>
  )
}

export function CaesarRender() {
  const navigate = useNavigate()
  const [page, setPage] = useState(0)

  const pages = [
     <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 10 / span 4 / span 40"}} className={"text-4xl"}>Симметричные шифры. Шифр Цезаря.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Шифр Цезаря - это один из самых древних и простых моноалфавитных шифров. При шифровании каждый символ
        заменяется другим, отстоящим от него в алфавите на фиксированное число позиций (обычно 3). Соответственно, ключом
        будет являться число сдвига. Цезарь использовал шифр для связи со своими чиновниками.
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 10 / span 4 / span 40"}} className={"text-4xl"}>Симметричные шифры. Шифр Цезаря.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Пример шифрования слова при помощи шифра Цезаря.
      </div>
      <div style={{gridArea: "16 / 8 / span 4 / span 40"}}>
        <CesarHelp/>
      </div>
    </>
  ]

  return (
    <div className={"flex justify-center "}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>


        <div className={"grid w-full h-full"} style={{
          gridTemplateRows: "repeat(auto-fill, 20px)",
          gridTemplateColumns: "repeat(auto-fill, 20px)"
        }}>

          <button className={"hover_size z-10"} onClick={() => {
            navigate(-1)
          }} style={{gridArea: "3 / 4 / span 3 / span 3", backgroundImage: `url(${emergencyExitImg})`}}>
          </button>

          {page !== 0 ?<button className={"hover_size z-10"} onClick={() => {
            setPage(page - 1)
          }} style={{gridArea: "3 / 43 / span 3 / span 6", backgroundImage: `url(${Left})`}}>
          </button> : null}

          {page !== pages.length - 1 ? <button disabled={page === pages.length - 1} className={"hover_size z-10"} onClick={() => {
            setPage(page + 1)
          }} style={{gridArea: "3 / 48 / span 3 / span 6", backgroundImage: `url(${Right})`}}>
          </button> : null}

          {pages[page]}
        </div>
      </Window>
    </div>

  )
}