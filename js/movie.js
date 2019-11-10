(function() {
  let showtimesRadio = document.getElementById("showtimes");
  let detailsRadio = document.getElementById("details");
  let movieShowtimes = document.querySelector(".movie-showtimes");
  let movieDetails = document.querySelector(".movie-details");

  showtimesRadio.addEventListener("click", function() {
    if (showtimesRadio.checked) {
      movieShowtimes.classList.add("u-display-block");
      movieDetails.classList.remove("u-display-block");
    }
  });

  detailsRadio.addEventListener("click", function() {
    if (detailsRadio.checked) {
      movieDetails.classList.add("u-display-block");
      movieShowtimes.classList.remove("u-display-block");
    }
  });
})();
