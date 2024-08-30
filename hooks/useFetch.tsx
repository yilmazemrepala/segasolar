"use client";
import { useEffect, useState } from "react";

const useFetch = <T,>(reqUrl: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		setLoading(true);
		fetch(reqUrl)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setData(result);
				console.log("Fetched data:", result);
			})
			.catch((err) => {
				if (err instanceof Error) {
					setError(err);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, [reqUrl]);

	return { data, loading, error };
};

export default useFetch;
