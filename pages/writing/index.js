import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";

export default function WritingPage({ posts }) {
    return(
        <div className="max-w-3xl py-12 mx-auto">
            <h1 className="pb-3 text-3xl font-bold">Writing</h1>

				<ul className="pt-5">
					{posts.map((post) => (
						<li key={post.sys.id} className="py-5">
							<Link href={"/writing/" + post.fields.slug} passHref>
                                <div>
                                    <h1 className="text-2xl font-semibold leading-tight">
                                        {post.fields.title}
                                    </h1>
                                    
                                    <p className="py-1 text-lg font-regular">
                                        {post.fields.description}
                                    </p>

                                    <p id="date" className="font-mono text-sm">
                                        {post.fields.publishDate}
                                    </p>
                                </div>
			                </Link>
						</li>
					))}
				</ul>


        </div>
    )
};


export async function getStaticProps() {
	const client = createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken: process.env.CONTENTFUL_ACCESS_KEY });

	const res = await client.getEntries({ content_type: "blogPost" });

	return {
		props: {
			posts: res.items,
		},
	};
}