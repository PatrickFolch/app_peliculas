import angular from 'angular';
//import uiRouter from '@uirouter/angularjs';
import {AppComponent} from "./app.component";
import common from "./common/common";

const root = angular
.module('App',[

    common

])
.component ('cApp', AppComponent)

//Punto de arranque.
document.addEventListener('DOMContentLoaded',
    ()=>angular.bootstrap(document,['App']));
