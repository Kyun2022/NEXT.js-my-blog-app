import { getAllPosts } from 'src/lib/Api'
import Hero from 'src/components/Hero/Hero'
import Container from 'src/components/Container/Container'
import Meta from 'src/components/Meta'
import Posts from 'src/components/Posts/Posts'
import { getPlaiceholder } from 'plaiceholder'

//ローカルの代替アイキャッチ画像
import { eyeCatchLocal } from 'src/lib/Constants'

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />

      <Hero title="Blog" subtitle="Recent Posts" />

      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

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
