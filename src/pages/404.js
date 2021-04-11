
//Pour les pages inexistantes que l'utilisateur tentera de loader

import React from 'react'
import Layout from '../components/Layout'

export default function Notfound() {// la composante react a pour nom : Notfound 
    return (
        <Layout>
            <div>
                <h2>404</h2>
                <p>Sorry, that pages doesn't exist </p>
            </div>
        </Layout>
    )
}
