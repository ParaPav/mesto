const popup = document.querySelector(".popup");
const profile = document.querySelector(".profile");


const popup_content = {
    btn_exit: popup.querySelector(".popup__button_type_exit"),
    btn_save: popup.querySelector(".popup__button_type_save"),
    input_name: popup.querySelectorAll(".popup__input")[0],
    input_job: popup.querySelectorAll(".popup__input")[1]
}

const profile_content = {
    btn_edit: profile.querySelector(".profile__button_type_edit"),
    title: profile.querySelector(".profile__title"),
    subtitle: profile.querySelector(".profile__subtitle")
}

function showPopup() {
    popup.classList.add("popup_status-opened");
    popup_content.input_name.setAttribute('value',profile_content.title.textContent);
    popup_content.input_job.setAttribute('value',profile_content.subtitle.textContent);    
}

function hidePopup() {
    popup.classList.remove("popup_status-opened");
}

function setData(e){
    e.preventDefault();
    profile_content.title.textContent = popup_content.input_name.value;
    profile_content.subtitle.textContent = popup_content.input_job.value;
    hidePopup();
}

profile_content.btn_edit.addEventListener("click", showPopup);
popup_content.btn_exit.addEventListener("click", hidePopup);
popup_content.btn_save.addEventListener("click",setData);