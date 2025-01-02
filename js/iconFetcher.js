// Booking.com Icon Injection
const bookingIconContainers = document.querySelectorAll(
    ".booking-icon-container"
);

fetch("images/booking.svg")
    .then((response) => response.text())
    .then((data) => {
        bookingIconContainers.forEach((container) => {
            container.innerHTML = data;
            const svgElement = container.querySelector("svg");
            svgElement.classList.add("booking-icon");

            // Remove inline styles
            svgElement.removeAttribute("style");

            // Remove any <style> blocks inside the SVG
            const styles = svgElement.querySelectorAll("style");
            styles.forEach((style) => style.remove());
        });
    })
    .catch((error) => console.error("Error loading SVG:", error));

// Hostelworld Icon Injection
const hostelworldIconContainers = document.querySelectorAll(
    ".hostelworld-icon-container"
);

fetch("images/hw-icon.svg")
    .then((response) => response.text())
    .then((data) => {
        hostelworldIconContainers.forEach((container) => {
            container.innerHTML = data;
            const svgElement = container.querySelector("svg");
            svgElement.classList.add("hostelworld-icon");

            // Remove inline styles
            svgElement.removeAttribute("style");

            // Remove any <style> blocks inside the SVG
            const styles = svgElement.querySelectorAll("style");
            styles.forEach((style) => style.remove());
        });
    })
    .catch((error) => console.error("Error loading Hostelworld SVG:", error));
