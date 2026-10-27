
/* =====================================================
   SAYURI EDIRISINGHE — PORTFOLIO INTERACTIONS
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navItems = navLinks.querySelectorAll("a");
  const currentYear = document.getElementById("current-year");

  // Update the footer year automatically.
  currentYear.textContent = new Date().getFullYear();

  // Open and close the mobile navigation.
  function closeMenu() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close the menu when a navigation link is selected.
  navItems.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when the Escape key is pressed.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Return to desktop navigation behaviour when resizing.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      closeMenu();
    }
  });

    // Open articles in the reading panel.
  const reader = document.getElementById("reader");
  const readerBody = document.getElementById("reader-body");
  const readerClose = document.getElementById("reader-close");

  document.querySelectorAll(".writing-item").forEach((item) => {
    const trigger = item.querySelector("[data-article]");
    if (!trigger) return;

    item.addEventListener("click", () => {
      const source = document.getElementById(trigger.dataset.article);
      readerBody.innerHTML = source.innerHTML;
      reader.showModal();
      reader.scrollTop = 0;
      document.body.style.overflow = "hidden";
    });
  });

  readerClose.addEventListener("click", () => reader.close());

  // Clicking the dark area outside the panel closes it.
  reader.addEventListener("click", (event) => {
    if (event.target === reader) reader.close();
  });

  reader.addEventListener("close", () => {
    document.body.style.overflow = "";
  });

    // Open project case studies in the same reading panel.
  document.querySelectorAll("[data-case]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      const source = document.getElementById(el.dataset.case);
      readerBody.innerHTML = source.innerHTML;
      reader.showModal();
      reader.scrollTop = 0;
      document.body.style.overflow = "hidden";
    });
  });
});
