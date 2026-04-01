let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let historyList = document.getElementById("historyList");
let clearHistoryBtn = document.getElementById("clearHistory");

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
                let expression = string;
                let result = eval(string).toString();

                inputBox.value = result;


                if (expression !== result) {
                    addHistory(expression, result);
                }

                string = result;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        }
        else if (value === "±") {
            if (string) {
                string = (parseFloat(string) * -1).toString();
                inputBox.value = string;
            }
        }
        else {
            if (string === "0") string = "";
            string += value;
            inputBox.value = string;
        }
    });
});


function addHistory(expression, result) {
    if (!historyList) return;


    const emptyMsg = historyList.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    let div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `${expression} = <b>${result}</b>`;


    div.style.cursor = "pointer";
    div.onclick = () => {
        string = result;
        inputBox.value = string;
    };

    historyList.prepend(div);
}


if (clearHistoryBtn) {
    clearHistoryBtn.onclick = () => {
        historyList.innerHTML = '<div class="empty-msg" style="color: #666; text-align: center;">No history yet</div>';
    };
}