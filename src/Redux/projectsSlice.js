import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: { value: { projects: [] } },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addNewProject: (state, action) => {
      state.value.projects.push(action.payload);
    },

    addProjectsDetails: (state, action) => {
      const parentId = action.payload.parentId;
      const data = action.payload.data;

      state.value.projects.map((el) => {
        if (el.id === parentId) {
          el.stone_parts.push(data);
        }
      });
    },

    updateTotalPrice: (state, action) => {
      const parentId = action.payload.parentId;
      const price = action.payload.price;

      state.value.projects.map((el) => {
        if (el.id === parentId) {
          el.total_price += price;
        }
      });
    },

    deleteStonePart: (state, action) => {
      const parentId = action.payload.parentId;
      const stone_part_id = action.payload.stone_part_id;
      const amount = action.payload.amount;

      state.value.projects.map((el) => {
        if (el.id === parentId) {
          el.total_price -= amount;
          let newArr = [...el.stone_parts];
          let filtered = newArr.filter((el) => el.id !== stone_part_id);
          el.stone_parts = filtered;
        }
      });
    },
  },
});

export const {
  addNewProject,
  addProjectsDetails,
  deleteStonePart,
  updateTotalPrice,
} = projectsSlice.actions;

export default projectsSlice.reducer;
