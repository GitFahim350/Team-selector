import React from 'react';
import Total_object_info from '../Total_object_info/Total_object_info';
import './info.css'

const Info = (props) => {
    const objects=props.carts;
    console.log("props total",props.total);
    //console.log("Objects are>>",objects);
    
    let finalsalary=0;
    
    return (
        <div>
            {
                objects.map(object=><Total_object_info p={object} key={object.key}></Total_object_info>)
                
            }
            <hr />
            
            
            <div className="Finalsalary">
                    <p className="h7">Total Salary</p>
                    <p className="h7 strong">${props.total}</p>
            </div>

        </div>
    );
};

export default Info;