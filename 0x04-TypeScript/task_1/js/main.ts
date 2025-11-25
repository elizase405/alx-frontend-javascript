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
	return `${firstName}. ${lastName}`;
}

interface StudentClassConstructorInterface {
	new (firstName: string, lastName: string): StudentClassInterface
}
interface StudentClassInterface { 
	workOnHomework(): string;
	displayName(): string;
}
class StudentClass implements StudentClassInterface:
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return "Currently working";
	}
	displayName(): string {
		return this.firstName;
	}

