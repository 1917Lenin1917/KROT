import { useParams } from "react-router-dom";
import Chapter1Level1 from "../levels/1/1.tsx"
import Chapter1Level2 from "../levels/1/2.tsx"

export default function LevelPage() {
  const { chapter, level } = useParams() as { chapter: string, level: string }
  // const Component = lazy(() => import((`../levels/${chapter}/${level}.tsx`)))
  return (
    <>
      {chapter === '1' && level === '1' && <Chapter1Level1/>}
      {chapter === '1' && level === '2' && <Chapter1Level2/>}
    </>
  )
}