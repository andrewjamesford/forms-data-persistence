import { usePath, useUrl } from "crossroad";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

import api from "../../api";

export default function PageOne({ values, setFormState }) {
	const path = usePath();
	const stepArray = path[0]?.split("/");
	const page = stepArray[1] || "hook-form";
	const step = Number.parseInt(stepArray[2]) || 1;

	const [titleCategory, setTitleCategory] = useState(values);
	const [, setUrl] = useUrl();

	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [subCategories, setSubCategories] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const nextForm = () => {
		if (page && step) {
			setUrl(`/${page}/${step + 1}`);
		}
	};

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: values,
	});

	const onSubmit = (data) => {
		setFormState(data);
		nextForm();
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.getCategories();
				if (!response.ok) {
					throw new Error("Error retrieving categories");
				}
				const result = await response.json();
				if (result?.categories) {
					setCategories(result.categories);
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const parentId = titleCategory?.category || 0;
				if (Number.parseInt(parentId) === 0) {
					setSubCategories([]);
					return;
				}
				const response = await api.getCategories(parentId);
				if (!response.ok) {
					throw new Error("Error retrieving sub-categories");
				}
				const result = await response.json();
				setSubCategories(result?.categories);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [titleCategory.category]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Helmet>
				<title>React Hook Form - Title & Category</title>
			</Helmet>
			<h1 className="mt-4 text-2xl font-bold">What are you listing?</h1>

			<div className="mt-6">
				<label
					htmlFor="listingTitle"
					className="block text-sm font-medium text-gray-700"
				>
					Listing Title
				</label>
				<input
					id="listingTitle"
					placeholder="e.g. iPhone 5c, Red t-shirt"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					{...register("titleCategory.listingTitle", {
						maxLength: 80,
						required: true,
					})}
				/>
				{errors.titleCategory?.listingTitle && (
					<span className="text-sm text-red-500">
						This field is required and must be less than 80 characters
					</span>
				)}
			</div>
			<div className="mt-6">
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700"
				>
					Category
				</label>
				<select
					id="category"
					className="block w-full h-10 px-3 py-2 items-center justify-between rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
					{...register("titleCategory.category", {
						required: true,
						validate: (value) => {
							return value !== "Select a category...";
						},
						onChange: (e) => {
							const value = e.target.value;
							setValue("titleCategory.category", value);
						},
					})}
				>
					<option>Select a category...</option>
					{categories?.map((category) => (
						<option key={category.id} value={category.id}>
							{category.category_name}
						</option>
					))}
				</select>
				{errors.titleCategory?.category && (
					<span className="text-sm text-red-500">Select a category</span>
				)}
			</div>
			{subCategories && Number.parseInt(titleCategory?.category) !== 0 && (
				<div className="mt-6">
					<label
						htmlFor="subCategory"
						className="block text-sm font-medium text-gray-700"
					>
						Sub Category
					</label>
					<select
						id="subCategory"
						type="number"
						className="block w-full px-3 py-2 mt-1 border rounded-md"
						{...register("titleCategory.subCategory", { required: true })}
					>
						<option value="">Select a sub category...</option>
						{subCategories?.map((category) => {
							return (
								<option key={category.id} value={category.id}>
									{category.category_name}
								</option>
							);
						})}
					</select>
					{errors.titleCategory?.subCategory && (
						<span className="text-sm text-red-500">Select a sub category</span>
					)}
				</div>
			)}
			<div className="mt-6">
				<label
					htmlFor="subTitle"
					className="block text-sm font-medium text-gray-700"
				>
					Sub Title
				</label>
				<input
					id="subTitle"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					{...register("titleCategory.subTitle", {
						required: true,
						maxLength: 50,
					})}
				/>
				{errors.titleCategory?.subTitle && (
					<span className="text-sm text-red-500">
						This field is required and must be less than 50 characters
					</span>
				)}
			</div>

			<div className="mt-6">
				<label
					htmlFor="end-date"
					className="block text-sm font-medium text-gray-700"
				>
					End date
				</label>
				<input
					id="end-date"
					className="block w-full px-3 py-2 mt-1 border rounded-md text-black focus:ring-primary focus:border-primary focus:bg-transparent"
					type="date"
					{...register("titleCategory.endDate", {
						required: true,
						validate: (value) => {
							return new Date(value).toISOString() >= new Date().toISOString();
						},
					})}
				/>
				{errors.titleCategory?.endDate && (
					<span className="text-sm text-red-500">
						Date required and must be greater after today
					</span>
				)}
			</div>

			<div className="mt-6 grid md:grid-flow-col md:w-1/4 gap-2">
				<button
					type="submit"
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next{" "}
				</button>
			</div>
		</form>
	);
}
