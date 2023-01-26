const Features = () => {
  return (
      <div className="container items-center flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* whats different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            How can you help? 
          </h2>

          <ul className="font-bold space-y-2">
            <p className="max-w-sm text-center md:text-left">
              1. Login to your account
            </p>

            <p className="max-w-sm text-center md:text-left">
              2. Locate a fridge on the map near you
            </p>
            <p className="max-w-sm text-center md:text-left">
              3. Check for space availibility
            </p>
            <p className="max-w-sm text-center md:text-left">
              4. Navigate to the fridge
            </p>
            <p className="max-w-sm text-center md:text-left">
              5. Place food items in the fridge.
            </p>
          </ul>
        </div>


      </div>

  );
};

export default Features;
