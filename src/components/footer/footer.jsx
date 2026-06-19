function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-[50px] py-[100px] bg-[#191919]">
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-white text-[32px] font-bold mb-6">
            Castaway
          </h2>

          <div className="flex gap-4">
            <img
              src="/svg/instagram.svg"
              alt="Instagram"
              className="w-6 h-6 cursor-pointer"
            />

            <img
              src="/svg/twitter.svg"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />

            <img
              src="/svg/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

  
        <ul className="text-white flex flex-col gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Episodes</li>
          <li>Contact</li>
        </ul>


        <ul className="text-white flex flex-col gap-3">
          <li>Style Guide</li>
          <li>Instructions</li>
          <li>Changelog</li>
          <li>Credit</li>
          <li>Powered by Webflow</li>
          <li>Licenses</li>
        </ul>

      
        <div className="flex gap-4">
          <img src="/svg/spotify.svg" alt="" className="w-8 h-8" />
          <img src="/svg/pocket.svg" alt="" className="w-8 h-8" />
          <img src="/svg/soundcloud.svg" alt="" className="w-8 h-8" />
          <img src="/svg/podcast.svg" alt="" className="w-8 h-8" />
          <img src="/svg/overcast.svg" alt="" className="w-8 h-8" />
        </div>

      </div>
    </footer>
  );
}

export default Footer;