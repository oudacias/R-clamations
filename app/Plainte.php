<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plainte extends Model
{
    //
    public function priorite()
    {
        return $this->belongsTo('App\Priorite','priorite_id');
    }
    
}
