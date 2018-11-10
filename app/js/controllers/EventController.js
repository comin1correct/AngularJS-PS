'use strict'

eventsApp.controller('EventController',
    function ($scope, eventData, $anchorScroll){
        $scope.sortorder = 'name';
        eventData.getEvent()
            .$promise
            .then(function(event){$scope.event = event; console.log(event)})
            .catch(function(response){console.log(response)});

        $scope.upVoteSession = function(session){
        session.upVoteCount++;
         };

        $scope.downVoteSession = function(session){
        session.upVoteCount--
         };

        $scope.scrollToSession = function(){
            $anchorScroll();
        }

    } // END OF CONTROLLER
);