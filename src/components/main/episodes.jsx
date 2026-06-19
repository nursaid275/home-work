function Episodes() {
  return (
    <section className="max-w-[1440px] mx-auto px-[50px] py-[100px] bg-[#191919]">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-white text-[64px]">
          Latest episodes
        </h2>

        <button className="bg-[#118DA8] text-white px-5 py-3 rounded-md">
          View all episodes
        </button>
      </div>

      <div className="flex flex-col gap-16">
        
        <div className="bg-black p-10 rounded-[32px] flex gap-12">
          <img
            src="/svg/episode1.svg"
            alt=""
            className="w-[389px] h-[465px] object-cover"
          />

          <div>
            <span className="bg-[#191919] text-white px-4 py-2 rounded-md">
              Gear
            </span>

            <p className="text-[#118DA8] mt-10">Episode 3</p>

            <h3 className="text-white text-[64px] leading-[70px] mt-4">
              Should you get
              <br />
              outboard audio
              <br />
              gear?
            </h3>

            <p className="text-[#FFFFFFB2] text-[22px] mt-6">
              Is hardware really worth it when it comes to podcasting?
              The answer is... it depends.
            </p>

            <button className="bg-[#118DA8] text-white px-5 py-3 rounded-md mt-8">
              View Episode Details
            </button>
          </div>
        </div>

    
        <div className="bg-black p-10 rounded-[32px] flex gap-12">
          <img
            src="/svg/episode1.svg"
            alt=""
            className="w-[389px] h-[465px] object-cover"
          />

          <div>
            <span className="bg-[#191919] text-white px-4 py-2 rounded-md">
              Tips & Tricks
            </span>

            <p className="text-[#118DA8] mt-10">Episode 2</p>

            <h3 className="text-white text-[64px] leading-[70px] mt-4">
              Mic tricks to
              <br />
              take you to the
              <br />
              next level
            </h3>

            <p className="text-[#FFFFFFB2] text-[22px] mt-6">
              Stop rolling with those default settings on your mic.
              These small tricks can improve your sound.
            </p>

            <button className="bg-[#118DA8] text-white px-5 py-3 rounded-md mt-8">
              View Episode Details
            </button>
          </div>
        </div>

        
        <div className="bg-black p-10 rounded-[32px] flex gap-12">
          <img
            src="/svg/episode1.svg"
            alt=""
            className="w-[389px] h-[465px]  object-cover"
          />

          <div>
            <span className="bg-[#191919] text-white px-4 py-2 rounded-md">
              Gear
            </span>

            <p className="text-[#118DA8] mt-10">Episode 1</p>

            <h3 className="text-white text-[64px] leading-[70px] mt-4">
              The best
              <br />
              microphone
              <br />
              under $200
            </h3>

            <p className="text-[#FFFFFFB2] text-[22px] mt-6">
              Looking to upgrade your microphone without spending a
              fortune? Here are our recommendations.
            </p>

            <button className="bg-[#118DA8] text-white px-5 py-3 rounded-md mt-8">
              View Episode Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Episodes;