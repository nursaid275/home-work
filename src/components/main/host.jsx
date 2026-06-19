function Host() {
  return (
    <section className="max-w-[1440px] mx-auto px-[50px] py-[100px] bg-[#191919]">
      <div className="flex justify-between items-center">
        <div className="max-w-[590px]">
          <div className="w-[112px] h-[112px] rounded-full bg-[#118DA8] flex items-center justify-center mb-5">
            <span className="text-white text-5xl">→</span>
          </div>

          <p className="text-[#118DA8] text-[18px]">
            Meet your host
          </p>

          <h2 className="text-white text-[65px] leading-[80px] mt-2">
            Jacob
            <br />
            Nordby
          </h2>

          <p className="text-[#FFFFFFB2] text-[22px] mt-8">
            Jacob has a background in audio engineering,
            and has been podcasting since the early days.
          </p>

          <p className="text-[#FFFFFFB2] text-[22px] mt-8">
            He’s here to help you level up your podcast
            with practical advice and real-world experience.
          </p>
        </div>

        <img
          src="/svg/host.svg"
          alt="host"
          className="w-[650px] h-[743px] object-cover rounded-[12px]"
        />
      </div>
    </section>
  );
}

export default Host;