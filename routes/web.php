<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::post('formSubmit','PlainteController@AjouterPlainte');
Route::post('AjouterPiece','PlainteController@AjouterPiece');
Route::get('formSubmit','TrialController@index');
Route::get('UserInfo','UserController@UserInfo');
Route::get('listPlainte','PlainteController@listerPlainteUser');
Route::get('listPlainteShort','PlainteController@listerPlainteUserShort');
Route::get('listPlainteAdmin','PlainteController@listerPlainteAdmin');
Route::get('listPriorite','PlainteController@listPriorite');
Route::get('listerJointe','PlainteController@listerJointe');
Route::get('listUser','PlainteController@listUser');
Route::get('PlainteEnvoyee','PlainteController@PlainteEnvoyee');
Route::get('AfficherMessage','MessageController@AfficherMessage');
Route::get('LireMessage/{id}','MessageController@LireMessage');
Route::post('EnvoyerMessage','MessageController@EnvoyerMessage');
Route::post('ChangerProfil','UserController@ChangerProfil');
Route::delete('SupprimerPlainte/{id}','PlainteController@SupprimerPlainte');
Route::post('AjouterCorrection','PlainteController@AjouterCorrection');
Route::get('AjouterCorrection','PlainteController@AjouterCorrection');
Route::get('PlainteResolu','PlainteController@PlainteResolu');
Route::get('PlainteResoluUser','PlainteController@PlainteResoluUser');
Route::get('PlainteEnvoyeUser','PlainteController@PlainteEnvoyeUser');
Route::get('PlainteResoluAdmin','PlainteController@PlainteResoluAdmin');
Route::get('PlainteEnvoyeAdmin','PlainteController@PlainteEnvoyeAdmin');
Route::get('PlainteEnvoyeesAdmin','PlainteController@PlainteEnvoyeesAdmin');


Auth::routes();
Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');


Route::get('/home', 'HomeController@index')->name('home');
Route::get('registration', 'UserController@Registration');
Route::get('profile', 'UserController@Profile');
Route::get('profileAdmin', 'UserController@ProfileAdmin');

Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('disconnect', 'UserController@Disconnect');



