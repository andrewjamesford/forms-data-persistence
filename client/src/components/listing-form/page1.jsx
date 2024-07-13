/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dEDPGNAuy9r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Component() {
	return (
		<div className="flex flex-col min-h-screen">

			<main className="flex-1 p-4 bg-gray-50">
				<div className="flex items-center space-x-2 text-sm text-gray-500">
					<a href="/" className="font-medium text-gray-700">
						Title & category
					</a>
					<span>&gt;</span>
					<a href="/" className="text-gray-500">
						Item details
					</a>
					<span>&gt;</span>
					<a href="/" className="text-gray-500">
						Photos
					</a>
					<span>&gt;</span>
					<a href="/" className="text-gray-500">
						Price & payment
					</a>
					<span>&gt;</span>
					<a href="/" className="text-gray-500">
						Shipping & pick-up
					</a>
					<span>&gt;</span>
					<a href="/" className="text-gray-500">
						Promote
					</a>
				</div>
				<h1 className="mt-6 text-2xl font-bold text-gray-900">
					What are you listing?
				</h1>
				<div className="mt-4 space-y-4">
					<div className="space-y-2">
						<label
							htmlFor="listing-title"
							className="block text-sm font-medium text-gray-700"
						>
							Listing title
						</label>
						<Input
							id="listing-title"
							placeholder="e.g. iPhone 5c, Red t-shirt"
						/>
						<p className="text-sm text-gray-500">80 characters remaining</p>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="category"
							className="block text-sm font-medium text-gray-700"
						>
							Category
						</label>
						<Button variant="outline" className="w-full">
							Choose category
						</Button>
						<p className="text-sm text-gray-500">
							We'll suggest a category based on your title, too.
						</p>
					</div>
				</div>
			</main>
			
		</div>
	);
}
