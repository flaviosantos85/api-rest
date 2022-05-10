import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ( props ) => {

    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        props.post.map(e => {
            if( e.post_id == id ) setData( e )
        })
    
    })
    
    const handleSubmit = ( e ) => {
        
        e.preventDefault()
        
        document.getElementById('btn-update-post').value = "SALVANDO..."
        const data = {            
            "title"  : document.getElementById('title').value,
            "body"   : document.getElementById('body').value
        }
        
        fetch(`http://localhost:8000/api/update-post/${ id }`,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.success){
                
                alert(res.message)
                window.location.href = '/'
            }
            
        })
    }
    
    return (
        <div style={{  padding:'10px',width:'50%', margin: '0 auto' }}>
            <h1>EDIT POST</h1>
            <form id="addform" onSubmit={ handleSubmit } method="post">
                <input required id="title" defaultValue={ data.title }   type="text" name="title" placeholder='Title' />
                <input required  id="body"  defaultValue={ data.body } type="text" name="body" placeholder='Body' />
                <input type="submit" id="btn-update-post" value="SALVAR ALTERAÇÕES" />
            </form>
            <a href="/">Voltar</a>
        </div>
    )
}

export default Editpost