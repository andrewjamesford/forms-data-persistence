export default function PageThree() {
	return (
		<>
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
								clip-rule="evenodd"
							/>
						</svg>
						<div className="mt-4 flex text-sm leading-6 text-gray-600">
							<label
								htmlFor="file-upload"
								className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
							>
								<span>Upload a file</span>
								<input
									id="file-upload"
									name="file-upload"
									type="file"
									className="sr-only"
									accept="image/png, image/jpeg, image/gif, image/webp"
								/>
							</label>
							<p className="pl-1">or drag and drop</p>
						</div>
						<p className="text-xs leading-5 text-gray-600">
							PNG, JPG, GIF up to 10MB
						</p>
					</div>
				</div>
				<p className="mt-1 text-sm text-gray-500">
					<a href="/">Photo policy & Guidelines</a>
				</p>
			</div>

			<div className="mt-6">
				<button
					type="button"
					className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
				>
					Next
				</button>
			</div>
		</>
	);
}
