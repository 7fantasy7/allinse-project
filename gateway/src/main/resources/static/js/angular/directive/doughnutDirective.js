/**
 * Created by root on 05.10.2016.
 */
'use strict';
app.directive('doughnutJS', function($window) {
    return {
        restrict: 'A',
        replace: true,
        template: '<canvas id="doughnut" height="200px"></canvas>',
        link: function(scope, element, attrs, fn) {
            $window.(function() {

                var DOUG = document.getElementById("doughnut");
                var doughnut = new Chart(DOUG, {
                    type: 'bar',
                    data: {
                        labels: ["Red", "Blue"],
                        datasets: [{
                            label: ['# of Votes', 'SPA'],
                            data: [12, 19],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(33, 119, 54, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                });
            });

        }
    }
});