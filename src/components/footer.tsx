import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-linear-to-b from-[#15223E] to-[#191919] px-4 pb-8 pt-16 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 h-px w-full bg-white" aria-hidden="true" />

        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-0">
          <div className="flex items-start justify-start">
            <div className="h-36 w-36 opacity-100">
              <Image
                src="/assets/hultprize_logo.svg"
                alt="Hult Prize Logo"
                width={144}
                height={144}
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="text-left">
            <h3 className="mb-6 font-poppins text-[24px] font-semibold leading-[100%] tracking-[0px] text-white">
              Quick links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/about"
                    className="font-poppins text-[18px] font-normal leading-[100%] tracking-[0px] text-white transition-opacity duration-200 hover:opacity-80"
                    tabIndex={0}
                    aria-label="Learn more about Hult Prize"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="font-poppins text-[18px] font-normal leading-[100%] tracking-[0px] text-white transition-opacity duration-200 hover:opacity-80"
                    tabIndex={0}
                    aria-label="About Hult Prize"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="font-poppins text-[18px] font-normal leading-[100%] tracking-[0px] text-white transition-opacity duration-200 hover:opacity-80"
                    tabIndex={0}
                    aria-label="Register your team"
                  >
                    Register Team
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-left lg:text-right">
            <h3 className="mb-6 font-poppins text-[24px] font-semibold leading-[100%] tracking-[0px] text-white">
              Follow us
            </h3>
            <div className="grid grid-cols-1 gap-4 justify-items-start lg:justify-items-end">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity duration-200 hover:opacity-70"
                aria-label="Follow us on LinkedIn"
                tabIndex={0}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity duration-200 hover:opacity-70"
                aria-label="Follow us on X (Twitter)"
                tabIndex={0}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity duration-200 hover:opacity-70"
                aria-label="Follow us on Instagram"
                tabIndex={0}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-left lg:text-right">
          <p className="font-poppins text-[16px] font-normal leading-[100%] tracking-[0px] text-white">
            © {currentYear}{" "}
            <span className="font-semibold underline">
              Hult Prize
            </span>
            . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
