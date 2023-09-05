interface HeroProjectProps {}

const HeroProject = ({}: HeroProjectProps) => {
  return (
    <section className="max-w-container mx-auto mt-8">
      <h2 className="text-xl px-2 xl:px-0">Project</h2>
      <div
        id="project__container"
        className="pt-8 flex flex-col lg:flex-row gap-[30px] items-start px-2 xl:px-0"
      >
        <div
          id="nft__picture"
          className="flex-1 aspect-square max-w-[649px] min-w-[80%] lg:min-w-max mx-auto bg-dark2 border-[20px] border-dark1 rounded-lg grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.9267 46.9671C52.5881 46.9671 53.5251 45.0588 52.5093 43.7442L37.1031 23.8068C36.3024 22.7707 34.7386 22.7707 33.9379 23.8068L24.2871 36.2962C23.4988 37.3163 21.9653 37.3351 21.1523 36.3344L16.4478 30.5443C15.6474 29.5592 14.1437 29.5592 13.3433 30.5443L2.64943 43.706C1.58747 45.013 2.51759 46.9672 4.20166 46.9672H29.7914C29.7914 46.9672 29.7914 46.9671 29.7914 46.9671C29.7914 46.9671 29.7914 46.9671 29.7914 46.9671H50.9267Z"
              fill="#1E1E1E"
            />
            <ellipse
              cx="17.1874"
              cy="12.6042"
              rx="5.72916"
              ry="5.72917"
              fill="#1E1E1E"
            />
          </svg>
        </div>
        <div id="nft__content" className="max-w-[455px] mx-auto">
          <h2 className="text-5xl font-semibold pb-[12px]">
            Great NFT Project
          </h2>
          <div id="nft__creator" className="flex justify-between pt-4">
            <div className="flex gap-4">
              <img src="/creator.png" className="rounded-full h-12" />
              <div className="flex flex-col">
                <span className="text-dark3">Creator</span>
                <span>Eric Clapton</span>
              </div>
            </div>
            <button className="bg-action rounded-lg text-sm font-bold px-10 hover:bg-opacity-80">
              Mint
            </button>
          </div>
          <p id="nft__description" className="break-words py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar sollicitudin dui. Sed pulvinar sollicitudin dui ac
            ullamcorper. Mauris interdum lobortis commodo. Etiam tellus justo,
            ultricies et arcu quis, vehicula scelerisque turpis. Nunc mi ante,
            sagittis vitae imperdiet quis, scelerisque ac nulla. Maecenas enim
            urna, ullamcorper sed erat.
          </p>

          <div
            id="nft__card"
            className="bg-dark1 rounded-lg py-8 px-5 flex flex-col items-center"
          >
            <span className="text-sm text-action font-medium pt-[10px]">
              Mint Price
            </span>
            <h1 className="text-5xl font-semibold py-4">2.00 ETH</h1>
            <h4 className="font-semibold pb-11">$3,102.76</h4>
            <span className="text-sm text-action font-medium">
              Mint Starting In
            </span>
            <div id="nft__countdown" className="flex gap-14 pb-[10px]">
              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold">19</span>
                <span className="text-xs font-medium text-white/60">hrs</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold">26</span>
                <span className="text-xs font-medium text-white/60">min</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold">48</span>
                <span className="text-xs font-medium text-white/60">sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProject;
