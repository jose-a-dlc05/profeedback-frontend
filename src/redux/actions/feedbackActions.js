import { ActionTypes } from '../constants/action-types';

export const setFeedback = (feedback) => {
	return {
		type: ActionTypes.SET_FEEDBACK,
		payload: feedback,
	};
};

// export const selectedProduct = (product) => {
// 	return {
// 		type: ActionTypes.SELECTED_PRODUCT,
// 		payload: product,
// 	};
// };
// export const removeSelectedProduct = () => {
// 	return {
// 		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
// 	};
// };
