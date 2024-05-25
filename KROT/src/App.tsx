import './App.css'
import Router from "./routes.tsx";
import {BrowserRouter} from "react-router-dom";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_IP} from "./main.tsx";

export type User = {
    username: string,
    current_level: number,
    current_chapter: number,
    gender: string,
    first_login: number,
    colored_agents: number[]
}

export const UserContext = createContext<{
  user: User | null}>({user: null})

function App() {
  const lsUser = localStorage.getItem('user')
  const [user, setUser] = useState<User | null>(lsUser ? JSON.parse(lsUser) : null)
  const location = window.location
  useEffect(() => {
     axios.post(`${BACKEND_IP}/api/current_user`, {
          token: localStorage.getItem('token')
        }).then(response => {
          setUser(response.data.user)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          if (['/', '/login', '/registration'].includes(location.pathname)) {
            window.location.href = '/home'
          }
        }).catch(err => {
          console.log(err)
          if (!['/', '/login', '/registration'].includes(location.pathname)) {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            window.location.href = '/login'
          }
        })
    const id = setInterval(() => {
        axios.post(`${BACKEND_IP}/api/current_user`, {
          token: localStorage.getItem('token')
        }).then(response => {
          setUser(response.data.user)
          localStorage.setItem('user', JSON.stringify(response.data.user))
        }).catch(err => {
          console.log(err)
          if (!['/', '/login', '/registration'].includes(location.pathname)) {
            window.location.href = '/login'
          }
        })
    }, 5000)

    return () => { clearInterval(id) }
  }, [])

  return (
      <BrowserRouter>
        <UserContext.Provider value={{user: user}}>
          <Router/>
        </UserContext.Provider>
      </BrowserRouter>
  )

}

export default App
