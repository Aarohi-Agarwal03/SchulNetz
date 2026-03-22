import { useState } from "react";
import { Bell } from "lucide-react";

function Topbar() {
    const [profileOpen, setProfileOpen] = useState(false);
    // const user = JSON.parse(localStorage.getItem("user"));
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <div className="bg-white px-6 py-4 shadow flex justify-between items-center">

            <h2 className="font-semibold text-lg">
                Dashboard
            </h2>

            <div className="flex items-center gap-4">

                <Bell className="text-gray-600 cursor-pointer" />

                <div className="relative">
                    <img
                        src={`https://ui-avatars.com/api/?name=${user?.email}`}
                        alt="user"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onClick={() => setProfileOpen(!profileOpen)}
                    />

                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow">
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