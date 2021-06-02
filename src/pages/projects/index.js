//le fichier index.js est toujours la base d'un fichier ou d'un sous dossier
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { graphql } from 'gatsby'

export default function Projects({data}) { // Ici la composante react porte le nom du dossier
    console.log(data)
    const projects
    
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2> Portfolio </h2>
                <h3> Projects & websites created </h3>
            </div>
        </Layout>
    )
}

//export query 
export const query = graphql`
query ProjectsPage {
    allMarkdownRemark {
        nodes {
            frontmatter {
                slug
                stack
                title
            }
            id
        }
    }
}`
