import React , {ChangeEvent, FormEvent , useState} from 'react';
function AddressFrom(props:{handler:(address: string)=>void})
{
    const[values,setValues]= useState({
        address: '',
    });
 const handeSubmit = ( e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    props.handler(values.address)
 };

 const handeAddressInputChange = ( event: ChangeEvent<HTMLInputElement>)=>
 {
    event.persist();
    setValues((values)=>({
        ...values,
        address: event.target.value
    }))
 }
    return(
    <div> 
         <form onSubmit ={handeSubmit}>
           <input
          name= 'FirstName' 
          value={values.address}
          onChange={handeAddressInputChange} 
           />
          <button type ='submit'>
           Check Sol balance
          </button>
        </form>
    </div>
    )
}

export default AddressFrom
//'./api/AddressFrom'