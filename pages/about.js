import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl py-12 mx-auto">
      <div>
        <section className="prose lg:prose-xl">
          <h2 className="pb-8 text-3xl font-bold">About</h2>

          <p className="mb-5 text-xl leading-relaxed">
            {"I'm"} Nick Mayernik, a full-stack UX Designer working across research, design, and engineering, based in PA. Since 2018, {"I've"} lead research, design and development at {" "} 
            <Link href="https://pyramid.fitness/"><a className="font-semibold underline">PYRAMID</a></Link>, an ambitious 
            local fitness company. My work spans across product disciplines in hopes of influencing our bigger-picture relationship with technology. 
            I studied psychology at <Link href="https://lafayette.edu"><a className="font-semibold underline">Lafayette College</a></Link>, having 
            graduated in 2021, where I focused on research design and how {"it's"} applied in disciplines like Human Factors and Cognitive Psychology.
          </p>

          <p className="mb-5 text-lg">
            {"I'm"} a generalist with a knack for deep-diving. Professionally, those deep dives are at 
            the intersection of people & technology, around topics like design systems, behavior change, and context-shifting. 
            I love to approach a topic that I know nothing about; stare at it for awhile, and experiment 
            imperfectly as means of learning. Ultimately, this is toward my goal of creating products that 
            enable Time Well Spent.
          </p>

          <p className="mb-5 text-lg">
            I like to work in closely-knit interdisciplinary teams, where I get to wear many hats and learn from people 
            around me. I try to I structure my work-life in a way that focus on cognitively-demanding deep work. 
          </p>
          
          <div className="mb-5 text-lg">
            <p>
              To learn more about my work, skillsets and professional interests, you can visit:
            </p>
            <ul className="py-1 text-lg text-left list-disc list-inside">
              <li className="py-1">My <Link href="https://changelog.nickmayernik.com/"><a className="font-semibold underline">Changelog</a></Link>, which I update with the work {"I'm"} focused on currently</li>
              <li className="py-1">My <Link href="/projects/"><a className="font-semibold underline">Projects</a></Link> page, where I publish case studies about my work</li>
              <li className="py-1">My <Link href="/uses/"><a className="font-semibold underline">Uses</a></Link> page, where I upack the tools, methologies, and languages that I use regularly</li>
            </ul>
            <p>
              Alternatively, you can <Link href="/"><a className="font-semibold underline">download a copy of my resume</a></Link> or view it on <Link href="https://read.cv/nickmayernik"><a className="font-semibold underline">read.cv</a></Link>.
            </p>
          </div>

          <p className="mb-5 text-lg">
            Given my proximity to gyms over the years, {"I've"} become a big fan of weightlifting and, 
            more recently, joined the world of <Link href="https://members.onepeloton.com/members/YeahBunsNThighs/overview"><a className="font-semibold underline">Peloton</a></Link>. I love to kayak and paddle board for the handful of 
            months that Pennsylvania weather allows. Last but not least, {"I'm"} a huge soccer fan, happy to be 
            heartbroken by <Link href="https://www.tottenhamhotspur.com"><a className="font-semibold underline">Tottenham Hotspur</a></Link> every year. 
          </p>
      
        </section>

        
      </div>
    </div>
  );
}
