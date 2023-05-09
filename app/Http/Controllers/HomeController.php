<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Str;
use Cookie;

class HomeController extends Controller
{
	public function home()
	{
		return Inertia::render('Home/Index');
	}
}