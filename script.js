const reviews =[
    {
        id: 1,
        name: "Quincy Lerson",
        job: "web developer",
        img : "https://pbs.twimg.com/profile_images/1377353524661604356/DIMdJND1_400x400.jpg",
        
        text: "He currently lives in Texas with his family and spends his time working on freeCodeCamp, writing and interviewing authors for the freeCodeCamp publication"

    },
    {
        id: 2,
        name:"Mark Zuckerburg",
        job:"software engineer",
        img:"https://imageio.forbes.com/specials-images/imageserve/6514b8b2895c0a6e67b61263/Mark-Zuckerberg-by-Guerin-Blask-for-Forbes-89144-RGB2/1960x0.jpg?format=jpg&width=960",
        
        text: "ark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; born May 14, 1984) is an American businessman and philanthropist. He co-founded the social media service Facebook, along with his Harvard roommates in 2004, and its parent company Meta Platforms (formerly Facebook, Inc.), of which he is executive chairman, chief executive officer and controlling shareholder."
    },
    {
        id: 3,
        name: "Bill Gate",
        job: "Sofware Expert",
        img:"https://www.shutterstock.com/image-photo/paris-france-april-16-2018-260nw-1071441071.jpg",
        text:"William Henry Gates III (born October 28, 1955) is an American businessman, investor, philanthropist, and writer best known for co-founding the software giant Microsoft, along with his childhood friend Paul Allen."

    },
    {
        id: 4,
        name:"Elon Musk",
        job:"Software CEO",
        img:"https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376",
        text:"Elon Reeve Musk (/ˈiːlɒn/; EE-lon; born June 28, 1971) is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO of X Corp."
    }
]
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson()
})
function showPerson (){
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem =0;
    }
    showPerson()
})
prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem <0){
        currentItem = reviews.length -1;
    }
    showPerson()
})
randomBtn.addEventListener("click", function(){
currentItem=  Math.floor(Math.random() * reviews.length)
console.log(currentItem)
showPerson();
})









