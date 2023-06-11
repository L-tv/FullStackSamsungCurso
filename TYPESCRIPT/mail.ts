export class mail {
    private _tipo : string;
    private _mail : string;

    constructor (
        tipo : string,
        mail : string,
    )
    {
        this._tipo = tipo;
        this._mail = mail;
    }
    public get tipo () : string {
        return this._tipo;
    }
    public set tipo(value : string) {
        this._tipo = value;
    }
    public get mail () : string {
        return this._mail;
    }
    public set mail(value : string) {
        this._mail = value;
    } 
}