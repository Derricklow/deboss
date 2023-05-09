<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable; 
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Admin extends Authenticatable
{
    use HasFactory,SoftDeletes;

    protected $guard = 'admin';
    protected $guarded = ['id'];    
    // protected $appends = ['pic'];
}