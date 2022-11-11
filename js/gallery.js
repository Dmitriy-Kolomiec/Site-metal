const imageVariants = document.querySelectorAll('.js-photo-work-preview');

for (let i = 0; i < imageVariants.length; i++) {
    const imageVariant = imageVariants[i];

    imageVariant.addEventListener('click', (e) => {
        const imageVariantSrc = e.target.src;
        const imagePreview = e.target.closest('.js-photo-work').querySelector('.js-preview');

        imagePreview.setAttribute('src', imageVariantSrc);
    });
}
