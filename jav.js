var a = 0;
var b = 0;
var i = 0;
var Nam = 0;
var Nu = 0;
var GTK = 0;

var TenHS = new Array();
var TuoiHS = new Array();
var Sex = new Array();




//************************IN RA DANH SÁCH HỌC SINH*****************************
function inform() {
    var newHS = document.getElementById('ten').value;
    var newTuoi = document.getElementById('tuoi').value;
    var GioiTinh = document.getElementById('gioitinh').value;

    //    xuly();

    TenHS.push(newHS);
    TuoiHS.push(newTuoi);
    Sex.push(GioiTinh);

    // console.log(TenHS[i]);
    // console.log(TuoiHS[i]);
    // console.log(Sex[i]);

    var show = document.getElementById('du-lieu');
    var hang = document.createElement('tr');
    var stt = document.createElement('td');
    var cotten = document.createElement('td');
    var cottuoi = document.createElement('td');
    var gioitinh = document.createElement('td');

    hang.setAttribute('class', ++b);

    a++;
    stt.textContent = a;
    cotten.textContent = TenHS[i];
    cottuoi.textContent = TuoiHS[i];
    gioitinh.textContent = Sex[i];

    show.appendChild(hang);
    hang.appendChild(stt);
    hang.appendChild(cotten);
    hang.appendChild(cottuoi);
    hang.appendChild(gioitinh);
    i++;
}


// **************************************SỰ KIỆN THÊM VÀO DANH SÁCH**************************
$('#but').click(function() {

    var newHS = document.getElementById('ten').value;
    var newTuoi = document.getElementById('tuoi').value;
    var GioiTinh = document.getElementById('gioitinh').value;

    if (newHS.length == "" || newTuoi.length == "") {
        alert('Nhập bị thiếu');
    } else {
        inform();
    }


    if (GioiTinh == 'Nam') {
        Nam++;
    }
    if (GioiTinh == 'Nữ') {
        Nu++;
    }
    if (GioiTinh == 'Giới tính khác') {
        GTK++;
    }


});


// *****************************TÌM KIẾM TRONG DANH SÁCH********************************


$("#timkiem").click(function() {
    var gioitinh = document.getElementById('tim-kiem').value;
    if (Nam > 0 && gioitinh == 'Nam' || Nu > 0 && gioitinh == 'Nữ' ||
        GTK > 0 && gioitinh == 'Giới tính khác') {
        if (gioitinh == 'Nam') {
            alert('Có tất cả: ' + Nam + " Nam");
        }
        if (gioitinh == 'Nữ') {
            alert('Có tất cả: ' + Nu + " Nữ");
        }
        if (gioitinh == 'Giới tính khác') {
            alert('Có tất cả: ' + GTK + " Giới tính khác");
        }
    } else {
        alert('Không có ' + gioitinh + " trong danh sách");
    }
});



$(document).ready(function() {
    $('.1').mousedown(function() {
        $(this).css('color', 'blue');
    });
    $('.1').mouseup(function() {
        $(this).css('color', 'red');
    });
});


//****************RESET LẠI FORM NHẬP***************** /
var form = document.querySelector('#form');
document.querySelector('button'), addEventListener('click', function(e) {
    e.preventDefault();
    form.reset();
}, false)