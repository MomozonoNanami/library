<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    public function Books()
    {
    	return $this->belongsToMany(Books::class);
    }
}
