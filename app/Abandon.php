<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Abandon extends Model
{
    //
    public function user()
    {
        return $this->belongsTo('App\User','user_id');
    }
}
