import Image from "next/image";

export default function Gallery() {
  return (
    <div className="bg-background px-3 mb-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl p-4 font-extrabold tracking-tight text-primary-900">
          Gallery of Work
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-4">
            <div>
              <Image
                width={360}
                height={300}
                className="h-auto w-full max-w-full rounded-lg"
                src="/work-pics/image4.AVIF"
                alt=""
              />
            </div>
            <div>
              <Image
                width={360}
                height={900}
                className="h-auto w-full max-w-full rounded-lg"
                src="/work-pics/image1.AVIF"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                width={360}
                height={270}
                className="h-auto w-full max-w-full rounded-lg"
                src="/work-pics/image8.AVIF"
                alt=""
              />
            </div>
            <div>
              <Image
                width={360}
                height={480}
                className="h-auto w-full max-w-full rounded-lg"
                src="/work-pics/image0.AVIF"
                alt=""
              />
            </div>
            <div>
              <Image
                width={360}
                height={270}
                className="h-auto w-full max-w-full rounded-lg"
                src="/work-pics/image5.AVIF"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
