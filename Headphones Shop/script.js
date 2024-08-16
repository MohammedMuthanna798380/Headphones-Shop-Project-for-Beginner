function night_mode() {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
        element.style = "color: white;";
    });
    document.getElementById("night").style.display = "none";
    document.getElementById("day").style.display = "inline";
    document.body.style.backgroundColor = "black";
}

function day_mode() {
    location.reload();
}
function submitForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
    if (name == "" || phone == "" || email == "" || msg == "") {
        alert("فضلا يرجا ادخال بيانات للحقول الفارغة");
    } else
        alert("شكرا " + name + " يسرنا تواصلك معنا وسيتم الرد عليك باقرب وقت");
}