import Window from "@components/Window.tsx";
import HomeScreenImg from "@assets/HomeScreen.png";
import emergencyExitImg from "@assets/EmergencyExit.png";
import computerIconImg from "@assets/ComputerIcon.png";
import magnifierIconImg from "@assets/MagnifierIcon.png";
import mailIconImg from "@assets/MailIcon.png";
import planetIconImg from "@assets/PlanetIcon.png";
import threadIconImg from "@assets/ThreadIcon.png";
import dangerIcon from "@assets/danger.png"
import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../App.tsx";

export default function HomePage() {
  const location = useLocation()
  const { user } = useContext(UserContext)
  return (
    <div className={"flex justify-center "}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>
        <div className={"grid w-full h-full"} style={{
          gridTemplateRows: "repeat(auto-fill, 20px)",
          gridTemplateColumns: "repeat(auto-fill, 20px)"
        }}>
          <Link state={{background: location}} to={"/exit"} className={"hover_size"} style={{gridArea: "4 / 4 / span 3 / span 3", backgroundImage: `url(${emergencyExitImg})`}}>
            <button >
            </button>
          </Link>

          <Link className={"hover_size"}
                to={"/levels"}
                  style={{gridArea: "4 / 44 / span 3 / span 3", backgroundImage: `url(${planetIconImg})`}}>
            <button>
            </button>
          </Link>
          <Link to={"/computer"} className={"hover_size"} style={{gridArea: "4 / 47 / span 3 / span 3", backgroundImage: `url(${computerIconImg})`}}>
            <button></button>
          </Link>
          <Link to={"/mail"} className={"hover_size grid"} style={{gridArea: "4 / 50 / span 3 / span 3", backgroundImage: `url(${mailIconImg})`}}>
            { user && user.current_chapter === 1 && user.current_level === 1 && !localStorage.getItem('read_1_1') && <img className={"w-[40px] h-[40px] justify-self-center self-center"} src={dangerIcon}></img> }
            { user && user.current_chapter === 1 && user.current_level === 2 && !localStorage.getItem('read_1_2') && <img className={"w-[40px] h-[40px] justify-self-center self-center"} src={dangerIcon}></img> }
          </Link>

          <Link to={"/help"} className={"hover_size"} style={{gridArea: "32 / 4 / span 3 / span 3", backgroundImage: `url(${magnifierIconImg})`}}>
            <button>
            </button>
          </Link>
          <button className={"hover_size"} style={{gridArea: "32 / 50 / span 3 / span 3", backgroundImage: `url(${threadIconImg})`}}>

          </button>
        </div>
      </Window>
    </div>
  )
}