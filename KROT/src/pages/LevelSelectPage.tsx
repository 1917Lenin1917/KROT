import HomeScreenImg from "@assets/HomeScreen.png";
import Window from "@components/Window.tsx";
import {ElementRef, ReactNode, RefObject, useRef} from "react";
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import emergencyExitGreenImg from "@assets/EmergyncyExitGreen.png";

function BaseForm({children}: { children?: ReactNode }) {
  return (
    <form style={{width: "619.5px", height: "422px", gridTemplateRows: "140px auto"}} className={"grid items-center"}>
      <svg className={"absolute z-0"} width="619.5" height="422" viewBox="0 0 1239 844" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_5_91)">
          <path d="M0 0H1239V844H0V0Z" fill="#DCB06E" fillOpacity="0.5"/>
        </g>
        <path d="M3.5 3.5H1235.5V840.5H3.5V3.5Z" stroke="black" strokeWidth="7"/>
        <defs>
          <filter id="filter0_i_5_91" x="0" y="0" width="1239" height="848"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix"
                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_91"/>
          </filter>
        </defs>

      </svg>
      <div className={"flex z-10 text-center border-black border-4 text-5xl h-20 bg-orange-100 justify-center"}><span
        className={"my-auto"}>Прогресс</span></div>
      {children}
    </form>
  )
}

export function ChapterSelectFunction() {
  const ref = useRef<ElementRef<"button">>(null)
  window.ref = ref
  const navigate = useNavigate()
  return (
    <div className={"flex justify-center"}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>

        <Outlet/>
      </Window>
      <div className={"relative z-10"}>
        <button ref={ref} className={"hover_size z-10"} onClick={() => {
          navigate(-1)
        }} style={{
          position: "absolute",
          top: "100px",
          left: "-1049px",
          width: "60px",
          height: "60px",
          backgroundImage: `url(${emergencyExitGreenImg})`
        }}>
        </button>
      </div>
    </div>
  )
}

export function LevelSelectFunction() {
  const {chapter, level} = useParams() as { chapter: string, level: string }
  const levels = import.meta.glob('../levels/**/*.tsx')
  const currentLevel = JSON.parse(localStorage.getItem('user')!).current_level
  return (
    <>
      <Outlet/>
      {level ? null :
        <BaseForm>
          {Object.keys(levels).map((lvl, key) => {
            const [p, filename] = lvl.replace('../levels/', '').replace('.tsx', '').split('/')
            // console.log(p, filename, lvl, levels)
            if (p !== chapter) return null
            return <Link key={key} className={"z-10 justify-self-center"} to={`/levels/${p}/${filename > currentLevel + 1 ? '' : filename}`}>
              <button type={"submit"}
                      className={`z-10 border-black justify-self-center border-4 h-20 text-4xl w-[450px] ${filename > currentLevel + 1 ? 'hover:border-gray-600 cursor-not-allowed bg-gray-400' : 'hover:border-green-700 bg-orange-100'}`}>{filename}</button>
            </Link>
          })}
        </BaseForm>
      }
    </>
  )
}

export function ChapterSelectOutlet() {
  return (
    <BaseForm>
      <Link className={"z-10 justify-self-center"} to={"/levels/1/"}>
        <button type={"submit"}
                className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 w-[450px] hover:border-green-700"}>Глава
          I
        </button>
      </Link>
      <Link className={"z-10 justify-self-center"} to={"/levels/2/"}>
        <button disabled type={"submit"}
                className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-gray-400 w-[450px] cursor-not-allowed hover:border-gray-600"}>Глава
          II
        </button>
      </Link>
      <Link className={"z-10 justify-self-center"} to={"/levels/3/"}>
        <button disabled type={"submit"}
                className={"z-10 cursor-not-allowed border-black justify-self-center border-4 h-20 text-4xl bg-gray-400 w-[450px] hover:border-gray-600"}>Глава
          III
        </button>
      </Link>
    </BaseForm>
  )
}

declare global {
  interface Window {
    ref: RefObject<HTMLButtonElement>
  }
}