var svg = document.getElementById("svgs");
var s = Snap(svg);

var map = Snap.select("#map");
var btn = Snap.select("#btn");

var mapPoints = map.node.getAttribute("d");
var btnPoints = btn.node.getAttribute("d");

// var toFancy = function () {
//   btn.animate({ d: mapPoints }, 1000, mina.bounce);
// };

// var toSimple = function () {
//   map.animate({ d: mapPoints }, 2000, mina.bounce, toFancy);
// };

// toFancy();

////////////
const firstCity = document.getElementById("gilan_1_");
// const secondCity = document.getElementById("hamedan_1_");
// const thirdCity = document.getElementById("alborz_1_");
const btnDom = document.getElementById("btn");
const citys = document.querySelectorAll(".citys");

//////////////

btnDom.addEventListener("click", () => {
  btn.animate({ d: mapPoints }, 7000, mina.ease);
  btnDom.setAttribute("fill", "none");

  setTimeout(() => {
    firstCity.classList.add("show");
    // secondCity.classList.add("show");
    // thirdCity.classList.add("show");
  }, 600);

  citys.forEach((city, idx) => {
    city.addEventListener("animationend", (e) => {
      const currentCity = e.target;
      const nextCity = currentCity.nextElementSibling;
      if (!nextCity.classList.contains("show") && nextCity.nodeName == "path") {
        nextCity.classList.add("show");
      }
      /////////////////////////////////////////////////////
      if (idx === citys.length - 1) {
        citys.forEach((city2) => {
          painting(city2);
          city2.classList.remove("show");
          city2.setAttribute("opacity", +0);

          const timerOpacity = setInterval(() => {
            city2.setAttribute(
              "opacity",
              `${+city2.getAttribute("opacity") + 0.05}`
            );

            if (+city2.getAttribute("opacity") >= +1) {
              clearInterval(timerOpacity);
            }
          }, 100);
        });
      }
    });
  });
});

function painting(city2) {
  city2.setAttribute("fill", generateRandomColor());
}

function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let bh = "";
citys.forEach((city) => {
  city.addEventListener("click", (e) => {
    if (city.classList.contains("citys")) {
      // console.log(e.target.id);

      elementID = e.target.id;
      elementNode = document.getElementById(elementID);
      citys.forEach((city) => {
        if (city !== elementNode) {
          city.style.display = "none";
          // city.setAttribute("opacity", 0);
        }
      });

      var aaa = Snap.select("#" + e.target.id);
      aaa.animate({ d: btnPoints }, 600, mina.linear);
    }
  });
});
