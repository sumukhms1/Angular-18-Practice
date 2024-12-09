import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/Forms/template/template.component';
import { ReactiveComponent } from './components/Forms/reactive/reactive.component';
import { GetAPIComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { LifecycleEventComponent } from './components/LifeCycle/lifecycle-event/lifecycle-event.component';
import { NgtemplateComponent } from './components/ngTemplate/ngtemplate/ngtemplate.component';
import { NgContainerComponent } from './components/ngContainer/ng-container/ng-container.component';
import { ViewchildComponent } from './components/ViewChild/viewchild/viewchild.component';
import { LoginComponent } from './components/Login/login/login.component';
import { LayoutComponent } from './components/Layout/layout/layout.component';
import { authGuard } from './Service/auth.guard';
import { SignalComponent } from './components/Signal/signal/signal.component';
import { SwitchComponent } from './components/controlFlow/Switch/switch/switch.component';

export const routes: Routes = [
    //Default Route
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            
            {
                path:'add-emp',
                component:AddEmployeeComponent
            },
            {
                path:'data-binding',
                component:DataBindingComponent,
                canActivate:[authGuard]
            },
            {
                path:'emp-list',
                component:EmployeeListComponent
            },
            {
                path:'structural-dir',
                component:StructuralDirComponent
            },
            {
                path:'attributedirective',
                component:AttributeDirComponent
            },
            {
                path:'if-else',
                component:IfelseComponent
            },
            {
                path:'for',
                component:ForComponent
            },
            {
               path:'switch',
               component:SwitchComponent
            },
            {
                path:'pipe',
                component:PipeComponent
            },
            {
                path:'tempelateForm',
                component:TemplateComponent
            },
            {
                path:'reavtiveForm',
                component:ReactiveComponent
            },
            {
                path:'getAPI',
                component:GetAPIComponent
            },
            {
                path:'postAPI',
                component:PostApiComponent
            },
            {
                path:'lifecycle',
                component:LifecycleEventComponent
            },
            {
                path:'ngTemplate',
                component:NgtemplateComponent
            },
            {
                path:'ngContainer',
                component:NgContainerComponent
            },
            {
                path:'viewChild',
                component:ViewchildComponent
            },
            {
                path:'signal',
                component: SignalComponent
            } 

        ]
    },
    
];
