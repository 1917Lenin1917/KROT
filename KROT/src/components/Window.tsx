import {ReactNode} from "react";

type WindowProps = {
    windowClasses?: string,
    children?: ReactNode,
    backgroundImg: string,
    w?: number,
    h?: number,
}
export default function Window({ windowClasses, children, backgroundImg, w, h } : WindowProps) {
    return (
        <div style={{width: `${w}px`, height: `${h}px`, backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover"}} className={" window " + (windowClasses ?? "")}>
            {children}
        </div>
    )
}