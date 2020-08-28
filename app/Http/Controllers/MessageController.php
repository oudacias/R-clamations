<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use DB;

class MessageController extends Controller
{
    //
    public function EnvoyerMessage(Request $r)
    {
        $message = new Message();
        $message->id_expediteur = 1;
        $message->id_destinateur = $r->id_destinateur;
        $message->sujet = $r->sujet;
        $message->message = $r->message;
        $message->save();
    }
    public function AfficherMessage()
    {
        $message = DB::table('messages')->join('users','messages.id_expediteur','=','users.id')
        ->select('messages.id as message_id','messages.*','users.*')
        ->where('messages.id_destinateur','=','1')
        ->where('messages.lu','=','0')
        ->orderBy('messages.created_at','desc')
        ->get();
        return $message;
    }
    public function LireMessage($id)
    {
        $message = Message::find($id);
        $message->lu = 1;
        $message->save();
    }
    
}
