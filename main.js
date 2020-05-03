document.getElementById("Submit").addEventListener("click", function (e) {
    e.preventDefault();

    var firstname = document.getElementById("first_Name").value;
    var Surname = document.getElementById("Sur_Name").value;
    var email = document.getElementById("E-mail").value;
    var password = document.getElementById("Pass_word").value;


    var male = document.getElementById("Male");
    var female = document.getElementById("Female");

    if (male.checked) {
        var checkedMale = male.value
    } else if (female.checked) {
        var checkedFemale = female.value
    } else {
        return false
    }

    // var template = document.getElementById('template');
    // template.innerHTML = `Firstname: ${firstname}, Surname: ${Surname}, Email: ${email}, Password: ${password}, Male: ${checkedMale},Female: ${checkedFemale}`
    // template.style.display='block'

    alert(
        `Firstname: ${firstname}`,
        `Surname: ${Surname}`,
        `Email: ${email}`,
        `Password: ${password}`,
        `Male: ${checkedMale}`,
        `Female: ${checkedFemale}`
    );
})