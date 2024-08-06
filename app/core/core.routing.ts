import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { StockComponent } from './pages/admin/stock/stock.component';
import { AssignmentComponent } from './pages/admin/assignment/assignment.component';
import { EditUserComponent } from './pages/admin/users/edit-user/edit-user.component';
import { NewUserComponent } from './pages/admin/users/new-user/new-user.component';
import { RolesComponent } from './pages/admin/catalogos/roles/roles.component';
import { EditRolComponent } from './pages/admin/catalogos/roles/edit-rol/edit-rol.component';
import { NewRolComponent } from './pages/admin/catalogos/roles/new-rol/new-rol.component';
import { TipoStockComponent } from './pages/admin/catalogos/tipo-stock/tipo-stock.component';
import { NewTipoStockComponent } from './pages/admin/catalogos/tipo-stock/new-tipo-stock/new-tipo-stock.component';
import { EditTipoStockComponent } from './pages/admin/catalogos/tipo-stock/edit-tipo-stock/edit-tipo-stock.component';
import { EditStockComponent } from './pages/admin/stock/edit-stock/edit-stock.component';
import { NewStockComponent } from './pages/admin/stock/new-stock/new-stock.component';
import { EditAssignmentComponent } from './pages/admin/assignment/edit-assignment/edit-assignment.component';
import { NewAssignmentComponent } from './pages/admin/assignment/new-assignment/new-assignment.component';
import { authGuard } from '../guard/auth.guard';
import { TipoTicketComponent } from './pages/admin/catalogos/tipo-ticket/tipo-ticket.component';
import { EditTipoTicketComponent } from './pages/admin/catalogos/tipo-ticket/edit-tipo-ticket/edit-tipo-ticket.component';
import { NewTipoTicketComponent } from './pages/admin/catalogos/tipo-ticket/new-tipo-ticket/new-tipo-ticket.component';
import { EstadoTicketComponent } from './pages/admin/catalogos/estado-ticket/estado-ticket.component';
import { EditEstadoTicketComponent } from './pages/admin/catalogos/estado-ticket/edit-estado-ticket/edit-estado-ticket.component';
import { NewEstadoTicketComponent } from './pages/admin/catalogos/estado-ticket/new-estado-ticket/new-estado-ticket.component';
import { TicketsComponent } from './pages/admin/tickets/tickets.component';
import { NewTicketComponent } from './pages/admin/tickets/new-ticket/new-ticket.component';
import { ViewStatusComponent } from './pages/admin/tickets/view-status/view-status.component';
import { EditTicketComponent } from './pages/admin/tickets/edit-ticket/edit-ticket.component';
import { MyTicketsComponent } from './pages/admin/tickets/my-tickets/my-tickets.component';
import { CargaComponent } from './pages/admin/catalogos/carga/carga.component';
import { TipoCargaComponent } from './pages/admin/catalogos/tipo-carga/tipo-carga.component';
import { EditCargaComponent } from './pages/admin/catalogos/carga/edit-carga/edit-carga.component';
import { NewCargaComponent } from './pages/admin/catalogos/carga/new-carga/new-carga.component';
import { EditTipoCargaComponent } from './pages/admin/catalogos/tipo-carga/edit-tipo-carga/edit-tipo-carga.component';
import { NewTipoCargaComponent } from './pages/admin/catalogos/tipo-carga/new-tipo-carga/new-tipo-carga.component';
import { AbastoComponent } from './pages/admin/abasto/abasto.component';
import { NewAbastoComponent } from './pages/admin/abasto/new-abasto/new-abasto.component';
import { EditAbastoComponent } from './pages/admin/abasto/edit-abasto/edit-abasto.component';
import { ProveedorComponent } from './pages/admin/catalogos/proveedor/proveedor.component';
import { EditProveedorComponent } from './pages/admin/catalogos/proveedor/edit-proveedor/edit-proveedor.component';
 
import { ZonaComponent } from './pages/admin/catalogos/zona/zona.component';
import { EditZonaComponent } from './pages/admin/catalogos/zona/edit-zona/edit-zona.component';
import { NewZonaComponent } from './pages/admin/catalogos/zona/new-zona/new-zona.component';
import { IncotermComponent } from './pages/admin/catalogos/incoterm/incoterm.component';
import { NewProveedorComponent } from './pages/admin/catalogos/proveedor/new-proveedor/new-proveedor.component';
import { EditIncotermComponent } from './pages/admin/catalogos/incoterm/edit-incoterm/edit-incoterm.component';
import { NewIncotermComponent } from './pages/admin/catalogos/incoterm/new-incoterm/new-incoterm.component';
import { TipoProveedorComponent } from './pages/admin/catalogos/tipo-proveedor/tipo-proveedor.component';
import { EditTipoProveedorComponent } from './pages/admin/catalogos/tipo-proveedor/edit-tipo-proveedor/edit-tipo-proveedor.component';
import { NewTipoProveedorComponent } from './pages/admin/catalogos/tipo-proveedor/new-tipo-proveedor/new-tipo-proveedor.component';
import { ProductoComponent } from './pages/admin/catalogos/producto/producto.component';
import { EditProductoComponent } from './pages/admin/catalogos/producto/edit-producto/edit-producto.component';
import { NewProductoComponent } from './pages/admin/catalogos/producto/new-producto/new-producto.component';
import { OrigenComponent } from './pages/admin/catalogos/origen/origen.component';
import { EditOrigenComponent } from './pages/admin/catalogos/origen/edit-origen/edit-origen.component';
import { NewOrigenComponent } from './pages/admin/catalogos/origen/new-origen/new-origen.component';
import { DestinoComponent } from './pages/admin/catalogos/destino/destino.component';
import { EditDestinoComponent } from './pages/admin/catalogos/destino/edit-destino/edit-destino.component';
import { NewDestinoComponent } from './pages/admin/catalogos/destino/new-destino/new-destino.component';
import { TipoMaterialComponent } from './pages/admin/catalogos/tipo-material/tipo-material.component';
import { EditTipoMaterialComponent } from './pages/admin/catalogos/tipo-material/edit-tipo-material/edit-tipo-material.component';
import { NewTipoMaterialComponent } from './pages/admin/catalogos/tipo-material/new-tipo-material/new-tipo-material.component';
import { UnidadMedidaComponent } from './pages/admin/catalogos/unidad-medida/unidad-medida.component';
import { EditUnidadMedidaComponent } from './pages/admin/catalogos/unidad-medida/edit-unidad-medida/edit-unidad-medida.component';
import { NewUnidadMedidaComponent } from './pages/admin/catalogos/unidad-medida/new-unidad-medida/new-unidad-medida.component';
import { MonedaComponent } from './pages/admin/catalogos/moneda/moneda.component';
import { EditMonedaComponent } from './pages/admin/catalogos/moneda/edit-moneda/edit-moneda.component';
import { NewMonedaComponent } from './pages/admin/catalogos/moneda/new-moneda/new-moneda.component';
import { MateriaPrimaComponent } from './pages/admin/catalogos/materia-prima/materia-prima.component';
import { EditMateriaPrimaComponent } from './pages/admin/catalogos/materia-prima/edit-materia-prima/edit-materia-prima.component';
import { NewMateriaPrimaComponent } from './pages/admin/catalogos/materia-prima/new-materia-prima/new-materia-prima.component';
import { CompaniaComponent } from './pages/admin/catalogos/compania/compania.component';
import { EditCompaniaComponent } from './pages/admin/catalogos/compania/edit-compania/edit-compania.component';
import { NewCompaniaComponent } from './pages/admin/catalogos/compania/new-compania/new-compania.component';
import { ProveedorTransporteComponent } from './pages/admin/catalogos/proveedor-transporte/proveedor-transporte.component';
import { NewProveedorTransporteComponent } from './pages/admin/catalogos/proveedor-transporte/new-proveedor-transporte/new-proveedor-transporte.component';
import { EditProveedorTransporteComponent } from './pages/admin/catalogos/proveedor-transporte/edit-proveedor-transporte/edit-proveedor-transporte.component';
import { PlantaComponent } from './pages/admin/catalogos/planta/planta.component';
import { EditPlantaComponent } from './pages/admin/catalogos/planta/edit-planta/edit-planta.component';
import { NewPlantaComponent } from './pages/admin/catalogos/planta/new-planta/new-planta.component';
import { DataMasivaComponent } from './pages/admin/data-masiva/data-masiva.component';
import { CopperComponent } from './pages/copper/copper.component';
import { CompaniesComponent } from './pages/copper/companies/companies.component';
import { EditCompanyComponent } from './pages/copper/companies/edit-company/edit-company.component';
import { NewCompanyComponent } from './pages/copper/companies/new-company/new-company.component';
import { OportunitiesComponent } from './pages/copper/oportunities/oportunities.component';
import { EditOportunityComponent } from './pages/copper/oportunities/edit-oportunity/edit-oportunity.component';
import { NewOportunityComponent } from './pages/copper/oportunities/new-oportunity/new-oportunity.component';
import { PipelinesComponent } from './pages/copper/pipelines/pipelines.component';
import { EditPipelineComponent } from './pages/copper/pipelines/edit-pipeline/edit-pipeline.component';
import { NewPipelineComponent } from './pages/copper/pipelines/new-pipeline/new-pipeline.component';


const routes: Routes = [
  {
    path: 'core',
    component: CoreComponent,
    children: [

      //base
      {
        path: '',
        component: HomeComponent,
        data: { tittle: 'Home' }

      } ,
      //home
      {
        path: 'home',
        component: HomeComponent,
        data: { tittle: 'Home' }

      } ,
      //abasto
      {
        path: 'abasto',
        component: AbastoComponent,
        data: { tittle: 'Abastos' },
        canActivate: [authGuard]

      } ,
      {
        path: 'new-abasto',
        component: NewAbastoComponent,
        data: { tittle: 'Nuevo abasto' },
        canActivate: [authGuard]

      } ,
      {
        path: 'edit-abasto/:edit/:id',
        component: EditAbastoComponent,
        data: { tittle: 'Edicion abasto' },
        canActivate: [authGuard]

      } ,
      //usuarios
      {
        path: 'users',
        component: UsersComponent,
        data: { tittle: 'Users' },
        canActivate: [authGuard]

      } ,
      {
        path: 'edit-user/:edit/:id',
        component: EditUserComponent,
        data: { tittle: 'Edit user' },
        canActivate: [authGuard]

      } ,
      {
        path: 'new-user',
        component: NewUserComponent,
        data: { tittle: 'New user' },
        canActivate: [authGuard]

      } ,

      //stock
      {
        path: 'stock',
        component: StockComponent,
        data: { tittle: 'Stock' },
        canActivate: [authGuard]

      } ,
      {
        path: 'edit-stock/:edit/:id',
        component: EditStockComponent,
        data: { tittle: 'Edit stock' },
        canActivate: [authGuard]

      } ,
      {
        path: 'new-stock',
        component: NewStockComponent,
        data: { tittle: 'New stock' },
        canActivate: [authGuard]

      } ,
     
      //data
      {
        path: 'data',
        component: DataMasivaComponent,
        data: { tittle: 'Data' },
        canActivate: [authGuard]

      } ,
      //asignacion
      {
        path: 'assignment',
        component: AssignmentComponent,
        data: { tittle: 'Assigment' },
        canActivate: [authGuard]

      } ,
      {
        path: 'edit-assignment/:edit/:id',
        component: EditAssignmentComponent,
        data: { tittle: 'Edit assignment' },
        canActivate: [authGuard]

      } ,
      {
        path: 'new-assignment',
        component: NewAssignmentComponent,
        data: { tittle: 'New assignment' },
        canActivate: [authGuard]

      } ,
      //roles
      {
        path: 'catalogos/roles',
        component: RolesComponent,
        data: { tittle: 'Roles' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-rol/:edit/:id',
        component: EditRolComponent,
        data: { tittle: 'Edit role' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-rol',
        component: NewRolComponent,
        data: { tittle: 'New  role' },
        canActivate: [authGuard]

      } ,
      //monedas
      {
        path: 'catalogos/moneda',
        component: MonedaComponent,
        data: { tittle: 'Roles' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-moneda/:edit/:id',
        component: EditMonedaComponent,
        data: { tittle: 'Edit moneda' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-moneda',
        component: NewMonedaComponent,
        data: { tittle: 'New  moneda' },
        canActivate: [authGuard]

      } ,
      //materiaPrimas
      {
        path: 'catalogos/materiaPrima',
        component: MateriaPrimaComponent,
        data: { tittle: 'Roles' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-materiaPrima/:edit/:id',
        component: EditMateriaPrimaComponent,
        data: { tittle: 'Edit materiaPrima' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-materiaPrima',
        component: NewMateriaPrimaComponent,
        data: { tittle: 'New  materiaPrima' },
        canActivate: [authGuard]

      } ,
       //tipoMaterial
       {
        path: 'catalogos/tipoMaterial',
        component: TipoMaterialComponent,
        data: { tittle: 'Tipo Material' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-tipoMaterial/:edit/:id',
        component: EditTipoMaterialComponent,
        data: { tittle: 'Edit tipoMaterial' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-tipoMaterial',
        component: NewTipoMaterialComponent,
        data: { tittle: 'New tipoMaterial' },
        canActivate: [authGuard]

      } ,
      //origen
      {
        path: 'catalogos/origen',
        component: OrigenComponent,
        data: { tittle: 'Roles' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-origen/:edit/:id',
        component: EditOrigenComponent,
        data: { tittle: 'Edit origen' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-origen',
        component: NewOrigenComponent,
        data: { tittle: 'New  origen' },
        canActivate: [authGuard]

      } ,
      //unidadMedida
      {
        path: 'catalogos/unidadMedida',
        component: UnidadMedidaComponent,
        data: { tittle: 'Unidad Medida' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-unidadMedida/:edit/:id',
        component: EditUnidadMedidaComponent,
        data: { tittle: 'Edit unidadMedida' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-unidadMedida',
        component: NewUnidadMedidaComponent,
        data: { tittle: 'New  unidadMedida' },
        canActivate: [authGuard]

      } ,
      //destino
      {
        path: 'catalogos/destino',
        component: DestinoComponent,
        data: { tittle: 'Destinos' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-destino/:edit/:id',
        component: EditDestinoComponent,
        data: { tittle: 'Edit destino' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-destino',
        component: NewDestinoComponent,
        data: { tittle: 'New  destino' },
        canActivate: [authGuard]

      } ,
      //tipoStock
      {
        path: 'catalogos/tipoStock',
        component: TipoStockComponent,
        data: { tittle: 'Tipo Stock' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-tipoStock/:edit/:id',
        component: EditTipoStockComponent,
        data: { tittle: 'Edit tipo Stock' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-tipoStock',
        component: NewTipoStockComponent,
        data: { tittle: 'New  tipoStock' },
        canActivate: [authGuard]

      } ,
      //tipoProveedor
      {
        path: 'catalogos/tipoProveedor',
        component: TipoProveedorComponent,
        data: { tittle: 'Tipo Stock' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-tipoProveedor/:edit/:id',
        component: EditTipoProveedorComponent,
        data: { tittle: 'Edit tipo Stock' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-tipoProveedor',
        component: NewTipoProveedorComponent,
        data: { tittle: 'New  tipoProveedor' },
        canActivate: [authGuard]

      } ,
      //tipoTicket
      {
        path: 'catalogos/tipoTicket',
        component: TipoTicketComponent,
        data: { tittle: 'Tipo Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-tipoTicket/:edit/:id',
        component: EditTipoTicketComponent,
        data: { tittle: 'Edit tipo Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-tipoTicket',
        component: NewTipoTicketComponent,
        data: { tittle: 'New  tipo ticket' },
        canActivate: [authGuard]

      } ,
      //carga
      {
        path: 'catalogos/carga',
        component: CargaComponent,
        data: { tittle: 'Carga' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-carga/:edit/:id',
        component: EditCargaComponent,
        data: { tittle: 'Edit tipo Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-carga',
        component: NewCargaComponent,
        data: { tittle: 'New  tipo ticket' },
        canActivate: [authGuard]

      } ,
      //tipoCarga
      {
        path: 'catalogos/tipoCarga',
        component: TipoCargaComponent,
        data: { tittle: 'Tipo carga' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-tipo-carga/:edit/:id',
        component: EditTipoCargaComponent,
        data: { tittle: 'Edit tipo carga' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-tipo-carga',
        component: NewTipoCargaComponent,
        data: { tittle: 'New  tipo carga' },
        canActivate: [authGuard]

      } ,
      //estadoTicket
      {
        path: 'catalogos/estadoTicket',
        component: EstadoTicketComponent,
        data: { tittle: 'Estado Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-estadoTicket/:edit/:id',
        component: EditEstadoTicketComponent,
        data: { tittle: 'Edit estado Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-estadoTicket',
        component: NewEstadoTicketComponent,
        data: { tittle: 'New  estado ticket' },
        canActivate: [authGuard]

      } ,
      //proveedor
      {
        path: 'catalogos/proveedor',
        component: ProveedorComponent,
        data: { tittle: 'Proveedor' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-proveedor/:edit/:id',
        component: EditProveedorComponent,
        data: { tittle: 'Edit proveedor' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-proveedor',
        component: NewProveedorComponent,
        data: { tittle: 'New proveedor' },
        canActivate: [authGuard]

      } ,
      //Zona
      {
        path: 'catalogos/zona',
        component: ZonaComponent,
        data: { tittle: 'Zona' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-zona/:edit/:id',
        component: EditZonaComponent,
        data: { tittle: 'Edit zona' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-zona',
        component: NewZonaComponent,
        data: { tittle: 'New zona' },
        canActivate: [authGuard]

      } ,
      //Producto
      {
        path: 'catalogos/producto',
        component: ProductoComponent,
        data: { tittle: 'Producto' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-producto/:edit/:id',
        component: EditProductoComponent,
        data: { tittle: 'Edit producto' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-producto',
        component: NewProductoComponent,
        data: { tittle: 'New producto' },
        canActivate: [authGuard]

      } ,
      //Incoterm
      {
        path: 'catalogos/incoterm',
        component: IncotermComponent,
        data: { tittle: 'Incoterm' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-incoterm/:edit/:id',
        component: EditIncotermComponent,
        data: { tittle: 'Edit incoterm' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-incoterm',
        component: NewIncotermComponent,
        data: { tittle: 'New incoterm' },
        canActivate: [authGuard]

      } ,
      //Compañias
      {
        path: 'catalogos/compania',
        component: CompaniaComponent,
        data: { tittle: 'Compañia' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-compania/:edit/:id',
        component: EditCompaniaComponent,
        data: { tittle: 'Edit compañia' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-compania',
        component: NewCompaniaComponent,
        data: { tittle: 'New compania' },
        canActivate: [authGuard]

      } ,
      //plantas
      {
        path: 'catalogos/planta',
        component: PlantaComponent,
        data: { tittle: 'Planta' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-planta/:edit/:id',
        component: EditPlantaComponent,
        data: { tittle: 'Edit Planta' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-planta',
        component: NewPlantaComponent,
        data: { tittle: 'New Planta' },
        canActivate: [authGuard]

      } ,
      //Proveedor transporte
      {
        path: 'catalogos/proveedorTransporte',
        component: ProveedorTransporteComponent,
        data: { tittle: 'proveedorTransporte' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/edit-proveedorTransporte/:edit/:id',
        component: EditProveedorTransporteComponent,
        data: { tittle: 'Edit proveedorTransporte' },
        canActivate: [authGuard]

      } ,
      {
        path: 'catalogos/new-proveedorTransporte',
        component: NewProveedorTransporteComponent,
        data: { tittle: 'New proveedorTransporte' },
        canActivate: [authGuard]

      } ,
      //ticket
      {
        path: 'tickets',
        component: TicketsComponent,
        data: { tittle: 'Tickets' },
        canActivate: [authGuard]

      } ,
      {
        path: 'new-ticket',
        component: NewTicketComponent,
        data: { tittle: 'New Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'create-ticket/:id',
        component: NewTicketComponent,
        data: { tittle: 'New Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'edit-ticket/:edit/:id',
        component: EditTicketComponent,
        data: { tittle: 'New Ticket' },
        canActivate: [authGuard]

      } ,
      {
        path: 'view-status-ticket/:id',
        component: ViewStatusComponent,
        data: { tittle: 'View status Ticket' },
        canActivate: [authGuard]

      } ,
      
      {
        path: 'mis-tickets/:id',
        component: MyTicketsComponent,
        data: { tittle: 'Mis Tickets' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper',
        component: CopperComponent,
        data: { tittle: 'Copper' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/companies',
        component: CompaniesComponent,
        data: { tittle: 'Companies Copper' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/companies/edit-company/:edit/:id',
        component: EditCompanyComponent,
        data: { tittle: 'Edit Company' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/companies/new-company',
        component: NewCompanyComponent,
        data: { tittle: 'New Company' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/oportunities',
        component: OportunitiesComponent,
        data: { tittle: 'oportinitiesCopper' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/oportunities/edit-oportunity/:edit/:id',
        component: EditOportunityComponent,
        data: { tittle: 'Edit oportunity' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/oportunities/new-oportunity',
        component: NewOportunityComponent,
        data: { tittle: 'New oportunity' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/pipelines',
        component: PipelinesComponent,
        data: { tittle: 'pipelines copper' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/pipelines/edit-pipeline/:edit/:id',
        component: EditPipelineComponent,
        data: { tittle: 'Edit pipeline' },
        canActivate: [authGuard]

      } ,
      {
        path: 'copper/pipelines/new-pipeline',
        component: NewPipelineComponent,
        data: { tittle: 'New pipeline' },
        canActivate: [authGuard]

      } ,



    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
