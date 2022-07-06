import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  students: [
    {
      id: 1,
      name: "Ranjan",
      location: "3rd Year",
      designation: "B.Sc. Physics"
    },
            {
id: 2,
name: "Chandru",
location: "2nd Year",
designation: "M.Sc. Computer Science"
            },
            {
id: 3,
name: "Parthiban",
location: "1st Year",
designation: "MBA (Finance)"
            }

  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addStudent(student) {
    dispatch({
      type: "ADD_STUDENT",
      payload: student
    });
  }

  function editStudent(student) {
    dispatch({
      type: "EDIT_STUDENT",
      payload: student
    });
  }

  function removeStudent(id) {
    dispatch({
      type: "REMOVE_STUDENT",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        students: state.students,
        addStudent,
        editStudent,
        removeStudent
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};