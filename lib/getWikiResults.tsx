export default async function getWikiResults(searchTerms: string) {
	const searchParams = new URLSearchParams({
		action: "query",
		generator: "search",
		gsrsearch: searchTerms,
		gsrlimit: "20",
		prop: "pageimages|extracts",
		exchars: "100",
		exintro: "true",
		explaintext: "true",
		exlimit: "max",
		format: "json",
		origin: "*",
	});

	const response = await fetch(
		"https://en.wikipedia.org/w/api.php?" + searchParams
	);

	return response.json();
}
