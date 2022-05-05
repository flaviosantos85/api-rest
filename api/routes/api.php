<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// [GET] get all the posts
Route::get('/list-posts', [PostController::class, 'index']);
// [GET] get unique post by its id
Route::get('/get-post/{id}', [PostController::class, 'getPost']);
// [POST] insert new post
Route::post('/add-post', [PostController::class, 'addPost']);
// [PUT] update a post by its id 
Route::put('/update-post/{id}', [PostController::class, 'updatePost']);
// [DELETE] delete a post by its id (softdelete)
Route::delete('/delete-post/{id}', [PostController::class, 'delPost']);
