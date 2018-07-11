"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var ng2_nouislider_1 = require("ng2-nouislider");
var jw_bootstrap_switch_ng2_1 = require("jw-bootstrap-switch-ng2");
var basicelements_component_1 = require("./basicelements/basicelements.component");
var navigation_component_1 = require("./navigation/navigation.component");
var typography_component_1 = require("./typography/typography.component");
var nucleoicons_component_1 = require("./nucleoicons/nucleoicons.component");
var components_component_1 = require("./components.component");
var notification_component_1 = require("./notification/notification.component");
var modal_component_1 = require("./modal/modal.component");
var modal_component_2 = require("./modal/modal.component");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule,
            ng2_nouislider_1.NouisliderModule,
            jw_bootstrap_switch_ng2_1.JWBootstrapSwitchModule
        ],
        declarations: [
            components_component_1.ComponentsComponent,
            basicelements_component_1.BasicelementsComponent,
            navigation_component_1.NavigationComponent,
            typography_component_1.TypographyComponent,
            nucleoicons_component_1.NucleoiconsComponent,
            notification_component_1.NotificationComponent,
            modal_component_1.NgbdModalComponent,
            modal_component_2.NgbdModalContent
        ],
        entryComponents: [modal_component_2.NgbdModalContent],
        exports: [components_component_1.ComponentsComponent]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
