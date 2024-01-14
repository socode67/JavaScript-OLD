function calculateResult(operation) {
  try {
    const result = new Function("return " + operation)();
    return result;
  } catch (error) {}
}

// Codez ici
