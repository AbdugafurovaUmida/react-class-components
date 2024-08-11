// import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary'
// import { Loader } from '@components/Loader/Loader'
// import { MainLayout } from '@components/MainLayout/MainLayout'
// import { ThemeProvider } from '@contexts/themeProvider'
// import '@styles/index.scss'
// import styles from '@styles/loader.module.scss'
import type { AppProps } from 'next/app'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
// import { Provider } from 'react-redux'
import React from 'react'
// import { store } from '../store/store'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
