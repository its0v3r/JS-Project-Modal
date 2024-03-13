// elements
const btn_open_modal = document.querySelector(".btn");
const btn_close_modal = document.querySelector(".close-btn");
const modal_overlay = document.querySelector(".modal-overlay");

btn_open_modal.addEventListener("click", () => {
    modal_overlay.classList.add("show");
});

btn_close_modal.addEventListener("click", () => {
    console.log("ahsdajhbsdjahbsd");
    modal_overlay.classList.remove("show");
});
