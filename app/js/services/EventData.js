// factory[Creating the service]: name of the service , and function that will return an object that will become that service (event object)
eventsApp.factory('eventData', function($resource){
    var resource = $resource('/data/event/:id',{id:'@id'});
    return{
        getEvent: function(){
            // $resource(<format of URL>, <object that give default values>, <call get on that resources>)
            return resource.get({id:1});
        },
        save: function(event){
            event.id = 999;
            return resource.save(event);
        }
    };
});



// $http vs $resources:
//      $resources is base on the same functionality as $http, making AJAX calls,
//      but $resources is base on a RESTful architecture. So it assumes that your
//      server is using REST best architecture.