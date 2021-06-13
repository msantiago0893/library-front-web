export interface Dao {

    consultAll (): any;

    add (item: Object): any;

    delete (id: number): any;

    update (id?:number, item?: any): any;
}