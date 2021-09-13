function validation(e) {
    e.preventDefault()

    const fname = document.querySelector('#fname')
    const fNameError = document.querySelector('.fname-error')

    const lname = document.querySelector('#lname')
    const lNameError = document.querySelector('.lname-error')

    const mail = document.querySelector('#mail')
    const mailError = document.querySelector('.mail-error')

    const password = document.querySelector('#password')
    const passwordError = document.querySelector('.password-error')

    if (fname.value == '') {
        fNameError.classList.add('show')
        fname.classList.add('img-warning')
        fname.classList.add('input-warning')
        fname.placeholder=''
    } else {
        fNameError.classList.remove('show')
        fname.classList.remove('img-warning')
        fname.classList.remove('input-warning')
    }

    if (lname.value == '') {
        lNameError.classList.add('show')
        lname.classList.add('img-warning')
        lname.classList.add('input-warning')
        lname.placeholder=''
    } else {
        lNameError.classList.remove('show')
        lname.classList.remove('img-warning')
        lname.classList.remove('input-warning')
    }

    if (mail.value == '') {
        mailError.classList.add('show')
        mail.classList.add('img-warning')
        mail.classList.add('input-warning')
        mail.classList.add('placeholder-mail')
        mail.placeholder='email@example.com'
    } else {
        mailError.classList.remove('show')
        mail.classList.remove('img-warning')
        mail.classList.remove('input-warning')
    }

    if (password.value == '') {
        passwordError.classList.add('show')
        password.classList.add('img-warning')
        password.classList.add('input-warning')
        password.placeholder=''
    } else {
        passwordError.classList.remove('show')
        password.classList.remove('img-warning')
        password.classList.remove('input-warning')
    }
}

const submit = document.querySelector('#submit')

submit.onclick = validation