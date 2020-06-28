<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function index()
    {
    	$books = Books::get(); 
    	return response()->json($books);
    }
}
