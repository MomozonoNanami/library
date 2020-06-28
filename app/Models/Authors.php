<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Authors extends Model
{
    public function Books()
    {
    	return $this->belongsToMany(Books::class);
    }
}
