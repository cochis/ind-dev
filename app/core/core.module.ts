import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreComponent } from './core.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './pages/admin/users/users.component';
import { StockComponent } from './pages/admin/stock/stock.component';
import { AssignmentComponent } from './pages/admin/assignment/assignment.component';
import { EditUserComponent } from './pages/admin/users/edit-user/edit-user.component';
import { NewUserComponent } from './pages/admin/users/new-user/new-user.component';
import { RolesComponent } from './pages/admin/catalogos/roles/roles.component';
import { EditRolComponent } from './pages/admin/catalogos/roles/edit-rol/edit-rol.component';
import { NewRolComponent } from './pages/admin/catalogos/roles/new-rol/new-rol.component';
import { TipoStockComponent } from './pages/admin/catalogos/tipo-stock/tipo-stock.component';
import { EditTipoStockComponent } from './pages/admin/catalogos/tipo-stock/edit-tipo-stock/edit-tipo-stock.component';
import { NewTipoStockComponent } from './pages/admin/catalogos/tipo-stock/new-tipo-stock/new-tipo-stock.component';
import { EditStockComponent } from './pages/admin/stock/edit-stock/edit-stock.component';
import { NewStockComponent } from './pages/admin/stock/new-stock/new-stock.component';
import { EditAssignmentComponent } from './pages/admin/assignment/edit-assignment/edit-assignment.component';
import { NewAssignmentComponent } from './pages/admin/assignment/new-assignment/new-assignment.component';
import { TipoTicketComponent } from './pages/admin/catalogos/tipo-ticket/tipo-ticket.component';
import { EditTipoTicketComponent } from './pages/admin/catalogos/tipo-ticket/edit-tipo-ticket/edit-tipo-ticket.component';
import { NewTipoTicketComponent } from './pages/admin/catalogos/tipo-ticket/new-tipo-ticket/new-tipo-ticket.component';
import { EstadoTicketComponent } from './pages/admin/catalogos/estado-ticket/estado-ticket.component';
import { NewEstadoTicketComponent } from './pages/admin/catalogos/estado-ticket/new-estado-ticket/new-estado-ticket.component';
import { EditEstadoTicketComponent } from './pages/admin/catalogos/estado-ticket/edit-estado-ticket/edit-estado-ticket.component';
import { TicketsComponent } from './pages/admin/tickets/tickets.component';
import { NewTicketComponent } from './pages/admin/tickets/new-ticket/new-ticket.component';
import { EditTicketComponent } from './pages/admin/tickets/edit-ticket/edit-ticket.component';
import { ViewStatusComponent } from './pages/admin/tickets/view-status/view-status.component';
import { MyTicketsComponent } from './pages/admin/tickets/my-tickets/my-tickets.component';
import { CargaComponent } from './pages/admin/catalogos/carga/carga.component';
import { TipoCargaComponent } from './pages/admin/catalogos/tipo-carga/tipo-carga.component';
import { AbastoComponent } from './pages/admin/abasto/abasto.component';
import { EditCargaComponent } from './pages/admin/catalogos/carga/edit-carga/edit-carga.component';
import { NewCargaComponent } from './pages/admin/catalogos/carga/new-carga/new-carga.component';
import { NewTipoCargaComponent } from './pages/admin/catalogos/tipo-carga/new-tipo-carga/new-tipo-carga.component';
import { EditTipoCargaComponent } from './pages/admin/catalogos/tipo-carga/edit-tipo-carga/edit-tipo-carga.component';
import { EditAbastoComponent } from './pages/admin/abasto/edit-abasto/edit-abasto.component';
import { NewAbastoComponent } from './pages/admin/abasto/new-abasto/new-abasto.component';
import { ProveedorComponent } from './pages/admin/catalogos/proveedor/proveedor.component';
import { ProductoComponent } from './pages/admin/catalogos/producto/producto.component';
import { ZonaComponent } from './pages/admin/catalogos/zona/zona.component';
import { IncotermComponent } from './pages/admin/catalogos/incoterm/incoterm.component';
import { EditProveedorComponent } from './pages/admin/catalogos/proveedor/edit-proveedor/edit-proveedor.component';
 
import { EditZonaComponent } from './pages/admin/catalogos/zona/edit-zona/edit-zona.component';
import { NewZonaComponent } from './pages/admin/catalogos/zona/new-zona/new-zona.component';
import { EditIncotermComponent } from './pages/admin/catalogos/incoterm/edit-incoterm/edit-incoterm.component';
import { NewProductoComponent } from './pages/admin/catalogos/producto/new-producto/new-producto.component';
import { NewProveedorComponent } from './pages/admin/catalogos/proveedor/new-proveedor/new-proveedor.component';
import { EditProductoComponent } from './pages/admin/catalogos/producto/edit-producto/edit-producto.component';
import { NewIncotermComponent } from './pages/admin/catalogos/incoterm/new-incoterm/new-incoterm.component';
import { TipoProveedorComponent } from './pages/admin/catalogos/tipo-proveedor/tipo-proveedor.component';
import { NewTipoProveedorComponent } from './pages/admin/catalogos/tipo-proveedor/new-tipo-proveedor/new-tipo-proveedor.component';
import { EditTipoProveedorComponent } from './pages/admin/catalogos/tipo-proveedor/edit-tipo-proveedor/edit-tipo-proveedor.component';
import { OrigenComponent } from './pages/admin/catalogos/origen/origen.component';
import { NewOrigenComponent } from './pages/admin/catalogos/origen/new-origen/new-origen.component';
import { EditOrigenComponent } from './pages/admin/catalogos/origen/edit-origen/edit-origen.component';
import { DestinoComponent } from './pages/admin/catalogos/destino/destino.component';
 
import { NewDestinoComponent } from './pages/admin/catalogos/destino/new-destino/new-destino.component';
import { EditDestinoComponent } from './pages/admin/catalogos/destino/edit-destino/edit-destino.component';
import { TipoMaterialComponent } from './pages/admin/catalogos/tipo-material/tipo-material.component';
import { EditTipoMaterialComponent } from './pages/admin/catalogos/tipo-material/edit-tipo-material/edit-tipo-material.component';
import { NewTipoMaterialComponent } from './pages/admin/catalogos/tipo-material/new-tipo-material/new-tipo-material.component';
import { UnidadMedidaComponent } from './pages/admin/catalogos/unidad-medida/unidad-medida.component';
import { NewUnidadMedidaComponent } from './pages/admin/catalogos/unidad-medida/new-unidad-medida/new-unidad-medida.component';
import { EditUnidadMedidaComponent } from './pages/admin/catalogos/unidad-medida/edit-unidad-medida/edit-unidad-medida.component';
import { MonedaComponent } from './pages/admin/catalogos/moneda/moneda.component';
import { EditMonedaComponent } from './pages/admin/catalogos/moneda/edit-moneda/edit-moneda.component';
import { NewMonedaComponent } from './pages/admin/catalogos/moneda/new-moneda/new-moneda.component';
import { MateriaPrimaComponent } from './pages/admin/catalogos/materia-prima/materia-prima.component';
import { NewMateriaPrimaComponent } from './pages/admin/catalogos/materia-prima/new-materia-prima/new-materia-prima.component';
import { EditMateriaPrimaComponent } from './pages/admin/catalogos/materia-prima/edit-materia-prima/edit-materia-prima.component';
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
import { NewPipelineComponent } from './pages/copper/pipelines/new-pipeline/new-pipeline.component';
import { EditPipelineComponent } from './pages/copper/pipelines/edit-pipeline/edit-pipeline.component';
import { ModalModule } from "../_modal/modal.module";
 


@NgModule({
    declarations: [
        HomeComponent,
        CoreComponent,
        UsersComponent,
        StockComponent,
        AssignmentComponent,
        EditUserComponent,
        NewUserComponent,
        RolesComponent,
        EditRolComponent,
        NewRolComponent,
        TipoStockComponent,
        EditTipoStockComponent,
        NewTipoStockComponent,
        EditStockComponent,
        NewStockComponent,
        EditAssignmentComponent,
        NewAssignmentComponent,
        TipoTicketComponent,
        EditTipoTicketComponent,
        NewTipoTicketComponent,
        EstadoTicketComponent,
        NewEstadoTicketComponent,
        EditEstadoTicketComponent,
        TicketsComponent,
        NewTicketComponent,
        EditTicketComponent,
        ViewStatusComponent,
        MyTicketsComponent,
        CargaComponent,
        TipoCargaComponent,
        AbastoComponent,
        EditCargaComponent,
        NewCargaComponent,
        NewTipoCargaComponent,
        EditTipoCargaComponent,
        EditAbastoComponent,
        NewAbastoComponent,
        ProveedorComponent,
        ProductoComponent,
        ZonaComponent,
        IncotermComponent,
        EditProveedorComponent,
        NewProveedorComponent,
        EditZonaComponent,
        NewZonaComponent,
        EditIncotermComponent,
        NewProductoComponent,
        EditProductoComponent,
        NewIncotermComponent,
        TipoProveedorComponent,
        NewTipoProveedorComponent,
        EditTipoProveedorComponent,
        OrigenComponent,
        NewOrigenComponent,
        EditOrigenComponent,
        DestinoComponent,
        NewDestinoComponent,
        EditDestinoComponent,
        TipoMaterialComponent,
        EditTipoMaterialComponent,
        NewTipoMaterialComponent,
        UnidadMedidaComponent,
        NewUnidadMedidaComponent,
        EditUnidadMedidaComponent,
        MonedaComponent,
        EditMonedaComponent,
        NewMonedaComponent,
        MateriaPrimaComponent,
        NewMateriaPrimaComponent,
        EditMateriaPrimaComponent,
        CompaniaComponent,
        EditCompaniaComponent,
        NewCompaniaComponent,
        ProveedorTransporteComponent,
        NewProveedorTransporteComponent,
        EditProveedorTransporteComponent,
        PlantaComponent,
        EditPlantaComponent,
        NewPlantaComponent,
        DataMasivaComponent,
        CopperComponent,
        CompaniesComponent,
        EditCompanyComponent,
        NewCompanyComponent,
        OportunitiesComponent,
        EditOportunityComponent,
        NewOportunityComponent,
        PipelinesComponent,
        NewPipelineComponent,
        EditPipelineComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        ModalModule
    ]
})
export class CoreModule { }
