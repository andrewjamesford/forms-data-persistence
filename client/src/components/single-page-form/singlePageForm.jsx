import { Helmet } from "react-helmet";
import api from "../../api";

export default function () {
	const handleSubmit = () => {};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Helmet>
					<title>Single Page Form</title>
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
						Subtitle (optional)
					</label>
					<input
						id="sub-title"
						placeholder="e.g. iPhone 5c, Red t-shirt"
						className="block w-full px-3 py-2 mt-1 border rounded-md placeholder:italic peer"
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
					<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
						Please enter a subtitle of max 50 characters
					</span>
					<p className="mt-1 text-sm text-gray-500">50 characters max</p>
				</div>

				<div className="mt-6">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700 "
					>
						Category
					</label>
					<div className="mt-1">
						{loadingCategory && <Loader />}
						{!loadingCategory && (
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
						)}
						<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:selected):invalid]:block">
							Please select a category
						</span>
					</div>
				</div>

				<div className="mt-6">
					<label
						htmlFor="category-sub"
						className="block text-sm font-medium text-gray-700"
					>
						Sub Category
					</label>
					<div className="mt-1">
						{loadingSubCategory && <Loader />}
						{!loadingSubCategory && (
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
								disabled={subCategories.length === 0}
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
						)}
					</div>
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
						min={tomorrow}
						max={fortnight}
					/>
					<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:default):invalid]:block">
						Please select a future date between tomorrow and two weeks from now
					</span>
				</div>

				<h1 className="mt-4 text-2xl font-bold">Item details</h1>
				<div className="mt-6">
					<label
						htmlFor="listing-description"
						className="block text-sm font-medium text-gray-700"
					>
						Description
					</label>

					<textarea
						id="listing-description"
						className="block w-full px-3 py-2 mt-1 border rounded-md invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 peer"
						value={itemDetails.description}
						onChange={(e) => {
							const value = e.target.value ?? "";
							setItemDetails({ ...itemDetails, description: value });
						}}
						onBlur={changeData}
						required={true}
						maxLength={500}
						minLength={10}
						placeholder="Describe your item"
					/>
					<span className="mt-1 hidden text-sm text-red-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
						Please enter a description of 10-500 characters
					</span>
				</div>
				<fieldset>
					<legend className="sr-only">Condition</legend>
					<div className="mt-6">
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-700"
						>
							Condition
						</label>
						<div className="flex mt-3">
							<input
								type="radio"
								id="used"
								name="condition"
								value={false}
								checked={itemDetails.condition === false}
								onChange={() => {
									setItemDetails({ ...itemDetails, condition: false });
								}}
								onBlur={changeData}
							/>
							<label htmlFor="used" className="ml-2 text-sm text-gray-700">
								Used
							</label>
						</div>
						<div className="flex mt-3">
							<input
								type="radio"
								id="new"
								name="condition"
								value={true}
								checked={itemDetails.condition === true}
								onChange={() => {
									setItemDetails({ ...itemDetails, condition: true });
								}}
								onBlur={changeData}
							/>
							<label htmlFor="new" className="ml-2 text-sm text-gray-700">
								New
							</label>
						</div>
					</div>
				</fieldset>

				<h1 className="mt-4 text-2xl font-bold">Photos</h1>
				<div className="mt-6">
					<label
						htmlFor="listing-description"
						className="block text-sm font-medium text-gray-700"
					>
						Upload photos (up to 20)
					</label>

					<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
						<div className="text-center">
							<svg
								className="mx-auto h-12 w-12 text-gray-300"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
									clipRule="evenodd"
								/>
							</svg>
							<div className="mt-4 flex text-sm leading-6 text-gray-600">
								<label
									htmlFor="file-upload"
									className="relative cursor-pointer rounded-md bg-white font-semibold text-accent-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
								>
									<span>Upload a file</span>
									<input
										id="file-upload"
										name="file-upload"
										type="file"
										className="sr-only"
										accept="image/png, image/jpeg, image/gif, image/webp"
										onChange={(e) => {
											const filesArray = Array.from(e.target.files);
											const filesArrayLimited = filesArray.slice(0, 20);

											setPhotos({ ...photos, images: filesArrayLimited });
											setFormState({ ...photos, images: filesArrayLimited });
										}}
										onBlur={changeData}
										multiple
									/>
								</label>
								<p className="pl-1">or drag and drop</p>
								{photos.images && <p className="pl-1">{photos.images.name}</p>}
							</div>
							<p className="text-xs leading-5 text-gray-600">
								PNG, JPG, GIF up to 10MB
							</p>
						</div>
					</div>
					<div className="mt-6 flex flex-wrap gap-4">
						{photos.images.map((image, index) => (
							<div key={image.name} className="relative rounded-md">
								<img
									src={URL.createObjectURL(image)}
									alt=""
									className="object-cover w-20 h-20 border rounded-lg relative left-1 top-1"
								/>
								<button
									type="button"
									className="absolute top-0 left-0 p-0.5 bg-black rounded-full shadow-lg cursor-pointer text-white"
									onClick={() => {
										const newImages = photos.images.filter(
											(_, i) => i !== index,
										);
										setPhotos({ ...photos, images: newImages });
									}}
								>
									<svg
										className="h-3 w-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<title>Remove</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						))}
					</div>
				</div>

				<h1 className="mt-4 text-2xl font-bold">Price &amp; Payment</h1>
				<div className="mt-6">
					<label
						htmlFor="listing-price"
						className="block text-sm font-medium text-gray-700"
					>
						Start price
					</label>
					<span className="flex">
						<span className="pt-3 pr-2 text-lg">$</span>
						<input
							id="listing-price"
							placeholder="$10.00"
							className="block w-full px-3 py-2 mt-1 border rounded-md placeholder:italic"
							type="number"
							min={1}
							step={1}
							value={pricePayment.listingPrice}
							required={true}
							onChange={(e) => {
								setPricePayment({
									...pricePayment,
									listingPrice: e.target.value,
								});
							}}
							onBlur={changeData}
						/>
					</span>
				</div>
				<div className="mt-6">
					<label
						htmlFor="listing-reserve"
						className="block text-sm font-medium text-gray-700"
					>
						Reserve price (optional)
					</label>
					<span className="flex">
						<span className="pt-3 pr-2 text-lg">$</span>
						<input
							id="listing-reserve"
							placeholder="$20.00"
							className="block w-full px-3 py-2 mt-1 border rounded-md placeholder:italic"
							type="number"
							min={0}
							step={1}
							value={pricePayment.reservePrice}
							onChange={(e) => {
								setPricePayment({
									...pricePayment,
									reservePrice: e.target.value,
								});
							}}
							onBlur={changeData}
						/>
					</span>
				</div>
				<fieldset>
					<legend className="sr-only">Payment options</legend>
					<div className="mt-6">
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-700"
						>
							Payment options
						</label>
						<div className="flex mt-3">
							<input
								type="checkbox"
								id="payment-credit"
								name="payment-type"
								value="credit-card"
								onChange={() => {
									setPricePayment({
										...pricePayment,
										creditCardPayment: !pricePayment.creditCardPayment,
									});
									checkPaymentRequired();
								}}
								onBlur={changeData}
								checked={pricePayment.creditCardPayment}
								required={checkRequired}
							/>

							<label
								htmlFor="payment-credit"
								className="ml-2 text-sm text-gray-700"
							>
								Credit Card
							</label>
						</div>
						<div className="flex mt-3">
							<input
								type="checkbox"
								id="payment-bank"
								name="payment-type"
								value="bank-transfer"
								onChange={() => {
									setPricePayment({
										...pricePayment,
										bankTransferPayment: !pricePayment.bankTransferPayment,
									});
									checkPaymentRequired();
								}}
								onBlur={changeData}
								checked={pricePayment.bankTransferPayment}
								required={checkRequired}
							/>

							<label
								htmlFor="payment-bank"
								className="ml-2 text-sm text-gray-700"
							>
								Bank Transfer
							</label>
						</div>
						<div className="flex mt-3">
							<input
								type="checkbox"
								id="payment-bitcoin"
								name="payment-type"
								value="bitcoin"
								onChange={() => {
									setPricePayment({
										...pricePayment,
										bitcoinPayment: !pricePayment.bitcoinPayment,
									});
									checkPaymentRequired();
								}}
								onBlur={changeData}
								checked={pricePayment.bitcoinPayment}
								required={checkRequired}
							/>
							<label
								htmlFor="payment-bitcoin"
								className="ml-2 text-sm text-gray-700"
							>
								Bitcoin
							</label>
						</div>
					</div>
				</fieldset>

				<h1 className="mt-4 text-2xl font-bold">Shipping & pick-up</h1>
				<fieldset>
					<legend className="sr-only">Pick up?</legend>

					<div className="mt-6">
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-700"
						>
							Pick up?
						</label>
						<div className="flex mt-3">
							<input
								type="radio"
								id="pick-up-true"
								name="pick-up"
								value="true"
								checked={shipping.pickUp === true}
								onChange={(e) => {
									setShipping({ ...shipping, pickUp: true });
								}}
								onBlur={changeData}
							/>
							<label
								htmlFor="pick-up-true"
								className="ml-2 text-sm text-gray-700"
							>
								Yes
							</label>
						</div>
						<div className="flex mt-3">
							<input
								type="radio"
								id="pick-up-false"
								name="pick-up"
								value="false"
								checked={shipping.pickUp === false}
								onChange={(e) => {
									setShipping({ ...shipping, pickUp: false });
								}}
								onBlur={changeData}
							/>
							<label
								htmlFor="pick-up-false"
								className="ml-2 text-sm text-gray-700"
							>
								No
							</label>
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend className="sr-only">Shipping options</legend>
					<div className="mt-6">
						<label
							htmlFor="shipping-option"
							className="block text-sm font-medium text-gray-700"
						>
							Shipping options
						</label>

						<div className="flex mt-3">
							<input
								type="radio"
								id="shipping-option-courier"
								name="shipping-option"
								value="courier"
								checked={shipping.shippingOption === "courier"}
								onChange={(e) => {
									setShipping({ ...shipping, shippingOption: "courier" });
								}}
								onBlur={changeData}
							/>
							<label
								htmlFor="shipping-option-courier"
								className="ml-2 text-sm text-gray-700"
							>
								Courier
							</label>
						</div>

						<div className="flex mt-3">
							<input
								type="radio"
								id="shipping-option-post"
								name="shipping-option"
								value="post"
								checked={shipping.shippingOption === "post"}
								onChange={(e) => {
									setShipping({ ...shipping, shippingOption: "post" });
								}}
								onBlur={changeData}
							/>
							<label
								htmlFor="shipping-option-free"
								className="ml-2 text-sm text-gray-700"
							>
								Post
							</label>
						</div>
					</div>
				</fieldset>

				<div className="mt-3">
					<button
						onClick={() => {
							addListing();
						}}
						type="button"
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
					>
						Start Listing
					</button>
				</div>
			</form>
		</>
	);
}
