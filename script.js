let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener
  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  let mainEL = document.querySelector("#main-titleID");

  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  let bodyEL = document.querySelector("body");
  bodyEL.style.backgroundColor = "lightgreen";

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  let menu = document.getElementById("favorite-things");
  let lastChild = menu.lastElementChild;
  lastChild.remove();

  // Part 4
  // Select all .special-title class elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
  let specialMain = document.querySelectorAll("special-title");
  for (let ele of specialMain) {
    specialMain[ele].style.fontSize = "2em";
  }

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  // let pastRacesEl = document.querySelectorAll('past-races li')
  // for(var i=0; li=pastRacesEl[i]; i++) {
  //   li.pastRacesEl.removeChild(li);
  // }

  let pastRacesEl = document.getElementById("past-races");
  if (pastRacesEl.hasChildNodes()) {

    for(let ele=0; ele<pastRacesEl.childElementCount; ele++){
      //console.log(`${pastRacesEl.children}`);
      if(pastRacesEl.children[ele].textContent=== 'Chicago'){
        pastRacesEl.removeChild(pastRacesEl.children[ele]);
      }
    }
  }
  
  //pastRacesEl.removeChild(pastRacesEl.children[3]);

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
  //let appendPastRaces = document.querySelector('past-races')
  let appendPastRaces = document.createElement("li");
  const textnode = document.createTextNode("Atlanta");
  appendPastRaces.appendChild(textnode);
  document.getElementById("past-races").appendChild(appendPastRaces);

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.
  // let appendPastRaces = document.createElement("div");
  // const textnode = document.createTextNode("Atlanta");
  // appendPastRaces.appendChild(textnode);
  // document.getElementById("past-races").appendChild(appendPastRaces);
  const newMain = document.querySelector('.main')
  const newDivLast = document.createElement("div");
  newDivLast.classList.add('blog-post') ;
  newDivLast.classList.add('purple')
  const liNode = document.createElement("h1")
  const textNode = document.createTextNode("Atlanta");
  liNode.appendChild(textNode)
  newDivLast.appendChild(liNode)
  //console.log(newDivLast);

  const paraNode = document.createElement('p')
  const textParaNode = document.createTextNode("lorem sakhka asdhkja ajshkj akjhs!!")
  paraNode.appendChild(textParaNode)
  newDivLast.appendChild(paraNode)
  newMain.appendChild(newDivLast)

  // Part 8
  // When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:
  // Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.

  let quoteTitleEl = document.querySelector('#quote-title')
  // console.log(quoteTitleEl);
  quoteTitleEl.addEventListener('click', randomQuote)

  // // Part 9
  // Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red
  // Test it out!

  // Hint:  
  // Remember the document node property .classList and the document node method .toggle().
let blogPostEl = document.querySelectorAll('.blog-post')
console.log(blogPostEl);
for(let ele =0; ele<blogPostEl.length; ele++){
  blogPostEl[ele].addEventListener('mouseout',function(e){
    blogPostEl[ele].classList.toggle('purple')
  })

  blogPostEl[ele].addEventListener('mouseenter',function(e){
    blogPostEl[ele].classList.toggle('red')
  })
}


});