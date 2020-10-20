var getUserName = function () {
    var username = document.getElementById('user');
    var user = localStorage.getItem('username');
    username.innerHTML = user;
};
function addTodo() {
    var node = document.createElement("Li");
    var todo = document.getElementById('todo').value;
    if (todo.length < 10) {
        alert("Todo Should have atleast 10 characters");
    }
    var text = document.createTextNode(todo);
    node.appendChild(text);
    document.getElementById('list').appendChild(node);
    {
        var node_1 = document.createElement('Li');
        var today = new Date().toDateString().split(' ')[1];
        var date = new Date().toDateString().split(' ')[2];
        var format = date + " " + today;
        var textnode = document.createTextNode(format);
        node_1.appendChild(textnode);
        document.getElementById('date').appendChild(node_1);
    }
}
function removeItem() {
    var itemToRemove = document.getElementById('list');
    var DateRemove = document.getElementById('date');
    itemToRemove.removeChild(itemToRemove.childNodes[0]);
    DateRemove.removeChild(DateRemove.childNodes[0]);
}
