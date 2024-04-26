import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";


export default function LevelPage() {
  const { chapter, level } = useParams() as { chapter: string, level: string }
  const Component = lazy(() => import((`../levels/${chapter}/${level}.tsx`)))
  console.log(level, Component)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component/>
    </Suspense>
  )
}