import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargarRoles  } from 'src/app/core/interfaces/cargar-interfaces.interfaces';
import { Role } from 'src/app/core/models/role.model';
 import { Usuario } from 'src/app/core/models/usuario.model';
import { RolesService } from 'src/app/core/services/roles.service';
 import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { FunctionsService } from 'src/app/shared/services/functions.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  ADM = environment.ADM
 
  rol = this.functionsService.getLocal('role')
  loading = false
 
  roles: Role[]
  usuario: Usuario
  public form!: FormGroup
  today: Number = this.functionsService.getToday()
  submited: boolean = false
  cargando: boolean = false
  msnOk: boolean = false


  constructor(
    private fb: FormBuilder,
    private functionsService: FunctionsService, 
    private rolesService: RolesService,
    private usuariosService: UsuariosService
  ) {
    this.loading = true
   
    
    this.getCatalogos()
    this.createForm()
    setTimeout(() => {

      this.loading = false
    }, 1500);
  }



  getCatalogos() {

    this.loading = true
    this.rolesService.cargarRolesAll().subscribe((resp: CargarRoles) => {
      this.roles = this.functionsService.getActivos(resp.roles)
     

    },
      (error: any) => {
        this.functionsService.alertError(error,'Usuarios')

        this.loading = false


      })


  }

  get errorControl() {
    return this.form.controls;
  }


  createForm() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidoPaterno: ['', [Validators.required, Validators.minLength(3)]],
      apellidoMaterno: [''],
 usuario: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(".{6,}")]],
      img: [''],
      role: ['', [Validators.required]],
      
      activated: [false],
      dateCreated: [this.today],
      lastEdited: [this.today],
    })
  }


  onSubmit() {
    this.loading = true
    this.submited = true

    if (this.form.valid) {
      this.form.value.nombre = this.form.value.nombre.toUpperCase()
      this.form.value.apellidoPaterno = this.form.value.apellidoPaterno.toUpperCase()
      this.form.value.apellidoMaterno = this.form.value.apellidoMaterno.toUpperCase()
      this.form.value.email = this.form.value.email.toLowerCase()
      if (this.form.value.salon === '') { this.form.value.salon = undefined }
      let obj = {
        ...this.form.value,
        usuarioCreated: this.functionsService.getLocal('uid')
      }
      this.usuariosService.crearUsuario(obj).subscribe((resp: any) => {

        //Message
        this.functionsService.navigateTo('core/users')
        this.loading = false
      },
        (error) => {
          //Message
          this.loading = false
         this.functionsService.alertError(error,'Usuarios')

        })
    } else {

      //Message
      this.loading = false
      return  
    }






  }

  back() {
    this.functionsService.navigateTo('core/users')
  }

}
