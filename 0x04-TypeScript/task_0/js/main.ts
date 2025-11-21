interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const student1: Student = { firstName: Mary, lastName: Jones, age: 16, location: Nigeria }
const student2: Student = { firstName: John, lastName: Jones, age: 16, location: Nigeria }
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
table.border = '1';

const headRow = document.createElement("tr")
const nameHeader = document.createElement("th")
nameHeader.textContent = "firstName";
const locationHeader = document.createElement("th")
locationHeader.textContent = "location";

headRow.appendChild(nameHeader)
headRow.appendChild(locationHeader)
table.appendChild(headRow)

studentsList.forEach(student => {
	const bodyRow = document.createElement("tr");
	const studentName = document.createElement("td")
	studentName.textContent = student.firstName;
	const studentLocation = document.createElement("td")
	studentLocation.textContent = student.location;

	bodyRow.appendChild(studentName)
	bodyRow.appendChild(studentLocation)
	table.appendChild(bodyRow)
})
document.body.appendChild(table);

