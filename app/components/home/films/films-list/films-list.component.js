import controller from './films-list.controller'
export const FilmsListComponent = {
    bindings:{
      filmsResult: '<'
    },
    controller,
    template:`
    <h1>Film List </h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4" 
            ng-repeat="film in $ctrl.filmsResult">
            <div class="card center" style="width: 18rem;">
                <img class="card-img-top"
                 src="https://image.tmdb.org/t/p/w400/{{film.poster_path}}">
                </img>
                <div class="card-body">
                <h5 class="card-title"> {{film.title}}</h5>
                <p class="card-text">{{film.overview}}</p>
                </div>
            </div>
     
        </div>
    </div>
    
    `
}