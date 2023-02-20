import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway } from "@next/font/google"
import { RecoilRoot } from 'recoil'

const raleway = Raleway(
  {
    variable: '--font-raleway',
    subsets: ['latin']
  }
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <RecoilRoot>

      <Component {...pageProps} />
      </RecoilRoot>

    </div>
  )
}
