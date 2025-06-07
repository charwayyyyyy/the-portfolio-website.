import HeroImg from "@/assets/images/theoicotoon.png";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Programmer and I.T Manager
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Theophilus David Nana Yaw Kyei-Charway, a full-stack developer.
                I combine both frontend and backend skills to create electronic web 
                solutions for businesses and oranisations.
                My work focuses on the visual and interactive side using technologies like
                HTML, CSS, and JavaScript frameworks (React, Angular, Vue), as well
                as managing server-side logic, databases, and application integration,
                 often using languages like Node.js, Express.js Python, and PHP.

              </p>
              <p className="text-white">
                I have a passion for building efficient, scalable, and user-friendly applications.
                My goal is to create seamless digital experiences that enhance productivity and drive business success.
                With a strong foundation in both frontend and backend technologies,
                I am committed to delivering high-quality solutions that meet the needs of users and businesses alike.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    "Simplicity is the ultimate sophistication—clarity over cleverness wins every time"
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Theophilus David Nana Yaw Kyei-Charway
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
