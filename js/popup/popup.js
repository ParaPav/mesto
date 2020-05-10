const page = document.querySelector(".page");



function CreatePopup(title = "popup_title",input_1="", input_2 = "", btn_exit_action = DeletePopup, btn_save_action) {
    const newPopup = document.querySelector("#popup").content.cloneNode(true);

    const popup_content = {
        btn_exit: newPopup.querySelector(".popup__button_type_exit"),
        btn_save: newPopup.querySelector(".popup__button_type_save"),
        input_1: newPopup.querySelectorAll(".popup__input")[0],
        input_2: newPopup.querySelectorAll(".popup__input")[1],
        title: newPopup.querySelector('.popup__title')
    }

    popup_content.title.appendChild(document.createTextNode(title));
    popup_content.input_1.setAttribute("value",input_1);
    popup_content.input_2.setAttribute("value",input_2);
    popup_content.btn_exit.addEventListener('click', btn_exit_action);
    popup_content.btn_save.addEventListener('click', btn_save_action);
    page.appendChild(newPopup);
}

function DeletePopup(e) {
    e.preventDefault();
    if (e.target.classList.contains('popup__button_type_exit')) {
        page.removeChild(e.target.parentNode);
    }
}