var svg = document.getElementById("svgs");
var s = Snap(svg);

var map = Snap.select("#map");
var btn = Snap.select("#btn");

var mapPoints = map.node.getAttribute("d");
var btnPoints = btn.node.getAttribute("d");

var toFancy = function () {
  btn.animate({ d: mapPoints }, 1000, mina.bounce);
};

// var toSimple = function () {
//   map.animate({ d: mapPoints }, 2000, mina.bounce, toFancy);
// };

// toFancy();

////////////
const firstCity = document.getElementById("khorasan_n_");
const secondCity = document.getElementById("hamedan_1_");
const thirdCity = document.getElementById("alborz_1_");

const citys = document.querySelectorAll(".selectinggg");

const btnDom = document.getElementById("btn");

btnDom.addEventListener("click", () => {
  btn.animate({ d: mapPoints }, 8000, mina.bounce);
  btnDom.setAttribute("fill", "none");

  setTimeout(() => {
    firstCity.classList.add("realShow");
    secondCity.classList.add("realShow");
    thirdCity.classList.add("realShow");
  }, 600);

  citys.forEach((city, idx) => {
    city.addEventListener("animationend", (e) => {
      const currentCity = e.target;
      const nextCity = currentCity.nextElementSibling;

      if (!nextCity.classList.contains("realShow")) {
        nextCity.classList.add("realShow");
      }

      if (citys[citys.length - 1].classList.contains("realShow")) {
        citys.forEach((city2) => {
          city2.setAttribute("opacity", +0.1);
          city2.setAttribute("fill", generateRandomColor());

          const timerOpacity = setInterval(() => {
            city2.setAttribute(
              "opacity",
              `${+city2.getAttribute("opacity") + 0.1}`
            );

            console.log("inside of interval");
            console.log(+city2.getAttribute("opacity"));

            if (+city2.getAttribute("opacity") >= 0.9) {
              clearInterval(timerOpacity);

              console.log("interval cleared");
            }
          }, 1800);
        });
      }
    });
  });
});

function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
