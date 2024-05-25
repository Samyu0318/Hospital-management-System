document.addEventListener('DOMContentLoaded', function() {
    const patientForm = document.getElementById('patientForm');
    const patientList = document.getElementById('patientList');

    patientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('patientName').value;
        const age = document.getElementById('patientAge').value;
        const gender = document.getElementById('patientGender').value;

        const patientItem = document.createElement('li');
        patientItem.textContent = `Name: ${name}, Age: ${age}, Gender: ${gender}`;
        patientList.appendChild(patientItem);

        patientForm.reset();
    });
});
