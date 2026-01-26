import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Header({ isOpen, setIsOpen, currentChatId, chatsList, user }) {

    // Find the current chat 
    const currentChat = chatsList ? chatsList.find(c => c.id === currentChatId) : null;

    // Find the title
    const currentTitle = currentChat ? currentChat.name : "Projet LLM";

    return (
        <header className="p-4">

            {/* MOBILE NAV */}
            <nav
                className="flex items-center justify-between lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer"
                >
                    {!isOpen && (
                        <GiHamburgerMenu className="text-[#003C57]" />
                    )}
                </button>
                <h1 className="font-bold text-[#003c57]">{currentTitle}</h1>

                {/* Display the first letter of username in user area */}
                <span>{user.username[0].toUpperCase()}</span>
            </nav>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:block lg:flex lg:justify-between">
                <h1 className="text-[#003c57]">Projet portfolio LLM</h1>

                {/* SHOW CHAT TITLE IF EXISTING */}
                {currentChat && (
                    <h2 className="font-bold truncate">{currentTitle}</h2>
                )}

                <span>user</span>
            </nav>
        </header>
    )
}
