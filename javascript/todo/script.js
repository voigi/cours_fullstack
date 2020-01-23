var taskText = document.querySelector('#taskText');
var tasks = document.querySelector('#tasks');

taskText.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && taskText.value) {
        var text = document.createTextNode(taskText.value);
        // var li = '<li>' + text + '<li>';
        var li = document.createElement('li');
        li.appendChild(text);
        tasks.appendChild(li);

        
    }
});
