import backgroundImg from '@assets/TableBackground.png';

import Window from "@components/Window.tsx";
import {ReactNode, useState} from "react";
import axios from 'axios';

function BaseForm({ children }: {children?: ReactNode}) {
return (
    <form style={{width: "619.5px", height: "422px", gridTemplateRows: "140px auto"}} className={"grid items-center"}>
        <svg className={"absolute z-0"} width="619.5" height="422" viewBox="0 0 1239 844" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_5_91)">
                <path d="M0 0H1239V844H0V0Z" fill="#DCB06E" fillOpacity="0.5"/>
            </g>
            <path d="M3.5 3.5H1235.5V840.5H3.5V3.5Z" stroke="black" strokeWidth="7"/>
            <defs>
                <filter id="filter0_i_5_91" x="0" y="0" width="1239" height="848"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix"
                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_91"/>
                </filter>
            </defs>

        </svg>
        <div className={"flex z-10 text-center border-black border-4 text-5xl h-20 bg-orange-100 justify-center"}><span
            className={"my-auto"}>Спецоперция КРОТ</span></div>
        {children}
    </form>
)
}

export function LoginRegistrationPage() {
    return (
        <div className={"flex justify-center "}>
            <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"} backgroundImg={backgroundImg}>
                <BaseForm>
                    <button className={"z-10 border-black justify-self-center border-4 w-80 h-20 text-4xl bg-orange-100"}>Вход
                    </button>
                    <button
                      className={"z-10 border-black justify-self-center border-4 w-80 h-20 text-4xl bg-orange-100"}>Регистрация
                    </button>
                </BaseForm>
            </Window>
        </div>
    )
}

export function LoginPage() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
      <div className={"flex justify-center "}>
         <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"}
                backgroundImg={backgroundImg}>
            <BaseForm>
                <input onChange={(e) => { setUsername(e.currentTarget.value) }} placeholder={"Имя пользователя"} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>
                <input onChange={(e) => { setPassword(e.currentTarget.value) }} placeholder={"Пароль"} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>
                <button
                  type={"submit"}
                  onClick={(e) => {
                    e.preventDefault()
                    axios.post('http://localhost:8000/login', {
                      username: username,
                      password: password,
                    }, {method: "post"})
                    .then((resp) => {
                      console.log(resp)
                    }).catch((err) => {
                      console.log(err)
                    })
                  }}
                  className={"z-10 border-black justify-self-center border-4 h-20 w-60 text-4xl bg-orange-100"}>Войти</button>
            </BaseForm>
        </Window>
      </div>
  )
}

export function RegistrationPage() {
  const [username, setUsername] = useState<string>("")
  const [gender, setGender] = useState<string>("М")
  const [password, setPassword] = useState<string>("")

  return (
      <div className={"flex justify-center "}>
          <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"}
                  backgroundImg={backgroundImg}>
              <BaseForm>
                  <input onChange={(e) => { setUsername(e.currentTarget.value) }} placeholder={"Имя пользователя"} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>
                  <select onChange={(e) => { setGender(e.currentTarget.value) }} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}>
                    <option>М</option>
                    <option>Ж</option>
                    <option>ХЗ</option>
                  </select>
                  <input onChange={(e) => { setPassword(e.currentTarget.value) }} placeholder={"Пароль"} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>
                  <button
                    type={"submit"}
                    onClick={(e) => {
                      e.preventDefault()
                      axios.post('http://localhost:8000/register', {
                        username: username,
                        password: password,
                        gender: gender
                      }, {method: "post"})
                      .then((resp) => {
                        console.log(resp)
                      }).catch((err) => {
                        console.log(err)
                      })
                    }}
                    className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100"}>Зарегистрироваться</button>
              </BaseForm>
          </Window>
      </div>
  )
}