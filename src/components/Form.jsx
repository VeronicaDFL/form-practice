import { useState } from "react"
export default function Form () {
    const [firstName, SetFirstName] = useState();
    const [lastName, nsetLastName]= useState();
    const [color,setColor]= useState("#00ff00");
    const [dateLocal,setDateLocal]= useState();
    const [comment,setComment]= useState();
    

    const handleUpdate = (e) => {
        const newValue = e.target.value
        console.log(newValue)
    }

    return(
<form>
    <label>  First Name:
    <input type = "text" 
    value = {firstName}
    placeHolder = "First Name"
    onChange = {handleUpdate}></input>
    </label>

    <br />

    <label>Last name:
        <input type = "text"
        value ={lastName}
        placeholder="Last name"
        onChange={(handleUpdate)}>
        </input>
    </label>

    <br />

    <label>Color:
        <input type = "color"
        value ={color}
        onChange= {handleUpdate}
        ></input>
        </label>

        <br />

        <label>Date:
            <input type="datetime-local"
            value= {dateLocal}
            onChange={handleUpdate}
        ></input>   
        </label>

        <br />
        <label>Message:
            <textarea 
            col= "5" 
            row ="25"
            onChange={handleUpdate}>{comment}</textarea>
        </label>
    </form>
        )
    }
    




    
        
        





