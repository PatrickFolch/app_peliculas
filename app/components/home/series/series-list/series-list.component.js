import controller from './series-list.controller'
export const SeriesListComponent = {
    bindings:{
      seriesResult: '<'
    },
    controller,
    template:`
    <h1>Series List </h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4" 
            ng-repeat="serie in $ctrl.seriesResult">
            <div class="card center" style="width: 18rem;">
                <img class="card-img-top"
                 src="https://image.tmdb.org/t/p/w400/{{serie.poster_path}}">
                </img>
                <div class="card-body">
                <h5 class="card-title"> {{serie.title}}</h5>
                <p class="card-text">{{serie.overview}}</p>
                </div>
            </div>
     
        </div>
    </div>
    
    `
}