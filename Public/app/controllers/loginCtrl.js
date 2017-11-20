angular.module('loginControllers',['authServices'])
.controller('loginCtrl', function($location, $timeout, Auth){ 
    var app = this;
if(Auth.isLoggedIn()){
    console.log('Success: User is logged in.');
    Auth.getUser().then(function(data){
        console.log(data);
    });
} else {
    console.log('Failure: user is Not logged in.');
}

    this.loginUser = function(loginData){
        app.loading= true;
        
        Auth.login(app.loginData).then(function(data){
           console.log(data.data.token);
            
            if(data.data.success){
              app.message = data.data.message + "...Redirecting";
              app.loading= false;
              $timeout(function(){
                  $location.path('/register');
                }, 1000);
            } else {
                app.message = data.data.message;
                app.loading= false;
            }
        });
    };
    
    
    this.logout = function(){
        Auth.logout();
        $location.path('/register');
        $timeout(function(){
            $location.path('/');
        }, 2000);
    };
   
});
