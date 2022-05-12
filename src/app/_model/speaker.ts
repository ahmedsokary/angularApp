export class Speaker {
    constructor(
    public  id:Number,
    public  email:String,
    public  userName:String,
    public password:String,
    public address:{city:String,street:String,building:Number}
    ){}
}
