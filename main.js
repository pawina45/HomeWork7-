

 // ให้สร้าง code เพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form ดังนี้
 // 1.ทุก input ต้องไม่ใส่ค่าว่าง
 // 2.username ความยาวค้องมากกว่า 3 ตัวอักษร
 // 3.password ความยาวค้องมากกว่า 4 ตัวอักษร

 // ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
 // ถ้า validate ผ่านให้ไปที่ https://www.example.com



const loginForm = document.querySelector(".login-form");
const Validate_Uname = document.querySelector(".Validate_Uname");
const Validate_Pass = document.querySelector(".Validate_Pass");

const hdlLogin = e => {
    e.preventDefault();
    let allInput = loginForm.elements
    const usernameInput = document.querySelector("#username");
    const validateUsername = usernameInput.value.trim();
    if (
        validateUsername.length > 3 &&
        !/^\d/.test(validateUsername) &&
        !/\s/.test(validateUsername)
    ) {
        Validate_Uname.textContent = "";
        usernameInput.style.borderColor = "initial";
    } else {
        usernameInput.style.borderColor = "red";
        Validate_Uname.textContent = 'Username ต้องมีความยาวมากกว่า 3 ตัวอักษร'
        Validate_Uname.style.color = 'red'
        return;
    }
    // Validate password
    const passwordInput = document.querySelector("#password");
    const validatePassword = passwordInput.value.trim();
    if (validatePassword.length > 4 && /\d/.test(validatePassword) && /[a-zA-Z]/.test(validatePassword)) {
        Validate_Pass.textContent = "";
        passwordInput.style.borderColor = "initial";
    } else {
        passwordInput.style.borderColor = "red";
        Validate_Pass.textContent = 'Password ต้องมีความยาวมากกว่า 4 ตัวอักษร และต้องมีทั้งตัวเลขและตัวอักษร'
        Validate_Pass.style.color = 'red'
        return;
    }
    // Validate select
    const selectInput = document.querySelector("#role");
    if (selectInput.value !== "") {
        selectInput.style.borderColor = "initial";
    } else {
        selectInput.style.borderColor = "red";
        return;
    }
    if (validateLogin(validateUsername, validatePassword)) {
        alert('Login successful');
        window.location.href = "https://www.example.com";
    } else {
        alert(`ข้อมูลที่คุณป้อนมาได้แก่\nUsername : ${validateUsername}\nPassword : ${validatePassword}\nRole : ${selectInput.value}`);
        window.location.href = "https://www.example.com";
    }
};

function validateLogin(username, password) {
    const users = [
        { username: 'andy', password: 'a1234' },
        { username: 'bobby', password: 'a2345' },
        { username: 'candy', password: 'a3456' },
        { username: 'pawina', password: 'p3456' }

    ];
    return users.some(user => user.username === username && user.password === password);
}


loginForm.addEventListener('submit', hdlLogin);




  