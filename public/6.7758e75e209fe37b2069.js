(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UJ0D:function(e,t,o){"use strict";o.r(t),o.d(t,"ProtectedModule",function(){return N});var r=o("ofXK"),i=o("tyNb"),n=o("fXoL"),a=o("N/25"),b=o("b1Ni"),s=o("jIHw");let c=(()=>{class e{constructor(e,t){this.router=e,this.authService=t,this.items=[]}ngOnInit(){this.items=[{label:"Nuevo Destinatario",icon:"pi pi-user-plus",routerLink:"/dashboard/destinatarios"},{label:"Realizar Transferencia",icon:"pi pi-dollar",routerLink:"/dashboard/transferencias"},{label:"Historial",icon:"pi pi-clock",routerLink:"/dashboard/historial"}]}logout(){this.router.navigateByUrl("/auth"),this.authService.logout()}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(i.a),n.Kb(a.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-menu"]],decls:2,vars:1,consts:[[3,"model"],["pButton","","label","Logout","icon","pi pi-power-off",3,"click"]],template:function(e,t){1&e&&(n.Qb(0,"p-menubar",0),n.Qb(1,"button",1),n.Xb("click",function(){return t.logout()}),n.Pb(),n.Pb()),2&e&&n.ec("model",t.items)},directives:[b.a,s.a],encapsulation:2}),e})(),l=(()=>{class e{constructor(e){this.authService=e}get user(){return this.authService.user}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(a.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(e,t){1&e&&n.Lb(0,"app-menu")},directives:[c],encapsulation:2}),e})();var u=o("3Pt+"),p=o("PSD3"),d=o.n(p),m=o("7CaW"),f=o("QIUk"),h=o("7kUa"),P=o("arFO"),Q=o("lUkA");function v(e,t){1&e&&(n.Qb(0,"small",20),n.wc(1,"El RUT es obligatorio."),n.Pb())}function g(e,t){1&e&&(n.Qb(0,"small",20),n.wc(1,"El email debe ser v\xe1lido."),n.Pb())}function w(e,t){1&e&&(n.Qb(0,"small",20),n.wc(1,"El nombre del banco destino es obligatorio."),n.Pb())}function C(e,t){1&e&&(n.Qb(0,"small",20),n.wc(1,"El n\xfamero de cuenta es obligatorio."),n.Pb())}function x(e,t){1&e&&(n.Qb(0,"small",20),n.wc(1,"El nombre es obligatorio."),n.Pb())}function I(e,t){1&e&&(n.Qb(0,"small",20),n.wc(1,"El tel\xe9fono es obligatorio."),n.Pb())}function k(e,t){1&e&&(n.Qb(0,"small",20),n.wc(1,"El Tipo de Cuenta es obligatorio."),n.Pb())}function D(e,t){1&e&&(n.Qb(0,"small",11),n.wc(1,"El Destinatario es obligatorio."),n.Pb())}function E(e,t){1&e&&(n.Qb(0,"small",11),n.wc(1,"El monto es obligatorio."),n.Pb())}function S(e,t){if(1&e&&(n.Qb(0,"tr"),n.Qb(1,"td"),n.wc(2),n.Pb(),n.Qb(3,"td"),n.wc(4),n.Pb(),n.Qb(5,"td"),n.wc(6),n.Pb(),n.Qb(7,"td"),n.wc(8),n.Pb(),n.Qb(9,"td"),n.wc(10),n.Pb(),n.Pb()),2&e){const e=t.$implicit;n.zb(2),n.xc(e.nombre),n.zb(2),n.xc(e.rut),n.zb(2),n.xc(e.bancoDestino),n.zb(2),n.xc(e.tipoCuenta),n.zb(2),n.xc(e.monto)}}function y(e,t){1&e&&(n.Qb(0,"div"),n.Qb(1,"h5"),n.wc(2,"No tiene historial de transferencia"),n.Pb(),n.Pb())}function z(e,t){if(1&e&&(n.Qb(0,"div"),n.Qb(1,"div",1),n.Qb(2,"div",2),n.Qb(3,"table",3),n.Qb(4,"thead"),n.Qb(5,"tr"),n.Qb(6,"th"),n.wc(7," Nombre Destinatario "),n.Pb(),n.Qb(8,"th"),n.wc(9," RUT "),n.Pb(),n.Qb(10,"th"),n.wc(11," Banco "),n.Pb(),n.Qb(12,"th"),n.wc(13," Tipo de Cuenta "),n.Pb(),n.Qb(14,"th"),n.wc(15," Monto "),n.Pb(),n.Pb(),n.Pb(),n.Qb(16,"tbody"),n.uc(17,S,11,5,"tr",4),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.uc(18,y,3,0,"div",0),n.Pb()),2&e){const e=n.Zb();n.zb(17),n.ec("ngForOf",e.historial),n.zb(1),n.ec("ngIf",0===e.historial.length)}}const L=[{path:"",children:[{path:"",component:l},{path:"destinatarios",component:(()=>{class e{constructor(e,t){this.fb=e,this.authService=t,this.bancos=[],this.bancoSelected={name:"",id:""},this.miFormulario=this.fb.group({rut:["",[u.k.required]],email:["",[u.k.required,u.k.email]],nombre:["",[u.k.required]],telefono:["",[u.k.required]],bancoDestino:["",[u.k.required]],tipoCuenta:["",[u.k.required]],numeroCuenta:["",[u.k.required]]})}get user(){return this.authService.user}ngOnInit(){this.authService.buscarBancos().subscribe(e=>{this.bancos=e.banks})}campoEsValido(e){return this.miFormulario.controls[e].errors&&this.miFormulario.controls[e].touched}crearDestinatario(){if(this.miFormulario.invalid)return void this.miFormulario.markAllAsTouched();let e=this.user.rut;const{rut:t,email:o,nombre:r,telefono:i,bancoDestino:n,tipoCuenta:a,numeroCuenta:b}=this.miFormulario.value;this.authService.crearDestinatario(e,r,t,o,i,n.name,a,b).subscribe(e=>{e.ok?d.a.fire("Success",e.message,"success"):d.a.fire("Error",e,"error")})}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(u.b),n.Kb(a.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-destinatarios"]],decls:56,vars:10,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],["header","Ingresa los datos del destinatario"],[1,"card"],[1,"p-grid","p-col-4","p-offset-3"],[1,"p-col-5","p-d-flex","p-ai-center","p-jc-center"],["id","username2-help","class","p-error",4,"ngIf"],[1,"p-field","p-grid"],["for","firstname3",1,"p-col-fixed",2,"width","100px"],[1,"p-col"],["type","text","pInputText","","formControlName","rut",1,"form-control",2,"width","200px"],["type","text","pInputText","","formControlName","email",1,"form-control",2,"width","200px"],["for","lastname3",1,"p-col-fixed",2,"width","100px"],["formControlName","bancoDestino","placeholder","Seleccione un Banco","optionLabel","name",3,"options","ngModel","ngModelChange"],["type","text","pInputText","","formControlName","numeroCuenta",1,"form-control",2,"width","200px"],[1,"p-col-2"],["layout","vertical"],["type","text","pInputText","","formControlName","nombre",1,"form-control",2,"width","200px"],["type","text","pInputText","","formControlName","telefono",1,"form-control",2,"width","200px"],["type","text","pInputText","","formControlName","tipoCuenta",1,"form-control",2,"width","200px"],["pButton","","type","button","type","submit","label","Crear"],["id","username2-help",1,"p-error"]],template:function(e,t){1&e&&(n.Lb(0,"app-menu"),n.Qb(1,"form",0),n.Xb("ngSubmit",function(){return t.crearDestinatario()}),n.Qb(2,"p-panel",1),n.Qb(3,"p-card"),n.Qb(4,"div",2),n.Qb(5,"div",3),n.Qb(6,"div",4),n.Qb(7,"p-card"),n.uc(8,v,2,0,"small",5),n.Qb(9,"div",6),n.Qb(10,"label",7),n.wc(11,"RUT"),n.Pb(),n.Qb(12,"div",8),n.Lb(13,"input",9),n.Pb(),n.Pb(),n.uc(14,g,2,0,"small",5),n.Qb(15,"div",6),n.Qb(16,"label",7),n.wc(17,"Correo"),n.Pb(),n.Qb(18,"div",8),n.Lb(19,"input",10),n.Pb(),n.Pb(),n.uc(20,w,2,0,"small",5),n.Qb(21,"div",6),n.Qb(22,"label",11),n.wc(23,"Banco"),n.Pb(),n.Qb(24,"div",8),n.Qb(25,"p-dropdown",12),n.Xb("ngModelChange",function(e){return t.bancoSelected=e}),n.Pb(),n.Pb(),n.Pb(),n.uc(26,C,2,0,"small",5),n.Qb(27,"div",6),n.Qb(28,"label",11),n.wc(29,"N\xb0 De Cuenta"),n.Pb(),n.Qb(30,"div",8),n.Lb(31,"input",13),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Qb(32,"div",14),n.Lb(33,"p-divider",15),n.Pb(),n.Qb(34,"div",4),n.Qb(35,"p-card"),n.uc(36,x,2,0,"small",5),n.Qb(37,"div",6),n.Qb(38,"label",7),n.wc(39,"Nombre"),n.Pb(),n.Qb(40,"div",8),n.Lb(41,"input",16),n.Pb(),n.Pb(),n.uc(42,I,2,0,"small",5),n.Qb(43,"div",6),n.Qb(44,"label",7),n.wc(45,"Tel\xe9fono"),n.Pb(),n.Qb(46,"div",8),n.Lb(47,"input",17),n.Pb(),n.Pb(),n.uc(48,k,2,0,"small",5),n.Qb(49,"div",6),n.Qb(50,"label",7),n.wc(51,"Tipo de Cuenta"),n.Pb(),n.Qb(52,"div",8),n.Lb(53,"input",18),n.Pb(),n.Pb(),n.Qb(54,"div",6),n.Lb(55,"button",19),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Pb()),2&e&&(n.zb(1),n.ec("formGroup",t.miFormulario),n.zb(7),n.ec("ngIf",t.campoEsValido("rut")),n.zb(6),n.ec("ngIf",t.campoEsValido("email")),n.zb(6),n.ec("ngIf",t.miFormulario.controls.bancoDestino.errors),n.zb(5),n.ec("options",t.bancos)("ngModel",t.bancoSelected),n.zb(1),n.ec("ngIf",t.campoEsValido("numeroCuenta")),n.zb(10),n.ec("ngIf",t.campoEsValido("nombre")),n.zb(6),n.ec("ngIf",t.campoEsValido("telefono")),n.zb(6),n.ec("ngIf",t.campoEsValido("tipoCuenta")))},directives:[c,u.l,u.h,u.d,m.a,f.a,r.j,u.a,h.a,u.g,u.c,P.a,Q.a,s.a],encapsulation:2}),e})()},{path:"transferencias",component:(()=>{class e{constructor(e,t){this.fb=e,this.authService=t,this.destinatarios=[],this.selectedDestinatario={nombre:"",rut:"",email:"",telefono:"",bancoDestino:"",tipoCuenta:"",numeroCuenta:""},this.miFormulario=this.fb.group({destinatario:["",[u.k.required]],monto:["",[u.k.required,u.k.min(1)]]})}get user(){return this.authService.user}ngOnInit(){this.authService.busarDestinatario(this.user.rut).subscribe(e=>{this.destinatarios=e.destinatarios})}campoEsValido(e){return this.miFormulario.controls[e].errors&&this.miFormulario.controls[e].touched}crearTransferencia(){if(this.miFormulario.invalid)return void this.miFormulario.markAllAsTouched();let e=this.user.rut;const{destinatario:t,monto:o}=this.miFormulario.value;this.authService.crearTransferencia(e,t.nombre,t.rut,t.bancoDestino,t.tipoCuenta,o).subscribe(e=>{e.ok?d.a.fire("Success",e.message,"success"):d.a.fire("Error",e,"error")})}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(u.b),n.Kb(a.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-transferencias"]],decls:36,vars:9,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"pgrid"],[1,"p-col-6","p-offset-3"],["id","username2-help","class","p-error",4,"ngIf"],[1,"p-field","p-grid"],["for","firstname3",1,"p-col-fixed",2,"width","100px"],[1,"p-col"],["formControlName","destinatario","placeholder","Seleccione un Destinatario","optionLabel","nombre",3,"options","ngModel","ngModelChange"],["for","lastname3",1,"p-col-fixed",2,"width","100px"],["type","text","pInputText","","formControlName","monto",1,"form-control",2,"width","200px"],["pButton","","type","button","type","submit","label","Transferir"],["id","username2-help",1,"p-error"]],template:function(e,t){1&e&&(n.Lb(0,"app-menu"),n.Qb(1,"form",0),n.Xb("ngSubmit",function(){return t.crearTransferencia()}),n.Qb(2,"div",1),n.Qb(3,"div",2),n.Qb(4,"p-card"),n.Qb(5,"h3"),n.wc(6,"Transferir"),n.Pb(),n.uc(7,D,2,0,"small",3),n.Qb(8,"div",4),n.Qb(9,"label",5),n.wc(10,"Buscar Destinatario"),n.Pb(),n.Qb(11,"div",6),n.Qb(12,"p-dropdown",7),n.Xb("ngModelChange",function(e){return t.selectedDestinatario=e}),n.Pb(),n.Pb(),n.Pb(),n.Qb(13,"div",4),n.Qb(14,"label",8),n.wc(15,"Datos del destinatario"),n.Pb(),n.Qb(16,"div",6),n.Qb(17,"span"),n.wc(18),n.Pb(),n.Lb(19,"br"),n.Qb(20,"span"),n.wc(21),n.Pb(),n.Lb(22,"br"),n.Qb(23,"span"),n.wc(24),n.Pb(),n.Lb(25,"br"),n.Qb(26,"span"),n.wc(27),n.Pb(),n.Lb(28,"br"),n.Pb(),n.Pb(),n.uc(29,E,2,0,"small",3),n.Qb(30,"div",4),n.Qb(31,"label",8),n.wc(32,"Monto"),n.Pb(),n.Qb(33,"div",6),n.Lb(34,"input",9),n.Pb(),n.Pb(),n.Lb(35,"button",10),n.Pb(),n.Pb(),n.Pb(),n.Pb()),2&e&&(n.zb(1),n.ec("formGroup",t.miFormulario),n.zb(6),n.ec("ngIf",t.campoEsValido("destinatario")),n.zb(5),n.ec("options",t.destinatarios)("ngModel",t.selectedDestinatario),n.zb(6),n.yc(" Nombre: ",t.selectedDestinatario.nombre,""),n.zb(3),n.yc(" Correo: ",t.selectedDestinatario.email,""),n.zb(3),n.yc(" Banco: ",t.selectedDestinatario.bancoDestino,""),n.zb(3),n.yc(" Tipo Cuenta: ",t.selectedDestinatario.tipoCuenta,""),n.zb(2),n.ec("ngIf",t.campoEsValido("monto")))},directives:[c,u.l,u.h,u.d,f.a,r.j,P.a,u.g,u.c,u.a,h.a,s.a],encapsulation:2}),e})()},{path:"historial",component:(()=>{class e{constructor(e){this.authService=e,this.historial=[]}get user(){return this.authService.user}ngOnInit(){this.authService.busarHistorial(this.user.rut).subscribe(e=>{e.ok?this.historial=e.data:(console.log(e.ok),d.a.fire("Error","El usuario no tiene transferencias","error"))})}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(a.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-historial"]],decls:2,vars:1,consts:[[4,"ngIf"],[1,"pgrid"],[1,"p-col-6","p-offset-3"],[1,"table","table-hover","animate__animated","animate__fadeIn","animate__faster"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(n.Lb(0,"app-menu"),n.uc(1,z,19,2,"div",0)),2&e&&(n.zb(1),n.ec("ngIf",t.historial.length>0))},directives:[c,r.j,r.i],encapsulation:2}),e})()},{path:"**",redirectTo:""}]}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({imports:[[i.d.forChild(L)],i.d]}),e})();var F=o("5Ovr");let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({imports:[[r.b,T,F.a,u.j]]}),e})()}}]);