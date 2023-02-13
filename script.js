$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // Responsive Navbar Toggle
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Form Submit dari Github
const scriptURL = "https://script.google.com/macros/s/AKfycbxcUnhq8FquOFwCtNEi3FzMpE-ENjs7tNu-gumMs-lcnLYtVhKd8Wh7dlc1ohnxti6X/exec";
const form = document.forms["portfolio-kontak"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim dan alert, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      // Reset Form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Edukasi dan Pengalaman Section
const btnEdukasi = document.getElementById("btn-edukasi");
const btnPengalaman = document.getElementById("btn-pengalaman");
const btnSertifikasi = document.getElementById("btn-sertifikasi");
const sectionEdukasi = document.getElementById("edukasi");
const sectionPengalaman = document.getElementById("pengalaman");
const sectionSertifikasi = document.getElementById("sertifikasi");

function edukasi() {
  // Add and remove content
  sectionEdukasi.classList.remove("d-none");
  sectionPengalaman.classList.add("d-none");
  sectionSertifikasi.classList.add("d-none");

  // Add and remove active class
  btnEdukasi.classList.add("actived");
  btnSertifikasi.classList.remove("actived");
  btnPengalaman.classList.remove("actived");
}

function pengalaman() {
  sectionPengalaman.classList.remove("d-none");
  sectionEdukasi.classList.add("d-none");
  sectionSertifikasi.classList.add("d-none");

  btnPengalaman.classList.add("actived");
  btnSertifikasi.classList.remove("actived");
  btnEdukasi.classList.remove("actived");
}

function sertifikasi() {
  sectionSertifikasi.classList.remove("d-none");
  sectionEdukasi.classList.add("d-none");
  sectionPengalaman.classList.add("d-none");

  btnSertifikasi.classList.add("actived");
  btnPengalaman.classList.remove("actived");
  btnEdukasi.classList.remove("actived");
}