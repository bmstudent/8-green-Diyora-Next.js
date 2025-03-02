function Company() {
  return (
    <>
      <section className="pt-12 mt-12 text-white dark:bg-gray-900 sm:top-0 w-full top-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight  sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              AI-Powered Customer Service Chatbot
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg  font-inter">
              Our AI-powered customer service chatbot is an innovative tool that
              can assist customers 24/7 with their inquiries, providing fast and
              accurate responses.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="mb-3 sm:mb-0 inline-flex border-2 border-white items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-transparent sm:w-auto rounded-xl hover:bg-white hover:text-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Create a bot
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 hover:border-white sm:w-auto rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-900">
          <div className="relative mx-auto mt-4 md:mt-8">
            <div className="lg:max-w-4xl lg:mx-auto">
              <img
                className="px-4 md:mpx-8"
                src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
