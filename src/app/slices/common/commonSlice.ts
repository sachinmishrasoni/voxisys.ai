import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    leftModalState: {
        open: false,
    },
    rightModalState: {
        open: true,
    }
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        toggleLeftModal: (state) => {
            state.leftModalState.open = !state.leftModalState.open;
        },
        toggleRightModal: (state) => {
            state.rightModalState.open = !state.rightModalState.open;
        }
    }
});

export const { toggleLeftModal, toggleRightModal } = commonSlice.actions;
export default commonSlice.reducer;