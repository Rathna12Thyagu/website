document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { 
            image: "./templates/red_whole.jpg", 
            name: "Red Lentil", 
            description: "It is known for their reddish-orange color and are often processed into a split form." ,
			description2:"It comes in both whole and split.",
            brand: "Brand A", 
            bg: "bg.webp" 
        },
        { 
            image: "./templates/yellow_whole.jpg", 
            name: "Green Lentil", 
            description: "A common variety of lentil which is good in taste,texture and nutrition values.", 
			description2:"It comes in both whole and split.",
            brand: "Brand C", 
            bg: "bg.webp"  
        },
        { 
            image: "./templates/green.jpeg", 
            name: "Green Gram", 
            description: "Green gram, also known as mung bean, is a versatile grain legume rich in protein and fiber.", 
			description2:"",
            brand: "Brand E", 
            bg:"bg.webp" 
        },
		{ 
            image: "./templates/black.webp", 
            name: "Urad", 
            description: "Urad dal, also known as black gram, with white interior and black skin when whole.", 
			description2:"It comes in both whole and split.",
            brand: "Brand E", 
            bg:"bg.webp" 
        },
		{ 
            image: "./templates/chana.webp", 
            name: "Bengal Gram", 
            description: "Bengal gram, also known as chickpea, it's a major source of protein and a staple food", 
			description2:"",
            brand: "Brand E", 
            bg: "bg.webp" 
        },
		{ 
            image: "./templates/peas.webp", 
            name: "Peas", 
            description: "Yellow peas, a type of legume known for their flavour and high protein content.", 
			description2:"",
            brand: "Brand E", 
            bg: "bg.webp"  
        },
			
    ];

    const productGrid = document.querySelector(".carousel-wrapper");
    const productSection = document.querySelector(".products");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;

    // Dynamically Add Products
    products.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("grid-item");
        item.innerHTML = `
            <div class="product-content">
                <div class="image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="brand-name">${product.brand}</div>
                </div>
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p></br>
					<p>${product.description2}</p>
                </div>
            </div>
        `;
        productGrid.appendChild(item);
    });

    function updateCarousel() {
        const containerWidth = document.querySelector(".carousel-container").offsetWidth;
        productGrid.style.transform = `translateX(-${index * containerWidth}px)`;
    }

    function changeBackground() {
        const bgImages = [
            "url('./templates/bg.webp')", "url('./templates/bg.webp')", "url('./templates/bg.webp')",
            "url('./templates/bg.webp')", "url('./templates/bg.webp')","url('./templates/bg.webp')"
        ];
        productSection.style.backgroundImage = bgImages[index % bgImages.length];
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % products.length;
        updateCarousel();
        changeBackground();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + products.length) % products.length;
        updateCarousel();
        changeBackground();
    });

    window.addEventListener("resize", updateCarousel);
});
document.addEventListener("DOMContentLoaded", function () {
    const sectionTitles = document.querySelectorAll(".title h1");

    function revealOnScroll() {
        sectionTitles.forEach((title) => {
            const section = title.closest("section");
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                title.parentElement.classList.add("visible"); // Add class when scrolled into view
            }
        });
    }

    // Run function on scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once in case some titles are already in view
});
document.addEventListener("DOMContentLoaded", function () {
    const provisionsSection = document.querySelector(".provisions");

    function revealProvisions() {
        const sectionTop = provisionsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            provisionsSection.classList.add("visible"); // ✅ Adds class when scrolled into view
        }
    }

    // Run function on scroll
    window.addEventListener("scroll", revealProvisions);
    revealProvisions(); // ✅ Run once in case already in view
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for header height
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
        const timeline = document.querySelector('.timeline');
        let isDown = false;
        let startX;
        let scrollLeft;

        timeline.addEventListener('mousedown', (e) => {
            isDown = true;
            timeline.classList.add('active');
            startX = e.pageX - timeline.offsetLeft;
            scrollLeft = timeline.scrollLeft;
        });

        timeline.addEventListener('mouseleave', () => {
            isDown = false;
            timeline.classList.remove('active');
        });

        timeline.addEventListener('mouseup', () => {
            isDown = false;
            timeline.classList.remove('active');
        });

        timeline.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - timeline.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            timeline.scrollLeft = scrollLeft - walk;
        });
    });


