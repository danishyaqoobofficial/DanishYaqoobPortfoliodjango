function dropdown_func() {
    let main_dropdown = document.querySelector('.main-dropdown');
    main_dropdown.classList.toggle('!block');
}

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
    }else{}
}

function closePopup() {
    document.getElementById('form_main').reset();
    let Popup = document.querySelector('.popup');
    Popup.classList.remove('top');
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

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    
    header.classList.toggle('!shadow-md', window.pageYOffset > header.offsetTop);
    header.classList.toggle('bg-[#323846]', window.pageYOffset > header.offsetTop);
});