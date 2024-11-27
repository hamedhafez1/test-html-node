console.log('JavaScript is loaded!');

// Example: Adding functionality to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        alert('Form is being submitted!');
    });
});
