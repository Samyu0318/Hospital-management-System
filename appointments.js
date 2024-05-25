document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentList = document.getElementById('appointmentList');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const patient = document.getElementById('appointmentPatient').value;
        const doctor = document.getElementById('appointmentDoctor').value;
        const date = document.getElementById('appointmentDate').value;

        const appointmentItem = document.createElement('li');
        appointmentItem.textContent = `Patient: ${patient}, Doctor: ${doctor}, Date: ${date}`;
        appointmentList.appendChild(appointmentItem);

        appointmentForm.reset();
    });
});
