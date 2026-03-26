import useState from "react";
import useNavigate from "./rect-router-dom";
import Mail from "lucid-react";
import API from "../../lib/api.js"

function TestingDash(){
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        setMessage('')

        try {
            const res = await API.post("/api/testing/save", {
                name,
                middleName,
                lastName,
                message,
            });
            const json = await res.json();
            console.log(json);
            if (json.error) {
                console.log(json);
            }else {
                setName(json.name);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center border rounded-xl px-4 py-3">
                    <Mail className="text-gray-400 mr-3" />
                    <input type="text" placeholder="Name" className="w-full outline-none" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3">
                    <Mail className="text-gray-400 mr-3" />
                    <input type="text" placeholder="Middle Name" className="w-full outline-none" value={middleName} onChange={(e) => setMiddleName(e.target.value)} required />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3">
                    <Mail className="text-gray-400 mr-3" />
                    <input type="text" placeholder="Last Name" className="w-full outline-none" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <button type="submit" className="w-full py-3 bg-black text-white rounded-xl font-medium">Sign in</button>
            </form>
        </div>
    )
}

export default TestingDash;
