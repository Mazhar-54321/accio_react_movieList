import React from 'react'

const Genre = ({ genres }) => {
    const clickHandler = (el)=>{
        console.log(`Filtering by ${el}`)
    }
    return (
        <div style={{ backgroundColor: 'lightgray',padding:'20px' }}>
            <h2>Filter by Genre</h2>
            {
                <div style={{ display: 'flex', columnGap: '10px', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>{
                    genres?.map((el) => <div onClick={()=>clickHandler(el)} key={el} style={{ padding:'8px',cursor:'pointer', border:'1px solid black',textAlign:'center',backgroundColor:'rgb(0,0,0,0.1)',borderRadius:'4px' }}>{el}</div>)}</div>

            }
        </div>
    )
}

export default Genre