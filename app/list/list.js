angular.module('list', [
	'angular-carousel',
	'ui.bootstrap'
])


.controller('SliderCtrl',['$scope', '$routeParams', '$http', '$modal', 'settings', function($scope, $routeParams,  $http, $modal, settings){
	$http.get( settings.apiServiceHost + settings.apiServicePath + '/content/lists/'+$routeParams.id).success(addSlides);


        $scope.provideAnswer = function(id){
		$scope.questionId = id;
		var modalInstance = $modal.open({
			templateUrl: '/app/list/partials/form-createAnswer.html',
			controller: 'AnswerCtrl',
			resolve: {
				questionId: function(){ return $scope.questionId; }
			}
		});
        }

	// slider with controls
	$scope.slides = [];
	$scope.slideIndex = 0;

	$scope.prev = function() {
		$scope.slideIndex--;
	}

	$scope.next = function() {
		$scope.slideIndex++;
	}


	function addSlide(answer) {
		target=$scope.slides
                var i = target.length;
                target.push({
                    label: 'slide #' + (i + 1),
                    //img: 'TBD' ,
                    odd: (i % 2 === 0),
                    answer: answer
                })
	}

	function addSlides(data) {
		for (var i=0; i < data.lList.length; i++) {
                    addSlide(data.lList[i]);
                }
	}


}])


.controller('AnswerCtrl',['$scope', '$http', '$modalInstance', '$fileUploader', 'questionId', 'settings', function($scope, $http, $modalInstance, $fileUploader, questionId, settings){

  $scope.questionId = questionId;
  $scope.answerForm = {};
  $scope.answerForm.questionId = questionId;
  $scope.ok = function ( ) {
  $http.get( settings.apiServiceHost + settings.apiServicePath + '/content/list/create?questionId='+$scope.questionId +
                                          '&firstAnswer=' + $scope.answerForm.firstAnswer +
                                          '&secondAnswer=' + $scope.answerForm.secondAnswer +
                                          '&thirdAnswer=' + $scope.answerForm.thirdAnswer +
                                          '&questionId=' + $scope.answerForm.questionId+
                                          '&firstAnswerImageUrl=' + $scope.answerForm.firstAnswerImage+
                                          '&secondAnswerImageUrl=' + $scope.answerForm.secondAnswerImage+
                                          '&thirdAnswerImageUrl=' + $scope.answerForm.thirdAnswerImage
             ).success(completed);
  };

  completed = function(data){
    $modalInstance.close();
    window.location.href= '/question/' + data.list.questionId;
  }

  // create a uploader with options
  var uploader = $scope.uploader = $fileUploader.create({
    scope: $scope,                          // to automatically update the html. Default: $rootScope
    url: settings.apiServiceHost + settings.apiServicePath + '/content/image/create',
    autoUpload: true,
    formData: [
      { key: 'value',
	referenceType:'answer' }
    ],
    filters: [
    function (item) {                    // first user filter
      console.info(item);
      return true;
    }
    ]
  });
   uploader.bind('afteraddingfile', function (event, item) {
            console.info('After adding a file', item);
        });

        uploader.bind('whenaddingfilefailed', function (event, item) {
            console.info('When adding a file failed', item);
        });

        uploader.bind('afteraddingall', function (event, items) {
            console.info('After adding all files', items);
        });

        uploader.bind('beforeupload', function (event, item) {
            console.info('Before upload', item);
        });

        uploader.bind('progress', function (event, item, progress) {
            console.info('Progress: ' + progress, item);
        });

        uploader.bind('success', function (event, xhr, item, response) {
            console.info('Success', xhr, item, response);
	    if( response.image.imageURL ){
	        $scope.answerForm[item.id] = response.image.imageURL;
	    }
        });

        uploader.bind('cancel', function (event, xhr, item) {
            console.info('Cancel', xhr, item);
        });

        uploader.bind('error', function (event, xhr, item, response) {
            console.info('Error', xhr, item, response);
        });

        uploader.bind('complete', function (event, xhr, item, response) {
            console.info('Complete', xhr, item, response);
        });

        uploader.bind('progressall', function (event, progress) {
            console.info('Total progress: ' + progress);
        });

        uploader.bind('completeall', function (event, items) {
            console.info('Complete all', items);
        });



}])

.controller('CreateCtrl', ['$scope', '$modal', 'settings', function ($scope, $modal, settings){
  $scope.ask = function(){
  	$scope.modalInstance = $modal.open({
                        templateUrl: '/app/list/partials/form-createList.html',
                        controller: 'QuestionCtrl'
                });
  }

}])

.controller('QuestionCtrl', ['$scope', '$http', '$modal', '$modalInstance', 'settings',  function($scope, $http, $modal, $modalInstance, settings){
  $scope.questionForm={};
  processCategories = function(data){
        $scope.categories = new Array();
        for(c in data.categoryList){
             $scope.categories.push( {categoryId: data.categoryList[c].categoryId, categoryName:data.categoryList[c].categoryName} );
        }
  }
  $http.get( settings.apiServiceHost + settings.apiServicePath + '/content/categories').success(processCategories);


  openAnswerForm = function(data){
  	$scope.questionId = data.question.questionId; 
                var modalInstance = $modal.open({
                        templateUrl: settings.basePath + '/app/list/partials/form-createAnswer.html',
                        controller: 'AnswerCtrl',
                        resolve: {
                                questionId: function(){ return $scope.questionId; }
                        }
                });
  }

  $scope.next = function (){
    $modalInstance.close();
    $http.get( settings.apiServiceHost + settings.apiServicePath + '/content/question/create?categoryId='+$scope.questionForm.categoryId+"&questionText="+$scope.questionForm.questionType + " " + $scope.questionForm.questionText).success(openAnswerForm);
  };

}]);
