// Switch between sections
function switchSection(section) {
  var sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  document.getElementById(section + '-section').style.display = 'block';
}

// Save note
function saveNote() {
  var note = document.getElementById('noteInput').value;
  // Process note saving logic
  console.log('Note saved:', note);
}

// Save blog
function saveBlog() {
  var blog = document.getElementById('blogInput').value;
  // Process blog saving logic
  console.log('Blog saved:', blog);
}

// Timer functionality
var timerInterval;
var timerTime = 0;
var timerRunning = false;

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function updateTimer() {
  timerTime++;
  var hours = Math.floor(timerTime / 3600);
  var minutes = Math.floor((timerTime % 3600) / 60);
  var seconds = timerTime % 60;
  document.getElementById('timerDisplay').textContent = 
    ('0' + hours).slice(-2) + ':' +
    ('0' + minutes).slice(-2) + ':' +
    ('0' + seconds).slice(-2);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 0;
  timerRunning = false;
  document.getElementById('timerDisplay').textContent = '00:00:00';
}
// Display images
function displayImages(images) {
  var imageList = document.getElementById('imageList');
  imageList.innerHTML = '';
  images.forEach(function(imageURL) {
    var img = document.createElement('img');
    img.src = imageURL;
    imageList.appendChild(img);
  });
}

// Switch between sections
function switchSection(section) {
  var sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  document.getElementById(section + '-section').style.display = 'block';

  if (section === 'camera') {
    startCamera();
  } else {
    stopCamera();
  }

  if (section === 'images') {
    displayImages(['image1.jpg', 'image2.jpg', 'image3.jpg']); // Replace with actual image URLs
  }
}

