// JavaScript Document
function KiemTra()
{
	var hoTen=document.getElementById("hoten");
		if(hoTen.value=="")
		{
			alert("Vui lòng nhập Họ Tên.");
			hoTen.focus();
			return false;
		}
	var hoTen=document.getElementById("user");
	if(tendn.value=="")
	{
		alert("Vui lòng nhập Tên đăng nhập.");
		hoTen.focus();
		return false;
	}
	var email=window.document.dangky.txtEmail;
	re=/\w+@\w+\.\w+/;
	if(email.value=="")
	{
		alert("Bạn chưa nhập Email.");
		email.focus();
		return false;
	}
	else if(re.test(email.value)==false){
			alert("Email không đúng định dạng!");
			email.focus();
			return false;
	}
	var pass=document.getElementById("pass");
		if(hoTen.value=="")
		{
			alert("Vui lòng không được để trống.");
			hoTen.focus();
			return false;
		}	
	alert("Đăng ký thành công!Xin chúc mừng.");
	return true;
}
