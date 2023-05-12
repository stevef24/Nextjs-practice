import React from "react";
import getWikiResults from "@/lib/getWikiResults";
type Props = {
	params: {
		searchTerms: string;
	};
};

export default function page({ params: { searchTerms } }: Props) {
	return <div>page</div>;
}
