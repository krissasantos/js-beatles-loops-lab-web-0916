function theBeatlesPlay(musicians, instruments) {
  // musicians = musicians
  // instruments = instruments
  let array = []
  let string;
  for (let i = 0; i < musicians.length; i++){
    // iterate through musicians
    // string = "$musicians[i] plays $instruments[i]"
    string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)

    // `$musicians[i] plays $instruments[i]`
  }
  return array
}

function johnLennonFacts(array){
  let i = 0;
    while (i < array.length){
        array[i] = array[i] + "!!!"
      i++
    }
return array
}

function iLoveTheBeatles(n){
  let array = []
  do {
    array.push("I love the Beatles!")
    ++n
  }while(n < 15)

  return array
}