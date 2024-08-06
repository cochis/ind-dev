export class Usuario {
    constructor(
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public usuario: string,
        public email: string,
        public password: string,
        public img: string,
        public role: string,
        public usuarioCreated: string,
        public activated: boolean,
        public dateCreated: number,
        public lastEdited: number,
        public uid: string
    ) { }
}