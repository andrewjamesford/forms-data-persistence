import BreadCrumbs from "@/components/listing-form/breadcrumbs";
import PageOne from "@/components/listing-form/page1";
import { useParams } from "crossroad";
import PageTwo from "@/components/listing-form/page2";
import PageThree from "@/components/listing-form/page3";
import PageFive from "@/components/listing-form/page5";
import PageFour from "@/components/listing-form/page4";
import PageSix from "@/components/listing-form/page6";

export default function State({ step }) {
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
