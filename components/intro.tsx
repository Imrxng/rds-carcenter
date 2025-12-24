import React from 'react'

const Intro = () => {
    return (
        <React.Fragment>
            <div className='main'>
                <h1 id='title-intro'>Welkom bij RDS Carcenter BV, uw betrouwbare garage in Antwerpen</h1>
                <p>
                    Zoekt u een ervaren garage in Antwerpen voor een groot of klein nazicht, of voor een reparatie?<br />
                    Dan bent u bij ons aan het juiste adres. Onze ervaren mechanieker, met meer dan 35 jaar ervaring, staat klaar om uw voertuig professioneel te verzorgen.
                </p>
                <br />
                <br />
                <p>
                    Waarom kiezen voor RDS Carcenterer BV?
                </p>
                <ul>
                    <li>Wij werken altijd transparant, zonder verborgen kosten.</li>
                    <li>Wij gebruiken enkel OEM- of gecertificeerde onderdelen.</li>
                    <li>Wij onderhouden alle merken personenvoertuigen.</li>
                </ul>
                <p className='bold paddingTop'>Voor meer informatie of een afspraak kunt u ons eenvoudig een bericht sturen. Wij helpen u graag verder!</p>
            </div>
        </React.Fragment>
    )
}

export default Intro