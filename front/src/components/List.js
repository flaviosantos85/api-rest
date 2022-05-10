import React, { useEffect, useState } from 'react'

const List = ( props ) => {
    

    const handleDel = ( post ) => {
        
          if( window.confirm('Are you sure of deleting post?') )
            fetch(`http://127.0.0.1:8000/api/delete-post/${ post }`, {
                method: 'delete',
            })
        .then( resp => resp.json() )
        .then( resp => {
            document.getElementById('post-' + post).style.display = 'none'
          
      } )

    }

    const posts = props.posts.map((e)=> {
        return (
            <tr id={ 'post-' + e.post_id }  key={ e.post_id }>
                <td>{ e.title }</td>
                <td>{ e.body }</td>
                <td><button><a href={ '/edit-post/' + e.post_id }>Edit</a></button> <button><a onClick={ ev => handleDel( e.post_id ) }  className='del'>Delete</a></button></td>
            </tr>
        )
    })
    
    return(
        <>
        <a className="btn-add-post" href='/add-post'>Add new post</a>
        {
            posts.length > 0 &&
            <table border='0' cellSpacing='0' cellPadding='0' className='table'>
            <tr>
                <td width="35%">Title</td>
                <td width="35%">Body</td>
                <td width="35%">Action</td>
            </tr>
            { posts }
            </table> 
        }
        </>
    )

}

export default List