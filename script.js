let profileepic = document.getElementById("profilepic")
let inputfile = document.getElementById("dp")

inputfile.onchange = function () {
profileepic.src = URL.createObjectURL(inputfile.files[0]);
}