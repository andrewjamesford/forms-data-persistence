import { usePath, useUrl } from "crossroad";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { addDays, format } from "date-fns";
import { getPageAndPath } from "../../utils";
import api from "../../api";

export default function PageOne({ values, setFormState }) {
	const path = usePath();
	const { page, step } = getPageAndPath(path);
	const today = format(new Date(), "yyyy-MM-dd");
	const fortnight = format(addDays(new Date(), 14), "yyyy-MM-dd");

	const [titleCategory, setTitleCategory] = useState(values);
	const [, setUrl] = useUrl();

	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const changeData = () => {
		setFormState(titleCategory);
	};

	const nextForm = () => {
		if (page && step) {
			setUrl(`/${page}/${step + 1}`);
		}
	};

	const handleSubmit = () => {
		changeData();
		nextForm();
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await api.getCategories();
				if (!response.ok) {
					throw new Error("Error retrieving categories");
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

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const parentId = titleCategory.categoryId || 0;
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
	}, [titleCategory.categoryId]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<form onSubmit={handleSubmit} noValidate className="group">
			<Helmet>
				<title>Multi Page Form - Title & Category</title>
			</Helmet>
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
					className="block w-full px-3 py-2 mt-1 border rounded-md placeholder:italic invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 peer"
					type="text"
					onChange={(e) => {
						const value = e.target.value ?? "";
						setTitleCategory({
							...titleCategory,
							title: value,
						});
					}}
					value={titleCategory.title}
					onBlur={changeData}
					required={true}
					maxLength={80}
					minLength={3}
				/>
				<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
					Please enter a listing title of 3-80 characters
				</span>
				<p className="mt-1 text-sm text-gray-500 ">80 characters max</p>
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
					className="block w-full px-3 py-2 mt-1 border rounded-md placeholder:italic"
					type="text"
					onChange={(e) => {
						const value = e.target.value ?? "";
						setTitleCategory({
							...titleCategory,
							subTitle: value,
						});
					}}
					value={titleCategory.subTitle}
					onBlur={changeData}
					maxLength={50}
				/>
				<p className="mt-1 text-sm text-gray-500">50 characters max</p>
			</div>

			{categories && (
				<div className="mt-6">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700 "
					>
						Category
					</label>
					<div className="mt-1">
						<select
							id="category"
							placeholder="Select a category"
							className={`block w-full h-10 px-3 py-2 items-center justify-between rounded-md border border-input bg-background ring-offset-background  peer ${titleCategory.categoryId === 0 ? " italic text-gray-400" : ""}`}
							onChange={(e) => {
								const value = Number.parseInt(e.target.value) || 0;
								setTitleCategory({
									...titleCategory,
									categoryId: value,
								});
							}}
							value={titleCategory.categoryId}
							onBlur={changeData}
							required={true}
							pattern="\d+"
						>
							<option value="" className="text-muted-foreground italic">
								Select a category...
							</option>
							{categories?.map((category) => {
								return (
									<option key={category.id} value={category.id}>
										{category.category_name}
									</option>
								);
							})}
						</select>
						<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:selected):invalid]:block">
							Please select a category
						</span>
					</div>
				</div>
			)}
			{subCategories &&
				subCategories.length > 0 &&
				Number.parseInt(titleCategory.categoryId) !== 0 && (
					<div className="mt-6">
						<label
							htmlFor="category-sub"
							className="block text-sm font-medium text-gray-700"
						>
							Sub Category
						</label>
						<div className="mt-1">
							<select
								id="category-sub"
								placeholder="Select a sub category"
								className="block w-full h-10 px-3 py-2 items-center justify-between rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 placeholder:italic"
								onChange={(e) => {
									const value = e.target.value || "";
									setTitleCategory({
										...titleCategory,
										subCategoryId: value,
									});
								}}
								value={titleCategory.subCategoryId}
								onBlur={changeData}
								required={true}
								pattern="\d+"
							>
								<option value="" className="text-muted-foreground italic">
									Select a sub category...
								</option>
								{subCategories?.map((category) => {
									return (
										<option key={category.id} value={category.id}>
											{category.category_name}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				)}

			<div className="mt-6">
				<label
					htmlFor="end-date"
					className="block text-sm font-medium text-gray-700"
				>
					End date
				</label>
				<input
					id="end-date"
					className="block w-full px-3 py-2 mt-1 border rounded-md text-black focus:ring-primary focus:border-primary focus:bg-transparent placeholder:italic peer"
					type="date"
					onChange={(e) => {
						const value = e.target.value ?? "";
						setTitleCategory({
							...titleCategory,
							endDate: value,
						});
					}}
					value={titleCategory.endDate}
					onBlur={changeData}
					required={true}
					pattern="\d{4}-\d{2}-\d{2}"
					datatype="date"
					min={today}
					max={fortnight}
				/>
				<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:default):invalid]:block">
					Please select a category
				</span>
			</div>

			<div className="mt-6 grid md:grid-flow-col md:w-1/4 gap-2">
				<button
					type="submit"
					onClick={changeData}
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group-invalid:pointer-events-none group-invalid:opacity-30"
				>
					Next
				</button>
			</div>
		</form>
	);
}
