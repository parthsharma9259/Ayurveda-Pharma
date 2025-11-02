document.addEventListener("DOMContentLoaded", function () {
    let doctors = [
        { name: "Dr. Aakash Sharma", specialization: "Cardiologist", image: "../img/1.jpeg" },
        { name: "Dr. Priya Mehta", specialization: "Dermatologist", image: "../img/2.png" },
        { name: "Dr. Ramesh Gupta", specialization: "Neurologist", image: "../img/1.jpeg" },
        { name: "Dr. Sanya Kapoor", specialization: "Gynecologist", image: "../img/2.png" },
        { name: "Dr. Vivek Tiwari", specialization: "Orthopedic Surgeon", image: "../img/1.jpeg" }
    ];

    let doctorListContainer = document.getElementById("doctor-list");

    doctors.forEach(doctor => {
        let doctorCard = document.createElement("div");
        doctorCard.classList.add("doctor-card");

        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h3>${doctor.name}</h3>
            <p>${doctor.specialization}</p>
            <button class="book-btn">Book Appointment</button>
        `;

        doctorListContainer.appendChild(doctorCard);
    });
});
