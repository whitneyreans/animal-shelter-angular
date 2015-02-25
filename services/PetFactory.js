animalShelter.factory('PetFactory', function PetFactory() {
  var factory = {};
  factory.pets = [];

  factory.addPet = function() {
    var pet = {name: factory.petName, species: factory.petSpecies, adopted: false};
  console.log("I feel so much petter now!");  
    factory.pets.push(pet);
    factory.petName = null;
    factory.petSpecies = null;
  };
  return factory;
});
