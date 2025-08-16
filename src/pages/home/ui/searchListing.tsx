import { Input, Label, Button } from "@/shared/ui";

const SearchListing = () => {
  return (
    <div className="text-white flex flex-col gap-6 mb-16">
      <h1 className="font-tiro text-[24pt]">SEARCH LISTING</h1>
      <div className="flex flex-row gap-8 font-poppins">
        <div className="flex flex-col gap-4">
          <Label>Location</Label>
          <Input className="w-104 bg-white text-black" />
        </div>
        <div className="flex flex-col gap-4">
          <Label>Type</Label>
          <Input className="w-104 bg-white text-black" />
        </div>
        <div className="flex flex-col gap-4">
          <Label>Sort By</Label>
          <Input className="w-104 bg-white text-black" />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-4">
            <Label>Bedrooms</Label>
            <Input className="bg-white text-black" />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Bath</Label>
            <Input className="bg-white text-black" />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <Label>Min Price</Label>
            <Input type="number" className="border-0 border-b-1 rounded-[0]" />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Max Price</Label>
            <Input type="number" className="border-0 border-b-1 rounded-[0]" />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Button className="text-white rounded-full border-2 hover:bg-white hover:text-black duration-300 ease-in-out">
            Search Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchListing;
