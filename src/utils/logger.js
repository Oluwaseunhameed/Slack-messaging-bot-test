export function logSuccess(message) {
  console.log(`✅ ${message}`);
}

export function logError(message, error) {
  console.error(`❌ ${message}:`, error);
}
