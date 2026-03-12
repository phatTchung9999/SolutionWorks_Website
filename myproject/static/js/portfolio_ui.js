const templateBox = document.getElementById('template-box');
const templateDrop = document.getElementById('template-drop');
const toolBox = document.getElementById('tool-box');
const toolDrop = document.getElementById('tool-drop')



templateBox.onmouseover = function() {
    templateBox.style.opacity = 0.8;
}
templateBox.onmouseleave = function() {
    templateBox.style.opacity = 1;
}

templateBox.onclick = function() {
    templateDrop.style.display = 
        templateDrop.style.display === 'none'? 'grid': 'none';
}

toolBox.onmouseover = function() {
    toolBox.style.opacity = 0.8;
}
toolBox.onmouseleave = function() {
    toolBox.style.opacity = 1;
}

toolBox.onclick = function() {
    toolDrop.style.display = 
        toolDrop.style.display === 'none'? 'grid': 'none';
}