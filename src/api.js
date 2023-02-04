const API_URL = "http://127.0.0.1:8000/";

function postStudent(data) {
	console.log(data);
	fetch(`${API_URL}studentReg`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => console.log(value))
		.catch((err) => console.log(err));
}
function postContact(data) {
	console.log(data);
	fetch(`${API_URL}contact`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => console.log(value))
		.catch((err) => console.log(err));
}

export { postStudent, postContact };
