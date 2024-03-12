export default function OfferedServices() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pb-24 pt-10 sm:pb-32 flex justify-center">
          <div className="mx-auto w-full lg:mx-0 flex justify-center flex-col">
            {/* <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                  <a
                    href="#"
                    className="whitespace-nowrap font-semibold text-indigo-600"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
            <h2 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Offered Services in Lorem Ipsum
            </h2>
            <div className="flex flex-col mt-6 space-y-6">
              <div className="flex flex-col space-y-2 gap-1 rounded-lg hover:translate-y-1 transform transition duration-300 ease-in-out">
                <img src="work-pics/residential.jpeg" className="rounded-lg max-h-96 object-cover" />
                <h3 className="text-3xl pb-4 font-semibold text-gray-900 pl-4">
                  Residential
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6 gap-1 rounded-lg hover:translate-y-1 transform transition duration-300 ease-in-out">
                <div className="flex flex-col space-y-2 gap-1 rounded-lg hover:translate-y-1 max-h-96 w-1/2 sm:w-full transform transition duration-300 ease-in-out">
                  <img src="construction.jpeg" className="rounded-lg max-h-96 object-cover" />
                  <h3 className="text-3xl pb-4 font-semibold text-gray-900 pl-4">
                    Construction
                  </h3>
                </div>
                <div className="flex flex-col space-y-2 gap-1 rounded-lg hover:translate-y-1 max-h-96 w-1/2 sm:w-full transform transition duration-300 ease-in-out">
                  <img src="contractor.jpeg" className="rounded-lg max-h-96 object-cover" />
                  <h3 className="text-3xl pb-4 font-semibold text-gray-900 pl-4">
                    Electrical contractor
                  </h3>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
