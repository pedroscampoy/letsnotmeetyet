document.getElementById("lnkAbout").onclick = function () {
  document.getElementById("divAbout").removeAttribute("hidden");
  document.getElementById("divPictures").setAttribute("hidden", "");
  document.getElementById("divLocation").setAttribute("hidden", "");
  document.getElementById("divComments").setAttribute("hidden", "");
  document.getElementById("lnkPictures").classList.remove("active");
  document.getElementById("lnkAbout").classList.add("active");
  document.getElementById("lnkLocation").classList.remove("active");
  document.getElementById("lnkComments").classList.remove("active");
};

document.getElementById("lnkPictures").onclick = function () {
  document.getElementById("divAbout").setAttribute("hidden", "");
  document.getElementById("divPictures").removeAttribute("hidden");
  document.getElementById("divLocation").setAttribute("hidden", "");
  document.getElementById("divComments").setAttribute("hidden", "");
  document.getElementById("lnkAbout").classList.remove("active");
  document.getElementById("lnkPictures").classList.add("active");
  document.getElementById("lnkLocation").classList.remove("active");
  document.getElementById("lnkComments").classList.remove("active");
};

document.getElementById("lnkLocation").onclick = function () {
  document.getElementById("divAbout").setAttribute("hidden", "");
  document.getElementById("divPictures").setAttribute("hidden", "");
  document.getElementById("divLocation").removeAttribute("hidden");
  document.getElementById("divComments").setAttribute("hidden", "");
  document.getElementById("lnkAbout").classList.remove("active");
  document.getElementById("lnkPictures").classList.remove("active");
  document.getElementById("lnkLocation").classList.add("active");
  document.getElementById("lnkComments").classList.remove("active");
};

document.getElementById("lnkComments").onclick = function () {
  document.getElementById("divAbout").setAttribute("hidden", "");
  document.getElementById("divPictures").setAttribute("hidden", "");
  document.getElementById("divLocation").setAttribute("hidden", "");
  document.getElementById("divComments").removeAttribute("hidden");
  document.getElementById("lnkAbout").classList.remove("active");
  document.getElementById("lnkPictures").classList.remove("active");
  document.getElementById("lnkLocation").classList.remove("active");
  document.getElementById("lnkComments").classList.add("active");
};

const like = (element) => {
  axios
    .get(`/user/${element.getAttribute("data-user_id")}/like`)
    .then((response) => {
      if (response.data.match) {
        matchdiv = document.getElementById("itsAMatch");
        console.log(matchdiv);
        setTimeout(function () {
          matchdiv.classList.toggle("fullscreen");
          matchdiv.innerHTML =
            '<h1 style="font-size:10rem;">IT\'S A MATCH!</h1>';
        }, 150);
        setTimeout(function () {
          matchdiv.innerHTML = "";
          matchdiv.classList.add("darkbg");
          matchdiv.innerHTML =
            '<h1 style="font-size:10rem;">BUT N<i class="fas fa-virus"></i>T YET</h1>';
        }, 1500);
        setTimeout(function () {
          matchdiv.classList.toggle("fullscreen");
          matchdiv.classList.remove("darkbg");
          matchdiv.innerHTML = "";
        }, 3000);
      }
      if (response.data.liked) {
        element.classList.add("btn-outline-danger");
        element.classList.remove("btn-outline-secondary");
      } else if (!response.data.liked) {
        element.classList.remove("btn-outline-danger");
        element.classList.add("btn-outline-secondary");
      }
    })
    .catch((e) => console.error("Error liking product", e));
};
