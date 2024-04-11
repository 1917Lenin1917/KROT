import {Link} from "react-router-dom";

export default function LevelSelectPage() {
  const levels = import.meta.glob('../levels/*.tsx')

  console.log(levels)
  return (
    <div className={"grid justify-center m-10"}>
      {Object.keys(levels).map((path, key) => <Link className={"border-black m-2 border-4"} key={key} to={`/level/${path.replace('../levels/', '').replace('.tsx', '')}`}><button>Уровень {path.replace('../levels/', '').replace('.tsx', '')}</button></Link>)}
      <Link to={"/home"}>
        <button>Домой</button>
      </Link>
    </div>
  )
}