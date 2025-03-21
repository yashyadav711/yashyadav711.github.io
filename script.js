// Tool navigation mapping
const toolPages = {
<<<<<<< HEAD
    "calculator": "calculator.html",
    "currency-converter": "currency-converter.html",
    "text-editor": "text-editor.html",
    "color-palette-generator": "color-palette-generator.html",
    "base64-encoder-decoder": "base64.html",
    "ip-lookup": "ip-lookup.html",
    "json-formatter": "json-formatter.html",
    "stopwatch-timer": "stopwatch-timer.html",
    "text-case-converter": "text-case.html",
    "url-encoder-decoder": "url-encoder.html",
    "time-zone-converter": "time-zone.html"
=======
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
>>>>>>> testing
};

// Function to navigate to a tool
function navigateTo(tool) {
    if (toolPages.hasOwnProperty(tool)) {
<<<<<<< HEAD
        window.location.href = `tools/${toolPages[tool]}`;  // Ensure correct path
=======
        window.location.href = toolPages[tool];
>>>>>>> testing
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
