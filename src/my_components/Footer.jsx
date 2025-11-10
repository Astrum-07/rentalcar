import React from "react";
import Logo from "../assets/img/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="mt-9">
        <div className="mycontainer">
          <div className="parent_top grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 items-start gap-4 justify-between my-10">

            <div className="box1 flex flex-col gap-2">
              <img className="w-[150px]" src={Logo} alt="" />
              <p className=" font-normal text-xs leading-[167%] text-white">
                Car rental offers a wide range of cars available for rent in
                Newark EWR Airport NJ. We pride ourselves in our customer
                service, and hassle-free renting experience.
              </p>
            </div>

            <div className="box2 flex flex-col gap-2">
                <h3 className=" font-medium text-base text-white">Main</h3>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">My Bookings</a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">Reservation</a>
            </div>

             <div className="box2 flex flex-col gap-2">
                <h3 className=" font-medium text-base text-white">Categories</h3>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">Compact </a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">Sports cars</a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">Vans</a>
            </div>

               <div className="box2 flex flex-col gap-2">
                <h3 className=" font-medium text-base text-white">Company</h3>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">About us </a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">Careers</a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">News</a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">Contact us</a>
            </div>

               <div className="box2 flex flex-col gap-2">
                <h3 className=" font-medium text-base text-white">Our Locations</h3>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">2118 Thornridge Cir. Syracuse </a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">4140 Parker Rd. Allentown</a>
               <a className="font-medium text-sm text-white hover:text-[#299764] transition-[1s] cursor-pointer" href="#">4517 Washington Ave.</a>
            </div>


          </div>
  <hr className="text-gray-400"/>
        <div className="flex justify-center py-3 ">
            <p className="font-medium text-base leading-[150%] text-white">© 2022 Car rental Terms & Conditions</p>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
