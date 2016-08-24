// Define the `phonecatApp` module
var booksApp = angular.module('booksApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
booksApp.controller('booksController', function($scope) {

  $scope.bookTitle = "";
  $scope.bookDescription = "";
  $scope.bookAuthor = "";
  $scope.bookIndex = -1;

  $scope.newBookValid = $scope.bookTitle && $scope.bookDescription && $scope.bookAuthor;

  $scope.books = [
    {
      title: 'Ready Player One',
      description: 'Fast just got faster with Nexus S.',
      author: 'Ernest Cline'
    }, {
      title: 'Motorola XOOM™ with Wi-Fi',
      description: 'Fast just got faster with Nexus S.',
      author: 'Ernest Cline'
    }, {
      title: 'MOTOROLA XOOM™',
      description: 'Fast just got faster with Nexus S.',
      author: 'Ernest Cline'
    }
  ];



  $scope.removeBook = function(index) {
        $scope.books.splice(index, 1)
  };

  $scope.saveBook = function(){

    var newBook = {
      title: $scope.bookTitle,
      description: $scope.bookDescription,
      author: $scope.bookAuthor,
    }


    if($scope.bookIndex!=-1){
      $scope.books[$scope.bookIndex] = newBook;
    }else{
      $scope.books.push(newBook);
    }
    $scope.cleanNewBook();

  }

  $scope.editBook = function(index){

    var editBook = $scope.books[index];

    $scope.bookTitle = editBook.title;
    $scope.bookDescription = editBook.description;
    $scope.bookAuthor = editBook.author;
    $scope.bookIndex = index;

  }



  $scope.cleanNewBook = function(){
    $scope.bookTitle = "";
    $scope.bookDescription = "";
    $scope.bookAuthor = "";
    $scope.bookIndex = -1;
    $scope.myForm.$setPristine();
  }
});
