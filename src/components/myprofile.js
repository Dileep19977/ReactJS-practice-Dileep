import React from "react"
import "../components/myprofile.css"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Myprofile = () =>
{
    const pr = "Practice - React App - Dileep"
    return (
        <div id="idprofile" class="alert alert-primary" role="alert">
          <b>{pr.toUpperCase()}</b>
        </div>
    )
}

export default Myprofile



