
import './Box.css'
import {Form} from '../Form/Form'
import Search from '../Search/Search'
import { useState } from 'react'
const Box = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  console.log(selectedValue);
  const handleForm=(data)=>{
    console.log(data);
  }
  return (
    <div className='box'>
      <Search value={selectedValue} handleChange={(e)=>setSelectedValue(e.target.value)}/>
      <Form onSubmit={handleForm}/>
    </div>
  )
}

export default Box