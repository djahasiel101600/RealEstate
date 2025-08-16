import { ListingCard } from "@/shared/ui";
import SearchListing from "./searchListing";

const Listing = () => {
  return (
    <div className="relative pt-20 pb-20 bg-black h-full">
      <div className="flex flex-col px-10 gap-10">
        <SearchListing />
        <div className="flex flex-row gap-8 justify-center">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </div>
  );
};

export default Listing;
