import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className=" fixed left-0 right-0 top-0 z-50">
        <div className="text-white  dark:bg-gray-800 shadow-4 shadow px-4 w-full container mx-auto py-4 flex items-center justify-between">
          <Link className=" " href="/">
            Home
          </Link>
          <Link className="" href="about">
            About
          </Link>
          <Link href="company" className="">
            Company
          </Link>
          <Link href="contact" className="">
            Contact
          </Link>
          <Link href="login" className="">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
