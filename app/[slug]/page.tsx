import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getPages } from 'app/pages/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getPages()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getPages().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Page({ params }) {
  let page = getPages().find((post) => post.slug === params.slug)

  if (!page) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Page',
            headline: page.metadata.title,
            datePublished: page.metadata.publishedAt,
            dateModified: page.metadata.publishedAt,
            description: page.metadata.summary,
            image: page.metadata.image
              ? `${baseUrl}${page.metadata.image}`
              : `/og?title=${encodeURIComponent(page.metadata.title)}`,
            url: `${baseUrl}/${page.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {page.metadata.title}
      </h1>
      <article className="prose">
        <CustomMDX source={page.content}/>
      </article>
    </section>
  )
}
