let result = document.querySelector("#result");

const signup = () => {
    let FName = document.querySelector("#FName").value;
    let LName = document.querySelector("#LName").value;

    result.innerHTML = `!Congratulations ${FName}  ${LName}  you are now signed up`
}