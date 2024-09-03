import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MaterialSymbol } from 'react-material-symbols';
import root from 'react-shadow';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>    
      This Icon is INSIDE the Shadow Dom:
      <root.div>
        <MaterialSymbol className="material-symbols-outlined" icon="folder" size={124} grade={-25} />
        <link type="text/css" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
      </root.div>
    </div>
  )
}