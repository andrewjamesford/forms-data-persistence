import { Badge } from "@/components/ui/badge";
const Footer = () => {
  return (
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
  );
};

export default Footer;
