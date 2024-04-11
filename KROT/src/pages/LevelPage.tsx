import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";


export default function LevelPage() {
  const { id } = useParams() as { id: string }
  const Component = lazy(() => import((`../levels/${id}.tsx`)))
  console.log(id, Component)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component/>
    </Suspense>
  )
}