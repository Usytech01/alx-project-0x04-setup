import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css"
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";
import { Component } from "react";

export default function App({ Component, pageProps }:
  AppProps) {
    return(
      <CountProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountProvider>
    )
  }
