import {
  saveStorage,
  fetchStorage,
  saveStorageSingle,
} from '../../helper/localStorage'
import './Box.css'
import { Form } from '../Form/Form'
import Search from '../Search/Search'
import DataList from '../DataList/DataList'
import { useState, useEffect } from 'react'
const Box = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const [newList, setNewList] = useState([])

  const handleForm = (data) => {
    // Dodajemy nowe dane do localStorage
    const updatedData = [...newList, { ...data }]
    saveStorageSingle(updatedData, 'dataSet')
    // Aktualizujemy stan 'data' w komponencie, co spowoduje ponowne renderowanie
    setNewList(updatedData)
  }

  useEffect(() => {
    // Odczytujemy dane z localStorage i aktualizujemy stan 'data'
    const storedData = fetchStorage('dataSet') || []
    setNewList(storedData)
  }, [])

  const handleDelete = (id) => {
    const filterList = newList?.filter((nw) => nw.id !== id)
    console.log(filterList)
    setNewList((newList) => (newList = filterList))
    saveStorageSingle(filterList, 'dataSet')
  }

  return (
    <div className='box'>
      <Search
        value={selectedValue}
        handleChange={(e) => setSelectedValue(e.target.value)}
      />
      <Form onSubmit={handleForm} />
      <DataList
        list={newList}
        deleteItem={handleDelete}
      />
    </div>
  )
}

export default Box
