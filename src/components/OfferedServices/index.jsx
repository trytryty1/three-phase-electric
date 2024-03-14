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
              Electrical Services in Clarksville and Surrounding Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-600">
              We're commited to helping our customers every step of the way and
              providing useful services to take care of all electrical needs.
            </p>
            {/* Need to create links to their seperate pages */}
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
                    Welcome to 3 Phase Electric LLC, your trusted partner for
                    residential electrical solutions. Our team specializes in a
                    comprehensive range of services, from simple light switch
                    installations to complex whole-home generator setups. We
                    take pride in delivering excellence in every project,
                    ensuring seamless and timely completion tailored to your
                    needs. Countless satisfied homeowners have entrusted us for
                    our commitment to top-quality workmanship, professionalism,
                    and reliability. When you choose 3 Phase Electric LLC, you
                    can rest assured that your home is in expert hands. Contact
                    us today for a hassle-free experience and peace of mind with
                    your residential electrical needs.
                  </p>
                </div>
              </div>
              <hr className="border-t-2 border-blue sm:hidden" />
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
                      At 3 Phase Electric LLC, we understand the critical
                      importance of reliable and efficient power solutions for
                      businesses. With our expertise in commercial electrical
                      services, we offer tailored solutions to meet the unique
                      needs of commercial establishments, from small offices to
                      large industrial complexes. We are equipped to handle a
                      wide range of projects, including electrical system
                      installations, upgrades, maintenance, and repairs. Whether
                      you're looking to optimize energy efficiency, enhance
                      safety measures, or ensure uninterrupted power supply,
                      we're here to provide expert guidance and dependable
                      service. Trust 3 Phase Electric LLC for your commercial
                      power needs, and experience the difference of working with
                      a dedicated partner committed to your success. Contact us
                      today to discuss how we can support your business with
                      reliable and efficient power solutions.
                    </p>
                  </div>
                </div>
                <hr className="border-t-2 mb-4 border-blue sm:hidden" />
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
                      Discover the power of renewable energy with 3 Phase
                      Electric LLC's solar installation services. We specialize
                      in designing and installing customized solar solutions for
                      residential and commercial properties. We are committed to
                      working closely with you to assess your energy needs,
                      evaluate your property's suitability for solar, and
                      develop a tailored solar system that maximizes efficiency
                      and savings. From initial consultation to final
                      installation, we prioritize quality craftsmanship,
                      seamless integration, and customer satisfaction. With
                      solar energy, you can reduce your carbon footprint, lower
                      your electricity bills, and enjoy energy independence.
                      Join the green energy revolution with 3 Phase Electric
                      LLC's solar installation services. Contact us today to
                      schedule a consultation and take the first step toward a
                      brighter, cleaner future
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
