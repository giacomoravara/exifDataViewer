import { SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, ElementRef, ViewChild, HostBinding, HostListener, Output } from '@angular/core';
import {Renderer2} from '@angular/core';

declare var EXIF: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('img') imgEl: ElementRef;
  @ViewChild('imageDiv') imageDiv: ElementRef;
  activePage: string;
  title = "exif";
  output;
  dataSource;
  keys;
  maps = "";
  angle= 0;
  hideExif: boolean = true
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(){}

  ngOnInit(){
    this.keys = [];
    this.output = [];
    this.activePage = "main";
  }

     
  uploadImage(fileInput: any) {
    this.angle = 0;
    this.output = [];
    this.previewUrl="";
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match('image/jpeg') == null || mimeType.match('image/tiff') )  {
    console.log("error")

    return alert("Incorrect file format");
  }

  var reader = new FileReader();      
  const img = new Image();
     

  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => {
    this.previewUrl = reader.result;
    this.activePage = "exif";

    }
  }





//ROTATE IMAGE
rotate(){
  this.angle = (this.angle + 90) % 360;
  this.imageDiv.nativeElement.style.transform ="rotate(" + this.angle + "deg)"
}


//GET EXIF DATA
getExif(event) {
  let allMetaData: any;
  EXIF.getData(this.imgEl.nativeElement, function () {
      console.log(this);  
      allMetaData = EXIF.getAllTags(this);
    });
    this.output = allMetaData;
    console.log(this.output)
    this.setDataSource();
    this.hideExif = false;

  }


//PROCESSING EXIF DATA TO GUARANTEES FORMATTED TEXT
setDataSource(){
this.keys=[];
for(let key in this.output) {
  this.keys.push(key.toString());
  if (typeof this.output[key] == "object") {
    if (this.output[key]  instanceof Number) {
      this.output[key] =  this.output[key]  + "  [" + this.output[key].numerator + "/" + this.output[key].denominator +"]";
    } else if (key == "GPSLatitude" || key == "GPSLongitude") {
      this.output[key] = this.output[key];
      var lat = this.output["GPSLatitude"];
      var long =  this.output["GPSLongitude"];
      this.maps = "http://www.google.com/maps/place/" + lat +","+ long;
    } else{
      this.output[key] = this.output[key].length + " values";
    }
};
}
} 
}
