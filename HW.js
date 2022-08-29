function getPeople(handshake) {
  let people = 1;
  let handshake = 0;
  
  const getPeople=(handshakes)=>{
    while (handshake < handshakes) {
      people += 1;
      handshake += (people - 1);
      
      console.log(handshake,people)
    }
    return people;
  }
}  
  
  
  console.log( getPeople(1) ); // 1 
  console.log( getPeople(3) ); // 2
  console.log( getPeople(6) ); // 3 
  console.log( getPeople(10) ); // 4 
  console.log( getPeople(15) ); // 5 
  console.log( getPeople(120) ); //  
  