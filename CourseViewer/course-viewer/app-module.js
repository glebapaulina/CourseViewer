(function () {
    'use strict';

    var appModule = angular.module('courseViewer', ['ui.router']);
    appModule.value('apiBase', 'http://pluralsightcourseviewer.azurewebsites.net/api/courseviewer/');

    appModule.config(function ($stateProvider, $urlRouterProvider){
        var states = [ 
            {
                name: 'home',
                url: '',
                template: '<home></home>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'courses',
                url: '/courses',
                template: '<course-list></course-list>'
            },
            {
                name: 'authors',
                url: '/authors',
                template: '<author-list></author-list>'
            },
            {
                name: 'author',
                url: '/author/{authorId}',
                resolve: {
                    authorId: function ($stateParams) {
                        return $stateParams.authorId;
                    }
                },
                template: '<author author-id="$resolve.authorId"></author>'
            },
            {
                name: 'author.bio',
                url: '/bio',
                template: '<author-bio author="vm.author"></author-bio>'
            },
            {
                name: 'author.courses',
                url: '/courses',
                template: '<author-courses author="vm.author"></author-courses>'
            },
            {
                name: 'course',
                url: '/course/{courseId}',
                resolve: {
                    courseId: function ($stateParams){
                        return $stateParams.courseId;
                    }                
                },
                template: '<course course-id="$resolve.courseId"></course>'

            },
            {
                name: 'course.modules',
                url: '/modules',
                template: '<course-modules course="vm.course"></course-modules>'
            },
            {
                name: 'course.description',
                url: '/description',
                template: '<course-description course="vm.course"></course-description>'
            },
            {
                name: 'course.discussion',
                url: '/discussion',
                template: '<course-discussion course="vm.course"></course-discussion>'
            },
           
         ];   
    
        $urlRouterProvider.when('/course/:courseId', '/course/:courseId/modules');
        $urlRouterProvider.otherwise('/');
        
        states.forEach(function (state){
            $stateProvider.state(state);
        });
        
    });
    
})();