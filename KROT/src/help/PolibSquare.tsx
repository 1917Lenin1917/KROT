// function getAlphabet() { return [...Array('Я'.charCodeAt(0)-'А'.charCodeAt(0)+1).keys()].map(num => String.fromCharCode('А'.charCodeAt(0)+num)) }
import {useEffect, useState} from "react";

function getAlphabet() {
  return ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '-', '-', '-']
}

export function PolibSquare() {
  const qWord = "НЕОКОЛОНИАЛИЗМ"
  const rowsWithoutNumbers = [0, 1, 2, 3, 4, 5].map(i => getAlphabet().slice(6 * i, 6 * (i + 1)))
  const rows = rowsWithoutNumbers.map(((row, idx) => [idx + 1, ...row]))
  const [currentChar, setCurrentChar] = useState("")
  const [rowIdx, setRowIdx] = useState(0)
  const [colIdx, setColIdx] = useState(0)
  const [index, setIndex] = useState(-1)
  const [remove, setRemove] = useState(false)
  const [encr, setEncr] = useState('')
  useEffect(() => {
    for(let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        if (rows[i][j] === currentChar) {
          setRowIdx(i+1)
          setColIdx(j+1)
          if (remove && index === qWord.length -1) {
            setRemove(false)
            return
          }
          setEncr(!remove ? encr + ` ${i+1}${j}` : encr.slice(0, encr.length-3))
          setRemove(false)
          return
        }
      }
    }

    setRemove(false)
    if (index === -1) setEncr('')
    setRowIdx(0)
    setColIdx(0)
  }, [currentChar])

  useEffect(() => {
    setCurrentChar(qWord[index])

  }, [index])

  return (
    <div className={"grid text-2xl w-[900px]"}
         style={{gridTemplateColumns: "175px 175px 175px 300px", gridTemplateRows: "87.5px 87.5px 87.5px 87.5px"}}>
      <table style={{gridArea: "1 / 1 / 3 / 3"}}>
        <tbody>
        <tr>
          <td className={"yellow-cell"}></td>
          <td className={colIdx - 2 === 0 ? "dark-green-cell" : "yellow-cell"}>1</td>
          <td className={colIdx - 2 === 1 ? "dark-green-cell" : "yellow-cell"}>2</td>
          <td className={colIdx - 2 === 2 ? "dark-green-cell" : "yellow-cell"}>3</td>
          <td className={colIdx - 2 === 3 ? "dark-green-cell" : "yellow-cell"}>4</td>
          <td className={colIdx - 2 === 4 ? "dark-green-cell" : "yellow-cell"}>5</td>
          <td className={colIdx - 2 === 5 ? "dark-green-cell" : "yellow-cell"}>6</td>
        </tr>
        {rows.map(((row, i) => <tr key={`${i}`}>{row.map((item, j) => <td key={`${i}-${j}`}
                                                                          className={typeof item === 'number' ? (item === rowIdx ? "dark-green-cell" : "yellow-cell") : (item === currentChar ? "dark-green-cell" : (i === rowIdx - 1 && j < colIdx) || (j === colIdx - 1 && i < rowIdx - 1) ? "green-cell" : "regular-cell")}>{item}</td>)}</tr>))}
        </tbody>
      </table>

      <div style={{gridArea: "1 / 3 / span 1 / span 2"}} className={"ms-2 text-xl"}>Открытый текст: <br/> {Array.from(qWord).map((c, i) => <span className={index === i ? "text-red-800" : ""} key={i}>{c}</span>)}</div>
      <div style={{gridArea: "2 / 3 / span 1 / span 2"}} className={"ms-2 text-xl "}>Шифротекст: <br/> {encr.split(' ').map((e, i) => <span className={index === i-1 ? "text-red-800" : ""} key={i}>{e} </span>)}</div>
      <button className={"border-black bg-orange-200 border m-4"} style={{gridArea: "3 / 3 / span 1 / span 2"}} onClick={() => { if (index < qWord.length) setIndex(index + 1) }} >Далее</button>
      <button className={"border-black bg-orange-200 border m-4"} style={{gridArea: "4 / 3 / span 1 / span 2"}} onClick={() => { if (index >= 0) { setRemove(true); setIndex(index - 1) }} } >Назад</button>
    </div>
  )

}