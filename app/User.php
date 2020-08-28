<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nom','prenom','role', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function abandon()
    {
        return $this->hasMany('App\Abandon','user_id');
    }
    public function correction()
    {
        return $this->hasMany('App\Correction','user_id');
    }
    public function profile()
    {
        return $this->hasOne('App\Imageprofil','user_id');
    }
    public function message()
    {
        return $this->hasMany('App\Message','user_id');
    }
    public function plainte()
    {
        return $this->hasMany('App\Plainte','user_id');
    }
}
