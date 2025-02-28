import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="pt-36  w-full h-screen py-8 dark:bg-gray-900 sm:py-16 md:py-24 flex items-center justify-center">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Get your tasks done
            </p>
            <h1 className="my-3 sm:my-4 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-10 tracking-tight text-white">
              Productivity tool for
              <span className="text-blue-700">Devs</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-500">
              We help you streamline your workflow by planning, time-boxing and
              executing one task at a time.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xl leading-tight hover:bg-blue-600 cursor-pointer hover:shadow-sm focus:bg-blue-600 focus:shadow-sm focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-sm disabled:opacity-25 transition duration-150 disabled:pointer-events-none ease-in-out">
              Get started!
            </button>
          </div>
        </div>
      </section>
      <Cards />
      <Footer />
    </>
  );
}

export default AboutPage;
