import {ReactNode} from "react";

type WindowProps = {
    windowClasses?: string,
    children?: ReactNode,
    backgroundImg: string,
    w?: number,
    h?: number,
}
// w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"}
export default function Window({ windowClasses="mt-10 flex flex-wrap content-center justify-center", children, backgroundImg, w=1060, h=740.5 } : WindowProps) {
    return (
        <div style={{width: `${w}px`, height: `${h}px`, backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover"}} className={" window " + (windowClasses ?? "")}>
            {children}
        </div>
    )
}