(function () {
    'use strict';

    angular.module('mockup').controller('StudentController', StudentController);

    StudentController.$inject = ['$scope', 'StudentService'];

    function StudentController($scope, StudentService) {
        var vm = this;
        (function init() {
            //<editor-fold desc="FUNCTIONS">
            vm.search = search;
            vm.deleteStudent = deleteStudent;
            //</editor-fold>

            //<editor-fold desc="VARIABLES">
            vm.studentSearch = {};
            vm.studentList = [];
            //</editor-fold>

            search();
        })();

        function search() {
            StudentService.searchStudent(vm.studentSearch, function (data) {
                vm.studentList = data;
            }, function (error) {
                console.error(error);
            });
        }

        function deleteStudent(idStudent) {
            if (confirm("Do you want delete this student?")) {
                StudentService.delete({id: idStudent}, function (response) {
                    response.resultStatus === "OK" ? alert("Delete successfully") : alert("Delete failure!!!");
                    search();
                }, function (error) {
					alert("Delete failure!!!");
                    console.error(error);
                });
            }
        }

    }
})();