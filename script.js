// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Notification Toggle Logic
function toggleNotif() {
    let box = document.getElementById("notif-box");
    box.style.display = (box.style.display === "block") ? "none" : "block";
}

// Button Hover Sound or Interaction can be added here
console.log("ClickLogic Studio Professional Interface Loaded.");