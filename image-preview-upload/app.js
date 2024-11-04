function previewImage(event) {
  const file = event.target.files[0];
  const previewContainer = document.getElementById('previewContainer');
  
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = e => {
      // Lấy data URL từ FileReader
      const dataURL = e.target.result;

      // Chuyển đổi data URL thành Blob
      const blob = dataURLToBlob(dataURL);

      // Tạo URL đối tượng từ Blob
      const blobURL = URL.createObjectURL(blob);

      // Hiển thị ảnh từ Blob
      previewContainer.innerHTML = `<img src="${blobURL}" alt="preview image">`;
    }
    reader.readAsDataURL(file);
  } else {
    previewContainer.innerHTML = `File not support`;
  }
}

function dataURLToBlob(dataURL) {
  const byteString = atob(dataURL.split(',')[1]);
  const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
  
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}