import React from "react";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
const Linkedin = () =>
{
    const [newt,newt1] = useState()
    const condcheck =()=>

    {
        newt = true
        return newt
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
      }, [newt]);


    return(
      
       
        <div>
            <button type="button" class="btn btn-primary" onClick={condcheck}>My LinkedIn</button>

            <div class="alert alert-success" role="alert">
              Ri-directed successfully..!!
            </div>
        </div>
    )
}

export default Linkedin