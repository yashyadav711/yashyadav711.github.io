function navigateTo(tool) {
    const toolPaths = {
        calculator: "tools/calculator.html",
        converter: "tools/currency-converter.html",
        notes: "tools/text-editor.html",
        todo: "tools/color-palette-generator.html"
    };

    if (toolPaths[tool]) {
        window.location.href = toolPaths[tool];
    } else {
        console.error("Tool not found!");
    }
}
