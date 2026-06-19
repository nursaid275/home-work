function Subscribe() {
  return (
    <section className="max-w-[1440px] mx-auto px-[50px] py-[100px] bg-[#191919]">
      <div className="bg-black rounded-[32px] p-[60px] flex justify-between">
        <div>
          <p className="text-[#118DA8] text-[18px]">
            Email Newsletter
          </p>

          <h2 className="text-white text-[72px] leading-[80px] mt-2">
            Subscribe
            <br />
            for updates
          </h2>
        </div>

        <form className="flex flex-col gap-5 w-[520px]">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#191919] text-white px-6 py-6 rounded-md outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-[#191919] text-white px-6 py-6 rounded-md outline-none"
          />

          <button
            className="bg-[#118DA8] text-white px-6 py-4 rounded-md w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;