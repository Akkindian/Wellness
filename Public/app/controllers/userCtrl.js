var app = angular.module('appCtrl',  ['naif.base64','userServices']);
app.controller('regCtrl', function($http, $scope, $window, User){
$scope.user = {};
$scope.add = function(user)
{

 $scope.data = [
                {Name : user.Name},
                {Phone : user.Phone},
                {Email : user.Email },
                {Username : user.Username},
                {ClinicName : user.ClinicName},
                {ClinicAddress : user.ClinicAddress},
                {City : user.City},
                {State : user.State},
                {Pincode : user.Pincode},
                {Speciality : user.Speciality},
                {LicenseID : user.LicenseID},
                {doctor_qualification : user.doctor_qualification},
                {PhotoProofofLicense : user.File},
                {Password : user.Password}
             ];

 User.create($scope.data).then(function(){
                 console.log('form submitted');
                 console.log($scope.data);
             });
            }

$scope.uploadFile = function(){

    User.create($scope.File).success(function(res){
      alert('View file '+res+' ?');
      $window.location.assign(res);
    })   

}



});