import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken: process.env.CONTENTFUL_ACCESS_KEY });

	const res = await client.getEntries({ content_type: "caseStudy" });

	return {
		props: {
		    caseStudies: res.items,
		},
	};
}


export default function ProjectsPage({caseStudies}) {
    return(
        <div className="max-w-3xl py-12 mx-auto">
                <h1 className="pb-3 text-3xl font-bold">Projects</h1>

                <ul className="pt-5">
					{caseStudies.map((caseStudy) => (
						<li key={caseStudy.sys.id} className="py-5">
							<Link href={"/projects/" + caseStudy.fields.slug} passHref>
                                <div>
                                    <h1 className="text-2xl font-semibold leading-tight">
                                        {caseStudy.fields.title}
                                    </h1>

                                    <p id="date" className="pt-2 text-lg font-semibold">
                                        Organization: {caseStudy.fields.client}
                                    </p>
                                    
                                    <p className="pt-1 text-lg font-regular">
                                        {caseStudy.fields.description}
                                    </p>
                                </div>
			                </Link>
						</li>
					))}
				</ul>
        </div>
    )
};

