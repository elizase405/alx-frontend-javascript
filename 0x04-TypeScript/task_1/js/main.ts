interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Director extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	firstName: string;
	lastName: string;
}
function printTeacher({ firstName, lastName }: printTeacherFunction) {
	return `${firstName}.${lastName}`;
}
