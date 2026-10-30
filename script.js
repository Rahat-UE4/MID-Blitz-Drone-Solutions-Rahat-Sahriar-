function calculateDiscount() {
    var rawInput = document.getElementById("originalPrice").value;
    
    if (rawInput > 0) {
        var discountAmount = rawInput * 0.10;
        var finalValue = rawInput - discountAmount;
        document.getElementById("discountedPrice").value = finalValue + " BDT (10% Discount Applied)";
    } else {
        document.getElementById("discountedPrice").value = "Please enter a valid price amount.";
    }
}

function submitDemo() {
    var name = document.getElementById("userName").value;

    if (name == "") {
        alert("Please enter your name first.");
    } else {
        alert("Thanks for booking a demo slot, " + name + "! We will contact you soon.");
    }
}