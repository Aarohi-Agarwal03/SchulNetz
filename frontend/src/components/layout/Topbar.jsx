import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

function Topbar() {
    const [profileOpen, setProfileOpen] = useState(false);
    const [title, setTitle] = useState("Dashboard");

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        // Change title based on current path
        const path = window.location.pathname;
        if (path === "/admin") {
            setTitle("Admin Dashboard");
        } else {
            setTitle("Dashboard");
        }
    }, [window.location.pathname]);

    return (
        <div className="bg-white px-6 py-4 shadow flex justify-between items-center">
            <h2 className="font-semibold text-lg">{title}</h2>
            
            <div className="flex items-center gap-4">
                <Bell className="text-gray-600 cursor-pointer" />
                
                <div className="relative">
                    <img
                        src={`https://ui-avatars.com/api/?name=${user?.email || "User"}`}
                        alt="user"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onClick={() => setProfileOpen(!profileOpen)}
                    />
                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow z-50">
                            <button
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.href = "/";
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Topbar;
