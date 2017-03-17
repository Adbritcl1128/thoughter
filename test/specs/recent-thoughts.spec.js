(function() {
  'use strict';
  let expect = chai.expect;
  //
  describe('main module', function(){
      beforeEach(function(){
        let newMain = document.createElement('main');
        newMain.classList.add('recent');
        document.querySelector('body').appendChild(newMain);
      });
      afterEach(function(){
        let main = document.querySelector('main.recent');
        main.parentNode.removeChild(main);
      });
      it('should create articles for every thought it is given', function(){
        let result = window.thoughter.showRecent([
          {content:'This is hard', createTime: '09:00', id: 'Alex'}
        ]);
        let articles = document.querySelectorAll('main.recent article');
        expect(articles.length).to.equal(1);
      });
      it('should handle argument that is not an array', function(){
        let result = window.thoughter.showRecent([]);//connecting to the show recent function calling the function with an array because it calls for an array
        let articles = document.querySelectorAll('main.recent articles');
        expect(articles.length).to.equal(0);
      });
      it('should handle argument that is not an array', function(){
        let result = window.thoughter.showRecent('Hello');
        expect(result).to.be.undefined;
      });
      it('should create an element for individual pieces of data', function(){
        let result = window.thoughter.showRecent([{content: 'testing', createTime: 'time', id:'id'}]);
        expect();
      });
      it('should be a function', function(){
        expect(window.thoughter.showRecent).to.be.a('function');
      });
      it('should handle an array that contains only objects that do not meet the specified criteria', function(){
         window.thoughter.showRecent([{name: 'Bob'}, {number: 9}]);
         let articles = document.querySelectorAll('main article');
         expect(articles.length).to.equal(0);
      });
      it('should handle an array that contains some objects thats do not meet the specified criteria', function(){
         window.thoughter.showRecent([{name: 'Bob'},{content: 'testing', createTime: 'blah', id:'id'}]);
          let articles = document.querySelectorAll('main article');
          expect(articles.length).to.equal(1);
      });


    });
























  });

}());
