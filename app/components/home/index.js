import angular from 'angular';
import FilmsService from './films/films.service';
import {FilmsListComponent}
from "./films/films-list/films-list.component";

const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
    .component ('filmsList', FilmsListComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('films', {
            url: '/films',
            component: 'filmsList'
        })
        
    $urlRouterProvider.otherwise('/')
    })
    .name
export default home
