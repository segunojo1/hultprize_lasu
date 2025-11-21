"use client";

import Logo from "./logo";
import { Button } from "./ui/button";
import { useState, useMemo } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const clip = useMemo(
    () => ({
      WebkitClipPath: open
        ? "circle(150% at 100% 0)"
        : "circle(0px at 100% 0)",
      clipPath: open ? "circle(150% at 100% 0)" : "circle(0px at 100% 0)",
      transition: "clip-path 500ms ease, -webkit-clip-path 500ms ease",
    }),
    [open]
  );
  return (
    <>
      <nav className="fixed hidden lg:block inset-x-0 top-0 z-[999999]">
        <div className="mx-auto w-full max-w-[1549px] px-[89px] font-sans poppins flex items-center justify-between py-[46px]">
          <Logo />
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-10">
              <li className="p-2.5 text-[20px] font-medium ">Home</li>
              <li className="p-2.5 text-[20px] font-medium ">Contact</li>
            </ul>
            <Button className="h-full poppins-semibold bg-primary py-2.5 px-[60px] text-[20px] font-semibold rounded-[30px]">Register Team</Button>
          </div>
        </div>
      </nav>

      <nav className="fixed lg:hidden inset-x-0 top-0 z-[999999] px-4 md:pt-4 pt-14">
        <div className="mx-auto max-w-[560px] w-full">
          <div className="flex items-center justify-between rounded-full bg-[#1E1E1E]/95 px-7 py-3 text-white">
            <Logo />
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="h-10 w-10 shrink-0 rounded-full grid place-items-center bg-[#2A2A2A]"
            >
              <span className="relative block h-6 w-9 z-[99999999]">
                <span
                  className={`absolute left-0 top-0 h-1 w-full bg-white transition-transform ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-white transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-1 w-full bg-white transition-transform ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          style={clip}
          className="fixed inset-0 z-[999900] bg-[#15223E] text-white"
        />

        {open && (
          <div className="fixed inset-0 z-[999901] text-white flex flex-col items-center justify-center gap-8 text-center px-6">
            <ul className="space-y-6 text-[22px] font-medium">
              <li>Home</li>
              <li>Contact</li>
            </ul>
            <Button className="poppins-semibold bg-primary py-3 px-14 h-fit text-[20px] font-semibold rounded-[30px]">
              Register Team
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
