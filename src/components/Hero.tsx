import { HeroCards } from "./HeroCards";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#FE7F3E] to-[#FF3D00] text-transparent bg-clip-text">
              Building
            </span>{" "}
            A Community
          </h1>{" "}
          of{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#FE7F3E] via-[#FF6F61] to-[#FFB07C] text-transparent bg-clip-text">
              Real
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Empowering Coders to Become Industry Leaders
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://nas.io/mithun-brd/home" target="_blank">
          <Button className="w-full md:w-1/3">Get Started</Button>
          </a>

        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
