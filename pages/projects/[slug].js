import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'



export default function Slug({ caseStudy }) {
    const {title, cover, description, client, date, problem, role, process, challenges, outcomes, learned} = caseStudy.fields

    return(
    <section className="max-w-3xl px-6 py-12 mx-auto">
      <div className="project">
        <a href="/projects/" className="">Back to Projects</a>
        <h1 className="pt-5 text-4xl font-bold leading-tight ">{title}</h1>
        <p className="py-2 text-xl">{description}</p>

        <p className="text-lg font-semibold">Client: {client}</p>
        <p className="text-lg font-semibold">Shipped: {date}</p>

        <article className="py-8">
        <div className="py-6">
            <h2 className="pb-2 text-2xl font-semibold">The Problem</h2>
            <p className="text-lg">{documentToReactComponents(problem)}</p>
        </div>

        
        <div className="py-4">
            <h2 className="pb-2 text-2xl font-semibold">My Role</h2>
            <p className="text-lg">{documentToReactComponents(role)}</p>
        </div>

        <div className="py-4">
        <h2 className="pb-2 text-2xl font-semibold">Process</h2>
        <p className="text-lg">{documentToReactComponents(process)}</p>
        </div>

        <div className="py-4">
        <h2 className="pb-2 text-2xl font-semibold">Challenges</h2>
        <p className="text-lg">{documentToReactComponents(challenges)}</p>
        </div>

        <div className="py-4">
        <h2 className="pb-2 text-2xl font-semibold">Outcomes</h2>
        <p className="text-lg">  {documentToReactComponents(outcomes)}</p>
        </div>
        
        <div className="py-4">
        <h2 className="pb-2 text-2xl font-semibold">Takeaways</h2>
        <p className="text-lg"> {documentToReactComponents(learned)} </p>
        </div>
        </article>
        </div>
    </section>
)};

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  
  export const getStaticPaths = async () => {
    const res = await client.getEntries({
      content_type: 'caseStudy'
    })
  
    const paths = res.items.map(item => {
      return {
        params: { slug: item.fields.slug }
      }
    })
  
    return {
      paths,
      fallback: true
    }
  }
  
  export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'caseStudy',
        'fields.slug': params.slug
    })
  
    return {
      props: { caseStudy: items[0] }
    }
  }
