import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={'https://d2oi1rqwb0pj00.cloudfront.net/community/nio_1723348069161_100.webp'}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Real Developer's Community
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Welcome to the Real Developers community, a friendly place for
                software developers and tech lovers who want to learn more about
                technology and become real developers. Whether you’re new to
                coding or have been doing it for years, this community is here
                to help you grow, share knowledge, and make a difference in the
                tech world. We believe that by working together, we can all
                become better at what we do. Join us to learn, connect, and
                build a brighter future in tech!
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
