import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../context/AuthContext" //contexto de autenticación

export default function Logout() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      console.log('sesión cerrada');
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
      <span style={{
         height: '100%',
         display: 'flex',
         alignItems: 'center',
         }} onClick={handleLogout}>
          Cerrar sesión
      </span>
  )
}