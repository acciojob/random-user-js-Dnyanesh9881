//your code here

let user =document.querySelector(".user");
let gettingUser=document.getElementById("getUser");
let image =document.querySelector(".img");
let description =document.querySelector(".description");
let name =document.querySelector(".name");
let age=document.getElementById("ageBtn");
let email=document.getElementById("emailBtn");
let phone=document.getElementById("phoneBtn");
let userData;
async function fetchUser(){
    const res=await fetch("https://randomuser.me/api/");
	const data=await res.json();
	// console.log(data)
	userData=data.results[0];
	image.src=`${userData.picture.medium}`;
	name.innerText=`${userData.name.first} ${userData.name.last}`
	description.innerText="";
	console.log(userData);
}
fetchUser();
gettingUser.addEventListener("click", ()=>{
	fetchUser();
})
age.addEventListener("click", ()=>{
	description.innerText=`${userData.dob.age}`;
})
email.addEventListener("click", ()=>{
	description.innerText=`${userData.email}`;
})
phone.addEventListener("click", ()=>{
	description.innerText=`${userData.phone}`;
})
	





