function insertAtividade() {
    let atividadeDescricao = document.getElementById('insert-atividade').value;
    let newPosition = document.getElementsByClassName('atividade').length;
    let list = document.querySelector("#list-checkbox");
    let newItemList = document.createElement('div');
    newItemList.className = 'atividade';

    newItemList.addEventListener('click', function () {
        let component = document.getElementById("at" + newPosition);
        if (!component.getAttribute("checked")) {
            component.setAttribute('checked', true);
        } else {
            component.removeAttribute('checked');
        }
    });

    newItemList.innerHTML = '<input type="checkbox" id="at' + newPosition + '" /><label>' + atividadeDescricao + '</label>';
    list.appendChild(newItemList);
}
