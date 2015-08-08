'use strict';

angular.module('seedlyApp')
  .directive('fileModel', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        element.bind('change', function(){
                scope.$apply(function(){
                    console.log(element[0].files);
                    modelSetter(scope, element[0].files); 
                });

                scope.previewImage(element[0].files);

            });
      }
    };
  });