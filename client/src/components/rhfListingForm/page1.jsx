import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { usePath } from "crossroad";
import api from "../../api";

export default function PageOne({ values, setFormState }) {
	const path = usePath();
	const stepArray = path[0].split("/");
	const page = stepArray[1];

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
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.getCategories();
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const result = await response.json();
				setValue("categories", result.categories);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [setValue]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					{...register("titleCategory.listingTitle", { required: true })}
				/>
				{errors.titleCategory?.listingTitle && (
					<span className="text-red-500">This field is required</span>
				)}
			</div>
			<div className="mt-6">
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700"
				>
					Category
				</label>
				<input
					id="category"
					type="number"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					{...register("titleCategory.category", { required: true })}
				/>
				{errors.titleCategory?.category && (
					<span className="text-red-500">This field is required</span>
				)}
			</div>
			<div className="mt-6">
				<label
					htmlFor="subCategory"
					className="block text-sm font-medium text-gray-700"
				>
					Sub Category
				</label>
				<input
					id="subCategory"
					type="number"
					className="block w-full px-3 py-2 mt-1 border rounded-md"
					{...register("titleCategory.subCategory", { required: true })}
				/>
				{errors.titleCategory?.subCategory && (
					<span className="text-red-500">This field is required</span>
				)}
			</div>
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
					{...register("titleCategory.subTitle", { required: true })}
				/>
				{errors.titleCategory?.subTitle && (
					<span className="text-red-500">This field is required</span>
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
