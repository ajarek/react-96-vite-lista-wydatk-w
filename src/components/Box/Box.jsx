
import './Box.css'
import {Form} from '../Form/Form'
import Search from '../Search/Search'
import { useState } from 'react'
const Box = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  console.log(selectedValue);
  return (
    <div className='box'>
      <Search value={selectedValue} handleChange={(e)=>setSelectedValue(e.target.value)}/>
      <Form/>
    </div>
  )
}

export default Box