const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ];
    




const wedDate = document.querySelector('.wed-date');
const outcome = document.querySelector('h3');
const countDown = document.querySelectorAll('.time p');


const futureDate = new Date(2021, 1, 26, 10, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate()
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];


wedDate.innerHTML = `Date: ${weekday}  ${date}th ${month} ${year}, ${hours}:${mins}am`

const futureTime = futureDate.getTime();


const getCountDownStart = () =>{
  const today = new Date().getTime();
  const countDate = futureDate - today;
  
  // 1s = 1000
  // 1m = 60s
  // 1h = 60m
  // 1d = 24
  
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;
  
  const days = Math.floor(countDate/oneDay);
  const  hours = Math.floor((countDate % oneDay) / oneHour);
  const mins = Math.floor((countDate % oneHour)/oneMin );
  const secs = Math.floor((countDate % oneMin)/1000);
  
  
  const value = [days, hours, mins, secs];
  countDown.forEach((item, index) =>{
    return item.innerHTML = value[index]
  })
  
  
};
const counter = setInterval(getCountDownStart, 1000);
getCountDownStart();


const sideNav = document.querySelector('.sideNav');
const manuBtn = document.querySelector('.manuBtn');
const photoGallery = document.querySelector('.photo-gallery');

manuBtn.addEventListener('click', () => {
  sideNav.classList.toggle('showNav')
});

sideNav.addEventListener('click', () => {
  sideNav.classList.remove('showNav')
});

const pictures = [
  {
    id: 1,
    category: "All",
    image: "./img/pic(1).jpg"
  },
  {
    id: 2,
    category: "All",
    image: "./img/pic(2).jpg"
  },
  {
    id: 3,
    category: "All",
    image: "./img/pic(3).jpg"
  },
  {
    id: 4,
    category: "All",
    image: "./img/pic(5).jpg"
  },
  {
    id: 5,
    category: "intro",
    image: "./img/pic(6).jpg"
  },
  {
    id: 6,
    category: "intro",
    image: "./img/pic(7).jpg"
  },
  {
    id: 7,
    category: "intro",
    image: "./img/pic(8).jpg"
  },
  {
    id: 8,
    category: "intro",
    image: "./img/pic(9).jpg"
  },
  {
    id: 9,
    category: "intro",
    image: "./img/pic(8).jpg"
  },
  {
    id: 10,
    category: "intro",
    image: "./img/pic(9).jpg"
  },
  {
    id: 11,
    category: "intro",
    image: "./img/pic(10).jpg"
  },
  {
    id: 12,
    category: "intro",
    image: "./img/pic(11).jpg"
  },
  {
    id: 13,
    category: "intro",
    image: "./img/pic(12).jpg"
  },
  {
    id: 14,
    category: "All",
    image: ",/img/pic(13).jpg"
  },
  {
    id: 15,
    category: "All",
    image: "./img/pic(14).jpg"
  },
  {
    id: 16,
    category: "All",
    image: "./img/pic(15).jpg"
  },
  {
    id: 17,
    category: "All",
    image: "./img/pic(16).jpg"
  },
  {
    id: 18,
    category: "intro",
    image: "./img/pic(17).jpg"
  },
]

window.addEventListener('DOMContentLoaded', ()=>{
  const displayPic = pictures.map((pic) =>{
    return `<div class="col-4">
            <img src="${pic.image}" alt="">
            </div> `
  })
  showPicture = displayPic.join('')
    photoGallery.innerHTML = showPicture;
})