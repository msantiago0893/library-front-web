export class Document {

    name: String;
    extension: String;
    size: String;

    constructor(data:any) {

        this.name = data.name || '';
        this.extension = data.name ? data.name.split('.').pop() : '';
        this.size = data.size || '';
    }

}