//your code here

let user =document.querySelector(".user");
let gettingUser=document.getElementById("getUser");
let image =document.querySelector(".img");
let description =document.querySelector(".description");
let name =document.querySelector(".name");

let userData;
async function fetchUser(){
    const res=await fetch("https://randomuser.me/api/");
	const data=await res.json();
	// console.log(data)
	userData=data.results[0];
	console.log(userData);
}
fetchUser();
gettingUser.addEventListener("click", ()=>{
	fetchUser();
})
if(userData){
	image.src=`${userData.picture.medium}`;
	name.innerText=`${userData.name.first} ${userData.name.last}`
}




