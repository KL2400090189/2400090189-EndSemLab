import React, { useReducer } from 'react';
import { UserCheck, UserX, RotateCcw } from 'lucide-react';


const initialStudents = [
  { id: 1, name: 'Ravi', rollNo: 'CS001', status: null },
  { id: 2, name: 'Raju', rollNo: 'CS002', status: null },
  { id: 3, name: 'Ramu', rollNo: 'CS003', status: null },

];


function attendanceReducer(state, action) {
  switch (action.type) {
    case 'MARK_PRESENT':
      return state.map(student =>
        student.id === action.payload
          ? { ...student, status: 'present' }
          : student
      );
    case 'MARK_ABSENT':
      return state.map(student =>
        student.id === action.payload
          ? { ...student, status: 'absent' }
          : student
      );
    case 'RESET':
      return initialStudents;
    default:
      return state;
  }
}

export default function AttendanceTracker() {
  const [students, dispatch] = useReducer(attendanceReducer, initialStudents);

  const presentCount = students.filter(s => s.status === 'present').length;
  const absentCount = students.filter(s => s.status === 'absent').length;
  const unmarkedCount = students.filter(s => s.status === null).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Student Attendance Tracker
              </h1>
              <p className="text-gray-600">
                Mark student attendance for today's session
              </p>
            </div>
            <button
              onClick={() => dispatch({ type: 'RESET' })}
              className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw size={20} />
              Reset All
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-500 text-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Present</p>
                <p className="text-4xl font-bold">{presentCount}</p>
              </div>
              <UserCheck size={48} className="opacity-80" />
            </div>
          </div>

          <div className="bg-red-500 text-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm mb-1">Absent</p>
                <p className="text-4xl font-bold">{absentCount}</p>
              </div>
              <UserX size={48} className="opacity-80" />
            </div>
          </div>

          <div className="bg-gray-500 text-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-100 text-sm mb-1">Unmarked</p>
                <p className="text-4xl font-bold">{unmarkedCount}</p>
              </div>
              <div className="text-5xl opacity-80">?</div>
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Roll No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Student Name
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } hover:bg-indigo-50 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {student.rollNo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {student.status === 'present' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <UserCheck size={16} />
                          Present
                        </span>
                      )}
                      {student.status === 'absent' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                          <UserX size={16} />
                          Absent
                        </span>
                      )}
                      {student.status === null && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                          Not Marked
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            dispatch({ type: 'MARK_PRESENT', payload: student.id })
                          }
                          disabled={student.status === 'present'}
                          className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${student.status === 'present'
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-green-500 text-white hover:bg-green-600'
                            }`}
                        >
                          <UserCheck size={16} />
                          Present
                        </button>
                        <button
                          onClick={() =>
                            dispatch({ type: 'MARK_ABSENT', payload: student.id })
                          }
                          disabled={student.status === 'absent'}
                          className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${student.status === 'absent'
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-red-500 text-white hover:bg-red-600'
                            }`}
                        >
                          <UserX size={16} />
                          Absent
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Footer */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Total Students: <span className="font-bold text-gray-900">{students.length}</span>
              {' '} | {' '}
              Attendance Rate:{' '}
              <span className="font-bold text-indigo-600">
                {presentCount > 0
                  ? ((presentCount / students.length) * 100).toFixed(1)
                  : 0}%
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}