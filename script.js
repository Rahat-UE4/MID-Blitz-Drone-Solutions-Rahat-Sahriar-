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