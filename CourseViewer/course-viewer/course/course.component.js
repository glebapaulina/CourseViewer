(function () {
    'use strict';

    angular.module('courseViewer').component('course', {
        bindings: {
            courseId: '<',
            courseName: '<'
        },
        controllerAs: 'vm',
        controller: function(){
            var vm = this;

            vm.$onInit = function(){
                vm.course = {
                    CourseId: vm.courseId,
                    CourseName: vm.courseName
                };
            }

        },
        templateUrl: 'course-viewer/course/course.component.html'
        
    });
})();