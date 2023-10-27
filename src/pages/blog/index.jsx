import Hero from 'src/components/Hero/Hero'
import Container from 'src/components/Container/Container'
import Meta from 'src/components/Meta'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  )
}
