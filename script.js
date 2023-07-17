
document.addEventListener('DOMContentLoaded', function () {
    toggleLightbox('lightbox-promo1');
    console.log("Ready!");
}, false);

function toggleLightbox(id) {
    var lightbox_outter = document.getElementById("lightbox");
    var body = document.getElementById("body");
    var lightbox_inner = document.getElementById(id); if (lightbox_outter.style.display === "none") {
        lightbox_outter.style.display = "block";
        lightbox_inner.style.display = "block";
        body.style.overflow = "hidden";
    } else {
        lightbox_outter.style.display = "none";
        lightbox_inner.style.display = "none";
        body.style.overflow = "auto";
    }
}
