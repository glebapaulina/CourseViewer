(function () {
    'use strict';

    angular.module('courseViewer').component('author', {
        bindings: {
            authorId: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.author = null;

           
            vm.$onInit = function(){
                vm.author = {
                    AuthorId: vm.authorId
                
                };
            }
        },
        templateUrl: 'course-viewer/author/author.component.html'
    });
})();
