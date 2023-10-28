import { getAllCategories, getAllPostsByCategory } from 'src/lib/Api'
import Meta from 'src/components/Meta'
import Container from 'src/components/Container/Container'
import PostHeader from 'src/components/PostHeader/PostHeader'
import { getPlaiceholder } from 'plaiceholder'

import Posts from 'src/components/Posts/Posts'

//ローカルの代替アイキャッチ画像
import { eyeCatchLocal } from 'src/lib/Constants'

export default function category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyeCatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  }
}
