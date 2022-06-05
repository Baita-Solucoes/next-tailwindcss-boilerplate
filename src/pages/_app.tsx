import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

import GlobalStyles from '@components/GlobalStyles'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
