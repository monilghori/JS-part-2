const send = document.getElementById('btn')


send.addEventListener('click',(e) => {

    const ip = document.getElementById('name').value

    const xtp = new XMLHttpRequest()

    xtp.open('GET' , `https://api.api-ninjas.com/v1/weather?city=${ip}`,true)
    xtp.setRequestHeader("X-Api-Key" ,"VX2yOX2vuJN0f66n27nvFg==3cFWskqUKUYgQFlC" )

    xtp.onreadystatechange = function(){

        if(xtp.readyState == 4 && xtp.status == 200)
        {
            let data = JSON.parse(xtp.responseText)

            const rs = document.getElementById('rs')

            // rs.textContent = data
            console.log(data)
            rs.innerHTML = `temp : ${data['temp']}`
        }
    }
    xtp.send()
})