import { getServerSideSitemap } from 'next-sitemap'
import { getAllSlugs, getAllCategories } from 'src/lib/Api'
import { siteMeta } from 'src/lib/Constants'

export default function Sitemap() {}

export async function getServerSideProps(context) {
  const posts = await getAllSlugs()
  const postFields = posts.map((post) => {
    return {
      loc: `${siteMeta.siteUrl}/${post.slug}`,
    }
  })

  const cats = await getAllCategories()
  const catFields = cats.map((cat) => {
    return {
      loc: `${siteMeta.siteUrl}/blog/category/${cat.slug}`,
      lastmod: post.revisedAt,
      changefreq: 'daily',
    }
  })

  const allFields = [...postFields, ...catFields]

  return await getServerSideSitemap(context, allFields)
}
