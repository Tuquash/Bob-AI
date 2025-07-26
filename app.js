function analyzeBottle() {
    const input = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");
    if (!input) {
        resultDiv.innerHTML = "<p>Please enter a whiskey name.</p>";
        return;
    }
    // Fake data for demonstration
    const mockData = {
        name: input,
        price: "$79.99",
        platform: "BAXUS",
        recommendation: "Great deal! Smooth finish with hints of vanilla and oak.",
    };
    resultDiv.innerHTML = `
        <h3>Results for "${mockData.name}"</h3>
        <p><strong>Estimated Price:</strong> ${mockData.price}</p>
        <p><strong>Platform:</strong> ${mockData.platform}</p>
        <p><strong>AI Says:</strong> ${mockData.recommendation}</p>
    `
}