//////////////////////////////
// DROPDOWN NOTIFICATIONS
//////////////////////////////
const dropdownContent = document.querySelector(
'.dropdown-content');

function dropdownFunction() {
    dropdownContent.classList.toggle('show');
}

/////////////////////
// ALERT BANNER
/////////////////////

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =`<div class="alert-banner">
<p class="alert-text"><strong>Alert:</strong> You have unread messages <span class="alert-banner-close">x</span></p>
</div>`;

alertBanner.addEventListener('click', (e) => {
    let element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';
    }
});

//////////////////////
// TRAFFIC CHART
//////////////////////

const trafficCanvas = document.getElementById('traffic-chart');

////////////
// Data corresponding to each of the buttons for the chart
////////////

const hourlyTrafficDataDefault = {
    labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
    '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
    datasets: [{
    data: [150, 300, 400, 200, 75, 500, 50, 450, 700, 650,
    333, 666, 1102, 980, 499, 650, 988, 100, 222, 309, 876, 777, 555, 409],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

const hourlyTrafficData = {
    labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am',
    '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
    datasets: [{
    data: [150, 300, 400, 200, 75, 500, 50, 450, 700, 650,
    333, 666, 1102, 980, 499, 650, 988, 100, 222, 309, 876, 777, 555, 409],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
const dailyTrafficData = {
    labels: ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [{
    data: [450, 600, 222, 345, 666, 980, 724],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
const weeklyTrafficData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
    data: [1102, 1397, 2007, 1988],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
const monthlyTrafficData = {
    labels: ['Jan', 'Feb', 'Mar', "Apr", "May", 'Jun', 'Jul', 'Sept', 'Nov', 'Dec'],
    datasets: [{
    data: [3908, 3566, 4010, 4200, 4309, 4809, 5197, 5783, 5543, 6066, 4507, 3809],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

// The appearance of the chart
let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
            y: {
            beginAtZero: true
            }
        },
        plugins: {
            legend: {
            display: false
            }
        }
};

// Declaring the chart itself, including all data/options etc.
let trafficChart = new Chart(trafficCanvas, {
type: 'line',
data: hourlyTrafficDataDefault,
options: trafficOptions
});


// Variables for the main traffic chart buttons

let trafficNav = document.querySelector('.traffic-nav');
let trafficNavBtns = document.querySelectorAll('.traffic-nav-link');
let selectedNav = document.querySelectorAll('.traffic-nav-link-selected');
const hourlyBtn = document.querySelector('.hourly-btn');
const dailyBtn = document.querySelector('.daily-btn');
const weeklyBtn = document.querySelector('.weekly-btn');
const monthlyBtn = document.querySelector('.monthly-btn');

  
// /////////
// Adds and removes the class that indicates a button has been selected
// ////////

trafficNav.addEventListener('click', (e) => {
    trafficNavBtns.forEach((btn) => {
    if(btn == e.target) { 
        btn.classList.add("traffic-nav-link-selected"); }
    else { 
        btn.classList.remove("traffic-nav-link-selected"); }
  });
});

//////////////////////////
// Changes the chart's dataset and labels according to what button is clicked 
//////////////////////////

hourlyBtn.addEventListener('click', () => {
    trafficChart.data.labels = hourlyTrafficData.labels;
    trafficChart.data.datasets[0].data = hourlyTrafficData.datasets[0].data;
    trafficChart.update();
});

dailyBtn.addEventListener('click', () => {
    trafficChart.data.labels = dailyTrafficData.labels;
    trafficChart.data.datasets[0].data = dailyTrafficData.datasets[0].data;
    trafficChart.update();
});

weeklyBtn.addEventListener('click', () => {
    trafficChart.data.labels = weeklyTrafficData.labels;
    trafficChart.data.datasets[0].data = weeklyTrafficData.datasets[0].data;
    trafficChart.update();
});

monthlyBtn.addEventListener('click', () => {
    trafficChart.data.labels = monthlyTrafficData.labels;
    trafficChart.data.datasets[0].data = monthlyTrafficData.datasets[0].data;
    trafficChart.update();
});

///////////////////
// DAILY CHART
///////////////////

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thus', 'Fri', 'Sat'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
type: 'bar',
data: dailyData,
options: dailyOptions
});

/////////////////////
// MOBILE CHART
/////////////////////

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};


let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// /////////////
// SETTINGS
// /////////////


const sendButton = document.querySelector('.send-button');
const textBox = document.querySelector('.textbox');
const userSearch = document.querySelector('.user-search');
const settings = document.querySelectorAll('.toggle-switch');
const emailLabel = document.querySelector('.email-toggle-switch');
const emailSlider = document.querySelector('.email-slider');
const emailCheckbox = document.querySelector('.email-checkbox');
const profileLabel = document.querySelector('.profile-toggle-switch');
const profileSlider = document.querySelector('.profile-slider');
const profileCheckbox = document.querySelector('.profile-checkbox');


///////////////////////
// SENDING MESSAGES
///////////////////////

sendButton.addEventListener('click', () => {
    // Pick a user and type a message, required for anything to send
    userSearch.required = true;
    textBox.required = true;
    // If either are blank show an alert, otherwise send the message
    if (textBox.value === '' || userSearch.value === '') {
        alert("Please choose a recipient and type a message");
    } else {
        alert("Message sent");
    }
});

textBox.addEventListener('click', () => {
    suggestions.style.display = 'none';
})

// ///////////////
// Autocomplete Search Function
// ///////////////

let membersArray = ['Dale Byrd', 'Victoria Chambers', 'Dan Oliver', 'Ross Williams', 'Dawn Wood'];
let matchingNamesArray = [];

function findMatches(wordToMatch, membersArray) {
  return membersArray.filter(name => {
    const regex = new RegExp(wordToMatch, 'gi');
    return name.match(regex)
  });
}

const suggestions = document.querySelector('.suggestions');


function displayMatches() {
//   only display matches if the search field is used
  if (userSearch.value === '') {
    suggestions.style.display = 'none';
} else {
      suggestions.style.display = 'block';
  }
//  creates a list of all the matches and display them inside a <ul> element
  const matchArray = findMatches(this.value, membersArray);
  const html = matchArray.map(name => {
    const regex = new RegExp(this.value, 'gi');
    return `
      <li class="name">
        ${name}
      </li>`;
  }).join('');
  suggestions.innerHTML = html;

    // const nameLI = document.querySelector('.name');
//   if (nameLI.textContent === userSearch.value ) {
//         console.log('match found');
//         suggestions.style.display = 'none';
//       }
}

userSearch.addEventListener('change', displayMatches);
userSearch.addEventListener('keyup', displayMatches);



/////////////////////////
// TOGGLE SWITCHES
/////////////////////////

emailCheckbox.addEventListener('click', () => {
    if (emailCheckbox.checked === true) {
        console.log('checked');
        // if the viewport is less than 400px only move the slider 20px
        window.innerWidth < 400
        ? (emailSlider.style.transform = 'translateX(20px)')
        : (emailSlider.style.transform = 'translateX(80px)');
        emailLabel.style.backgroundColor = 'var(--accent1)';
        // Trying to add ON/OFF text inside the switches

        // emailLabel.classList.add('on');
        // emailLabel.classList.remove('off');
        // emailLabel.innerHTML += '<span>On</span>';
    } else {
        console.log('unchecked');
        emailSlider.style.transform = 'translateX(0px)';
        emailLabel.style.backgroundColor = 'lightgrey';
        // Trying to add ON/OFF text inside the switches


        // emailLabel.classList.add('off');
        // emailLabel.classList.remove('on');
        // emailLabel.innerHTML += '<span>Off</span>';
    }
}) 

profileCheckbox.addEventListener('change', () => {
    
    if (profileCheckbox.checked === true) {
        window.innerWidth < 400
        ? (profileSlider.style.transform = 'translateX(20px)')
        : (profileSlider.style.transform = 'translateX(80px)');
        profileLabel.style.backgroundColor = 'var(--accent1)';

    } else {
        profileSlider.style.transform = 'translateX(0px)';
        profileLabel.style.backgroundColor = 'lightgrey';
    }
}) 

//////////////////////
// LOCAL STORAGE
//////////////////////


const timezone = document.querySelector('#timezone');
const email = document.querySelector('#email-notif');
const profile = document.querySelector('#set-profile');
const saveButton = document.querySelector('#save');
const cancelButton = document.querySelector('#cancel');
let isTimezone = '';
let isEmail = false;
let isProfile = false;

// Sets the default local storage settings

    // If there is no email key in local storage, create one and set its value to false
    if (!localStorage.getItem('email')){
        localStorage.setItem('email', false);
    } else {
        // set the variable isEmail to the value of the 'email' key in local storage
        isEmail = localStorage.getItem('email');
            // if the value is true, make the toggle switch appear "ON"
            if (isEmail === 'true') {
                emailCheckbox.checked = true;

                window.innerWidth < 400
                ? (emailSlider.style.transform = 'translateX(20px)')
                : (emailSlider.style.transform = 'translateX(80px)');
                emailLabel.style.backgroundColor = 'var(--accent1)';
            } else { // if it is false, make the toggle swittch appear "OFF"
                emailCheckbox.checked = false;

                emailSlider.style.transform = 'translateX(0px)';
                emailLabel.style.backgroundColor = 'lightgrey';
            }
    }
    // ^^^same setup as above^^^
    if (!localStorage.getItem('profile')){
        localStorage.setItem('profile', false);
    } else {
        // set the variable isProfile to the value of the 'profile' key in local storage
        isProfile = localStorage.getItem('profile');
            // if the value is true, make the toggle switch appear "ON"
            if (isProfile === 'true') {
                profileCheckbox.checked = true;

                window.innerWidth < 400
                ? (profileSlider.style.transform = 'translateX(20px)')
                : (profileSlider.style.transform = 'translateX(80px)');
                profileLabel.style.backgroundColor = 'var(--accent1)';
            } else { // if it is false, make the toggle swittch appear "OFF"
                profileCheckbox.checked = false;

                profileSlider.style.transform = 'translateX(0px)';
                profileLabel.style.backgroundColor = 'lightgrey';
            }
    }
    // If there's no timezone key, create one and set its value to an array including all options
    console.log(timezone.value)
    if (localStorage.getItem('timezone')){
         timezone.value = localStorage.getItem('timezone');
    } else {
        isTimezone = localStorage.getItem('timezone');
    }

///////////////////////////////
// SAVE AND CANCEL BUTTONS
///////////////////////////////

saveButton.addEventListener('click', () => {
    console.log('save clicked')
    
    let selected = timezone[timezone.selectedIndex].value;
    localStorage.setItem('timezone', selected);

    if (emailCheckbox.checked === true) {
        localStorage.setItem('email', true);
    } else if (emailCheckbox.checked === false) {
        localStorage.setItem('email', false);
    }
    if (profileCheckbox.checked === true) {
        localStorage.setItem('profile', true);
    } else if (profileCheckbox.checked === false) {
        localStorage.setItem('profile', false);
    }
});

// Clicking cancel resets all settings to off/select timezone

cancelButton.addEventListener('click', () => {
    console.log('cancel clicked')

    localStorage.setItem('email', false);
    localStorage.setItem('profile', false);
    localStorage.removeItem('timezone');

    emailCheckbox.checked = false;
    profileCheckbox.checked = false;
    emailSlider.style.transform = 'translateX(0px)';
    profileSlider.style.transform = 'translateX(0px)';
    profileLabel.style.backgroundColor = 'lightgrey';
    emailLabel.style.backgroundColor = 'lightgrey';

});