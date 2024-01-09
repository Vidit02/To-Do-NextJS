import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from './store/store'
import persistor from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Header />
          <div className='container mx-auto min-h-screen'>
            <Component {...pageProps} />
          </div>
          <Footer />
        {/* </PersistGate> */}
      </Provider>
    </div>
  )
}
