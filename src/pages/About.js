
import '../css/pages/about.css'

const About = () =>{
    return(
        <div id='about' className='about'>
            <div className='about-style'>
                <div className='red'></div>
                <div className='blue'></div>
                <img src='/images/image1.png' alt='esa electronique icon' />                
            </div>

            <div className='about-content'>
                <h1>Qui sommes-nous</h1>
                <p>ESA Electronique est l’un des leaders sur le marché des produits électroménagers en Mauritanie. </p>
                <p>Spécialisé dans la vente du matériels électroniques : </p>
                <p>- Electroménagers (climatisation, réfrigérateur, cuisinière...) </p>
                <p>- Système surveillance (camera, système alarme ...) </p>
                <p>- Matériels Electriques (câblage et accessoires...) </p>
                <p>- Energie solaires (panneaux solaires, régulateurs, convertisseur...) </p>
                <p> ESA Electronique est le choix idéal pour les consommateurs à la recherche d'équipements ménagers de qualité supérieure, mais abordables. 
                    Avec une large sélection de produits et des prix compétitifs. 
                </p>
                <p>Esa électronique est le premier exportateur qui couvre tout le marché local. </p>
                <p>Une disponibilité immédiate du stock et une livraison dans les plus brefs délais.</p>
            </div>
        </div>
    )
}

export default About;