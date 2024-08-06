import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent {
  @Input() data: any;

  @Output() sendRes: EventEmitter<any>;
  closeResult: string;

  constructor(private modalService: NgbModal) {
    this.sendRes = new EventEmitter();
  }


  openFullscreen(content) {
    this.modalService.open(content, { fullscreen: true });
    setTimeout(() => {

      this.sendRe({ invitado: this.data.invitado.value, fiesta: this.data.fiesta })
      return
    }, 1500);
  }

  sendRe(content) {
    this.sendRes.emit(content)
  }
}
