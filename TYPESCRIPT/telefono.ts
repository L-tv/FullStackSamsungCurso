export class telefono {
    private _tipo : string;
    private _numero : number;

    constructor (
        tipo : string,
        telefono : number,
 
    )
    {
        this._tipo = tipo;
        this._numero = telefono;
    }
    public get tipo () : string {
        return this._tipo;
    }
    public set tipo(value : string) {
        this._tipo = value;
    }
    public get telefono () : number {
        return this._numero;
    }
    public set telefono(value : number) {
        this._numero = value;
    } 
}