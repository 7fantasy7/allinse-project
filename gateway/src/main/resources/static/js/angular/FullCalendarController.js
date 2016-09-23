/**
 * Created by root on 22.09.2016.
 */
app.controller('FullCalendarController', function ($scope, $http, tokenFactory, $httpParamSerializerJQLike) {
    function getCallendar() {

        var token = tokenFactory.getOauthTokenFromSession;

        if(token) {
            $http({
                method: 'POST',
                url: '/personnel/calendar/events',
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (data, status, headers, config) {
                console.log(data);
                alertify.error("Success get full personnel/calendar/events ");
            }).error(function (response) {
                alertify.error("Error get personnel/calendar/events ");
            });
        }
    }

    function saveCalendar(start, end, type) {

        var token = tokenFactory.getOauthTokenFromSession;

        if(token) {
            $http({
                method: 'POST',
                url: '/personnel/calendar/events/save',
                headers: {'Authorization': 'Bearer ' + token},
                data: {
                    start: start,
                    end: end,
                    type: type
                }
            }).success(function (data, status, headers, config) {
                console.log("success save personnel/calendar/events/save");
                alertify.success("success save Calendar Status: " + status)
            }).error(function (status) {
                alertify.error("Error save personnel/calendar/save  ");
            });
        }
    }
});