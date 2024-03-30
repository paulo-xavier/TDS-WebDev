
document.querySelector('#form-search').onsubmit = validateSearch;
var control = document.querySelector('.pause'); 

var currentBanner = 0;

function validateSearch() {
    if (document.querySelector('#q').value == '') {
        alert('Invalid! You must enter a word!!');
        return false;
    }
}

function changeBanner() {
    currentBanner = (currentBanner + 1) % 2;
    document.querySelector('.highlight img').src = banners[currentBanner];
}

var banners = [
    "assets/images/mario-picture.png", 
    "assets/images/mario2.png"
];


function pauseLoop() {
    
    if (control.className == 'pause') {
        
        control.className = 'play'; 
        clearInterval(timer);
    
    } else {
        control.className = 'pause'; 
        timer = setInterval(changeBanner, 2000);
    }
}

var timer = setInterval(changeBanner, 2000); 
control.onclick = pauseLoop; 