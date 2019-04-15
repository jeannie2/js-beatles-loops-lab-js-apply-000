var role = []

// add solution here

function theBeatlesPlay(musicians, instruments) {
  for(var i=0; i<4; i++) {
    var x = musicians.length - 1
    role.push(musicians[i] + " plays " + instruments[x])
    x--;
  }
  return role;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i<facts.length) {
    facts[i]=(facts[i] + "!!!");
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var x = [];
  do {
    x.push("I love the Beatles!");//pushed to array regardless of while
    n++; //if 7, prints 8 times = contain a number of strings that represents the difference between the input number and 15.
  } while (n<15);
  return x;
}
