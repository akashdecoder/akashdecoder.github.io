function insertValue() {
    if(document.getElementById("branch").value == "OTHERS") {
        var branch = document.getElementById("branch");
        var promt = prompt("Please Enter branch (After Entering revisit the dropdown)");
        if(promt == "") {
            alert("Enter value");
        } else {
            var newOption = document.createElement("OPTION");
            var newOptionVal = document.createTextNode(promt);
            branch.remove(branch.selectedIndex)
            newOption.appendChild(newOptionVal);
            branch.insertBefore(newOption, branch.firstChild);
        }   
    }
}