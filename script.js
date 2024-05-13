function calculateROI() {
    var purchasePrice = parseFloat(document.getElementById("purchase-price").value);
    var refurbCost = parseFloat(document.getElementById("refurb-cost").value);
    var arv = parseFloat(document.getElementById("arv").value);

    var totalInvestment = purchasePrice + refurbCost;
    var roi = ((arv - totalInvestment) / totalInvestment) * 100;
    var capRate = (arv - totalInvestment) / arv * 100;

    document.getElementById("roi").innerText = roi.toFixed(2);
    document.getElementById("cap-rate").innerText = capRate.toFixed(2);

    var recommendation = document.getElementById("recommendation");
    if (roi >= 7 || capRate >= 7) {
        recommendation.innerText = "This is a good investment opportunity.";
        recommendation.style.color = "green";
    } else {
        recommendation.innerText = "This may not be the best investment opportunity.";
        recommendation.style.color = "red";
    }

    // Show results
    document.getElementById("results").style.display = "block";
}
