const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentIndex = 0;

function updateSlidePosition() {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      // If on the last slide, loop back to the first
      currentIndex = 0;
    }
    updateSlidePosition();
  });

prevButton.addEventListener('click', () => {
if (currentIndex > 0) {
    currentIndex--;
} else {
    // If on the first slide, loop to the last
    currentIndex = slides.length - 1;
}
updateSlidePosition();
});

function showProfile(name, bio, videoUrl) {
    // Populate Modal Content
    document.getElementById('profileName').innerText = name;
    document.getElementById('profileBio').innerText = bio;
    
    const video = document.getElementById('profileVideo');
    const videoSource = document.getElementById('videoSource');
    
    // Set Video Source and Play Automatically
    videoSource.src = videoUrl;
    video.load();
    video.play();
    
    // Display Modal
    const modal = document.getElementById('profileModal');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

function closeModal() {
    const modal = document.getElementById('profileModal');

    // Pause Video and Reset Source
    const video = document.getElementById('profileVideo');
    video.pause();
    video.currentTime = 0;

    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
}

function pauseVideo() {
    const video = document.getElementById('profileVideo');
    video.pause();
    }
    window.addEventListener('click', (e) => {
    const modal = document.getElementById('profileModal');
    if (e.target === modal) {
        closeModal();
    }
    });

// Close Modal on Escape Key Press
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    });

var mapOptions = {
    center: [38.7964, -95.5348],
    zoom: 4,
    minZoom: 4,
    maxZoom: 4,
    dragging: false, 
    scrollWheelZoom: false, 
    doubleClickZoom: false, 
    boxZoom: false, 
    tap: false, 
    touchZoom: false, 
    keyboard: false, 
    attributionControl: false, 
    zoomControl: false
    }
    

// Initialize the map
var map = L.map('map', mapOptions); // Centered on USA

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Alumni Data
var alumniData = [
    {
        university: 'Washington University in St. Louis',
        coords: [38.6488, -90.3108],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'University of Colorado Boulder',
        coords: [40.0076, -105.2659],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'George Washington University',
        coords: [38.8997, -77.0470],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Georgia Institute of Technology',
        coords: [33.7756, -84.3963],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Cornell University',
        coords: [42.4534, -76.4735],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Santa Calara University',
        coords: [37.3489, -121.9368],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Colorado College',
        coords: [38.8492, -104.8254],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Union College',
        coords: [42.8179, -73.9294],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Harvey Mudd College',
        coords: [34.1061, -117.7086],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Pennsylvania State University',
        coords: [40.7982, -77.8599],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'University of Rochester',
        coords: [43.1306, -77.6260],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'UNC at Chapel Hill',
        coords: [35.9049, -79.0469],
        image: 'CGTSBlogo.png'
    },
    {
        university: 'Yale',
        coords: [41.3163, -72.9223],
        image: 'CGTSBlogo.png'
    }
];

// Function to create a custom popup
function createPopupContent(alum) {
    return `
        <div class="alumni-popup">
            <img src="${alum.image}" alt="${alum.name}">
            <p>${alum.university}</p>
        </div>
    `;
}

// Add markers to the map
alumniData.forEach(function(alum) {
    var marker = L.marker(alum.coords).addTo(map);
    marker.bindPopup(createPopupContent(alum));
});
