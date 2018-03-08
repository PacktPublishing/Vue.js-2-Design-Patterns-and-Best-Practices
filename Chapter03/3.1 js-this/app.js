(function() {
	/**
   * Outputting the value of this to the console in the global context returns the Window object.
   */
	console.log(this);

	/*
  * This means we can either use global window objects by their name or prefixed with this:
  */
	//alert('Alert one');
	//this.alert('Alert two.');

	/**
   * This no longer works when we enter a new scope, take our Student object as an example:
   */
	const Student = {
		firstName: 'Paul',
		lastName: 'Halliday',
		grades: [50, 95, 70, 65, 35],
		getFullName() {
			return `${this.firstName} ${this.lastName}`;
		},
		getGrades() {
			return this.grades.reduce((accumulator, grade) => accumulator + grade);
		},
		toString() {
			return `Student ${this.getFullName()} scored ${this.getGrades()}/500`;
		}
	};

	// Display this on web page.
	let res = document.createTextNode(Student.toString());
	let heading = document.createElement('h1');
	heading.appendChild(res);
	document.body.appendChild(heading);
})();
