export default function ({
	dispatch
}) {
	return next => action => {
		if(!action.payload || !action.payload.then) {
			next(action);
		} else {
			action.payload.then(response => {
				dispatch({ ...action,
					payload: response
				});
			})
		}
	}
}