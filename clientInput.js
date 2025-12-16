import { users } from './server.js'
let regb = document.getElementById('regbtnopen')

if(localStorage.getItem("input") == 'true'){
  location.assign('main.html')
} else {
  
}

function registerWindowOpen() {
  let key = Math.floor(Date.now() * Math.random() * 1e-2)
  console.log(key)
  let win = document.createElement("div")
  let ws = win.style
  ws.width = '90%'
  ws.position = 'fixed'
  ws.height = '500px'
  ws.left = '5%'
  ws.top = '50px'
  ws.border = '4px solid rgb(240,240,240)'
  ws.background = 'white'
  ws.borderRadius = '16px'
  document.body.appendChild(win)
  win.innerHTML += '<h1 style="position:absolute;top:calc(50% + 4*10px);left:calc(50% - 40%);width:80%;text-align:center;background:none;">Зарегистрируйтесь!</h1>'
  
  let closebtn = document.createElement("button")
  let cs = closebtn.style
  cs.width = '30px'
  cs.height = '30px'
  cs.borderRadius = '5px'
  cs.border = '1px solid black'
  cs.background = 'white'
  closebtn.innerText = '×'
  closebtn.onclick = () => {
    win.remove()
    regb.disabled = false
    return;
  }
  cs.position = 'absolute'
  cs.left = '10px'
  cs.top = '10px'
  cs.fontSize = '110%'
  cs.fontWeight = '100'
  win.appendChild(closebtn)
  
  let username = document.createElement("input")
  let ns = username.style
  ns.position = 'absolute'
  ns.width = '90%'
  ns.height = '50px'
  ns.borderRadius = '50px'
  ns.left = '5%'
  username.placeholder = 'введите своё имя'
  ns.top = '10%'
  ns.fontSize = '110%'
  ns.border = '1px solid black'
  ns.background = 'white'
  win.appendChild(username)
  
  let password = document.createElement("input")
  password.type = 'password'
  let ps = password.style
  ps.position = 'absolute'
  ps.width = '90%'
  ps.height = '50px'
  ps.borderRadius = '50px'
  ps.left = '5%'
  password.placeholder = 'введите свой пароль'
  ps.top = 'calc(20% + 10px)'
  ps.fontSize = '110%'
  ps.border = '1px solid black'
  ps.background = 'white'
  win.appendChild(password)
  
  let reppassword = document.createElement("input")
  reppassword.type = 'password'
  let rps = reppassword.style
  rps.position = 'absolute'
  rps.width = '90%'
  rps.height = '50px'
  rps.borderRadius = '50px'
  rps.left = '5%'
  reppassword.placeholder = 'повторите свой пароль'
  rps.top = 'calc(30% + 20px)'
  rps.fontSize = '110%'
  rps.border = '1px solid black'
  rps.background = 'white'
  win.appendChild(reppassword)
  
  let mail = document.createElement("input")
  mail.type = 'email'
  let ml = mail.style
  ml.position = 'absolute'
  ml.width = '90%'
  ml.height = '50px'
  ml.borderRadius = '50px'
  ml.left = '5%'
  mail.placeholder = 'электронная почта (опционально)'
  ml.top = 'calc(40% + 10px * 3)'
  ml.fontSize = '110%'
  ml.border = '1px solid black'
  ml.background = 'white'
  win.appendChild(mail)
  
  let inputBtn = document.createElement("button")
  let bs = inputBtn.style
  bs.position = 'absolute'
  bs.bottom = '10px'
  bs.width = '300px'
  bs.height = '50px'
  bs.fontSize = '110%'
  bs.fontWeight = '100'
  bs.background = 'linear-gradient(45deg, #ddd, #aaa)'
  bs.border = '1px solid black'
  bs.borderRadius = '10px'
  bs.left = 'calc(50% - 150px)'
  inputBtn.innerText = 'регистрация'
  win.appendChild(inputBtn)
  
  
  inputBtn.onclick = () => {
    if (!Object.keys(users).includes(username.value) && username.value.length > -1 && username.value.length < 12 && username.value.length > 2) {
      if (password.value == reppassword.value && password.value.length >= 8 ) {
        
        users[username.value] = {
          password: password.value,
          name: username.value,
          key: key,
          email: mail.value,
          description: '',
        }
        
        console.log('новый юзер: ' + users[username.value].name, 'password:', users[username.value].password)
        
        alert("отлично! теперь войдите в систему, чтобы пользоваться нашим сервисом")
        
        win.remove()
        regb.disabled = false
        return
        
      } else {
        alert("вы не верно повторили пароль! Либо он меньше 8 симвалов!")
      }
    } else {
      alert('простите, но такое имя уже существует или оно меньше 5 символов!')
    }
  }
  setTimeout(()=>{
    regb.disabled = false
  }, 1000)
}

regb.addEventListener("click", (e) => {
  registerWindowOpen()
  regb.disabled = true
})

let inpb = document.getElementById("inpb")
inpb.addEventListener("click", () => {
  input()
  inpb.disabled = true
})

function input() {
  let win = document.createElement("div")
  let ws = win.style
  ws.width = '90%'
  ws.position = 'fixed'
  ws.height = '500px'
  ws.left = '5%'
  ws.top = '50px'
  ws.border = '4px solid rgb(240,240,240)'
  ws.background = 'white'
  ws.borderRadius = '16px'
  document.body.appendChild(win)
  win.innerHTML += '<h1 style="position:absolute;top:calc(50% + 4*10px);left:calc(50% - 40%);width:80%;text-align:center;background:none;">войдите!</h1>'
  
  let closebtn = document.createElement("button")
  let cs = closebtn.style
  cs.width = '30px'
  cs.height = '30px'
  cs.borderRadius = '5px'
  cs.border = '1px solid black'
  cs.background = 'white'
  closebtn.innerText = '×'
  closebtn.onclick = () => {
    win.remove()
    regb.disabled = false
    return;
  }
  cs.position = 'absolute'
  cs.left = '10px'
  cs.top = '10px'
  cs.fontSize = '110%'
  cs.fontWeight = '100'
  win.appendChild(closebtn)
  
  let username = document.createElement("input")
  let ns = username.style
  ns.position = 'absolute'
  ns.width = '90%'
  ns.height = '50px'
  ns.borderRadius = '50px'
  ns.left = '5%'
  username.placeholder = 'введите своё имя'
  ns.top = '10%'
  ns.fontSize = '110%'
  ns.border = '1px solid black'
  ns.background = 'white'
  win.appendChild(username)
  
  let password = document.createElement("input")
  password.type = 'password'
  let ps = password.style
  ps.position = 'absolute'
  ps.width = '90%'
  ps.height = '50px'
  ps.borderRadius = '50px'
  ps.left = '5%'
  password.placeholder = 'введите свой пароль'
  ps.top = 'calc(20% + 10px)'
  ps.fontSize = '110%'
  ps.border = '1px solid black'
  ps.background = 'white'
  win.appendChild(password)
  
  let inputBtn = document.createElement("button")
  let bs = inputBtn.style
  bs.position = 'absolute'
  bs.bottom = '10px'
  bs.width = '300px'
  bs.height = '50px'
  bs.fontSize = '110%'
  bs.fontWeight = '100'
  bs.background = 'linear-gradient(45deg, #ddd, #aaa)'
  bs.border = '1px solid black'
  bs.borderRadius = '10px'
  bs.left = 'calc(50% - 150px)'
  inputBtn.innerText = 'вход'
  win.appendChild(inputBtn)
  
  
  inputBtn.onclick = () => {
    if(Object.keys(users).includes(username.value)){
      if(users[username.value].password == password.value){
        alert("вы вошли!")
        localStorage.setItem("input", 'true')
        localStorage.setItem('userinfo', JSON.stringify(users[username.value]))
        location.assign("main.html")
      } else {
        alert('Пароль введён не верно!')
      }
    } else {
      alert('Такого пользователя нет.')
    }
  }
  
}