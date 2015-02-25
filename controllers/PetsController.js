animalShelter.controller('PetsCtrl', function PetsCtrl($scope, PetFactory) {
  $scope.pets = PetFactory.pets;
  $scope.PetFactory = PetFactory;
});
