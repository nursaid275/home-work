function Main() {
  return (
    <section className="max-w-[1440px] mx-auto px-[50px] pt-[40px] flex items-center justify-between bg-[#191919]">
      <div>
       < img src="/svg/logo.svg" className="w-[650px] h-[873px] object-cover rounded-[12px]" alt="" />
      </div>

      <div className="mr-[120px]">
        <h1 className="text-white text-[70px] leading-[88px] font-light">
          Take your <br />
          podcast to the <br />
          next <span className="font-bold border-b-4 border-[#118DA8]">level</span>
        </h1>

        <div className="mt-[80px]">
          <p className="text-white text-[15px] mb-5">
            Listen on
          </p>

          <div className="flex gap-4">
            <img src="/svg/spotify.svg" alt="" />
            <img src="/svg/pocket.svg" alt="" />
            <img src="/svg/soundcloud.svg" alt="" />
            <img src="/svg/podcast.svg" alt="" />
            <img src="/svg/overcast.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;