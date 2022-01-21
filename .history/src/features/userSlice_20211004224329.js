import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: state
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.value += action.payload;
			});
	},
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
	const currentValue = selectCount(getState());
	if (currentValue % 2 === 1) {
		dispatch(incrementByAmount(amount));
	}
};

export default userSlice.reducer;
