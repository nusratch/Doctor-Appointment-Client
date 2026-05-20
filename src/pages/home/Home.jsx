const Home = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 min-h-[80vh]">
        
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#0f172a]">
            Let’s Make An
            <span className="text-[#009dff]"> Appointment </span>
            With Trusted Doctors
          </h1>

          <p className="text-gray-500 text-lg leading-8">
            Find experienced doctors, book appointments easily,
            and manage your healthcare journey from anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#009dff] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0284c7] transition">
              Book Now
            </button>

            <button className="border border-[#009dff] text-[#009dff] px-8 py-3 rounded-xl font-semibold hover:bg-[#009dff] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className="w-full max-w-md"
            src="https://i.ibb.co.com/BKDN6M8/doctor.png"
            alt="doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;