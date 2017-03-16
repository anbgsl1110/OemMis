﻿"use strict";



define([
    "angular",
    'uiRouter',
    "modules/index-app/controller",
    "modules/message-app/controller",
     "highcharts-ng",
     'commonDirective',
     "funnel",
     "components/selectBox/directive",
    
     

], function (angular) {

    return angular.module("IndexApp", [
            "ui.router",
            "IndexApp.controllers",
            "MessageApp.controllers",
            "highcharts-ng",
            "CommonDirective",

    ])
        .config([
            "$stateProvider",
            function ($stateProvider) {

                $stateProvider
                    .state("index", {
                        //parent: "base",
                        url: "/index",
                        templateUrl: "modules/index-app/index.html",
                        controller: "IndexAppController",
                        title: "首页",
                        resolve: {
                            permission: ["currentUserService", "rolesService", function (currentUserService, rolesService) {
                                return currentUserService.hasPermission([rolesService.crm_员工], true);
                            }]
                        }
                    });
            }
        ]);
});