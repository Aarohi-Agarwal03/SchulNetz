import { useState, useEffect } from "react";
import API from "../lib/api.js";

function Testing() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    middleName: "",
    lastName: ""
  });
  const [message, setMessage] = useState("");

  const fetchRecords = async () => {
    try {
      const res = await API.get("/api/testing");
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/testing", formData);
      setMessage("Record added successfully!");
      setFormData({ name: "", middleName: "", lastName: "" });
      fetchRecords();
    } catch (err) {
      setMessage("Failed to add record");
    }
  };

  return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Testing Records Management</h1>

        {/* Add Form */}
        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Record</h2>
          {message && <p className="mb-4 text-green-600">{message}</p>}

          <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="First Name" className="border p-3 rounded-lg" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            <input type="text" placeholder="Middle Name" className="border p-3 rounded-lg" value={formData.middleName} onChange={e => setFormData({...formData, middleName: e.target.value})} />
            <input type="text" placeholder="Last Name" className="border p-3 rounded-lg" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} required />
            <button type="submit" className="bg-black text-white py-3 rounded-xl col-span-3">Add Record</button>
          </form>
        </div>

        {/* Records Table */}
        <div className="bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold p-6 border-b">All Records</h2>
          <div className="p-6">
            {records.length === 0 ? (
                <p>No records found.</p>
            ) : (
                <table className="w-full">
                  <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">ID</th>
                    <th className="text-left py-3">Name</th>
                    <th className="text-left py-3">Middle Name</th>
                    <th className="text-left py-3">Last Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  {records.map(record => (
                      <tr key={record.id} className="border-b">
                        <td className="py-3">{record.id}</td>
                        <td className="py-3">{record.name}</td>
                        <td className="py-3">{record.middle_name}</td>
                        <td className="py-3">{record.last_name}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
            )}
          </div>
        </div>
      </div>
  );
}

export default Testing;

