import { ListingCard } from "@/shared/ui";
import SearchListing from "./searchListing";
import prop1 from "@/assets/property1.jpg";
import prop2 from "@/assets/property2.jpg";
import prop3 from "@/assets/property3.jpg";

const Listing = () => {
  return (
    <div className="relative pt-20 pb-20 bg-black h-full">
      <div className="flex flex-col px-10 gap-10">
        <SearchListing />
        <div className="flex flex-row gap-8 justify-between">
          <ListingCard img={prop1} />
          <ListingCard img={prop2} />
          <ListingCard img={prop3} />
        </div>
      </div>
    </div>
  );
};

export default Listing;
