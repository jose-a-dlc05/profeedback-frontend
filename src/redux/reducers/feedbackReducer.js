import { ActionTypes } from '../constants/action-types';
const intialState = {
	feedback: [],
	amount: 0,
};

export const feedbackReducer = (state = intialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_FEEDBACK:
			return { ...state, feedback: payload, amount: payload.length };
		default:
			return state;
	}
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
// 	console.log(type);
// 	switch (type) {
// 		case ActionTypes.SELECTED_PRODUCT:
// 			return { ...state, ...payload };
// 		case ActionTypes.REMOVE_SELECTED_PRODUCT:
// 			return {};
// 		default:
// 			return state;
// 	}
// };
