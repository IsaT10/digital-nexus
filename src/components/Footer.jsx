import { BsFillPlayFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-t-2 border-stone-600">
      <div className="max-w-7xl xl:mx-auto mx-10 py-20 md:py-32 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 justify-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 ">DN</h2>
          <p className="text-stone-400 mb-3">For your creative output</p>
          <p className="text-sm"> &copy; 2023 DIGITAL NEXUS</p>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Address</h2>
          <div className="flex flex-col gap-1 text-stone-400 ">
            <p className="hover:text-white duration-300 cursor-pointer">
              Jom Jom Tower, Uttora, Dhaka
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              44 1793 123 456
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              digital@nexus.com
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Social</h2>
          <div className="flex flex-col gap-2 text-stone-400 text-sm">
            <p className="hover:text-white duration-300 cursor-pointer">
              INSTAGRAM
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              TWITTER
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              DRIBBLE
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              LINKEDIN
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">News letter</h2>
          <p className="text-stone-400 hover:text-white duration-300 cursor-pointer mb-4">
            Be up to date with new products.
          </p>
          <div className="relative">
            <input
              className="bg-black border-b-[1px] border-stone-400 outline-none w-full pb-2 text-stone-200 pl-3 placeholder:text-stone-400"
              type="text"
              placeholder="Your e-mail"
            />
            <BsFillPlayFill className="absolute top-2 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
