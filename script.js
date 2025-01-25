const gridContainer = document.querySelector('.grid-container');
const timer = document.querySelector('.timer');
const btnStart = document.querySelector('#btn-start');
const btnContinue = document.querySelector('#btn-continue');

btnContinue.style.display = 'none';
const players =
    [
        {
            "Name": "Phan Khắc Long",
            "Department": "Ban Tổng Giám đốc"
        },
        {
            "Name": "Kazunori Okuyama",
            "Department": "Ban Tổng Giám đốc"
        },
        {
            "Name": "Trần Vũ Anh Tuấn",
            "Department": "Ban Tổng Giám đốc"
        },
        {
            "Name": "Đặng Kiện Hùng",
            "Department": "Ban Tổng Giám đốc"
        },
        {
            "Name": "Võ Hồng Quân",
            "Department": "Ban Tổng Giám đốc"
        },
        {
            "Name": "Đào Thị Diễm Hương",
            "Department": "Ban Tổng Giám đốc"
        },
        {
            "Name": "Nguyễn Thị Giang Châu",
            "Department": "Ban Đầu tư"
        },
        {
            "Name": "Lâm Thành Vũ",
            "Department": "Phòng CNTT"
        },
        {
            "Name": "Lê Thị Chuyên",
            "Department": "Phòng CNTT"
        },
        {
            "Name": "Lê Huyền Trang",
            "Department": "Phòng CNTT"
        },
        {
            "Name": "Phạm Xuân Thành",
            "Department": "Phòng CNTT"
        },
        {
            "Name": "Đỗ Trung Đông",
            "Department": "Phòng CNTT"
        },
        {
            "Name": "Đinh Quốc Anh",
            "Department": "Phòng CNTT"
        },
        {
            "Name": "Phạm Đàm Phi Vũ",
            "Department": "Phòng CNTT"
        },
        {
            "Name": "Nguyễn Minh Luân",
            "Department": "Mstar"
        },
        {
            "Name": "Nguyễn Minh Chánh",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Lý Ngọc Hạnh",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Lê Hoàng Dung",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Nguyễn Đình Dũng",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Vũ Như Nghĩa",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Nguyễn Quang Đại",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Châu Thị Kiều Yến",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Lâm Châu Khanh",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Tạ Nguyễn Thúy Hiền",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Võ Thị Ngọc Trinh",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Nguyễn Thị Lý",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Trịnh Vũ Long Phi",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Lê Thị Hạng Bảy",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Nguyễn Thị Hồng Mai",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Huỳnh Duy Khanh",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Nguyễn Hoàng Lâm",
            "Department": "Phòng HCNS"
        },
        {
            "Name": "Nguyễn Văn Tâm",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Trần Quốc Bảo",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Nguyễn Thanh Bình",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Mai Xuân Đông",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Nguyễn Thị Phi Yến",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Phan Lê Lộc",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Võ Quang Lâm",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Nguyễn Văn Siêng",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Dương Thị Vân",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Nguyễn Cẩm Trang",
            "Department": "Phòng KHCUU"
        },
        {
            "Name": "Trịnh Văn Thưởng",
            "Department": "Phòng KHTT"
        },
        {
            "Name": "Nguyễn Trâm Oanh",
            "Department": "Phòng KHTT"
        },
        {
            "Name": "Bùi Thế Thắng",
            "Department": "Phòng KHTT"
        },
        {
            "Name": "Đinh Hải An",
            "Department": "Phòng KSCP"
        },
        {
            "Name": "Phạm Thị Minh Tâm",
            "Department": "Phòng KSCP"
        },
        {
            "Name": "Nguyễn Ngọc Thanh",
            "Department": "Phòng KSNB"
        },
        {
            "Name": "Đoàn Thị Thủy Tiên",
            "Department": "Phòng KSNB"
        },
        {
            "Name": "Đinh Lê Hữu Uy",
            "Department": "Phòng KSNB"
        },
        {
            "Name": "Lê Thị Thanh Tuyền",
            "Department": "Phòng KSNB"
        },
        {
            "Name": "Lữ Triều Dương",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Võ Hoàng Thông",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Trần Nguyễn Công Danh",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Ryo Inazumi",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Yoshikazu Suzuki",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Trần Lê Việt Quốc",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Lê Quang Trung",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Nguyễn Văn Sơn",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Lê Hoàng Trường",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Võ Đình Hồng",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Hoàng Tuấn Kiệt",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Nguyễn Hoàng Hà",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Vũ Quang Vinh",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Trần Trung Hiếu",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Huỳnh Minh Phúc",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Vũ Ngọc Đức",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Huỳnh Ngọc Vũ",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Trần Công Quán",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Nguyễn Tấn Thái",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Nguyễn Phương Mỵ",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Lê Thanh Hoàng",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Lý Thị Tuyết Nhung",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Lưu Thị Thùy Linh",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Bùi Hiếu Nghĩa",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Nguyễn Hữu Hoài Nam",
            "Department": "Phòng KTCN"
        },
        {
            "Name": "Nguyễn Tố Hà",
            "Department": "Phòng Mua hàng"
        },
        {
            "Name": "Nguyễn Văn Khanh",
            "Department": "Phòng Mua hàng"
        },
        {
            "Name": "Nguyễn Trần Bá Hưng",
            "Department": "Phòng Mua hàng"
        },
        {
            "Name": "Nguyễn Ngọc Trinh Nguyên",
            "Department": "Phòng Mua hàng"
        },
        {
            "Name": "Lê Minh Anh",
            "Department": "Phòng Pháp chế"
        },
        {
            "Name": "Võ Thế Thuận",
            "Department": "Phòng QLMH"
        },
        {
            "Name": "Vũ Thị Ngọc Hân",
            "Department": "Phòng QLMH"
        },
        {
            "Name": "Ngụy Thị Như Thảo",
            "Department": "Phòng QLMH"
        },
        {
            "Name": "Nguyễn Thị Kiều My",
            "Department": "Phòng QLMH"
        },
        {
            "Name": "Ngô Ngọc Thu Hà",
            "Department": "Phòng QLMH"
        },
        {
            "Name": "Hà Thị Mỹ Quyên",
            "Department": "Phòng QLQT & VH"
        },
        {
            "Name": "Nguyễn Thị Hồng Yến",
            "Department": "Phòng QLQT & VH"
        },
        {
            "Name": "Nguyễn Năng Cương",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Nguyễn Hoàng Tâm Quyên",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Hoàng Nghiêm Vinh",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Kim Vũ Thanh Tùng",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Trần Thị Tuyết Mai",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Phạm Thị Hồng Chiêm",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Trần Thị Nhã",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Đặng Thị Kim Thoa",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Nguyễn Thị Hồng Yến",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Trần Thị Cẩm Vân",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Phan Thanh Hoài",
            "Department": "Phòng Tài chính"
        },
        {
            "Name": "Lê Thị Thùy Dung",
            "Department": "Phòng XTTM Asean"
        },
        {
            "Name": "Lê Văn Đệ",
            "Department": "VP Ban TGĐ"
        },
        {
            "Name": "Phạm Thị Trang",
            "Department": "VP Ban TGĐ"
        },
        {
            "Name": "Phan Vũ Nhật Hoa",
            "Department": "VP Ban TGĐ"
        },
        {
            "Name": "Đặng Lê Quân",
            "Department": "VP Ban TGĐ"
        },
        {
            "Name": "Lâm Thanh Nhàn",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Nguyễn Thanh Phú",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Nguyễn Xuân Hoàng",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Nguyễn Trọng Nghĩa",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Trần Nhật Quang",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Ngô Thị Ngọc Mai",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Đỗ Hữu Nghĩa",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Đặng Tấn Quỳnh Văn",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Lê Thị Hoa",
            "Department": "VPKD Tổng hợp"
        },
        {
            "Name": "Đặng Văn Trường",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Trương Thị Kim Tiến",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Lê Anh Phi",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Dương Xuân Mẫn",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Nguyễn Minh Luân",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Nguyễn Nam Hải",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Lê Trọng Hiếu",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Trần Văn Thơm",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Trần Đắc Liêm",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Phạm Đăng Khoa",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Nguyễn Văn Huy",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Phạm Thế Anh",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "Trần Thị Ngọc Điệp",
            "Department": "VPKD Trung tâm"
        },
        {
            "Name": "TRẦN QUANG THẮNG",
            "Department": "BAN GIÁM ĐỐC"
        },
        {
            "Name": "NGUYỄN THÀNH PHƯƠNG",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "ĐINH TRỌNG HƯNG",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "PHẠM XUÂN HƯƠNG",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "PHẠM NGUYỄN MINH HIỆP",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "LÊ MINH TRẤN",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "HOÀNG VĂN LONG",
            "Department": "PHÒNG THIẾT BỊ"
        },
        {
            "Name": "NGUYỄN DUY TÂN",
            "Department": "PHÒNG THIẾT BỊ"
        },
        {
            "Name": "LÊ VĂN PHƯỚC",
            "Department": "PHÒNG THIẾT BỊ"
        },
        {
            "Name": "VÕ THỊ THANH HIỀN",
            "Department": "PHÒNG THIẾT BỊ"
        },
        {
            "Name": "TRẦN NGỌC NGUYÊN THẢO",
            "Department": "PHÒNG THIẾT BỊ"
        },
        {
            "Name": "NGUYỄN THỊ VIỆT",
            "Department": "PHÒNG KẾ TOÁN"
        },
        {
            "Name": "NGUYỄN THỊ KIM ANH",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "NGUYỄN THỊ THÚY HẰNG",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "MAI THỊ NGOAN",
            "Department": "PHÒNG KẾ TOÁN"
        },
        {
            "Name": "CAO THỊ MỸ LỆ",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "NGUYỄN BÙI PHƯƠNG THẢO",
            "Department": "PHÒNG KẾ TOÁN"
        },
        {
            "Name": "CAO HOÀNG LỘC",
            "Department": "PHÒNG THIẾT BỊ"
        },
        {
            "Name": "MAI TRƯỜNG SONG",
            "Department": "PHÒNG KẾ HOẠCH - TỔNG HỢP"
        },
        {
            "Name": "HUỲNH LÊ HIẾU",
            "Department": "PHÒNG KẾ TOÁN"
        },
        {
            "Name": "NGUYỄN ĐỨC LONG",
            "Department": "PHÒNG THIẾT BỊ"
        }
    ]
let currentIndex;
let totalTime;
let elapsed
let interval;
let winPlayers = [];
let numberBlocks = [];
let currentValue;
function capitalize(str) {
    if (!str) return ''; // Handle empty or undefined strings
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}


// Trộn ngẫu nhiên mảng
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
let isFirstTable = true;
const numbers = Array.from({ length: 146 }, (_, i) => i + 1);
function createTable() {
    numberBlocks = [];
    // Tạo một mảng chứa các số từ 1 đến 146
    if (isFirstTable) {
        shuffle(numbers);
        isFirstTable = false;
    }
    // Tạo các ô grid và điền số ngẫu nhiên
    for (let i = 0; i < 146; i++) {
        let temp = numbers[i];
        if (!winPlayers.includes(temp + '')) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.textContent = temp;
            numberBlocks.push(gridItem);
            gridContainer.appendChild(gridItem);
        }
    }

}

function changeColor() {
    if (elapsed < totalTime) {
        currentValue = numberBlocks[currentIndex].textContent;
        // Reset màu tất cả các ô về mặc định
        numberBlocks.forEach(block => block.classList.remove('selected'));

        // Đổi màu chỉ 1 ô
        numberBlocks[currentIndex].classList.add('selected');
        bubbleSound.play();
        // Random ô tiếp theo nhưng đảm bảo không trùng với ô hiện tại
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * (numberBlocks.length - 1));
        } while (newIndex === currentIndex && !winPlayers.includes(numbers[newIndex]));
        currentIndex = newIndex;

        elapsed += interval;

        // Điều chỉnh tốc độ: tăng tốc ở đầu và giảm tốc trước khi dừng
        let progress = elapsed / totalTime;
        interval = Math.floor(Math.random() * 30) + 20 + (1 - Math.cos(Math.PI * progress)) * 500;

        setTimeout(() => { changeColor(); }, interval);
    } else {
        // Khi hết thời gian, thêm ô cuối cùng vào winPlayers (nếu chưa tồn tại)
        if (!winPlayers.includes(currentValue)) {
            winPlayers.push(currentValue);
            "result-modal-text"
            const resultModalText = document.querySelector('#result-modal-text');
            resultModalText.innerHTML = `Xin chúc mừng ông/bà ${capitalize(players[currentValue-1].Name.toLowerCase())} <strong style="color:red">số ${currentValue}</strong> đã trúng thưởng`;
            resultModal.style.display = 'flex';
            bgSound.pause();
            winSound.play();
            // Create container
          const container = document.createElement('div');
          container.id = 'fireworks-container';
          document.body.appendChild(container);
        
          // Launch each firework at its scheduled time
          fireworksData.forEach((data) => {
            setTimeout(() => {
              launchRocket(container, data);
            }, data.launchTime);
          });
        
          // Calculate the maximum launch time + schedule grand finale
          const maxLaunchTime = Math.max(...fireworksData.map((d) => d.launchTime));
          const finaleTime = maxLaunchTime + 1000; // 4s after last rocket
        
          setTimeout(() => {
            launchGrandFinaleRocket(container);
          }, finaleTime);
        }
    }
}
createTable();
function startGame() {

    if (isFirstTable) {
        btnStart.style.display = 'block';
        btnContinue.style.display = 'none';
    } else {
        btnStart.style.display = 'none';
        btnContinue.style.display = 'block';
    }
    currentIndex = 0;
    // Tổng thời gian 30 giây
    totalTime = 13000;
    startCountdown(totalTime, timer);
    bgSound.play();
    // Thời gian đã trôi qua
    elapsed = 0;
    // Thời gian chờ ban đầu
    interval = 50;
    setTimeout(() => {
        changeColor();
    }, 1300);
}
function continueGame() {
    gridContainer.innerHTML = '';
    createTable();
    startGame();
}
function startCountdown(duration, displayElement) {
    let timer = 15;
    const interval = setInterval(() => {
        // Hiển thị thời gian còn lại
        displayElement.textContent =
            `${timer.toString()}`;
        // Giảm timer
        timer--;
        // Dừng khi hết giờ
        if (timer < 0) {
            clearInterval(interval);
            displayElement.textContent = "0";
        }
    }, 1000);
}
const bubbleSound = document.querySelector('#bubble-sound-effect');
const bgSound = document.querySelector('#bg-sound-effect');
const winSound = document.querySelector('#win-sound-effect');

const resultModal = document.getElementById('result-modal');
const resultCloseModalBtn = document.getElementById('result-closeModal');
// Get elements
const listPlayerModal = document.getElementById('list-player-modal');
const listPlayerShowModal = document.getElementById('btn-list-player');
const listPlayerCloseModalButton = document.getElementById('list-player-closeModal');
const listPlayerTable = document.getElementById('list-player-Table');

// Function to populate the table in 3 columns
function populateTable(players) {
    listPlayerTable.innerHTML = ""; // Clear existing content
    for (let i=1 ;i<players.length+1;i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = `
            <strong>${capitalize(players[i-1].Name.toLowerCase())}</strong><br>
            <small>${capitalize(players[i-1].Department.toLowerCase())}</small><br>
            <strong style="color:red">${i}</strong><br>
        `;
        listPlayerTable.appendChild(cell);
    };
}

// Show modal
listPlayerShowModal.addEventListener('click', () => {
    populateTable(players); // Populate the table with players
    listPlayerModal.classList.add('show'); // Show the modal
});

// Close modal
listPlayerCloseModalButton.addEventListener('click', () => {
    listPlayerModal.classList.remove('show'); // Hide the modal
});

// Close modal
resultCloseModalBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    const fireworksContainer = document.querySelector('#fireworks-container');
    if(fireworksContainer){
        fireworksContainer.innerHTML = '';
    }
});


// fireworks
const fireworksData = [
    //
    // T = 0 ms (Big opener - multiple launches)
    //
    {
        left: '15%',
        color: '#FF4C4C', // Bright Red
        explosionType: 'circle',
        size: 'large',
        launchTime: 0,
    },
    {
        left: '70%',
        color: '#FFD24C', // Bright Gold
        explosionType: 'star',
        size: 'medium',
        launchTime: 0,
    },

    //
    // T = 3,000 ms
    //
    {
        left: '30%',
        color: '#5ECFFF', // Vibrant Light Blue
        explosionType: 'double-spiral',
        size: 'small',
        launchTime: 200,
    },
    {
        left: '80%',
        color: '#7DFF5E', // Bright Green
        explosionType: 'wave',
        size: 'large',
        launchTime: 200,
    },

    //
    // T = 6,000 ms (Triple launch)
    //
    {
        left: '25%',
        color: '#C15EFF', // Vivid Purple
        explosionType: 'heart',
        size: 'medium',
        launchTime: 400,
    },
    {
        left: '50%',
        color: '#FF4CF6', // Magenta
        explosionType: 'swirl',
        size: 'medium',
        launchTime: 400,
    },
    {
        left: '75%',
        color: '#FFF44C', // Bright Yellow
        explosionType: 'heart',
        size: 'small',
        launchTime: 400,
    },



    //
    // T = 13,000 ms (Triple launch)
    //
    {
        left: '40%',
        color: '#4CDAFF', // Bright Sky Blue
        explosionType: 'random-burst',
        size: 'medium',
        launchTime: 800,
    },
    {
        left: '60%',
        color: '#F64CFF', // Hot Pink
        explosionType: 'spiral',
        size: 'large',
        launchTime: 800,
    },
    {
        left: '85%',
        color: '#FF4C7D', // Hot Pinkish Red
        explosionType: 'star',
        size: 'small',
        launchTime: 800,
    },

    //
    // T = 16,000 ms (Triple launch)
    //
    {
        left: '15%',
        color: '#4CFF4C', // Neon Green
        explosionType: 'triple-star',
        size: 'large',
        launchTime: 1000,
    },
    {
        left: '30%',
        color: '#A14CFF', // Neon Purple
        explosionType: 'random-burst',
        size: 'medium',
        launchTime: 1000,
    },
    {
        left: '80%',
        color: '#FFB74C', // Light Orange
        explosionType: 'circle',
        size: 'small',
        launchTime: 1000,
    },

    //
    // T = 23,000 ms (Triple launch)
    //
    {
        left: '10%',
        color: '#7DFF5E', // Bright Green
        explosionType: 'random-burst',
        size: 'small',
        launchTime: 1400,
    },
    {
        left: '40%',
        color: '#C15EFF', // Vivid Purple
        explosionType: 'spiral',
        size: 'medium',
        launchTime: 1400,
    },
    {
        left: '90%',
        color: '#FF4CF6', // Magenta
        explosionType: 'swirl',
        size: 'large',
        launchTime: 1400,
    },


    //
    // T = 30,000 ms (Triple launch)
    //
    {
        left: '15%',
        color: '#4CFFB7', // Neon Mint
        explosionType: 'wave',
        size: 'small',
        launchTime: 1800,
    },
    {
        left: '60%',
        color: '#4CDAFF', // Bright Sky Blue
        explosionType: 'triple-star',
        size: 'large',
        launchTime: 1800,
    },
    {
        left: '80%',
        color: '#F64CFF', // Hot Pink
        explosionType: 'heart',
        size: 'medium',
        launchTime: 1800,
    },


    //
    // T = 37,000 ms (Triple launch)
    //
    {
        left: '15%',
        color: '#FFB74C', // Light Orange
        explosionType: 'flower',
        size: 'medium',
        launchTime: 2200,
    },
    {
        left: '40%',
        color: '#FF4C4C', // Bright Red
        explosionType: 'random-burst',
        size: 'small',
        launchTime: 2200,
    },
    {
        left: '85%',
        color: '#FFD24C', // Bright Gold
        explosionType: 'heart',
        size: 'large',
        launchTime: 2200,
    },

    //
    // T = 40,000 ms (Triple launch)
    //
    {
        left: '10%',
        color: '#5ECFFF', // Vibrant Light Blue
        explosionType: 'ring-of-rings',
        size: 'medium',
        launchTime: 2400,
    },
    {
        left: '45%',
        color: '#7DFF5E', // Bright Green
        explosionType: 'wave',
        size: 'small',
        launchTime: 2400,
    },
    {
        left: '80%',
        color: '#C15EFF', // Vivid Purple
        explosionType: 'spiral',
        size: 'large',
        launchTime: 2400,
    },

    //
    // T = 43,000 ms
    //
    {
        left: '20%',
        color: '#FF4CF6', // Magenta
        explosionType: 'swirl',
        size: 'medium',
        launchTime: 2600,
    },
    {
        left: '75%',
        color: '#FFF44C', // Bright Yellow
        explosionType: 'flurry',
        size: 'large',
        launchTime: 2600,
    },

    //
    // T = 47,000 ms (Triple launch)
    //
    {
        left: '30%',
        color: '#FF964C', // Vivid Orange
        explosionType: 'double-spiral',
        size: 'large',
        launchTime: 2800,
    },
    {
        left: '70%',
        color: '#4CFFB7', // Neon Mint
        explosionType: 'wave',
        size: 'medium',
        launchTime: 2800,
    },
    {
        left: '50%',
        color: '#4CDAFF', // Bright Sky Blue
        explosionType: 'triple-star',
        size: 'small',
        launchTime: 2800,
    },

    //
    // T = 50,000 ms (Triple launch)
    //
    {
        left: '25%',
        color: '#F64CFF', // Hot Pink
        explosionType: 'heart',
        size: 'medium',
        launchTime: 3000,
    },
    {
        left: '60%',
        color: '#FF4C7D', // Hot Pinkish Red
        explosionType: 'random-burst',
        size: 'large',
        launchTime: 3000,
    },
    {
        left: '85%',
        color: '#4CFF4C', // Neon Green
        explosionType: 'random-burst',
        size: 'small',
        launchTime: 3000,
    },

    //
    // T = 56,000 ms
    //
    {
        left: '15%',
        color: '#FF4C4C', // Bright Red
        explosionType: 'spiral',
        size: 'small',
        launchTime: 3400,
    },
    {
        left: '75%',
        color: '#FFD24C', // Bright Gold
        explosionType: 'flurry',
        size: 'medium',
        launchTime: 3400,
    },

    //
    // T = 59,000 ms (Triple launch)
    //
    {
        left: '20%',
        color: '#5ECFFF', // Vibrant Light Blue
        explosionType: 'triple-star',
        size: 'medium',
        launchTime: 3600,
    },
    {
        left: '50%',
        color: '#7DFF5E', // Bright Green
        explosionType: 'wave',
        size: 'large',
        launchTime: 3600,
    },
    {
        left: '80%',
        color: '#C15EFF', // Vivid Purple
        explosionType: 'double-spiral',
        size: 'small',
        launchTime: 3600,
    }
    // add more if you want
];

// -------------------------
// MAIN LOGIC
// -------------------------

// -------------------------
// 3) Normal Rocket + Explosion
// -------------------------
function launchRocket(container, { left, color, explosionType, size }) {
  // Create rocket element
  const rocketEl = document.createElement('div');
  rocketEl.className = 'firework-rocket';
  rocketEl.style.left = left;

  const rocketInner = document.createElement('div');
  rocketInner.className = 'firework-rocket-inner';
  rocketInner.style.backgroundColor = color;
  rocketEl.appendChild(rocketInner);
  container.appendChild(rocketEl);

  // Random apex between 40vh and 80vh
  const apex = 40 + Math.random() * 40;
  // Random travel time between 1500 and 2000 ms
  const travelTime = 1500 + Math.random() * 500;

  // Animate rocket going up
  rocketEl.animate(
    [
      { transform: 'translate(-50%, 0)' },
      { transform: `translate(-50%, -${apex}vh)` },
    ],
    {
      duration: travelTime,
      easing: 'ease-out',
      fill: 'forwards',
    }
  );

  // Create rocket sparks in an interval
  const trailInterval = setInterval(() => {
    createSpark(container, rocketEl, color);
  }, 60);

  // Explode after reaching apex
  setTimeout(() => {
    clearInterval(trailInterval);
    explode(container, rocketEl, color, explosionType, size);
  }, travelTime);
}

function explode(container, rocketEl, color, explosionType, size) {
  // Get rocket position
  const rect = rocketEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  rocketEl.remove();

  // Determine how many fragments
  let fragmentCount;
  if (size === 'small') fragmentCount = 30;
  else if (size === 'large') fragmentCount = 80;
  else fragmentCount = 50;

  // Get pattern
  const pattern = getExplosionPattern(explosionType);

  // Create explosion fragments
  for (let i = 0; i < fragmentCount; i++) {
    const angle = pattern.angles && pattern.angles.length
      ? pattern.angles[i % pattern.angles.length]
      : Math.random() * 2 * Math.PI;

    const magnitude = pattern.magnitude && pattern.magnitude.length
      ? pattern.magnitude[i % pattern.magnitude.length]
      : 1;

    createFragment(container, centerX, centerY, color, angle, size, magnitude);
  }
}

function createFragment(container, x, y, color, angle, size, magnitude) {
  const fragment = document.createElement('div');
  fragment.className = 'firework-fragment';
  fragment.style.backgroundColor = color;
  fragment.style.left = `${x}px`;
  fragment.style.top = `${y}px`;
  container.appendChild(fragment);

  // Speed based on size
  const baseVelocity = size === 'small' ? 2 : size === 'large' ? 4 : 3;
  const velocity = baseVelocity * magnitude;
  const offsetX = Math.cos(angle) * velocity * 100;
  const offsetY = Math.sin(angle) * velocity * 100;
  const duration = 2000 + Math.random() * 800;

  fragment.animate(
    [
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${offsetX}px, ${offsetY}px) scale(0.3)`, opacity: 0 },
    ],
    {
      duration,
      easing: 'ease-out',
      fill: 'forwards',
    }
  );

  setTimeout(() => {
    fragment.remove();
  }, duration + 100);
}

// --------------------------------------------
// 4) Explosion Patterns (including 15 new ones)
// --------------------------------------------
function getExplosionPattern(type) {
  // Original "circle" pattern
  if (type === 'circle') {
    const angles = Array.from({ length: 30 }, (_, i) => (i / 30) * 2 * Math.PI);
    return { angles };
  }

  // Original "star" pattern
  if (type === 'star') {
    const angles = [];
    for (let i = 0; i < 15; i++) {
      angles.push((i / 15) * 2 * Math.PI);
      angles.push(((i + 0.2) / 15) * 2 * Math.PI);
    }
    return { angles };
  }

  // -------------------------------------------------------------------
  // 15 NEW PATTERNS:
  // -------------------------------------------------------------------
  if (type === 'double-spiral') {
    const angles = [];
    for (let i = 0; i < 40; i++) {
      angles.push((i / 10) * Math.PI);
    }
    const magnitude = angles.map((val, idx) => (idx % 2 === 0 ? 1 : 2));
    return { angles, magnitude };
  }

  if (type === 'cross') {
    const baseAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
    const repeated = [];
    const repeats = 10;
    for (let r = 0; r < repeats; r++) {
      repeated.push(...baseAngles);
    }
    return { angles: repeated };
  }

  if (type === 'swirl') {
    const angles = [];
    for (let i = 0; i < 60; i++) {
      angles.push(i * 0.2);
    }
    const magnitude = angles.map((_, i) => 0.5 + i * 0.05);
    return { angles, magnitude };
  }

  if (type === 'flower') {
    const angles = [];
    const magnitude = [];
    for (let i = 0; i < 36; i++) {
      angles.push((2 * Math.PI * i) / 36);
      magnitude.push(i % 2 === 0 ? 1.2 : 0.7);
    }
    return { angles, magnitude };
  }

  if (type === 'heart') {
    const angles = [];
    for (let i = 0; i < 50; i++) {
      // parametric approximation for a heart shape
      const t = (i / 25) * Math.PI;
      angles.push(t);
    }
    const magnitude = angles.map(() => 1 + Math.random() * 1);
    return { angles, magnitude };
  }

  if (type === 'ring-of-rings') {
    const angles = [];
    const magnitude = [];
    for (let ring = 1; ring <= 3; ring++) {
      for (let i = 0; i < 20; i++) {
        angles.push((2 * Math.PI * i) / 20);
        magnitude.push(ring);
      }
    }
    return { angles, magnitude };
  }

  if (type === 'diamond') {
    const baseAngles = [
      Math.PI / 4,
      (3 * Math.PI) / 4,
      (5 * Math.PI) / 4,
      (7 * Math.PI) / 4,
    ];
    const angles = [];
    for (let i = 0; i < 10; i++) {
      angles.push(...baseAngles);
    }
    return { angles };
  }

  if (type === 'hexagon') {
    const angles = [];
    const baseAngles = [
      0,
      Math.PI / 3,
      (2 * Math.PI) / 3,
      Math.PI,
      (4 * Math.PI) / 3,
      (5 * Math.PI) / 3,
    ];
    for (let i = 0; i < 10; i++) {
      angles.push(...baseAngles);
    }
    return { angles };
  }

  if (type === 'spiral') {
    const angles = [];
    for (let i = 0; i < 50; i++) {
      angles.push(i * 0.3);
    }
    const magnitude = angles.map((_, i) => 0.4 + i * 0.1);
    return { angles, magnitude };
  }

  if (type === 'flurry') {
    const angles = Array.from({ length: 60 }, () => Math.random() * 2 * Math.PI);
    const magnitude = angles.map(() => 0.5 + Math.random() * 1.5);
    return { angles, magnitude };
  }

  if (type === 'triple-star') {
    const angles = [];
    for (let s = 0; s < 3; s++) {
      for (let i = 0; i < 15; i++) {
        angles.push((i / 15) * 2 * Math.PI);
        angles.push(((i + 0.2) / 15) * 2 * Math.PI);
      }
    }
    return { angles };
  }

  if (type === 'random-burst') {
    const angles = Array.from({ length: 50 }, () => Math.random() * 2 * Math.PI);
    const magnitude = Array.from({ length: 50 }, () => 0.5 + Math.random() * 2);
    return { angles, magnitude };
  }

  if (type === 'wave') {
    const angles = [];
    const magnitude = [];
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * 2 * Math.PI;
      angles.push(a);
      magnitude.push(1 + Math.sin(a * 4));
    }
    return { angles, magnitude };
  }

  // Default random scatter if none is recognized
  const angles = Array.from({ length: 30 }, () => Math.random() * 2 * Math.PI);
  const magnitude = Array.from({ length: 30 }, () => 0.5 + Math.random() * 1.5);
  return { angles, magnitude };
}

// -------------------------
// 5) Finale Rocket + Explosion
// -------------------------
function launchGrandFinaleRocket(container) {
  const left = '50%';
  const color = '#FFFFFF';

  const rocketEl = document.createElement('div');
  rocketEl.className = 'firework-rocket';
  rocketEl.style.left = left;

  const rocketInner = document.createElement('div');
  rocketInner.className = 'firework-rocket-inner';
  rocketInner.style.backgroundColor = color;
  rocketEl.appendChild(rocketInner);
  container.appendChild(rocketEl);

  // Slight arc
  const driftX = (Math.random() - 0.5) * 40;
  const travelTime = 2200;
  rocketEl.animate(
    [
      { offset: 0,   transform: 'translate(-50%, 0)' },
      { offset: 0.3, transform: `translate(calc(-50% + ${driftX / 2}px), -20vh)` },
      { offset: 0.6, transform: `translate(calc(-50% + ${driftX}px), -45vh)` },
      { offset: 1,   transform: 'translate(-50%, -70vh)' },
    ],
    {
      duration: travelTime,
      easing: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
      fill: 'forwards',
    }
  );

  const trailInterval = setInterval(() => {
    createSpark(container, rocketEl, color);
  }, 60);

  setTimeout(() => {
    clearInterval(trailInterval);
    bigSlowExplosion(container, rocketEl);
  }, travelTime);
}

function createSpark(container, rocketEl, color) {
  const rect = rocketEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const spark = document.createElement('div');
  spark.className = 'firework-spark';
  spark.style.backgroundColor = color;
  spark.style.left = `${centerX}px`;
  spark.style.top = `${centerY}px`;
  container.appendChild(spark);

  spark.animate(
    [
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: 'translate(0, 15px)', opacity: 0 },
    ],
    {
      duration: 500,
      easing: 'ease-out',
      fill: 'forwards',
    }
  );

  setTimeout(() => {
    spark.remove();
  }, 600);
}

// -------------------------
// 6) "Slow" & Long Finale Boom
// -------------------------
function bigSlowExplosion(container, rocketEl) {
  const rect = rocketEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  rocketEl.remove();

  // Increase fragment count + bigger radius
  const fragmentCount = 500;

  for (let i = 0; i < fragmentCount; i++) {
    const angle = Math.random() * 2 * Math.PI;
    // Large radius: 300 - 700
    const radius = 300 + Math.random() * 400;
    // Big downward drift: 700 - 1200
    const rainDistance = 700 + Math.random() * 500;

    const targetX = Math.cos(angle) * radius;
    const targetY = Math.sin(angle) * radius;

    const fragment = document.createElement('div');
    fragment.className = 'firework-fragment';
    fragment.style.backgroundColor = '#FFFFFF';
    fragment.style.left = `${centerX}px`;
    fragment.style.top = `${centerY}px`;
    fragment.style.width = '3px';
    fragment.style.height = '3px';
    fragment.style.borderRadius = '50%';
    container.appendChild(fragment);

    // Very slow: 12 - 18 seconds
    const animDuration = 12000 + Math.random() * 6000;

    // Optional rotations (set to 0 for simplicity)
    const rotateStart = 0;
    const rotateEnd = 0;

    fragment.animate(
      [
        // 0%: start
        {
          offset: 0,
          transform: `translate(0,0) scale(0) rotate(${rotateStart}deg)`,
          opacity: 0,
        },
        // 10%: big "boom"
        {
          offset: 0.1,
          transform: `translate(${targetX * 0.8}px, ${targetY * 0.8}px)
                      scale(2) rotate(${rotateStart}deg)`,
          opacity: 1,
        },
        // 20%: full radius
        {
          offset: 0.2,
          transform: `translate(${targetX}px, ${targetY}px)
                      scale(1.7) rotate(${rotateEnd}deg)`,
          opacity: 1,
        },
        // 35%: drifting downward
        {
          offset: 0.35,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.1}px)
                      scale(1.3) rotate(${rotateEnd}deg)`,
          opacity: 0.95,
        },
        // 50%
        {
          offset: 0.5,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.3}px)
                      scale(1.1) rotate(${rotateEnd}deg)`,
          opacity: 0.8,
        },
        // 65%
        {
          offset: 0.65,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.55}px)
                      scale(0.9) rotate(${rotateEnd}deg)`,
          opacity: 0.6,
        },
        // 80%
        {
          offset: 0.8,
          transform: `translate(${targetX}px, ${targetY + rainDistance * 0.8}px)
                      scale(0.8) rotate(${rotateEnd}deg)`,
          opacity: 0.3,
        },
        // 100%: end
        {
          offset: 1,
          transform: `translate(${targetX}px, ${targetY + rainDistance}px)
                      scale(0.6) rotate(${rotateEnd}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: animDuration,
        easing: 'cubic-bezier(0.25, 0.5, 0.25, 1)',
        fill: 'forwards',
      }
    );

    setTimeout(() => {
      fragment.remove();
    }, animDuration + 500);
  }
}
