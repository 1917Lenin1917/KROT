import { ElementRef, useEffect, useRef } from "react"

const useOutsideClick = <T extends keyof JSX.IntrinsicElements>(callback: Function) => {
	const ref = useRef<ElementRef<T>>(null)
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("Clicked outside")
				callback()
			}
		}

		document.addEventListener("click", handleClick, true)

		return () => {
			document.removeEventListener("click", handleClick, true)
		}
	}, [ref, callback])

	return ref
}

export default useOutsideClick
