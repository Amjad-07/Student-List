import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom';

export const App = (props) => {
  const [inval, setInval] = useState("")
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [dis, setDis] = useState(true)
  const { value } = props
  const { setValue } = props
  const { favor } = props
  const { setFavor } = props
  function onAdd(e) {
    setDis(false)

    setInval(e.target.value)

    

  }


  function onMove() {
    setValue([...value, { id: value.length + 1, name: inval }])
    setInval('')
    setDis(true)



  }



  function onDelete(id, name) {

    setFavor([...favor, { id, name }])

    setFavoriteIds([...favoriteIds, id]);

  }





  return (
    <>
      <div className='list-container'>
        <div className='but-cont'>
          <Link to={"/"}><button > Student List</button></Link>
          <Link to={"/favour"}><button>Favorite Student</button></Link>
        </div>
        <h1>Student List</h1>
        <div className='int'>
          <input type="text" onChange={onAdd} value={inval} className='stu-input' />
          <button onClick={onMove} disabled={dis} className='stu-dis'>Add Student </button>
        </div>
        <div >
          <ul className='add-list'>
            {value.map((item, index) => {

              return (<>
                <div className='lii'>
                  <li style={{ marginTop: "5px" }} key={index} className="list-item"><span className="item-name">{`${item.id}.`}{item.name}</span>
                  <button onClick={() => { onDelete(item.id, item.name) }} disabled={favoriteIds.includes(item.id)} style={{  padding: "5px", borderRadius: "3px" }}    className="favorite-button">Add to Favourite</button></li>
                </div>
              </>)
            })}
          </ul>
        </div>







      </div>




    </>
  )
}
