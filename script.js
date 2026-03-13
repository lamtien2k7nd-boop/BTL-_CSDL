const openBtn = document.getElementById('openbtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById("close");
openBtn.addEventListener('click', function() {
    overlay.classList.add('show'); // Thêm class để hiện
});

// 3. Lắng nghe sự kiện click nút Đóng
closeBtn.addEventListener('click', function() {
    overlay.classList.remove('show'); // Xóa class để ẩn
});

// 4. (Nâng cao) Click ra ngoài vùng trắng cũng đóng
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        overlay.classList.remove('show');
    }
});