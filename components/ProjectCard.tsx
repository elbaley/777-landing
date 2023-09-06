import ActionButton from "./ActionButton";

interface ProjectCardProps {
  variant?: "default" | "horizontal" | "featured";
}

const ProjectCard = ({ variant }: ProjectCardProps) => {
  if (variant === "horizontal") {
    return (
      <article className="bg-dark1 w-full p-1 sm:p-5 flex rounded-lg border border-white/10 mt-3">
        <img className="max-w-[126px]" src="/post-cover.jpeg" />
        <div className="ml-3">
          <div className="flex justify-between items-center">
            <h2 className="text-[15px] font-semibold">The Big Mac</h2>
          </div>
          <div className="flex gap-[10px]">
            <span className="text-sm font-medium text-white/60">Creator</span>
            <span className="text-action text-sm">·</span>
            <span className="text-sm font-bold text-white/60">
              Roger Waters
            </span>
          </div>
          <div className="py-2">
            <span className="text-sm text-action">3 in stock</span>

            <button className="border border-white/50 rounded-md h-6 px-[10px] ml-3 text-xs font-bold">
              1.5
              <img className="inline w-4 h-4" src="/ethereum-icon.png" />
            </button>
          </div>
          <ActionButton>Mint</ActionButton>
        </div>
      </article>
    );
  } else if (variant === "featured") {
    return (
      <article className="bg-dark1 w-full p-5 flex flex-col rounded-lg border border-white/10">
        <img src="/post-cover.jpeg" />
        <div className="flex items-center gap-3 mt-5">
          <h2 className="text-xl font-semibold">The Big Mac</h2>
          <span className="text-sm text-action">3 in stock</span>
          <button className="border border-white/50 rounded-md h-6 px-[10px] ml-auto text-xs font-bold">
            1.5
            <img className="inline w-4 h-4" src="/ethereum-icon.png" />
          </button>
        </div>
        <div className="flex gap-[10px] py-3">
          <span className="text-sm font-medium text-white/60">Creator</span>
          <span className="text-action text-sm">·</span>
          <span className="text-sm font-bold text-white/60">Roger Waters</span>
        </div>
        <div className="mt-3">
          <ActionButton>Mint</ActionButton>
        </div>
      </article>
    );
  }

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
