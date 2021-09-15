import Image from "next/image";
import Link from "next/link";
import Hero from "@components/home/hero";
import Currently from "@components/home/currently";

export default function IndexPage() {
  return (
    <div className="max-w-4xl py-12 mx-auto">
        <Hero />
        <div className="grid md:grid-cols-2">
        <Currently />
        </div>
       
    </div>
  );
}
