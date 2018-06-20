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
const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
.service('SeriesService', SeriesService)    
.component('homeIndex',HomeComponent)
.component ('filmsList', FilmsListComponent)
.component ('seriesList', SeriesListComponent)
.component ('filmsItem', FilmsItemComponent)
.component ('seriesItem', SeriesItemComponent)
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
        });
    $urlRouterProvider.otherwise('/')
    })
    .name
export default home
