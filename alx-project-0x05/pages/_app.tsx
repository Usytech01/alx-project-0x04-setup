import React from "react";
import "@/components/layout";
import type {AppProps} from "next/app";
import {CountProvider} from "@/context/CountContext";

export default function App ({Component, pageProps};){
  return(
    <CountProvider><Layout><Component{...pageProps}/></Layout></CountProvider>
  )
}
