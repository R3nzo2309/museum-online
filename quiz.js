// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
    question: "Waar staat het rijksmuseum",
    a: "rotterdam",
    b: "amsterdam",
    c: "den-haag",
    d: "alkmaar",
    answer: "B"
  },
  {
    question: "Op welke leeftijd trouwden prins Willem II en prinses Maria Stuart in 1641?",
    a: "19 en 14 jaar",
    b: "60 en 56 jaar",
    c: "14 en 9 jaar",
    d: "20 en 70 jaar",
    answer: "C"
  },
  {
    question: "Wat was de bijnaam van koning Willem III?",
    a: "koning gorilla",
    b: "koning aap",
    c: "de leeuwenkoning",
    d: "prins pils",
    answer: "A"
  },
  {
    question: "In welke zaal heeft de Gouden Koets ooit gestaan?",
    a: "nachtwachtzaal",
    b: "eregalerij",
    c: "voorhal",
    d: "fietspassage",
    answer: "C"
  },
  {
    question: "In 1806 werd Lodewijk Napoleon, de broer van Napoleon Bonaparte, koning van Nederland. Hoe stond hij bij zijn onderdanen bekend?",
    a: "beest van frankrijk",
    b: "slang van frankrijk",
    c: "zwijn van holland",
    d: "koning van holland",
    answer: "D"
  },
  {
    question: "Uit welk jaar komt het oudste object uit het Rijksmuseum?",
    a: "5500 - 4400 V.Chr.",
    b: "4400 - 3300 V.Chr.",
    c: "3300 - 2200 v.chr.",
    d: "2200 - 1100 V.Chr.",
    answer: "C"
  },
  {
    question: "‘Hansken is in de kelder’ staat op het schild van de ridder. Onder zijn voeten bevindt zich een opening. Als de schaal wordt gevuld met drank, komt Hansje omhoog. Waar stond Hansje symbool voor? ",
    a: "een zuigeling",
    b: "een engel",
    c: "johannes de doper",
    d: "johannes vermeer",
    answer: "A"
  },
  {
    question: "Wist je dat er ook ongeopende flessen wijn in de Rijksmuseumcollectie zijn? Deze behoren tot de scheepswrakvondsten. Kenners hebben een vermoeden welke soort wijn in de fles zit. Weet jij het ook? ",
    a: "Brandewijn",
    b: "Rosé",
    c: "Port",
    d: "Canei",
    answer: "C"
  },
  {
    question: "Welke vis was in de zeventiende eeuw in de Nederlandse republiek het meest populair om te eten?",
    a: "zalm",
    b: "haring",
    c: "rog",
    d: "schol",
    answer: "B"
  },
  {
    question: " In de poppenhuizen uit de Rijksmuseumcollectie is werkelijk waar alles in miniatuur gemaakt, van toilet en keuken, tot schilderij en kostuum. Zo ook het eten. Wat is dit?",
    a: "ham",
    b: "kip",
    c: "eend",
    d: "Gans",
    answer: "A"
  }
];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);