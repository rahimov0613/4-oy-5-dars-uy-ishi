
const fullName = document.getElementsByClassName("fullname")
const userName = document.getElementsByClassName("username")
const age = document.getElementById("age")
const email = document.getElementById("email")
const password = document.getElementById("password")
const gender = document.getElementById("gender")
let user = {}
if (fullName.length < 10) {
    alert("fullname 10 ta belgi dan kam bo'lishi mumkin emas")
    console.log(fullName) //foydalanuvchi nma yozganini bilib turish uchun
    return;
} else if (fullName.length > 10) {
    user.push(fullName)
}

if (userName < 3) {
    alert("username 3 ta belgi dan kam bo'lishi mumkin emas")
    console.log(userName)//foydalanuvchi nma yozganini bilib turish uchun
    return;
} else if (userName > 3) {
    user.push(userName)
}

if (age < 10) {
    alert("yoshin kichkinekan uka")
    console.log(age)//foydalanuvchi nma yozganini bilib turish uchun
    return;
} else if (age > 10) {
    user.push(age)
}

if (!email.includes(`@`)) {
    alert("emailni noto'g'ri kiritdingiz")
    console.log(email)
    return;
} else if (email.includes(`@`)) {
    user.push(`${email}`)
}

if (password.length < 5) {
    alert(`parol 5 ta belgidan ko'p bo'lishi kerak`)
    console.log(password);
    return
} else if (password.length > 5) {
    user.push(password)
}

if (!gender) {
    alert(`iltimos jinsingizni kiriting`)
    return
} else if (gender === `male` || gender === `female`) {
    user.push(gender)
}

module.exports = { user }