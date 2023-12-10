

// The landing page
const signIn = () => {
    window.location.href = "signin.html"
}

const signUp = () => {
    window.location.href = "signup.html"
}




// Signup validations
var allCustomers = [];
if(localStorage.customerDetails){
    allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
}

function goSignUp(){
    var newCustomer = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : email.value,
        phoneNumber : phonenumber.value,
        password : Password.value
    }
    
    
    if((firstName = firstname.value) && (lastName = lastname.value) && (Email = email.value) && (phoneNumber = phonenumber.value) && (password = Password.value)){
        allCustomers.push(newCustomer)
        firstname.value = ""
        lastname.value = ""
        email.value = ""
        phonenumber.value = ""
        Password.value = ""
        window.location.href = "signin.html"
    }
    else{
        alert("PLEASE FILL THE REQUIRED SPACES")
    }
    localStorage.setItem('customerDetails', JSON.stringify(allCustomers))
}

function goLogIn() {
    window.location.href= "signin.html"
}

function goGoSignUP() {
    window.location.href ="signup.html"
}

// Signin validation
function logIn(){
    var myUsername = userName.value
    var userPassword = passWord.value
    var allCustomers = JSON.parse(localStorage.getItem("customerDetails"))
    var found = false
for (let index = 0; index < allCustomers.length; index++) {
    if(allCustomers[index].firstName==myUsername && allCustomers[index].password==userPassword){    
       found = true
    //    show.innerText = "GOOD"
        alert("GOOD")

    }
}
if(found){
    window.location.href = "Home.html"
}else{
    // show.innerText = "INVALID"
    alert("INVALID")
}
}


// Home Page
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    
    
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
}
function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();

// const price = document.querySelector(".price").value
// const itemImg = document.querySelector(".item-img").value
// const itemTitle = document.querySelector("item-title").value

// const cart = []
// function addToCart(item){
// cart.push(item)
// }


// async function ade(){
//     const url = "https://jsonplaceholder.typicode.com/photos"
//    const data = await fetch(url)
//    const res = await data.json()
//    console.log(res)
// }
// ade()