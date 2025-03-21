// Tool navigation mapping
const toolPages = {
    "calculator": "tools/calculator.html",
    "currency-converter": "tools/currency-converter.html",
    "text-editor": "tools/text-editor.html",
    "color-palette-generator": "tools/color-palette-generator.html",
    "base64": "tools/base64.html",
    "ip-lookup": "tools/ip-lookup.html",
    "json-formatter": "tools/json-formatter.html",
    "stopwatch-timer": "tools/stopwatch-timer.html",
    "text-case": "tools/text-case.html",
    "url-encoder": "tools/url-encoder.html",
    "ip-suite": "tools/ip-suite.html"
};

// Function to navigate to a tool
function navigateTo(tool) {
    if (toolPages.hasOwnProperty(tool)) {
        window.location.href = toolPages[tool];
    } else {
        console.error("Invalid tool:", tool);
    }
}

// Attach event listeners to all tool cards
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tool-card").forEach(card => {
        card.addEventListener("click", function () {
            navigateTo(this.getAttribute("data-tool"));
        });
    });
});
