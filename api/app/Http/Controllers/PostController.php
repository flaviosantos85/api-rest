<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Exception;

class PostController extends Controller
{
    public function index()
    {
        $result = Post::where('deleted', '0')
        ->orderBy('post_id', 'desc')
        ->get();

        if(count($result) == 0)
        {
            return response()->json(['success' => false, 'posts' => []], 200);
        }
        return response()->json(['success' => true, 'posts' => $result], 200);
    }

    public function getPost($id)
    {
        $result = Post::where('deleted', '0')
        ->where('post_id', $id)
        ->get();

        if(count($result) > 0){
            return response()->json(['success' => true, 'post' => $result], 200);
        }
        return response()->json(['success' => false, 'post' => []], 404);
    }

    public function addPost(Request $req)
    {
        
        $error = false;
        if(!$req->filled('title'))
        {
            $error = true;
        }else if(!$req->filled('body'))
        {
            $error = true;
        }

        if($error)
        {
            //return response()->json(['success' => false, 'message'=> 'failure.'], 400);
        }

        $data = array(
            'user_id'   => 1,
            'title'     => $req->input('title'),
            'body'      => $req->input('body'),
            'deleted'   => '0',
            'created_at'=> date('Y-m-d H:i:s')
        );
        
        if(Post::insert($data))
        {
            return response()->json(['success' => true, 'message'=> 'post created successfully.'], 201);
        }

    }

    public function updatePost($id, Request $req)
    {
        //header("Access-Control-Allow-Origin: *");
        //echo json_encode($req->all()); exit;
        $error = false;
        if(!$req->filled('title'))
        {
            $error = true;
        }
        else if(!$req->filled('body'))
        {
            $error = true;
        }
        
        if($error)
        {
            return response()->json(['success' => false, 'message'=> 'failure.'], 400);
        }
        
        $data = array(
            'title'  => $req->input('title'),
            'body'   => $req->input('body')
        );
        if(Post::where('post_id', $id)
        ->update($data)
        )
        {
            return response()->json(['success' => true, 'message'=> 'post updated successfully.'], 200);
        }
        // if pass a invalid post'id 
        return response()->json(['success' => false, 'message'=> 'failure.'], 400);

    }

    public function delPost($id){
        
        $result = Post::where('post_id', $id)
        ->update(
            ['deleted' =>'1']
        );

        if($result){
            return response()->json(['success' => true, 'message'=> 'post deleted successfully.'], 200);
        }
        return response()->json(['success' => false, 'message'=> 'failure.'], 400);
    }
    
}
