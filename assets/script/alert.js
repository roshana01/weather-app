function callError() {
    Swal.fire({
        titleText: "City is Wrong",
        text: "Please enter the correct name of the city",
        timer: "5000",
        timerProgressBar: true,
        showClass: {
            popup: "animate__animated animate__backInLeft",
        },
        hideClass: {
            popup: "animate__animated animate__backOutRight",
        },
    });
}
