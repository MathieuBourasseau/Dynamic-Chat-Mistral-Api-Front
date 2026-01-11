import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

export default function Panel() {

    // Menu is closed by default
    const [isOpen, setIsOpen] = useState(false);

    // Open and close the panel
    const togglePanel = () => {
        setIsOpen(!isOpen)
    };


    return (
        <aside className={`h-screen flex flex-col gap-4 bg-teal-200 p-4 ${isOpen ? "max-w-[300px]" : "max-w-[70px]"}`}>

            {/* OPEN/CLOSE PANEL */}
            <div className="flex justify-between items-center">

                <button onClick={togglePanel}>
                    {isOpen ? <ImCross /> : <GiHamburgerMenu />}
                </button>

                {/* SEARCH FORMER CHATS */}
                <button>
                    <FaSearch className={isOpen ? "block" : "hidden"} />
                </button>
            </div>

            {/* NEW CHAT */}
            <div>
                <button>
                    <span>+</span>
                    Nouveau chat
                </button>
            </div>

            {/* CHATS BLOC*/}
            <div>
                <h2 className="font-semibold">Chats</h2>
                <div>
                    <h2>Titre</h2>
                    <h2>Titre</h2>
                    <h2>Titre</h2>
                    <h2>Titre</h2>
                    <h2>Titre</h2>
                    <h2>Titre</h2>
                </div>
            </div>
        </aside>
    )
}
