import { useEffect } from 'react'
import './DataList.css'

const DataList = ({list, deleteItem, summary,nameCategory}) => {
  
  return (
    <table>
    <thead>
        <tr>
            <th >Opis</th>
            <th >Cena</th>
            <th >Kategoria</th>
            <th ></th>
        </tr>
    </thead>
    <tbody>
        {list
        .filter((fl)=>fl.category===nameCategory||nameCategory==='')
        .map((el)=>{
         return(

        <tr key={el.id}>
            <td>{el.name}</td>
            <td className='price'><span className='pln'>PLN</span><span className='sum'>{(+el.price).toFixed(2)}</span> </td>
            <td>{el.category}</td>
            <td className='delete-item' onClick={()=>deleteItem(el.id)}>❌</td>
        </tr>
         )
        })}
        <tr className='summary' >
            <td >Razem:</td>
            <td colSpan="2" ><span className='pln'>PLN</span>{summary}</td>
            <td ></td>
            
        </tr>
        
    </tbody>
</table>

  )
}

export default DataList