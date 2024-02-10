document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form');

    form.addEventListener('input', (e) => {
        if (e.target.name === 'email' || e.target.name === 'message') {
            const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
            feedbackFormState[e.target.name] = e.target.value;
            localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
        }
    });

    const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    form.email.value = feedbackFormState.email || '';
    form.message.value = feedbackFormState.message || '';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            email: form.email.value,
            message: form.message.value
        };

        console.log(formData);
        
        localStorage.removeItem('feedback-form-state');

        form.email.value = '';
        form.message.value = '';

    })
})
