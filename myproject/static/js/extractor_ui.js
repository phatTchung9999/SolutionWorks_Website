const first = document.getElementById('first');
const second = document.getElementById('second');
const dropBox = document.getElementById('drop-box');
const fileInput = document.getElementById('file-input');
const previewImage = document.getElementById('image-preview');
const inputText = document.getElementById('input-text');
const uploadBtn = document.getElementById('upload-btn');
const extractBtn = document.getElementById('extract-btn');
const resultBox = document.getElementById('result-box');

            let currentFile = null;


            dropBox.ondragover = function(e) {
                e.preventDefault();
                dropBox.style.opacity = 0.5;
            }
            dropBox.ondragleave = function() {
                dropBox.style.opacity = 1;
            }
            dropBox.onclick = function() {
                fileInput.click();
            }
            uploadBtn.onclick = function(e) {
                e.stopPropagation();
                fileInput.click();
            }
            dropBox.ondrop = function(e) {
                e.preventDefault();
                dropBox.style.opacity = 1;
                const file = e.dataTransfer.files[0];
                if(file) {
                    handleFile(file);
                };
            }
            fileInput.onchange = function() {
                const file = fileInput.files[0];
                if(file) {
                    handleFile(file);
                }
            }
            extractBtn.onclick = function() {
                if(!currentFile){
                    alert('Please upload an image first.');
                    return;
                }
                first.classList.add('d-none');
                second.style.display = 'block';
                extractText(currentFile);
            }


            function handleFile(file) {
                if (!file.type.startsWith("image/")){
                    alert("We accept the image file only!");
                    return;
                }

                currentFile = file;
                showPreview(file);
                document.getElementById('upload-part').style.display = 'none';
                document.getElementById('extract-part').style.display = 'block';
            }

            function showPreview(file) {
                
                const reader = new FileReader();

                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    inputText.textContent = file.name;
                }

                reader.readAsDataURL(file);
            }

            function removeFile() {
                fileInput.value = '';
                currentFile = null;
                previewImage.src = '/static/images/image.png';
                inputText.textContent = "Drag and Drop your files here";
                resultBox.textContent = "No text yet";
                document.getElementById('upload-part').style.display = 'block';
                document.getElementById('extract-part').style.display = 'none';
                first.classList.remove('d-none');
                second.style.display = 'none';

            }

            function extractText(file) {
                resultBox.textContent = "Extracting text... Please wait.";

                Tesseract.recognize(
                    file,
                    "eng",
                    {
                        logger: function(info) {
                            console.log(info);
                        }
                    }
                )
                .then(function({ data: { text } }) {
                    resultBox.textContent = text.trim() || "No text found.";
                })
                .catch(function(error) {
                    console.error(error);
                    resultBox.textContent = "Error extracting text.";
                });
            }