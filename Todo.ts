const getUserName =() :void=>{
    const username  = document.getElementById('user')
    let user = localStorage.getItem('username')
    username.innerHTML= user
}
   


function addTodo() : void{
    const node:HTMLElement = document.createElement("Li")
    const todo :string = (<HTMLInputElement>document.getElementById('todo')).value
    if(todo.length<10){
        alert("Todo Should have atleast 10 characters")
    }
    const text = document.createTextNode(todo)
    node.appendChild(text)
    document.getElementById('list').appendChild(node)


 {
    const node : HTMLElement=document.createElement('Li')
    const today=new Date().toDateString().split(' ')[1]
    const date=new Date().toDateString().split(' ')[2]
    const format :string= date + " " + today
    const textnode = document.createTextNode(format)
    node.appendChild(textnode)
    document.getElementById('date').appendChild(node)
 }
}

function removeItem(){
    const  itemToRemove = document.getElementById('list');
        const DateRemove = document.getElementById('date');
        itemToRemove.removeChild(itemToRemove.childNodes[0])
        DateRemove.removeChild(DateRemove.childNodes[0])
        
}
