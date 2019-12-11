import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {

  text = "https://github.com/codingtub/ngx-kjua";
  render = "svg";
  crisp = true;
  minVersion = 1;
  ecLevel = "H";
  size = 400;
  ratio = undefined;
  fill = "#333333";
  back = "#ffffff";
  rounded = 0;
  quiet = 1;
  mode = "label";
  mSize = 30;
  mPosX = 50;
  mPosY = 50;
  label = "kjua";
  fontname = "Ubuntu";
  fontcolor = "#ff9818";
  fontoutline = true;
  imageAsCode = false;
  imageText = "";
  imgNativeElement = undefined;

  @ViewChild("imgBuffer", { static: false })
  imageElement: ElementRef;

  ngOnInit(): void {
    setTimeout(() => this.imgNativeElement = this.imageElement.nativeElement, 1000);
    // this.imgNativeElement = this.imageElement.nativeElement;
  }

  ngAfterViewInit(): void {
    // this.imgNativeElement = this.imageElement.nativeElement;
  }

  /**
   * Not perfect, I know
   * @param event
   */
  getFiles(event) {
    if ( event.target.files.length > 0 ) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event2: any) => { // called once readAsDataURL is completed
        this.imageElement.nativeElement.src = event2.target.result;
        this.imgNativeElement = this.imageElement.nativeElement;
      };
    }
  }

  get image() {
    if ( !!this.imageText && this.imageText.length > 0 ) {
      return this.imageText;
    } else {
      return this.imgNativeElement;
    }
  }
}
