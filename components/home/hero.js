import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className="">
			<div className="grid items-center justify-center grid-cols-1 px-6 py-8 bg-white shadow md:px-8 md:grid-cols-12 md:gap-4 rounded-3xl">
				<div className="col-span-8">
				<h1 className="text-4xl font-semibold text-center md:text-left">{"I'm"} Nick, a full-stack UX Designer.</h1>
				<p className="pt-2 text-lg leading-snug text-center md:text-left text-opacity-80">
					I work across research, design, and development to create humane products. {""}
					<Link href="/about/">
						<a className="text-base font-semibold rounded-lg whitespace-nowrap hover:underline text-system-black dark:text-system-white">More →</a>
					</Link>
				</p>
				</div>
			</div>
		</section>
		
	);
}