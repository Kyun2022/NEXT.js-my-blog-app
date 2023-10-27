import 'src/styles/globals.css'
import Layout from 'src/components/Layout/Layout'
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
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
