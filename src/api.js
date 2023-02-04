const API_URL = "https//127.0.0.1:8000/";

function postTeacher(data) {
	console.log(data);
	fetch(`http://127.0.0.1:8000/studentReg`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => console.log(value))
		.catch((err) => console.log(err));
}

export { postTeacher };
