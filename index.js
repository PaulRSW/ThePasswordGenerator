
let elPassword1 = document.getElementById("el-password1")
let elPassword2 = document.getElementById("el-password2")
let elNumPw = document.getElementById("el-num-pw")
document.getElementById("el-num-pw").defaulvalue = 15

function generatePasswords() {
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let elNumPw = document.getElementById("el-num-pw").value

let passLength = 0	
let passwd = ""
let passwd2 = ""

console.log(elNumPw)


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
	console.log(passwd)
}

function copy(){
		let copyText = document.getElementById("el-password1")
		
		//console.log(copypassword)
		copyText.select()
		copyText.setSelectionRange(0,99999)
		
		navigator.clipboard.writeText(copyText.value)
		  alert("Copied the text: " + copyText.value)
}

undefined