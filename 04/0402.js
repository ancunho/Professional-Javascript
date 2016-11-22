//with사용
function buildUrl() {
	var qs = "?debug-true";
	with(location) {
		var url = location + qs;
	}

	return url;
}
console.log(buildUrl());
