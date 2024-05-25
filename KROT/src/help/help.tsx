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
import table from "@assets/table.png"
import table2 from "@assets/table2.png"
import table3 from "@assets/table3.png"
import table4 from "@assets/table4.png"
import table5 from "@assets/table5.png"
import vijn1 from "@assets/image 320.png"
import vijn2 from "@assets/image 322.png"
import vijn3 from "@assets/image 323.png"
import vijn4 from "@assets/vijn4.png"
import vijn5 from "@assets/image 339.png"
import vijn6 from "@assets/image 340.png"
import Izgorod from "@assets/Group 12.png"
import DES1 from "@assets/Group 13.png"
import DES2 from "@assets/Group 14.png"
import DES3 from "@assets/Group 15.png"
import DES4 from "@assets/Group 16.png"
import DES5 from "@assets/Group 17.png"
import DES6 from "@assets/Group 18.png"
import DES7 from "@assets/Group 19.png"
import DES8 from "@assets/Group 20.png"
import DES9 from "@assets/Group 21.png"
import DES10 from "@assets/Group 22.png"
import DES11 from "@assets/Group 23.png"
import DES12 from "@assets/Group 24.png"
import DES13 from "@assets/Group 25.png"
import DES14 from "@assets/Group 26.png"
import DES15 from "@assets/Group 27.png"
import DES16 from "@assets/Group 28.png"
import {PolibSquare} from "./PolibSquare.tsx";
import {MagicSquare} from "./MagixSquare.tsx";

export default function Help({fromLevel = false, setRenderLibrary = () => {}}: { fromLevel?: boolean, setRenderLibrary?: Dispatch<SetStateAction<boolean>>}) {
  const navigate = useNavigate()
  const [page, setPage] = useState(fromLevel ? 3 : 0)
  const pages = [
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "16 / 12 / span 4 / span 35"}} className={"text-4xl"}>КРИПТОГРАФИЯ И КРИПТОАНАЛИЗ</div>
      <div style={{gridArea: "18 / 7 / span 4 / span 56"}} className={"text-4xl"}>ДЛЯ ЧАЙНИКОВ/КОФЕВАРОК/ФРЕНЧПРЕССОВ И</div>
      <div style={{gridArea: "20 / 16 / span 4 / span 35"}} className={"text-4xl"}>ЕЩЁ НЕОПРЕДЕЛИВШИХСЯ</div>
    </>, // 0
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
    </>, // 1
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
    </>, // 2
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 10 / span 4 / span 56"}} className={"text-4xl"}>Содержание. Симметричное шифрование
      </div>

      <button onClick={() => {
        setPage(7)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "12 / 8 / span 3 / span 19"}}>Шифр Цезаря
      </button>
      <button onClick={() => {
        setPage(9)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "18 / 8 / span 3 / span 19"}}>Квадрат Полибия
      </button>
      <button onClick={() => {
        setPage(11)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "24 / 8 / span 3 / span 19"}}>Магический квадрат
      </button>
      <button onClick={() => {
        setPage(13)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "30 / 8 / span 3 / span 19"}}>Маршрут. перестанов.
      </button>

      <button onClick={() => {
        setPage(14)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "12 / 31 / span 3 / span 19"}}>Сложение по модулю 2
      </button>
      <button onClick={() => {
        setPage(18)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "18 / 31 / span 3 / span 19"}}>Шифр Виженера
      </button>
      <button onClick={() => {
        setPage(20)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "24 / 31 / span 3 / span 19"}}>Шифр изгороди
      </button>
      <button onClick={() => {
        setPage(21)
      }} className={"hover_size border-4 text-3xl border-black bg-orange-200 hover:border-green-700"}
              style={{gridArea: "30 / 31 / span 3 / span 19"}}>DES
      </button>
    </>, // 3 ОГЛАВЛЕНИЕ
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
    </>, // 4
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
    </>, // 5
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
    </>, // 6
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
    </>, // 7 ЦЕЗАРЬ
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
    </>, // 8
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
    </>, // 9 ПОЛИБИЙ
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
    </>, // 10
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
    </>, // 11 МАГ
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
    </>, // 12
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 6 / span 4 / span 50"}} className={"text-2xl"}>Симметричные шифры. Шифр табличной
        маршрутной перестановки.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        При шифровании в такую таблицу вписывают исходное сообщение по определенному маршруту, а выписывают (получают
        шифрограмму) - по-другому. Для данного шифра маршруты
        вписывания и выписывания, а также размеры таблицы являются ключом
      </div>
      <img width={600 / 1.5} height={450 / 1.5} src={table} style={{gridArea: "19 / 8 / span 4 / span 30"}}></img>
      <div className={"text-2xl"} style={{gridArea: "24 / 36 / span 4 / span 45"}}>
        КРИПТОГРАФИЯ<br/>
        КТАРОФИГИПРЯ
      </div>
    </>, // 13 МАРШРУТ
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. Сложение по модулю
        2.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Шифр “сложение по модулю 2” является шифром гаммирования. Гамма - секретное слово, которое и является ключом. Буквы исходного текста и ключа переводятся в двоичный код, затем  “буквы” исходного текста и ключа складываются по модулю 2 посимвольно.
        Гамма должна повторяться столько раз, пока не “заполнит” весь шифруемый текст.
      </div>
      <img width={900 / 1.5} height={302 / 1.5} src={table2} style={{gridArea: "22 / 21 / span 4 / span 30"}}></img>
      <div className={"text-2xl"} style={{gridArea: "24 / 8 / span 4 / span 45"}}>
        ИСХОДНЫЙ ТЕКСТ:<br/><br/><br/>
      </div>
      <div className={"text-2xl"} style={{gridArea: "29 / 15 / span 4 / span 45"}}>
        ГАММА:
      </div>

    </>, // 14 СЛОЖЕНИЕ ПО М 2
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. Сложение по модулю
        2.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        Сложение по модулю 2 - логическая операция в информатике.
        Обозначение : A xor B
      </div>
      <img width={514 / 1.7} height={564 / 1.7} src={table3} style={{gridArea: "15 / 7 / span 4 / span 30"}}></img>
      <img width={950 / 1.7} height={359 / 1.7} src={table4} style={{gridArea: "21 / 25 / span 4 / span 30"}}></img>
      <div className={"text-2xl"} style={{gridArea: "16 / 26 / span 4 / span 40"}}>
        11010000 xor 11001011 = 00011011
      </div>
    </>, // 15
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. Сложение по модулю 2.
      </div>
      <div className={"text-2xl"} style={{gridArea: "10 / 6 / span 4 / span 45"}}>
        В данном примере для перевода букв в двоичный код будет использоваться табличка кодов символов Windows 1251.
      </div>
        <img style={{gridArea: "15 / 5 / span 4 / span 10"}} src={XOR1}></img>
        <img style={{width: "800px", gridArea: "15 / 16 / span 10 / span 37"}} src={XOR2}></img>
    </>, // 16
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 5 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. Сложение по модулю 2.
      </div>
      <img style={{width: "800px", gridArea: "13 / 10 / span 10 / span 37"}} src={table5}></img>
    </>, // 17
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 8 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. Шифр Виженера.
      </div>
      <div style={{gridArea: "11 / 6 / span 4 / span 45", textIndent: "20px"}} className={"text-2xl"}>
        Шифр Виженера - это метод шифрования, основанный на замене букв с использованием ключевого слова и таблицы
        алфавита.
      </div>
      <div style={{gridArea: "17 / 6 / span 4 / span 45"}} className={"text-2xl"}>
        Пример: <br/>
        текст = КРИПТОГРАФИЯ <br/>
        ключ = КЛЮЧ <br/>
      </div>
      <img width={1674 / 1.7} height={291 / 1.7} src={vijn1} style={{gridArea: "29 / 13 / span 4 / span 30"}}></img>
      <img width={1226 / 1.7} height={87 / 1.7} src={vijn2} style={{gridArea: "20 / 21 / span 4 / span 30"}}></img>
      <img width={485 / 1.7} height={87 / 1.7} src={vijn3} style={{gridArea: "23 / 21 / span 4 / span 30"}}></img>
    </>, // 18 ВИЖНЕР
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 8 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. Шифр Виженера.
      </div>
      <div style={{gridArea: "11 / 6 / span 4 / span 45", textIndent: "20px"}} className={"text-xl"}>
        Символы ключа повторяются, пока не закончится текст.
      </div>
      <img width={1300 / 1.7} height={186 / 1.7} src={vijn4} style={{gridArea: "13 / 13 / span 4 / span 30"}}></img>
      <div style={{gridArea: "18 / 6 / span 4 / span 45", textIndent: "20px"}} className={"text-xl"}>
        Далее значения складываются с потоком ключей и делятся по модулю длины алфавита, в нашем
        случае это 33 буквы. То есть (Т+К) mod 33
      </div>
      <img width={14493 / 4} height={253 / 1.7} src={vijn5} style={{gridArea: "21 / 10 / span 4 / span 40"}}></img>
      <div style={{gridArea: "28 / 6 / span 4 / span 45", textIndent: "20px"}} className={"text-xl"}>
        Мы близки к цели! Следующий шаг - перевести числа в буквы. Воспользуйтесь предыдущей таблицей!
        <br/><br/>ОТВЕТ:
      </div>
      <img width={961 / 1.7} height={121 / 1.7} src={vijn6} style={{gridArea: "31 / 10 / span 4 / span 30"}}></img>
    </>, // 19
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 8 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. Шифр Изгороди.
      </div>
      <div style={{gridArea: "11 / 6 / span 4 / span 45", textIndent: "20px"}} className={"text-xl"}>
        Шифр рельсового ограждения(также называемый зигзагообразным шифром) — это классический тип транспозиционного шифра. Он получил своё название из-за способа, которым выполняется шифрование, по аналогии с забором, построенным из горизонтальных перил.
      </div>
      <img width={1683 / 1.7} height={595 / 1.7} src={Izgorod} style={{gridArea: "19 / 13 / span 4 / span 30"}}></img>
    </>, // 20
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 16 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES.
      </div>
      <div style={{gridArea: "11 / 6 / span 4 / span 45", textIndent: "20px"}} className={"text-xl"}>
        DES - это симметричный блочный шифр. Он был разработан в 1970-х годах и принят в качестве федерального стандарта
        шифрования в США в 1976 году. Ключ в данном шифре длиной 56 бит. Алгоритм шифрования состоит из 16 раундов,
        каждый из которых выполняет различные операции над данными.
        <br/><br/><br/>
        В рамках заданий мы рассмотрим 1 раунд из 16
        <br/><br/><br/>
        Текст: КРИПТОГРАФ
        <br/>
        Ключ: КЛЮЧ
      </div>
    </>, // 21
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 1 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES1} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 22
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 1 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES2} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 23
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 2 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES3} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 24
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 2 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES4} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 25
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 3 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES5} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 26
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 3 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES7} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 27
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 4 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES8} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 28
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 4 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES9} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 29
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 5 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES10} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 30
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 5 этап.
      </div>
      <img width={1803 / 1.7} height={918 / 1.7} src={DES11} style={{gridArea: "12 / 7 / span 11 / span 44"}}></img>
    </>, // 31
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 5 этап.
      </div>
      <img width={1803 / 2} height={918 / 2} src={DES12} style={{gridArea: "10 / 9 / span 11 / span 39"}}></img>
    </>, // 32
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 5 этап.
      </div>
      <img width={1803 / 2} height={918 / 2} src={DES13} style={{gridArea: "10 / 7 / span 11 / span 44"}}></img>
    </>, // 33
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 5 этап.
      </div>
      <img width={1803 / 2} height={918 / 2} src={DES14} style={{gridArea: "10 / 9 / span 11 / span 39"}}></img>
    </>, // 34
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 5 этап.
      </div>
      <img width={1803 / 2} height={918 / 2} src={DES15} style={{gridArea: "10 / 9 / span 11 / span 39"}}></img>
    </>, // 35
    <>
      <div style={{gridArea: "4 / 4 / span 4 / span 40"}}>
        <Window w={1000} h={600} backgroundImg={Pegament}>
        </Window>
      </div>
      <div style={{gridArea: "7 / 14 / span 4 / span 50"}} className={"text-4xl"}>Симметричные шифры. DES. 5 этап.
      </div>
      <img width={1803 / 2} height={918 / 2} src={DES16} style={{gridArea: "10 / 9 / span 11 / span 39"}}></img>
    </>, // 36
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

          { page > 3 && <button className={"border-black bg-orange-200 border m-4"} style={{ gridArea: "3 / 18 / span 3 / span 20" }} onClick={() => setPage(3)}>Содержание</button>}
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