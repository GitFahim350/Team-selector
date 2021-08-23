import React from 'react';
import { useState } from 'react';
import './Total_object_info.css'

const Total_object_info = (props) => {
    

    return (
        
         <div className="text_aligning">
             <h4>{props.p.first_name}</h4>
             <h6>{props.p.salary}</h6>
             
         </div>
    );
};

export default Total_object_info;