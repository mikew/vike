import type { Config } from 'vike/types'

// https://vike.dev/config
export default {
  passToClient: ['pageProps', 'routeParams'],
  // https://vike.dev/meta
  meta: {
    // Create new config 'Layout'
    Layout: {
      env: { server: true, client: true }
    }
  },
  clientRouting: true
} satisfies Config
