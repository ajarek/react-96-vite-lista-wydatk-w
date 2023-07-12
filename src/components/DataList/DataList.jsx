import './DataList.css'

const DataList = ({list, deleteItem, summary}) => {
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
        {list?.map((el)=>{
         return(

        <tr key={el.id}>
            <td>{el.name}</td>
            <td className='price'><span className='pln'>PLN</span>{(+el.price).toFixed(2)} </td>
            <td>{el.category}</td>
            <td className='delete-item' onClick={()=>deleteItem(el.id)}>❌</td>
        </tr>
         )
        })}
        <tr className='summary' >
            <td >Razem:</td>
            <td colspan="2" ><span className='pln'>PLN</span>{summary}</td>
            <td ></td>
            
        </tr>
        
    </tbody>
</table>

  )
}

export default DataList