import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
interface CreatorCardProps {}

const CreatorCard = ({}: CreatorCardProps) => {
  return (
    <div className="w-full bg-dark1 flex justify-between items-center h-[88px] px-5 rounded-lg">
      <div className="flex gap-4">
        <img src="/creator.png" className="rounded-full h-12" />
        <div className="flex flex-col">
          <span className="text-dark3 text-xs">Creator</span>
          <div className="flex items-center gap-2">
            <span>Eric Clapton</span>
            <span className="text-action text-xs"> · 3 Project</span>
            <div className="flex ml-auto gap-[15px]">
              <AiFillInstagram className="text-2xl" />
              <AiOutlineTwitter className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CreatorCard;
