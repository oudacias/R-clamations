<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Priorite extends Model
{
    //
    public function plainte()
    {
        return $this->belongsTo('App\Plainte','plainte_id');
    }
}
