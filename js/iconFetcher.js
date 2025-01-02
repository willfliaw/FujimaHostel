document.addEventListener("DOMContentLoaded", function () {
    const bookingIconContainers = document.querySelectorAll(".booking-icon-container");

    fetch("https://cf.bstatic.com/static/img/favicon/9ca83ba2a5a3293ff07452cb24949a5843af4592.svg")
        .then(response => response.text())
        .then(data => {
            bookingIconContainers.forEach(container => {
                container.innerHTML = data;
                const svgElement = container.querySelector("svg");
                svgElement.classList.add("booking-icon");

                // Remove inline styles
                svgElement.removeAttribute("style");

                // Remove any <style> blocks inside the SVG
                const styles = svgElement.querySelectorAll("style");
                styles.forEach(style => style.remove());
            });
        })
        .catch(error => console.error("Error loading SVG:", error));
});
