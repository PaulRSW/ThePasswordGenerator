
let elPassword1 = document.getElementById("el-password1")
let elPassword2 = document.getElementById("el-password2")
let elNumPw = document.getElementById("el-num-pw")
let copy1Btn = document.getElementById("copy1-btn")
let copy2Btn = document.getElementById("copy2-btn")
console.log(copy1Btn)
 

let slider = document.getElementById("myrange")
let output = document.getElementById("demo")
let pwlen = slider
output.innerHTML = slider.value


console.log(slider)

slider.oninput = function() {
 console.log("Test")
	output.innerHTML = this.value
	pwlen = this.value
	
}
console.log(pwlen)

function generatePasswords() {
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

reset_btn()
let elNumPw =  pwlen
let passLength = 0	
let passwd = ""
let passwd2 = ""

// console.log(elNumPw)


if (elNumPw === ""){
	passLength = 15	
} else if (elNumPw>0){
	passLength = elNumPw
} else {
	passLength = 15	
}

	for (let i = 0; i<passLength; i++){
			passwd += characters[Math.floor(Math.random() * characters.length )+ 1]
			passwd2 += characters[Math.floor(Math.random() * characters.length )+ 1]
	}
	

	elPassword1.textContent = passwd
	elPassword2.textContent = passwd2
	// console.log(passwd)
}


copy1Btn.addEventListener("click", function() {

	let copyText = elPassword1.textContent
    navigator.clipboard.writeText(copyText).then(
    function () {
      console.log('Async: Copying to clipboard was successful!')
		copy1Btn.textContent = "Copied!"
		copy2Btn.textContent = "Copy Password"
    },
    function (err) { // this is the fail case
      console.error('Async: Could not copy text: ', err)
    }
  )
    console.log(copyText)
})
copy2Btn.addEventListener("click", function() {

	let copyText = elPassword1.textContent
    navigator.clipboard.writeText(copyText).then(
    function () {
      console.log('Async: Copying to clipboard was successful!')
		copy2Btn.textContent = "Copied!"
		copy1Btn.textContent = "Copy Password"
    },
    function (err) { // this is the fail case
      console.error('Async: Could not copy text: ', err)
    }
  )
    console.log(copyText)
})

function reset_btn(){
	copy1Btn.textContent = "Copy Password"
    copy2Btn.textContent = "Copy Password"
}