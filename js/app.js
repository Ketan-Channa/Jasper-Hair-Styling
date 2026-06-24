document.addEventListener("DOMContentLoaded", function () {
    
    // 1. SPLASH SCREEN PROGRESS BAR
    var bar = document.getElementById("progressBar");
    var percentText = document.getElementById("percent");
    if (bar) {
        var width = 0;
        var timer = setInterval(function () {
            width++;
            bar.style.width = width + "%";
            if (percentText) percentText.innerText = width + "%";
            if (width >= 100) {
                clearInterval(timer);
                window.location.href = "login.html";
            }
        }, 30); 
    }

    // 2. SIGNUP LOGIC
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const pass = document.getElementById('userPass').value;
            auth.createUserWithEmailAndPassword(email, pass)
                .then(() => {
                    alert("Account Created Successfully!");
                    window.location.href = "login.html";
                })
                .catch((err) => { alert("Signup Error: " + err.message); });
        });
    }

    // 3. LOGIN LOGIC
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const pass = document.getElementById('loginPass').value;
            auth.signInWithEmailAndPassword(email, pass)
                .then(() => { window.location.href = "dashboard.html"; })
                .catch((err) => { alert("Login Error: " + err.message); });
        });
    }

    // 4. PREVENT PAST DATES
    const date1 = document.getElementById('date1');
    const date2 = document.getElementById('date2');
    const today = new Date().toISOString().split('T')[0];
    if(date1) date1.setAttribute('min', today);
    if(date2) date2.setAttribute('min', today);

    // 5. FLEXIBLE DOUBLE BOOKING
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = auth.currentUser;
            if (!user) { alert("Please Login!"); return; }

            const appointmentData = {
                customerEmail: user.email,
                uid: user.uid,
                service1: document.getElementById('service1').value,
                date1: document.getElementById('date1').value,
                time1: document.getElementById('time1').value,
                service2: document.getElementById('service2').value, 
                date2: document.getElementById('date2').value || "N/A",
                time2: document.getElementById('time2').value,
                status: "Confirmed",
                bookedAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            db.collection("bookings").add(appointmentData)
                .then(() => {
                    alert("Appointment Confirmed Successfully!");
                    window.location.href = "my-bookings.html";
                })
                .catch((err) => { alert("Booking Failed: " + err.message); });
        });
    }

    // 6. FETCH HISTORY & REAL-TIME UPDATES
    const bookingsList = document.getElementById('bookingsList');
    if (bookingsList) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                db.collection("bookings")
                  .where("uid", "==", user.uid)
                  .orderBy("bookedAt", "desc")
                  .onSnapshot((qs) => {
                      bookingsList.innerHTML = "";
                      if (qs.empty) {
                          bookingsList.innerHTML = "<p style='text-align:center;'>No history found.</p>";
                          return;
                      }
                      qs.forEach((doc) => {
                          const b = doc.data();
                          const card = `
                            <div class="booking-item">
                                <div style="border-left: 4px solid #ffcc00; padding-left: 15px;">
                                    <h3 style="color:#ffcc00;">${b.service1}</h3>
                                    <p>${b.date1} | ${b.time1}</p>
                                    ${b.service2 !== "None" ? `<hr style="margin:10px 0; border:0; border-top:1px solid #333;"><h3 style="color:#ffcc00;">${b.service2}</h3><p>${b.date2} | ${b.time2}</p>` : ""}
                                    <button onclick="deleteBooking('${doc.id}')" style="background:none; border:none; color:#ff4444; cursor:pointer; font-size:11px; margin-top:10px; padding:0;">CANCEL APPOINTMENT</button>
                                </div>
                                <span class="status-badge">CONFIRMED</span>
                            </div>`;
                          bookingsList.innerHTML += card;
                      });
                  });
            } else { window.location.href = "login.html"; }
        });
    }
});

// GLOBAL FUNCTIONS
function deleteBooking(docId) {
    if(confirm("Cancel this appointment?")) {
        db.collection("bookings").doc(docId).delete().then(() => alert("Cancelled."));
    }
}

function togglePassword(id) {
    var field = document.getElementById(id);
    if (field) field.type = (field.type === "password") ? "text" : "password";
}

function logout() {
    auth.signOut().then(() => { window.location.href = "login.html"; });
}