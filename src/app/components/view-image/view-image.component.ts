import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.less']
})
export class ViewImageComponent implements OnInit{
    

    tripPhotos: any[] = [];
    displayPhotos: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    modalRef!: BsModalRef;
    enlargedPhoto: BehaviorSubject<string> = new BehaviorSubject<string>('');
    startingIndex: BehaviorSubject<any> = new BehaviorSubject<any>(0);
    index!: number;
    modalOptions: ModalOptions = {
        backdrop : 'static',
        keyboard : false
      }
  


    constructor(
        private modalService: BsModalService,
        private changeDetectorRef: ChangeDetectorRef
        ){}

    ngOnInit() {
        this.index = 0;
    }

    readUrl(event:any) {
        if (event.target.files ) {
        let files: FileList = event.target.files;
        var reader = new FileReader();
        for(let i = 0; i < files.length; i = i+1) {
            let element = files[i];
            var reader = new FileReader();
    
            reader.onload = (event: ProgressEvent) => {
                this.tripPhotos.push((<FileReader>event.target).result);
            }

            
            reader.readAsDataURL(element);
        }

        this.displayPhotos.next(this.tripPhotos);
        this.changeDetectorRef.detectChanges();

        }
    }

    close() {
        this.modalRef.hide();
      }

    openModal(template: TemplateRef<any>, index: number) {
        if (index || index === 0) {
            this.startingIndex!.next(index);
            this.index = index;
            this.changeDetectorRef.detectChanges();
            this.modalRef = this.modalService.show(template, this.modalOptions);
        }
        
    }
   
    deletePhoto(index: BehaviorSubject<any>) {
        this.tripPhotos.splice(index.getValue(), 1);
        this.displayPhotos.next(this.tripPhotos);
        this.modalRef.hide();
    }

    log(event: number) {
        this.index = event;
        this.startingIndex.next(event)
      }
}
