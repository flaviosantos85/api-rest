import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = () => {

    const [post, setPost] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { id } = useParams()

    useEffect(()=> {
        
        fetch(`http://localhost:8000/api/get-post/${ id }`)
        .then(res => res.json())
        .then(res => setPost(res.post[0]))

    },[])
    
    const handleTitle = ( e ) => {
        setTitle( e )
    }
    const handleSubmit = ( e ) => {
        
        e.preventDefault()
        
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
                <input required id="title" defaultValue={ post.title }  type="text" name="title" placeholder='Title' />
                <input required  id="body" defaultValue={ post.body }  type="text" name="body" placeholder='Body' />
                <input type="submit" value="SALVAR ALTERAÇÕES" />
            </form>
            <a href="/">Voltar</a>
        </div>
    )
}

export default Editpost