import React from 'react';
import { Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Player.css'
import  './images/neymar.jpeg'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Players (props) {
    
    
    return (
        
        <>
            <Col md="6" className="column">
            <div className="Player_info">
                <div id="img_div">
                    <img src={props.p.img} alt="" />
                </div>
                <div id="player_info">
                    <p className="h2">{props.p.first_name}</p>
                    <p className="h4">{props.p.last_name}</p>
                    <p className="h3" id="Sal">{props.p.salary}</p>
                    <button onClick={()=>props.btn_handler(props.p)}><FontAwesomeIcon icon={faShoppingCart} />Buy</button>
                </div>
            </div>
            </Col>
            
        </>
            

        
        
    );
};

export default Players;