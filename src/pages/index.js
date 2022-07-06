import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Layout/layout'
import styles from '../styles/Home.module.css'
import Hero from '../components/main-components/home/home'
import About from '../components/main-components/about/about'
import Menu from '../components/main-components/menu/menu'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Menu />
      <About />
    </Layout>
  )
}
