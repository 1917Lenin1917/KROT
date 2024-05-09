import backgroundImg from '@assets/TableBackground.png';

import Window from "@components/Window.tsx";
import {ReactNode, useEffect, useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

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
  const navigate = useNavigate()
    return (
        <div className={"flex justify-center "}>
            <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"} backgroundImg={backgroundImg}>
                <BaseForm>
                    <button
                      onClick={(e) => { e.preventDefault(); navigate('/login') }}
                      className={"z-10 border-black justify-self-center border-4 w-80 h-20 text-4xl bg-orange-100"}>
                      Вход
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); navigate('/registration') }}
                      className={"z-10 border-black justify-self-center border-4 w-80 h-20 text-4xl bg-orange-100"}>
                      Регистрация
                    </button>
                </BaseForm>
            </Window>
        </div>
    )
}

export function LoginPage() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token'))
      navigate('/home')
  }, [])

  return (
      <div className={"flex justify-center "}>
         <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"}
                backgroundImg={backgroundImg}>
           <BaseForm>
             <input required onChange={(e) => {
               setUsername(e.currentTarget.value)
             }} placeholder={"Имя пользователя"}
                    className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>
             <input required type={"password"} onChange={(e) => {
               setPassword(e.currentTarget.value)
             }} placeholder={"Пароль"}
                    className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>

             <div className={"mx-auto z-10 text-red-800"}>{error}</div>
             <button
               type={"submit"}
               onClick={(e) => {
                 e.preventDefault()
                 if (!e.currentTarget.form!.checkValidity()) {
                   e.currentTarget.form!.reportValidity()
                   return
                 }
                 axios.post('http://krot-game.ru/api/login', {
                   username: username,
                   password: password,
                 }, {method: "post"})
                   .then((resp) => {
                     console.log(resp)
                     if (resp.status === 200) {
                       if (resp.data.user.first_login)
                          navigate('/tutorial')
                       else
                         navigate('/home')
                     localStorage.setItem('token', resp.data.token)
                     localStorage.setItem('user', JSON.stringify(resp.data.user))
                   }
                 }).catch((err) => {
                 console.log(err.response.data.detail)
                 setError(err.response.data.detail)
                 setTimeout(() => { setError('') }, 2000)
               })
             }}
               className={"z-10 border-black justify-self-center border-4 h-20 w-60 text-4xl bg-orange-100"}>Войти
             </button>

           </BaseForm>
         </Window>
      </div>
  )
}

export function RegistrationPage() {
  const [username, setUsername] = useState<string>("")
  const [gender, setGender] = useState<string>("М")
  const [password, setPassword] = useState<string>("")

  const [error, setError] = useState<string>("")
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token'))
      navigate('/home')
  }, [])

  return (
      <div className={"flex justify-center "}>
          <Window w={1060} h={740.5} windowClasses={"mt-10 flex flex-wrap content-center justify-center"}
                  backgroundImg={backgroundImg}>
              <BaseForm>
                  <input required onChange={(e) => { setUsername(e.currentTarget.value) }} placeholder={"Имя пользователя"} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>
                  <select required onChange={(e) => { setGender(e.currentTarget.value) }} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}>
                    <option>М</option>
                    <option>Ж</option>
                    <option>ХЗ</option>
                  </select>
                  <input type={"password"} required onChange={(e) => { setPassword(e.currentTarget.value) }} placeholder={"Пароль"} className={"z-10 opacity-65 h-12 w-2/3 justify-self-center border-black border-4"}></input>
                  <div className={"mx-auto z-10 text-red-800"}>{error}</div>
                  <button
                    type={"submit"}
                    onClick={(e) => {
                      e.preventDefault()
                      if (!e.currentTarget.form!.checkValidity()) {
                        e.currentTarget.form!.reportValidity()
                        return
                      }
                      axios.post('http://krot-game.ru/api/register', {
                        username: username,
                        password: password,
                        gender: gender
                      }, {method: "post"})
                      .then((resp) => {
                        console.log(resp)
                        if (resp.status === 200)
                          navigate('/login')
                      }).catch((err) => {
                        console.log(err.response.data.detail)
                        setError(err.response.data.detail)
                        setTimeout(() => { setError('') }, 2000)
                      })
                    }}
                    className={"z-10 border-black justify-self-center border-4 h-20 text-4xl bg-orange-100"}>Зарегистрироваться</button>
              </BaseForm>
          </Window>
      </div>
  )
}