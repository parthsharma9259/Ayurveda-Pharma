document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const loginModal = document.getElementById("login-modal");
    const closeBtn = document.querySelector(".close");
    const sendOtpBtn = document.getElementById("send-otp");
    const otpSection = document.getElementById("otp-section");
    const verifyOtpBtn = document.getElementById("verify-otp");

    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent any default action
            loginModal.style.display = "flex";
        });
    } else {
        console.error("Login button not found!");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            loginModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    if (sendOtpBtn) {
        sendOtpBtn.addEventListener("click", function () {
            let mobileNumber = document.getElementById("mobile-number").value;
            if (mobileNumber.length === 10) {
                alert("OTP Sent to " + mobileNumber);
                otpSection.style.display = "block";
            } else {
                alert("Please enter a valid 10-digit mobile number.");
            }
        });
    }

    if (verifyOtpBtn) {
        verifyOtpBtn.addEventListener("click", function () {
            let otp = document.getElementById("otp-input").value;
            if (otp === "1234") {  // Simulated OTP validation
                alert("Login Successful!");
                loginModal.style.display = "none";
            } else {
                alert("Invalid OTP. Try Again.");
            }
        });
    }
});
