import { getAllPosts } from 'src/lib/Api'
import Container from 'src/components/Container/Container'
import Hero from 'src/components/Hero/Hero'
import Meta from 'src/components/Meta'
import Posts from 'src/components/Posts/Posts'
import Pagination from 'src/components/Pagination/Pagination'
import { getPlaiceholder } from 'plaiceholder'

//ローカルの代替アイキャッチ画像
import { eyeCatchLocal } from 'src/lib/Constants'

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}

export async function getStaticProps() {
  const url =
    'https://images.microcms-assets.io/assets/16c8c0b0b6b644f68bd9e168eb420c90/e0e3e9c3df4443db8b3383c4c7a946eb/about.jpg'
  console.log(await getPlaiceholder(url))

  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyeCatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts,
    },
  }
}
