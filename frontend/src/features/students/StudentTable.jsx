function StudentTable({ students }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-lg font-medium mb-4">All Students</h2>

      {students.length === 0 ? (
        <p className="text-gray-500 text-sm">No students found</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="py-2">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Admission_date</th>
              <th>Branch</th>
              <th>Course</th>

            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student._id} className="border-b hover:bg-gray-50">
                <td className="py-2">{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.admission_date}</td>
                <td>{student.branch}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentTable;