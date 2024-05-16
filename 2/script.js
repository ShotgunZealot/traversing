document.addEventListener('DOMContentLoaded', function () {
    const ulList = document.getElementById('ul-list');
    const liInput = document.getElementById('li-input');
    const submitButton = document.getElementById('submit-li');

    let ul = document.createElement('ul');
    ulList.appendChild(ul);

    function addLi(text) {
        const newLi = document.createElement('li');
        newLi.textContent = text;
        ul.appendChild(newLi);
    }

    submitButton.addEventListener('click', function () {
        const liText = liInput.value.trim();
        if (liText !== '') {
            addLi(liText);
            liInput.value = '';
        }
    });
});
