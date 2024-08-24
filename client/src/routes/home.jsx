export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-bold mb-2">Form Data Persistance</h1>
			<p>
				This project will demonstrate creating a multi page form with data
				persistence using the following:
			</p>

			<div className="grid grid-cols-2 gap-4 my-4">
				<div className="bg-white p-4 rounded shadow">
					<h2 className="text-xl font-bold mb-2">
						<a href="/state/1">React useState</a>
					</h2>
					<p>
						Using React useState, you can manage state within functional
						components. It allows you to declare and update state variables.
					</p>
				</div>
				<div className="bg-white p-4 rounded shadow">
					<h2 className="text-xl font-bold mb-2">
						<a href="/hook-form/1">React Hook Form</a>
					</h2>
					<p>
						React Hook Form is a library for managing form state in React. It
						provides an easy-to-use API for handling form validation,
						submission, and data persistence.
					</p>
				</div>
			</div>
		</>
	);
}
