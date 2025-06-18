let resultCont = document.querySelector(".resultCont");

let btn = document.querySelector(".btn button")
// let result = {
    
//   "tag": "",
//   "free": true,
//   "role": false,
//   "user": "parthswami702",
//   "email": "parthswami702@gmail.com",
//   "score": 0.64,
//   "state": "deliverable",
//   "domain": "gmail.com",
//   "reason": "valid_mailbox",
//   "mx_found": true,
//   "catch_all": null,
//   "disposable": false,
//   "smtp_check": true,
//   "did_you_mean": "",
//   "format_valid": true
// }

let submit = btn.addEventListener("click",async(e) => {
  e.preventDefault;
  console.log("clicked!")
  let key = "ema_live_2hBosgQIeDk9SuvRltT4ZJ09RTtPYuW47WCpIAPV";
let email = document.querySelector(".emailbox input").value;
let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res = await fetch(url)
let result = await res.json()
  let str = ``
  for (key of Object.keys(result)){
      str = str + `<div>${key}${" = "+result[key]}</div>`;
     
  }
  resultCont.innerHTML = str;
})













    
   