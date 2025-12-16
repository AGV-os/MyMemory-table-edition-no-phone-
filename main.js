let saveData = (value, key) => {
  localStorage.setItem(key, JSON.stringify(value))
}
let getData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

function idGet(id) {
  return document.getElementById(id)
}

function log(t) {
  console.log(t)
}
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Текст скопирован: ' + text);
  } catch (err) {
    console.error('Ошибка копирования: ', err);
  }
}
function downloadImage(url, filename = 'image.png') {
    // Создаем временную ссылку
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Добавляем на страницу, кликаем и удаляем
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



let p = document.getElementById('p')

let info = JSON.parse(localStorage.getItem('userinfo'))

console.log(info.name + ', добро пожаловать!')
document.getElementById("name").innerText = info.name



let addbtn = document.getElementById('addFileBtn')
if (innerWidth < 700) {
  addbtn.innerText = '+'
  addbtn.style.width = '50px'
} else {
  
}
let profEditWin = document.getElementById("editProfilWin")
let xprof = -100


function closeProfEditWin() {
  const anim = setInterval(() => {
    document.getElementById("acPole").style.display = 'none'
    document.getElementById("closeprof").style.display = 'none'
    xprof -= 10
    if (xprof <= -100 - innerWidth * 0.9) {
      document.getElementById("acPole").style.display = 'block'
      document.getElementById("closeprof").style.display = 'block'
      clearInterval(anim)
      return
    }
    profEditWin.style.left = xprof + 'px'
  }, 1)
  
}

function openProfEditWin() {
  const anim = setInterval(() => {
    xprof += 10
    document.getElementById("acPole").style.display = 'none'
    document.getElementById("closeprof").style.display = 'none'
    if (xprof >= innerWidth - innerWidth * 0.9 - 50) {
      document.getElementById("acPole").style.display = 'block'
      document.getElementById("closeprof").style.display = 'block'
      clearInterval(anim)
      return
    }
    profEditWin.style.left = xprof + 'px'
  }, 1)
  
}
let openProf = false
document.getElementById("acPole").addEventListener("click", () => {
  openProf = !openProf
  if (openProf) {
    openProfEditWin()
  }
})
document.getElementById("closeprof").addEventListener("click", () => {
  openProf = !openProf
  if (!openProf) {
    closeProfEditWin()
  }
})





// Функция 1: Сохраняет картинку в localStorage
document.getElementById("nameprof").innerText = JSON.parse(localStorage.getItem("userinfo"))['name']
document.getElementById("description").innerText = JSON.parse(localStorage.getItem('userinfo'))['description']




function saveDescr() {
  let t = document.getElementById("description").value
  alert('сохранено!: ' + t)
  localStorage.setItem('USER_DESCRIPTION', t)
}


function saveImage(input) {
  if (!input.files[0]) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    localStorage.setItem('image', e.target.result);
    // Сразу показываем
    document.getElementById('img').src = e.target.result;
    document.getElementById('img2').src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}

// Функция 2: Возвращает картинку из localStorage
function getImage() {
  return localStorage.getItem('image');
}

// Вешаем обработчик
document.getElementById('fileInput').addEventListener('change', function() {
  saveImage(this);
});

// Загружаем при старте если есть
const saved = getImage();
if (saved) {
  document.getElementById('img').src = saved;
  document.getElementById('img2').src = saved;
}

function newsaveImage(input, imgSurId) {
  if (!input.files[0]) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    localStorage.setItem('imageObj', e.target.result);
    // Сразу показываем
    document.getElementById(imgSurId).src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}

// Функция 2: Возвращает картинку из localStorage
function newgetImage() {
  return localStorage.getItem('imageObj');
}

document.getElementById("objectFileOp").addEventListener("change", (e) => {
  newsaveImage(document.getElementById('objectFileOp'),
    'opObjImgPre')
})
const saved2 = newgetImage();
if (saved2) {
  document.getElementById('opObjImgPre').src = saved;
}
let allSrc = []
if (!localStorage.getItem('undefCount')) {
  localStorage.setItem('undefCount', '0')
}

function saveObject(name, src) {
  if (name == '') {
    localStorage.setItem('undefCount', Number(localStorage.getItem('undefCount')) + 1)
    name = 'неизвестный ' + localStorage.getItem('undefCount')
  }
  allSrc.push([name, src])
  saveData(allSrc, 'SRCIMGSOBJECTS')
  location.reload()
}
window.onload = () => {
  document.getElementById("description").innerText = localStorage.getItem("USER_DESCRIPTION")
  
  if (localStorage.getItem('SRCIMGSOBJECTS')) {
    allSrc = getData('SRCIMGSOBJECTS')
  } else {
    allSrc = []
  }
  for (let i = 0; i < allSrc.length; i++) {
    let id = Math.floor(Date.now() * Math.random()) + '_' + i
    let ind = id.split("_")[1]
    
    function del(index, id) {
      if (confirm("вы точно хотите удалить этот обьект?")) {
        //document.getElementById(id).remove()
        
        let u = JSON.parse(localStorage.getItem("SRCIMGSOBJECTS"))
        
        u.splice(index, 1)
        
        localStorage.setItem('SRCIMGSOBJECTS', JSON.stringify(u))
        
        location.assign("main.html")
      }
    }
    
    function getSrc(index) {
      let src = getData('SRCIMGSOBJECTS')
      
      if (confirm('вы точно хотите скачать?')) {
        downloadImage(src[index][1])
        console.log((src[index][1]))
      }
    }
    
    window.getSrc = getSrc
    window.del = del
    
    idGet("surface").innerHTML += `
        <div id="${id}" style="
          position: relative;
          width:200px;
          height: 400px;
          border: 2px solid #988;
          border-radius: 16px;
          background: radial-gradient(#fff, #fda);
        " class="object">
        
        <p style="font-weight:100;font-size:150%;position:absolute;top:200px;width:200px;text-align:center;background:none;text-shadow:2px 2px 5px #111;">${allSrc[i][0]}</p>
        
        <img style="position: absolute;border-radius:16px;" width="200px;" height="200px" src="${allSrc[i][1]}">
        
        <button style="position:absolute;top:300px;width:80%;left:10%;background: #800;border-radius:10px;font-size:120%;color:white;border: 2px solid #f00;" onclick="del(${ind}, ${id})">удалить</button>
        
        <button style="position:absolute;top:340px;width:80%;left:10%;background: #080;border-radius:10px;font-size:120%;color:white;border: 2px solid #0f0;" href>скачать</button>
        
        </div>
        `
    
  }
  log(allSrc)
}





function deleteAccaunt() {
  if (confirm('ты точно хочешь удалить аккаунт?')) {
    if (confirm('ты ТОЧНО уверен в своём решении?')) {
      if (confirm('ты уверен на все 500%!?!?!?!?!?')) {
        if (confirm('ну ладно... кнопка "ок" сейчас удалит твой аккаунт!')) {
          localStorage.clear()
          location.assign('index.html')
          return;
        }
      }
    }
  }
  alert('вот и молодец')
}