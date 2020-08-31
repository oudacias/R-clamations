<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class UserController extends Controller
{
    //
    public function Registration()
    {
        return view('registration');
    }
    public function Profile()
    {
        return view('profile');
    }
    public function ProfileAdmin()
    {
        return view('profileAdmin');
    }
    public function UserInfo()
    {
        $user = User::where('id','=',Auth::id())->get();
        return $user;
    }
    public function ChangerProfil(Request $r)
    {
        $user = User::find(Auth::id());
        $file = $r->file('file');
        $file->move(base_path('public/image_profile'), $user->id.'.'.$file->getClientOriginalExtension());
        $user->image_profil = '/image_profile/'.$user->id.'.'.$file->getClientOriginalExtension();
        $user->save();
    }
    public function Disconnect(Request $r) {
        Auth::logout();
      }
}
