import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Saludar() {
    const { currentUser } = useAuth()
    return (
        <div>Hola {currentUser.email} </div>

  )
}