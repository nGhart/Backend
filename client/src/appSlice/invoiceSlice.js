import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [{ id: 'ljkmkj', text: 'clean cage' }],
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.invoices.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.invoices = state.invoices.filter(
        (note) => note.id !== action.payload
      );
    },
    editNote: (state, action) => {
      const { id, updatedNote } = action.payload;
      const index = state.invoices.findIndex((note) => note.id === id);
      if (index !== -1) {
        state.invoices[index] = updatedNote;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = invoicesSlice.actions;
export default invoicesSlice.reducer;

// import axios from 'axios';

// Replace with your backend URL
// const backendUrl = 'http://localhost:1994/reminders';

// export const addNote = (note) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${backendUrl}/add`, note);
//     dispatch({
//       type: 'addNote',
//       payload: response.data, // Assuming your server responds with the newly added note
//     });
//   } catch (error) {
//     console.error('Error adding note:', error);
//   }
// };

// export const deleteNote = (noteId) => async (dispatch) => {
//   try {
//     await axios.delete(`${backendUrl}/delete/${noteId}`);
//     dispatch({
//       type: 'deleteNote',
//       payload: noteId,
//     });
//   } catch (error) {
//     console.error('Error deleting note:', error);
//   }
// };

// export const editNote = (note) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${backendUrl}/edit/${note.id}`, note);
//     dispatch({
//       type: 'editNote',
//       payload: response.data, // Assuming your server responds with the updated note
//     });
//   } catch (error) {
//     console.error('Error editing note:', error);
//   }
// };
