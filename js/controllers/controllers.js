/**
 * Created by guillermotrevino on 7/25/14.
 */
app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});