<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
       
    </head>
    <body style="
    background-color: #747474;"
}>
        @if(Auth::check())
            @if(Auth::user()->role == 'user')
                <div id="profileuser"></div>
            @endif
        @else
            <div id="login"></div>
        @endif


    </body>
    <script src="/js/app.js"></script>

</html>
