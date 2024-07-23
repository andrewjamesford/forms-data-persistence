import React, { useState, useEffect } from "react";
import { usePath } from "crossroad";
import api from "../../api";

export default function PageOne() {
	const path = usePath();
	const stepArray = path[0].split("/");
	const page = stepArray[1];

	const [categories, setCategories] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.getCategories();
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const result = await response.json();
				setCategories(result.categories);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<h1 className="mt-4 text-2xl font-bold">What are you listing?</h1>
			<div className="mt-6">
				<label
					htmlFor="listing-title"
					className="block text-sm font-medium text-gray-700"
				>
					Listing title
				</label>
				<input
					id="listing-title"
					placeholder="e.g. iPhone 5c, Red t-shirt"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					type="text"
				/>
				<p className="mt-1 text-sm text-gray-500">80 characters remaining</p>
			</div>
			<div className="mt-6">
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700"
				>
					Category
				</label>
				<div className="mt-1">
					<select
						id="category"
						placeholder="Select a category"
						className="flex h-10 pl-2 items-center justify-between rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 "
					>
						<option value="">Select a category...</option>
						{categories?.map((category) => {
							return (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							);
						})}
					</select>

					<p className="mt-1 text-sm text-gray-500">
						We'll suggest a category based on your title, too.
					</p>
				</div>
			</div>
			<div className="mt-6">
				<label
					htmlFor="sub-title"
					className="block text-sm font-medium text-gray-700"
				>
					Subtitle
				</label>
				<input
					id="sub-title"
					placeholder="e.g. iPhone 5c, Red t-shirt"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					type="text"
				/>
				<p className="mt-1 text-sm text-gray-500">50 characters remaining</p>
			</div>
			<div className="mt-6">
				<a
					href={`/${page}/2`}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next
				</a>
			</div>
		</>
	);
}
