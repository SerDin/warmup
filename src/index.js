module.exports = function warmup(temperature) {
	// your implementation here
	// (50 °C × 9/5) + 32 = 122 °F
	var warmup
	var temperature

	temperature *= 9
	temperature /= 5
	temperature += 32

	warmup = temperature

	return warmup
}
