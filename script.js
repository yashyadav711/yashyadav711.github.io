// Tool navigation mapping
const toolPages = {
    "calculator": "calculator.html",
    "currency-converter": "currency-converter.html",
    "text-editor": "text-editor.html",
    "color-palette-generator": "color-palette-generator.html",
    "base64-encoder-decoder": "base64.html",
    "ip-lookup": "ip-lookup.html",
    "json-formatter": "json-formatter.html",
    "stopwatch-timer": "stopwatch-timer.html",
    "text-case-converter": "text-case.html",
    "url-encoder-decoder": "url-encoder.html"
};

// Function to navigate to a tool
function navigateTo(tool) {
    // Check if the tool exists in the mapping
    if (toolPages.hasOwnProperty(tool)) {
        window.location.href = `tools/${toolPages[tool]}`;
    } else {
        console.error("Invalid tool:", tool);
    }
}

// Attach event listeners to all tool cards
document.addEventListener("DOMContentLoaded", function () {
    const toolCards = document.querySelectorAll(".tool-card");

    toolCards.forEach(card => {
        card.addEventListener("click", function () {
            const tool = this.getAttribute("data-tool"); // Get tool name from data attribute
            navigateTo(tool);
        });
    });
});
