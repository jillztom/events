export const isPast = (date) => {
	const today = new Date();

	return new Date(date) < today;
}

export const didNotExpire = (date) => {
	return new Date(date) > new Date()
}
