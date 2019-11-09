(function() {
  let showtimesRadio = document.getElementById("showtimes");
  let detailsRadio = document.getElementById("details");
  let movieShowtimes = document.querySelector(".movie-showtimes");

  showtimesRadio.addEventListener("click", function() {
    if (showtimesRadio.checked) {
      movieShowtimes.classList.add("u-display-block");
    }
  });

  detailsRadio.addEventListener("click", function() {
    if (detailsRadio.checked) {
      movieShowtimes.classList.remove("u-display-block");
    }
  });
})();
