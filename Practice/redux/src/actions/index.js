//create an action creator

export function selectBook (book) {
	//selectBook is an ActionCreator, it needs to return an action,
	//an object with a tyype property

	return {
		type: 'BOOK_SELECTED',
		payload: book
	} 
}