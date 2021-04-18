export interface Crud {
    consultAll()
    delete(id:any)
    create(object:any)
    consultById(id:any)
    update(id:number, object:any)
}