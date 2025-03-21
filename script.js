// Tool navigation mapping (Updated to match available tools)
const toolPages = {
    "calculator": "calculator.html",
    "currency-converter": "currency-converter.html",
    "text-editor": "text-editor.html",
    "color-palette-generator": "color-palette-generator.html",
    "base64": "base64.html",
    "ip-lookup": "ip-lookup.html",
    "json-formatter": "json-formatter.html",
    "stopwatch-timer": "stopwatch-timer.html",
    "text-case": "text-case.html",
    "url-encoder": "url-encoder.html",
    "time-zone": "time-zone.html",
    "ip-suite": "ip-suite.html",
    "lorem-ipsum": "lorem-ipsum.html".
    "dns-lookup": "dns-lookup.html"
};

// Function to navigate to a tool
function navigateTo(tool) {
    if (toolPages.hasOwnProperty(tool)) {
        window.location.href = `tools/${toolPages[tool]}`;
    } else {
        console.error("Invalid tool:", tool);
    }
}

// Attach event listeners to all tool cards
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tool-card").forEach(card => {
        card.addEventListener("click", function () {
            const tool = this.getAttribute("onclick").match(/'([^']+)'/)[1]; // Extract tool name
            navigateTo(tool);
        });
    });
});
