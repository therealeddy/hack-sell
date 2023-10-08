import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'styled-components'

import { Container } from '~/styles/pages/app'
import StyledComponentsRegistry from '~/styles/registry'

import { defaultTheme } from '~/styles/theme/default'
import { GlobalStyle } from '~/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Component {...pageProps} />
        </Container>
        <Analytics />
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
