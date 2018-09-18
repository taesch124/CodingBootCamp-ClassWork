const wrapper = document.getElementById('wrapper');
const header = document.querySelector('header');
const headerContent = document.querySelector('.header_content');
const mainContent = document.querySelector('.main_content');
const lastName = document.getElementById('header_last_name');
const nameText = document.getElementById('name_text');

function shrinkName() {
    const distY = wrapper.scrollTop - header.offsetHeight;

    if (distY > 0) {
        lastName.classList.remove('new_line');
        nameText.classList.add('smaller_header');
        headerContent.style.paddingBottom = 0;
        header.style.boxShadow = "0 1px 1px #474545";
    } else {
        lastName.classList.add('new_line');
        nameText.classList.remove('smaller_header');
        mainContent.scrollTop = header.offsetHeight;
        headerContent.style.paddingBottom = ".75em";
        header.style.boxShadow = "0 3px 3px #474545";
    }

}

window.addEventListener
wrapper.addEventListener('scroll', function() {shrinkName();});