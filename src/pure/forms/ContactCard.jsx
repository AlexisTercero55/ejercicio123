import React from 'react';
import PropTypes from 'prop-types';
import { CONTACT } from '../../models/CONTACT.class';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,
         faEllipsisVertical ,
         faHeart
       } from "@fortawesome/free-solid-svg-icons";

import './card.css';
import userImg from './user.png'

/**
 * Component B
 */
const ContactCard = ({contact}) => 
{
  // state variable management: is connected?
  const [status, setStatus] = React.useState(contact.isConected);

  const toggleConnection = () =>
  {
    setStatus(!status);
    contact.isConected = status;
  }

  // const userImg = require('./user.png').default;
  
  return(
    <div className="card">

      <ul className='icons'> 
        <li><FontAwesomeIcon icon={faArrowLeft} className="i-l w"/></li>
        <li><FontAwesomeIcon icon={faEllipsisVertical} className="i-l w"/></li>
        <li><FontAwesomeIcon icon={faHeart} className="i-r w"/></li>
      </ul>

      <img className="userphoto" src={userImg} alt=""/>

      {/* <h2>Contact</h2> */}
      <h1 className='username'>{contact.name +' '+ contact.lastName}</h1>
      <p className='mail'>{contact.email}</p>

      <div className='state'>
        <p>{contact.isConected?'CONECTED':'DISCONECTED'}</p>
      </div>

      <button className="B1 color-c" onClick={toggleConnection}> 
        {contact.isConected?'disconect':'conect'} 
      </button>
    </div>
  );
};

ContactCard.propTypes = 
{
    contact: PropTypes.instanceOf(CONTACT),
};

export default ContactCard;