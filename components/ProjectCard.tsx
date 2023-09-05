import ActionButton from "./ActionButton";

interface ProjectCardProps {}

const ProjectCard = ({}: ProjectCardProps) => {
  return (
    <article className="bg-dark1 w-[261px] p-5 flex flex-col rounded-lg border border-white/10 mt-3">
      <img src="/post-cover.jpeg" />
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-xl font-semibold">The Big Mac</h2>
        <span className="text-sm text-action">3 in stock</span>
      </div>
      <div className="flex gap-[10px]">
        <span className="text-sm font-medium text-white/60">Creator</span>
        <span className="text-action text-sm">·</span>
        <span className="text-sm font-bold text-white/60">Roger Waters</span>
      </div>
      <div className="mt-3">
        <ActionButton>Mint</ActionButton>
        <button className="border border-white/50 rounded-md h-6 px-[10px] ml-3 text-xs font-bold">
          1.5
          <img className="inline w-4 h-4" src="/ethereum-icon.png" />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
