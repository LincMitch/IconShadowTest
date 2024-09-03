import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded'; // Place in your root app file. There are also `sharp` and `outlined` variants.
import root from 'react-shadow';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>    
      <p style={{color: "red"}}>This Icon is OUTSIDE the Shadow Dom:</p>
      <MaterialSymbol icon="folder" size={24} fill grade={-25} color='red' />
      <root.div className="quote">
        <p style={{color: "lime"}}>This Icon is INSIDE the Shadow Dom, but only its name appears:</p>
        <MaterialSymbol icon="folder" size={24} fill grade={-25} color='lime' />
      </root.div>
    </div>
  )
}