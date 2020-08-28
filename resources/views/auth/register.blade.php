@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ action('Auth\RegisterController@register') }}">
                        @csrf

                        Nom<input id="nom" type="text" class="form-control" name="nom"  required autocomplete="name" autofocus value={this.state.nom} onChange={this.onChangeNom}/>
                        prenom<input id="prenom" type="text" class="form-control" name="prenom"  required autocomplete="name" autofocus value={this.state.prenom} onChange={this.onChangePrenom}/>
                        role<input id="role" type="text" class="form-control " name="role" required autocomplete="name" autofocus value={this.state.role} onChange={this.onChangeRole}/>
                        email<input id="email" type="text" class="form-control " name="email" required autocomplete="name" autofocus value={this.state.email} onChange={this.onChangeEmail}/>
                        password<input id="password" type="text" class="form-control " name="password" required autocomplete="name" autofocus value={this.state.password} onChange={this.onChangePassword}/>
                        
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
