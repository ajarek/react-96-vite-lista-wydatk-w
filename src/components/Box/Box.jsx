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
  const [allSummary, setAllSummary] = useState(0)

  const handleForm = (data) => {
    // Dodajemy nowe dane do localStorage
    const updatedData = [...newList, { ...data }]
    saveStorageSingle(updatedData, 'dataSet')
    // Aktualizujemy stan 'data' w komponencie, co spowoduje ponowne renderowanie
    setNewList(updatedData)
  }
  useEffect(() => {
    // Odczytujemy dane z localStorage i obliczmy sumę wartości.
    const totalValueProducts = fetchStorage('dataSet').reduce(
      (acc, item) => acc + +item.price,
      0
    )
    setAllSummary(totalValueProducts.toFixed(2))
  }, [newList])

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
        summary={allSummary}
      />
    </div>
  )
}

export default Box
