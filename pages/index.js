import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="max-w-3xl py-12 mx-auto">
      <section>
        <h1 className="pb-3 text-3xl font-bold text-center">Hi, {"I'm"} Nick, a full-stack UX Designer.</h1>
        <p className="pb-3 text-lg text-center font-regular">
          I work across research, design, and development to create humane products. {" "} 
          <Link href="/about"><a className="font-semibold">
            More →
            </a></Link></p>
      </section>

      <section>
      
      </section>
       
    </div>
  );
}
