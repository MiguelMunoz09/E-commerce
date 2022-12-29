import  Header  from "../components/Header"

import AppContext from '../context/AppContext'
import useInitialState from "../hooks/useInitialState"
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState ();
  return (
    <AppContext.Provider value={initialState}>
      <Header/> 
      <Component {...pageProps} />
    </AppContext.Provider>
  )   
}

