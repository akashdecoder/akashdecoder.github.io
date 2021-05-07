function insertValue() {
    if(document.getElementById("branch").value == "OTHERS") {
        var branch = document.getElementById("branch");
        var promt = prompt("Please Enter branch", "Other Branch");
        var newOption = document.createElement("OPTION");
        var newOptionVal = document.createTextNode(promt);
        newOption.appendChild(newOptionVal);
        branch.insertBefore(newOption, branch.firstChild);
    }
}