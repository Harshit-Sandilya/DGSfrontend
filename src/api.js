const API_URL = "https://dgsbackend.onrender.com/";
function postTeacher(data) {
	console.log(data);
	fetch(`${API_URL}teacherApp`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => {
			console.log(value);
			alert(value.message);
		})
		.catch((err) => alert(err));
}

function postStudent(data) {
	console.log(data);
	fetch(`${API_URL}studentReg`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => {
			console.log(value);
			alert("Registration recored successfully");
			//alert(value.message);
		})
		.catch((err) => {
			alert(err);
		});
}

function postContact(data) {
	console.log(data);
	fetch(`${API_URL}contact`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => console.log(value))
		.catch((err) => console.log(err));
}

export { postTeacher, postStudent, postContact };
