import CreatorCard from "./CreatorCard";
import ProjectCard from "./ProjectCard";

interface MoreProjectsProps {}

const MoreProjects = ({}: MoreProjectsProps) => {
  return (
    <section className="bg-dark0 mx-auto pb-12">
      <div className="max-w-container mx-auto px-2 lg:px-0 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-[30px] pt-8">
        <div className="max-w-[358px] mx-auto lg:mx-0 b-blue-500/50 flex flex-col gap-[30px]">
          <h2 className="text-xl font-semibold">Look at Other Projects</h2>
          <div
            id="input__group"
            className="w-full flex justify-between items-center gap-4"
          >
            <input
              className="flex-1 w-full h-10 border-2 border-white/10 bg-transparent rounded-lg px-5"
              placeholder="Search..."
            />
            <button className="bg-action p-[10px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4 21.5V14.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 10.5V3.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 21.5V12.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8.5V3.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 21.5V16.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 12.5V3.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 14.5H7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 8.5H15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 16.5H23"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <ProjectCard variant="horizontal" />
          <ProjectCard variant="horizontal" />
          <ProjectCard variant="horizontal" />
        </div>
        <div className="max-w-[358px] mx-auto lg:mx-0  b-green-500 pt-[22px] flex flex-col gap-[30px]">
          <ProjectCard variant="featured" />
          <ProjectCard variant="horizontal" />
        </div>
        <div className="max-w-[358px] md:col-span-3 lg:col-span-1 mx-auto lg:mx-0 w-full justify-center b-orange-500 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Other Creators You May Like</h2>
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
