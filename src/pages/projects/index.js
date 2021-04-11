//le fichier index.js est toujours la base d'un fichier ou d'un sous dossier
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects() { // Ici la composante react porte le nom du dossier
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2> Portfolio </h2>
                <h3> Projects & websites created </h3>
            </div>
        </Layout>
    )
}
