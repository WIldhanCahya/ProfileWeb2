// Underline NavButton
const path = window.location.pathname
if (path.includes('index')) {
    document.getElementById('home').classList.add('underline')
} else if(path.includes('about')){
    document.getElementById('about').classList.add('underline')
} else if(path.includes('contact')){
    document.getElementById('contact').classList.add('underline')
}


// dropdownd
function show() {
    document.getElementById('dropdown').classList.toggle('show')
}

window.onclick = function(event) {
    if (!event.target.closest('.hamburger')) {
        let dropdown = document.getElementsByClassName('dropdown-content')
        let i;
        for(i = 0; i<dropdown.length; i++) {
            let openDropdown = dropdown[i]
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}
// Dark Mode
function dark() {
    document.body.classList.toggle('dark')
}


// Arrow
let num = 0

const arrow = () => {
    let arrow = document.getElementById('arrow')
    let name = document.getElementById('contName')
   
    
    name.classList.toggle('arrowShow')
    name.classList.toggle("contNameNoAfter")

    if (arrow.classList.contains('fa-arrow-down')) {
        arrow.classList.replace('fa-arrow-down', 'fa-arrow-up')
    } else {
        arrow.classList.replace('fa-arrow-up', 'fa-arrow-down') 
    }
}



// Form 
document.getElementById('btnSubmit').addEventListener('click', (e) => {
    e.preventDefault()
    let input = document.querySelectorAll('.inputContact')
    let valid = true
    input.forEach(el => {
        if (!el.value) {
            el.classList.add('inputError')
            valid = false
        } else {
            el.classList.remove('inputError')
        }  
    })
    
    const isDark = document.body.classList.contains('dark')
    
if(!valid) {
    Swal.fire({
      icon: 'error',
      title: 'Oops',
      text: 'isi Semua Form Yang Ada!',
        background: isDark ? '#222' : '#fff',
  color: isDark ? '#fff' : '#000',
  confirmButtonColor: '#88bdf2'
    })
} else {
        Swal.fire({
             icon: 'success',
              text: 'Berhasil',
            background: isDark ? '#222' : '#fff',
        color: isDark ? '#fff' : '#000',
         confirmButtonColor: '#88bdf2' 
        }).then(() => {
      window.location.reload()
    })
}

})

let date = new Date()
let year = date.getFullYear()
document.getElementById('date').innerText = year
