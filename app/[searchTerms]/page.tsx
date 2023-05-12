import React from "react";
import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
	params: {
		searchTerm: string;
	};
};

export async function generateMetaData({ params: { searchTerm } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;
	const displayTerm = searchTerm.replaceAll("%20", "");

	if (!data?.query?.pages) {
		return {
			title: `${displayTerm} not found`,
		};
	}

	return {
		title: `${displayTerm} - Wikipedia`,
		description: `Search results for ${displayTerm} on Wikipedia`,
	};
}

export default async function page({ params: { searchTerm } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;

	const results: Result[] | undefined = data?.query?.pages;
	const content = (
		<main className="max-w-lg min-h-screen py-1 mx-auto bg-slate-200">
			{results ? (
				Object.values(results).map((result) => (
					<Item key={result.pageid} result={result} />
				))
			) : (
				<h2>{`${searchTerm} not found `} </h2>
			)}
		</main>
	);
	return content;
}
