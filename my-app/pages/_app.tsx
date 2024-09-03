import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded'; // Place in your root app file. There are also `sharp` and `outlined` variants.
import root from 'react-shadow';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>    
      <q style={{color: "red"}}>This Icon is OUTSIDE the Shadow Dom</q>
      <MaterialSymbol icon="folder" size={24} fill grade={-25} color='blue' />
      <root.div className="quote">
        <q style={{color: "yellow"}}>This Icon is INSDOE the Shadow Dom, but only its name appears</q>
        <MaterialSymbol icon="folder" size={24} fill grade={-25} color='lime' />
      </root.div>
    </div>
  )
}