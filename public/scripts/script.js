// const js_message = document.getElementById("javascript_message").innerHTML = "welcome";



window.onscroll = function () {
  scrollFunction();
};


function scrollFunction() {
  let nav = document.querySelector("nav");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.padding = "0.5em";
  } else {
    nav.style.padding = "1em";
    nav.style.paddingRight = "8em";
  }
}



// const ok = document.getElementById('ok');
// let html;

// let firstString = "bob";
// let secondString = "    billy";

// html += `<ul>`;
// html += `<li>Content</li>`;
// html += `<li>Content</li>`;
// html += `<li>Content</li>`;
// html += `<li>Content</li>`;
// html += `</ul>`;

// ok.innerHTML += html;

// const cars = [];
// const keys = [true, false, true, true];
// cars[0] = 'rock';
// cars[1] = 'paper';
// cars[2] = 'scissors';
// const boats = ['ship', 'dock', keys, cars[0], cars[1], cars[2]];

// ok.innerHTML += `<p>My array: ${boats}</p>`;
// boats.push("Jazzy Jeff");
// boats.push("Joe Jack");

// ok.innerHTML += `<p>My array: ${boats}</p>`;
// ok.innerHTML += `<p>My array: ${boats.length}</p>`;
// const shifted = boats.shift();
// ok.innerHTML += `<p>My array: ${boats.length}</p>`;
// ok.innerHTML += shifted;
// boats[3] = null;
// let newArray = boats.filter((x) => x);
// ok.innerHTML += `<p>My array: ${newArray}</p>`;
// ok.innerHTML += `<p>My array: ${newArray.length}</p>`;
// for (let index = 1; index <= 10; index++) {
//   html += `<li>${index}</li>`;
// }
// html += `</ul>`
// ok.innerHTML += html;

// html = `<ul>`;
// ok.innerHTML += `<p>break line </p>`;
// for (let i = 0; i < boats.length; i++) {
//   html += `<li>${boats[i]}</li>`;
// }
// html += `</ul>`;

// ok.innerHTML += html;

