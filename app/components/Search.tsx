"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Search() {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch("");
		router.push(`/${search}.`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-50 flex justify-center gap-2 md:justify-between"
		>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search Wikipedia"
				className="bg-white p-2 w-80 text-xl rounded-xl"
			/>

			<button
				type="submit"
				className="bg-slate-300 p-2 rounded-xl text-white text-xl"
			>
				search
			</button>
		</form>
	);
}
