import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Slug({ post }) {
    const {heroImage, title, content, description, publishDate} = post.fields

    return  (
        <article className="">
            <div className="max-w-3xl px-6 py-12 mx-auto prose">
                <section id="intro" className="pb-10">
                    <h1 className="pb-1 text-4xl font-bold leading-tight">{title}</h1>
                    <p className="text-xl text-opacity-50 font-regular">{publishDate}</p>
                </section>

                <section id="content" className="">
                    <div className="text-lg">
                    <div className="text-lg">{documentToReactComponents(content)}</div>
                    </div>
                </section>
            </div>
        </article>
      )
};

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  
  export const getStaticPaths = async () => {
    const res = await client.getEntries({
      content_type: 'blogPost'
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
        content_type: 'blogPost',
        'fields.slug': params.slug
    })
  
    return {
      props: { post: items[0] }
    }
  }