function checkPIN() {
    const pin = document.getElementById("pin").value.trim();
    const message = document.getElementById("message");
    message.style.color = "red";
    message.textContent = "";

    if (pin === "7890") {
        message.style.color = "green";
        message.textContent = "Успешно! Документ открывается...";
        setTimeout(() => {
            window.location.href = "https://drive.google.com/file/d/1Z8EiApuTXYnN2l6eewqW5rVtaRmZ6FKB/view";
        }, 1000);
    } else {
        message.textContent = "Неверный PIN-код. Пожалуйста, попробуйте снова.";
    }
}

// Enter tugmasi bosilganda ham ishlasin
document.getElementById("pin").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPIN();
    }
});
