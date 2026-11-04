const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-on-scroll");
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.15 
});

sections.forEach(section => {
  observer.observe(section);
});

const copyBtn = document.getElementById("copy-email");
if (copyBtn) {
  const label = copyBtn.querySelector("span");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      label.textContent = "Copied!";
    } catch {
      label.textContent = copyBtn.dataset.email;
    }
    setTimeout(() => (label.textContent = copyBtn.dataset.email), 1800);
  });
}