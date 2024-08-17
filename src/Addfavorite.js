import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'


export const Addfavorite = (props) => {

    const { favor } = props
  const {setFavor} = props

    console.log("Favorite List:", favor);
    function onRemove(id){
        const temp = favor.filter((item)=>{
            if(id===item.id){
                return false

            }
            else{
                return true
            }

        })
        setFavor(temp)
        
        
        
        

    }


    return (<>
        <div className='list-container'>
            <div className='but-cont'>
                <Link to={"/"}><button className='student-but'> Student List</button></Link>
                <Link to={"/favour"}><button className='fav-but'>Favorite Student</button></Link>
            </div>
            <h1>Favourite Student List</h1>
            <ul style={{textAlign:"center"}}>
                {favor.length===0?<h2 style={{color:"red", marginRight:"16px", padding:"10px"}}>There is no Favourite Student :(</h2>:
                    favor.map((item, index) => {
                        return (<>
                        <div className='lii'>
                            <li key={index}className="list-item" ><span className="item-name">{`${index+1}. `}{item.name}</span><button style={{backgroundColor:"red", color:"white"}}       className="favorite-button" onClick={()=>{onRemove(item.id)}}>Remove</button></li></div>
                        </>)
                    })
                }



            </ul>


        </div>
    </>
    )
}
