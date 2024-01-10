

import '../css/components/footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <div className='logo'> <img src='/logo/logo.png' alt='logo' /> </div>
            <div className='footer-contact'>
                <div className='child'>
                    <img src='/icons/chat.png' alt='' />
                    <div>
                        <p>+222 44999979</p>
                        <p>+222 42787474</p>
                    </div>
                </div>

                <div className='child'>
                    <img src='/icons/local.png' alt='' />
                    <div>
                        <p>Route de l’espoir M133</p>
                        <p>Nouakchott, Mauritanie</p>
                    </div>
                </div>

                <div className='child'>
                    <img src='/icons/mail.png' alt='' />
                    <div>
                        <p>Izakws@gmail.com</p>
                    </div>
                </div>
                <div className='social-media'>
                    <div className='child'>
                        <a href='https://www.facebook.com/esaelectronique' target='_blank' rel='noreferrer'><img src='/icons/facebook.png' alt='' /></a>
                    </div>

                    <div className='child'>
                        <a href='https://www.instagram.com/esaelectronique/' target='_blank' rel='noreferrer'><img src='/icons/instagram.png' alt='' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;