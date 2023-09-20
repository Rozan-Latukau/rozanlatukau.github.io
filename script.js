const scriptURL = 'https://script.google.com/macros/s/AKfycbzg-CcWfD4MpXDpqDXmD7H9FwGWfpOw9U52JZB3aejcL523_ePBqx07UL1yrKlztUSQWw/exec'
const form = document.forms['zan-contact-form']
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const zlAlert = document.querySelector('.zl-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    // ketika button submit diklik
    //tampilkan button loading dan hilangkan tombil submit
    btnLoading.classList.toggle('d-none');
    btnSubmit.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            //tampilkan button kirim dan hilangkan tombil loading
            btnLoading.classList.toggle('d-none');
            btnSubmit.classList.toggle('d-none');

            //tampilkan alert
            zlAlert.classList.toggle('d-none');

            //reset form
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})