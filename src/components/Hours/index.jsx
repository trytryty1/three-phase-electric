export default function Hours() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pl-4 mx-auto py-16 sm:py-16 lg:py-16 lg:max-w-none">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary-900">
            Hours of Operation
          </h2>
          <div className="mt-6 space-y-6">
            <p className="text-lg text-primary-500">
              Monday - Friday: 7:00am - 4:30pm
            </p>
            <p className="text-lg text-primary-500">
              Saturday: 10:00am - 2:00pm
            </p>
            <p className="text-lg text-primary-500">
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}