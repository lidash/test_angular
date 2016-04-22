var app = angular.module('app', []);// JavaScript source code

app.directive('foo', function () {
   // return function (scope, element, attrs) {
   //     console.log('this is my directive');
    //  };
    //---------------
    return {
        link: function (scope, element, attrs) {
       //     console.log('this is my directive');
        //    console.log('scope', scope);
         //   console.log('element', element);
          //  console.log('attrs', attrs);
            // element.text('This is my magic directive');
            element.on('click', function () {
                // console.log('click');
                if (element.text() === 'foo') {
                    element.text('bar');
                } else {
                    element.text('foo');
                };
            });
        }
    };
});