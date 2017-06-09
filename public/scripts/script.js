console.log('js');


var myApp = angular.module('myApp', []);

myApp.controller('ng-intro-assignment', function() {
    var vm = this;

    vm.employees = [];



    vm.submitInfo = function() {

        var employeeObject = {
            firstName: vm.firstName,
            lastName: vm.lastName,
            idNumber: vm.idNumber,
            jobTitle: vm.jobTitle,
            annualSalary: vm.annualSalary,

        };//end object


        vm.firstName = '';
        vm.lastName = '';
        vm.idNumber = '';
        vm.jobTitle = '';
        vm.annualSalary = '';
        vm.employees.push(employeeObject);


        vm.total = avarageSalaries(vm.employees);
        console.log(avarageSalaries(vm.employees));

        console.log(employeeObject);
        console.log(vm.employees);

    };//end submitInfo

     function avarageSalaries(arr) {
         var salaries = 0;

         for (var i = 0; i < arr.length; i++) {
            salaries += Number(arr[i].annualSalary);
         }

        salaries = salaries / arr.length / 12;
        return salaries.toFixed(2);

     }


});//end controller
