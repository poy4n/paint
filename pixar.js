var brushBox = document.querySelector('#brush-box')
var brushBtn = document.querySelector('#set')
var color = document.querySelector('.colorName')

// step 1
var changebrushBox = function (event) {
    event.preventDefault()
    brushBox.style.backgroundColor = color.value
}

brushBtn.addEventListener('click', changebrushBox)

// step 2
var numOfPixels = 1617;
var checkBox = document.querySelector('#pixel')

for (var i = 0; i < numOfPixels; i++) {
    var elem = document.createElement('div');
    elem.classList.add('pixel');
    checkBox.appendChild(elem);
}

// step 3 - 4 - 5 - 6
var pixels = document.querySelector('#pixel')

// got to the parent and add event listener
var changePixelColor = function (event) {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = color.value 
    }
}

pixels.addEventListener('mouseover', changePixelColor)

// step 7
var movieBtn = document.querySelector('#movie')
var movieName = document.querySelector('.movieName')

var moviePoster = function (event) {
    event.preventDefault()

    var title = movieName.value

    var options = {
        url: `http://www.omdbapi.com/?t=${title}&apikey=2f6435d9`,
        method: 'get'
    }
    var handleResponse = function (res) {
        checkBox.style.backgroundImage = `url( ${res.Poster} )`
    }

    $.ajax(options).done(handleResponse)
}
movieBtn.addEventListener('click', moviePoster)