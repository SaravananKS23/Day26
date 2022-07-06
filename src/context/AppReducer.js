export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_STUDENT":
        return {
          ...state,
          students: [...state.students, action.payload],
        };
  
      case "EDIT_STUDENT":
        const updatedStudent = action.payload;
  
        const updatedStudents = state.students.map((student) => {
          if (student.id === updatedStudent.id) {
            return updatedStudent;
          }
          return student;
        });
  
        return {
          ...state,
          students: updatedStudents,
        };
  
      case "REMOVE_STUDENT":
        return {
          ...state,
          students: state.students.filter(
            (student) => student.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };