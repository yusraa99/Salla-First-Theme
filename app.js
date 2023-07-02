const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products=[
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"./img/air.png",
            },
            {
                code:"darkblue",
                img:"./img/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"Jordan",
        price:149,
        colors:[
            {
                code:"lightgray",
                img:"./img/jordan.png",
            },
            {
                code:"green",
                img:"./img/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title:"Blazer",
        price:120,
        colors:[
            {
                code:"lightgray",
                img:"./img/blazer.png",
            },
            {
                code:"green",
                img:"./img/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title:"Carter",
        price:150,
        colors:[
            {
                code:"black",
                img:"./img/crater.png",
            },
            {
                code:"lightgray",
                img:"./img/carter2.png",
            },
        ],    
    },
    {
        id:5,
        title:"Hippie",
        price:163,
        colors:[
            {
                code:"gray",
                img:"./img/hippie.png",
            },
            {
                code:"black",
                img:"./img/hippie2.png",
            },
        ],
    },
]



let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

const productButton=document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")


menuItems.forEach((item, index) => {

    item.addEventListener("click", () => {
        // console.log("you clicked!"+index);
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        
        // change the choosen product
        choosenProduct=products[index]

        // change text of current product
        currentProductTitle.textContent=choosenProduct.title
        currentProductPrice.textContent="$ "+choosenProduct.price
        currentProductImg.src=choosenProduct.colors[0].img

        // assing new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code
        })
    });
});


currentProductColors.forEach((color, index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})


productButton.addEventListener("click",()=>{
    // payment.style.display="flex";
    payment.style.display="flex"
    // console.log("click")
});

close.addEventListener("click",()=>{
    payment.style.display="none";
});