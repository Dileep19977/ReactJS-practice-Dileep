import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { CiCircleRemove } from "react-icons/ci";

const Mysearch = (props) => {

    const [searchval, newsearchval] = useState('') 
    const[addsearchval, newaddsearchval] = useState('')
    let [newarr, newarr1] = useState(props.newsearch)
    const[seterrorcond, newseterrorcond]=useState(false)
    const[seterrorcond1, newseterrorcond1]=useState(false)
 
    console.log(seterrorcond)
    const searchele = (event)=>{
        console.log("button clicked")
          newsearchval(event.target.value)
    }
    const addnewlist =(event)=>
    {
          console.log("Working click search event")
          newaddsearchval(event.target.value)
         
    }

   const clickremove =(product)=>
   {
    console.log(product)
    newarr1(newarr.filter((produc) => produc
     !== product))
   }
    const addlistbutton = ()=>
    {
        if(addsearchval){
            var unique = [];
            ([...newarr, addsearchval]).forEach(element => {
                if (!unique.includes(element)){
                    unique.push(element);
                    console.log(seterrorcond)
                    newseterrorcond1(!seterrorcond1)
                    const timeout = setTimeout(() => {
                        newseterrorcond1(seterrorcond1)
                     }, 2000);
                }
                else{
                    console.log("Element already exists")
                    newseterrorcond1(seterrorcond1)
                    newseterrorcond(!seterrorcond)
                    console.log(seterrorcond)
                        const timeout = setTimeout(() => {
                            newseterrorcond(seterrorcond)
                         }, 3000);
                }
            });
            newaddsearchval("")
            return newarr1(unique);
        }
    }
//Search filters
    let newf = newarr.filter((product)=>{
        return (product.toLowerCase().includes(searchval.toLowerCase())) 
     })
  
    return(
        <div>
        
  <form class="form-inline" style={{display:'flex',alignItems:'baseline',marginTop:'15px'}}>
    <input class="form-control mr-sm-2" type="text" onChange={searchele} value={searchval} placeholder="Search" />
  </form>
  <div style={{marginTop:'20px'}}>
    <h1 class="alert alert-primary">List of Items</h1>
    <ul class="list-group list-group-flush"> {
        newf.map((product) => {
            return <div>
            <li  class="list-group-item" key ={product} >         
                 <a href= {'//www.linkedin.com/in/dileep1997/'} target="_blank">  {product} </a>
                 <b style={{paddingLeft:'20px',fontSize:'23px'}} value={product} onClick={()=>clickremove(product)} > <CiCircleRemove/> </b>
                </li></div>
        })
    }
    
    {(newf =="")?<h1 class="alert alert-danger">Search Not Found.!!</h1>:<></>}
    </ul>
   
    {seterrorcond ?
    
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Element you are trying to add already exist.!</strong> 
                   
                  </div>: <div></div>}
                  
   {seterrorcond1 ?
    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Element Added to the List.!!</strong> 
                  </div>: <div></div>}
    </div>
 
 <div style={{display:'inline-block',marginBottom:'20px'}}>
<input id="Clrinput" class="form-control mr-sm-2" style={{marginTop:'50px'}} type="text" onChange={addnewlist} value={addsearchval} placeholder="Add" />

      </div> 
      
      <button class="btn btn-outline-success " style={{marginLeft:'10px'}} type="button" value={newaddsearchval} onClick={addlistbutton}>Add Item to the List</button>
       </div>
    )
}

export default Mysearch