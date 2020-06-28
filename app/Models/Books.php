<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    public function Categories()
    {
    	return $this->belongsToMany(Categories::class);
    }
    public function Authors()
    {
    	return $this->belongsToMany(Authors::class);
    } 
}
