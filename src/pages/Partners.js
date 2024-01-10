
import Card from '../components/Card'
import '../css/pages/partners.css'

const partners = ['/partenaires/dahua.png','/partenaires/Hisense.png','/partenaires/jarrett.png']
const links = ['https://www.dahuasecurity.com','https://hisenseme.com','http://www.jarrett.cc']

const Partners = () =>{
    return(
        <div id='partners' className='partners'>
            <h1>Nos Partenaires</h1>
            <div className='red-slash'></div>

            <div className='main'>
                {partners.map((item, index) => (
                    <Card key={index} image={item} link={links[index]} />
                ))}
            </div>
        </div>
    )
}

export default Partners;