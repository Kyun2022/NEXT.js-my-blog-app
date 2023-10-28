import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'src/styles/globals.css'
import Layout from 'src/components/Layout/Layout'
import Script from 'next/script'
import * as gtag from 'src/lib/gtag'
import { Library, library } from '@fortawesome/fontawesome-svg-core'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

library.add(faHouseChimney, faSun, faTwitter, faFacebookF)
// FontAwesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Config, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag.js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
        `,
        }}
      />
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  )
}
