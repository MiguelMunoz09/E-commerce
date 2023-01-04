import  Header  from "../components/Header"
import Script from "next/script"
import AppContext from '../context/AppContext'
import useInitialState from "../hooks/useInitialState"
import type { AppProps } from 'next/app'
import Login from "./Login";

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState ();
  return (
    
    <AppContext.Provider value={initialState}>
      
     
      <Header/> 
      <Component {...pageProps} />
       
    </AppContext.Provider>
    
  )   
}

