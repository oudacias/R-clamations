<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Plainte;
use Auth;
use App\User;
use App\Priorite;
use DB;
use App\Piecejointe;
use App\Correction;

class PlainteController extends Controller
{
    //
    public function AjouterPlainte(Request $r)
    {
        $plainte = new Plainte();
        if($r->utilisateur_id){
        $plainte->utilisateur_id = $r->utilisateur_id ;
        }else{
            $plainte->utilisateur_id = User::where('role','=','user')->first()->id;
        }
        $plainte->administrateur_id = Auth::id();
        $plainte->priorite_id = $r->priorite_id ;
        $plainte->type_plainte = $r->type_plainte ;
        $plainte->titre_plainte = $r->titre_plainte ;
        $plainte->sujet_plainte = $r->sujet_plainte ;
        $plainte->delai_plainte = $r->delai_plainte ;
        $plainte->save();
        
            

        }
    public function AjouterPiece(Request $r){
        $piece = new Piecejointe();
        $plainte = Plainte::find(Plainte::max('id'));
        $piece->plainte_id = $plainte->id;
        $file = $r->file('file');
        $file->move(base_path('public/uploads'), $piece->plainte_id.'.'.$file->getClientOriginalExtension());
        $piece->lien_piece = 'uploads/'.$piece->plainte_id.'.'.$file->getClientOriginalExtension();
        $piece->type_piece = $file->getClientOriginalExtension();
        $piece->save(); 
        $plainte->piecejointe_id = $piece->id;
        $plainte->save();
    }
    public function listerPlainteUser(){
        $plaintes = DB::table('plaintes')->join('priorites','plaintes.priorite_id','=','priorites.id')
                                        ->leftJoin('piecejointes','plaintes.piecejointe_id','=','piecejointes.id')
                                        ->select('plaintes.id as plainte_id','plaintes.*','plaintes.created_at as created_at_plainte','priorites.*','piecejointes.*')
                                        ->where('plaintes.utilisateur_id','=',Auth::id())
                                        ->get();
        return $plaintes;
    }
    public function listerPlainteUserShort(){
        $plaintes = DB::table('plaintes')->join('priorites','plaintes.priorite_id','=','priorites.id')
                                        ->leftJoin('piecejointes','plaintes.piecejointe_id','=','piecejointes.id')
                                        ->select('plaintes.id as plainte_id','plaintes.*','plaintes.created_at as created_at_plainte','priorites.*')
                                        ->where('plaintes.utilisateur_id','=',Auth::id())
                                        ->orderBy('plaintes.created_at')
                                        ->limit(5)
                                        ->get();
        return $plaintes;
    }
    public function listerPlainteAdmin(){
        $plaintes = DB::table('plaintes')->join('priorites','plaintes.priorite_id','=','priorites.id')
                                        ->leftJoin('piecejointes','plaintes.piecejointe_id','=','piecejointes.id')
                                        ->select('plaintes.id as plainte_id','plaintes.*','plaintes.created_at as created_at_plainte','priorites.*')
                                        ->where('plaintes.administrateur_id','=',Auth::id())
                                        ->get();
        return $plaintes;
    }
    
    public function listPriorite()
    {
        $priorite = Priorite::all();
        return $priorite;
    }
    public function listUser()
    {
        
        $user = User::where('id','<>',Auth::id())
                        ->get();
        return $user;
    }
    public function SupprimerPlainte($id)
    {
        Plainte::destroy($id);
    }
    public function AjouterCorrection()
    {
        $correction = new Correction();
        $correction->user_id = Auth::id();
        $correction->save();
    }
    public function PlainteEnvoyeesAdmin()
    {
        $plainte = Plainte::selectRaw("COUNT(*) plains, DATE_FORMAT(created_at, '%Y %m %e') date")
        ->where("administrateur_id","=",Auth::id())
        ->groupBy('date')
        ->orderBy('date')
        ->limit(5)
        ->get();
        
        return $plainte;
    }
    public function PlainteRecu()
    {
        $plainte = Plainte::selectRaw("COUNT(*) plains, DATE_FORMAT(created_at, '%Y %m %e') date")
        ->where("utilisateur_id","=",Auth::id())
        ->groupBy('date')
        ->orderBy('date')
        ->limit(5)
        ->get();
        
        return $plainte;
    }
    public function PlainteResolu()
    {
        $plainte = Correction::selectRaw("COUNT(*) plains, DATE_FORMAT(created_at, '%Y %m %e') date")
        ->where("user_id","=",Auth::id())
        ->groupBy('date')
        ->orderBy('date')
        ->limit(5)
        ->get();
        
        return $plainte;
    }
    public function PlainteResoluUser()
    {
        $plainte = Correction::selectRaw("COUNT(*) plainR")
        ->where("user_id","=",Auth::id())
        ->get();        
        return $plainte;
    }
    public function PlainteEnvoyeUser()
    {
        $plainte = Plainte::selectRaw("COUNT(*) plainE")
        ->where("utilisateur_id","=",Auth::id())
        ->get();        
        return $plainte;
    }
    public function PlainteResoluAdmin()
    {
        $plainte = Correction::selectRaw("COUNT(*) plainRA")->get();        
        return $plainte;
    }
    public function PlainteEnvoyeAdmin()
    {
        $plainte = Plainte::selectRaw("COUNT(*) plainEA")
        ->where("administrateur_id","=",Auth::id())
        ->get();
              
        return $plainte;
    }
}
