//your code here

let user =document.querySelector(".user");
let gettingUser=document.getElementById("getUser");
let userData=[];
async function fetchUser(){
    let res=await fetch("https://randomuser.me/api/");
	let data=await res.json();
	// console.log(data)
	userData=data.results;
	console.log(userData);
}
fetchUser();
gettingUser.addEventListener("click", ()=>{
	fetchUser();
})

