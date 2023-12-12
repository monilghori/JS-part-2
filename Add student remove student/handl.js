let res = document.querySelector('form')

res.addEventListener('submit',(e) => {

    e.preventDefault()

    const l = document.createElement('li')

    let n = document.getElementById('name').value + ""
    let s = document.getElementById('sem').value + ""
    let email = document.getElementById('email').value + ""

    console.log(n)

    // HARD-CODED
    // l.innerHTML = `<pre>student information
    //                 <div class = "name">  name  : ${n}</div>
    //                 <div class = "sem">   sem   : ${s}</div>
    //                 <div class = "email"> email : ${email}</div>
    //                 </pre> `


    const divname = document.createElement('div')
    const divsem = document.createElement('div')
    const divemail = document.createElement('div')

    divname.setAttribute('class','name')
    divsem.setAttribute('class','sem')
    divemail.setAttribute('class','email')

    divname.textContent = `name  : ${n}`
    divsem.textContent = `sem   : ${s}`
    divemail.textContent = `email : ${email}`

    l.appendChild(divname)
    l.appendChild(divsem)
    l.appendChild(divemail)

    const ul = document.getElementById('uli')

    const b = document.createElement('button')
    b.textContent = 'remove'

    b.addEventListener('click',(e) => {

        ul.removeChild(l)

    })

    l.appendChild(b)
    ul.appendChild(l)
    document.getElementById('name').value = ""
    document.getElementById('sem').value = ""
    document.getElementById('email').value = ""
})

const cname = document.querySelector('#cnamebtn')
const csem = document.getElementById('csembtn')
const cemail = document.getElementById('cemailbtn')

cname.addEventListener('click',(e) => {
    let n = document.querySelectorAll('.name')
    console.log("clicked")
    for(i of n)
    {
        i.style.color = 'red'
    }
})

csem.addEventListener('click',(e) => {
    let n = document.querySelectorAll('.sem')

    for(i of n)
    {
        i.style.color = 'blue'
    }
})

cemail.addEventListener('click',(e) => {
    let n = document.querySelectorAll('.email')
    for(i of n)
    {
        i.style.color = 'green'
    }
    
})

const reset = document.getElementById('reset')

reset.addEventListener('click' , (e) => {
    let ul = document.getElementById('uli')

    // CLEAR ALL DATA
    // while(ul.firstChild)
    // {
    //     ul.removeChild(ul.firstChild)
    // }

    const nodes = ul.childNodes

    for (i of nodes)
    {
        const dives = i.childNodes

        for (j of dives)
        {
            j.style.color = 'wheat'
        }
    }

})