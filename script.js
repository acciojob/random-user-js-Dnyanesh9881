//your code here

let user =document.querySelector(".user");
let gettingUser=document.getElementById("getUser");
let image =document.querySelector(".img");
let description =document.querySelector(".description");
let name =document.querySelector(".name");
let age=document.getElementById("ageBtn");
let email=document.getElementById("emailBtn");
let phone=document.getElementById("phoneBtn");
let mockResponseOne;
async function fetchUser(){
    const res=await fetch("https://randomuser.me/api/");
	const data=await res.json();
	// console.log(data)
	mockResponseOne=data;
	image.src=`${mockResponseOne.results[0].picture.large}`;
	name.innerText=`${mockResponseOne.results[0].name.first} ${mockResponseOne.results[0].name.last}`
	description.innerText="";
	console.log(mockResponseOne.results[0]);
}
fetchUser();
gettingUser.addEventListener("click", ()=>{
	fetchUser();
})
age.addEventListener("click", ()=>{
	description.innerText=`${mockResponseOne.results[0].dob.age}`;
})
email.addEventListener("click", ()=>{
	description.innerText=`${mockResponseOne.results[0].email}`;
})
phone.addEventListener("click", ()=>{
	description.innerText=`${mockResponseOne.results[0].phone}`;
})
	





