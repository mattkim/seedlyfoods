'use strict';

var MAX_IMG_WIDTH = 1000;
var MAX_IMG_HEIGHT = 1000;
var MAX_IMG_FILE_SIZE_KB = 10000;

angular.module('seedlyApp')
  .service('imgutil', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      loadImage: function(file) {
        var deferred = $q.defer();

        // TODO: there might be a better way to load this.
        var url = window.URL || window.webkitURL;
        var img  = new Image();
        img.src = url.createObjectURL(file);

        img.onload = function() {
            deferred.resolve(this);
        };
        img.onerror= function(err) {
            deferred.reject(err);
        };

        return deferred.promise;
      },
      // Must be less than 1000 x 1000
      lessThanMaxFrameSize: function(img) {
        return img.width < MAX_IMG_WIDTH && img.height < MAX_IMG_HEIGHT;
      },
      // Must be less than 10 MB
      lessThanMaxFileSize: function(file) {
        return (file.size/1024) < MAX_IMG_FILE_SIZE_KB;
      }
    };
  });
