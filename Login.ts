interface Iname{
    value :string 
}

const login  =() : void =>{
    const username :HTMLElement = document.getElementById('username')
    const password:HTMLElement = document.getElementById('password')
    if(username){
       const name = ((username as unknown) as Iname).value
   
    if(name == ''){
        alert("Please provide username")
    }
    localStorage.setItem('username',name)

    }
    if(password){
        const secret= ((password as unknown) as Iname).value
        if(secret.length < 6){
            alert("Password should have atleast 6 characters")

        }
        localStorage.setItem('password',secret)
    }
  window.location.href= 'TodoTs.html'
   
  

    
    
}

function persist(){
   ((document.getElementById('username')as unknown) as Iname).value = localStorage.getItem('username'),
   ((document.getElementById('password')as unknown) as Iname).value = localStorage.getItem('password')
   
}

