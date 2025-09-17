const products = {
      1: {
        name: "Anillo de Compromiso de Corazón",
        price: "$22.900",
        description: "Un delicado anillo de compromiso con incrustación de zirconia en forma de corazón.",
        img: "img/anillo_corazon.jpg",
        whatsapp: "https://wa.me/57XXXXXXXXXX?text=Estoy%20interesado%20en%20el%20anillo%20de%20corazón"
      },
      2: {
        name: "Anillo de Plata Clásico",
        price: "$18.500",
        description: "Elegante anillo de plata 925, perfecto para uso diario y ocasiones especiales.",
        img: "img/anillo_plata.jpg",
        whatsapp: "https://wa.me/57XXXXXXXXXX?text=Estoy%20interesado%20en%20el%20anillo%20de%20plata"
      }
    };

    const modal = document.getElementById("product-modal");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".product").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        const p = products[id];
        if (p) {
          document.getElementById("modal-img").src = p.img;
          document.getElementById("modal-name").textContent = p.name;
          document.getElementById("modal-price").textContent = p.price;
          document.getElementById("modal-description").textContent = p.description;
          document.getElementById("modal-whatsapp").href = p.whatsapp;
          modal.style.display = "flex";
        }
      });
    });

    closeModal.onclick = () => { modal.style.display = "none"; };
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
  </script>
</body>
</html>
