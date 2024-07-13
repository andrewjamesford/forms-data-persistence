/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dEDPGNAuy9r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="flex items-center justify-between h-16 px-4 border-b bg-white">
				<div className="flex items-center space-x-4">
					<img src="/placeholder.svg" alt="Logo" className="h-8" />
					<nav className="hidden space-x-4 md:flex">
						<a href="/" className="text-sm font-medium text-gray-700">
							Trade Me
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							Trade Me Insurance
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							Holiday Houses
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							FindSomeone
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							MotorWeb
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							homes.co.nz
						</a>
					</nav>
				</div>
				<div className="flex items-center space-x-4">
					<a href="/" className="text-sm font-medium text-gray-700">
						Watchlist
					</a>
					<a href="/" className="text-sm font-medium text-gray-700">
						Favourites
					</a>
					<a href="/" className="text-sm font-medium text-gray-700">
						Start a listing
					</a>
					<a href="/" className="text-sm font-medium text-gray-700">
						My Trade Me
					</a>
					<Avatar>
						<AvatarImage src="/placeholder-user.jpg" />
						<AvatarFallback>A</AvatarFallback>
					</Avatar>
					<a href="/" className="text-sm font-medium text-gray-700">
						Log out
					</a>
				</div>
			</header>
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
			<footer className="flex items-center justify-between h-16 px-4 bg-white border-t">
				<div className="flex items-center space-x-2">
					<Badge variant="default">New</Badge>
					<p className="text-sm text-gray-500">
						Welcome to the new-look Trade Me
					</p>
				</div>
				<div className="flex items-center space-x-4">
					<a href="/" className="text-sm text-gray-500">
						Learn more
					</a>
					<a href="/" className="text-sm text-gray-500">
						Tell us what you think
					</a>
				</div>
			</footer>
		</div>
	);
}
