import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface managerState {
	value: number;
}

const initialState: managerState = {
	value: 0,
};

export const managerSlice = createSlice({
	name: 'manager',
	initialState,
	reducers: {},
});

export const {} = managerSlice.actions;
