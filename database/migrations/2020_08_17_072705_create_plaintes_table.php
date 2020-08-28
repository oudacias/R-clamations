<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaintesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plaintes', function (Blueprint $table) {
            $table->id();
            $table->integer('utilisateur_id');
            $table->integer('administrateur_id');
            $table->integer('priorite_id');
            $table->string('type_plainte');
            $table->string('etat_plainte')->default('encours');
            $table->string('titre_plainte');
            $table->text('sujet_plainte');
            $table->date('delai_plainte');
            $table->integer('piecejointe_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plaintes');
    }
}
