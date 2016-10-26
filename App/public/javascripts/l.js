var app = angular.module('myapp', []);

app.controller('myctr',function($scope, $http) {
    
    $scope.contact = {};
    console.log($scope.contact);
   
            $http.get('/patientlist')
            .success(function(data) {
                // clear the form so our user is ready to enter another
                $scope.patientlist = data;
                console.log(data);
               
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
            
      
         
    $scope.addpatientlist = function (){
               
                 $http.post('/patientlist', $scope.contact)

            .success(function(data) {
                 // clear the form so our user is ready to enter another
               console.log("data");
                  $scope.refresh ();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
              $http.get('/patientlist')
            .success(function(data) {
                // clear the form so our user is ready to enter another
                $scope. patientlist = data;
                console.log(data);
               
            })
            .error(function(data) {
                console.log('Error: ' + data);
            }); 
             };


    // when submitting the add form, send the text to the node API
  
   $scope.remove =function (id){
    console.log(id);
    $http.delete('/patientlist/' + id)
            .success(function(data) {
                 
                 console.log(data);
                // clear the form so our user is ready to enter another
                $scope.refresh();
                console.log("done bhai done");
            })
            .error(function(data) {
                console.log('Error: ' + data);
            }); 
             };
            
  
    

});