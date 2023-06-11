export class direccion {
    private _calle : string;
    private _numero : number;
    private _piso : number;
    private _letra: string ;
    private _provincia: string;
    private _localidad: string;
    private _codigoPostal: number;

    constructor (

        calle: string,
        numero : number,
        piso : number,
        letra: string,
        provincia : string,
        localidad : string,
        codigoPostal : number,
        
        )
        {
            this._calle = calle;
            this._numero = numero;
            this._piso = piso;
            this._letra = letra;
            this._provincia = provincia;
            this._localidad = localidad;
            this._codigoPostal = codigoPostal;
        }


        public get calle () : string {
            return this._calle;
        }
        public set calle(value : string) {
            this._calle = value;
        }
        public get letra () : string {
            return this._letra;
        }
        public set letra(value : string) {
            this._letra = value;
        } 
        public get numero () : number {
            return this._numero;
        }
        public set numero(value : number) {
            this._numero = value;
        }
        public get piso () : number {
            return this._piso;
        }
        public set piso(value : number) {
            this._piso = value;
        }
        public get provincia () : string {
            return this._provincia;
        }
        public set provincia (value : string) {
            this._provincia = value;
        }
        public get localidad () : string {
            return this._localidad;
        }
        public set localidad(value : string) {
            this._localidad = value;
        }
        public get codigoPostal () : number {
            return this._codigoPostal;
        }
        public set codigoPostal(value : number) {
            this._codigoPostal = value;
        }
    }
