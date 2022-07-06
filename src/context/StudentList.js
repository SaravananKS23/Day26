import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const StudentList = () => {
  const { students } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {students.length > 0 ? (
        <React.Fragment>
          {students.map((student) => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={student.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">
                  {student.name}
                </p>
                <p className="text-gray-600">
                  {student.designation}
                </p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {student.location}
                </span>
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
};