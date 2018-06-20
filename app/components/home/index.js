import angular from 'angular';
import FilmsService from './films/films.service';
import SeriesService from './series/series.service';
import {FilmsListComponent}
from "./films/films-list/films-list.component";
import {SeriesListComponent}
from "./series/series-list/series-list.component";
import{FilmsItemComponent} from "./films/films-item/films-item.component";
const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
.service('SeriesService', SeriesService)    
.component ('filmsList', FilmsListComponent)
.component ('seriesList', SeriesListComponent)
.component ('filmsItem', FilmsItemComponent)
.config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('films', {
            url: '/films',
            component: 'filmsList'
        })
        .state('series', {
            url: '/series',
            component: 'seriesList'
        });
    $urlRouterProvider.otherwise('/')
    })
    .name
export default home
