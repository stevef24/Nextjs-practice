"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Search() {
	const [search, setSearch] = useState("");
	const router = useRouter();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch("");
		router.push(`/${search}/`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-center gap-2 w-50 md:justify-between"
		>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search Wikipedia"
				className="p-2 text-xl text-black bg-white w-80 rounded-xl"
			/>

			<button
				type="submit"
				className="p-2 text-xl text-white bg-slate-300 rounded-xl"
			>
				search
			</button>
		</form>
	);
}
