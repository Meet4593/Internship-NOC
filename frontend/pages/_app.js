import '../src/index.css'
import { AuthProvider } from '../src/components/AuthProvider'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
