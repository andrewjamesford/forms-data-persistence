import BreadCrumbs from "@/components/listingForm/breadcrumbs";
import PageOne from "@/components/listingForm/page1";
import PageTwo from "@/components/listingForm/page2";
import PageThree from "@/components/listingForm/page3";
import PageFive from "@/components/listingForm/page5";
import PageFour from "@/components/listingForm/page4";
import PageSix from "@/components/listingForm/page6";

export default function HookForm({ step }) {
	return (
		<div>
			<BreadCrumbs />
			{step === "1" && <PageOne />}
			{step === "2" && <PageTwo />}
			{step === "3" && <PageThree />}
			{step === "4" && <PageFour />}
			{step === "5" && <PageFive />}
			{step === "6" && <PageSix />}
		</div>
	);
}
