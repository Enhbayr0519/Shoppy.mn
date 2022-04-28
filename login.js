let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let sign = document.querySelector(".sign");
sign.addEventListener('click', () => {
    if(phone.value === "" || pass.value === ""){
        alert("Бүртгэлийн хуудсаа үнэн зөв гүйцэт бөглөнө үү...")
    } else {
        let users = JSON.parse(localStorage.users)
        console.log(users)
        users.forEach((e) => {
            if(e.Phone == phone.value && e.Password == pass.value){
                window.location.href = "./burtgegdlee.html"
            } else{
                // alert("Error")
            }
        })
    }
})
