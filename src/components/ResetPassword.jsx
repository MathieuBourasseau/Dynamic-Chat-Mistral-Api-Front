import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

export default function ResetPassword() {

    const { token } = useParams(); // get the :token in the request
    const [password, setPassword] = useState(''); // By default the password is empty
    const [message, setMessage] = useState(''); // By default no message
    const [showPassword, setShowPassword] = useState(false); // Password hidden by default
    
    const handleChange = (e) => {
        setShowPassword(e.target.value)
    };

    return (
        <form>
            <div>
                <input
                    type={ showPassword ? "text" : "password"}
                    placeholder="Nouveau mot de passe"
                    value={password}
                    onChange={handleChange}
                />
                <span
                    className="cursor-pointer text-white"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <IoMdEyeOff />
                    ) : (
                        <FaEye />
                    )}
                </span>
            </div>
            <button
                type="submit"
            >
                Changer le mot de passe
            </button>
        </form>
    )
}
