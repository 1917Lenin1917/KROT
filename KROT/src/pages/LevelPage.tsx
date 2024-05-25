import { useParams } from "react-router-dom";
import Chapter1Level1 from "../levels/1/1.tsx"
import Chapter1Level2 from "../levels/1/2.tsx"
import Chapter1Level31 from "../levels/1/3.tsx"
import Chapter1Level32 from "../levels/1/4.tsx"
import Chapter1Level33 from "../levels/1/5.tsx"
import Chapter1Level6 from "../levels/1/6.tsx"
import Chapter1Level7 from "../levels/1/7.tsx"
import Chapter1Level8 from "../levels/1/8.tsx"
import Chapter1Level9 from "../levels/1/9.tsx"
import Chapter1Level10 from "../levels/1/10.tsx"
import Chapter1Level11 from "../levels/1/11.tsx"
import Chapter1Level12 from "../levels/1/12.tsx"
import Chapter1Level13 from "../levels/1/13.tsx"
import Chapter1Level14 from "../levels/1/14.tsx"
import Chapter1Level15 from "../levels/1/15.tsx"

export default function LevelPage() {
  const { chapter, level } = useParams() as { chapter: string, level: string }
  // const Component = lazy(() => import((`../levels/${chapter}/${level}.tsx`)))
  return (
    <>
      {chapter === '1' && level === '1' && <Chapter1Level1/>}
      {chapter === '1' && level === '2' && <Chapter1Level2/>}
      {chapter === '1' && level === '3' && <Chapter1Level31/>}
      {chapter === '1' && level === '4' && <Chapter1Level32/>}
      {chapter === '1' && level === '5' && <Chapter1Level33/>}
      {chapter === '1' && level === '6' && <Chapter1Level6/>}
      {chapter === '1' && level === '7' && <Chapter1Level7/>}
      {chapter === '1' && level === '8' && <Chapter1Level8/>}
      {chapter === '1' && level === '9' && <Chapter1Level9/>}
      {chapter === '1' && level === '10' && <Chapter1Level10/>}
      {chapter === '1' && level === '11' && <Chapter1Level11/>}
      {chapter === '1' && level === '12' && <Chapter1Level12/>}
      {chapter === '1' && level === '13' && <Chapter1Level13/>}
      {chapter === '1' && level === '14' && <Chapter1Level14/>}
      {chapter === '1' && level === '15' && <Chapter1Level15/>}
    </>
  )
}