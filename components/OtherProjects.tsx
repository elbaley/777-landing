import ProjectCard from "./ProjectCard";

interface OtherProjectsProps {}

const OtherProjects = ({}: OtherProjectsProps) => {
  return (
    <section className="max-w-container mx-auto my-14">
      <div className="flex justify-between items-center px-2 xl:px-0">
        <h2 className="text-xl ">Creator’s Other Projects</h2>
        <button className="text-sm font-bold py-[10px] px-10 bg-dark2 rounded-lg">
          See All
        </button>
      </div>
      <div
        id="project_cards__container"
        className="flex flex-wrap justify-around lg:justify-between  px-2 xl:px-0"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default OtherProjects;
