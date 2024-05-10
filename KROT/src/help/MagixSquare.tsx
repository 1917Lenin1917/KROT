import {useEffect, useState} from "react";

function getMagicNumbers() {
  return [
    16,  3,  2, 13,
     9,  6,  7, 12,
     5, 10, 11,  8,
     4, 15, 14,  1
  ]
}

export function MagicSquare() {
  const qWord = "НЕОКОЛОНИАЛИЗМ"
  const [index, setIndex] = useState(-1)
  const [remove, setRemove] = useState(false)
  const [encr, setEncr] = useState('')
  const [array, setArray] = useState<(string | number)[]>(getMagicNumbers)
  const rows = [0, 1, 2, 3].map(i => array.slice(4 * i, 4 * (i + 1)))
  const [outIdx, setOutIdx] = useState(-1)
  useEffect(() => {
    console.log(array.length)
    if (outIdx !== -1 && index === array.length - 1 && outIdx < array.length) {
      setEncr(encr + array[outIdx])
      return
    }

    if (remove) {
      const idx = getMagicNumbers().findIndex(v => v === index+2)
      setArray(array.with(idx, getMagicNumbers()[idx]))
      setRemove(false)
      return
    }

    if (index === -1) return
    const idx = array.findIndex(v => v === index+1)
    setArray(array.with(idx, qWord[index] ?? ''))
  }, [index, outIdx])

  return (
    <div className={"grid text-2xl w-[900px]"}
         style={{gridTemplateColumns: "175px 175px 175px 300px", gridTemplateRows: "87.5px 87.5px 87.5px 87.5px"}}>
      <table className={"mt-6 w-[200px]"} style={{gridArea: "1 / 1 / 3 / 3"}}>
        <tbody>
        {rows.map((row, i) => <tr key={i}>{row.map((num, j) => <td className={(i*4+j === getMagicNumbers().findIndex(v => v === index+1) && index !== array.length - 1) || (i*4+j == outIdx) ? "dark-green-cell" : typeof num === 'string' ? "green-cell" : "regular-cell"} key={`${i}+${j}`}>{num}</td>)}</tr>)}
        </tbody>
      </table>

      <div style={{gridArea: "1 / 3 / span 1 / span 2"}} className={"ms-2 text-xl"}>Открытый текст: <br/> {Array.from(qWord).map((c, i) => <span className={index === i ? "text-red-800" : ""} key={i}>{c}</span>)}</div>
      <div style={{gridArea: "2 / 3 / span 1 / span 2"}} className={"ms-2 text-xl "}>Шифротекст: <br/> {encr.split(' ').map((e, i) => <span className={index === i-1 ? "text-red-800" : ""} key={i}>{e} </span>)}</div>
      {index < array.length - 1 && <button className={"border-black bg-orange-200 border m-4"} style={{gridArea: "3 / 3 / span 1 / span 2"}} onClick={() => { if (index <= qWord.length) setIndex(index + 1) }} >Далее</button>}
      {index >= array.length - 1 && <button className={"border-black bg-orange-200 border m-4"} style={{gridArea: "3 / 3 / span 1 / span 2"}} onClick={() => { if (outIdx < array.length - 1) setOutIdx(outIdx + 1) }} >Далее</button>}

      {/*<button className={"border-black bg-orange-200 border m-4"} style={{gridArea: "4 / 3 / span 1 / span 2"}} onClick={() => { if (index >= 0) { setRemove(true); setIndex(index - 1) }} } >Назад</button>*/}
    </div>
  )

}
