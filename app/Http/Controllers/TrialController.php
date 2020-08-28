<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trial;
use Auth;

class TrialController extends Controller
{
    //
    public function AjouterNom(Request $r){
        $livre = new Trial();
        $livre->name = $r->name;
        $livre->user_id = 3;
        $livre->save();
    }
    public function index(){
        return view('formSubmit');
    }
}
