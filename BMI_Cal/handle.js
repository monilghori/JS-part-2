const f=document.querySelector('form')

f.addEventListener('submit',function(e){
    
    e.preventDefault()


    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const rs=document.querySelector('#results')
    let n

    if(h==='' || isNaN(h) || h < 0)
    {
        rs.innerHTML='<h3 style="color: red;">Height is invalide!!</h3>'
    }
    
    else if(w==='' || isNaN(w) || w < 0)
    {
        rs.innerHTML='<h3 style="color: red;">Weight is invalide!!</h3>'
    }
    else{
        n=(w/((h*h)/10000)).toFixed(2);
        if(n<18.6){
            rs.innerHTML=` <h3>${n}</h3>
                           <h2>You are in Under Weight.</h2>`
        }
        else if(n > 18.6 && n < 24.9){
            rs.innerHTML=`<h3>${n}</h3>
                          <h2>You are in Normal range.</h2>`
        }
        else{
            rs.innerHTML=`<h3>${n}</h3>
                          <h2>You are in OverWeight</h2>`
        }   
    }
});




