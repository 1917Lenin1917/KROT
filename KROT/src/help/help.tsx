import HomeScreenImg from "@assets/HomeScreen.png";
import Window from "@components/Window.tsx";
import emergencyExitImg from "@assets/EmergencyExit.png";
import {useNavigate} from "react-router-dom";
import Pegament from "@assets/pergament.png"
import {Dispatch, SetStateAction, useState} from "react";
import Left from "@assets/arrowLeft.png";
import Right from "@assets/arrowRight.png";
import Sym from "@assets/sym.png"
import CesarHelp from "./Cesar.tsx";
import XOR1 from "@assets/XOR1.png"
import XOR2 from "@assets/XOR2.png"
import KV1 from "@assets/kv1.png"
import KV2 from "@assets/kv2.png"
import KV3 from "@assets/kv3.png"
import {PolibSquare} from "./PolibSquare.tsx";
import {MagicSquare} from "./MagixSquare.tsx";

export default function Help({fromLevel = false, setRenderLibrary = () => {}}: { fromLevel?: boolean, setRenderLibrary?: Dispatch<SetStateAction<boolean>>}) {
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const pages = [
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "16 / 12 / span 4 / span 35"}} className={"text-4xl"}>КРИПТОГРАФИЯ И КРИПТОАНАЛИЗ</div>
      <div style={{gridArea: "18 / 26 / span 4 / span 35"}} className={"text-4xl"}>ДЛЯ</div>
      <div style={{gridArea: "20 / 22 / span 4 / span 35"}} className={"text-4xl"}>НАЧИНАЮЩИХ</div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 24 / span 4 / span 40"}} className={"text-4xl"}>Введение
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Криптография – это метод сокрытия или шифрования данных, прочитать которые сможет только адресат, у которого
        есть ключ к шифру. При буквальном переводе с греческого слово «криптография» означает «тайнопись», но на самом
        деле под этим термином понимается безопасная передача информации.
        <br/> <br/>
        Шифрование – метод защиты данных путем их преобразования таким образом, чтобы сообщение могли прочитать только
        авторизованные пользователи. Для обратного преобразования (дешифрования) и доступа к передаваемым сообщениям
        такие пользователи используют специальный ключ.
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 24 / span 4 / span 40"}} className={"text-4xl"}>Введение
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Криптоанализ – наука о методах дешифровки зашифрованной информации без предназначенного для этого ключа, а также
        сам процесс такой дешифровки.
        <br/><br/>
        Криптостойкость – это способность криптографического алгоритма противостоять криптоанализу.
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 16 / span 4 / span 40"}} className={"text-4xl"}>Симметричное шифрование
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Симметричное шифрование — это способ шифрования данных, при котором один и тот же ключ используется и для
        кодирования, и для восстановления информации. До 1970-х годов, когда появились первые асимметричные шифры, оно
        было единственным криптографическим методом.
        <br/>
        При описании классических шифров исходим из следующих определений:
        <li>Исходный текст - текстовое (или может быть какое-либо другое) сообщение, которое требуется зашифровать;</li>
        <li>Ключ - набор значений, который используется для шифрования исходного текста;</li>
        <li>Зашифрованный текст - результат применения алгоритма шифрования и ключа к исходному тексту.</li>
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 16 / span 4 / span 40"}} className={"text-4xl"}>Симметричное шифрование
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        По размеру преобразуемой информации алгоритмы симметричного шифрования делятся на два типа:
        <li>Блочные шифры — это алгоритмы, при которых информация предварительно разбивается на блоки фиксированной
          длины, которые шифруются каждый по отдельности.</li>
        <li>Потоковые шифры — это алгоритмы, которые шифруют информацию целиком, символ за символом. Как правило,
          шифрование текущего символа зависит от результатов работы алгоритма с предыдущими символами.
        </li>
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 16 / span 4 / span 30"}} className={"text-4xl"}>Симметричное шифрование
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 8 / span 4 / span 40"}}>
        <img src={Sym}></img>
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 9 / span 4 / span 50"}} className={"text-4xl"}>Симметричное шифрование. Шифр Цезаря
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Шифр Цезаря - это один из самых древних и простых моноалфавитных шифров. При шифровании каждый символ
        заменяется другим, отстоящим от него в алфавите на фиксированное число позиций (обычно 3). Соответственно,
        ключом
        будет являться число сдвига. Цезарь использовал шифр для связи со своими чиновниками.
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 9 / span 4 / span 50"}} className={"text-4xl"}>Симметричное шифрование. Шифр Цезаря
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Пример шифрования слова при помощи шифра Цезаря. Ключ k = 3.
      </div>
      <div style={{gridArea: "16 / 8 / span 4 / span 40"}}>
        <CesarHelp/>
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 7 / span 4 / span 50"}} className={"text-4xl"}>Симметричное шифрование. Квадрат
        Полибия
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        В этом шифре каждой букве предназначена своя пара цифр одна по горизонтальной линии, а другая по вертикальной.
        Данный вид кодирования изначально применялся для греческого алфавита, но затем был распространен на другие
        языки.
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 7 / span 4 / span 50"}} className={"text-4xl"}>Симметричное шифрование. Квадрат
        Полибия
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Пример шифрования слова при помощи квадрата Полибия.
      </div>
      <div style={{gridArea: "16 / 8 / span 4 / span 40"}}>
        <PolibSquare/>
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричное шифрование. Магический
        квадрат.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Магические квадраты - таблицы с вписанными в их клетки последовательными натуральными числами, начиная от 1,
        которые дают в сумме по каждому столбцу, строке и диагонали одно и то же число.
      </div>
      <img style={{gridArea: "20 / 6 / span 9 / span 9"}} src={KV1}></img>
      <img style={{gridArea: "19 / 21 / span 12 / span 12"}} src={KV2}></img>
      <img style={{gridArea: "17 / 38 / span 15 / span 15"}} src={KV3}></img>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричное шифрование. Магический квадрат.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        При шифровании буквы открытого текста необходимо вписать в магический квадрат в соответствии с нумерацией его клеток. Для получения шифртекста считывают содержимое заполненной таблицы по строкам.
      </div>
      <div style={{gridArea: "16 / 8 / span 4 / span 40"}}>
        <MagicSquare/>
      </div>
    </>,
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 6 / span 4 / span 50"}} className={"text-2xl"}>Симметричные шифры. Шифр табличной маршрутной перестановки.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        При шифровании в такую таблицу вписывают исходное сообщение по определенному маршруту, а выписывают (получают
        шифрограмму) - по-другому. Для данного шифра маршруты
        вписывания и выписывания, а также размеры таблицы являются ключом
      </div>
      <div style={{gridArea: "16 / 8 / span 4 / span 40"}}>
      </div>
    </>,

    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричноые шифры. Сложение по модулю 2.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Шифр “сложение по модулю 2” является шифром гаммирования. Гамма - секретное слово, которое и является ключом. Буквы исходного текста и ключа переводятся в двоичный код, затем  “буквы” исходного текста и ключа складываются по модулю 2 посимвольно.
        Гамма должна повторяться столько раз, пока не “заполнит” весь шифруемый текст.
      </div>
      <div style={{gridArea: "16 / 8 / span 4 / span 40"}}>
      </div>
    </>,

    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричноые шифры. Сложение по модулю 2.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Сложение по модулю 2 - логическая операция в информатике.
        Обозначение : A xor B
      </div>
      <div style={{gridArea: "16 / 8 / span 4 / span 40"}}>
      </div>
    </>,

    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричноые шифры. Сложение по модулю 2.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        В данном примере для перевода букв в двоичный код будет использоваться табличка кодов символов Windows 1251.
      </div>
        <img style={{gridArea: "15 / 5 / span 4 / span 10"}} src={XOR1}></img>
        <img style={{width: "800px", gridArea: "15 / 16 / span 10 / span 37"}} src={XOR2}></img>
    </>,
  ]

  return (
    <div className={"flex justify-center"}>
      <Window w={1108.2} h={752.5} backgroundImg={HomeScreenImg}>
        <div className={"grid w-full h-full"} style={{
          gridTemplateRows: "repeat(auto-fill, 20px)",
          gridTemplateColumns: "repeat(auto-fill, 20px)"
        }}>

          <button className={"hover_size z-10"} onClick={() => {
            if (!fromLevel)
              navigate(-1)
            else
              setRenderLibrary(false)
          }} style={{gridArea: "3 / 4 / span 3 / span 3", backgroundImage: `url(${emergencyExitImg})`}}>
          </button>

          {pages[page]}

          {page !== 0 ? <button className={"hover_size z-10"} onClick={() => {
            setPage(page - 1)
          }} style={{gridArea: "3 / 43 / span 3 / span 6", backgroundImage: `url(${Left})`}}>
          </button> : null}

          {page !== pages.length - 1 ?
            <button disabled={page === pages.length - 1} className={"hover_size z-10"} onClick={() => {
              setPage(page + 1)
            }} style={{gridArea: "3 / 48 / span 3 / span 6", backgroundImage: `url(${Right})`}}>
            </button> : null}
        </div>
      </Window>
    </div>
  )
}