import { ToastContainer } from 'react-toastify'
import '@/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import '@rainbow-me/rainbowkit/styles.css'
import { useEffect, useState } from 'react'
import { Providers } from '@/services/provider'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild || typeof window === 'undefined') {
    return null
  } else {
    return (
      <Providers pageProps={pageProps}>
        <Provider store={store}>
          <div className="min-h-screen relative">
            {router.pathname !== '/whoweare' && router.pathname !== '/techused' && <Header />}{' '}
            <Component {...pageProps} />
            {router.pathname !== '/whoweare' && router.pathname !== '/techused' && <Footer />}{' '}
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </Provider>
      </Providers>
    )
  }
}
