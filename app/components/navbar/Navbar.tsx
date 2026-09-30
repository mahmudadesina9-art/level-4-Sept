import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-green-400 text-white h-[50px]">
      <div className="flex items-center gap-4">
        {/* <img
          src="https://scict.edossier.app/edozzier/upload/company/SCICT-staff-18-sqi-new-logo.jpeg"
          alt=""
        /> */}
        <Image
          src={
            "https://scict.edossier.app/edozzier/upload/company/SCICT-staff-18-sqi-new-logo.jpeg"
          }
          alt="logo"
          width={30}
          height={30}
        />
        <h3>SQI</h3>
      </div>
      <div className="flex gap-5">
        <Link href={"/about"}>
          <h3>About</h3>
        </Link>
        <Link href={"/contact"}>
          <h3>Contact</h3>
        </Link>
        <Link prefetch={false} href={"/service"}>
          <h3>Services</h3>
        </Link>
      </div>
      <div className="flex gap-5">
        <button className="border border-blue-600 px-5 py-2 rounded-xl">
          Sign Up
        </button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
