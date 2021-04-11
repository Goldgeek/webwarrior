
//PAGE DE BASE
// A LOADER EN PREMIER
// Ici Navabr, sert de liens vers d'autres pages à partir de la page d'accueil. C'est une composante react importée

import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css' 
import { Link } from "gatsby"

export default function Home() { // Home pour accueil du site
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Accueil</h2>
          <Link className={styles.btn} to="/projects">Portfolio Projects</Link>
        </div>
        
      </section>
    </Layout>
  )
   
}
