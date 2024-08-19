import { useState } from "react";
import { useUrl } from "crossroad";
import { ErrorBoundary } from "react-error-boundary";

import BreadCrumbs from "../components/breadCrumbs";
import PageOne from "../components/rhfListingForm/page1"; // titleCategory
import PageTwo from "../components/rhfListingForm/page2"; // itemDetails
import PageThree from "../components/rhfListingForm/page3"; // photos
import PageFour from "../components/rhfListingForm/page4"; // pricePayment
import PageFive from "../components/rhfListingForm/page5"; // shipping
import PageSix from "../components/rhfListingForm/page6"; // review

import listingFormObject from "../utils";

export default function HookForm({ step }) {
  const [url, setUrl] = useUrl();

  const [formState, setFormState] = useState(listingFormObject);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <>
        <BreadCrumbs />
        {step === "1" && <PageOne values={formState.titleCategory} />}
        {step === "2" && <PageTwo values={formState.itemDetails} />}
        {step === "3" && <PageThree values={formState.photos} />}
        {step === "4" && <PageFour values={formState.pricePayment} />}
        {step === "5" && <PageFive values={formState.shipping} />}
        {step === "6" && <PageSix values={formState} />}
      </>
    </ErrorBoundary>
  );
}
