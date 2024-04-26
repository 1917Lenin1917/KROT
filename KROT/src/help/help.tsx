import HomeScreenImg from "@assets/HomeScreen.png";
import Window from "@components/Window.tsx";
import emergencyExitImg from "@assets/EmergencyExit.png";
import {Link, useNavigate} from "react-router-dom";
export default function Help({fromLevel = false, setRenderLibrary = (...args: any[]) => {} }: { fromLevel?: boolean, setRenderLibrary?: (...args: any[]) => any}) {
  const navigate = useNavigate()
  return (
    <div className={"flex justify-center"}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>
        <div className={"grid w-full h-full"} style={{
          gridTemplateRows: "repeat(auto-fill, 20px)",
          gridTemplateColumns: "repeat(auto-fill, 20px)"
        }}>

          <button className={"hover_size z-10"} onClick={() => {
            if (!fromLevel)
              navigate(-1)
            else
              setRenderLibrary(false)
          }} style={{gridArea: "3 / 4 / span 3 / span 3", backgroundImage: `url(${emergencyExitImg})`}}>
          </button>
          <div></div>
          <Link to={"caesar/ХОЧУПИТСЫ"} style={{gridArea: "10 / 20 / span 20 / span 20"}} className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 disabled:bg-gray-200 w-[600px] flex align-middle items-center justify-center"}>Симметричное шифрование
          </Link>
          <Link to={"caesar/ПИТСААААА"} style={{gridArea: "20 / 20 / span 20 / span 20"}} className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100 disabled:bg-gray-200 w-[600px] flex align-middle items-center justify-center"}>Асимметричное шифрование

          </Link>
        </div>
      </Window>
    </div>
  )
}