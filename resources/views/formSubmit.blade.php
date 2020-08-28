
<link rel="stylesheet" href="<?php echo asset('css/trial.css') ?>">


<h1>Hello


<form method="post" action="{{ action('PlainteController@AjouterPiece') }}" enctype="multipart/form-data">
@csrf
    <div className="form-group">
        <label>Add Book Name:  </label>
        <input type="number" className="form-control" name='utilisateur_id'  />
        <input type="number" className="form-control" name='priorite_id'  />
        <input type="text" className="form-control" name='type_plainte'  />
        <input type="text" className="form-control" name='titre_plainte'  />
        <input type="text" className="form-control" name='sujet_plainte'  />
        <input type="date" className="form-control" name='delai_plainte'  />
        <input type="file" className="form-control" name='file'  />
    </div>
    <div className="form-group">
        <input type="submit" value="Add Book"/>
        <img src="{{ URL::asset('images/e03dc2b6-c18e-4ded-8245-1883634fac5f.jpg') }}" height="30px" width="30px">
    </div>
</form>