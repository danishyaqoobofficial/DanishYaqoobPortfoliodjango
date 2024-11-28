const form = document.querySelector('.form_main');

function send_message() {

    let first_name = document.querySelector('.first_name');
    let last_name = document.querySelector('.last_name');
    let number = document.querySelector('.number');
    let email = document.querySelector('.email');
    let message = document.querySelector('.message');

    let Popup = document.querySelector('.popup');

    const bodyMessage = `First Name : ${first_name.value.trim()} <br>
        last Name : ${last_name.value.trim()} <br>
        Phone Number : ${number.value.trim()} <br>
        Email : ${email.value.trim()} <br>
        Message : ${message.value.trim()} <br>
    `

    if (first_name.value === '') {
        first_name.style.borderColor = 'red';
    }else{
        first_name.style.borderColor = '#323846';
    }

    if (last_name.value === '') {
        last_name.style.borderColor = 'red';
    }else{
        last_name.style.borderColor = '#323846';
    }

    if (email.value === '' || !email.value.includes('.com') || !email.value.includes('@') ) {
        email.style.borderColor = 'red';
    }else{
        email.style.borderColor = '#323846';
    }

    if (message.value === '') {
        message.style.borderColor = 'red';
    }else{
        message.style.borderColor = '#323846';
    }

    if (first_name.value !== '' && last_name.value !== '' && email.value !== '' && email.value.includes('.com') && email.value.includes('@') && message.value !== '' ) {
        Popup.classList.add('top');
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "danishyaqoob117@gmail.com",
            Password : "3562C4A222A82FA3309911A62CDA47560C3F",
            To : 'danishyaqoob117@gmail.com',
            From : "danishyaqoob117@gmail.com",
            Subject : "danishyaqoob.online | Portfolio",
            Body : bodyMessage
        });
    }else{

    }
}

function closePopup() {
    let first_name = document.querySelector('.first_name');
    let last_name = document.querySelector('.last_name');
    let number = document.querySelector('.number');
    let email = document.querySelector('.email');
    let message = document.querySelector('.message');
    let Popup = document.querySelector('.popup');
    Popup.classList.remove('top');
    first_name.value = '';
    last_name.value  = '';
    email.value = '';
    number.value = '';
    message.value = '';
}

let value = true;

function dropdown_func() {
    let main_dropdown = document.querySelector('.main-dropdown');
    let icon = document.querySelector('.dropdown_realicon');

    if (value == true) {
        main_dropdown.classList.add('!block');
        value = false;
        icon.classList.add('fa-xmark');
    }else{
        main_dropdown.classList.remove('!block');
        value = true;
        icon.classList.remove('fa-xmark')
    }
}

function web_development_service() {
    let message_box = document.querySelector('.message-box');
    message_box.value = '"Are you available to provide Web Development services for our upcoming project?"'
}

function app_development_service() {
    let message_box = document.querySelector('.message-box');
    message_box.value = '"Are you available to provide App Development services? We are interested in discussing a potential project."'
}

function graphic_design_service() {
    let message_box = document.querySelector('.message-box');
    message_box.value = '"Are you offering Graphic Design services? We are looking for assistance with our visual elements of project."'
}

function seo_service() {
    let message_box = document.querySelector('.message-box');
    message_box.value = '"Are you available to provide SEO services? We are seeking to enhance our online visibility and would appreciate your expertise."'
}

function video_editing_service() {
    let message_box = document.querySelector('.message-box');
    message_box.value = '"Are you available to provide Video Editing services? We are looking to enhance the quality of our visual content of project."'
}

function google_ads_service() {
    let message_box = document.querySelector('.message-box');
    message_box.value = '"Are you available to provide Google Ads services? We are interested in maximizing our online presence and would like to explore advertising options."'
}


let header = document.querySelector('.header');
let sticky = header.offsetTop;

window.addEventListener('scroll' , () =>{

    if (window.pageYOffset > sticky) {
        header.classList.add('!shadow-md')
        header.classList.add('bg-[#323846]')
    }else{
        header.classList.remove('!shadow-md')
        header.classList.remove('bg-[#323846]')
    }
})