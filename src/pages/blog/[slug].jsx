import { getPostBySlug, getAllSlugs } from 'src/lib/Api'
import Container from 'src/components/Container/Container'
import PostHeader from 'src/components/PostHeader/PostHeader'
import PostBody from 'src/components/PostBody/PostBody'
import {
  TwoColumn,
  TwoColumnSidebar,
  TwoColumnMain,
} from 'src/components/TwoColumn/TwoColumn'
import ConvertBody from 'src/components/ConvertBody'
import PostCategories from 'src/components/PostCategories/PostCategories'
import Pagination from 'src/components/Pagination/Pagination'
import Meta from 'src/components/Meta'
import Image from 'next/legacy/image'
import { getPlaiceholder } from 'plaiceholder'

//ローカルの代替アイキャッチ画像
import { eyeCatchLocal } from 'src/lib/Constants'
import { extractText } from 'src/lib/ExtractText'
import { prevNextPost } from 'src/lib/PrevNextPost'

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)
  if (!post) {
    return { notFound: true }
  } else {
    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyeCatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    }
  }
}
