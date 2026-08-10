document.addEventListener('DOMContentLoaded', function() {
    // Mengambil semua container carousel
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        let currentIndex = 0;
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        // Jika slide kurang dari atau sama dengan 1, sembunyikan tombol navigasi
        if (slides.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return; // Keluar dari loop untuk carousel ini
        }

        function showSlide(index) {
            // Reset semua slide
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Logika perputaran (looping) ketika mencapai ujung
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }
            
            // Tampilkan slide yang aktif
            slides[currentIndex].classList.add('active');
        }

        // Event listener tombol sebelumnya
        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        // Event listener tombol selanjutnya
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
    });
});
