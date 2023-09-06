import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord, BsMedium } from "react-icons/bs";
interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-dark1 px-2 xl:px-0">
      <div className="flex flex-wrap items-start justify-between gap-7 max-w-container mx-auto py-12">
        {/* Logo and Info */}
        <div className="flex flex-col gap-5 ">
          <img className="w-[120px] h-[40px]" src="/footer_logo.png" />
          <span>777 Sense Labs © 2022</span>
          <span className="text-xs text-white/50">
            Ste 1200, <br /> 1309 Coffeen Avenue Sheridan,
            <br /> US, 82801
          </span>
        </div>
        {/* Link Group 1 */}
        <ul className="text-xs text-white/50">
          <li className="pb-5">Contact Us</li>
          <li className="pb-5">FAQ</li>
          <li className="pb-5">Privacy Policy</li>
          <li className="pb-5">Terms of Use</li>
          <li className="pb-5">Cookie Policy</li>
        </ul>
        {/* Link Group 2 */}
        <ul className="text-xs text-white/50">
          <li className="pb-5">Home</li>
          <li className="pb-5">Feed</li>
          <li className="pb-5">Foundation</li>
          <li className="pb-5">Analytics</li>
        </ul>
        {/* Social Links */}
        <ul className="text-xs text-white/50">
          <li className="pb-5 flex items-center gap-2">
            <AiFillInstagram className="text-white text-xl" /> Instagram
          </li>
          <li className="pb-5 flex items-center gap-2">
            <AiOutlineTwitter className="text-white text-xl" /> Twitter
          </li>
          <li className="pb-5 flex items-center gap-2">
            <BsDiscord className="text-white text-xl" /> Discord
          </li>
          <li className="pb-5 flex items-center gap-2">
            <BsMedium className="text-white text-xl" /> Medium
          </li>
        </ul>
        {/* Newsletter Input */}
        <div className="relative flex gap-5 border-2 border-white/10 p-1 rounded-lg">
          <label className="text-xs text-white/50 bg-dark1 absolute top-[-10px] left-3">
            Newsletter
          </label>
          <input
            className="text-sm min-w-[20ch] bg-transparent"
            value="hello@buketdesign.com"
          />
          <button className="text-sm bg-action px-1 md:px-5 py-3 rounded-md hover:bg-opacity-90">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
