
import {mail} from "./mail";
import {telefono} from "./telefono";
import {direccion} from "./direccion";

export class Persona {
    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _DNI: string;
    private _cumpleaños: string;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: direccion [];
    private _mail: mail [];
    private _telefono: telefono [];
    private _notas: string;

  
    constructor(
        nombre:string, 
        apellido:string, 
        edad:number,  
        DNI: string,
        cumpleaños: string,
        colorFavorito: string,
        sexo: string,
        Direcciones: direccion [],
        mail: mail[],
        telefono: telefono[],
        notas: string) {

      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
      this._DNI = DNI;
      this._cumpleaños = cumpleaños;
      this._colorFavorito = colorFavorito;
      this._sexo = sexo;
      this._direcciones = Direcciones;
      this._mail = mail;
      this._telefono = telefono;
      this._notas = notas;
      }
      public get nombre () : string {
      return this._nombre;
      }
        public set nombre(value : string) {
        this._nombre = value;
        }
          public get apellido () : string {
            return this._apellido;
          }
            public set apellido(value : string) {
              this._apellido = value;
              }
                public get edad () : number {
                return this._edad;
                }
                  public set edad(value : number) {
                  this._edad = value;
                  }
                    public get DNI () : string {
                    return this._DNI;
                    }
                      public set DNI(value : string) {
                        this._DNI = value;
                      }
                        public get cumpleaños () : string {
                        return this._cumpleaños;
                        }
                          public set cumpleaños(value : string) {
                          this._cumpleaños = value;
                            }
                          public get colorFavorito () : string {
                            return this._colorFavorito;
                            }
                            public set colorFavorito(value : string) {
                            this._colorFavorito = value;
                              }
                              public get sexo () : string {
                                return this._sexo;
                                }
                                public set sexo(value : string) {
                                this._sexo = value;
                                  }
                                  public get direcciones () : direccion[] {
                                    return this._direcciones;
                                    }
                                    public set direcciones(value : direccion[]) {
                                    this._direcciones = value;
                                      }
                                      public get mail () : mail[] {
                                        return this._mail;
                                        }
                                        public set mail(value : mail[]) {
                                        this._mail = value;
                                          }
                                          public get telefono () : telefono[] {
                                            return this._telefono;
                                            }
                                            public set telefono(value : telefono[]) {
                                            this._telefono = value;
                                              }
                                              public get notas () : string {
                                                return this._notas;
                                                }
                                                public set notas(value : string) {
                                                this._notas = value;
                                                  }    
      }

    