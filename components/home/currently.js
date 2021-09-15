import Link from "next/link";

export default function Currently() {
   return( <div className="relative px-6 py-6 mt-5 bg-white shadow sm:mx-0 rounded-3xl">
        <h1 className="text-xl font-semibold">Currently</h1>
        <ul className="py-2">
            <li className="py-1 text-lg leading-snug">
                Leading Design & UX at{" "}
                <Link href="http://www.pyramid.fitness">
                    <a className="font-semibold">
                        PYRAMID
                    </a>
                </Link>
            </li>

            <li className="py-1 text-lg leading-snug">
                Celebrating graduating from{" "}
                <Link href="http://www.lafayette.edu">
                    <a className="font-semibold">
                        Lafayette College
                    </a>
                </Link>
            </li>

            <li className="py-1 text-lg leading-snug">
                Watching every{" "}
                <Link href="">
                    <a className="font-semibold">
                        Tottenham Hotspur
                    </a>
                </Link>
                {" "}match
            </li>
        </ul>
        
    </div>);
};
