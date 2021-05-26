
//PAGE DE BASE
// A LOADER EN PREMIER
// Ici Navabr, sert de liens vers d'autres pages à partir de la page d'accueil. C'est une composante react importée
// all static data like img and other static assets should be put in static folder to let them available on internet  

import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css' 
import {graphql, Link } from "gatsby"


export default function Home({data}) { // Home pour accueil du site
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UK designer & web developer based in Manchester</p>
          <Link className={styles.btn} to="/projects">Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="Banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
   
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

