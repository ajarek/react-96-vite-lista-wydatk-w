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
    const row= [...document.querySelectorAll('.sum')]
    const arraySum=row.map(rw=>rw.textContent)
    const totalValueProducts =arraySum.reduce(
      (acc, item) => acc + (+item),0)
     
    setAllSummary(totalValueProducts.toFixed(2))
  })

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
        nameCategory={selectedValue}
      />
    </div>
  )
}

export default Box
