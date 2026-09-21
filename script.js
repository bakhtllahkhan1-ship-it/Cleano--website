document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.getAttribute("data-service");
    const select = document.getElementById("service");
    if (select) select.value = service;
  });
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = new FormData(this);
  const message = document.getElementById("formMessage");
  message.textContent = `Thank you, ${form.get("name")}. Your booking request has been received on this demo website.`;
  this.reset();
});
