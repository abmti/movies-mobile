
const host = 'https://api.themoviedb.org/3';

const handleErrors = response => {
	if (response.ok) {
		return response;
	} else {
		return response.text().then(text => {
			throw new Error(text);
		});
	}
};

export { host, handleErrors };
