window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("btn").onclick = () => {
    document.getElementById("content").style.display = "none"
    document.getElementById("yt").src += "?autoplay=1";
    document.getElementById("yt").style.display = "block"
  }
});
