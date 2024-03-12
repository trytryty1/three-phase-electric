import Image from "next/image";

export default function OfferedServices() {
  return (
    <div className="relative bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pb-8 pt-10 sm:pb-12 flex justify-center">
          <div className="mx-auto w-full lg:mx-0 flex justify-center flex-col">
            {/* <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-primary-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
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
            <h2 className="mt-24 text-4xl font-bold tracking-tight text-primary-900 sm:mt-10 sm:text-6xl">
              Offered Services in Clarksville and Surrounding Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-600">
              We're commited to helping our customers every step of the way and
              providing useful services to take care of all their needs read
              below to learn about the range of services we provide.
            </p>
            <div className="flex flex-col mt-6 space-y-6">
              <div className="flex flex-col space-y-2 gap-1 rounded-lg hover:translate-y-1 transform transition duration-300 ease-in-out">
                <Image
                  width={500}
                  height={500}
                  src="/work-pics/residential.AVIF"
                  className="rounded-lg max-h-96 w-full object-cover"
                  alt="residential electrical work"
                />
                <div className="pl-1 pb-4">
                  {" "}
                  <h3 className="text-3xl pb-3 font-semibold text-primary-900">
                    Residential
                  </h3>
                  <p className="text-primary-600">
                    This is one of your most popular services available for home
                    owners who need something done anything from a light switch
                    to a whole home generator. It's made a big difference for
                    many of our customers and is provided with the highest level
                    of excellence. With calling us for your residentail needs,
                    we ensure everything will go seamless and handled in a
                    timely manner. Whenever you work with 3 Phase Electric LLC,
                    you can trust that you're in great hands.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6 gap-1 rounded-lg hover:translate-y-1 transform transition duration-300 ease-in-out">
                <div className="flex flex-col space-y-2 gap-1 rounded-lg hover:translate-y-1 sm:w-1/2 w-full transform transition duration-300 ease-in-out">
                  <Image
                    src="/construction.AVIF"
                    width={500}
                    height={500}
                    alt="construction site with electrical work being done"
                    className="rounded-lg sm:max-h-64 object-cover"
                  />
                  <div className="pl-1 pb-4">
                    {" "}
                    <h3 className="text-3xl pb-3 font-semibold text-primary-900">
                      Commercial Services
                    </h3>
                    <p className="text-primary-600">
                      Frequently utilized by most of our buisness clients, this
                      service has been essentail to success on many occasions.
                      When it comes to all of our services, you can count on us
                      to take care of your every need. We pride ourselves on our
                      exceptional customer service, and guarantee you'll love
                      working with our team. Let us know how we can assist you
                      with your commercial projects today.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 gap-1 rounded-lg hover:translate-y-1 sm:w-1/2 w-full transform transition duration-300 ease-in-out">
                  <Image
                    src="/contractor.AVIF"
                    width={500}
                    height={500}
                    className="rounded-lg sm:max-h-64 object-cover"
                    alt="electrion working on electrical"
                  />

                  <div className="pl-1 pb-4">
                    {" "}
                    <h3 className="text-3xl pb-3 font-semibold text-primary-900">
                      Solar
                    </h3>
                    <p className="text-primary-600">
                      We want all of our customers to experience the impressive
                      level of professionalism when working with 3 Phase
                      Electric LLC. All of our services, especially this one,
                      exist to make your life easier and stress free. You can
                      trust us to supply you with the best products, as well as
                      top quality customer service.
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
