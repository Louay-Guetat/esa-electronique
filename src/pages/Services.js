
import Card from '../components/Card'

import '../css/pages/services.css'

const services = [
    {image: '/services/electromenager.jpeg', text: 'Electroménagers'},
    {image: '/services/surveillance.jpeg', text: 'Système surveillance'},
    {image: '/services/Energie.jpg', text: 'Energie solaires'},
    {image: '/services/electrique.jpg', text: 'Matériels Electriques'}
]

const Services = () =>{
    return(
        <div id='services' className='services'>
            <h1>Nos Services</h1>
            <div className='red-slash'></div>

            <div className='main'>
                {services.map((item, index) => (
                    <Card key={index} image={item.image} text={item.text} />
                ))}
            </div>
        </div>
    )
}

export default Services;