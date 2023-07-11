import {saveStorage, fetchStorage,  saveStorageSingle } from '../../helper/localStorage'
import './Box.css'
import {Form} from '../Form/Form'
import Search from '../Search/Search'
import DataList from '../DataList/DataList'
import { useState } from 'react'
const Box = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [newList,setNewList] = useState(fetchStorage('dataSet'))
  
  console.log(selectedValue);

  const handleForm=(data)=>{
    saveStorage(data,'dataSet');
  }

const handleDelete=(id)=>{
  const filterList=newList?.filter((nw)=>nw.id !== id)
  console.log(filterList);
  setNewList(newList=>newList=filterList)
  saveStorageSingle(filterList,'dataSet')
}

  return (
    <div className='box'>
      <Search value={selectedValue} handleChange={(e)=>setSelectedValue(e.target.value)}/>
      <Form onSubmit={handleForm}/>
      <DataList list={newList} deleteItem={handleDelete}/>
    </div>
  )
}

export default Box