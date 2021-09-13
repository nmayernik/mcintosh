import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div>
        <section className="">
          <h2 className="pb-8 text-4xl font-bold">About</h2>

          <p className="mb-5">
            {"I'm"} Nick Mayernik, a full-stack UX Designer. I work across product disciplines — including research, 
            design, and engineering — in hopes of influencing our bigger-picture relationship with technology. 
            I studied psychology at Lafayette College, having graduated in 2021, where I focused on research and 
            how {"it's"} applied to disciplines like human factors and cognitive psychology. At the same time, 
            {" I've"} been leading all-things design and development at PYRAMID, an ambitious local fitness 
            company, since 2018.
          </p>

          <p className="mb-5">
            I think of myself as a generalist with a knack for deep-diving. Professionally, those deep dives are at 
            the intersection of people & technology, around topics like design systems, behavior change, and context-shifts. 
            I love to approach a topic that I know nothing about; stare at it for awhile, and experiment 
            imperfectly as means of learning. Ultimately, this is toward my goal of making things that 
            enable Time Well Spent.
          </p>

          <p className="mb-5">
            I like to work in closely-knit interdisciplinary teams, where I get to wear many hats and learn from people 
            around me. I try to I structure my work-life in a way that focus on cognitively-demanding deep work. 
          </p>
          
          <div className="mb-5">
            <p>
              To learn more about my work, skillsets and professional interests, you can visit:
            </p>
            <ul className="text-left list-disc list-inside ">
              <li>My Changelog, which I update with the work {"I'm"} focused on currently</li>
              <li>My Projects page, where {"I"} publish case studies about my work</li>
              <li>My Stack, where I upack the tools, methologies, and languages that I use regularly</li>
            </ul>
            <p>
              Alternatively, you can download a copy of my resume or view it on read.cv.
            </p>
          </div>

          <p className="mb-5">
            Outside that, given my proximity to gyms over the years, {"I've"} become a big fan of weightlifting and, 
            more recently, joined the world of Peloton. I love to kayak and paddle board for the handful of 
            months that Pennsylvania weather allows. Last but not least, {"I'm"} a huge soccer fan, happy to be 
            heartbroken by Tottenham Hotspur every year. 
          </p>
      
        </section>

        
      </div>
    </div>
  );
}
