document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a[data-section]");
    const subsections = document.querySelectorAll(".submenu");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");

            // Esconder todas as seções
            document.querySelectorAll("main > section").forEach(section => {
                section.classList.remove("active");
            });

            // Mostrar a seção correspondente ao link clicado
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add("active");
            }

            // Gerenciar a exibição das subseções
            if (this.nextElementSibling && this.nextElementSibling.classList.contains("submenu")) {
                this.nextElementSibling.classList.toggle("show");
            }
        });
    });

    // Adiciona um evento para as subseções
    const submenuLinks = document.querySelectorAll(".submenu a[data-section]");
    submenuLinks.forEach(subLink => {
        subLink.addEventListener("click", function(e) {
            e.preventDefault();
            const subSectionId = this.getAttribute("data-section");

            // Esconder todas as seções
            document.querySelectorAll("main > section").forEach(section => {
                section.classList.remove("active");
            });

            // Mostrar a subseção correspondente ao link clicado
            const activeSubSection = document.getElementById(subSectionId);
            if (activeSubSection) {
                activeSubSection.classList.add("active");
            }
        });
    });
});







