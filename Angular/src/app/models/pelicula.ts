export class Pelicula{
   /* public title: string;
    public year: number;
    public image: string;

    constructor(title: string,year: number,image: string){
        this.title = title;
        this.year = year;
        this.image = image;
    }*/
    
    //Forma para declarar en el constructor
    constructor(
        public title: string,
        public year: number,
        public image: string
    ){}
}