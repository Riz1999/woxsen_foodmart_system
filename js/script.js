// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1200,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

const options = document.querySelectorAll("label");
    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", ()=>{
        for (let j = 0; j < options.length; j++) {
          if(options[j].classList.contains("selected")){
            options[j].classList.remove("selected");
          }
        }
        options[i].classList.add("selected");
        for (let k = 0; k < options.length; k++) {
          options[k].classList.add("selectall");
        }
        let forVal = options[i].getAttribute("for");
        let selectInput = document.querySelector("#"+forVal);
        let getAtt = selectInput.getAttribute("type");
        if(getAtt == "checkbox"){
          selectInput.setAttribute("type", "radio");
        }else if(selectInput.checked == true){
          options[i].classList.remove("selected");
          selectInput.setAttribute("type", "checkbox");
        }
        let array = [];
        for (let l = 0; l < options.length; l++) {
          if(options[l].classList.contains("selected")){
            array.push(l);
          }
        }
        if(array.length == 0){
          for (let m = 0; m < options.length; m++) {
            options[m].removeAttribute("class");
          }
        }
      });
    }