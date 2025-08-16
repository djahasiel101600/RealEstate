import logo from "@/assets/logo.png";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center bg-[#A1907A]">
        <img src={logo} width={400} alt="" />
      </div>
      <div className="flex justify-center w-screen">
        <div className="grid grid-cols-3 grid-rows-2 grid-flow-col px-20 py-8 pt-24 gap-24">
          <div className="flex flex-col gap-2">
            <h3 className="tracking-widest font-tiro text-[24px]">
              MARCI METZGER
            </h3>
            <h3 className="tracking-widest font-poppins text-[24px]">
              THE RIDGE REALTY GROUP
            </h3>
            <ul className="mt-4 font-poppins text-[18px] flex flex-col gap-2 text-[#3d3d3d]">
              <li>
                3190 HW-160, Suite F, Pahrump, <br />
                Nevada 89048, United States
              </li>
              <li>(206) 919-6886</li>
            </ul>
            <Button className="rounded-full w-fit mt-3 px-6 hover:bg-white hover:border-black hover:border-1 hover:text-black">
              Message us on WhatsApp
            </Button>
          </div>
          <div className="">
            <h3 className="font-poppins text-[24px]">OFFICE HOURS</h3>
            <ul className="mt-4 font-poppins text-[18px] flex flex-col gap-2 text-[#3d3d3d] w-80">
              <li className="flex gap-4 justify-between">
                <p>Open Today</p>
                <p>8:00 AM - 7:00 PM</p>
              </li>
              <li className="flex gap-4 justify-between">
                <p>Open Daily</p>
                <p>8:00 AM - 7:00 PM</p>
              </li>
              <li className="text-[16px] italic">
                Appointments outside office hours available upon request. Just
                call!
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <div className="px-8 flex flex-col gap-8 shadow-md rounded-md border-1 py-8 w-[800px]">
              <h1 className="text-[24px]">Send Message</h1>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <Label>Name</Label>
                  <Input className="rounded-none border-[#8b8b8b] border-x-0 border-y-0 border-b-1" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Label>Email</Label>
                  <Input className="rounded-none border-[#8b8b8b] border-x-0 border-y-0 border-b-1" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Message</Label>
                <Textarea className="rounded-none border-[#8b8b8b] border-x-0 border-y-0 border-b-1" />
              </div>
              <div className="flex flex-row justify-end">
                <Button className="w-fit rounded-full px-8 hover:bg-white hover:border-black hover:border-1 hover:text-black">
                  Send
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex gap-24">
              <ul className="flex flex-col gap-1 text-[18px] text-[#4e4e4e]">
                <h3 className="font-medium text-[20px] mb-2">Quick Links</h3>
                <li className="border-b-0  hover:border-b-1 w-fit">Listing</li>
                <li className="border-b-0  hover:border-b-1 w-fit">
                  Let's Move
                </li>
                <li className="border-b-0  hover:border-b-1 w-fit">About Us</li>
              </ul>
              <ul className="flex flex-col gap-1 text-[18px] text-[#4e4e4e]">
                <h3 className="font-medium text-[20px] mb-2">More</h3>
                <li className="border-b-0  hover:border-b-1 w-fit">
                  Open Today
                </li>
                <li className="border-b-0  hover:border-b-1 w-fit">
                  Schedule Appointment
                </li>
              </ul>
              <ul className="flex flex-col gap-1 text-[18px] text-[#4e4e4e]">
                <h3 className="font-medium text-[20px] mb-2">Help</h3>
                <li className="border-b-0  hover:border-b-1 w-fit">FAQ</li>
                <li className="border-b-0  hover:border-b-1 w-fit">Contacts</li>
                <li className="border-b-0  hover:border-b-1 w-fit">
                  Privacy Policy
                </li>
                <li className="border-b-0  hover:border-b-1 w-fit">
                  Terms of Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d26639.712717574617!2d-115.95666440982315!3d36.17937828157672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e6!4m0!4m1!2s3190%20HW-160%2C%20Suite%20F%2C%20Pahrump%2C%20Nevada%2089048%2C%20United%20States!5e1!3m2!1sen!2sph!4v1755335336858!5m2!1sen!2sph"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
