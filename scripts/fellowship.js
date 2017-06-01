console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

//hobbits
// var frodo = $($(hobbitss)[0]);
// var sam = $($(hobbits)[1]);
// var merry = $($(hobbits)[2]);
// var peregrin = $($(hobbits)[3]);
// var hobbitList = [frodo, sam, merry, peregrin];

// //buddies
// var gandalf = $($(buddies)[0]);
// var legolas = $($(buddies)[1]);
// var gimli = $($(buddies)[2]);
// var strider = $($(buddies)[3]);
// var boromir = $($(buddies)[4]);
// var buddyList = $[gandalf, legolas, gimli, strider, boromir];


//1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
  $('body').append("<section></section");
  $('section').attr("id", "middle-earth");
  // add each land as an `article` tag
  for (var i = 0; i < lands.length; i++) {
    $("section").append("<article></<article>");
    $($("article")[i]).attr("id",lands[i]);
  // inside each `article` tag include an `h1` with the name of the land
  // append `middle-earth` to your document `body`
    $($("article")[i]).append("<h1></h1>").text(lands[i]);
  }
};
makeMiddleEarth();

//2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire 
   //(which is the second article tag on the page)
   //trying to make hobbitList var
   $($("article")[0]).append("<ul></ul>");
   for (var i = 0; i < hobbits.length; i++) {
    $("ul").append("<li></li>");
    $("ul").attr("id", "hobbits");
    $($("li")[i]).text(hobbits[i]);
   // give each hobbit a class of `hobbit`
    $("li").attr("class", "hobbit");
   }
 };
makeHobbits();

//3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
  $($(".hobbit")[0]).append("<div></div");
  $("div").attr("class", "magic-imbued-jewelry");
  $("div").attr("id", "the-ring");
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();

//4
var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
  $($("article:nth-child(2)")).append("<aside></aside>");
  $("aside").append("<ul></ul>");
  $("aside ul").attr("class", "buddies")
  for (i = 0; i < buddies.length; i++) {
    $($("aside ul")).append("<li></li>");
    $($("aside ul li")[i]).text(buddies[i]);
    $($("aside ul li")[i]).attr("id", "buddies");
  }
 };
makeBuddies();

//5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   $($("aside ul li")[3]).text("Aragorn");
};

beautifulStranger();

//6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
  $('#hobbits').appendTo('#Rivendell');
};
leaveTheShire();

//7

var fellowShipMembers = $("li");

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

  var theFellowship = $("<div></div>");
  theFellowship.appendTo($("article:nth-child(2)"));
  theFellowship.text("The Fellowship");
  theFellowship.attr("id", "the-fellowship");
  theFellowship.append("<ul></ul");
  for ( var i = 0; i < fellowShipMembers.length; i++) {
    $($("#the-fellowship")).append(fellowShipMembers[i]);
    //alert($(fellowShipMembers[i]).text() + " joined the party");
  }
};

forgeTheFellowShip();

//8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   $($("li")[0]).css("background-color", "white");
   $($("li")[0]).css("border", "2px solid gray");

};

theBalrog();
/*
//9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

//10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

//11
 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
};

//12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};
*/