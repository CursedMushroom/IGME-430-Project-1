const handleResponse = async (response, parseResponse) => {
    const content = document.querySelector('#temp');
    content.innerHTML = `<p></p>`
    if (parseResponse) {
        const obj = await response.json();
        content.innerHTML += `<p>${JSON.stringify(obj)}</p>`
    } else {
        content.innerHTML += `<p> Meta Data Recieved</p>`;
    }
};

const sendPost = async (mediaForm) => {
    const nameAction = document.querySelector('#media-add-button').value;
    const nameMethod = 'post';

    const titleField = mediaForm.querySelector('#title');
    

    const formData = `title=${titleField.value}`;
    let response = await fetch(nameAction, {
        method: nameMethod,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
        body: formData,
    });
    handleResponse(response);
};


const init = () => {

    const submitButton = document.querySelector('#media-add-button');
    const clearButton = document.querySelector('#media-stop-button');
    const mediaForm = document.querySelector('.media-contain');
    console.log(clearButton);
    const clearButtonSumbit = () => {
        console.log("clear");

        let title = document.querySelector('#title');
        let genres = document.querySelectorAll("input[type=checkbox]:checked");
        let type = document.querySelector('input[name="med-type"]:checked');
        let progress = document.querySelector('input[name="med-progress"]:checked');
        let notes=document.querySelector('#media-notes');


        title.value='';
        for (let i = 0; i < genres.length; i++) genres[i].checked = false;
        if(type!=null)type.checked = false;
        if(progress!=null)progress.checked=false;
        notes.value = "";

    };

    const submitButtonSumbit = (e) => {
        
        e.preventDefault();
        sendPost(mediaForm);

        return false;//prevents event bubbling
    };
    clearButton.addEventListener('click', clearButtonSumbit);
    submitButton.addEventListener('click', submitButtonSumbit);

};

window.onload = init;
