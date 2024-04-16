document.addEventListener("DOMContentLoaded", function() {
    var thumbnailImages = document.querySelectorAll('.nursery-img');
    var enlargedImageModal = document.createElement('div');
    enlargedImageModal.id = 'enlarged-image-modal';
    var enlargedImage = new Image();
    enlargedImage.id = 'enlarged-image';
    enlargedImageModal.appendChild(enlargedImage);
    var closeButton = document.createElement('span');
    closeButton.id = 'close-btn';
    closeButton.innerHTML = '&times;';
    enlargedImageModal.appendChild(closeButton);
    document.body.appendChild(enlargedImageModal);
  
    thumbnailImages.forEach(function(thumbnailImage) {
      thumbnailImage.addEventListener('click', function() {
        var src = this.src;
        enlargedImage.src = src;
        enlargedImageModal.style.display = 'block';
      });
    });
  
    closeButton.addEventListener('click', function() {
      enlargedImageModal.style.display = 'none';
    });
  });
  