

function createInstructor(firstName,lastName){
    return firstName,
           lastName
}



let favoriteNumber=42

const instructor={
    firstName: "Colt",
    [favoriteNumber]:"That is my favorite!"
}



const teacher={
    firstName:"Colt",
    saysHi(){
      return "Hi";
  },
    sayBye(){
      return this.firstName+"says bye!";
    }
  }
  
  

  const c= createAnimal("chicken","cluck","bawk")

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}

