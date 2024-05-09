import HomeScreenImg from "@assets/HomeScreen.png";
import Window from "@components/Window.tsx";
import {ElementRef, ReactNode, useRef} from "react";
import {useNavigate} from "react-router-dom";
import emergencyExitGreenImg from "@assets/EmergyncyExitGreen.png";

function BaseForm({ children }: {children?: ReactNode}) {
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
      <div className={"flex z-10 text-center border-black border-4 text-3xl h-20 bg-orange-100 justify-center mt-[250px]"}><span
        className={"my-auto"}>Компьютер доступен во второй главе!</span></div>
      {children}
    </form>
  )
}

export function PCPage() {
  const ref = useRef<ElementRef<"button">>(null)
  window.ref = ref
  const navigate = useNavigate()
  return (
    <div className={"flex justify-center"}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>
        <BaseForm>

        </BaseForm>
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
