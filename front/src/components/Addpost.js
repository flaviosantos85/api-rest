import React, { useEffect, useState } from 'react'

const Addpost = () => {

    const handleSubmit = ( e ) => {
        
        e.preventDefault()
        const title = document.getElementById('title').value
        const body = document.getElementById('body').value

        const data = {            
            "title"  : title,
            "body"   : body
        }

        fetch('http://localhost:8000/api/add-post',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.success){
                alert(res.message)
                resetForm()
            }
            
        })
    }

    const resetForm = () => {
        document.getElementById('addform').reset()
    }
    return (
        <div style={{  padding:'10px',width:'50%', margin: '0 auto' }}>
            <h1>NEW POST</h1>
            <form id="addform" onSubmit={ handleSubmit } method="post">
                <input required id="title" type="text" name="title" placeholder='Title' />
                <input required  id="body" type="text" name="body" placeholder='Body' />
                <input type="submit" value="CRIAR POST" />
            </form>
            <a href="/">Voltar</a>
        </div>
    )
}

export default Addpost