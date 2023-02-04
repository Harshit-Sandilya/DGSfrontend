const API_URL = "http://127.0.0.1:8000/";

function postTeacher(data) {
  console.log(data);
  fetch(`${API_URL}teacherApp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((value) => {
      console.log(value);
      alert(value.message);
    })
    .catch((err) => {
      alert(err);
    });
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

export { postTeacher, postStudent, postContact };
