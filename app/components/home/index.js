import angular from 'angular';
import FilmsService from './films/films.service';
import SeriesService from './series/series.service';
import {FilmsListComponent}
from "./films/films-list/films-list.component";
import {SeriesListComponent}
from "./series/series-list/series-list.component";
import{FilmsItemComponent} from "./films/films-item/films-item.component";
import{SeriesItemComponent} from "./series/series-item/series-item.component";
import{HomeComponent} from "./home/home.component"
import{Error404Component} from "./error404/error404.component"
const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
.service('SeriesService', SeriesService)    
.component('homeIndex',HomeComponent)
.component ('filmsList', FilmsListComponent)
.component ('seriesList', SeriesListComponent)
.component ('filmsItem', FilmsItemComponent)
.component ('seriesItem', SeriesItemComponent)
.component('error404Component', Error404Component)
.config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('home', {
            url: '/',
            component: 'homeIndex'
        })
        .state('films', {
            url: '/films',
            component: 'filmsList'
        })
        .state('series', {
            url: '/series',
            component: 'seriesList'
        })
        .state('error404', {
            url: '/error404',
            component: 'error404Component'
        });
    $urlRouterProvider.otherwise('/error404')
    })
    .name
export default home
