let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if (value === "AC") {
            string = "";
            inputBox.value = "0";
        }
        else if (value === "DEL") {
            string = string.slice(0, -1);
            inputBox.value = string || "0";
        }
        else if (value === "=") {
            try {
                string = eval(string).toString();
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        }
        else {
            if (string === "0") string = "";
            string += value;
            inputBox.value = string;
        }
    });
});