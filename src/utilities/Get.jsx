function Get(categorie) {
	return fetch('https://inshorts.deta.dev/news?category=' + categorie).then(
		response => response.json()
	);
}
export default Get;
