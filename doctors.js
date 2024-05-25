document.addEventListener('DOMContentLoaded', function() {
    const doctorForm = document.getElementById('doctorForm');
    const doctorList = document.getElementById('doctorList');

    doctorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('doctorName').value;
        const specialty = document.getElementById('doctorSpecialty').value;

        const doctorItem = document.createElement('li');
        doctorItem.textContent = `Name: ${name}, Specialty: ${specialty}`;
        doctorList.appendChild(doctorItem);

        doctorForm.reset();
    });
});
