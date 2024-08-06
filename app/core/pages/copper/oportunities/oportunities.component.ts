import { Component } from '@angular/core';
import { CargarCompanys, CargarOportunities, CargarOportunity } from 'src/app/core/interfaces/cargar-interfaces.interfaces';
import { Company } from 'src/app/core/models/company.model';
import { ContacType } from 'src/app/core/models/contacType.model';
import { Oportunity } from 'src/app/core/models/oportunity.model';
import { UserCopper } from 'src/app/core/models/userCopper.model';
import { CopperServices } from 'src/app/core/services/copper.service';
import { OportunitiesService } from 'src/app/core/services/oportunities.service';
import { FunctionsService } from 'src/app/shared/services/functions.service';

@Component({
  selector: 'app-oportunities',
  templateUrl: './oportunities.component.html',
  styleUrls: ['./oportunities.component.css']
})
export class OportunitiesComponent {

  loading = false
  oportunities: Oportunity[] = []
  oportunitiesTemp: Oportunity[]
  userCoppers: UserCopper[]
  contacTypes: ContacType[]

  rol = this.functionsService.getLocal('role')
  constructor(
    private copperServices: CopperServices,
    private oportunitiesServices: OportunitiesService,
    private functionsService: FunctionsService,
  ) {
    this.getCatalogos()
    this.getOportunities()
  }
  getCatalogos() {
    this.copperServices.cargarUserCoppesAll().subscribe((resp: any) => {

      this.userCoppers = resp.userCoppers
    })
    this.copperServices.cargarContacTypeAll().subscribe((resp: any) => {

      this.contacTypes = resp.contacTypes
      console.log('this.contacTypes', this.contacTypes)
    })
  }
  getOportunities() {
    this.loading = true
    this.oportunitiesServices.cargarOportunitiesAll().subscribe((resp: any) => {
      console.log('resp', resp)

      setTimeout(() => {
        this.oportunities = resp.oportunitys
        this.oportunitiesTemp = resp.oportunitys
        this.loading = false

      }, 1500);
    })
  }

  editUsuario(id: string) {

    this.functionsService.navigateTo(`/core/copper/oportunities/edit-company/true/${id}`)

  }

  viewUsuario(id: string) {
    this.functionsService.navigateTo(`/core/copper/oportunities/edit-company/false/${id}`)

  }
  asignatedBy(type: String, id: number) {
    if (id !== null) {

      if (type === 'assignee_id') {
        if (this.userCoppers.filter((usC) => usC.id === id)) {

          var user = this.userCoppers.filter((usC) => usC.id === id);
          return user[0].name
        } else {
          return ''
        }
      }
      else if (type === 'contact_type_id') {
        if (this.contacTypes.filter((usC) => usC.id === id)) {

          var contacType = this.contacTypes.filter((usC) => usC.id === id);

          if (contacType.length > 0) {

            return contacType[0].name
          } else {
            return ''
          }
        } else {
          return ''
        }
      }
      else {
        return ''
      }
    } else {
      return ''
    }
  }
  newCompany() {

    this.functionsService.navigateTo('core/copper/oportunities/new-company')
  }

} 
