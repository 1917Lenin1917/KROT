import {ReactNode} from "react";
import useOutsideClick from "../hooks/useOutsideClick.tsx";
import {useLocation, useNavigate} from "react-router-dom";
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
      <div className={"flex z-10 text-center border-black border-4 text-5xl h-20 bg-orange-100 justify-center"}><span
        className={"my-auto"}>Подсказка</span></div>
      {children}
    </form>
  )
}

export default function HelpModal() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const Чубзик = location.state['chel'] ?? undefined
  const ref = useOutsideClick<"dialog">(() => {
    navigate(-1)
  })
  return (
    <div className={"dark_cover"}>
      <dialog ref={ref} open className={"fixed top-1/4"}>
        <BaseForm>
          {Чубзик ? <img src={Чубзик} className={"z-10 left-[200px] absolute w-[200px]"}></img> : null}
          {location.state['hints'].map((hint: string, key: number) => <div className={"z-10 px-3 text-xl"} key={key}>{key+1}. {hint}</div>)}
        </BaseForm>
      </dialog>
    </div>
  )
    ;
}
