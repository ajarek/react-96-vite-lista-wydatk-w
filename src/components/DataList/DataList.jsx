import './DataList.css'

const DataList = ({list, deleteItem}) => {
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
        {list?.map((el,index)=>{
         return(

        <tr key={index}>
            <td>{el.name}</td>
            <td className='price'><span className='pln'>PLN</span>{(+el.price).toFixed(2)} </td>
            <td>{el.category}</td>
            <td onClick={()=>deleteItem(el.id)}>❌</td>
        </tr>
         )
        })}
        
        
    </tbody>
</table>

  )
}

export default DataList