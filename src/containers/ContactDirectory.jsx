import React from 'react'
import { CONTACT } from '../models/CONTACT.class';
import ContactCard from '../pure/forms/ContactCard';

/**component A */
const ContactDirectory = () => 
{
    const contact = new CONTACT();

    return (
        <div className='check'>
            <h1>Directory</h1>
            <ContactCard    
                contact={contact}>
            </ContactCard>
        </div>
    )
}


export default ContactDirectory