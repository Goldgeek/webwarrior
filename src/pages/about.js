//Page : about
import React from 'react'
import Layout from '../components/Layout'

export default function about() { // la composante react porte le nom de la page ici : about
    return (
        <Layout>
            <div>
                <h1>DELTA ONE </h1>
            
                <p> Delta One est un terme en finance de marché pour désigner une activité concernant les produits dérivés dont le prix varie à peu près à la même amplitude que son sous-jacent, avec ou sans effet de levier.
                Le Delta désigne la sensibilité du produit dérivé, c'est-à-dire sa variation de prix par rapport à celui de son sous-jacent.
                Si le Delta égale 1, alors les prix du produit dérivé et de son sous-jacent varient dans le même sens avec la même amplitude.
                Le delta s'utilise d'abord pour les options, mais la spécificité Delta One a été utilisée pour les contrats à terme dont la variation n'est pas si différente de leur sous-jacent. Ces contrats à terme, aussi dénommés « futures », évoluent principalement en fonction du prix sous-jacent et des taux d'intérêt. Si le CAC 40 progresse de 1 %, le contrat future CAC 40 avancera environ entre 0,9 % et 1,1 %. Leur delta approchera alors de 1 d'où « Delta One ».
                </p>

                <h2>Utilité</h2>
                <li>Delta One est un terme en finance de marché pour désigner une activité concernant les produits dérivés dont le prix varie à peu près à la même amplitude que son sous-jacent, avec ou sans effet de levier.
                Le Delta désigne la sensibilité du produit dérivé, c'est-à-dire sa variation de prix par rapport à celui de son sous-jacent.
                Si le Delta égale 1, alors les prix du produit dérivé et de son sous-jacent varient dans le même sens avec la même amplitude.
                Le delta s'utilise d'abord pour les options, mais la spécificité Delta One a été utilisée pour les contrats à terme dont la variation n'est pas si différente de leur sous-jacent. Ces contrats à terme, aussi dénommés « futures », évoluent principalement en fonction du prix sous-jacent et des taux d'intérêt. Si le CAC 40 progresse de 1 %, le contrat future CAC 40 avancera environ entre 0,9 % et 1,1 %. Leur delta approchera alors de 1 d'où « Delta One ».
                </li>
            </div>
        </Layout>
    )
}
