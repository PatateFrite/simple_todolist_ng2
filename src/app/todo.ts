export class Todo {
	_id: number;
	title: string = '';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}