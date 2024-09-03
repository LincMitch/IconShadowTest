import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/rounded'; // Place in your root app file. There are also `sharp` and `outlined` variants.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MaterialSymbol icon="folder" size={24} fill grade={-25} color='lime' />
  )
}