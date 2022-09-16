(self["webpackChunkfactoriolab"] = self["webpackChunkfactoriolab"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_routes_list_list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./routes/list/list.module */ 8249)).then((m) => m.ListModule),
    },
    {
        path: 'flow',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_routes_flow_flow_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./routes/flow/flow.module */ 3784)).then((m) => m.FlowModule),
    },
    {
        path: 'matrix',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_routes_matrix_matrix_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./routes/matrix/matrix.module */ 2159)).then((m) => m.MatrixModule),
    },
    {
        path: 'factorio',
        redirectTo: '/list?s=&v=4',
    },
    {
        path: 'coi',
        redirectTo: '/list?s=coi&v=4',
    },
    {
        path: 'dsp',
        redirectTo: '/list?s=dsp&v=4',
    },
    {
        path: 'satisfactory',
        redirectTo: '/list?s=sfy&v=4',
    },
    {
        path: 'foxhole',
        redirectTo: '/list?s=fox&v=4',
    },
    {
        path: '**',
        redirectTo: 'list',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 453:
/*!**************************************!*\
  !*** ./src/app/app-shared.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSharedModule": () => (/* binding */ AppSharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pipes_rate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/rate.pipe */ 1198);
/* harmony import */ var _vendor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor.module */ 4348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_columns_dialog_columns_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/columns-dialog/columns-dialog.component */ 1813);
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content/content.component */ 8828);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/input-number/input-number.component */ 7468);
/* harmony import */ var _components_picker_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/picker/picker.component */ 8290);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products/products.component */ 697);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings/settings.component */ 6577);
/* harmony import */ var _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/dropdown-base.directive */ 2897);
/* harmony import */ var _directives_dropdown_translate_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/dropdown-translate.directive */ 3989);
/* harmony import */ var _directives_validate_number_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/validate-number.directive */ 9148);
/* harmony import */ var _pipes_tooltips_beacon_tooltip_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/tooltips/beacon-tooltip.pipe */ 6923);
/* harmony import */ var _pipes_tooltips_factory_tooltip_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/tooltips/factory-tooltip.pipe */ 1168);
/* harmony import */ var _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/tooltips/item-tooltip.pipe */ 7598);
/* harmony import */ var _pipes_tooltips_module_tooltip_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/tooltips/module-tooltip.pipe */ 7820);
/* harmony import */ var _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/tooltips/recipe-tooltip.pipe */ 8098);
/* harmony import */ var _pipes_factory_rate_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/factory-rate.pipe */ 5525);
/* harmony import */ var _pipes_factory_show_rate_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/factory-show-rate.pipe */ 2753);
/* harmony import */ var _pipes_factory_show_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/factory-show.pipe */ 280);
/* harmony import */ var _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/icon-class.pipe */ 1969);
/* harmony import */ var _pipes_inserter_speed_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/inserter-speed.pipe */ 7534);
/* harmony import */ var _pipes_invert_array_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/invert-array.pipe */ 8034);
/* harmony import */ var _pipes_left_pad_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/left-pad.pipe */ 3683);
/* harmony import */ var _pipes_options_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/options.pipe */ 1616);
/* harmony import */ var _pipes_power_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/power.pipe */ 3769);
/* harmony import */ var _pipes_precision_example_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/precision-example.pipe */ 9213);
/* harmony import */ var _pipes_rate_type_via_dropdown_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/rate-type-via-dropdown.pipe */ 1930);
/* harmony import */ var _pipes_step_href_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/step-href.pipe */ 2833);

































class AppSharedModule {
}
AppSharedModule.ɵfac = function AppSharedModule_Factory(t) { return new (t || AppSharedModule)(); };
AppSharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppSharedModule });
AppSharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [_pipes_rate_pipe__WEBPACK_IMPORTED_MODULE_0__.RatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _vendor_module__WEBPACK_IMPORTED_MODULE_1__.VendorModule, _vendor_module__WEBPACK_IMPORTED_MODULE_1__.VendorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppSharedModule, { declarations: [_components_columns_dialog_columns_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ColumnsDialogComponent, _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__.InputNumberComponent, _components_picker_picker_component__WEBPACK_IMPORTED_MODULE_6__.PickerComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__.ProductsComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__.SettingsComponent, _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_9__.DropdownBaseDirective, _directives_dropdown_translate_directive__WEBPACK_IMPORTED_MODULE_10__.DropdownTranslateDirective, _directives_validate_number_directive__WEBPACK_IMPORTED_MODULE_11__.ValidateNumberDirective, _pipes_tooltips_beacon_tooltip_pipe__WEBPACK_IMPORTED_MODULE_12__.BeaconTooltipPipe, _pipes_tooltips_factory_tooltip_pipe__WEBPACK_IMPORTED_MODULE_13__.FactoryTooltipPipe, _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_14__.ItemTooltipPipe, _pipes_tooltips_module_tooltip_pipe__WEBPACK_IMPORTED_MODULE_15__.ModuleTooltipPipe, _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_16__.RecipeTooltipPipe, _pipes_factory_rate_pipe__WEBPACK_IMPORTED_MODULE_17__.FactoryRatePipe, _pipes_factory_show_rate_pipe__WEBPACK_IMPORTED_MODULE_18__.FactoryShowRatePipe, _pipes_factory_show_pipe__WEBPACK_IMPORTED_MODULE_19__.FactoryShowPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_20__.IconClassPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_20__.IconSmClassPipe, _pipes_inserter_speed_pipe__WEBPACK_IMPORTED_MODULE_21__.InserterSpeedPipe, _pipes_invert_array_pipe__WEBPACK_IMPORTED_MODULE_22__.InvertArrayPipe, _pipes_left_pad_pipe__WEBPACK_IMPORTED_MODULE_23__.LeftPadPipe, _pipes_options_pipe__WEBPACK_IMPORTED_MODULE_24__.OptionsPipe, _pipes_power_pipe__WEBPACK_IMPORTED_MODULE_25__.PowerPipe, _pipes_precision_example_pipe__WEBPACK_IMPORTED_MODULE_26__.PrecisionExamplePipe, _pipes_rate_pipe__WEBPACK_IMPORTED_MODULE_0__.RatePipe, _pipes_rate_type_via_dropdown_pipe__WEBPACK_IMPORTED_MODULE_27__.RateTypeViaDropdownPipe, _pipes_step_href_pipe__WEBPACK_IMPORTED_MODULE_28__.StepHrefPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _vendor_module__WEBPACK_IMPORTED_MODULE_1__.VendorModule], exports: [_vendor_module__WEBPACK_IMPORTED_MODULE_1__.VendorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _components_columns_dialog_columns_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ColumnsDialogComponent, _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__.InputNumberComponent, _components_picker_picker_component__WEBPACK_IMPORTED_MODULE_6__.PickerComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__.ProductsComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__.SettingsComponent, _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_9__.DropdownBaseDirective, _directives_dropdown_translate_directive__WEBPACK_IMPORTED_MODULE_10__.DropdownTranslateDirective, _directives_validate_number_directive__WEBPACK_IMPORTED_MODULE_11__.ValidateNumberDirective, _pipes_tooltips_beacon_tooltip_pipe__WEBPACK_IMPORTED_MODULE_12__.BeaconTooltipPipe, _pipes_tooltips_factory_tooltip_pipe__WEBPACK_IMPORTED_MODULE_13__.FactoryTooltipPipe, _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_14__.ItemTooltipPipe, _pipes_tooltips_module_tooltip_pipe__WEBPACK_IMPORTED_MODULE_15__.ModuleTooltipPipe, _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_16__.RecipeTooltipPipe, _pipes_factory_rate_pipe__WEBPACK_IMPORTED_MODULE_17__.FactoryRatePipe, _pipes_factory_show_rate_pipe__WEBPACK_IMPORTED_MODULE_18__.FactoryShowRatePipe, _pipes_factory_show_pipe__WEBPACK_IMPORTED_MODULE_19__.FactoryShowPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_20__.IconClassPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_20__.IconSmClassPipe, _pipes_inserter_speed_pipe__WEBPACK_IMPORTED_MODULE_21__.InserterSpeedPipe, _pipes_invert_array_pipe__WEBPACK_IMPORTED_MODULE_22__.InvertArrayPipe, _pipes_left_pad_pipe__WEBPACK_IMPORTED_MODULE_23__.LeftPadPipe, _pipes_options_pipe__WEBPACK_IMPORTED_MODULE_24__.OptionsPipe, _pipes_power_pipe__WEBPACK_IMPORTED_MODULE_25__.PowerPipe, _pipes_precision_example_pipe__WEBPACK_IMPORTED_MODULE_26__.PrecisionExamplePipe, _pipes_rate_pipe__WEBPACK_IMPORTED_MODULE_0__.RatePipe, _pipes_rate_type_via_dropdown_pipe__WEBPACK_IMPORTED_MODULE_27__.RateTypeViaDropdownPipe, _pipes_step_href_pipe__WEBPACK_IMPORTED_MODULE_28__.StepHrefPipe] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var src_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments */ 7791);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tabmenu */ 7077);
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content/content.component */ 8828);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products/products.component */ 697);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings/settings.component */ 6577);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 8699);























function AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](item_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, item_r11.label));
  }
}

const _c0 = function (a0, a1, a2, a3, a4, a5) {
  return {
    resultType: a0,
    time: a1,
    pivots: a2,
    rows: a3,
    cols: a4,
    cost: a5
  };
};

function AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 1, "app.simplexSolved", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction6"](4, _c0, vm_r1.result.resultType.toLowerCase(), vm_r1.result.time, vm_r1.result.pivots, vm_r1.result.A.length, vm_r1.result.A[0].length, vm_r1.result.O[vm_r1.result.O.length - 1].toPrecision(2))), " ");
  }
}

function AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_ng_container_1_div_1_Template, 4, 11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", vm_r1.result.A && vm_r1.result.O);
  }
}

const _c1 = function (a0) {
  return {
    resultType: a0
  };
};

function AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, "app.simplexUnsolved", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c1, vm_r1.result.resultType.toLowerCase())));
  }
}

function AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_ng_template_2_Template, 3, 6, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).ngIf;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", vm_r1.result.resultType === ctx_r10.MatrixResultType.Solved || vm_r1.result.resultType === ctx_r10.MatrixResultType.Cached)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r10.version);
  }
}

function AppComponent_ng_container_0_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "lab-products");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p-tabMenu", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_5_Template, 4, 5, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_ng_container_0_ng_container_2_ng_container_5_ng_template_7_Template, 6, 3, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "app.factory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("model", ctx_r5.tabItems);
  }
}

function AppComponent_ng_container_0_ng_container_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-progressSpinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function AppComponent_ng_container_0_ng_container_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "app.simplexError"));
  }
}

const _c2 = function () {
  return {
    width: "576px"
  };
};

const _c3 = function () {
  return {
    "576px": "100%"
  };
};

function AppComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "lab-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_ng_container_0_ng_container_2_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.contentSvc.toggleSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 6)(4, "main", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AppComponent_ng_container_0_ng_container_2_ng_container_5_Template, 8, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AppComponent_ng_container_0_ng_container_2_ng_template_6_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p-dialog", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("visibleChange", function AppComponent_ng_container_0_ng_container_2_Template_p_dialog_visibleChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.showSimplexErr = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AppComponent_ng_container_0_ng_container_2_ng_template_9_Template, 5, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_ng_container_0_ng_container_2_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r23.showSimplexErr = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.simplexErrSub.unsubscribe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_ng_container_0_ng_container_2_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.tryFixSimplex());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_ng_container_0_ng_container_2_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.showSimplexErr = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("active", vm_r1.settingsActive)("hidden", vm_r1.settingsXlHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", vm_r1.settingsActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("settings-xl-hidden", vm_r1.settingsXlHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", vm_r1.mod != null)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](28, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", ctx_r2.showSimplexErr)("modal", true)("draggable", false)("resizable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](29, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 20, "app.simplexErrorDetail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 22, "app.dontShowAgain"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 24, "app.trySuggestedFix"))("loading", ctx_r2.isFixingSimplex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 26, "ok"));
  }
}

function AppComponent_ng_container_0_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "app.error"));
  }
}

function AppComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-dialog", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AppComponent_ng_container_0_ng_template_3_ng_template_1_Template, 5, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 28)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 30)(9, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_ng_container_0_ng_template_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.reset(vm_r1.game));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("modal", true)("draggable", false)("resizable", false)("closable", false)("closeOnEscape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 10, "app.errorDetail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vm_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 12, "app.reset"))("loading", ctx_r4.isResetting);
  }
}

function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "lab-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AppComponent_ng_container_0_ng_container_2_Template, 20, 30, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AppComponent_ng_container_0_ng_template_3_Template, 11, 14, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = ctx.ngIf;

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sticky", vm_r1.scrollTop > 16)("settingsXlHidden", vm_r1.settingsXlHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", vm_r1.errorMsg == null)("ngIfElse", _r3);
  }
}

class AppComponent {
  constructor(contentSvc, ngZone, ref, router, store, errorSvc, routerSvc, stateSvc, themeSvc) {
    this.contentSvc = contentSvc;
    this.ngZone = ngZone;
    this.ref = ref;
    this.router = router;
    this.store = store;
    this.errorSvc = errorSvc;
    this.routerSvc = routerSvc;
    this.stateSvc = stateSvc;
    this.themeSvc = themeSvc;
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Settings.getGame), this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Settings.getMod), this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Products.getMatrixResult), this.contentSvc.settingsActive$, this.contentSvc.settingsXlHidden$, this.contentSvc.scrollTop$, this.errorSvc.message$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([game, mod, result, settingsActive, settingsXlHidden, scrollTop, errorMsg]) => ({
      game,
      mod,
      result,
      settingsActive,
      settingsXlHidden,
      scrollTop,
      errorMsg
    })));
    this.version = `${_models__WEBPACK_IMPORTED_MODULE_1__.APP} ${src_environments__WEBPACK_IMPORTED_MODULE_0__.environment.version}`;
    this.isResetting = false;
    this.showSimplexErr = false;
    this.isFixingSimplex = false;
    this.simplexErrSub = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Products.getMatrixResult).subscribe(result => this.showSimplexErr = result.resultType === _models__WEBPACK_IMPORTED_MODULE_1__.MatrixResultType.Failed);
    this.tabItems = [{
      label: 'app.list',
      icon: 'fa-solid fa-list',
      routerLink: 'list',
      queryParamsHandling: 'preserve'
    }, {
      label: 'app.flow',
      icon: 'fa-solid fa-diagram-project',
      routerLink: 'flow',
      queryParamsHandling: 'preserve'
    }, {
      label: 'app.matrix',
      icon: 'fa-solid fa-table-cells',
      routerLink: 'matrix',
      queryParamsHandling: 'preserve'
    }];
    this.Game = _models__WEBPACK_IMPORTED_MODULE_1__.Game;
    this.ItemId = _models__WEBPACK_IMPORTED_MODULE_1__.ItemId;
    this.MatrixResultType = _models__WEBPACK_IMPORTED_MODULE_1__.MatrixResultType;
  }

  ngOnInit() {
    this.stateSvc.initialize();
    this.themeSvc.initialize();
    this.routerSvc.initialize();
  }
  /**
   * This doesn't seem like it should be necessary,
   * but error message sometimes does not render without it
   * */


  ngAfterViewInit() {
    this.errorSvc.message$.subscribe(() => this.ref.detectChanges());
  }

  tryFixSimplex() {
    this.isFixingSimplex = true; // Give button loading indicator a chance to start

    setTimeout(() => {
      this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Settings.getDefaults).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.first)()).subscribe(def => {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.Preferences.SetSimplexTypeAction(_models__WEBPACK_IMPORTED_MODULE_1__.SimplexType.WasmFloat64));
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.Settings.SetDisabledRecipesAction({
          value: [],
          def: def?.disabledRecipeIds
        }));
        this.showSimplexErr = false;
        this.isFixingSimplex = false;
      });
    }, 10);
  }

  reset(game) {
    this.isResetting = true; // Give button loading indicator a chance to start

    setTimeout(() => {
      this.ngZone.run(() => {
        this.errorSvc.message$.next(null);
        this.router.navigateByUrl(_models__WEBPACK_IMPORTED_MODULE_1__.gameInfo[game].route);
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.App.ResetAction());
        this.isResetting = false;
      });
    }, 10);
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.RouterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ThemeService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["lab-root"]],
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [3, "sticky", "settingsXlHidden"], [4, "ngIf", "ngIfElse"], ["errorDialog", ""], [3, "active", "hidden"], [1, "layout-mask", 3, "click"], [1, "layout-content"], [1, "px-1", "px-sm-4", "py-4"], ["loading", ""], [3, "visible", "modal", "draggable", "resizable", "breakpoints", "visibleChange"], ["pTemplate", "header"], [3, "innerText"], [1, "text-end", "mt-2"], ["pButton", "", "pRipple", "", "type", "button", 1, "mt-2", "p-button-outlined", 3, "label", "click"], ["pButton", "", "pRipple", "", "type", "button", 1, "mt-2", "ms-2", "p-button-outlined", 3, "label", "loading", "click"], ["pButton", "", "pRipple", "", "type", "button", 1, "mt-2", "ms-2", 3, "label", "click"], ["styleClass", "mt-4", 3, "header"], [3, "model"], ["pTemplate", "item"], ["pTemplate", "footer"], [1, "p-menuitem-icon"], [1, "p-menuitem-text"], [1, "d-flex", "align-items-center", "justify-content-between"], ["notSolved", ""], [1, "d-flex", "flex-column", "align-items-center", "mt-5"], [1, "p-dialog-title"], [1, "fa-solid", "fa-triangle-exclamation", "me-2"], [3, "visible", "modal", "draggable", "resizable", "closable", "closeOnEscape"], [1, "p-error"], [1, "mt-4"], [1, "text-end", "mt-4"], ["pButton", "", "pRipple", "", "type", "button", 3, "label", "loading", "click"], [1, "p-dialog-title", "p-error"], [1, "fa-solid", "fa-circle-exclamation", "me-2"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 5, 4, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "lab-content");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.vm$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_card__WEBPACK_IMPORTED_MODULE_16__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.Dialog, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__.ProgressSpinner, primeng_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_21__.TabMenu, _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__.ProductsComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.layout-content[_ngcontent-%COMP%] {\n  transition: margin 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  margin-left: 320px;\n  padding-top: 4rem;\n}\n\n@media (max-width: 1199.98px) {\n  .layout-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-top: 6rem;\n  }\n}\n\n@media (min-width: 1200px) {\n  .layout-content.settings-xl-hidden[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .layout-mask.active[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--maskbg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3JpZXNcXGZveGhvbGVsYWJcXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtBQ0pGOztBRE9BO0VBQ0UsMkRBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FDa0VJO0VGakVKO0lBT0ksY0FBQTtJQUNBLGlCQUFBO0VDSkY7QUFDRjs7QUMrQ0k7RUZ4Q0E7SUFDRSxjQUFBO0VDSko7QUFDRjs7QUN1REk7RUY5Q0Y7SUFDRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBRUEsV0FBQTtJQUNBLFlBQUE7SUFFQSwrQkFBQTtFQ1BGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sYXlvdXQtY29udGVudCB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAzMjBweDtcclxuICBwYWRkaW5nLXRvcDogNHJlbTtcclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhsKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xyXG4gICAgJi5zZXR0aW5ncy14bC1oaWRkZW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4bCkge1xyXG4gIC5sYXlvdXQtbWFzay5hY3RpdmUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFza2JnKTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYXlvdXQtY29udGVudCB7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xuICBtYXJnaW4tbGVmdDogMzIwcHg7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAubGF5b3V0LWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5sYXlvdXQtY29udGVudC5zZXR0aW5ncy14bC1oaWRkZW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmxheW91dC1tYXNrLmFjdGl2ZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDM7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hc2tiZyk7XG4gIH1cbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCB4eGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAaWYgbm90ICRuIHtcbiAgICBAZXJyb3IgXCJicmVha3BvaW50IGAjeyRuYW1lfWAgbm90IGZvdW5kIGluIGAjeyRicmVha3BvaW50c31gXCI7XG4gIH1cbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiAgYnJlYWtwb2ludC1tYXgoJG5leHQsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuZXh0LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ 4354);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var glpk_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glpk-ts */ 6675);
/* harmony import */ var glpk_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glpk_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-google-analytics */ 992);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-shared.module */ 453);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/theme.service */ 8140);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ 2322);
/* harmony import */ var _store_analytics_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/analytics.effects */ 1926);
/* harmony import */ var _store_datasets_datasets_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/datasets/datasets.effects */ 2352);
/* harmony import */ var _store_factories_factories_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/factories/factories.effects */ 714);
/* harmony import */ var _store_products_products_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/products/products.effects */ 4653);
































function initializeApp(primengConfig, translateSvc) {
    return () => {
        // Enable ripple
        primengConfig.ripple = true;
        // Set up initial theme
        _services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService.appInitTheme();
        // Initialize translate service with default to English
        translateSvc.setDefaultLang('en');
        // Load glpk-wasm
        return (0,glpk_ts__WEBPACK_IMPORTED_MODULE_0__.loadModule)('assets/glpk-wasm/glpk.all.wasm');
    };
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__.APP_BASE_HREF, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseHref },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ErrorHandler, useClass: _services__WEBPACK_IMPORTED_MODULE_5__.LabErrorHandler },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.APP_INITIALIZER,
            deps: [primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeNGConfig, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService],
            useFactory: initializeApp,
            multi: true,
        },
    ], imports: [
        /** Angular modules */
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        /** Vendor modules */
        _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forRoot(_store__WEBPACK_IMPORTED_MODULE_7__.reducers, { metaReducers: _store__WEBPACK_IMPORTED_MODULE_7__.metaReducers }),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule.instrument({
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production,
        }),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsModule.forRoot([
            _store_datasets_datasets_effects__WEBPACK_IMPORTED_MODULE_9__.DatasetsEffects,
            _store_products_products_effects__WEBPACK_IMPORTED_MODULE_11__.ProductsEffects,
            _store_factories_factories_effects__WEBPACK_IMPORTED_MODULE_10__.FactoriesEffects,
            _store_analytics_effects__WEBPACK_IMPORTED_MODULE_8__.AnalyticsEffects,
        ]),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                useFactory: (http) => {
                    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__.TranslateHttpLoader(http, './assets/i18n/', '.json');
                },
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient],
            },
            defaultLanguage: 'en',
        }),
        ngx_google_analytics__WEBPACK_IMPORTED_MODULE_23__.NgxGoogleAnalyticsModule.forRoot('G-TFR5Z43GPH'),
        ngx_google_analytics__WEBPACK_IMPORTED_MODULE_23__.NgxGoogleAnalyticsRouterModule,
        /** App modules */
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _app_shared_module__WEBPACK_IMPORTED_MODULE_3__.AppSharedModule,
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__.ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent], imports: [
        /** Angular modules */
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsRootModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_23__.NgxGoogleAnalyticsModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_23__.NgxGoogleAnalyticsRouterModule,
        /** App modules */
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _app_shared_module__WEBPACK_IMPORTED_MODULE_3__.AppSharedModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 1813:
/*!***********************************************************************!*\
  !*** ./src/app/components/columns-dialog/columns-dialog.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnsDialogComponent": () => (/* binding */ ColumnsDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services */ 1866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _pipes_precision_example_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/precision-example.pipe */ 9213);





















function ColumnsDialogComponent_p_dialog_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "columns.visibility"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 6, "columns.decimals"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 8, "columns.fractions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 10, "columns.example"));
  }
}

function ColumnsDialogComponent_p_dialog_0_ng_template_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td")(2, "p-inputNumber", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ColumnsDialogComponent_p_dialog_0_ng_template_4_ng_container_3_Template_p_inputNumber_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.editValue[column_r5.value].precision = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 10)(4, "p-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function ColumnsDialogComponent_p_dialog_0_ng_template_4_ng_container_3_Template_p_checkbox_onChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.changeFraction($event.checked, column_r5.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "precisionExample");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 0)("size", 1)("showButtons", true)("disabled", !ctx_r6.editValue[column_r5.value].show)("ngModel", ctx_r6.editValue[column_r5.value].precision);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.editValue[column_r5.value].precision == null)("binary", true)("disabled", !ctx_r6.editValue[column_r5.value].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, ctx_r6.editValue[column_r5.value].precision), " ");
  }
}

function ColumnsDialogComponent_p_dialog_0_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "columns.notApplicable"));
  }
}

function ColumnsDialogComponent_p_dialog_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "p-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ColumnsDialogComponent_p_dialog_0_ng_template_4_Template_p_checkbox_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const column_r5 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.editValue[column_r5.value].show = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ColumnsDialogComponent_p_dialog_0_ng_template_4_ng_container_3_Template, 8, 11, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ColumnsDialogComponent_p_dialog_0_ng_template_4_ng_template_4_Template, 4, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r5 = ctx.$implicit;

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.editValue[column_r5.value].show)("binary", true)("label", column_r5.label)("disabled", column_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.precisionColumns.indexOf(column_r5.value) !== -1)("ngIfElse", _r7);
  }
}

function ColumnsDialogComponent_p_dialog_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ColumnsDialogComponent_p_dialog_0_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.visible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "ok"));
  }
}

const _c0 = function () {
  return {
    width: "400px"
  };
};

const _c1 = function () {
  return {
    "400px": "100vw"
  };
};

function ColumnsDialogComponent_p_dialog_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dialog", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function ColumnsDialogComponent_p_dialog_0_Template_p_dialog_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.visible = $event);
    })("onHide", function ColumnsDialogComponent_p_dialog_0_Template_p_dialog_onHide_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p-table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ColumnsDialogComponent_p_dialog_0_ng_template_3_Template, 13, 12, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ColumnsDialogComponent_p_dialog_0_ng_template_4_Template, 6, 6, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ColumnsDialogComponent_p_dialog_0_ng_template_5_Template, 2, 3, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx_r0.visible)("modal", true)("dismissableMask", true)("draggable", false)("resizable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c1))("header", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 10, "columns.header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", vm_r1.columnOptions);
  }
}

let ColumnsDialogComponent = class ColumnsDialogComponent {
  constructor(ref, store, contentSvc) {
    this.ref = ref;
    this.store = store;
    this.contentSvc = contentSvc;
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getColumnsState).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(columns => this.initEdit(columns))), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getColumnOptions)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([columns, columnOptions]) => ({
      columns,
      columnOptions
    })));
    this.visible = false;
    this.editValue = {};
    this.precisionColumns = _models__WEBPACK_IMPORTED_MODULE_0__.precisionColumns;
  }

  ngOnInit() {
    this.contentSvc.showColumns$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(() => {
      this.visible = true;
      this.ref.markForCheck();
    });
  }

  initEdit(columns) {
    this.editValue = Object.keys(columns).reduce((e, c) => {
      e[c] = { ...columns[c]
      };
      return e;
    }, {});
  }

  changeFraction(value, column) {
    this.editValue[column].precision = value ? null : 1;
  }

  save() {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.SetColumnsAction(this.editValue));
  }

};

ColumnsDialogComponent.ɵfac = function ColumnsDialogComponent_Factory(t) {
  return new (t || ColumnsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.ContentService));
};

ColumnsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ColumnsDialogComponent,
  selectors: [["lab-columns-dialog"]],
  decls: 2,
  vars: 3,
  consts: [[3, "visible", "modal", "dismissableMask", "draggable", "resizable", "style", "breakpoints", "header", "visibleChange", "onHide", 4, "ngIf"], [3, "visible", "modal", "dismissableMask", "draggable", "resizable", "breakpoints", "header", "visibleChange", "onHide"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], [3, "ngModel", "binary", "label", "disabled", "ngModelChange"], [4, "ngIf", "ngIfElse"], ["noPrecision", ""], ["styleClass", "w-100", 1, "w-100", 3, "min", "size", "showButtons", "disabled", "ngModel", "ngModelChange"], [1, "text-center"], [3, "ngModel", "binary", "disabled", "onChange"], ["colspan", "3", 1, "text-center", "colspan-3"], [1, "p-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-text", 3, "label", "click"]],
  template: function ColumnsDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ColumnsDialogComponent_p_dialog_0_Template, 6, 14, "p-dialog", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.vm$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.Checkbox, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumber, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _pipes_precision_example_pipe__WEBPACK_IMPORTED_MODULE_3__.PrecisionExamplePipe],
  styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  width: 115px;\n}\nth.colspan-3[_ngcontent-%COMP%], td.colspan-3[_ngcontent-%COMP%] {\n  width: 345px;\n}\n[_nghost-%COMP%]     .p-dialog-content {\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbnMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yaWVzXFxmb3hob2xlbGFiXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcY29sdW1ucy1kaWFsb2dcXGNvbHVtbnMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7QUNDRjtBRENFOztFQUNFLFlBQUE7QUNFSjtBREdFO0VBQ0Usb0JBQUE7QUNBSiIsImZpbGUiOiJjb2x1bW5zLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLFxyXG50ZCB7XHJcbiAgd2lkdGg6IDExNXB4O1xyXG5cclxuICAmLmNvbHNwYW4tMyB7XHJcbiAgICB3aWR0aDogMzQ1cHg7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5wLWRpYWxvZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG4iLCJ0aCxcbnRkIHtcbiAgd2lkdGg6IDExNXB4O1xufVxudGguY29sc3Bhbi0zLFxudGQuY29sc3Bhbi0zIHtcbiAgd2lkdGg6IDM0NXB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn0iXX0= */"],
  changeDetection: 0
});
ColumnsDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], ColumnsDialogComponent);


/***/ }),

/***/ 8828:
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var _columns_dialog_columns_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../columns-dialog/columns-dialog.component */ 1813);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);











const _c0 = ["translateSelectedItem"];
const _c1 = ["translateItem"];
function ContentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, item_r4.label), "\n");
} }
function ContentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, item_r5.label), "\n");
} }
let ContentComponent = class ContentComponent {
    constructor(confirmationSvc, contentSvc) {
        this.confirmationSvc = confirmationSvc;
        this.contentSvc = contentSvc;
    }
    ngOnInit() {
        this.contentSvc.showConfirm$
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this))
            .subscribe((c) => this.confirmationSvc.confirm(c));
    }
    ngAfterViewInit() {
        this.contentSvc.translateSelectedItem$.next(this.translateSelectedItem);
        this.contentSvc.translateItem$.next(this.translateItem);
    }
};
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
ContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["lab-content"]], viewQuery: function ContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.translateSelectedItem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.translateItem = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService])], decls: 7, vars: 0, consts: [["styleClass", "d-none"], ["pTemplate", "selectedItem"], ["translateSelectedItem", ""], ["pTemplate", "item"], ["translateItem", ""]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-confirmDialog")(1, "lab-columns-dialog")(2, "p-inputNumber", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContentComponent_ng_template_3_Template, 2, 3, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContentComponent_ng_template_5_Template, 2, 3, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialog, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__.InputNumber, _columns_dialog_columns_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ColumnsDialogComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
ContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], ContentComponent);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services */ 1866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/icon-class.pipe */ 1969);

















function HeaderComponent_ng_container_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_ng_container_0_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.contentSvc.toggleSettingsXl());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function HeaderComponent_ng_container_0_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const link_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", link_r6.href, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", link_r6.icon)("label", link_r6.label);
  }
}

function HeaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_ng_container_0_button_1_Template, 1, 0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_ng_container_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.contentSvc.toggleSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-splitButton", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function HeaderComponent_ng_container_0_Template_p_splitButton_onClick_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const vm_r1 = restoredCtx.ngIf;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.selectGame(vm_r1.gameInfo.route));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HeaderComponent_ng_container_0_li_6_Template, 3, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", vm_r1.settingsXlHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, vm_r1.gameInfo.icon))("model", vm_r1.gameOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.links);
  }
}

let HeaderComponent = class HeaderComponent {
  constructor(contentSvc, router, title, store, translateSvc) {
    this.contentSvc = contentSvc;
    this.router = router;
    this.title = title;
    this.store = store;
    this.translateSvc = translateSvc;
    this.sticky = false;
    this.settingsXlHidden = false;
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getGame), this.contentSvc.settingsXlHidden$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([game, settingsXlHidden]) => ({
      gameInfo: _models__WEBPACK_IMPORTED_MODULE_0__.gameInfo[game],
      gameOptions: this.buildGameOptions(game),
      settingsXlHidden
    })));
    this.links = [{
      label: 'Wiki',
      icon: 'fa-solid fa-book',
      href: 'https://github.com/factoriolab/factoriolab/wiki'
    }, {
      label: 'Source',
      icon: 'fa-brands fa-github',
      href: 'https://github.com/factoriolab/factoriolab'
    }, {
      label: 'Discord',
      icon: 'fa-brands fa-discord',
      href: 'https://discord.gg/N4FKV687x2'
    }, {
      label: 'Support',
      icon: 'fa-solid fa-mug-hot',
      href: 'https://ko-fi.com/dcbroad3'
    }];
  }

  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getBaseProducts), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getDataset), this.contentSvc.lang$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(([products, data]) => {
      const title = this.translateSvc.instant(_models__WEBPACK_IMPORTED_MODULE_0__.gameInfo[data.game].title);

      if (products.length && data.itemEntities[products[0].itemId]) {
        this.title.setTitle(`${data.itemEntities[products[0].itemId].name} | ${title}`);
      } else {
        this.title.setTitle(`${_models__WEBPACK_IMPORTED_MODULE_0__.APP} | ${title}`);
      }
    });
  }

  buildGameOptions(game) {
    return _models__WEBPACK_IMPORTED_MODULE_0__.games.filter(g => g !== game).map(g => ({
      icon: 'lab-icon-sm ' + _models__WEBPACK_IMPORTED_MODULE_0__.gameInfo[g].icon,
      label: this.translateSvc.instant(_models__WEBPACK_IMPORTED_MODULE_0__.gameInfo[g].label),
      command: () => this.selectGame(_models__WEBPACK_IMPORTED_MODULE_0__.gameInfo[g].route)
    }));
  }

  selectGame(route) {
    this.router.navigateByUrl(route);
  }

};

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["lab-header"]],
  hostVars: 4,
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sticky", ctx.sticky)("settings-xl-hidden", ctx.settingsXlHidden);
    }
  },
  inputs: {
    sticky: "sticky",
    settingsXlHidden: "settingsXlHidden"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "class", "d-inline-flex d-none d-xl-flex p-button-lg settings-button me-3", "icon", "fa-solid fa-bars", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-bars", 1, "d-inline-flex", "d-xl-none", "p-button-lg", "settings-button", 3, "click"], ["styleClass", "p-button-lg", 3, "icon", "model", "onClick"], [1, "header-menu", "mb-1", "mb-xl-0", "px-0", "px-sm-4", "px-xl-0"], [4, "ngFor", "ngForOf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-bars", 1, "d-inline-flex", "d-none", "d-xl-flex", "p-button-lg", "settings-button", "me-3", 3, "click"], ["target", "_blank", 1, "w-100", 3, "href"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-text", "p-button-secondary", "p-button-sm", "d-flex", "justify-content-center", "w-100", 3, "icon", "label"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HeaderComponent_ng_container_0_Template, 7, 6, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.vm$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.Ripple, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_15__.SplitButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_3__.IconSmClassPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 320px;\n  z-index: 2;\n  transition: all 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  transition-property: width, left;\n  width: calc(100% - 320px);\n  height: 4rem;\n  padding: 0 1.5rem;\n}\n.sticky[_nghost-%COMP%] {\n  background-color: var(--header-sticky-color);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n}\n@media (max-width: 1199.98px) {\n  [_nghost-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: space-between;\n    left: 0;\n    width: 100%;\n    height: 6rem;\n  }\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    padding: 0 0.25rem;\n  }\n}\n@media (min-width: 1200px) {\n  .settings-xl-hidden[_nghost-%COMP%] {\n    left: 0;\n    width: 100%;\n  }\n}\n.header-menu[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0 0 auto;\n}\n.header-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n@media (max-width: 1199.98px) {\n  .header-menu[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n  .header-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]     .header-menu .p-button-icon {\n    display: none;\n  }\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcmllc1xcZm94aG9sZWxhYlxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLHdEQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0xGO0FET0U7RUFDRSw0Q0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNMSjtBQzRESTtFRnhFSjtJQXFCSSxlQUFBO0lBQ0EsOEJBQUE7SUFDQSxPQUFBO0lBRUEsV0FBQTtJQUNBLFlBQUE7RUNORjtBQUNGO0FDbURJO0VGeEVKO0lBOEJJLGtCQUFBO0VDTEY7QUFDRjtBQ2lDSTtFRnpCQTtJQUNFLE9BQUE7SUFFQSxXQUFBO0VDTko7QUFDRjtBRFVBO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0FDUkY7QURVRTtFQUNFLGtCQUFBO0FDUko7QURVSTtFQUNFLG1CQUFBO0FDUk47QUM2Qkk7RUY5Qko7SUFjSSxXQUFBO0VDVEY7RURXRTtJQUNFLFVBQUE7RUNUSjtFRFdJO0lBQ0UsU0FBQTtFQ1ROO0FBQ0Y7QUNrQkk7RUZGQTtJQUNFLGFBQUE7RUNaSjtBQUNGO0FEZ0JBO0VBQ0UscUJBQUE7QUNiRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAzMjBweDtcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgbGVmdDtcclxuXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMyMHB4KTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgcGFkZGluZzogMCAxLjVyZW07XHJcblxyXG4gICYuc3RpY2t5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1zdGlja3ktY29sb3IpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhsKSB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhsKSB7XHJcbiAgICAmLnNldHRpbmdzLXhsLWhpZGRlbiB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xyXG5cclxuICA+IGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICArIGxpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4bCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgPiBsaSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcblxyXG4gICAgICArIGxpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICAuaGVhZGVyLW1lbnUgLnAtYnV0dG9uLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDMyMHB4O1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjBweCk7XG4gIGhlaWdodDogNHJlbTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG59XG46aG9zdC5zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItc3RpY2t5LWNvbG9yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICA6aG9zdCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgOmhvc3Quc2V0dGluZ3MteGwtaGlkZGVuIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5oZWFkZXItbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cbi5oZWFkZXItbWVudSA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1tZW51ID4gbGkgKyBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5oZWFkZXItbWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlYWRlci1tZW51ID4gbGkge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmhlYWRlci1tZW51ID4gbGkgKyBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmhlYWRlci1tZW51IC5wLWJ1dHRvbi1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwgeHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQGlmIG5vdCAkbiB7XG4gICAgQGVycm9yIFwiYnJlYWtwb2ludCBgI3skbmFtZX1gIG5vdCBmb3VuZCBpbiBgI3skYnJlYWtwb2ludHN9YFwiO1xuICB9XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46ICBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogIGJyZWFrcG9pbnQtbWF4KCRuZXh0LCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmV4dCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"],
  changeDetection: 0
});
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], HeaderComponent);


/***/ }),

/***/ 7468:
/*!*******************************************************************!*\
  !*** ./src/app/components/input-number/input-number.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputNumberComponent": () => (/* binding */ InputNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var _directives_validate_number_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/validate-number.directive */ 9148);









function InputNumberComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputNumberComponent_span_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.increase()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputNumberComponent_span_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.decrease()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isMinimum);
} }
class InputNumberComponent {
    constructor() {
        this.value = '';
        this.minimum = '0';
        this.width = '';
        this.inputId = 'inputnumber';
        this.hideButtons = false;
        this.setValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.classAttr = 'p-element p-inputwrapper';
        this.isMinimum = false;
        this.min = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
    }
    ngOnChanges(changes) {
        if (changes['minimum']) {
            this.min = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(this.minimum);
        }
        if (changes['value'] || changes['minimum']) {
            try {
                this.isMinimum = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(this.value).lte(this.min);
            }
            catch {
                this.isMinimum = false;
            }
        }
    }
    changeValue(value) {
        try {
            const rational = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(value);
            if (rational.gte(this.min)) {
                this.setValue.emit(value);
            }
        }
        catch { }
    }
    increase() {
        try {
            const rational = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(this.value);
            const newValue = rational.isInteger()
                ? rational.add(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.one)
                : rational.ceil();
            this.setValue.emit(newValue.toString());
        }
        catch { }
    }
    decrease() {
        try {
            const rational = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(this.value);
            const newValue = rational.isInteger()
                ? rational.sub(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.one)
                : rational.floor();
            if (newValue.gte(this.min)) {
                this.setValue.emit(newValue.toString());
            }
        }
        catch { }
    }
}
InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) { return new (t || InputNumberComponent)(); };
InputNumberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InputNumberComponent, selectors: [["lab-input-number"]], hostVars: 2, hostBindings: function InputNumberComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classAttr);
    } }, inputs: { value: "value", minimum: "minimum", width: "width", inputId: "inputId", hideButtons: "hideButtons" }, outputs: { setValue: "setValue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 8, consts: [[1, "p-inputnumber", "p-component", "p-inputnumber-buttons-stacked"], ["pInputText", "", "type", "text", "labValidateNumber", "", 3, "id", "ngModel", "labValidateMinimum", "blur"], ["input", ""], ["class", "p-inputnumber-button-group", 4, "ngIf"], [1, "p-inputnumber-button-group"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-angle-up", 1, "p-inputnumber-button", "p-inputnumber-button-up", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-angle-down", 1, "p-inputnumber-button", "p-inputnumber-button-down", 3, "disabled", "click"]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function InputNumberComponent_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.changeValue(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InputNumberComponent_span_3_Template, 3, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden-buttons", ctx.hideButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("ngModel", ctx.value)("labValidateMinimum", ctx.minimum);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideButtons);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _directives_validate_number_directive__WEBPACK_IMPORTED_MODULE_1__.ValidateNumberDirective], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n}\n\n[_nghost-%COMP%]     .p-inputtext:not(.hidden-buttons) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[_nghost-%COMP%]     .p-inputnumber {\n  display: inline-flex;\n}\n\n[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n  flex: 1 1 auto;\n}\n\n[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up, [_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .p-inputtext {\n  text-align: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcmllc1xcZm94aG9sZWxhYlxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGlucHV0LW51bWJlclxcaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURJRTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJRTtFQUNFLG9CQUFBO0FDRko7O0FES0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURNRTtFQUdFLGNBQUE7QUNOSjs7QURVSTtFQUVFLFVBQUE7QUNUTjs7QURhRTtFQUNFLG1CQUFBO0FDWEoiLCJmaWxlIjoiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4vLyBVc2UgSW5wdXROdW1iZXIgc3R5bGVzXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLnAtaW5wdXR0ZXh0Om5vdCguaGlkZGVuLWJ1dHRvbnMpIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAucC1pbnB1dG51bWJlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB9XHJcblxyXG4gIC5wLWlucHV0bnVtYmVyLWJ1dHRvbnMtc3RhY2tlZCAucC1pbnB1dG51bWJlci1idXR0b24tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucC1pbnB1dG51bWJlci1idXR0b25zLXN0YWNrZWRcclxuICAgIC5wLWlucHV0bnVtYmVyLWJ1dHRvbi1ncm91cFxyXG4gICAgLnAtYnV0dG9uLnAtaW5wdXRudW1iZXItYnV0dG9uIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnAtaW5wdXRudW1iZXItYnV0dG9ucy1zdGFja2VkIC5wLWJ1dHRvbiB7XHJcbiAgICAmLnAtaW5wdXRudW1iZXItYnV0dG9uLXVwLFxyXG4gICAgJi5wLWlucHV0bnVtYmVyLWJ1dHRvbi1kb3duIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wLWlucHV0dGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0Om5vdCguaGlkZGVuLWJ1dHRvbnMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWlucHV0bnVtYmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtaW5wdXRudW1iZXItYnV0dG9ucy1zdGFja2VkIC5wLWlucHV0bnVtYmVyLWJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtaW5wdXRudW1iZXItYnV0dG9ucy1zdGFja2VkIC5wLWlucHV0bnVtYmVyLWJ1dHRvbi1ncm91cCAucC1idXR0b24ucC1pbnB1dG51bWJlci1idXR0b24ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAucC1pbnB1dG51bWJlci1idXR0b25zLXN0YWNrZWQgLnAtYnV0dG9uLnAtaW5wdXRudW1iZXItYnV0dG9uLXVwLCA6aG9zdCA6Om5nLWRlZXAgLnAtaW5wdXRudW1iZXItYnV0dG9ucy1zdGFja2VkIC5wLWJ1dHRvbi5wLWlucHV0bnVtYmVyLWJ1dHRvbi1kb3duIHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1pbnB1dHRleHQge1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 8290:
/*!*******************************************************!*\
  !*** ./src/app/components/picker/picker.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickerComponent": () => (/* binding */ PickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _store_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/store/recipes */ 7542);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autofocus */ 174);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/tooltips/item-tooltip.pipe */ 7598);
/* harmony import */ var _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/icon-class.pipe */ 1969);




















const _c0 = ["inputFilter"];

function PickerComponent_p_dialog_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 6)(2, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pAutoFocus", true)("formControl", ctx_r2.searchCtrl);
  }
}

function PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const id_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, id_r5, "category"));
  }
}

function PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_2_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_2_div_0_ng_container_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const itemId_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.clickItem(itemId_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const itemId_r15 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5).ngIf;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("p-button-text", itemId_r15 !== ctx_r14.selectedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, itemId_r15))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 7, itemId_r15, vm_r1.data))("escape", false);
  }
}

function PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_2_div_0_ng_container_1_Template, 4, 10, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const itemIds_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", itemIds_r13);
  }
}

function PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_2_div_0_Template, 2, 1, "div", 12);
  }

  if (rf & 2) {
    const id_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.categoryItemRows[id_r5]);
  }
}

function PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-tabPanel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_1_Template, 2, 5, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_ng_template_2_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r8 = ctx.ngIf;
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", category_r8.name)("selected", i_r6 === ctx_r7.activeIndex);
  }
}

function PickerComponent_p_dialog_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PickerComponent_p_dialog_0_ng_container_3_p_tabPanel_1_Template, 3, 2, "p-tabPanel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const id_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.categoryEntities[id_r5]);
  }
}

const _c1 = function () {
  return {
    height: "500px",
    width: "400px"
  };
};

const _c2 = function () {
  return {
    "458px": "100vw"
  };
};

function PickerComponent_p_dialog_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dialog", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function PickerComponent_p_dialog_0_Template_p_dialog_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.visible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PickerComponent_p_dialog_0_ng_template_1_Template, 4, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-tabView", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeIndexChange", function PickerComponent_p_dialog_0_Template_p_tabView_activeIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.activeIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PickerComponent_p_dialog_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx_r0.visible)("modal", true)("dismissableMask", true)("draggable", false)("resizable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollable", true)("activeIndex", ctx_r0.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categoryIds);
  }
}

let PickerComponent = class PickerComponent {
  constructor(ref, filterService, store) {
    this.ref = ref;
    this.filterService = filterService;
    this.store = store;
    this.selectId = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.vm$ = this.store.select(_store_recipes__WEBPACK_IMPORTED_MODULE_0__.getAdjustedDataset).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => ({
      data
    })));
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.visible = false;
    this.categoryEntities = {};
    this.categoryIds = [];
    this.categoryItemRows = {};
    this.activeIndex = 0;
  }

  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.store.select(_store_recipes__WEBPACK_IMPORTED_MODULE_0__.getAdjustedDataset), this.searchCtrl.valueChanges]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(([data, search]) => {
      this.inputSearch(data, search);
    });
  }

  clickOpen(data, selectedId) {
    this.selectedId = selectedId;
    this.searchCtrl.setValue(''); // Wait for input field to appear before attempting to focus

    setTimeout(() => {
      this.inputFilter?.nativeElement.focus();
    });
    this.categoryEntities = data.categoryEntities;
    this.categoryIds = data.categoryIds;
    this.categoryItemRows = data.categoryItemRows;

    if (this.selectedId) {
      const index = data.categoryIds.indexOf(data.itemEntities[this.selectedId].category);
      this.activeIndex = index;
    }

    this.visible = true;
    this.ref.markForCheck();
  }

  clickItem(itemId) {
    this.selectId.emit(itemId);
    this.visible = false;
  }

  inputSearch(data, search) {
    if (!search) {
      this.categoryIds = data.categoryIds;
      this.categoryItemRows = data.categoryItemRows;
      return;
    } // Filter for matching item ids


    const selectItems = data.itemIds.map(i => ({
      label: data.itemEntities[i].name,
      value: i
    }));
    const filteredItems = this.filterService.filter(selectItems, ['label'], search, 'contains');
    const itemIds = filteredItems.map(i => i.value); // Filter for matching category ids

    this.categoryIds = data.categoryIds.filter(c => itemIds.some(i => data.itemEntities[i].category === c)); // Filter category item rows

    this.categoryItemRows = {};

    for (const c of this.categoryIds) {
      // Filter each category item row
      this.categoryItemRows[c] = [];

      for (const r of data.categoryItemRows[c]) {
        this.categoryItemRows[c].push(r.filter(i => itemIds.indexOf(i) !== -1));
      } // Filter out empty category item rows


      this.categoryItemRows[c] = this.categoryItemRows[c].filter(r => r.length > 0);
    }
  }

};

PickerComponent.ɵfac = function PickerComponent_Factory(t) {
  return new (t || PickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
};

PickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PickerComponent,
  selectors: [["lab-picker"]],
  viewQuery: function PickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputFilter = _t.first);
    }
  },
  outputs: {
    selectId: "selectId"
  },
  decls: 2,
  vars: 3,
  consts: [["styleClass", "picker-dialog", "appendTo", "body", 3, "visible", "modal", "dismissableMask", "draggable", "resizable", "style", "breakpoints", "visibleChange", 4, "ngIf"], ["styleClass", "picker-dialog", "appendTo", "body", 3, "visible", "modal", "dismissableMask", "draggable", "resizable", "breakpoints", "visibleChange"], ["pTemplate", "header"], [3, "scrollable", "activeIndex", "activeIndexChange"], [4, "ngFor", "ngForOf"], [1, "w-100", "me-3", "p-input-icon-right"], [1, "fa-solid", "fa-magnifying-glass"], ["pInputText", "", "type", "text", 1, "w-100", 3, "pAutoFocus", "formControl"], ["inputFilter", ""], [3, "tooltip", "selected", 4, "ngIf"], [3, "tooltip", "selected"], ["pTemplate", "content"], ["class", "d-flex flex-wrap", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap"], ["pButton", "", "pRipple", "", "type", "button", 1, "me-1", "mb-1", 3, "icon", "pTooltip", "escape", "click"]],
  template: function PickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PickerComponent_p_dialog_0_Template, 4, 13, "p-dialog", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.vm$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocus, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.Ripple, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_1__.ItemTooltipPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_2__.IconSmClassPipe],
  styles: [".picker-dialog .p-dialog-header {\n  padding: 0.75rem 1rem;\n}\n  .picker-dialog .p-dialog-content {\n  padding: 0 1rem 1rem 1rem;\n}\n  .picker-dialog .p-tabview-panels {\n  padding: 0.5rem 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcmllc1xcZm94aG9sZWxhYlxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBpY2tlclxccGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUNBSjtBREdFO0VBQ0UseUJBQUE7QUNESjtBRElFO0VBQ0UscUJBQUE7QUNGSiIsImZpbGUiOiJwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnBpY2tlci1kaWFsb2cge1xyXG4gIC5wLWRpYWxvZy1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnAtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcclxuICB9XHJcblxyXG4gIC5wLXRhYnZpZXctcGFuZWxzIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAgMDtcclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5waWNrZXItZGlhbG9nIC5wLWRpYWxvZy1oZWFkZXIge1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG59XG46Om5nLWRlZXAgLnBpY2tlci1kaWFsb2cgLnAtZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAxcmVtO1xufVxuOjpuZy1kZWVwIC5waWNrZXItZGlhbG9nIC5wLXRhYnZpZXctcGFuZWxzIHtcbiAgcGFkZGluZzogMC41cmVtIDAgMCAwO1xufSJdfQ== */"],
  changeDetection: 0
});
PickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], PickerComponent);


/***/ }),

/***/ 697:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services */ 1866);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-number/input-number.component */ 7468);
/* harmony import */ var _picker_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../picker/picker.component */ 8290);
/* harmony import */ var _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/dropdown-base.directive */ 2897);
/* harmony import */ var _directives_dropdown_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/dropdown-translate.directive */ 3989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/tooltips/item-tooltip.pipe */ 7598);
/* harmony import */ var _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/tooltips/recipe-tooltip.pipe */ 8098);
/* harmony import */ var _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/icon-class.pipe */ 1969);
/* harmony import */ var _pipes_rate_type_via_dropdown_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/rate-type-via-dropdown.pipe */ 1930);
























function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 26)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const dropdownType_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, item_r18.value, dropdownType_r13));
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const dropdownType_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pTooltip", dropdownType_r13 === "recipe" ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](1, 5, item_r20.value, vm_r1.data) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 8, item_r20.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](4, 11, item_r20.value, dropdownType_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r20.label, " ");
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_7_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "products.changeVia"), " ");
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 30)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const dropdownType_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 3, item_r23.value, dropdownType_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r23.label, " ");
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_7_span_0_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_7_ng_template_1_Template, 5, 6, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const item_r23 = ctx.$implicit;

    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);

    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r23.value === product_r4.itemId)("ngIfElse", _r25);
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const dropdownType_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pTooltip", dropdownType_r13 === "recipe" ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](1, 5, item_r30.value, vm_r1.data) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 8, item_r30.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](4, 11, item_r30.value, dropdownType_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r30.label, " ");
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "p-dropdown", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChange", function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_Template_p_dropdown_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r33.setVia(product_r4.id, $event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_3_Template, 3, 5, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_4_Template, 7, 14, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p-dropdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChange", function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_Template_p_dropdown_onChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.setVia(product_r4.id, $event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_7_Template, 3, 2, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_ng_template_8_Template, 7, 14, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("virtualScroll", true)("virtualScrollItemSize", 34)("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 10, "products.changeVia"))("options", vm_r1.viaOptions[product_r4.id])("ngModel", product_r4.viaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("virtualScroll", true)("virtualScrollItemSize", 34)("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 12, "products.changeVia"))("options", vm_r1.viaOptions[product_r4.id])("ngModel", product_r4.viaId);
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_ng_container_1_Template, 9, 14, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "rateTypeViaDropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, product_r4.rateType));
  }
}

function ProductsComponent_p_card_0_div_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductsComponent_p_card_0_div_2_ng_container_21_ng_container_1_Template, 3, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r4.viaId);
  }
}

function ProductsComponent_p_card_0_div_2_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "products.noEnabledRecipes"));
  }
}

function ProductsComponent_p_card_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductsComponent_p_card_0_div_2_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r42.removeProduct(product_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductsComponent_p_card_0_div_2_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const product_r4 = restoredCtx.$implicit;

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);

      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r6.clickOpen(vm_r1.data, product_r4.itemId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductsComponent_p_card_0_div_2_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const product_r4 = restoredCtx.$implicit;

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);

      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r6.clickOpen(vm_r1.data, product_r4.itemId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "lab-picker", 6, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectId", function ProductsComponent_p_card_0_div_2_Template_lab_picker_selectId_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r48.setItem(product_r4.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "lab-input-number", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("setValue", function ProductsComponent_p_card_0_div_2_Template_lab_input_number_setValue_15_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r49.setRate(product_r4.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "lab-input-number", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("setValue", function ProductsComponent_p_card_0_div_2_Template_lab_input_number_setValue_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.setRate(product_r4.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChange", function ProductsComponent_p_card_0_div_2_Template_p_dropdown_onChange_19_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r51.setRateType(product_r4.id, $event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ProductsComponent_p_card_0_div_2_ng_container_21_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ProductsComponent_p_card_0_div_2_ng_template_22_Template, 3, 3, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const last_r5 = ctx.last;

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](23);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("mb-3", !last_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 19, "products.removeProduct"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 21, product_r4.itemId))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 23, "products.changeItem"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 25, product_r4.itemId))("label", vm_r1.data.itemEntities[product_r4.itemId].name)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 27, "products.changeItem"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 29, "products.limitTo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 31, "products.changeRate"))("hideButtons", true)("value", product_r4.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 33, "products.changeRate"))("value", product_r4.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 35, "products.changeRateType"))("options", vm_r1.rateTypeOptions)("ngModel", product_r4.rateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", vm_r1.viaOptions[product_r4.id].length > 0)("ngIfElse", _r8);
  }
}

function ProductsComponent_p_card_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ProductsComponent_p_card_0_div_2_Template, 24, 37, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductsComponent_p_card_0_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r54);
      const vm_r1 = restoredCtx.ngIf;

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](8);

      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r3.clickOpen(vm_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "lab-picker", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectId", function ProductsComponent_p_card_0_Template_lab_picker_selectId_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r55.addProduct($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 4)(10, "p-dropdown", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChange", function ProductsComponent_p_card_0_Template_p_dropdown_onChange_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r54);
      const vm_r1 = restoredCtx.ngIf;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r56.setDisplayRate($event.value, vm_r1.displayRate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 7, "products.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", vm_r1.products)("ngForTrackBy", ctx_r0.trackSvc.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 9, "products.addAProduct"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 11, "products.selectDisplayRate"))("ngModel", vm_r1.displayRate)("options", ctx_r0.displayRateOptions);
  }
}

class ProductsComponent {
  constructor(trackSvc, store) {
    this.trackSvc = trackSvc;
    this.store = store;
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getProducts), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getViaOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Items.getItemSettings), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Factories.getFactories), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Recipes.getRecipeSettings), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getDisplayRate), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getRateTypeOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getDataset)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(([products, viaOptions, itemSettings, factories, recipeSettings, displayRate, rateTypeOptions, options, data]) => ({
      products,
      viaOptions,
      itemSettings,
      factories,
      recipeSettings,
      displayRate,
      rateTypeOptions,
      options,
      data
    })));
    this.displayRateOptions = _models__WEBPACK_IMPORTED_MODULE_0__.displayRateOptions;
    this.RateType = _models__WEBPACK_IMPORTED_MODULE_0__.RateType;
  }
  /** Action Dispatch Methods */


  removeProduct(id) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Products.RemoveAction(id));
  }

  setItem(id, value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Products.SetItemAction({
      id,
      value
    }));
  }

  setRate(id, value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Products.SetRateAction({
      id,
      value
    }));
  }

  setRateType(id, value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Products.SetRateTypeAction({
      id,
      value
    }));
  }

  setVia(id, value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Products.SetViaAction({
      id,
      value
    }));
  }

  addProduct(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Products.AddAction(value));
  }

  setDisplayRate(value, prev) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetDisplayRateAction({
      value,
      prev
    }));
  }

}

ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.TrackService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store));
};

ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["lab-products"]],
  decls: 2,
  vars: 3,
  consts: [[3, "header", 4, "ngIf"], [3, "header"], ["class", "d-flex align-items-center", 3, "mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row", "mt-3"], [1, "col-auto", "mt-2"], ["pButton", "", "type", "button", "pRipple", "", "icon", "fa-solid fa-plus", 3, "label", "click"], [3, "selectId"], ["addPicker", ""], ["labDropdownTranslate", "", "styleClass", "h-100", 3, "tooltip", "ngModel", "options", "onChange"], [1, "d-flex", "align-items-center"], [1, "p-inputgroup"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-minus", 1, "p-button-outlined", "icon", 3, "pTooltip", "click"], ["pButton", "", "pRipple", "", "type", "button", 1, "d-inline-flex", "d-sm-none", "text-truncate", 3, "icon", "pTooltip", "click"], ["pButton", "", "pRipple", "", "type", "button", "tooltipPosition", "top", 1, "d-none", "d-sm-inline-flex", "text-truncate", 3, "icon", "label", "pTooltip", "click"], ["editPicker", ""], [1, "d-none", "d-md-block", "p-inputgroup-addon"], ["tooltipPosition", "top", 1, "d-inline-flex", "d-sm-none", 3, "pTooltip", "hideButtons", "value", "setValue"], ["tooltipPosition", "top", 1, "d-none", "d-sm-inline-flex", 3, "pTooltip", "value", "setValue"], ["tooltipPosition", "top", 3, "tooltip", "options", "ngModel", "onChange"], [4, "ngIf", "ngIfElse"], ["recipeNone", ""], [4, "ngIf"], ["labDropdownBase", "icon", "tooltipPosition", "top", 1, "d-inline-flex", "d-sm-none", "icon", 3, "virtualScroll", "virtualScrollItemSize", "tooltip", "options", "ngModel", "onChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["labDropdownBase", "", "tooltipPosition", "top", 1, "d-none", "d-sm-inline-flex", 3, "virtualScroll", "virtualScrollItemSize", "tooltip", "options", "ngModel", "onChange"], [1, "d-flex"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip", "escape"], [1, "ms-3", "text-truncate"], ["viaSelected", ""], [1, "d-flex", "align-items-center", "h-100"], ["tooltipPosition", "left", 1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip", "escape"], [1, "p-inputgroup-addon", "p-error"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ProductsComponent_p_card_0_Template, 12, 13, "p-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx.vm$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_card__WEBPACK_IMPORTED_MODULE_18__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.Dropdown, primeng_tooltip__WEBPACK_IMPORTED_MODULE_21__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_22__.Ripple, _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__.InputNumberComponent, _picker_picker_component__WEBPACK_IMPORTED_MODULE_4__.PickerComponent, _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownBaseDirective, _directives_dropdown_translate_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownTranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_7__.ItemTooltipPipe, _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_8__.RecipeTooltipPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_9__.IconSmClassPipe, _pipes_rate_type_via_dropdown_pipe__WEBPACK_IMPORTED_MODULE_10__.RateTypeViaDropdownPipe],
  styles: [".p-inputgroup[_ngcontent-%COMP%]   p-dropdown.icon[_ngcontent-%COMP%] {\n  flex: 0 0 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yaWVzXFxmb3hob2xlbGFiXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtBQ0FKIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtaW5wdXRncm91cCB7XHJcbiAgcC1kcm9wZG93bi5pY29uIHtcclxuICAgIGZsZXg6IDAgMCAzNnB4O1xyXG4gIH1cclxufVxyXG4iLCIucC1pbnB1dGdyb3VwIHAtZHJvcGRvd24uaWNvbiB7XG4gIGZsZXg6IDAgMCAzNnB4O1xufSJdfQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 6577:
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/services */ 1866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/autofocus */ 174);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/menu */ 625);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/multiselect */ 850);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-number/input-number.component */ 7468);
/* harmony import */ var _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/dropdown-base.directive */ 2897);
/* harmony import */ var _directives_dropdown_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/dropdown-translate.directive */ 3989);
/* harmony import */ var _pipes_tooltips_beacon_tooltip_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/tooltips/beacon-tooltip.pipe */ 6923);
/* harmony import */ var _pipes_tooltips_factory_tooltip_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/tooltips/factory-tooltip.pipe */ 1168);
/* harmony import */ var _pipes_tooltips_module_tooltip_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/tooltips/module-tooltip.pipe */ 7820);
/* harmony import */ var _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/tooltips/recipe-tooltip.pipe */ 8098);
/* harmony import */ var _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/icon-class.pipe */ 1969);
/* harmony import */ var _pipes_invert_array_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/invert-array.pipe */ 8034);




































function SettingsComponent_div_10_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_ng_container_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r25.editState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_ng_container_11_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r27.clickSaveState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 7, "cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pAutoFocus", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 9, "settings.nameSavedState"))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 11, "settings.savedStateName"))("formControl", ctx_r2.stateCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 13, "settings.saveSavedState"))("disabled", !ctx_r2.stateCtrl.valid);
  }
}

function SettingsComponent_div_10_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_ng_template_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r28.openEditState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p-dropdown", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_ng_template_12_Template_p_dropdown_onChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r30.setState($event.value, vm_r1.preferences));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_ng_template_12_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r32.clickDeleteState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 7, "settings.editSavedState"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 9, "settings.selectSavedState"))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 11, "settings.selectSavedState"))("ngModel", ctx_r4.state)("options", vm_r1.savedStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 13, "settings.deleteSavedState"))("disabled", !ctx_r4.state);
  }
}

function SettingsComponent_div_10_a_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 56)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "settings.requestMod"));
  }
}

function SettingsComponent_div_10_ng_container_27_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mod_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", mod_r35.value, " ");
  }
}

function SettingsComponent_div_10_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettingsComponent_div_10_ng_container_27_small_1_Template, 2, 1, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, vm_r1.data.version));
  }
}

function SettingsComponent_div_10_div_28_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "settings.mod"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 4, "settings.version"));
  }
}

function SettingsComponent_div_10_div_28_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mod_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](mod_r40.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](mod_r40.value);
  }
}

function SettingsComponent_div_10_div_28_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_div_28_ng_template_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r41.versionsVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "ok"));
  }
}

const _c0 = function () {
  return {
    width: "400px",
    maxHeight: "500px"
  };
};

const _c1 = function () {
  return {
    "400px": "100vw"
  };
};

function SettingsComponent_div_10_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 58)(1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 11)(5, "p-dropdown", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_28_Template_p_dropdown_onChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r43.setMod($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_div_28_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r45.versionsVisible = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "p-dialog", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("visibleChange", function SettingsComponent_div_10_div_28_Template_p_dialog_visibleChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r46.versionsVisible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "p-table", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, SettingsComponent_div_10_div_28_ng_template_13_Template, 7, 6, "ng-template", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, SettingsComponent_div_10_div_28_ng_template_14_Template, 5, 2, "ng-template", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, SettingsComponent_div_10_div_28_ng_template_15_Template, 2, 3, "ng-template", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 16, "settings.modSet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("filter", true)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 18, "settings.modSetTooltip"))("ngModel", vm_r1.settings.modId)("options", vm_r1.modOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 20, "settings.modVersions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](26, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", ctx_r7.versionsVisible)("modal", true)("dismissableMask", true)("draggable", false)("resizable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](27, _c1))("header", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 22, "settings.modVersions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 24, vm_r1.data.version));
  }
}

function SettingsComponent_div_10_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    const items_r48 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = items_r48 == null ? null : items_r48.length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, "settings.recipesEnabled"), " ");
  }
}

function SettingsComponent_div_10_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, item_r49.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](3, 8, item_r49.value, "recipe"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r49.label, " ");
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "factoryTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r71 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, item_r71.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r71.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r71.label, " ");
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p-dropdown", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_2_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r75);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).ngIf;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r73.addFactory($event.value, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.factoryRankIds));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_2_ng_template_2_Template, 2, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_2_ng_template_3_Template, 6, 10, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, "settings.addFactoryTooltip"))("options", vm_r1.factoryOptions);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r79);
      const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r77.removeFactory(factoryId_r52, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.factoryRankIds));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "settings.removeFactoryPreference"));
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 86)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, item_r83.value));
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "factoryTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r84 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, item_r84.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r84.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r84.label, " ");
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p-dropdown", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_5_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r88);
      const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r86.setFactory(factoryId_r52, $event.value, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.factoryRankIds));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_5_ng_template_2_Template, 3, 4, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_5_ng_template_3_Template, 6, 10, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 3, "settings.factoryTooltip"))("ngModel", factoryId_r52)("options", vm_r1.factoryOptions);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "settings.factoryDefaults"));
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_i_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const items_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("+", items_r94.length - 1, "");
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_i_1_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const items_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 3, items_r94[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", items_r94.length > 1);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, ctx_r97.ItemId.Module));
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_i_1_Template, 3, 5, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_ng_template_2_Template, 2, 4, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const items_r94 = ctx.$implicit;

    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", items_r94 && items_r94.length)("ngIfElse", _r96);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "moduleTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r101 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, item_r101.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r101.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r101.label, " ");
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p-multiSelect", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_Template_p_multiSelect_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r105);
      const defaults_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
      const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r103.setModuleRank(factoryId_r52, $event.value, defaults_r57 == null ? null : defaults_r57.moduleRankIds));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_2_Template, 4, 2, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_ng_template_3_Template, 6, 10, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const settings_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).ngIf;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("selectionLimit", vm_r1.data.game === ctx_r64.Game.Satisfactory ? 1 : 2)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 4, "settings.modifierTooltip"))("ngModel", settings_r55.moduleRankIds)("options", vm_r1.options.modules);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "p-inputNumber", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onBlur", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_9_Template_p_inputNumber_onBlur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r112);

      const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);

      const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r110.setOverclock(factoryId_r52, _r109.value, factoryId_r52 ? vm_r1.factories.entities[""].overclock : 100));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const settings_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("min", 1)("max", 250)("step", 10)("showButtons", true)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 6, "settings.overclockTooltip"))("ngModel", settings_r55.overclock);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 86)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, item_r120.value));
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "beaconTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r121 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](7).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, item_r121.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r121.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r121.label, " ");
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 86)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, item_r123.value));
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "moduleTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r124 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](7).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, item_r124.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r124.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r124.label, " ");
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "lab-input-number", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("setValue", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_Template_lab_input_number_setValue_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r128);
      const defaults_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
      const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r126.setBeaconCount(factoryId_r52, $event, defaults_r57 == null ? null : defaults_r57.beaconCount));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-dropdown", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r128);
      const defaults_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
      const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r130.setBeacon(factoryId_r52, $event.value, defaults_r57 == null ? null : defaults_r57.beaconId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_5_Template, 3, 4, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_6_Template, 6, 10, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p-dropdown", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_Template_p_dropdown_onChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r128);
      const defaults_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
      const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r133.setBeaconModule(factoryId_r52, $event.value, defaults_r57 == null ? null : defaults_r57.beaconModuleId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_9_Template, 3, 4, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_ng_template_10_Template, 6, 10, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const settings_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 9, "settings.beaconCountTooltip"))("value", settings_r55.beaconCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 11, "settings.beaconTooltip"))("ngModel", settings_r55.beaconId)("options", vm_r1.options.beacons);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("autoDisplayFirst", false)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 13, "settings.beaconModuleTooltip"))("ngModel", settings_r55.beaconModuleId)("options", vm_r1.options.beaconModules);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_ng_container_1_Template, 11, 15, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const settings_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", settings_r55.beaconCount != null);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_2_Template, 4, 4, "p-dropdown", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_template_3_Template, 2, 3, "ng-template", null, 73, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_dropdown_5_Template, 4, 5, "p-dropdown", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_template_6_Template, 3, 3, "ng-template", null, 75, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_p_multiSelect_8_Template, 4, 6, "p-multiSelect", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_9_Template, 4, 8, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_ng_container_10_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_Template_button_click_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r140);

      const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](14);

      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r67.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "p-menu", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](7);

    const settings_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const index_r53 = ctx_r141.index;
    const factoryId_r52 = ctx_r141.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", index_r53 === 0)("ngIfElse", _r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", factoryId_r52)("ngIfElse", _r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", settings_r55.moduleRankIds);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r56.Game.Satisfactory);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r56.Game.Factorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("invisible", vm_r1.factoryMenuItems[index_r53].length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 12, "settings.moveFactoryPreference"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("popup", true)("model", vm_r1.factoryMenuItems[index_r53]);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_ng_container_1_Template, 15, 14, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const factoryId_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", factoryId_r52 ? vm_r1.factories.entities[""] : vm_r1.data.defaults);
  }
}

function SettingsComponent_div_10_ng_container_50_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettingsComponent_div_10_ng_container_50_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const factoryId_r52 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.factories.entities[factoryId_r52]);
  }
}

function SettingsComponent_div_10_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SettingsComponent_div_10_ng_container_50_ng_container_1_Template, 2, 1, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", vm_r1.factoryRows);
  }
}

function SettingsComponent_div_10_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 97)(1, "p-checkbox", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_51_Template_p_checkbox_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r149);
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r148.toggleBeaconReceivers($event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.beaconReceivers != null)("binary", true)("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "settings.estimateBeaconPowerUsage"))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 6, "settings.estimateBeaconPowerUsageTooltip"));
  }
}

function SettingsComponent_div_10_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 58)(1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "lab-input-number", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("setValue", function SettingsComponent_div_10_div_52_Template_lab_input_number_setValue_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r152);
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r151.setBeaconReceivers($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "settings.averageBeaconReceivers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 5, "settings.averageBeaconReceiversTooltip"))("value", vm_r1.settings.beaconReceivers);
  }
}

function SettingsComponent_div_10_div_53_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, item_r156.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r156.label, " ");
  }
}

function SettingsComponent_div_10_div_53_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "moduleTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r157 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, item_r157.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r157.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r157.label, " ");
  }
}

function SettingsComponent_div_10_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 101)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-dropdown", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_53_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r160);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r159.setProliferatorSpray($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettingsComponent_div_10_div_53_ng_template_4_Template, 5, 5, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_div_53_ng_template_5_Template, 6, 10, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 5, "settings.proliferatorSelfSprayTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("autoDisplayFirst", false)("ngModel", vm_r1.settings.proliferatorSprayId)("options", vm_r1.options.prodModules);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 7, "settings.proliferatorSelfSpray"));
  }
}

function SettingsComponent_div_10_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, item_r162.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r162.label, " ");
  }
}

const _c2 = function (a0, a1) {
  return {
    name: a0,
    speed: a1
  };
};

function SettingsComponent_div_10_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r163 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, "tooltip.belt", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](10, _c2, vm_r1.data.itemEntities[item_r163.value].name, vm_r1.beltSpeedTxt[item_r163.value])))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r163.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r163.label, " ");
  }
}

function SettingsComponent_div_10_div_63_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, item_r167.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r167.label, " ");
  }
}

function SettingsComponent_div_10_div_63_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r168 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, "tooltip.pipe", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](10, _c2, vm_r1.data.itemEntities[item_r168.value].name, vm_r1.beltSpeedTxt[item_r168.value])))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r168.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r168.label, " ");
  }
}

function SettingsComponent_div_10_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-dropdown", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_63_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r172);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r170.setPipe($event.value, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.pipeId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettingsComponent_div_10_div_63_ng_template_4_Template, 5, 5, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_div_63_ng_template_5_Template, 6, 13, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "settings.defaultPipeTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.pipeId)("options", vm_r1.options.pipes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 6, "settings.defaultPipe"));
  }
}

function SettingsComponent_div_10_div_64_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, item_r176.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r176.label, " ");
  }
}

const _c3 = function (a0, a1) {
  return {
    name: a0,
    size: a1
  };
};

function SettingsComponent_div_10_div_64_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r177 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, "tooltip.cargoWagon", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](10, _c3, vm_r1.data.itemEntities[item_r177.value].name, vm_r1.data.cargoWagonEntities[item_r177.value].size)))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r177.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r177.label, " ");
  }
}

function SettingsComponent_div_10_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-dropdown", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_64_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r181);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r179.setCargoWagon($event.value, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.cargoWagonId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettingsComponent_div_10_div_64_ng_template_4_Template, 5, 5, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_div_64_ng_template_5_Template, 6, 13, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "settings.defaultCargoWagonTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.cargoWagonId)("options", vm_r1.options.cargoWagons);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 6, "settings.defaultCargoWagon"));
  }
}

function SettingsComponent_div_10_div_65_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, item_r185.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r185.label, " ");
  }
}

function SettingsComponent_div_10_div_65_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r186 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, "tooltip.fluidWagon", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](10, _c3, vm_r1.data.itemEntities[item_r186.value].name, vm_r1.data.fluidWagonEntities[item_r186.value].capacity)))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r186.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r186.label, " ");
  }
}

function SettingsComponent_div_10_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-dropdown", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_65_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r190);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r188.setFluidWagon($event.value, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.fluidWagonId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettingsComponent_div_10_div_65_ng_template_4_Template, 5, 5, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_div_65_ng_template_5_Template, 6, 13, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "settings.defaultFluidWagonTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.fluidWagonId)("options", vm_r1.options.fluidWagons);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 6, "settings.defaultFluidWagon"));
  }
}

function SettingsComponent_div_10_div_66_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r194 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, item_r194.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r194.label, " ");
  }
}

const _c4 = function (a0, a1, a2) {
  return {
    name: a0,
    category: a1,
    value: a2
  };
};

function SettingsComponent_div_10_div_66_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r195 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 5, "tooltip.fuel", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction3"](10, _c4, vm_r1.data.itemEntities[item_r195.value].name, vm_r1.data.fuelEntities[item_r195.value].category, vm_r1.data.fuelEntities[item_r195.value].value)))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, item_r195.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r195.label, " ");
  }
}

function SettingsComponent_div_10_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-dropdown", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_66_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r199);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
      const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r197.setFuel($event.value, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.fuelId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettingsComponent_div_10_div_66_ng_template_4_Template, 5, 5, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_div_66_ng_template_5_Template, 6, 14, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "settings.chemicalFuelTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.fuelId)("options", vm_r1.options.chemicalFuels);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 6, "settings.chemicalFuel"));
  }
}

function SettingsComponent_div_10_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p-inputNumber", 113, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onBlur", function SettingsComponent_div_10_ng_container_67_Template_p_inputNumber_onBlur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r203);

      const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);

      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r202.setFlowRate(_r201.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "small", 43)(11, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Wiki");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 17)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "p-dropdown", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_ng_container_67_Template_p_dropdown_onChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r203);
      const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r204.setInserterTarget($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 11, "settings.pipeFlowRateTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("suffix", " " + _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 13, "settings.flowRateUnit"))("min", 1)("step", 100)("showButtons", true)("ngModel", vm_r1.settings.flowRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 15, "settings.pipeFlowRate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 17, "settings.inserterTargetTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.inserterTarget)("options", ctx_r20.inserterTargetOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 19, "settings.inserterTarget"));
  }
}

function SettingsComponent_div_10_div_68_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p-inputNumber", 119, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onBlur", function SettingsComponent_div_10_div_68_ng_container_4_Template_p_inputNumber_onBlur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r210);

      const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);

      const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r209.setMiningBonus(_r208.value - 100));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 6, "settings.miningSpeedTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("min", 100)("step", 10)("showButtons", true)("ngModel", vm_r1.settings.miningBonus + 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 8, "settings.miningSpeed"));
  }
}

function SettingsComponent_div_10_div_68_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p-inputNumber", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onBlur", function SettingsComponent_div_10_div_68_ng_container_5_Template_p_inputNumber_onBlur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r214);

      const _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);

      const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r213.setMiningBonus(_r212.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 17)(10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "p-dropdown", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_68_ng_container_5_Template_p_dropdown_onChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r214);
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r215.setResearchSpeed($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 17)(17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "p-dropdown", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_68_ng_container_5_Template_p_dropdown_onChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r214);
      const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r216.setInserterCapacity($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).ngIf;
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 14, "settings.miningProductivityTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("min", 0)("step", 10)("showButtons", true)("ngModel", vm_r1.settings.miningBonus);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 16, "settings.miningProductivity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 18, "settings.researchSpeedTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.researchSpeed)("options", ctx_r207.researchSpeedOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 20, "settings.researchSpeed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 22, "settings.inserterCapacityTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.inserterCapacity)("options", ctx_r207.inserterCapacityOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](22, 24, "settings.inserterCapacity"));
  }
}

function SettingsComponent_div_10_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 8)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, SettingsComponent_div_10_div_68_ng_container_4_Template, 9, 10, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SettingsComponent_div_10_div_68_ng_container_5_Template, 23, 26, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "settings.bonuses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r21.Game.DysonSphereProgram);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r21.Game.Factorio);
  }
}

function SettingsComponent_div_10_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p-dropdown", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_div_82_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r220);
      const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r219.setPowerUnit($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "settings.powerUnitTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.preferences.powerUnit)("options", ctx_r22.powerUnitOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 6, "settings.powerUnit"));
  }
}

function SettingsComponent_div_10_small_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "settings.simplexSolverDisabledInfo"), " ");
  }
}

function SettingsComponent_div_10_small_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "settings.simplexSolverWasmFloat64Info"), " ");
  }
}

const _c5 = function () {
  return {
    height: "100%"
  };
};

const _c6 = function () {
  return {
    width: "1rem"
  };
};

function SettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "p-scrollPanel")(2, "div", 7)(3, "div", 8)(4, "h3")(5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, SettingsComponent_div_10_ng_container_11_Template, 8, 15, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, SettingsComponent_div_10_ng_template_12_Template, 7, 15, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 8)(15, "div", 14)(16, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, SettingsComponent_div_10_a_19_Template, 4, 3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 17)(21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "p-dropdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_dropdown_onChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r222.setGame($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, SettingsComponent_div_10_ng_container_27_Template, 3, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, SettingsComponent_div_10_div_28_Template, 16, 28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 17)(30, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "p-multiSelect", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_multiSelect_onChange_32_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const vm_r1 = restoredCtx.ngIf;
      const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r224.setDisabledRecipes(ctx_r224.displaySvc.invertArray($event.value, vm_r1.data.complexRecipeIds), vm_r1.data.defaults == null ? null : vm_r1.data.defaults.disabledRecipeIds));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](33, "invertArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, SettingsComponent_div_10_ng_template_34_Template, 2, 4, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, SettingsComponent_div_10_ng_template_35_Template, 6, 11, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 8)(40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 27)(44, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_dropdown_onChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r225.setPreset($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, SettingsComponent_div_10_ng_container_50_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](51, SettingsComponent_div_10_div_51_Template, 4, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](52, SettingsComponent_div_10_div_52_Template, 6, 7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, SettingsComponent_div_10_div_53_Template, 9, 9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div", 17)(55, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "p-dropdown", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_dropdown_onChange_57_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const vm_r1 = restoredCtx.ngIf;
      const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r226.setBelt($event.value, vm_r1.data.defaults == null ? null : vm_r1.data.defaults.beltId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, SettingsComponent_div_10_ng_template_58_Template, 5, 5, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, SettingsComponent_div_10_ng_template_59_Template, 6, 13, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, SettingsComponent_div_10_div_63_Template, 9, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, SettingsComponent_div_10_div_64_Template, 9, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, SettingsComponent_div_10_div_65_Template, 9, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, SettingsComponent_div_10_div_66_Template, 9, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](67, SettingsComponent_div_10_ng_container_67_Template, 20, 21, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, SettingsComponent_div_10_div_68_Template, 6, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "div", 8)(70, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_div_10_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r227.contentSvc.showColumns$.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "div", 17)(76, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "p-dropdown", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_dropdown_onChange_78_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const vm_r1 = restoredCtx.ngIf;
      const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r228.setDisplayRate($event.value, vm_r1.settings.displayRate));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](82, SettingsComponent_div_10_div_82_Template, 7, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](84, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "p-dropdown", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_dropdown_onChange_87_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r229.setLanguage($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "small", 43)(92, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 17)(96, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](97, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "p-dropdown", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_dropdown_onChange_98_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r230.setTheme($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](101, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "div", 8)(103, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](105, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](106, "div", 17)(107, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](108, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "p-dropdown", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onChange", function SettingsComponent_div_10_Template_p_dropdown_onChange_109_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r223);
      const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r231.setSimplexType($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](114, SettingsComponent_div_10_small_114_Template, 3, 3, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](115, SettingsComponent_div_10_small_115_Template, 3, 3, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const vm_r1 = ctx.ngIf;

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](13);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](114, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 63, "settings.savedStatesTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 65, "settings.savedStates"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.editState)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 67, "settings.recipes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r0.Game.Factorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](22, 69, "settings.gameTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.data.game)("options", ctx_r0.gameOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](26, 71, "settings.game"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game !== ctx_r0.Game.Factorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r0.Game.Factorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](31, 73, "settings.optionalRecipesTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("virtualScroll", true)("virtualScrollItemSize", 48)("panelStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](115, _c6))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](33, 75, vm_r1.settings.disabledRecipeIds, vm_r1.data.complexRecipeIds))("options", vm_r1.options.complexRecipes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](38, 78, "settings.optionalRecipes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](42, 80, "settings.factory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](45, 82, "settings.presetTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.preset)("options", vm_r1.presetOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](49, 84, "settings.preset"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game !== ctx_r0.Game.CaptainOfIndustry);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r0.Game.Factorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.settings.beaconReceivers);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r0.Game.DysonSphereProgram);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](56, 86, "settings.defaultTransportBeltTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.beltId)("options", vm_r1.options.belts);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](62, 88, "settings.defaultTransportBelt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.pipeIds.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.cargoWagonIds.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.fluidWagonIds.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.fuelIds[ctx_r0.FuelType.Chemical] && vm_r1.data.fuelIds[ctx_r0.FuelType.Chemical].length > 1 && vm_r1.data.game !== ctx_r0.Game.Satisfactory);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r0.Game.Factorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r0.Game.Factorio || vm_r1.data.game === ctx_r0.Game.DysonSphereProgram);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](72, 90, "settings.display"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](74, 92, "settings.openColumnSettings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](77, 94, "settings.displayRateTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.settings.displayRate)("options", ctx_r0.displayRateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](81, 96, "settings.displayRate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r0.Column.Power].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](86, 98, "settings.languageTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.preferences.language)("options", ctx_r0.languageOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](90, 100, "settings.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](94, 102, "settings.helpTranslate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](97, 104, "settings.themeTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.preferences.theme)("options", ctx_r0.themeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](101, 106, "settings.theme"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](105, 108, "settings.advanced"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](108, 110, "settings.simplexSolverTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", vm_r1.preferences.simplexType)("options", ctx_r0.simplexTypeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](112, 112, "settings.simplexSolver"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.preferences.simplexType === ctx_r0.SimplexType.Disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", vm_r1.preferences.simplexType === ctx_r0.SimplexType.WasmFloat64);
  }
}

class SettingsComponent {
  constructor(contentSvc, displaySvc, router, store, translateSvc, routerSvc) {
    this.contentSvc = contentSvc;
    this.displaySvc = displaySvc;
    this.router = router;
    this.store = store;
    this.translateSvc = translateSvc;
    this.routerSvc = routerSvc;
    this.active = false;
    this.hidden = false;
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Factories.getFactories), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Factories.getFactoryRows), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Factories.getFactoryOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getSettings), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getColumnsState), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getDataset), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getModOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getPresetOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getBeltSpeedTxt), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Preferences.preferencesState), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Preferences.getSavedStates), this.contentSvc.lang$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(([factories, factoryRows, factoryOptions, settings, columns, data, options, modOptions, presetOptions, beltSpeedTxt, preferences, savedStates]) => ({
      factories,
      factoryRows,
      factoryOptions,
      settings,
      columns,
      data,
      options,
      modOptions,
      presetOptions,
      beltSpeedTxt,
      preferences,
      savedStates,
      factoryMenuItems: this.buildFactoryMenus(factoryRows, data)
    })));
    this.state = '';
    this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
    this.editState = false;
    this.versionsVisible = false;
    this.displayRateOptions = _models__WEBPACK_IMPORTED_MODULE_0__.displayRateOptions;
    this.gameOptions = _models__WEBPACK_IMPORTED_MODULE_0__.gameOptions;
    this.inserterCapacityOptions = _models__WEBPACK_IMPORTED_MODULE_0__.inserterCapacityOptions;
    this.inserterTargetOptions = _models__WEBPACK_IMPORTED_MODULE_0__.inserterTargetOptions;
    this.languageOptions = _models__WEBPACK_IMPORTED_MODULE_0__.languageOptions;
    this.powerUnitOptions = _models__WEBPACK_IMPORTED_MODULE_0__.powerUnitOptions;
    this.researchSpeedOptions = _models__WEBPACK_IMPORTED_MODULE_0__.researchSpeedOptions;
    this.simplexTypeOptions = _models__WEBPACK_IMPORTED_MODULE_0__.simplexTypeOptions;
    this.themeOptions = _models__WEBPACK_IMPORTED_MODULE_0__.themeOptions;
    this.Column = _models__WEBPACK_IMPORTED_MODULE_0__.Column;
    this.FuelType = _models__WEBPACK_IMPORTED_MODULE_0__.FuelType;
    this.Game = _models__WEBPACK_IMPORTED_MODULE_0__.Game;
    this.ItemId = _models__WEBPACK_IMPORTED_MODULE_0__.ItemId;
    this.SimplexType = _models__WEBPACK_IMPORTED_MODULE_0__.SimplexType;
  }

  ngOnInit() {
    this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Preferences.getStates).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.first)()).subscribe(states => {
      this.state = Object.keys(states).find(s => states[s] === _utilities__WEBPACK_IMPORTED_MODULE_2__.BrowserUtility.search) ?? '';
    });
  }

  buildFactoryMenus(factoryRows, data) {
    return factoryRows.map((factoryId, index) => {
      if (!factoryId) return [];
      const items = [];
      if (index > 1) items.push({
        label: this.translateSvc.instant('settings.moveUp'),
        icon: 'fa-solid fa-arrow-up',
        command: () => this.raiseFactory(factoryId, data.defaults?.factoryRankIds)
      });
      if (index < factoryRows.length - 1) items.push({
        label: this.translateSvc.instant('settings.moveDown'),
        icon: 'fa-solid fa-arrow-down',
        command: () => this.lowerFactory(factoryId, data.defaults?.factoryRankIds)
      });
      return items;
    });
  }

  clickResetSettings() {
    this.contentSvc.confirm({
      icon: 'fa-solid fa-exclamation-triangle',
      header: this.translateSvc.instant('settings.reset'),
      message: this.translateSvc.instant('settings.resetWarning'),
      acceptLabel: this.translateSvc.instant('yes'),
      rejectLabel: this.translateSvc.instant('cancel'),
      accept: () => {
        localStorage.clear();
        this.resetSettings();
      }
    });
  }

  setState(id, preferences) {
    const query = preferences.states[id];

    if (query) {
      const queryParams = this.routerSvc.getParams(query);
      this.state = id;
      this.router.navigate([], {
        queryParams
      });
    }
  }

  clickSaveState() {
    if (this.stateCtrl.value) {
      this.saveState(this.stateCtrl.value, _utilities__WEBPACK_IMPORTED_MODULE_2__.BrowserUtility.search);
      this.editState = false;
      this.state = this.stateCtrl.value;
    }
  }

  clickDeleteState() {
    this.removeState(this.state);
    this.state = '';
  }

  openEditState() {
    this.stateCtrl.setValue(this.state);
    this.stateCtrl.markAsPristine();
    this.editState = true;
  }

  setGame(game) {
    this.setMod(_models__WEBPACK_IMPORTED_MODULE_0__.gameInfo[game].modId);
  }

  toggleBeaconReceivers(value) {
    this.setBeaconReceivers(value ? '1' : null);
  }
  /** Action Dispatch Methods */


  resetSettings() {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.App.ResetAction());
  }

  saveState(id, value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.SaveStateAction({
      id,
      value
    }));
  }

  removeState(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.RemoveStateAction(value));
  }

  setMod(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetModAction(value));
  }

  setDisabledRecipes(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetDisabledRecipesAction({
      value,
      def
    }));
  }

  setPreset(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetPresetAction(value));
  }

  addFactory(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.AddAction({
      value,
      def
    }));
  }

  removeFactory(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.RemoveAction({
      value,
      def
    }));
  }

  raiseFactory(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.RaiseAction({
      value,
      def
    }));
  }

  lowerFactory(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.LowerAction({
      value,
      def
    }));
  }

  setFactory(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.SetFactoryAction({
      id,
      value,
      def
    }));
  }

  setModuleRank(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.SetModuleRankAction({
      id,
      value,
      def
    }));
  }

  setOverclock(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.SetOverclockAction({
      id,
      value,
      def
    }));
  }

  setBeaconCount(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.SetBeaconCountAction({
      id,
      value,
      def
    }));
  }

  setBeacon(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.SetBeaconAction({
      id,
      value,
      def
    }));
  }

  setBeaconModule(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Factories.SetBeaconModuleAction({
      id,
      value,
      def
    }));
  }

  setBeaconReceivers(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetBeaconReceiversAction(value));
  }

  setProliferatorSpray(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetProliferatorSprayAction(value));
  }

  setBelt(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetBeltAction({
      value,
      def
    }));
  }

  setPipe(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetPipeAction({
      value,
      def
    }));
  }

  setCargoWagon(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetCargoWagonAction({
      value,
      def
    }));
  }

  setFluidWagon(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetFluidWagonAction({
      value,
      def
    }));
  }

  setFuel(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetFuelAction({
      value,
      def
    }));
  }

  setFlowRate(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetFlowRateAction(value));
  }

  setInserterTarget(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetInserterTargetAction(value));
  }

  setMiningBonus(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetMiningBonusAction(value));
  }

  setResearchSpeed(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetResearchSpeedAction(value));
  }

  setInserterCapacity(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetInserterCapacityAction(value));
  }

  setDisplayRate(value, prev) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetDisplayRateAction({
      value,
      prev
    }));
  }

  setPowerUnit(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.SetPowerUnitAction(value));
  }

  setLanguage(value) {
    this.translateSvc.use(value);
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.SetLanguageAction(value));
  }

  setTheme(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.SetThemeAction(value));
  }

  setSimplexType(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.SetSimplexTypeAction(value));
  }

}

SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.DisplayService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.RouterService));
};

SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["lab-settings"]],
  hostVars: 4,
  hostBindings: function SettingsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx.active)("hidden", ctx.hidden);
    }
  },
  inputs: {
    active: "active",
    hidden: "hidden"
  },
  decls: 12,
  vars: 9,
  consts: [[1, "p-3"], [1, "d-flex", "align-items-center", "justify-content-between"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-trash", "tooltipPosition", "bottom", 1, "p-button-rounded", "p-button-text", 3, "pTooltip", "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-rounded", "p-button-text", "d-inline-flex", "d-none", "d-xl-inline-flex", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-rounded", "p-button-text", "d-inline-flex", "d-sm-none", 3, "click"], ["class", "flex-grow-1 overflow-hidden", 4, "ngIf"], [1, "flex-grow-1", "overflow-hidden"], [1, "p-fluid", "px-3", "overflow-hidden", "settings-container"], [1, "mb-2"], [3, "pTooltip"], [1, "fa-solid", "fa-info-circle"], [1, "p-inputgroup"], [4, "ngIf", "ngIfElse"], ["selectState", ""], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "mb-0"], ["target", "_blank", "href", "https://github.com/factoriolab/factoriolab/issues/new?assignees=&labels=mod+support&template=mod-request.md&title=", 4, "ngIf"], [1, "mt-3", "py-2"], [1, "p-float-label", 3, "pTooltip"], ["labDropdownTranslate", "", "inputId", "game", 3, "ngModel", "options", "onChange"], ["for", "game"], [4, "ngIf"], ["class", "pb-2", 4, "ngIf"], ["inputId", "optional-recipes", "appendTo", "body", "scrollHeight", "40vh", "panelStyleClass", "mw-100", 3, "virtualScroll", "virtualScrollItemSize", "panelStyle", "ngModel", "options", "onChange"], ["pTemplate", "selectedItems"], ["pTemplate", "item"], ["for", "optional-recipes"], [1, "mt-3", "py-2", "mb-1"], ["labDropdownTranslate", "", "inputId", "preset", 3, "ngModel", "options", "onChange"], ["for", "preset"], ["class", "mt-2 py-2", 4, "ngIf"], ["class", "mt-4 py-2", 4, "ngIf"], ["labDropdownBase", "", "inputId", "default-transport-belt", 3, "ngModel", "options", "onChange"], ["pTemplate", "selectedItem"], ["for", "default-transport-belt"], ["class", "mt-3 py-2", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-table-columns", 1, "my-2", 3, "label", "click"], ["labDropdownTranslate", "", "inputId", "display-rate", 3, "ngModel", "options", "onChange"], ["for", "display-rate"], [1, "text-end"], ["labDropdownTranslate", "", "inputId", "language", 3, "ngModel", "options", "onChange"], ["for", "language"], [1, "position-absolute", "end-0", "bottom-100", "me-1", "mb-1"], ["href", "https://github.com/factoriolab/factoriolab/wiki/Translating-FactorioLab", "target", "_blank"], ["labDropdownTranslate", "", "inputId", "theme", 3, "ngModel", "options", "onChange"], ["for", "theme"], ["labDropdownTranslate", "", "inputId", "simplex-solver", 3, "ngModel", "options", "onChange"], ["for", "inserter-capacity"], [1, "p-error"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 3, "pTooltip", "click"], ["pInputText", "", "type", "text", "tooltipPosition", "top", 3, "pAutoFocus", "placeholder", "pTooltip", "formControl"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-floppy-disk", 3, "pTooltip", "disabled", "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-pen-to-square", 3, "pTooltip", "click"], ["tooltipPosition", "top", 3, "placeholder", "pTooltip", "ngModel", "options", "onChange"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-trash", 3, "pTooltip", "disabled", "click"], ["target", "_blank", "href", "https://github.com/factoriolab/factoriolab/issues/new?assignees=&labels=mod+support&template=mod-request.md&title="], ["class", "position-absolute end-0 bottom-100 me-1 mb-1", 4, "ngFor", "ngForOf"], [1, "pb-2"], [1, "p-static-label"], ["inputId", "mod", "styleClass", "w-100", 3, "filter", "pTooltip", "ngModel", "options", "onChange"], ["pButton", "", "pRipple", "", "icon", "fa-solid fa-info", 3, "pTooltip", "click"], ["appendTo", "body", 3, "visible", "modal", "dismissableMask", "draggable", "resizable", "breakpoints", "header", "visibleChange"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-text", 3, "label", "click"], [1, "d-flex", "align-items-center", "w-100", "h-100", 3, "pTooltip", "escape"], [1, "ms-3", "text-truncate"], [4, "ngFor", "ngForOf"], [1, "p-inputgroup", "flex-wrap", "factory-preference"], ["labDropdownBase", "icon", 3, "pTooltip", "options", "onChange", 4, "ngIf", "ngIfElse"], ["removeButton", ""], ["labDropdownBase", "icon", 3, "pTooltip", "ngModel", "options", "onChange", 4, "ngIf", "ngIfElse"], ["factoryIcon", ""], ["appendTo", "body", "scrollHeight", "40vh", "styleClass", "icon", "panelStyleClass", "tooltip", "placeholder", "unused", 3, "selectionLimit", "pTooltip", "ngModel", "options", "onChange", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-ellipsis-vertical", 1, "ms-auto", 3, "pTooltip", "click"], ["appendTo", "body", 3, "popup", "model"], ["factoryMenu", ""], ["labDropdownBase", "icon", 3, "pTooltip", "options", "onChange"], [1, "d-flex", "justify-content-center", "align-items-center", "h-100", "w-100"], [1, "fa-solid", "fa-plus"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip", "escape"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-minus", 3, "pTooltip", "click"], ["labDropdownBase", "icon", 3, "pTooltip", "ngModel", "options", "onChange"], [1, "d-flex"], [1, "p-inputgroup-addon", 3, "pTooltip"], [1, "fa-solid", "fa-industry"], ["appendTo", "body", "scrollHeight", "40vh", "styleClass", "icon", "panelStyleClass", "tooltip", "placeholder", "unused", 3, "selectionLimit", "pTooltip", "ngModel", "options", "onChange"], [3, "class", 4, "ngIf", "ngIfElse"], ["noModifiers", ""], ["suffix", "%", 3, "min", "max", "step", "showButtons", "pTooltip", "ngModel", "onBlur"], ["overclockInput", ""], ["tooltipPosition", "top", 3, "pTooltip", "value", "setValue"], ["labDropdownBase", "icon", "tooltipPosition", "top", 3, "pTooltip", "ngModel", "options", "onChange"], ["labDropdownBase", "icon", "placeholder", "unused", "tooltipPosition", "top", 3, "autoDisplayFirst", "pTooltip", "ngModel", "options", "onChange"], [1, "mt-2", "py-2"], [3, "ngModel", "binary", "label", "pTooltip", "onChange"], ["for", "beacon-receivers", 1, "p-static-label"], ["inputId", "beacon-receivers", 1, "w-100", 3, "pTooltip", "value", "setValue"], [1, "mt-4", "py-2"], ["labDropdownBase", "", "inputId", "proliferator-self-spray", 3, "autoDisplayFirst", "ngModel", "options", "onChange"], ["for", "proliferator-self-spray"], [1, "d-flex", "align-items-center", "h-100"], ["labDropdownBase", "", "inputId", "default-pipe", 3, "ngModel", "options", "onChange"], ["for", "default-pipe"], ["labDropdownBase", "", "inputId", "default-cargo-wagon", 3, "ngModel", "options", "onChange"], ["for", "default-cargo-wagon"], ["labDropdownBase", "", "inputId", "default-fluid-wagon", 3, "ngModel", "options", "onChange"], ["for", "default-fluid-wagon"], ["labDropdownBase", "", "inputId", "chemical-fuel", 3, "ngModel", "options", "onChange"], ["for", "chemical-fuel"], ["inputId", "pipe-flow-rate", 3, "suffix", "min", "step", "showButtons", "ngModel", "onBlur"], ["flowRateInput", ""], ["for", "pipe-flow-rate"], ["href", "https://wiki.factorio.com/Fluid_system#Pipelines", "target", "_blank"], ["labDropdownTranslate", "", "inputId", "inserter-target", 3, "ngModel", "options", "onChange"], ["for", "inserter-target"], ["inputId", "mining-speed", "suffix", "%", 3, "min", "step", "showButtons", "ngModel", "onBlur"], ["miningBonusInput", ""], ["for", "mining-speed"], ["inputId", "mining-productivity", "prefix", "+", "suffix", "%", 3, "min", "step", "showButtons", "ngModel", "onBlur"], ["miningProdInput", ""], ["for", "mining-productivity"], ["labDropdownTranslate", "", "inputId", "research-speed", 3, "ngModel", "options", "onChange"], ["for", "research-speed"], ["labDropdownTranslate", "", "inputId", "inserter-capacity", 3, "ngModel", "options", "onChange"], ["labDropdownTranslate", "", "inputId", "power-unit", 3, "ngModel", "options", "onChange"], ["for", "power-unit"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div")(6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_6_listener() {
        return ctx.clickResetSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_8_listener() {
        return ctx.contentSvc.toggleSettingsXl();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_9_listener() {
        return ctx.contentSvc.toggleSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, SettingsComponent_div_10_Template, 116, 116, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 3, "settings.header"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 5, "settings.reset"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 7, ctx.vm$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, primeng_autofocus__WEBPACK_IMPORTED_MODULE_22__.AutoFocus, primeng_button__WEBPACK_IMPORTED_MODULE_23__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_24__.PrimeTemplate, primeng_checkbox__WEBPACK_IMPORTED_MODULE_25__.Checkbox, primeng_dialog__WEBPACK_IMPORTED_MODULE_26__.Dialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_28__.InputNumber, primeng_inputtext__WEBPACK_IMPORTED_MODULE_29__.InputText, primeng_menu__WEBPACK_IMPORTED_MODULE_30__.Menu, primeng_tooltip__WEBPACK_IMPORTED_MODULE_31__.Tooltip, primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__.MultiSelect, primeng_ripple__WEBPACK_IMPORTED_MODULE_33__.Ripple, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_34__.ScrollPanel, primeng_table__WEBPACK_IMPORTED_MODULE_35__.Table, _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__.InputNumberComponent, _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownBaseDirective, _directives_dropdown_translate_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownTranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _pipes_tooltips_beacon_tooltip_pipe__WEBPACK_IMPORTED_MODULE_7__.BeaconTooltipPipe, _pipes_tooltips_factory_tooltip_pipe__WEBPACK_IMPORTED_MODULE_8__.FactoryTooltipPipe, _pipes_tooltips_module_tooltip_pipe__WEBPACK_IMPORTED_MODULE_9__.ModuleTooltipPipe, _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_10__.RecipeTooltipPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_11__.IconSmClassPipe, _pipes_invert_array_pipe__WEBPACK_IMPORTED_MODULE_12__.InvertArrayPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  width: 320px;\n  height: 100%;\n  background-color: var(--surface-overlay);\n}\n@media (max-width: 1199.98px) {\n  [_nghost-%COMP%] {\n    transform: translate(-100%);\n  }\n  .active[_nghost-%COMP%] {\n    transform: translate(0);\n  }\n}\n@media (min-width: 1200px) {\n  .hidden[_nghost-%COMP%] {\n    transform: translate(-100%);\n  }\n}\n\n[_nghost-%COMP%]     .p-scrollpanel .p-scrollpanel-content {\n  overflow-y: scroll;\n}\n.settings-container[_ngcontent-%COMP%] {\n  width: 320px;\n}\n\n.p-inputgroup.factory-preference[_ngcontent-%COMP%]   p-dropdown[_ngcontent-%COMP%], .p-inputgroup.factory-preference[_ngcontent-%COMP%]   p-multiselect[_ngcontent-%COMP%] {\n  flex-basis: 36px;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yaWVzXFxmb3hob2xlbGFiXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLDhEQUFBO0VBRUEsWUFaTTtFQWFOLFlBQUE7RUFFQSx3Q0FBQTtBQ1JGO0FDaUVJO0VGdEVKO0lBZ0JJLDJCQUFBO0VDUEY7RURTRTtJQUNFLHVCQUFBO0VDUEo7QUFDRjtBQzRDSTtFRmpDQTtJQUNFLDJCQUFBO0VDUko7QUFDRjtBRFlBLGtEQUFBO0FBRUU7RUFDRSxrQkFBQTtBQ1ZKO0FEY0E7RUFDRSxZQXhDTTtBQzZCUjtBRGNBLCtCQUFBO0FBRUU7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1pKIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cyc7XHJcblxyXG4kd2lkdGg6IDMyMHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogNDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XHJcblxyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLW92ZXJsYXkpO1xyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeGwpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlKTtcclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xyXG4gICAgJi5oaWRkZW4ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQXZvaWQgY2hhbmdpbmcgd2lkdGggdG8gYWNjb21vZGF0ZSBzY3JvbGxiYXIgKi9cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAucC1zY3JvbGxwYW5lbCAucC1zY3JvbGxwYW5lbC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbn1cclxuXHJcbi8qKiBGYWN0b3J5IElucHV0R3JvdXAgc3R5bGVzICovXHJcbi5wLWlucHV0Z3JvdXAuZmFjdG9yeS1wcmVmZXJlbmNlIHtcclxuICBwLWRyb3Bkb3duLFxyXG4gIHAtbXVsdGlzZWxlY3Qge1xyXG4gICAgZmxleC1iYXNpczogMzZweDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2Utb3ZlcmxheSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIDpob3N0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSk7XG4gIH1cbiAgOmhvc3QuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6aG9zdC5oaWRkZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlKTtcbiAgfVxufVxuXG4vKiogQXZvaWQgY2hhbmdpbmcgd2lkdGggdG8gYWNjb21vZGF0ZSBzY3JvbGxiYXIgKi9cbjpob3N0IDo6bmctZGVlcCAucC1zY3JvbGxwYW5lbCAucC1zY3JvbGxwYW5lbC1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDMyMHB4O1xufVxuXG4vKiogRmFjdG9yeSBJbnB1dEdyb3VwIHN0eWxlcyAqL1xuLnAtaW5wdXRncm91cC5mYWN0b3J5LXByZWZlcmVuY2UgcC1kcm9wZG93bixcbi5wLWlucHV0Z3JvdXAuZmFjdG9yeS1wcmVmZXJlbmNlIHAtbXVsdGlzZWxlY3Qge1xuICBmbGV4LWJhc2lzOiAzNnB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsIHh4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEBpZiBub3QgJG4ge1xuICAgIEBlcnJvciBcImJyZWFrcG9pbnQgYCN7JG5hbWV9YCBub3QgZm91bmQgaW4gYCN7JGJyZWFrcG9pbnRzfWBcIjtcbiAgfVxuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiAgYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6ICBicmVha3BvaW50LW1heCgkbmV4dCwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5leHQsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 2897:
/*!*******************************************************!*\
  !*** ./src/app/directives/dropdown-base.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownBaseDirective": () => (/* binding */ DropdownBaseDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ 8992);


class DropdownBaseDirective {
    constructor(pDropdown) {
        this.pDropdown = pDropdown;
    }
    ngOnInit() {
        this.pDropdown.appendTo = 'body';
        this.pDropdown.filter = true;
        this.pDropdown.scrollHeight = '40vh';
        this.pDropdown.panelStyleClass = 'tooltip';
        if (this.labDropdownBase) {
            this.pDropdown.styleClass = this.labDropdownBase;
        }
    }
}
DropdownBaseDirective.ɵfac = function DropdownBaseDirective_Factory(t) { return new (t || DropdownBaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__.Dropdown, 2)); };
DropdownBaseDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownBaseDirective, selectors: [["", "labDropdownBase", ""]], inputs: { labDropdownBase: "labDropdownBase" } });


/***/ }),

/***/ 3989:
/*!************************************************************!*\
  !*** ./src/app/directives/dropdown-translate.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownTranslateDirective": () => (/* binding */ DropdownTranslateDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);





class DropdownTranslateDirective {
    constructor(pDropdown, contentSvc) {
        this.pDropdown = pDropdown;
        this.contentSvc = contentSvc;
    }
    ngOnInit() {
        this.pDropdown.appendTo = 'body';
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([
            this.contentSvc.translateSelectedItem$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((t) => t != null)),
            this.contentSvc.translateItem$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((t) => t != null)),
        ])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.first)())
            .subscribe(([selectedItemTemplate, itemTemplate]) => {
            this.pDropdown.selectedItemTemplate = selectedItemTemplate;
            this.pDropdown.itemTemplate = itemTemplate;
        });
    }
}
DropdownTranslateDirective.ɵfac = function DropdownTranslateDirective_Factory(t) { return new (t || DropdownTranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.Dropdown, 2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ContentService)); };
DropdownTranslateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: DropdownTranslateDirective, selectors: [["", "labDropdownTranslate", ""]] });


/***/ }),

/***/ 9148:
/*!*********************************************************!*\
  !*** ./src/app/directives/validate-number.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateNumberDirective": () => (/* binding */ ValidateNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ValidateNumberDirective {
    constructor() {
        this.minimum = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
    }
    set labValidateMinimum(value) {
        this.minimum = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(value);
    }
    validate(control) {
        if (control.value == null) {
            return null;
        }
        try {
            const rational = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(control.value);
            if (rational.gte(this.minimum)) {
                return null;
            }
        }
        catch { }
        return {
            validateNumber: {
                valid: false,
            },
        };
    }
}
ValidateNumberDirective.ɵfac = function ValidateNumberDirective_Factory(t) { return new (t || ValidateNumberDirective)(); };
ValidateNumberDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ValidateNumberDirective, selectors: [["", "labValidateNumber", "", "ngModel", ""]], inputs: { labValidateMinimum: "labValidateMinimum" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
                useExisting: ValidateNumberDirective,
                multi: true,
            },
        ])] });


/***/ }),

/***/ 2067:
/*!************************************!*\
  !*** ./src/app/models/app-data.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7432:
/*!*************************************!*\
  !*** ./src/app/models/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP": () => (/* binding */ APP),
/* harmony export */   "DEFAULT_PRECISION": () => (/* binding */ DEFAULT_PRECISION),
/* harmony export */   "STATE_KEY": () => (/* binding */ STATE_KEY),
/* harmony export */   "WARNING_HANG": () => (/* binding */ WARNING_HANG)
/* harmony export */ });
const DEFAULT_PRECISION = 1;
const STATE_KEY = 'state';
const APP = 'FactorioLab';
const WARNING_HANG = `No solution found in 5 seconds. Continue trying to solve?
To avoid this issue, try the WASM Float64 simplex solver, or disable recycling recipes.
\u26a0 Warning: The browser may hang if you choose to continue.

(Click "OK" to keep trying, click "Cancel" to quit)`;


/***/ }),

/***/ 6631:
/*!***************************************!*\
  !*** ./src/app/models/data/beacon.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalBeacon": () => (/* binding */ RationalBeacon)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalBeacon {
    constructor(data) {
        this.effectivity = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.effectivity);
        this.modules = data.modules;
        this.range = data.range;
        if (data.type) {
            this.type = data.type;
        }
        if (data.category) {
            this.category = data.category;
        }
        if (data.usage != null) {
            this.usage = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.usage);
        }
    }
}


/***/ }),

/***/ 4388:
/*!*************************************!*\
  !*** ./src/app/models/data/belt.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalBelt": () => (/* binding */ RationalBelt)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalBelt {
    constructor(data) {
        this.speed = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromJson(data.speed);
    }
}


/***/ }),

/***/ 4035:
/*!********************************************!*\
  !*** ./src/app/models/data/cargo-wagon.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalCargoWagon": () => (/* binding */ RationalCargoWagon)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalCargoWagon {
    constructor(data) {
        this.size = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.size);
    }
}


/***/ }),

/***/ 1283:
/*!*****************************************!*\
  !*** ./src/app/models/data/category.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7453:
/*!****************************************!*\
  !*** ./src/app/models/data/factory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalFactory": () => (/* binding */ RationalFactory)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);
/* harmony import */ var _silo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./silo */ 7622);


class RationalFactory {
    constructor(data) {
        if (data.speed != null) {
            this.speed = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.speed);
        }
        if (data.modules != null) {
            this.modules = Math.round(data.modules);
        }
        if (data.type) {
            this.type = data.type;
        }
        if (data.category) {
            this.category = data.category;
        }
        if (data.usage != null) {
            this.usage = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.usage);
        }
        if (data.drain != null) {
            if (typeof data.drain === 'string') {
                this.drain = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(data.drain);
            }
            else {
                this.drain = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.drain);
            }
        }
        if (data.pollution != null) {
            this.pollution = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.pollution);
        }
        if (data.mining) {
            this.mining = data.mining;
        }
        if (data.research) {
            this.research = data.research;
        }
        if (data.silo) {
            this.silo = new _silo__WEBPACK_IMPORTED_MODULE_1__.RationalSilo(data.silo);
        }
        if (data.overclockFactor) {
            this.overclockFactor = data.overclockFactor;
        }
        if (data.consumption) {
            const consumption = data.consumption;
            this.consumption = Object.keys(consumption).reduce((e, i) => {
                e[i] = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromJson(consumption[i]);
                return e;
            }, {});
        }
    }
}


/***/ }),

/***/ 5463:
/*!********************************************!*\
  !*** ./src/app/models/data/fluid-wagon.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalFluidWagon": () => (/* binding */ RationalFluidWagon)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalFluidWagon {
    constructor(data) {
        this.capacity = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.capacity);
    }
}


/***/ }),

/***/ 1506:
/*!*************************************!*\
  !*** ./src/app/models/data/fuel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalFuel": () => (/* binding */ RationalFuel)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalFuel {
    constructor(data) {
        this.category = data.category;
        this.value = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.value);
        if (data.result) {
            this.result = data.result;
        }
    }
}


/***/ }),

/***/ 4147:
/*!*************************************!*\
  !*** ./src/app/models/data/icon.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2842:
/*!**************************************!*\
  !*** ./src/app/models/data/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalBeacon": () => (/* reexport safe */ _beacon__WEBPACK_IMPORTED_MODULE_0__.RationalBeacon),
/* harmony export */   "RationalBelt": () => (/* reexport safe */ _belt__WEBPACK_IMPORTED_MODULE_1__.RationalBelt),
/* harmony export */   "RationalCargoWagon": () => (/* reexport safe */ _cargo_wagon__WEBPACK_IMPORTED_MODULE_2__.RationalCargoWagon),
/* harmony export */   "RationalFactory": () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.RationalFactory),
/* harmony export */   "RationalFluidWagon": () => (/* reexport safe */ _fluid_wagon__WEBPACK_IMPORTED_MODULE_6__.RationalFluidWagon),
/* harmony export */   "RationalFuel": () => (/* reexport safe */ _fuel__WEBPACK_IMPORTED_MODULE_7__.RationalFuel),
/* harmony export */   "RationalItem": () => (/* reexport safe */ _item__WEBPACK_IMPORTED_MODULE_9__.RationalItem),
/* harmony export */   "RationalModule": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_14__.RationalModule),
/* harmony export */   "RationalRecipe": () => (/* reexport safe */ _recipe__WEBPACK_IMPORTED_MODULE_15__.RationalRecipe)
/* harmony export */ });
/* harmony import */ var _beacon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beacon */ 6631);
/* harmony import */ var _belt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belt */ 4388);
/* harmony import */ var _cargo_wagon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cargo-wagon */ 4035);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ 1283);
/* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataset */ 1789);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ 7453);
/* harmony import */ var _fluid_wagon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fluid-wagon */ 5463);
/* harmony import */ var _fuel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fuel */ 1506);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon */ 4147);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item */ 2691);
/* harmony import */ var _mod_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mod-data */ 8809);
/* harmony import */ var _mod_defaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mod-defaults */ 2071);
/* harmony import */ var _mod_hash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mod-hash */ 2000);
/* harmony import */ var _mod_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mod-i18n */ 3666);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./module */ 8740);
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipe */ 3635);


















/***/ }),

/***/ 2691:
/*!*************************************!*\
  !*** ./src/app/models/data/item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalItem": () => (/* binding */ RationalItem)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);
/* harmony import */ var _beacon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beacon */ 6631);
/* harmony import */ var _belt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./belt */ 4388);
/* harmony import */ var _cargo_wagon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargo-wagon */ 4035);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory */ 7453);
/* harmony import */ var _fluid_wagon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fluid-wagon */ 5463);
/* harmony import */ var _fuel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fuel */ 1506);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module */ 8740);








class RationalItem {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.category = data.category;
        this.row = Math.round(data.row);
        if (data.stack) {
            this.stack = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.stack);
        }
        if (data.beacon) {
            this.beacon = new _beacon__WEBPACK_IMPORTED_MODULE_1__.RationalBeacon(data.beacon);
        }
        if (data.belt) {
            this.belt = new _belt__WEBPACK_IMPORTED_MODULE_2__.RationalBelt(data.belt);
        }
        if (data.pipe) {
            this.pipe = new _belt__WEBPACK_IMPORTED_MODULE_2__.RationalBelt(data.pipe);
        }
        if (data.factory) {
            this.factory = new _factory__WEBPACK_IMPORTED_MODULE_4__.RationalFactory(data.factory);
        }
        if (data.module) {
            this.module = new _module__WEBPACK_IMPORTED_MODULE_7__.RationalModule(data.module);
        }
        if (data.fuel) {
            this.fuel = new _fuel__WEBPACK_IMPORTED_MODULE_6__.RationalFuel(data.fuel);
        }
        if (data.cargoWagon) {
            this.cargoWagon = new _cargo_wagon__WEBPACK_IMPORTED_MODULE_3__.RationalCargoWagon(data.cargoWagon);
        }
        if (data.fluidWagon) {
            this.fluidWagon = new _fluid_wagon__WEBPACK_IMPORTED_MODULE_5__.RationalFluidWagon(data.fluidWagon);
        }
        if (data.icon) {
            this.icon = data.icon;
        }
        if (data.iconText) {
            this.iconText = data.iconText;
        }
    }
}


/***/ }),

/***/ 8809:
/*!*****************************************!*\
  !*** ./src/app/models/data/mod-data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2071:
/*!*********************************************!*\
  !*** ./src/app/models/data/mod-defaults.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2000:
/*!*****************************************!*\
  !*** ./src/app/models/data/mod-hash.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3666:
/*!*****************************************!*\
  !*** ./src/app/models/data/mod-i18n.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8740:
/*!***************************************!*\
  !*** ./src/app/models/data/module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalModule": () => (/* binding */ RationalModule)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalModule {
    constructor(data) {
        if (data.speed) {
            this.speed = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.speed);
        }
        if (data.productivity) {
            this.productivity = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.productivity);
        }
        if (data.consumption) {
            this.consumption = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.consumption);
        }
        if (data.pollution) {
            this.pollution = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.pollution);
        }
        if (data.limitation) {
            this.limitation = data.limitation;
        }
        if (data.sprays) {
            this.sprays = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.sprays);
        }
        if (data.proliferator) {
            this.proliferator = data.proliferator;
        }
    }
}


/***/ }),

/***/ 3635:
/*!***************************************!*\
  !*** ./src/app/models/data/recipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalRecipe": () => (/* binding */ RationalRecipe)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalRecipe {
    constructor(data) {
        this.productivity = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.one;
        this.adjustProd = false;
        this.id = data.id;
        this.name = data.name;
        this.time = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.time);
        this.producers = data.producers;
        this.in = Object.keys(data.in).reduce((e, i) => {
            e[i] = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromJson(data.in[i]);
            return e;
        }, {});
        this.out = Object.keys(data.out).reduce((e, i) => {
            e[i] = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromJson(data.out[i]);
            return e;
        }, {});
        if (data.catalyst) {
            const catalyst = data.catalyst; // Store null-checked value
            this.catalyst = Object.keys(catalyst).reduce((e, i) => {
                e[i] = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromJson(catalyst[i]);
                return e;
            }, {});
        }
        if (data.cost) {
            this.cost = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.cost);
        }
        if (data.part) {
            this.part = data.part;
        }
        if (data.usage != null) {
            if (typeof data.usage === 'string') {
                this.usage = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(data.usage);
            }
            else {
                this.usage = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.usage);
            }
        }
    }
    produces(id) {
        if (this.out[id]) {
            // Recipe declares this as output, check inputs
            return this.in[id] == null || this.in[id].lt(this.out[id]);
        }
        return false;
    }
    producesOnly(id) {
        return Object.keys(this.out).length === 1 && this.produces(id);
    }
    output(id) {
        return (this.out[id] ?? _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.zero).sub(this.in[id] ?? _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.zero);
    }
}


/***/ }),

/***/ 7622:
/*!*************************************!*\
  !*** ./src/app/models/data/silo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalSilo": () => (/* binding */ RationalSilo)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

const secs = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.from(60);
class RationalSilo {
    constructor(data) {
        this.parts = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.parts);
        this.launch = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.launch).div(secs);
    }
}


/***/ }),

/***/ 1789:
/*!***********************************!*\
  !*** ./src/app/models/dataset.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4658:
/*!************************************!*\
  !*** ./src/app/models/defaults.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9219:
/*!************************************!*\
  !*** ./src/app/models/entities.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toBoolEntities": () => (/* binding */ toBoolEntities),
/* harmony export */   "toEntities": () => (/* binding */ toEntities)
/* harmony export */ });
function toEntities(value, init = {}) {
    return value.reduce((e, v) => {
        e[v.id] = v;
        return e;
    }, init);
}
function toBoolEntities(value, init = {}) {
    return value.reduce((e, v) => {
        e[v] = true;
        return e;
    }, init);
}


/***/ }),

/***/ 5914:
/*!***************************************!*\
  !*** ./src/app/models/enum/column.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* binding */ Column),
/* harmony export */   "allColumns": () => (/* binding */ allColumns),
/* harmony export */   "columnOptions": () => (/* binding */ columnOptions),
/* harmony export */   "precisionColumns": () => (/* binding */ precisionColumns)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ 1775);

var Column;
(function (Column) {
    Column["Tree"] = "Tree";
    Column["Surplus"] = "Surplus";
    Column["Items"] = "Items";
    Column["Belts"] = "Belts";
    Column["Wagons"] = "Wagons";
    Column["Factories"] = "Factories";
    Column["Beacons"] = "Beacons";
    Column["Power"] = "Power";
    Column["Pollution"] = "Pollution";
    Column["Link"] = "Link";
})(Column || (Column = {}));
const allColumns = [
    Column.Tree,
    Column.Items,
    Column.Belts,
    Column.Wagons,
    Column.Factories,
    Column.Beacons,
    Column.Power,
    Column.Pollution,
    Column.Link,
];
const precisionColumns = [
    Column.Items,
    Column.Belts,
    Column.Wagons,
    Column.Factories,
    Column.Power,
    Column.Pollution,
];
function columnOptions(game) {
    const result = allColumns.map((id) => ({
        label: id,
        value: id,
        disabled: id === Column.Items || id === Column.Factories,
    }));
    switch (game) {
        case _game__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio:
            return result;
        case _game__WEBPACK_IMPORTED_MODULE_0__.Game.CaptainOfIndustry:
            return result.filter((i) => i.value !== Column.Beacons &&
                i.value !== Column.Power &&
                i.value !== Column.Pollution &&
                i.value !== Column.Wagons);
        case _game__WEBPACK_IMPORTED_MODULE_0__.Game.DysonSphereProgram:
            return result.filter((i) => i.value !== Column.Beacons &&
                i.value !== Column.Pollution &&
                i.value !== Column.Wagons);
        case _game__WEBPACK_IMPORTED_MODULE_0__.Game.Satisfactory:
            return result.filter((i) => i.value !== Column.Beacons && i.value !== Column.Pollution);
        case _game__WEBPACK_IMPORTED_MODULE_0__.Game.Foxhole:
            return result.filter((i) => i.value !== Column.Beacons && i.value !== Column.Pollution);
    }
    return [];
}


/***/ }),

/***/ 9810:
/*!*********************************************!*\
  !*** ./src/app/models/enum/display-rate.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayRate": () => (/* binding */ DisplayRate),
/* harmony export */   "displayRateInfo": () => (/* binding */ displayRateInfo),
/* harmony export */   "displayRateOptions": () => (/* binding */ displayRateOptions)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

var DisplayRate;
(function (DisplayRate) {
    DisplayRate[DisplayRate["PerSecond"] = 1] = "PerSecond";
    DisplayRate[DisplayRate["PerMinute"] = 60] = "PerMinute";
    DisplayRate[DisplayRate["PerHour"] = 3600] = "PerHour";
})(DisplayRate || (DisplayRate = {}));
const displayRateOptions = [
    { value: DisplayRate.PerSecond, label: 'options.displayRate.perSecond' },
    { value: DisplayRate.PerMinute, label: 'options.displayRate.perMinute' },
    { value: DisplayRate.PerHour, label: 'options.displayRate.perHour' },
];
const displayRateInfo = {
    [DisplayRate.PerSecond]: {
        option: DisplayRate.PerSecond,
        label: '/s',
        value: _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.from(DisplayRate.PerSecond),
    },
    [DisplayRate.PerMinute]: {
        option: DisplayRate.PerMinute,
        label: '/m',
        value: _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.from(DisplayRate.PerMinute),
    },
    [DisplayRate.PerHour]: {
        option: DisplayRate.PerHour,
        label: '/h',
        value: _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.from(DisplayRate.PerHour),
    },
};


/***/ }),

/***/ 4325:
/*!********************************************!*\
  !*** ./src/app/models/enum/energy-type.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnergyType": () => (/* binding */ EnergyType)
/* harmony export */ });
var EnergyType;
(function (EnergyType) {
    EnergyType["Electric"] = "electric";
    EnergyType["Burner"] = "burner";
})(EnergyType || (EnergyType = {}));


/***/ }),

/***/ 3965:
/*!******************************************!*\
  !*** ./src/app/models/enum/fuel-type.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuelType": () => (/* binding */ FuelType)
/* harmony export */ });
var FuelType;
(function (FuelType) {
    FuelType["Chemical"] = "chemical";
    FuelType["Nuclear"] = "nuclear";
})(FuelType || (FuelType = {}));


/***/ }),

/***/ 1775:
/*!*************************************!*\
  !*** ./src/app/models/enum/game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game),
/* harmony export */   "gameOptions": () => (/* binding */ gameOptions),
/* harmony export */   "games": () => (/* binding */ games)
/* harmony export */ });
var Game;
(function (Game) {
    Game["None"] = "None";
    Game["Factorio"] = "Factorio";
    Game["CaptainOfIndustry"] = "CaptainOfIndustry";
    Game["DysonSphereProgram"] = "DysonSphereProgram";
    Game["Satisfactory"] = "Satisfactory";
    Game["Foxhole"] = "Foxhole";
})(Game || (Game = {}));
const games = [
    Game.Factorio,
    Game.DysonSphereProgram,
    Game.Satisfactory,
    Game.Foxhole,
    Game.CaptainOfIndustry,
];
const gameOptions = [
    { value: Game.Factorio, label: 'options.game.factorio' },
    { value: Game.DysonSphereProgram, label: 'options.game.dysonSphereProgram' },
    { value: Game.Satisfactory, label: 'options.game.satisfactory' },
    { value: Game.Foxhole, label: 'options.game.foxhole' },
    { value: Game.CaptainOfIndustry, label: 'options.game.captainOfIndustry' },
];


/***/ }),

/***/ 9161:
/*!****************************************!*\
  !*** ./src/app/models/enum/id-type.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7499:
/*!**************************************!*\
  !*** ./src/app/models/enum/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* reexport safe */ _column__WEBPACK_IMPORTED_MODULE_0__.Column),
/* harmony export */   "DisplayRate": () => (/* reexport safe */ _display_rate__WEBPACK_IMPORTED_MODULE_1__.DisplayRate),
/* harmony export */   "EnergyType": () => (/* reexport safe */ _energy_type__WEBPACK_IMPORTED_MODULE_2__.EnergyType),
/* harmony export */   "FuelType": () => (/* reexport safe */ _fuel_type__WEBPACK_IMPORTED_MODULE_3__.FuelType),
/* harmony export */   "Game": () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_4__.Game),
/* harmony export */   "InserterCapacity": () => (/* reexport safe */ _inserter_capacity__WEBPACK_IMPORTED_MODULE_6__.InserterCapacity),
/* harmony export */   "InserterTarget": () => (/* reexport safe */ _inserter_target__WEBPACK_IMPORTED_MODULE_7__.InserterTarget),
/* harmony export */   "ItemId": () => (/* reexport safe */ _item_id__WEBPACK_IMPORTED_MODULE_8__.ItemId),
/* harmony export */   "Language": () => (/* reexport safe */ _language__WEBPACK_IMPORTED_MODULE_9__.Language),
/* harmony export */   "MatrixResultType": () => (/* reexport safe */ _matrix_result_type__WEBPACK_IMPORTED_MODULE_10__.MatrixResultType),
/* harmony export */   "PowerUnit": () => (/* reexport safe */ _power_unit__WEBPACK_IMPORTED_MODULE_11__.PowerUnit),
/* harmony export */   "Preset": () => (/* reexport safe */ _preset__WEBPACK_IMPORTED_MODULE_12__.Preset),
/* harmony export */   "RateType": () => (/* reexport safe */ _rate_type__WEBPACK_IMPORTED_MODULE_13__.RateType),
/* harmony export */   "RecipeField": () => (/* reexport safe */ _recipe_field__WEBPACK_IMPORTED_MODULE_14__.RecipeField),
/* harmony export */   "ResearchSpeed": () => (/* reexport safe */ _research_speed__WEBPACK_IMPORTED_MODULE_15__.ResearchSpeed),
/* harmony export */   "SimplexType": () => (/* reexport safe */ _simplex_type__WEBPACK_IMPORTED_MODULE_16__.SimplexType),
/* harmony export */   "StepDetailTab": () => (/* reexport safe */ _step_detail_tab__WEBPACK_IMPORTED_MODULE_17__.StepDetailTab),
/* harmony export */   "Theme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_18__.Theme),
/* harmony export */   "allColumns": () => (/* reexport safe */ _column__WEBPACK_IMPORTED_MODULE_0__.allColumns),
/* harmony export */   "columnOptions": () => (/* reexport safe */ _column__WEBPACK_IMPORTED_MODULE_0__.columnOptions),
/* harmony export */   "displayRateInfo": () => (/* reexport safe */ _display_rate__WEBPACK_IMPORTED_MODULE_1__.displayRateInfo),
/* harmony export */   "displayRateOptions": () => (/* reexport safe */ _display_rate__WEBPACK_IMPORTED_MODULE_1__.displayRateOptions),
/* harmony export */   "gameOptions": () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_4__.gameOptions),
/* harmony export */   "games": () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_4__.games),
/* harmony export */   "inserterCapacityOptions": () => (/* reexport safe */ _inserter_capacity__WEBPACK_IMPORTED_MODULE_6__.inserterCapacityOptions),
/* harmony export */   "inserterTargetOptions": () => (/* reexport safe */ _inserter_target__WEBPACK_IMPORTED_MODULE_7__.inserterTargetOptions),
/* harmony export */   "languageOptions": () => (/* reexport safe */ _language__WEBPACK_IMPORTED_MODULE_9__.languageOptions),
/* harmony export */   "powerUnitOptions": () => (/* reexport safe */ _power_unit__WEBPACK_IMPORTED_MODULE_11__.powerUnitOptions),
/* harmony export */   "precisionColumns": () => (/* reexport safe */ _column__WEBPACK_IMPORTED_MODULE_0__.precisionColumns),
/* harmony export */   "presetOptions": () => (/* reexport safe */ _preset__WEBPACK_IMPORTED_MODULE_12__.presetOptions),
/* harmony export */   "rateTypeOptions": () => (/* reexport safe */ _rate_type__WEBPACK_IMPORTED_MODULE_13__.rateTypeOptions),
/* harmony export */   "researchSpeedFactor": () => (/* reexport safe */ _research_speed__WEBPACK_IMPORTED_MODULE_15__.researchSpeedFactor),
/* harmony export */   "researchSpeedOptions": () => (/* reexport safe */ _research_speed__WEBPACK_IMPORTED_MODULE_15__.researchSpeedOptions),
/* harmony export */   "researchSpeedVal": () => (/* reexport safe */ _research_speed__WEBPACK_IMPORTED_MODULE_15__.researchSpeedVal),
/* harmony export */   "simplexTypeOptions": () => (/* reexport safe */ _simplex_type__WEBPACK_IMPORTED_MODULE_16__.simplexTypeOptions),
/* harmony export */   "themeOptions": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_18__.themeOptions)
/* harmony export */ });
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ 5914);
/* harmony import */ var _display_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-rate */ 9810);
/* harmony import */ var _energy_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy-type */ 4325);
/* harmony import */ var _fuel_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-type */ 3965);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ 1775);
/* harmony import */ var _id_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./id-type */ 9161);
/* harmony import */ var _inserter_capacity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserter-capacity */ 5203);
/* harmony import */ var _inserter_target__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inserter-target */ 7445);
/* harmony import */ var _item_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-id */ 7121);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./language */ 7527);
/* harmony import */ var _matrix_result_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matrix-result-type */ 3521);
/* harmony import */ var _power_unit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./power-unit */ 4963);
/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./preset */ 6954);
/* harmony import */ var _rate_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rate-type */ 2776);
/* harmony import */ var _recipe_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipe-field */ 7215);
/* harmony import */ var _research_speed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./research-speed */ 3922);
/* harmony import */ var _simplex_type__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./simplex-type */ 163);
/* harmony import */ var _step_detail_tab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./step-detail-tab */ 28);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme */ 6606);





















/***/ }),

/***/ 5203:
/*!**************************************************!*\
  !*** ./src/app/models/enum/inserter-capacity.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InserterCapacity": () => (/* binding */ InserterCapacity),
/* harmony export */   "inserterCapacityOptions": () => (/* binding */ inserterCapacityOptions)
/* harmony export */ });
var InserterCapacity;
(function (InserterCapacity) {
    InserterCapacity[InserterCapacity["Capacity0"] = 0] = "Capacity0";
    InserterCapacity[InserterCapacity["Capacity2"] = 1] = "Capacity2";
    InserterCapacity[InserterCapacity["Capacity7"] = 2] = "Capacity7";
})(InserterCapacity || (InserterCapacity = {}));
const inserterCapacityOptions = [
    {
        label: 'options.inserterCapacity.capacity0',
        value: InserterCapacity.Capacity0,
    },
    {
        label: 'options.inserterCapacity.capacity2',
        value: InserterCapacity.Capacity2,
    },
    {
        label: 'options.inserterCapacity.capacity7',
        value: InserterCapacity.Capacity7,
    },
];


/***/ }),

/***/ 7445:
/*!************************************************!*\
  !*** ./src/app/models/enum/inserter-target.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InserterTarget": () => (/* binding */ InserterTarget),
/* harmony export */   "inserterTargetOptions": () => (/* binding */ inserterTargetOptions)
/* harmony export */ });
var InserterTarget;
(function (InserterTarget) {
    InserterTarget[InserterTarget["Chest"] = 0] = "Chest";
    InserterTarget[InserterTarget["ExpressTransportBelt"] = 1] = "ExpressTransportBelt";
    InserterTarget[InserterTarget["FastTransportBelt"] = 2] = "FastTransportBelt";
    InserterTarget[InserterTarget["TransportBelt"] = 3] = "TransportBelt";
})(InserterTarget || (InserterTarget = {}));
const inserterTargetOptions = [
    { label: 'options.inserterTarget.chest', value: InserterTarget.Chest },
    {
        label: 'options.inserterTarget.expressTransportBelt',
        value: InserterTarget.ExpressTransportBelt,
    },
    {
        label: 'options.inserterTarget.fastTransportBelt',
        value: InserterTarget.FastTransportBelt,
    },
    {
        label: 'options.inserterTarget.transportBelt',
        value: InserterTarget.TransportBelt,
    },
];


/***/ }),

/***/ 7121:
/*!****************************************!*\
  !*** ./src/app/models/enum/item-id.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemId": () => (/* binding */ ItemId)
/* harmony export */ });
var ItemId;
(function (ItemId) {
    ItemId["FastInserter"] = "fast-inserter";
    ItemId["Inserter"] = "inserter";
    ItemId["LongHandedInserter"] = "long-handed-inserter";
    ItemId["MineControlTower"] = "mine-control-tower";
    ItemId["MiningDrill"] = "mining-drill";
    ItemId["Module"] = "module";
    ItemId["NuclearPowerPlant"] = "nuclear-power-plant";
    ItemId["Pipe"] = "pipe";
    ItemId["ProductivityLimitation"] = "productivity-module";
    ItemId["Pumpjack"] = "pumpjack";
    ItemId["StackInserter"] = "stack-inserter";
    ItemId["Water"] = "water";
})(ItemId || (ItemId = {}));


/***/ }),

/***/ 7527:
/*!*****************************************!*\
  !*** ./src/app/models/enum/language.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Language": () => (/* binding */ Language),
/* harmony export */   "languageOptions": () => (/* binding */ languageOptions)
/* harmony export */ });
var Language;
(function (Language) {
    Language["English"] = "en";
    Language["Chinese"] = "zh";
})(Language || (Language = {}));
const languageOptions = [
    { label: 'English', value: Language.English },
    { label: '简体中文 - Outdated', value: Language.Chinese },
];


/***/ }),

/***/ 3521:
/*!***************************************************!*\
  !*** ./src/app/models/enum/matrix-result-type.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixResultType": () => (/* binding */ MatrixResultType)
/* harmony export */ });
var MatrixResultType;
(function (MatrixResultType) {
    MatrixResultType["Skipped"] = "Skipped";
    MatrixResultType["Cached"] = "Cached";
    MatrixResultType["Cancelled"] = "Cancelled";
    MatrixResultType["Failed"] = "Failed";
    MatrixResultType["Solved"] = "Solved";
})(MatrixResultType || (MatrixResultType = {}));


/***/ }),

/***/ 4963:
/*!*******************************************!*\
  !*** ./src/app/models/enum/power-unit.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerUnit": () => (/* binding */ PowerUnit),
/* harmony export */   "powerUnitOptions": () => (/* binding */ powerUnitOptions)
/* harmony export */ });
var PowerUnit;
(function (PowerUnit) {
    PowerUnit[PowerUnit["Auto"] = 0] = "Auto";
    PowerUnit[PowerUnit["kW"] = 1] = "kW";
    PowerUnit[PowerUnit["MW"] = 2] = "MW";
    PowerUnit[PowerUnit["GW"] = 3] = "GW";
})(PowerUnit || (PowerUnit = {}));
const powerUnitOptions = [
    { label: 'Auto', value: PowerUnit.Auto },
    { label: 'kW', value: PowerUnit.kW },
    { label: 'MW', value: PowerUnit.MW },
    { label: 'GW', value: PowerUnit.GW },
];


/***/ }),

/***/ 6954:
/*!***************************************!*\
  !*** ./src/app/models/enum/preset.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preset": () => (/* binding */ Preset),
/* harmony export */   "presetOptions": () => (/* binding */ presetOptions)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ 1775);

var Preset;
(function (Preset) {
    Preset[Preset["Minimum"] = 0] = "Minimum";
    Preset[Preset["Modules"] = 1] = "Modules";
    Preset[Preset["Beacon8"] = 2] = "Beacon8";
    Preset[Preset["Beacon12"] = 3] = "Beacon12";
})(Preset || (Preset = {}));
function presetOptions(game) {
    return game === _game__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio
        ? [
            { value: Preset.Minimum, label: 'options.preset.minimum' },
            { value: Preset.Modules, label: 'options.preset.modules' },
            { value: Preset.Beacon8, label: 'options.preset.beacon8' },
            { value: Preset.Beacon12, label: 'options.preset.beacon12' },
        ]
        : game === _game__WEBPACK_IMPORTED_MODULE_0__.Game.CaptainOfIndustry
            ? [
                { value: Preset.Minimum, label: 'options.preset.minimum' },
                { value: Preset.Modules, label: 'options.preset.upgraded' },
            ]
            : [
                { value: Preset.Minimum, label: 'options.preset.minimum' },
                { value: Preset.Modules, label: 'options.preset.upgraded' },
                { value: Preset.Beacon8, label: 'options.preset.proliferated' },
            ];
}


/***/ }),

/***/ 2776:
/*!******************************************!*\
  !*** ./src/app/models/enum/rate-type.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateType": () => (/* binding */ RateType),
/* harmony export */   "rateTypeOptions": () => (/* binding */ rateTypeOptions)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ 1775);

var RateType;
(function (RateType) {
    RateType[RateType["Items"] = 0] = "Items";
    RateType[RateType["Belts"] = 1] = "Belts";
    RateType[RateType["Wagons"] = 2] = "Wagons";
    RateType[RateType["Factories"] = 3] = "Factories";
})(RateType || (RateType = {}));
function rateTypeOptions(dispRateInfo, game) {
    const result = [
        { value: RateType.Items, label: `Items${dispRateInfo.label}` },
        { value: RateType.Belts, label: 'Belts' },
        { value: RateType.Wagons, label: `Wagons${dispRateInfo.label}` },
        { value: RateType.Factories, label: 'Factories' },
    ];
    if (game === _game__WEBPACK_IMPORTED_MODULE_0__.Game.DysonSphereProgram || game === _game__WEBPACK_IMPORTED_MODULE_0__.Game.CaptainOfIndustry) {
        return result.filter((i) => i.value !== RateType.Wagons);
    }
    return result;
}


/***/ }),

/***/ 7215:
/*!*********************************************!*\
  !*** ./src/app/models/enum/recipe-field.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeField": () => (/* binding */ RecipeField)
/* harmony export */ });
var RecipeField;
(function (RecipeField) {
    RecipeField[RecipeField["FactoryModules"] = 0] = "FactoryModules";
    RecipeField[RecipeField["BeaconCount"] = 1] = "BeaconCount";
    RecipeField[RecipeField["Beacon"] = 2] = "Beacon";
    RecipeField[RecipeField["BeaconModules"] = 3] = "BeaconModules";
    RecipeField[RecipeField["Overclock"] = 4] = "Overclock";
})(RecipeField || (RecipeField = {}));


/***/ }),

/***/ 3922:
/*!***********************************************!*\
  !*** ./src/app/models/enum/research-speed.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearchSpeed": () => (/* binding */ ResearchSpeed),
/* harmony export */   "researchSpeedFactor": () => (/* binding */ researchSpeedFactor),
/* harmony export */   "researchSpeedOptions": () => (/* binding */ researchSpeedOptions),
/* harmony export */   "researchSpeedVal": () => (/* binding */ researchSpeedVal)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

var ResearchSpeed;
(function (ResearchSpeed) {
    ResearchSpeed[ResearchSpeed["Speed0"] = 0] = "Speed0";
    ResearchSpeed[ResearchSpeed["Speed1"] = 20] = "Speed1";
    ResearchSpeed[ResearchSpeed["Speed2"] = 50] = "Speed2";
    ResearchSpeed[ResearchSpeed["Speed3"] = 90] = "Speed3";
    ResearchSpeed[ResearchSpeed["Speed4"] = 140] = "Speed4";
    ResearchSpeed[ResearchSpeed["Speed5"] = 190] = "Speed5";
    ResearchSpeed[ResearchSpeed["Speed6"] = 250] = "Speed6";
})(ResearchSpeed || (ResearchSpeed = {}));
const researchSpeedOptions = [
    { label: 'options.researchSpeed.speed0', value: ResearchSpeed.Speed0 },
    { label: 'options.researchSpeed.speed1', value: ResearchSpeed.Speed1 },
    { label: 'options.researchSpeed.speed2', value: ResearchSpeed.Speed2 },
    { label: 'options.researchSpeed.speed3', value: ResearchSpeed.Speed3 },
    { label: 'options.researchSpeed.speed4', value: ResearchSpeed.Speed4 },
    { label: 'options.researchSpeed.speed5', value: ResearchSpeed.Speed5 },
    { label: 'options.researchSpeed.speed6', value: ResearchSpeed.Speed6 },
];
const researchSpeedVal = {
    [ResearchSpeed.Speed0]: new _rational__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(ResearchSpeed.Speed0)),
    [ResearchSpeed.Speed1]: new _rational__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(ResearchSpeed.Speed1)),
    [ResearchSpeed.Speed2]: new _rational__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(ResearchSpeed.Speed2)),
    [ResearchSpeed.Speed3]: new _rational__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(ResearchSpeed.Speed3)),
    [ResearchSpeed.Speed4]: new _rational__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(ResearchSpeed.Speed4)),
    [ResearchSpeed.Speed5]: new _rational__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(ResearchSpeed.Speed5)),
    [ResearchSpeed.Speed6]: new _rational__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(ResearchSpeed.Speed6)),
};
const researchSpeedFactor = {
    [ResearchSpeed.Speed0]: researchSpeedVal[ResearchSpeed.Speed0]
        .add(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)
        .div(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred),
    [ResearchSpeed.Speed1]: researchSpeedVal[ResearchSpeed.Speed1]
        .add(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)
        .div(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred),
    [ResearchSpeed.Speed2]: researchSpeedVal[ResearchSpeed.Speed2]
        .add(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)
        .div(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred),
    [ResearchSpeed.Speed3]: researchSpeedVal[ResearchSpeed.Speed3]
        .add(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)
        .div(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred),
    [ResearchSpeed.Speed4]: researchSpeedVal[ResearchSpeed.Speed4]
        .add(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)
        .div(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred),
    [ResearchSpeed.Speed5]: researchSpeedVal[ResearchSpeed.Speed5]
        .add(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)
        .div(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred),
    [ResearchSpeed.Speed6]: researchSpeedVal[ResearchSpeed.Speed6]
        .add(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)
        .div(_rational__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred),
};


/***/ }),

/***/ 163:
/*!*********************************************!*\
  !*** ./src/app/models/enum/simplex-type.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplexType": () => (/* binding */ SimplexType),
/* harmony export */   "simplexTypeOptions": () => (/* binding */ simplexTypeOptions)
/* harmony export */ });
var SimplexType;
(function (SimplexType) {
    SimplexType[SimplexType["Disabled"] = 0] = "Disabled";
    SimplexType[SimplexType["JsBigIntRational"] = 1] = "JsBigIntRational";
    SimplexType[SimplexType["WasmFloat64"] = 2] = "WasmFloat64";
})(SimplexType || (SimplexType = {}));
const simplexTypeOptions = [
    {
        label: 'options.simplexType.jsBigIntRational',
        value: SimplexType.JsBigIntRational,
    },
    { label: 'options.simplexType.wasmFloat64', value: SimplexType.WasmFloat64 },
    { label: 'options.simplexType.disabled', value: SimplexType.Disabled },
];


/***/ }),

/***/ 28:
/*!************************************************!*\
  !*** ./src/app/models/enum/step-detail-tab.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepDetailTab": () => (/* binding */ StepDetailTab)
/* harmony export */ });
var StepDetailTab;
(function (StepDetailTab) {
    StepDetailTab["None"] = "none";
    StepDetailTab["Item"] = "item";
    StepDetailTab["Recipe"] = "recipe";
    StepDetailTab["Factory"] = "factory";
    StepDetailTab["Recipes"] = "recipes";
})(StepDetailTab || (StepDetailTab = {}));


/***/ }),

/***/ 6606:
/*!**************************************!*\
  !*** ./src/app/models/enum/theme.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Theme": () => (/* binding */ Theme),
/* harmony export */   "themeOptions": () => (/* binding */ themeOptions)
/* harmony export */ });
var Theme;
(function (Theme) {
    Theme[Theme["System"] = 0] = "System";
    Theme[Theme["Light"] = 1] = "Light";
    Theme[Theme["Dark"] = 2] = "Dark";
})(Theme || (Theme = {}));
const themeOptions = [
    { label: 'options.theme.system', value: Theme.System },
    { label: 'options.theme.light', value: Theme.Light },
    { label: 'options.theme.dark', value: Theme.Dark },
];


/***/ }),

/***/ 326:
/*!********************************!*\
  !*** ./src/app/models/flow.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeType": () => (/* binding */ NodeType),
/* harmony export */   "themeMap": () => (/* binding */ themeMap)
/* harmony export */ });
/* harmony import */ var _enum_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum/theme */ 6606);

var NodeType;
(function (NodeType) {
    NodeType["Input"] = "input";
    NodeType["Recipe"] = "recipe";
    NodeType["Surplus"] = "surplus";
    NodeType["Output"] = "output";
})(NodeType || (NodeType = {}));
const darkTheme = {
    node: {
        [NodeType.Input]: { color: '#044868', background: '#B3E5FC' },
        [NodeType.Recipe]: { color: '#212529', background: '#ffbe4d' },
        [NodeType.Surplus]: { color: '#73000c', background: '#FFCDD2' },
        [NodeType.Output]: { color: '#224a23', background: '#C8E6C9' },
    },
    edge: 'rgba(255, 255, 255, 0.87)',
};
const lightTheme = {
    node: {
        [NodeType.Input]: { color: '#044868', background: '#B3E5FC' },
        [NodeType.Recipe]: { color: '#FFFFFF', background: '#BD7800' },
        [NodeType.Surplus]: { color: '#73000c', background: '#FFCDD2' },
        [NodeType.Output]: { color: '#224a23', background: '#C8E6C9' },
    },
    edge: '#495057',
};
const themeMap = {
    [_enum_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.Light]: lightTheme,
    [_enum_theme__WEBPACK_IMPORTED_MODULE_0__.Theme.Dark]: darkTheme,
};


/***/ }),

/***/ 1437:
/*!*************************************!*\
  !*** ./src/app/models/game-info.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameInfo": () => (/* binding */ gameInfo)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ 7499);

const gameInfo = {
    [_enum__WEBPACK_IMPORTED_MODULE_0__.Game.None]: {
        icon: 'factorio',
        route: 'factorio',
        title: 'title.lab',
        label: 'options.game.factorio',
        meta: 'FactorioLab',
        modId: '1.1',
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio]: {
        icon: 'factorio',
        route: 'factorio',
        title: 'title.lab',
        label: 'options.game.factorio',
        meta: 'Factorio',
        modId: '1.1',
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.Game.DysonSphereProgram]: {
        icon: 'dyson-sphere-program',
        route: 'dsp',
        title: 'title.dsp',
        label: 'options.game.dysonSphereProgram',
        meta: 'Dyson Sphere Program',
        modId: 'dsp',
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.Game.Satisfactory]: {
        icon: 'satisfactory',
        route: 'satisfactory',
        title: 'title.sfy',
        label: 'options.game.satisfactory',
        meta: 'Satisfactory',
        modId: 'sfy',
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.Game.Foxhole]: {
        icon: 'satisfactory',
        route: 'foxhole',
        title: 'title.fox',
        label: 'options.game.foxhole',
        meta: 'Foxhole',
        modId: 'fox',
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.Game.CaptainOfIndustry]: {
        icon: 'captain-of-industry',
        route: 'coi',
        title: 'title.coi',
        label: 'options.game.captainOfIndustry',
        meta: 'Captain of Industry',
        modId: 'coi',
    },
};


/***/ }),

/***/ 9304:
/*!***********************************!*\
  !*** ./src/app/models/id-name.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2139:
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.APP),
/* harmony export */   "Column": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.Column),
/* harmony export */   "DEFAULT_PRECISION": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_PRECISION),
/* harmony export */   "DisplayRate": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.DisplayRate),
/* harmony export */   "EnergyType": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.EnergyType),
/* harmony export */   "FuelType": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.FuelType),
/* harmony export */   "Game": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.Game),
/* harmony export */   "InserterCapacity": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.InserterCapacity),
/* harmony export */   "InserterData": () => (/* reexport safe */ _inserter_data__WEBPACK_IMPORTED_MODULE_10__.InserterData),
/* harmony export */   "InserterTarget": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.InserterTarget),
/* harmony export */   "ItemId": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.ItemId),
/* harmony export */   "Language": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.Language),
/* harmony export */   "MatrixResultType": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.MatrixResultType),
/* harmony export */   "NodeType": () => (/* reexport safe */ _flow__WEBPACK_IMPORTED_MODULE_17__.NodeType),
/* harmony export */   "PowerUnit": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.PowerUnit),
/* harmony export */   "Preset": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.Preset),
/* harmony export */   "RateType": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.RateType),
/* harmony export */   "Rational": () => (/* reexport safe */ _rational__WEBPACK_IMPORTED_MODULE_16__.Rational),
/* harmony export */   "RationalBeacon": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalBeacon),
/* harmony export */   "RationalBelt": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalBelt),
/* harmony export */   "RationalCargoWagon": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalCargoWagon),
/* harmony export */   "RationalFactory": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalFactory),
/* harmony export */   "RationalFluidWagon": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalFluidWagon),
/* harmony export */   "RationalFuel": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalFuel),
/* harmony export */   "RationalItem": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalItem),
/* harmony export */   "RationalModule": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalModule),
/* harmony export */   "RationalProduct": () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_15__.RationalProduct),
/* harmony export */   "RationalRecipe": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_0__.RationalRecipe),
/* harmony export */   "RationalRecipeSettings": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_2__.RationalRecipeSettings),
/* harmony export */   "RecipeField": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.RecipeField),
/* harmony export */   "ResearchSpeed": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.ResearchSpeed),
/* harmony export */   "STATE_KEY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.STATE_KEY),
/* harmony export */   "SimplexType": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.SimplexType),
/* harmony export */   "StepDetailTab": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.StepDetailTab),
/* harmony export */   "Theme": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.Theme),
/* harmony export */   "WARNING_HANG": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.WARNING_HANG),
/* harmony export */   "allColumns": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.allColumns),
/* harmony export */   "columnOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.columnOptions),
/* harmony export */   "displayRateInfo": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.displayRateInfo),
/* harmony export */   "displayRateOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.displayRateOptions),
/* harmony export */   "gameInfo": () => (/* reexport safe */ _game_info__WEBPACK_IMPORTED_MODULE_8__.gameInfo),
/* harmony export */   "gameOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.gameOptions),
/* harmony export */   "games": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.games),
/* harmony export */   "inserterCapacityOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.inserterCapacityOptions),
/* harmony export */   "inserterTargetOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.inserterTargetOptions),
/* harmony export */   "languageOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.languageOptions),
/* harmony export */   "powerUnitOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.powerUnitOptions),
/* harmony export */   "precisionColumns": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.precisionColumns),
/* harmony export */   "presetOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.presetOptions),
/* harmony export */   "rateTypeOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.rateTypeOptions),
/* harmony export */   "researchSpeedFactor": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.researchSpeedFactor),
/* harmony export */   "researchSpeedOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.researchSpeedOptions),
/* harmony export */   "researchSpeedVal": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.researchSpeedVal),
/* harmony export */   "simplexTypeOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.simplexTypeOptions),
/* harmony export */   "themeMap": () => (/* reexport safe */ _flow__WEBPACK_IMPORTED_MODULE_17__.themeMap),
/* harmony export */   "themeOptions": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_1__.themeOptions),
/* harmony export */   "toBoolEntities": () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_7__.toBoolEntities),
/* harmony export */   "toEntities": () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_7__.toEntities)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 2842);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ 7499);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ 2846);
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-data */ 2067);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults */ 4658);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ 7432);
/* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataset */ 1789);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities */ 9219);
/* harmony import */ var _game_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-info */ 1437);
/* harmony import */ var _id_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./id-name */ 9304);
/* harmony import */ var _inserter_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inserter-data */ 8211);
/* harmony import */ var _matrix_result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./matrix-result */ 9039);
/* harmony import */ var _mod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mod */ 3569);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./options */ 7564);
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payload */ 5185);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product */ 838);
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rational */ 9097);
/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./flow */ 326);
/* harmony import */ var _step_detail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./step-detail */ 1004);
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./step */ 3522);






















/***/ }),

/***/ 8211:
/*!*****************************************!*\
  !*** ./src/app/models/inserter-data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InserterData": () => (/* binding */ InserterData)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ 7499);
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rational */ 9097);


const InserterData = {
    [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterTarget.Chest]: {
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity0]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(0.83),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.2),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.31),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.62),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity2]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.67),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.4),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.62),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(9.23),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity7]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.5),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(3.6),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(6.92),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(27.69),
            },
        ],
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterTarget.ExpressTransportBelt]: {
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity0]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(0.83),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.2),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.31),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.44),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity2]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.64),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.35),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.44),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(7.74),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity7]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.43),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(3.46),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(6.43),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(13.85),
            },
        ],
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterTarget.FastTransportBelt]: {
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity0]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(0.83),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.2),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.31),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.44),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity2]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.64),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.35),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.44),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(7.06),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity7]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.37),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(3.33),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(6),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(10.91),
            },
        ],
    },
    [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterTarget.TransportBelt]: {
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity0]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(0.83),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.2),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.31),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.44),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity2]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(1.64),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.35),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(4.44),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(5.71),
            },
        ],
        [_enum__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity7]: [
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.Inserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(2.25),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.LongHandedInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(3.1),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.FastInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(5.29),
            },
            {
                id: _enum__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter,
                value: _rational__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(6.79),
            },
        ],
    },
};


/***/ }),

/***/ 9039:
/*!*****************************************!*\
  !*** ./src/app/models/matrix-result.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3569:
/*!*******************************!*\
  !*** ./src/app/models/mod.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7564:
/*!***********************************!*\
  !*** ./src/app/models/options.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5185:
/*!***********************************!*\
  !*** ./src/app/models/payload.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 838:
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalProduct": () => (/* binding */ RationalProduct)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rational */ 9097);

class RationalProduct {
    constructor(data) {
        this.id = data.id;
        this.itemId = data.itemId;
        this.rate = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(data.rate);
        this.rateType = data.rateType;
        if (data.viaId) {
            this.viaId = data.viaId;
        }
    }
}


/***/ }),

/***/ 9097:
/*!************************************!*\
  !*** ./src/app/models/rational.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rational": () => (/* binding */ Rational)
/* harmony export */ });
const MAX_DENOM = 100000;
const DIVIDE_BY_ZERO = 'Cannot divide by zero';
const bigZero = BigInt(0);
const bigOne = BigInt(1);
const bigMinusOne = BigInt(-1);
class Rational {
    constructor(p, q = bigOne) {
        if (q < bigZero) {
            p = -p;
            q = -q;
        }
        const gcd = Rational.gcd(Rational.abs(p), q);
        if (gcd > bigOne) {
            p = p / gcd;
            q = q / gcd;
        }
        this.p = p;
        this.q = q;
    }
    static gcd(x, y) {
        x = Rational.abs(x);
        y = Rational.abs(y);
        while (y) {
            const t = y;
            y = x % y;
            x = t;
        }
        return x;
    }
    static abs(x) {
        return x < bigZero ? x * bigMinusOne : x;
    }
    static from(p, q = 1) {
        if (q === 0) {
            throw Error(DIVIDE_BY_ZERO);
        }
        return new Rational(BigInt(p), BigInt(q));
    }
    /**
     * Source: https://www.ics.uci.edu/%7Eeppstein/numth/frap.c
     */
    static parseFloat(startx) {
        if (this.parseFloatCache[startx])
            return this.parseFloatCache[startx];
        let ai = startx, x = startx;
        /** initialize matrix */
        const m = [
            [1, 0],
            [0, 1],
        ];
        /** loop finding terms until denom gets too big */
        while (m[1][0] * (ai = Math.floor(x)) + m[1][1] <= MAX_DENOM) {
            let t = m[0][0] * ai + m[0][1];
            m[0][1] = m[0][0];
            m[0][0] = t;
            t = m[1][0] * ai + m[1][1];
            m[1][1] = m[1][0];
            m[1][0] = t;
            if (x === ai)
                break; // AF: division by zero
            x = 1 / (x - ai);
        }
        const optA = Rational.from(m[0][0], m[1][0]);
        const errA = Math.abs(startx - optA.toNumber());
        ai = Math.floor((MAX_DENOM - m[1][1]) / m[1][0]);
        m[0][0] = m[0][0] * ai + m[0][1];
        m[1][0] = m[1][0] * ai + m[1][1];
        const optB = Rational.from(m[0][0], m[1][0]);
        const errB = Math.abs(startx - optB.toNumber());
        const result = errA < errB ? optA : optB;
        this.parseFloatCache[startx] = result;
        return result;
    }
    static fromJson(x) {
        if (typeof x === 'number') {
            return this.fromNumber(x);
        }
        return this.fromString(x);
    }
    static fromNumber(x) {
        if (Number.isInteger(x)) {
            return new Rational(BigInt(x), bigOne);
        }
        return this.parseFloat(x);
    }
    static fromString(x) {
        if (x.length === 0) {
            throw new Error('Empty string');
        }
        if (typeof x === 'number' || x.indexOf('/') === -1) {
            return Rational.fromNumber(Number(x));
        }
        else {
            const f = x.split('/');
            if (f.length > 2) {
                throw new Error('Too many /');
            }
            if (f[0].indexOf(' ') === -1) {
                const p = Number(f[0]);
                const q = Number(f[1]);
                return Rational.from(p, q);
            }
            else {
                const g = f[0].split(' ');
                if (g.length > 2) {
                    throw new Error('Too many spaces');
                }
                const n = Number(g[0]);
                const p = Number(g[1]);
                const q = Number(f[1]);
                return Rational.from(n).add(Rational.from(p, q));
            }
        }
    }
    static min(x, y) {
        return x.lt(y) ? x : y;
    }
    static max(x, y) {
        return x.gt(y) ? x : y;
    }
    isZero() {
        return this.p === bigZero;
    }
    isOne() {
        return this.p === bigOne && this.q === bigOne;
    }
    nonzero() {
        return this.p !== bigZero;
    }
    isInteger() {
        return this.q === bigOne;
    }
    inverse() {
        return this.mul(Rational.minusOne);
    }
    reciprocal() {
        return new Rational(this.q, this.p);
    }
    lt(x) {
        if (this.q === x.q) {
            return this.p < x.p;
        }
        return this.p * x.q < x.p * this.q;
    }
    lte(x) {
        return this.eq(x) || this.lt(x);
    }
    gt(x) {
        return x.lt(this);
    }
    gte(x) {
        return this.eq(x) || this.gt(x);
    }
    eq(x) {
        return this.p === x.p && this.q === x.q;
    }
    add(x) {
        if (x.isZero()) {
            return this;
        }
        return new Rational(this.p * x.q + this.q * x.p, this.q * x.q);
    }
    sub(x) {
        if (x.isZero()) {
            return this;
        }
        return new Rational(this.p * x.q - this.q * x.p, this.q * x.q);
    }
    mul(x) {
        if (this.isOne()) {
            return x;
        }
        if (x.isOne()) {
            return this;
        }
        if (this.isZero() || x.isZero()) {
            return Rational.zero;
        }
        return new Rational(this.p * x.p, this.q * x.q);
    }
    div(x) {
        if (x.isOne()) {
            return this;
        }
        if (this.eq(x)) {
            return Rational.one;
        }
        return new Rational(this.p * x.q, this.q * x.p);
    }
    ceil() {
        if (this.isInteger()) {
            return this;
        }
        else {
            return new Rational(this.p / this.q + bigOne);
        }
    }
    floor() {
        if (this.isInteger()) {
            return this;
        }
        else {
            return new Rational(this.p / this.q);
        }
    }
    abs() {
        return new Rational(Rational.abs(this.p), this.q);
    }
    toNumber() {
        return Number(this.p) / Number(this.q);
    }
    toPrecision(x) {
        const round = Rational.from(Math.pow(10, x));
        return this.mul(round).ceil().div(round).toNumber();
    }
    toFraction() {
        if (this.isInteger()) {
            return this.p.toString();
        }
        if (Rational.abs(this.p) > Rational.abs(this.q)) {
            const whole = this.p / this.q;
            const mod = this.p % this.q;
            return `${whole} + ${mod}/${this.q}`;
        }
        return `${this.p}/${this.q}`;
    }
    /**
     * Converts rational to string
     * * Default: Use decimals if 2 or less, use num/den otherwise
     * * Custom:
     *   * Specify null to use num/den
     *   * Specify number to specify number of decimals
     */
    toString(precision) {
        if (precision)
            return this.toPrecision(precision).toString();
        if (precision === null || this.toDecimals() > 2) {
            return `${this.p.toString()}/${this.q.toString()}`;
        }
        else {
            return this.toNumber().toString();
        }
    }
    toDecimals() {
        const num = this.toNumber();
        if (num % 1 !== 0) {
            return num.toString().split('.')[1].length;
        }
        return 0;
    }
}
Rational.zero = new Rational(bigZero);
Rational.minusOne = new Rational(bigMinusOne);
Rational.one = new Rational(bigOne);
Rational.two = new Rational(BigInt(2));
Rational.ten = new Rational(BigInt(10));
Rational.sixty = new Rational(BigInt(60));
Rational.hundred = new Rational(BigInt(100));
Rational.thousand = new Rational(BigInt(1000));
Rational.million = new Rational(BigInt(1000000));
Rational.parseFloatCache = {};


/***/ }),

/***/ 9802:
/*!****************************************************!*\
  !*** ./src/app/models/settings/column-settings.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4808:
/*!*****************************************************!*\
  !*** ./src/app/models/settings/factory-settings.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2846:
/*!******************************************!*\
  !*** ./src/app/models/settings/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalRecipeSettings": () => (/* reexport safe */ _recipe_settings__WEBPACK_IMPORTED_MODULE_3__.RationalRecipeSettings)
/* harmony export */ });
/* harmony import */ var _column_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-settings */ 9802);
/* harmony import */ var _factory_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory-settings */ 4808);
/* harmony import */ var _item_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-settings */ 9826);
/* harmony import */ var _recipe_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-settings */ 8052);






/***/ }),

/***/ 9826:
/*!**************************************************!*\
  !*** ./src/app/models/settings/item-settings.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8052:
/*!****************************************************!*\
  !*** ./src/app/models/settings/recipe-settings.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RationalRecipeSettings": () => (/* binding */ RationalRecipeSettings)
/* harmony export */ });
/* harmony import */ var _rational__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rational */ 9097);

class RationalRecipeSettings {
    constructor(data) {
        if (data.factoryId != null) {
            this.factoryId = data.factoryId;
        }
        if (data.factoryModuleIds != null) {
            this.factoryModuleIds = data.factoryModuleIds;
        }
        if (data.beaconCount != null) {
            this.beaconCount = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(data.beaconCount);
        }
        if (data.beaconId != null) {
            this.beaconId = data.beaconId;
        }
        if (data.beaconModuleIds != null) {
            this.beaconModuleIds = data.beaconModuleIds;
        }
        if (data.beaconTotal != null) {
            this.beaconTotal = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(data.beaconTotal);
        }
        if (data.overclock != null) {
            this.overclock = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(data.overclock);
        }
        if (data.cost != null) {
            this.cost = _rational__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(data.cost);
        }
    }
}


/***/ }),

/***/ 1004:
/*!***************************************!*\
  !*** ./src/app/models/step-detail.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3522:
/*!********************************!*\
  !*** ./src/app/models/step.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5525:
/*!********************************************!*\
  !*** ./src/app/pipes/factory-rate.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactoryRatePipe": () => (/* binding */ FactoryRatePipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate.pipe */ 1198);



class FactoryRatePipe {
    constructor(ratePipe) {
        this.ratePipe = ratePipe;
    }
    transform(value, precision, factoryId) {
        if (factoryId === _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Pumpjack) {
            return `${this.ratePipe.transform(value.mul(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred), precision != null ? Math.max(precision - 2, 0) : precision)}%`;
        }
        else {
            return this.ratePipe.transform(value, precision);
        }
    }
}
FactoryRatePipe.ɵfac = function FactoryRatePipe_Factory(t) { return new (t || FactoryRatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rate_pipe__WEBPACK_IMPORTED_MODULE_1__.RatePipe, 16)); };
FactoryRatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "factoryRate", type: FactoryRatePipe, pure: true });


/***/ }),

/***/ 2753:
/*!*************************************************!*\
  !*** ./src/app/pipes/factory-show-rate.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactoryShowRatePipe": () => (/* binding */ FactoryShowRatePipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FactoryShowRatePipe {
    transform(factoryId, game) {
        return (game !== _models__WEBPACK_IMPORTED_MODULE_0__.Game.CaptainOfIndustry || factoryId !== _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.MineControlTower);
    }
}
FactoryShowRatePipe.ɵfac = function FactoryShowRatePipe_Factory(t) { return new (t || FactoryShowRatePipe)(); };
FactoryShowRatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "factoryShowRate", type: FactoryShowRatePipe, pure: true });


/***/ }),

/***/ 280:
/*!********************************************!*\
  !*** ./src/app/pipes/factory-show.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactoryShowPipe": () => (/* binding */ FactoryShowPipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FactoryShowPipe {
    transform(factoryId, game) {
        if (factoryId == null)
            return false;
        return game !== _models__WEBPACK_IMPORTED_MODULE_0__.Game.DysonSphereProgram || factoryId !== _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.MiningDrill;
    }
}
FactoryShowPipe.ɵfac = function FactoryShowPipe_Factory(t) { return new (t || FactoryShowPipe)(); };
FactoryShowPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "factoryShow", type: FactoryShowPipe, pure: true });


/***/ }),

/***/ 1969:
/*!******************************************!*\
  !*** ./src/app/pipes/icon-class.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconClassPipe": () => (/* binding */ IconClassPipe),
/* harmony export */   "IconSmClassPipe": () => (/* binding */ IconSmClassPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IconClassPipe {
    transform(value, type = 'item') {
        if (value == null)
            return '';
        return `lab-icon ${type} ${value}`;
    }
}
IconClassPipe.ɵfac = function IconClassPipe_Factory(t) { return new (t || IconClassPipe)(); };
IconClassPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "iconClass", type: IconClassPipe, pure: true });
class IconSmClassPipe {
    transform(value, type = 'item') {
        if (value == null)
            return '';
        return `lab-icon-sm ${type} ${value}`;
    }
}
IconSmClassPipe.ɵfac = function IconSmClassPipe_Factory(t) { return new (t || IconSmClassPipe)(); };
IconSmClassPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "iconSmClass", type: IconSmClassPipe, pure: true });


/***/ }),

/***/ 7534:
/*!**********************************************!*\
  !*** ./src/app/pipes/inserter-speed.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InserterSpeedPipe": () => (/* binding */ InserterSpeedPipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class InserterSpeedPipe {
    transform(value, settings) {
        if (value != null) {
            const inserter = _models__WEBPACK_IMPORTED_MODULE_0__.InserterData[settings.inserterTarget][settings.inserterCapacity]?.find((d) => d.value.gt(value) || d.id === _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.StackInserter);
            if (inserter == null) {
                // Should be impossible due to stack inserter fallback
                return null;
            }
            return {
                id: inserter.id,
                value: value.div(inserter.value),
            };
        }
        return null;
    }
}
InserterSpeedPipe.ɵfac = function InserterSpeedPipe_Factory(t) { return new (t || InserterSpeedPipe)(); };
InserterSpeedPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "inserterSpeed", type: InserterSpeedPipe, pure: true });


/***/ }),

/***/ 8034:
/*!********************************************!*\
  !*** ./src/app/pipes/invert-array.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvertArrayPipe": () => (/* binding */ InvertArrayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);


class InvertArrayPipe {
    constructor(displaySvc) {
        this.displaySvc = displaySvc;
    }
    transform(value, all) {
        return this.displaySvc.invertArray(value, all);
    }
}
InvertArrayPipe.ɵfac = function InvertArrayPipe_Factory(t) { return new (t || InvertArrayPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DisplayService, 16)); };
InvertArrayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "invertArray", type: InvertArrayPipe, pure: true });


/***/ }),

/***/ 3683:
/*!****************************************!*\
  !*** ./src/app/pipes/left-pad.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftPadPipe": () => (/* binding */ LeftPadPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LeftPadPipe {
    transform(value) {
        if (value == null)
            return '';
        return ' '.repeat(4 - value.length) + value;
    }
}
LeftPadPipe.ɵfac = function LeftPadPipe_Factory(t) { return new (t || LeftPadPipe)(); };
LeftPadPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "leftPad", type: LeftPadPipe, pure: true });


/***/ }),

/***/ 1616:
/*!***************************************!*\
  !*** ./src/app/pipes/options.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsPipe": () => (/* binding */ OptionsPipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class OptionsPipe {
    transform(value, entities, includeEmptyModule = false) {
        if (value == null) {
            return [];
        }
        const list = value.map((i) => ({ label: entities[i].name, value: i }));
        if (includeEmptyModule) {
            list.unshift({ label: 'None', value: _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Module });
        }
        return list;
    }
}
OptionsPipe.ɵfac = function OptionsPipe_Factory(t) { return new (t || OptionsPipe)(); };
OptionsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "options", type: OptionsPipe, pure: true });


/***/ }),

/***/ 3769:
/*!*************************************!*\
  !*** ./src/app/pipes/power.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerPipe": () => (/* binding */ PowerPipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate.pipe */ 1198);



class PowerPipe {
    constructor(ratePipe) {
        this.ratePipe = ratePipe;
    }
    transform(value, precision, unit) {
        switch (unit) {
            case _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.GW:
                return `${this.ratePipe.transform(value.div(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.million), precision)} GW`;
            case _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.MW:
                return `${this.ratePipe.transform(value.div(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.thousand), precision)} MW`;
            default:
                return `${this.ratePipe.transform(value, precision)} kW`;
        }
    }
}
PowerPipe.ɵfac = function PowerPipe_Factory(t) { return new (t || PowerPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rate_pipe__WEBPACK_IMPORTED_MODULE_1__.RatePipe, 16)); };
PowerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "power", type: PowerPipe, pure: true });


/***/ }),

/***/ 9213:
/*!*************************************************!*\
  !*** ./src/app/pipes/precision-example.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecisionExamplePipe": () => (/* binding */ PrecisionExamplePipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class PrecisionExamplePipe {
    transform(value) {
        if (value == null) {
            return PrecisionExamplePipe.value.toFraction();
        }
        return PrecisionExamplePipe.value.toPrecision(value).toString();
    }
}
PrecisionExamplePipe.value = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.from(1, 3);
PrecisionExamplePipe.ɵfac = function PrecisionExamplePipe_Factory(t) { return new (t || PrecisionExamplePipe)(); };
PrecisionExamplePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "precisionExample", type: PrecisionExamplePipe, pure: true });


/***/ }),

/***/ 1930:
/*!******************************************************!*\
  !*** ./src/app/pipes/rate-type-via-dropdown.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateTypeViaDropdownPipe": () => (/* binding */ RateTypeViaDropdownPipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class RateTypeViaDropdownPipe {
    transform(value) {
        return value === _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Factories ? 'recipe' : 'item';
    }
}
RateTypeViaDropdownPipe.ɵfac = function RateTypeViaDropdownPipe_Factory(t) { return new (t || RateTypeViaDropdownPipe)(); };
RateTypeViaDropdownPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "rateTypeViaDropdown", type: RateTypeViaDropdownPipe, pure: true });


/***/ }),

/***/ 1198:
/*!************************************!*\
  !*** ./src/app/pipes/rate.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatePipe": () => (/* binding */ RatePipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class RatePipe {
    transform(value, precision) {
        if (precision == null) {
            return value.toFraction();
        }
        else {
            if (precision === -2) {
                const num = Math.round(value.mul(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred).toNumber());
                return num.toString();
            }
            const num = value.toPrecision(precision);
            if (precision > 0) {
                const result = num.toString();
                const split = result.split('.');
                if (split.length > 1) {
                    if (split[1].length < precision) {
                        const spaces = precision - split[1].length;
                        return num.toString() + '0'.repeat(spaces);
                    }
                }
                else if (value.isInteger()) {
                    return num.toString() + ' '.repeat(precision + 1);
                }
                else {
                    return num.toString() + '.' + '0'.repeat(precision);
                }
            }
            return num.toString();
        }
    }
}
RatePipe.ɵfac = function RatePipe_Factory(t) { return new (t || RatePipe)(); };
RatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "rate", type: RatePipe, pure: true });


/***/ }),

/***/ 2833:
/*!*****************************************!*\
  !*** ./src/app/pipes/step-href.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepHrefPipe": () => (/* binding */ StepHrefPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);


class StepHrefPipe {
    constructor(routerSvc) {
        this.routerSvc = routerSvc;
    }
    transform(value, data) {
        let step = value;
        if (step.recipeId) {
            const recipe = data.recipeR[step.recipeId];
            if (recipe.adjustProd && recipe.productivity && value.items) {
                // Adjust items to account for productivity bonus
                step = {
                    ...value,
                    ...{ items: value.items.div(recipe.productivity) },
                };
            }
        }
        return this.routerSvc.stepHref(step, data.hash);
    }
}
StepHrefPipe.ɵfac = function StepHrefPipe_Factory(t) { return new (t || StepHrefPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.RouterService, 16)); };
StepHrefPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "stepHref", type: StepHrefPipe, pure: true });


/***/ }),

/***/ 6923:
/*!*******************************************************!*\
  !*** ./src/app/pipes/tooltips/beacon-tooltip.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeaconTooltipPipe": () => (/* binding */ BeaconTooltipPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);



class BeaconTooltipPipe {
    constructor(translateSvc, displaySvc) {
        this.translateSvc = translateSvc;
        this.displaySvc = displaySvc;
    }
    transform(value, data) {
        if (value == null)
            return '';
        const item = data.itemEntities[value];
        const beacon = item?.beacon;
        if (item == null || beacon == null)
            return '';
        let html = item.name + '\n<small>';
        const tableRows = [
            [
                this.translateSvc.instant('tooltip.effectivity'),
                this.displaySvc.round(beacon.effectivity),
            ],
            [this.translateSvc.instant('tooltip.modules'), beacon.modules.toString()],
            [this.translateSvc.instant('tooltip.range'), beacon.range.toString()],
        ];
        if (beacon.type) {
            tableRows.push([
                this.translateSvc.instant('tooltip.energyType'),
                beacon.type,
            ]);
        }
        if (beacon.category) {
            tableRows.push([
                this.translateSvc.instant('tooltip.fuelCategory'),
                beacon.category,
            ]);
        }
        if (beacon.usage) {
            tableRows.push([
                this.translateSvc.instant('tooltip.energyUsage'),
                this.displaySvc.power(beacon.usage),
            ]);
        }
        html += this.displaySvc.table(tableRows);
        html += '</small>';
        return html;
    }
}
BeaconTooltipPipe.ɵfac = function BeaconTooltipPipe_Factory(t) { return new (t || BeaconTooltipPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DisplayService, 16)); };
BeaconTooltipPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "beaconTooltip", type: BeaconTooltipPipe, pure: true });


/***/ }),

/***/ 1168:
/*!********************************************************!*\
  !*** ./src/app/pipes/tooltips/factory-tooltip.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactoryTooltipPipe": () => (/* binding */ FactoryTooltipPipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/services */ 1866);




class FactoryTooltipPipe {
    constructor(translateSvc, displaySvc) {
        this.translateSvc = translateSvc;
        this.displaySvc = displaySvc;
    }
    transform(value, data) {
        if (value == null)
            return '';
        const item = data.itemEntities[value];
        const factory = item?.factory;
        if (item == null || factory == null)
            return '';
        let html = item.name + '\n<small>';
        const tableRows = [];
        if (factory.speed && data.game !== _models__WEBPACK_IMPORTED_MODULE_0__.Game.CaptainOfIndustry) {
            tableRows.push([
                this.translateSvc.instant('tooltip.craftingSpeed'),
                this.displaySvc.round(factory.speed),
            ]);
        }
        if (factory.modules && data.game === _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio) {
            tableRows.push([
                this.translateSvc.instant('tooltip.modules'),
                factory.modules.toString(),
            ]);
        }
        if (factory.type) {
            tableRows.push([
                this.translateSvc.instant('tooltip.energyType'),
                factory.type,
            ]);
        }
        if (factory.category) {
            tableRows.push([
                this.translateSvc.instant('tooltip.fuelCategory'),
                factory.category,
            ]);
        }
        if (factory.usage?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.energyUsage'),
                this.displaySvc.power(factory.usage),
            ]);
        }
        if (factory.drain?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.drain'),
                this.displaySvc.power(factory.drain),
            ]);
        }
        if (factory.pollution?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.pollution'),
                this.displaySvc.round(factory.pollution) + '/m',
            ]);
        }
        if (factory.silo) {
            tableRows.push([
                this.translateSvc.instant('tooltip.rocketPartsRequired'),
                this.displaySvc.round(factory.silo.parts),
            ]);
            tableRows.push([
                this.translateSvc.instant('tooltip.launchTime'),
                this.displaySvc.round(factory.silo.launch) + 's',
            ]);
        }
        html += this.displaySvc.table(tableRows);
        if (factory.consumption) {
            html +=
                '<div class="d-flex align-items-center justify-content-center flex-wrap mt-2">';
            for (const key of Object.keys(factory.consumption)) {
                html += this.displaySvc.icon(key, this.displaySvc.round(factory.consumption[key]));
            }
            html += '</div>';
        }
        html += '</small>';
        return html;
    }
}
FactoryTooltipPipe.ɵfac = function FactoryTooltipPipe_Factory(t) { return new (t || FactoryTooltipPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.DisplayService, 16)); };
FactoryTooltipPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "factoryTooltip", type: FactoryTooltipPipe, pure: true });


/***/ }),

/***/ 7598:
/*!*****************************************************!*\
  !*** ./src/app/pipes/tooltips/item-tooltip.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTooltipPipe": () => (/* binding */ ItemTooltipPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);


class ItemTooltipPipe {
    constructor(displaySvc) {
        this.displaySvc = displaySvc;
    }
    transform(value, data) {
        if (value == null)
            return '';
        const recipeId = data.itemRecipeId[value];
        if (recipeId == null) {
            const item = data.itemEntities[value];
            if (item == null)
                return '';
            return item.name;
        }
        else {
            const recipe = data.recipeEntities[value];
            if (recipe == null)
                return '';
            const producersHtml = recipe.producers
                .map((i) => this.displaySvc.icon(i, ''))
                .join('');
            return `<div>${recipe.name}</div><div class="d-flex align-items-center justify-content-center\
      flex-wrap mt-2">${this.displaySvc.recipeProcess(recipe)}\
      </div><div class="d-flex align-items-center justify-content-center flex-wrap mt-2">\
      ${producersHtml}</div>`;
        }
    }
}
ItemTooltipPipe.ɵfac = function ItemTooltipPipe_Factory(t) { return new (t || ItemTooltipPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DisplayService, 16)); };
ItemTooltipPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "itemTooltip", type: ItemTooltipPipe, pure: true });


/***/ }),

/***/ 7820:
/*!*******************************************************!*\
  !*** ./src/app/pipes/tooltips/module-tooltip.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleTooltipPipe": () => (/* binding */ ModuleTooltipPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);



class ModuleTooltipPipe {
    constructor(translateSvc, displaySvc) {
        this.translateSvc = translateSvc;
        this.displaySvc = displaySvc;
    }
    transform(value, data) {
        if (value == null)
            return '';
        const item = data.itemEntities[value];
        const module = item?.module;
        if (item == null || module == null)
            return '';
        let html = item.name + '\n<small>';
        const tableRows = [];
        if (module.consumption?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.consumption'),
                this.displaySvc.toBonusPercent(module.consumption),
            ]);
        }
        if (module.speed?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.speed'),
                this.displaySvc.toBonusPercent(module.speed),
            ]);
        }
        if (module.productivity?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.productivity'),
                this.displaySvc.toBonusPercent(module.productivity),
            ]);
        }
        if (module.pollution?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.pollution'),
                this.displaySvc.toBonusPercent(module.pollution),
            ]);
        }
        if (module.sprays?.nonzero()) {
            tableRows.push([
                this.translateSvc.instant('tooltip.sprays'),
                this.displaySvc.round(module.sprays),
            ]);
        }
        html += this.displaySvc.table(tableRows);
        html += '</small>';
        return html;
    }
}
ModuleTooltipPipe.ɵfac = function ModuleTooltipPipe_Factory(t) { return new (t || ModuleTooltipPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DisplayService, 16)); };
ModuleTooltipPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "moduleTooltip", type: ModuleTooltipPipe, pure: true });


/***/ }),

/***/ 8098:
/*!*******************************************************!*\
  !*** ./src/app/pipes/tooltips/recipe-tooltip.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeTooltipPipe": () => (/* binding */ RecipeTooltipPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services */ 1866);


class RecipeTooltipPipe {
    constructor(displaySvc) {
        this.displaySvc = displaySvc;
    }
    transform(value, data) {
        if (value == null)
            return '';
        const recipe = data.recipeEntities[value];
        if (recipe == null)
            return '';
        const producersHtml = recipe.producers
            .map((i) => this.displaySvc.icon(i, ''))
            .join('');
        return `<div>${recipe.name}</div><div class="d-flex align-items-center justify-content-center\
    flex-wrap mt-2">${this.displaySvc.recipeProcess(recipe)}\
    </div><div class="d-flex align-items-center justify-content-center flex-wrap mt-2">\
    ${producersHtml}</div>`;
    }
}
RecipeTooltipPipe.ɵfac = function RecipeTooltipPipe_Factory(t) { return new (t || RecipeTooltipPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DisplayService, 16)); };
RecipeTooltipPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "recipeTooltip", type: RecipeTooltipPipe, pure: true });


/***/ }),

/***/ 3823:
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentService": () => (/* binding */ ContentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class ContentService {
    constructor(router, translateSvc) {
        this.router = router;
        this.translateSvc = translateSvc;
        // Responsive
        this.scrollTop$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'scroll').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(
        // Don't test fromEvent
        // istanbul ignore next
        () => window.scrollY), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)(window.scrollY));
        // Dialogs
        this.showColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.showConfirm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        // Templates
        this.translateSelectedItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
        this.translateItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
        // Header
        this.settingsActive$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.settingsXlHidden$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        // Watch all language changes
        this.lang$ = this.translateSvc.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)(''));
    }
    confirm(confirmation) {
        this.showConfirm$.next(confirmation);
    }
    toggleSettings() {
        this.settingsActive$.next(!this.settingsActive$.value);
    }
    toggleSettingsXl() {
        this.settingsXlHidden$.next(!this.settingsXlHidden$.value);
    }
}
ContentService.ɵfac = function ContentService_Factory(t) { return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
ContentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);







class DataService {
    constructor(http, store, translateSvc) {
        this.http = http;
        this.store = store;
        this.translateSvc = translateSvc;
        this.cacheData = {};
        this.cacheHash = {};
        this.cacheI18n = {};
        this.initialize(_utilities__WEBPACK_IMPORTED_MODULE_1__.BrowserUtility.zip, _utilities__WEBPACK_IMPORTED_MODULE_1__.BrowserUtility.storedState, _store__WEBPACK_IMPORTED_MODULE_0__.Settings.initialSettingsState);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.Settings.getModId),
            this.translateSvc.onLangChange,
        ])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.skip)(1))
            .subscribe(([id]) => {
            this.requestData(id).subscribe();
        });
    }
    initialize(zip, stored, initial) {
        if (!zip) {
            const id = stored?.settingsState?.modId || initial.modId;
            this.requestData(id).subscribe(([data]) => {
                if (!stored?.productsState) {
                    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.Products.ResetAction(data.items[0].id));
                }
            });
        }
    }
    requestData(id) {
        const payload = {
            data: null,
            hash: null,
            i18n: null,
        };
        /** Setup observable for data */
        if (!this.cacheData[id]) {
            this.cacheData[id] = this.http.get(`data/${id}/data.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((value) => {
                payload.data = { id, value };
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
        }
        const data$ = this.cacheData[id];
        /** Setup observable for hash */
        if (!this.cacheHash[id]) {
            this.cacheHash[id] = this.http.get(`data/${id}/hash.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((value) => {
                payload.hash = { id, value };
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
        }
        const hash$ = this.cacheHash[id];
        /** Setup observable for i18n */
        const i18nLang = this.translateSvc.currentLang ?? 'en';
        const i18nKey = `${id}-${i18nLang}`;
        const skipI18n = i18nLang === 'en';
        let i18n$;
        if (skipI18n) {
            i18n$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
        }
        else {
            if (!this.cacheI18n[i18nKey]) {
                this.cacheI18n[i18nKey] = this.http
                    .get(`data/${id}/i18n/${i18nLang}.json`)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
                    console.warn(`No localization file found for ${i18nKey}`);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((value) => {
                    if (value) {
                        payload.i18n = { id: i18nKey, value };
                    }
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
            }
            i18n$ = this.cacheI18n[i18nKey];
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([data$, hash$, i18n$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            if (payload.data || payload.hash || payload.i18n) {
                this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_0__.Datasets.LoadModAction(payload));
            }
        }));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7946:
/*!*********************************************!*\
  !*** ./src/app/services/display.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayService": () => (/* binding */ DisplayService)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class DisplayService {
    icon(id, num) {
        return `<i class="m-1 me-2 lab-icon-sm ${id}"><span>${num ?? ''}</span></i>`;
    }
    table(rows) {
        let html = `<table class="w-100">`;
        rows.forEach((r) => (html += `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`));
        html += `</table>`;
        return html;
    }
    round(value) {
        return Number(value.toNumber().toFixed(2)).toString();
    }
    power(value) {
        if (typeof value === 'string') {
            value = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(value);
        }
        else if (typeof value === 'number') {
            value = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(value);
        }
        if (value.abs().lt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.thousand)) {
            return `${this.round(value)} kW`;
        }
        else {
            return `${this.round(value.div(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.thousand))} MW`;
        }
    }
    toBonusPercent(value) {
        const rational = this.round(value.mul(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred));
        if (value.gt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero)) {
            return `+${rational}%`;
        }
        else if (value.lt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero)) {
            return `${rational}%`;
        }
        else {
            return '';
        }
    }
    recipeProcess(recipe) {
        const timeHtml = this.icon('time', recipe.time);
        const inHtml = Object.keys(recipe.in)
            .map((i) => this.icon(i, recipe.in[i]))
            .join('');
        const outHtml = Object.keys(recipe.out)
            .map((i) => this.icon(i, recipe.out[i]))
            .join('');
        return `${timeHtml}${inHtml}<i class="m-1 me-2 fa-solid fa-arrow-right"></i>${outHtml}`;
    }
    invertArray(value, all) {
        return all.filter((a) => !value.some((v) => v === a));
    }
}
DisplayService.ɵfac = function DisplayService_Factory(t) { return new (t || DisplayService)(); };
DisplayService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DisplayService, factory: DisplayService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4889:
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": () => (/* binding */ ErrorService),
/* harmony export */   "LabErrorHandler": () => (/* binding */ LabErrorHandler)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ErrorService {
    constructor() {
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
class LabErrorHandler {
    constructor(ngZone, error) {
        this.ngZone = ngZone;
        this.error = error;
    }
    handleError(error) {
        if (this.error.message$.value == null) {
            this.ngZone.run(() => {
                console.error(error);
                this.error.message$.next(error);
            });
        }
    }
}
LabErrorHandler.ɵfac = function LabErrorHandler_Factory(t) { return new (t || LabErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ErrorService)); };
LabErrorHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LabErrorHandler, factory: LabErrorHandler.ɵfac });


/***/ }),

/***/ 4992:
/*!******************************************!*\
  !*** ./src/app/services/flow.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowService": () => (/* binding */ FlowService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.service */ 8140);






class FlowService {
    constructor(store, theme) {
        this.store = store;
        this.theme = theme;
        this.flowData$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getSteps),
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Items.getItemSettings),
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Recipes.getRecipeSettings),
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Recipes.getAdjustedDataset),
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getDisplayRateInfo),
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Preferences.getColumns),
            this.theme.theme$,
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(([steps, itemSettings, recipeSettings, data, dispRateInfo, columns, theme,]) => this.buildGraph(steps, itemSettings, recipeSettings, data, dispRateInfo, columns, _models__WEBPACK_IMPORTED_MODULE_0__.themeMap[theme])));
    }
    buildGraph(steps, itemSettings, recipeSettings, data, dispRateInfo, columns, theme) {
        const flow = {
            theme,
            nodes: [],
            links: [],
        };
        const itemPrec = columns[_models__WEBPACK_IMPORTED_MODULE_0__.Column.Items].precision;
        const rateLbl = dispRateInfo.label;
        for (const step of steps) {
            if (step.recipeId && step.factories) {
                const recipe = data.recipeEntities[step.recipeId];
                const settings = recipeSettings[step.recipeId];
                if (settings.factoryId != null) {
                    const factory = data.itemEntities[settings.factoryId];
                    // CREATE NODE: Standard recipe
                    flow.nodes.push({
                        id: `r|${step.recipeId}`,
                        type: Object.keys(recipe.in).length === 0
                            ? _models__WEBPACK_IMPORTED_MODULE_0__.NodeType.Input
                            : _models__WEBPACK_IMPORTED_MODULE_0__.NodeType.Recipe,
                        name: recipe.name,
                        text: `${step.factories.toString(itemPrec)} ${factory.name}`,
                        recipe,
                        factoryId: settings.factoryId,
                        factories: step.factories.toString(columns[_models__WEBPACK_IMPORTED_MODULE_0__.Column.Factories].precision),
                    });
                }
            }
            if (step.itemId) {
                const item = data.itemEntities[step.itemId];
                if (step.surplus) {
                    // CREATE NODE: Surplus
                    flow.nodes.push({
                        id: `s|${step.itemId}`,
                        type: _models__WEBPACK_IMPORTED_MODULE_0__.NodeType.Surplus,
                        name: item.name,
                        text: `${step.surplus.toString(itemPrec)}${rateLbl}`,
                    });
                    // Links to surplus node
                    for (const sourceStep of steps) {
                        if (sourceStep.recipeId && sourceStep.outputs) {
                            if (sourceStep.outputs[step.itemId]) {
                                const sourceAmount = step.surplus.mul(sourceStep.outputs[step.itemId]);
                                // CREATE LINK: Recipe -> Surplus
                                flow.links.push({
                                    source: `r|${sourceStep.recipeId}`,
                                    target: `s|${step.itemId}`,
                                    name: item.name,
                                    text: `${sourceAmount.toString(itemPrec)}${rateLbl}`,
                                });
                            }
                        }
                    }
                }
                if (step.items) {
                    let itemAmount = step.items;
                    if (step.parents) {
                        let inputAmount = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                        // Links to recipe node
                        for (const targetId of Object.keys(step.parents)) {
                            // This is how much is requested by that recipe, but need recipe source
                            const targetAmount = step.items.mul(step.parents[targetId]);
                            // Keep track of remaining amounts
                            let amount = targetAmount;
                            itemAmount = itemAmount.sub(amount);
                            for (const sourceStep of steps) {
                                if (sourceStep.recipeId && sourceStep.outputs) {
                                    if (sourceStep.outputs[step.itemId]) {
                                        // This source step produces this item
                                        const sourceAmount = targetAmount.mul(sourceStep.outputs[step.itemId]);
                                        amount = amount.sub(sourceAmount);
                                        // CREATE LINK: Recipe -> Recipe
                                        flow.links.push({
                                            source: `r|${sourceStep.recipeId}`,
                                            target: `r|${targetId}`,
                                            name: item.name,
                                            text: `${sourceAmount.toString(itemPrec)}${rateLbl}`,
                                        });
                                    }
                                }
                            }
                            if (!itemSettings[step.itemId].ignore &&
                                amount.gt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero)) {
                                inputAmount = inputAmount.add(amount);
                                // CREATE LINK: Input -> Recipe
                                flow.links.push({
                                    source: `i|${step.itemId}`,
                                    target: `r|${targetId}`,
                                    name: item.name,
                                    text: `${targetAmount.toString(itemPrec)}${rateLbl}`,
                                });
                            }
                        }
                        if (!itemSettings[step.itemId].ignore &&
                            inputAmount.gt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero)) {
                            // CREATE NODE: Input
                            flow.nodes.push({
                                id: `i|${step.itemId}`,
                                type: _models__WEBPACK_IMPORTED_MODULE_0__.NodeType.Input,
                                name: item.name,
                                text: `${inputAmount.toString(itemPrec)}${rateLbl}`,
                            });
                        }
                    }
                    if (step.output) {
                        // CREATE NODE: Output
                        flow.nodes.push({
                            id: `o|${step.itemId}`,
                            type: _models__WEBPACK_IMPORTED_MODULE_0__.NodeType.Output,
                            name: item.name,
                            text: `${step.output.toString(itemPrec)}${rateLbl}`,
                        });
                        for (const sourceStep of steps) {
                            if (sourceStep.recipeId && sourceStep.outputs) {
                                if (sourceStep.outputs[step.itemId]) {
                                    // CREATE LINK: Recipe -> Output
                                    flow.links.push({
                                        source: `r|${sourceStep.recipeId}`,
                                        target: `o|${step.itemId}`,
                                        name: item.name,
                                        text: `${step.output
                                            .mul(sourceStep.outputs[step.itemId])
                                            .toString(itemPrec)}${rateLbl}`,
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        return flow;
    }
}
FlowService.ɵfac = function FlowService_Factory(t) { return new (t || FlowService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService)); };
FlowService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: FlowService, factory: FlowService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARRAYSEP": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.ARRAYSEP),
/* harmony export */   "BASE64ABC": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.BASE64ABC),
/* harmony export */   "ContentService": () => (/* reexport safe */ _content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService),
/* harmony export */   "DataService": () => (/* reexport safe */ _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService),
/* harmony export */   "DisplayService": () => (/* reexport safe */ _display_service__WEBPACK_IMPORTED_MODULE_2__.DisplayService),
/* harmony export */   "EMPTY": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.EMPTY),
/* harmony export */   "ErrorService": () => (/* reexport safe */ _error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService),
/* harmony export */   "FALSE": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.FALSE),
/* harmony export */   "FIELDSEP": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.FIELDSEP),
/* harmony export */   "FlowService": () => (/* reexport safe */ _flow_service__WEBPACK_IMPORTED_MODULE_4__.FlowService),
/* harmony export */   "INVERT": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.INVERT),
/* harmony export */   "LISTSEP": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.LISTSEP),
/* harmony export */   "LabErrorHandler": () => (/* reexport safe */ _error_service__WEBPACK_IMPORTED_MODULE_3__.LabErrorHandler),
/* harmony export */   "MAX": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.MAX),
/* harmony export */   "MIN_ZIP": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.MIN_ZIP),
/* harmony export */   "MigrationWarning": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.MigrationWarning),
/* harmony export */   "NULL": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.NULL),
/* harmony export */   "RouterService": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.RouterService),
/* harmony export */   "Section": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.Section),
/* harmony export */   "StateService": () => (/* reexport safe */ _state_service__WEBPACK_IMPORTED_MODULE_6__.StateService),
/* harmony export */   "TRUE": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.TRUE),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_7__.ThemeService),
/* harmony export */   "TrackService": () => (/* reexport safe */ _track_service__WEBPACK_IMPORTED_MODULE_8__.TrackService),
/* harmony export */   "ZipVersion": () => (/* reexport safe */ _router_service__WEBPACK_IMPORTED_MODULE_5__.ZipVersion)
/* harmony export */ });
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.service */ 3823);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 2468);
/* harmony import */ var _display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.service */ 7946);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ 4889);
/* harmony import */ var _flow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flow.service */ 4992);
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router.service */ 8509);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state.service */ 1215);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme.service */ 8140);
/* harmony import */ var _track_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./track.service */ 9467);











/***/ }),

/***/ 8509:
/*!********************************************!*\
  !*** ./src/app/services/router.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARRAYSEP": () => (/* binding */ ARRAYSEP),
/* harmony export */   "BASE64ABC": () => (/* binding */ BASE64ABC),
/* harmony export */   "EMPTY": () => (/* binding */ EMPTY),
/* harmony export */   "FALSE": () => (/* binding */ FALSE),
/* harmony export */   "FIELDSEP": () => (/* binding */ FIELDSEP),
/* harmony export */   "INVERT": () => (/* binding */ INVERT),
/* harmony export */   "LISTSEP": () => (/* binding */ LISTSEP),
/* harmony export */   "MAX": () => (/* binding */ MAX),
/* harmony export */   "MIN_ZIP": () => (/* binding */ MIN_ZIP),
/* harmony export */   "MigrationWarning": () => (/* binding */ MigrationWarning),
/* harmony export */   "NULL": () => (/* binding */ NULL),
/* harmony export */   "RouterService": () => (/* binding */ RouterService),
/* harmony export */   "Section": () => (/* binding */ Section),
/* harmony export */   "TRUE": () => (/* binding */ TRUE),
/* harmony export */   "ZipVersion": () => (/* binding */ ZipVersion)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ 3376);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var src_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/data */ 8755);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-google-analytics */ 992);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ 2468);












const NULL = '?'; // Encoded, previously 'n'
const EMPTY = '='; // Encoded, previously 'e'
const LISTSEP = '_'; // Unreserved, previously ','
const ARRAYSEP = '~'; // Unreserved, previously '+'
const FIELDSEP = '*'; // Reserved, unescaped by encoding
const TRUE = '1';
const FALSE = '0';
const BASE64ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.'; // Unreserved
const MAX = BASE64ABC.length;
const INVERT = BASE64ABC.split('').reduce((e, c, i) => {
    e[c] = i;
    return e;
}, {});
const MIN_ZIP = 75;
var Section;
(function (Section) {
    Section["Version"] = "v";
    Section["Mod"] = "b";
    Section["Products"] = "p";
    Section["Items"] = "i";
    Section["Recipes"] = "r";
    Section["Factories"] = "f";
    Section["Settings"] = "s";
})(Section || (Section = {}));
var ZipVersion;
(function (ZipVersion) {
    ZipVersion["Version0"] = "0";
    ZipVersion["Version1"] = "1";
    ZipVersion["Version2"] = "2";
    ZipVersion["Version3"] = "3";
    ZipVersion["Version4"] = "4";
    ZipVersion["Version5"] = "5";
})(ZipVersion || (ZipVersion = {}));
var MigrationWarning;
(function (MigrationWarning) {
    MigrationWarning["ExpensiveDeprecation"] = "Deprecated: The expensive setting has been removed. Please use or request an expensive data set instead.";
})(MigrationWarning || (MigrationWarning = {}));
class RouterService {
    constructor(router, gaSvc, store, dataSvc) {
        this.router = router;
        this.gaSvc = gaSvc;
        this.store = store;
        this.dataSvc = dataSvc;
        this.zipPartial = { bare: '', hash: '' };
        // Intended to denote hashing algorithm version
        this.bareVersion = ZipVersion.Version4;
        this.hashVersion = ZipVersion.Version5;
        this.zipTail = {
            bare: `&${Section.Version}=${this.bareVersion}`,
            hash: `&${Section.Version}${this.hashVersion}`,
        };
        this.first = true;
        const l = 256;
        this.base64codes = new Uint8Array(l);
        for (let i = 0; i < l; i++) {
            this.base64codes[i] = 255; // invalid character
        }
        for (let i = 0; i < BASE64ABC.length; i++) {
            this.base64codes[BASE64ABC.charCodeAt(i)] = i;
        }
        this.base64codes['_'.charCodeAt(0)] = 0;
    }
    initialize() {
        this.router.events.subscribe((e) => this.updateState(e));
        this.store
            .select(_store__WEBPACK_IMPORTED_MODULE_3__.Products.getZipState)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(0))
            .subscribe((s) => {
            let skip = false;
            if (this.first) {
                // First update: if there are no modified settings, leave base URL.
                if (Object.keys(s.items).length === 0 &&
                    Object.keys(s.recipes).length === 0 &&
                    JSON.stringify(s.factories) ===
                        JSON.stringify(_store__WEBPACK_IMPORTED_MODULE_3__.Factories.initialFactoriesState) &&
                    JSON.stringify(s.settings) ===
                        JSON.stringify(_store__WEBPACK_IMPORTED_MODULE_3__.Settings.initialSettingsState)) {
                    // No modified settings, skip first update.
                    skip = true;
                }
                // Don't check again later, always update.
                this.first = false;
            }
            if (!skip) {
                this.updateUrl(s.products, s.items, s.recipes, s.factories, s.settings);
            }
        });
    }
    updateUrl(products, items, recipes, factories, settings) {
        this.zipState(products, items, recipes, factories, settings).subscribe((zState) => {
            this.zip = this.getHash(zState);
            const hash = this.router.url.split('#');
            const url = `${hash[0].split('?')[0]}?${this.zip}${(hash[1] && `#${hash[1]}`) || ''}`;
            this.router.navigateByUrl(url);
        });
    }
    zipState(products, items, recipes, factories, settings) {
        return this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__.Datasets.getHashEntities).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((hashEntities) => hashEntities[settings.modId]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((hash) => hash != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((hash) => {
            const zipPartial = { bare: '', hash: '' };
            // Mod
            const zMod = this.zipDiffString(settings.modId, _store__WEBPACK_IMPORTED_MODULE_3__.Settings.initialSettingsState.modId);
            if (zMod.length) {
                zipPartial.hash += `&${Section.Mod}${this.getId(src_data__WEBPACK_IMPORTED_MODULE_1__.data.hash.indexOf(zMod))}`;
            }
            // Products
            const p = products.ids.map((i) => products.entities[i]);
            const zState = this.zipProducts(p, hash);
            // Settings
            this.zipItems(zipPartial, items, hash);
            this.zipRecipes(zipPartial, recipes, hash);
            this.zipFactories(zipPartial, factories, hash);
            this.zipSettings(zipPartial, settings, hash);
            this.zipPartial = zipPartial;
            return zState;
        }));
    }
    stepHref(step, hash) {
        if (step.items == null || step.itemId == null || hash == null) {
            return null;
        }
        const products = [
            {
                id: '0',
                itemId: step.itemId,
                rate: step.items.toString(),
                rateType: _models__WEBPACK_IMPORTED_MODULE_2__.RateType.Items,
            },
        ];
        return '?' + this.getHash(this.zipProducts(products, hash));
    }
    getHash(zProducts) {
        const bare = zProducts.bare + this.zipPartial.bare + this.zipTail.bare;
        const hash = zProducts.hash + this.zipPartial.hash + this.zipTail.hash;
        const zip = `z=${this.bytesToBase64((0,pako__WEBPACK_IMPORTED_MODULE_0__.deflate)(hash))}`;
        return bare.length < Math.max(zip.length, MIN_ZIP) ? bare : zip;
    }
    getParams(zip) {
        const sections = zip.split('&');
        const substr = sections[0][1] === '=' ? 2 : 1;
        const params = sections.reduce((e, v) => {
            e[v[0]] = v.substring(substr);
            return e;
        }, {});
        return params;
    }
    updateState(e) {
        try {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
                const [prehash, ...posthash] = e.urlAfterRedirects.split('#');
                const hash = posthash.join('#'); // Preserve # after first instance
                const [prequery, ...postquery] = prehash.split('?');
                let query = postquery.join('?'); // Preserve ? after first instance
                if (!query.length && hash.length > 1 && hash[1] === '=') {
                    // Try to recognize and handle old hash style navigation
                    query = hash;
                }
                if (query) {
                    let zip = query;
                    if (this.zip !== zip) {
                        if (zip.startsWith('z=')) {
                            // Upgrade V0 query-unsafe zipped characters
                            const z = zip
                                .substring(2)
                                .replace(/\+/g, '-')
                                .replace(/\//g, '.')
                                .replace(/=/g, '_');
                            zip = this.inflateSafe(z);
                        }
                        // Upgrade V0 query-unsafe delimiters
                        zip = zip.replace(/,/g, LISTSEP).replace(/\+/g, ARRAYSEP);
                        // Upgrade V0 null/empty values
                        zip = zip
                            .replace(/\*n\*/g, `*${NULL}*`)
                            .replace(/\*e\*/g, `*${EMPTY}*`);
                        let params = this.getParams(zip);
                        let warnings = [];
                        [params, warnings] = this.migrate(params);
                        this.displayWarnings(warnings);
                        const v = params[Section.Version];
                        const state = {};
                        if (v == this.bareVersion) {
                            Object.keys(params).forEach((k) => {
                                params[k] = decodeURIComponent(params[k]);
                            });
                            if (params[Section.Products]) {
                                state.productsState = this.unzipProducts(params);
                            }
                            if (params[Section.Items]) {
                                state.itemsState = this.unzipItems(params);
                            }
                            if (params[Section.Recipes]) {
                                state.recipesState = this.unzipRecipes(params);
                            }
                            if (params[Section.Factories]) {
                                state.factoriesState = this.unzipFactories(params);
                            }
                            if (params[Section.Settings]) {
                                state.settingsState = this.unzipSettings(params);
                            }
                            this.dispatch(zip, state);
                        }
                        else {
                            const modId = this.parseNString(params[Section.Mod], src_data__WEBPACK_IMPORTED_MODULE_1__.data.hash);
                            this.dataSvc
                                .requestData(modId || _store__WEBPACK_IMPORTED_MODULE_3__.Settings.initialSettingsState.modId)
                                .subscribe(([_, hash]) => {
                                if (params[Section.Products]) {
                                    state.productsState = this.unzipProducts(params, hash);
                                }
                                if (params[Section.Items]) {
                                    state.itemsState = this.unzipItems(params, hash);
                                }
                                if (params[Section.Recipes]) {
                                    state.recipesState = this.unzipRecipes(params, hash);
                                }
                                if (params[Section.Factories]) {
                                    state.factoriesState = this.unzipFactories(params, hash);
                                }
                                if (params[Section.Settings]) {
                                    state.settingsState = this.unzipSettings(params, hash);
                                }
                                if (modId != null) {
                                    state.settingsState = {
                                        ...state.settingsState,
                                        ...{ modId },
                                    };
                                }
                                this.dispatch(zip, state);
                            });
                        }
                    }
                }
            }
        }
        catch (err) {
            console.error(err);
            throw new Error('RouterService failed to parse url');
        }
    }
    dispatch(zip, state) {
        this.zip = zip;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__.App.LoadAction(state));
    }
    /** Migrates older zip params to latest bare/hash formats */
    migrate(params) {
        const warnings = [];
        const v = params[Section.Version] ?? ZipVersion.Version0;
        this.gaSvc.event('unzip_version', v);
        switch (v) {
            case ZipVersion.Version0:
                return this.migrateV0(params, warnings);
            case ZipVersion.Version1:
                return this.migrateV1(params, warnings);
            case ZipVersion.Version2:
                return this.migrateV2(params, warnings);
            case ZipVersion.Version3:
                return this.migrateV3(params, warnings);
            default:
                return [params, warnings];
        }
    }
    /** Migrates V0 bare zip to latest bare format */
    migrateV0(params, warnings) {
        if (params[Section.Settings]) {
            // Reorganize settings
            const zip = params[Section.Settings];
            const s = zip.split(FIELDSEP);
            // Convert modId to V1
            let modId = this.parseString(s[0]);
            modId = modId && src_data__WEBPACK_IMPORTED_MODULE_1__.data.hash[src_data__WEBPACK_IMPORTED_MODULE_1__.data.v0.indexOf(modId)];
            modId = modId ?? NULL;
            // Convert displayRate to V1
            const displayRateV0 = this.parseNumber(s[6]) ?? _store__WEBPACK_IMPORTED_MODULE_3__.Settings.initialSettingsState.displayRate;
            const displayRateV1 = this.zipDiffDisplayRate(displayRateV0, _store__WEBPACK_IMPORTED_MODULE_3__.Settings.initialSettingsState.displayRate);
            params[Section.Settings] = this.zipFields([
                modId,
                displayRateV1,
                params[Section.Mod],
                s[1],
                s[3],
                s[4],
                s[5],
                s[7],
                s[8],
                s[10],
                s[9],
                s[2],
                s[11],
                s[12], // fluidWagonId
            ]);
        }
        else if (params[Section.Mod]) {
            params[Section.Settings] = this.zipFields([
                NULL,
                NULL,
                params[Section.Mod], // Legacy preset
            ]);
        }
        params[Section.Version] = ZipVersion.Version1;
        return this.migrateV1(params, warnings);
    }
    /** Migrates V1 bare zip to latest bare format */
    migrateV1(params, warnings) {
        if (params[Section.Settings]) {
            const zip = params[Section.Settings];
            const s = zip.split(FIELDSEP);
            const index = 11; // Index of expensive field
            if (s.length > index) {
                // Remove expensive field
                const val = s.splice(index, 1);
                const expensive = this.parseBool(val[0]);
                if (expensive) {
                    warnings.push(MigrationWarning.ExpensiveDeprecation);
                }
            }
            params[Section.Settings] = this.zipFields(s);
        }
        params[Section.Version] = ZipVersion.Version4;
        return [params, warnings];
    }
    /** Migrates V2 hash zip to latest hash format */
    migrateV2(params, warnings) {
        if (params[Section.Recipes]) {
            // Convert recipe settings
            const zip = params[Section.Recipes];
            const list = zip.split(LISTSEP);
            const migrated = [];
            const index = 3; // Index of beaconCount field
            for (const recipe of list) {
                const s = recipe.split(FIELDSEP);
                if (s.length > index) {
                    // Convert beaconCount from number to string format
                    const asString = this.parseNNumber(s[index])?.toString();
                    s[index] = this.zipTruthyString(asString);
                }
                migrated.push(this.zipFields(s));
            }
            params[Section.Recipes] = migrated.join(LISTSEP);
        }
        if (params[Section.Factories]) {
            // Convert factory settings
            const zip = params[Section.Factories];
            const list = zip.split(LISTSEP);
            const migrated = [];
            const index = 2; // Index of beaconCount field
            for (const factory of list) {
                const s = factory.split(FIELDSEP);
                if (s.length > index) {
                    // Convert beaconCount from number to string format
                    const asString = this.parseNNumber(s[index])?.toString();
                    s[index] = this.zipTruthyString(asString);
                }
                migrated.push(this.zipFields(s));
            }
            params[Section.Factories] = migrated.join(LISTSEP);
        }
        params[Section.Version] = ZipVersion.Version3;
        return this.migrateV3(params, warnings);
    }
    /** Migrates V3 hash zip to latest hash format */
    migrateV3(params, warnings) {
        if (params[Section.Settings]) {
            const zip = params[Section.Settings];
            const s = zip.split(FIELDSEP);
            const index = 10; // Index of expensive field
            if (s.length > index) {
                // Remove expensive field
                const val = s.splice(index, 1);
                const expensive = this.parseBool(val[0]);
                if (expensive) {
                    warnings.push(MigrationWarning.ExpensiveDeprecation);
                }
            }
            params[Section.Settings] = this.zipFields(s);
        }
        params[Section.Version] = ZipVersion.Version5;
        return [params, warnings];
    }
    displayWarnings(warnings) {
        if (warnings.length) {
            window.alert(warnings.join('\r\n'));
        }
    }
    zipProducts(products, hash) {
        const z = this.zipList(products.map((obj) => {
            const r = _models__WEBPACK_IMPORTED_MODULE_2__.Rational.fromString(obj.rate).toString();
            const t = this.zipDiffNumber(obj.rateType, _models__WEBPACK_IMPORTED_MODULE_2__.RateType.Items);
            return {
                bare: this.zipFields([
                    obj.itemId,
                    r,
                    t,
                    this.zipTruthyString(obj.viaId),
                ]),
                hash: this.zipFields([
                    this.zipTruthyNString(obj.itemId, hash.items),
                    r,
                    t,
                    this.zipTruthyNString(obj.viaId, obj.rateType === _models__WEBPACK_IMPORTED_MODULE_2__.RateType.Factories ? hash.recipes : hash.items),
                ]),
            };
        }));
        return {
            bare: `${Section.Products}=${z.bare}`,
            hash: `${Section.Products}${z.hash}`,
        };
    }
    unzipProducts(params, hash) {
        const list = params[Section.Products].split(LISTSEP);
        const ids = [];
        const entities = {};
        let index = 0;
        for (const product of list) {
            const s = product.split(FIELDSEP);
            let i = 0;
            const id = index.toString();
            let obj;
            if (hash) {
                obj = {
                    id,
                    itemId: this.parseNString(s[i++], hash.items) ?? '',
                    rate: s[i++],
                    rateType: Number(s[i++]) | _models__WEBPACK_IMPORTED_MODULE_2__.RateType.Items,
                };
                obj.viaId = this.parseNString(s[i++], obj.rateType === _models__WEBPACK_IMPORTED_MODULE_2__.RateType.Factories ? hash.recipes : hash.items);
            }
            else {
                obj = {
                    id,
                    itemId: s[i++],
                    rate: s[i++],
                    rateType: Number(s[i++]) | _models__WEBPACK_IMPORTED_MODULE_2__.RateType.Items,
                    viaId: this.parseString(s[i++]),
                };
            }
            Object.keys(obj)
                .filter((k) => obj[k] === undefined)
                .forEach((k) => {
                delete obj[k];
            });
            ids.push(id);
            entities[id] = obj;
            index++;
        }
        return { ids, index, entities };
    }
    zipItems(partial, state, hash) {
        const z = this.zipList(Object.keys(state).map((i) => {
            const obj = state[i];
            const g = this.zipTruthyBool(obj.ignore);
            return {
                bare: this.zipFields([
                    i,
                    g,
                    this.zipTruthyString(obj.beltId),
                    this.zipTruthyString(obj.wagonId),
                    this.zipTruthyString(obj.recipeId),
                ]),
                hash: this.zipFields([
                    this.zipTruthyNString(i, hash.items),
                    g,
                    this.zipTruthyNString(obj.beltId, hash.belts),
                    this.zipTruthyNString(obj.wagonId, hash.wagons),
                    this.zipTruthyNString(obj.recipeId, hash.recipes),
                ]),
            };
        }));
        if (z.bare.length) {
            partial.bare += `&${Section.Items}=${z.bare}`;
            partial.hash += `&${Section.Items}${z.hash}`;
        }
    }
    unzipItems(params, hash) {
        const list = params[Section.Items].split(LISTSEP);
        const entities = {};
        for (const item of list) {
            const s = item.split(FIELDSEP);
            let i = 0;
            let id;
            let obj;
            if (hash) {
                id = this.parseNString(s[i++], hash.items) ?? '';
                obj = {
                    ignore: this.parseBool(s[i++]),
                    beltId: this.parseNString(s[i++], hash.belts),
                    wagonId: this.parseNString(s[i++], hash.wagons),
                    recipeId: this.parseNString(s[i++], hash.recipes),
                };
            }
            else {
                id = s[i++];
                obj = {
                    ignore: this.parseBool(s[i++]),
                    beltId: this.parseString(s[i++]),
                    wagonId: this.parseString(s[i++]),
                    recipeId: this.parseString(s[i++]),
                };
            }
            Object.keys(obj)
                .filter((k) => obj[k] === undefined)
                .forEach((k) => {
                delete obj[k];
            });
            entities[id] = obj;
        }
        return entities;
    }
    zipRecipes(partial, state, hash) {
        const z = this.zipList(Object.keys(state).map((i) => {
            const obj = state[i];
            return {
                bare: this.zipFields([
                    i,
                    this.zipTruthyString(obj.factoryId),
                    this.zipTruthyArray(obj.factoryModuleIds),
                    this.zipTruthyString(obj.beaconCount),
                    this.zipTruthyArray(obj.beaconModuleIds),
                    this.zipTruthyString(obj.beaconId),
                    this.zipTruthyNumber(obj.overclock),
                    this.zipTruthyString(obj.cost),
                    this.zipTruthyString(obj.beaconTotal),
                ]),
                hash: this.zipFields([
                    this.zipTruthyNString(i, hash.recipes),
                    this.zipTruthyNString(obj.factoryId, hash.factories),
                    this.zipTruthyNArray(obj.factoryModuleIds, hash.modules),
                    this.zipTruthyString(obj.beaconCount),
                    this.zipTruthyNArray(obj.beaconModuleIds, hash.modules),
                    this.zipTruthyNString(obj.beaconId, hash.beacons),
                    this.zipTruthyNumber(obj.overclock),
                    this.zipTruthyString(obj.cost),
                    this.zipTruthyString(obj.beaconTotal),
                ]),
            };
        }));
        if (z.bare.length) {
            partial.bare += `&${Section.Recipes}=${z.bare}`;
            partial.hash += `&${Section.Recipes}${z.hash}`;
        }
    }
    unzipRecipes(params, hash) {
        const list = params[Section.Recipes].split(LISTSEP);
        const entities = {};
        for (const recipe of list) {
            const s = recipe.split(FIELDSEP);
            let i = 0;
            let id;
            let obj;
            if (hash) {
                id = this.parseNString(s[i++], hash.recipes) ?? '';
                obj = {
                    factoryId: this.parseNString(s[i++], hash.factories),
                    factoryModuleIds: this.parseNArray(s[i++], hash.modules),
                    beaconCount: this.parseString(s[i++]),
                    beaconModuleIds: this.parseNArray(s[i++], hash.modules),
                    beaconId: this.parseNString(s[i++], hash.beacons),
                    overclock: this.parseNumber(s[i++]),
                    cost: this.parseString(s[i++]),
                    beaconTotal: this.parseString(s[i++]),
                };
            }
            else {
                id = s[i++];
                obj = {
                    factoryId: this.parseString(s[i++]),
                    factoryModuleIds: this.parseArray(s[i++]),
                    beaconCount: this.parseString(s[i++]),
                    beaconModuleIds: this.parseArray(s[i++]),
                    beaconId: this.parseString(s[i++]),
                    overclock: this.parseNumber(s[i++]),
                    cost: this.parseString(s[i++]),
                    beaconTotal: this.parseString(s[i++]),
                };
            }
            Object.keys(obj)
                .filter((k) => obj[k] === undefined)
                .forEach((k) => {
                delete obj[k];
            });
            entities[id] = obj;
        }
        return entities;
    }
    zipFactories(partial, state, hash) {
        const ids = state.ids ? ['', ...state.ids] : Object.keys(state.entities);
        const z = this.zipList(ids.map((i) => {
            const obj = state.entities[i] || {};
            let h = true;
            if (i === '') {
                i = state.ids == null ? '' : TRUE;
                h = false;
            }
            return {
                bare: this.zipFields([
                    i,
                    this.zipTruthyArray(obj.moduleRankIds),
                    this.zipTruthyString(obj.beaconCount),
                    this.zipTruthyString(obj.beaconModuleId),
                    this.zipTruthyString(obj.beaconId),
                    this.zipTruthyNumber(obj.overclock),
                ]),
                hash: this.zipFields([
                    h ? this.zipTruthyNString(i, hash.factories) : i,
                    this.zipTruthyNArray(obj.moduleRankIds, hash.modules),
                    this.zipTruthyString(obj.beaconCount),
                    this.zipTruthyNString(obj.beaconModuleId, hash.modules),
                    this.zipTruthyNString(obj.beaconId, hash.beacons),
                    this.zipTruthyNumber(obj.overclock),
                ]),
            };
        }));
        if (z.bare.length) {
            partial.bare += `&${Section.Factories}=${z.bare}`;
            partial.hash += `&${Section.Factories}${z.hash}`;
        }
    }
    unzipFactories(params, hash) {
        const list = params[Section.Factories].split(LISTSEP);
        let ids;
        const entities = {};
        let loadIds = false;
        for (let z = 0; z < list.length; z++) {
            const factory = list[z];
            const s = factory.split(FIELDSEP);
            let i = 0;
            let id;
            let obj;
            if (hash) {
                id = s[i++];
                obj = {
                    moduleRankIds: this.parseNArray(s[i++], hash.modules),
                    beaconCount: this.parseString(s[i++]),
                    beaconModuleId: this.parseNString(s[i++], hash.modules),
                    beaconId: this.parseNString(s[i++], hash.beacons),
                    overclock: this.parseNumber(s[i++]),
                };
                if (z === 0 && id === TRUE) {
                    loadIds = true;
                    ids = [];
                    id = '';
                }
                else {
                    if (id) {
                        id = this.parseNString(id, hash.factories);
                    }
                    if (loadIds && ids != null) {
                        ids.push(id ?? '');
                    }
                }
            }
            else {
                id = s[i++];
                obj = {
                    moduleRankIds: this.parseArray(s[i++]),
                    beaconCount: this.parseString(s[i++]),
                    beaconModuleId: this.parseString(s[i++]),
                    beaconId: this.parseString(s[i++]),
                    overclock: this.parseNumber(s[i++]),
                };
                if (z === 0 && id === TRUE) {
                    loadIds = true;
                    ids = [];
                    id = '';
                }
                else if (loadIds && ids != null) {
                    ids.push(id);
                }
            }
            Object.keys(obj)
                .filter((k) => obj[k] === undefined)
                .forEach((k) => {
                delete obj[k];
            });
            if (Object.keys(obj).length) {
                entities[id ?? ''] = obj;
            }
        }
        return { ids, entities };
    }
    zipSettings(partial, state, hash) {
        const init = _store__WEBPACK_IMPORTED_MODULE_3__.Settings.initialSettingsState;
        const z = {
            bare: this.zipFields([
                this.zipDiffString(state.modId, init.modId),
                this.zipDiffDisplayRate(state.displayRate, init.displayRate),
                this.zipDiffNumber(state.preset, init.preset),
                this.zipDiffArray(state.disabledRecipeIds, init.disabledRecipeIds),
                this.zipDiffString(state.beltId, init.beltId),
                this.zipDiffString(state.fuelId, init.fuelId),
                this.zipDiffNumber(state.flowRate, init.flowRate),
                this.zipDiffNumber(state.miningBonus, init.miningBonus),
                this.zipDiffNumber(state.researchSpeed, init.researchSpeed),
                this.zipDiffNumber(state.inserterCapacity, init.inserterCapacity),
                this.zipDiffNumber(state.inserterTarget, init.inserterTarget),
                this.zipDiffString(state.cargoWagonId, init.cargoWagonId),
                this.zipDiffString(state.fluidWagonId, init.fluidWagonId),
                this.zipDiffString(state.pipeId, init.pipeId),
                this.zipDiffString(state.costFactor, init.costFactor),
                this.zipDiffString(state.costFactory, init.costFactory),
                this.zipDiffString(state.costInput, init.costInput),
                this.zipDiffString(state.costIgnored, init.costIgnored),
                this.zipDiffString(state.beaconReceivers, init.beaconReceivers),
                this.zipDiffString(state.proliferatorSprayId, init.proliferatorSprayId),
            ]),
            hash: this.zipFields([
                this.zipDiffDisplayRate(state.displayRate, init.displayRate),
                this.zipDiffNumber(state.preset, init.preset),
                this.zipDiffNArray(state.disabledRecipeIds, init.disabledRecipeIds, hash.recipes),
                this.zipDiffNString(state.beltId, init.beltId, hash.belts),
                this.zipDiffNString(state.fuelId, init.fuelId, hash.fuels),
                this.zipDiffNNumber(state.flowRate, init.flowRate),
                this.zipDiffNNumber(state.miningBonus, init.miningBonus),
                this.zipDiffNNumber(state.researchSpeed, init.researchSpeed),
                this.zipDiffNumber(state.inserterCapacity, init.inserterCapacity),
                this.zipDiffNumber(state.inserterTarget, init.inserterTarget),
                this.zipDiffNString(state.cargoWagonId, init.cargoWagonId, hash.wagons),
                this.zipDiffNString(state.fluidWagonId, init.fluidWagonId, hash.wagons),
                this.zipDiffNString(state.pipeId, init.pipeId, hash.belts),
                this.zipDiffString(state.costFactor, init.costFactor),
                this.zipDiffString(state.costFactory, init.costFactory),
                this.zipDiffString(state.costInput, init.costInput),
                this.zipDiffString(state.costIgnored, init.costIgnored),
                this.zipDiffString(state.beaconReceivers, init.beaconReceivers),
                this.zipDiffNString(state.proliferatorSprayId, init.proliferatorSprayId, hash.modules),
            ]),
        };
        if (z.bare.length) {
            partial.bare += `&${Section.Settings}=${encodeURIComponent(z.bare)}`;
            partial.hash += `&${Section.Settings}${z.hash}`;
        }
    }
    unzipSettings(params, hash) {
        const zip = params[Section.Settings];
        const s = zip.split(FIELDSEP);
        let i = 0;
        let obj;
        if (hash) {
            obj = {
                displayRate: this.parseDisplayRate(s[i++]),
                preset: this.parseNumber(s[i++]),
                disabledRecipeIds: this.parseNArray(s[i++], hash.recipes),
                beltId: this.parseNString(s[i++], hash.belts),
                fuelId: this.parseNString(s[i++], hash.fuels),
                flowRate: this.parseNNumber(s[i++]),
                miningBonus: this.parseNNumber(s[i++]),
                researchSpeed: this.parseNNumber(s[i++]),
                inserterCapacity: this.parseNumber(s[i++]),
                inserterTarget: this.parseNumber(s[i++]),
                cargoWagonId: this.parseNString(s[i++], hash.wagons),
                fluidWagonId: this.parseNString(s[i++], hash.wagons),
                pipeId: this.parseNString(s[i++], hash.belts),
                costFactor: this.parseString(s[i++]),
                costFactory: this.parseString(s[i++]),
                costInput: this.parseString(s[i++]),
                costIgnored: this.parseString(s[i++]),
                beaconReceivers: this.parseString(s[i++]),
                proliferatorSprayId: this.parseNString(s[i++], hash.modules),
            };
        }
        else {
            obj = {
                modId: this.parseString(s[i++]),
                displayRate: this.parseDisplayRate(s[i++]),
                preset: this.parseNumber(s[i++]),
                disabledRecipeIds: this.parseArray(s[i++]),
                beltId: this.parseString(s[i++]),
                fuelId: this.parseString(s[i++]),
                flowRate: this.parseNumber(s[i++]),
                miningBonus: this.parseNumber(s[i++]),
                researchSpeed: this.parseNumber(s[i++]),
                inserterCapacity: this.parseNumber(s[i++]),
                inserterTarget: this.parseNumber(s[i++]),
                cargoWagonId: this.parseString(s[i++]),
                fluidWagonId: this.parseString(s[i++]),
                pipeId: this.parseString(s[i++]),
                costFactor: this.parseString(s[i++]),
                costFactory: this.parseString(s[i++]),
                costInput: this.parseString(s[i++]),
                costIgnored: this.parseString(s[i++]),
                beaconReceivers: this.parseString(s[i++]),
                proliferatorSprayId: this.parseString(s[i++]),
            };
        }
        Object.keys(obj)
            .filter((k) => obj[k] === undefined)
            .forEach((k) => {
            delete obj[k];
        });
        return obj;
    }
    zipList(list) {
        return {
            bare: encodeURIComponent(list.map((i) => i.bare).join(LISTSEP)),
            hash: list.map((i) => i.hash).join(LISTSEP),
        };
    }
    zipFields(fields) {
        return fields.join(FIELDSEP).replace(/\**$/, '');
    }
    zipTruthyString(value) {
        return value == null ? '' : value;
    }
    zipTruthyNumber(value) {
        return value == null ? '' : value.toString();
    }
    zipTruthyBool(value) {
        return value == null ? '' : value ? TRUE : FALSE;
    }
    zipTruthyArray(value) {
        return value == null ? '' : value.length ? value.join(ARRAYSEP) : EMPTY;
    }
    zipTruthyNString(value, hash) {
        return value == null ? '' : this.getId(hash.indexOf(value));
    }
    zipTruthyNArray(value, hash) {
        return value == null
            ? ''
            : value.length
                ? value.map((v) => this.getId(hash.indexOf(v))).join(ARRAYSEP)
                : EMPTY;
    }
    zipDiffString(value, init) {
        return value === init ? '' : value == null ? NULL : value;
    }
    zipDiffNumber(value, init) {
        return value === init ? '' : value == null ? NULL : value.toString();
    }
    zipDiffDisplayRate(value, init) {
        if (value === init) {
            return '';
        }
        switch (value) {
            case _models__WEBPACK_IMPORTED_MODULE_2__.DisplayRate.PerSecond:
                return '0';
            case _models__WEBPACK_IMPORTED_MODULE_2__.DisplayRate.PerMinute:
                return '1';
            case _models__WEBPACK_IMPORTED_MODULE_2__.DisplayRate.PerHour:
                return '2';
            default:
                return NULL;
        }
    }
    zipDiffBool(value, init) {
        return value === init ? '' : value == null ? NULL : value ? TRUE : FALSE;
    }
    zipDiffArray(value, init) {
        const zVal = value != null
            ? value.length > 0
                ? [...value].sort().join(ARRAYSEP)
                : EMPTY
            : NULL;
        const zInit = init != null
            ? init.length > 0
                ? [...init].sort().join(ARRAYSEP)
                : EMPTY
            : NULL;
        return zVal === zInit ? '' : zVal;
    }
    zipDiffRank(value, init) {
        const zVal = value ? (value.length ? value.join(ARRAYSEP) : EMPTY) : NULL;
        const zInit = init ? (init.length ? init.join(ARRAYSEP) : EMPTY) : NULL;
        return zVal === zInit ? '' : zVal;
    }
    zipDiffNString(value, init, hash) {
        return value === init
            ? ''
            : value == null
                ? NULL
                : this.getId(hash.indexOf(value));
    }
    zipDiffNNumber(value, init) {
        return value === init ? '' : value == null ? NULL : this.getId(value);
    }
    zipDiffNArray(value, init, hash) {
        const zVal = value != null
            ? value.length > 0
                ? value
                    .map((v) => this.getId(hash.indexOf(v)))
                    .sort()
                    .join(ARRAYSEP)
                : EMPTY
            : NULL;
        const zInit = init != null
            ? init.length > 0
                ? init
                    .map((v) => this.getId(hash.indexOf(v)))
                    .sort()
                    .join(ARRAYSEP)
                : EMPTY
            : NULL;
        return zVal === zInit ? '' : zVal;
    }
    zipDiffNRank(value, init, hash) {
        const zVal = value
            ? value.length
                ? value.map((v) => this.getId(hash.indexOf(v))).join(ARRAYSEP)
                : EMPTY
            : NULL;
        const zInit = init
            ? init.length
                ? init.map((v) => this.getId(hash.indexOf(v))).join(ARRAYSEP)
                : EMPTY
            : NULL;
        return zVal === zInit ? '' : zVal;
    }
    parseString(value) {
        if (!value?.length || value === NULL) {
            return undefined;
        }
        return value;
    }
    parseBool(value) {
        if (!value?.length || value === NULL) {
            return undefined;
        }
        return value === TRUE;
    }
    parseNumber(value) {
        if (!value?.length || value === NULL) {
            return undefined;
        }
        return Number(value);
    }
    parseDisplayRate(value) {
        if (!value?.length || value === NULL) {
            return undefined;
        }
        switch (value) {
            case '0':
                return _models__WEBPACK_IMPORTED_MODULE_2__.DisplayRate.PerSecond;
            case '1':
                return _models__WEBPACK_IMPORTED_MODULE_2__.DisplayRate.PerMinute;
            case '2':
                return _models__WEBPACK_IMPORTED_MODULE_2__.DisplayRate.PerHour;
            default:
                return undefined;
        }
    }
    parseArray(value) {
        if (!value?.length || value === NULL) {
            return undefined;
        }
        return value === EMPTY ? [] : value.split(ARRAYSEP);
    }
    parseNString(value, hash) {
        const v = this.parseString(value);
        if (v == null) {
            return v;
        }
        return hash[this.getN(v)];
    }
    parseNNumber(value) {
        if (!value?.length || value === NULL) {
            return undefined;
        }
        return this.getN(value);
    }
    parseNArray(value, hash) {
        const v = this.parseArray(value);
        if (v == null) {
            return v;
        }
        return v.map((a) => hash[this.getN(a)]);
    }
    getId(n) {
        if (n / MAX >= 1) {
            return this.getId(Math.floor(n / MAX)) + this.getId(n % MAX);
        }
        else {
            return BASE64ABC[n];
        }
    }
    getN(id) {
        const n = INVERT[id[0]];
        if (id.length > 1) {
            id = id.substring(1);
            return n * Math.pow(MAX, id.length) + this.getN(id);
        }
        else {
            return n;
        }
    }
    getBase64Code(charCode) {
        if (charCode >= this.base64codes.length) {
            throw new Error('Unable to parse base64 string.');
        }
        const code = this.base64codes[charCode];
        if (code === 255) {
            throw new Error('Unable to parse base64 string.');
        }
        return code;
    }
    bytesToBase64(bytes) {
        let result = '';
        let i;
        const l = bytes.length;
        for (i = 2; i < l; i += 3) {
            result += BASE64ABC[bytes[i - 2] >> 2];
            result += BASE64ABC[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
            result += BASE64ABC[((bytes[i - 1] & 0x0f) << 2) | (bytes[i] >> 6)];
            result += BASE64ABC[bytes[i] & 0x3f];
        }
        if (i === l + 1) {
            // 1 octet yet to write
            result += BASE64ABC[bytes[i - 2] >> 2];
            result += BASE64ABC[(bytes[i - 2] & 0x03) << 4];
            result += '__';
        }
        if (i === l) {
            // 2 octets yet to write
            result += BASE64ABC[bytes[i - 2] >> 2];
            result += BASE64ABC[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
            result += BASE64ABC[(bytes[i - 1] & 0x0f) << 2];
            result += '_';
        }
        return result;
    }
    inflateSafe(str) {
        try {
            return this.inflate(str);
        }
        catch {
            console.warn('Router failed to parse url, checking for missing trailing characters...');
        }
        try {
            return this.inflateMend(str, '-');
        }
        catch { }
        try {
            return this.inflateMend(str, '.');
        }
        catch { }
        return this.inflateMend(str, '_');
    }
    inflateMend(str, char) {
        const z = this.inflate(str + char);
        if (!z)
            throw new Error('Failed to parse, generated empty string');
        console.warn(`Router mended url by appending '${char}'`);
        return z;
    }
    inflate(str) {
        return (0,pako__WEBPACK_IMPORTED_MODULE_0__.inflate)(this.base64ToBytes(str), { to: 'string' });
    }
    base64ToBytes(str) {
        if (str.length % 4 !== 0) {
            throw new Error('Unable to parse base64 string.');
        }
        const index = str.indexOf('_');
        if (index !== -1 && index < str.length - 2) {
            throw new Error('Unable to parse base64 string.');
        }
        const missingOctets = str.endsWith('__') ? 2 : str.endsWith('_') ? 1 : 0;
        const n = str.length;
        const result = new Uint8Array(3 * (n / 4));
        let buffer;
        for (let i = 0, j = 0; i < n; i += 4, j += 3) {
            buffer =
                (this.getBase64Code(str.charCodeAt(i)) << 18) |
                    (this.getBase64Code(str.charCodeAt(i + 1)) << 12) |
                    (this.getBase64Code(str.charCodeAt(i + 2)) << 6) |
                    this.getBase64Code(str.charCodeAt(i + 3));
            result[j] = buffer >> 16;
            result[j + 1] = (buffer >> 8) & 0xff;
            result[j + 2] = buffer & 0xff;
        }
        return result.subarray(0, result.length - missingOctets);
    }
}
RouterService.ɵfac = function RouterService_Factory(t) { return new (t || RouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_11__.GoogleAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService)); };
RouterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: RouterService, factory: RouterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1215:
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var src_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments */ 7791);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-google-analytics */ 992);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);










class StateService {
    constructor(meta, gaSvc, store, translateSvc) {
        this.meta = meta;
        this.gaSvc = gaSvc;
        this.store = store;
        this.translateSvc = translateSvc;
    }
    initialize() {
        this.gaSvc.event('version', src_environments__WEBPACK_IMPORTED_MODULE_0__.environment.version);
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Settings.getGame).subscribe((game) => {
            this.gaSvc.event('set_game', game);
            this.meta.updateTag({
                name: 'description',
                content: `A feature-rich production calculator for ${_models__WEBPACK_IMPORTED_MODULE_1__.gameInfo[game].meta} and similar games.
Determine resource and factory requirements for your desired output products.`,
            });
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Preferences.getLanguage).subscribe((lang) => {
            this.translateSvc.use(lang);
            this.gaSvc.event('set_lang', lang);
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Settings.getModId).subscribe((modId) => {
            this.gaSvc.event('set_mod_id', modId);
        });
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Products.checkViaState).subscribe((s) => {
            for (const product of s.products) {
                if (product.viaId &&
                    product.viaId !== product.itemId &&
                    product.rate.nonzero() &&
                    s.rates[product.id].isZero()) {
                    // Reset invalid viaId
                    // This normally occurs when a chosen viaId no longer appears in the result steps
                    // Usually due to some parent item/recipe being ignored or recipe disabled
                    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_2__.Products.ResetViaAction(product.id));
                }
            }
        });
        // Used only in development to update hash files
        // istanbul ignore next
        if (src_environments__WEBPACK_IMPORTED_MODULE_0__.environment.debug) {
            this.checkHash();
        }
    }
    // Used only in development to update hash files
    // istanbul ignore next
    checkHash() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Settings.getModId),
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__.Settings.getDataset),
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(([modId, data]) => data.categoryIds.length > 0 && data.hash != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
            .subscribe(([modId, data]) => {
            console.log(modId);
            const oldDisabled = data.defaults?.disabledRecipeIds ?? [];
            const neededRecipes = Object.keys(data.itemRecipeId).map((i) => data.itemRecipeId[i]);
            const suggestedDisabled = data.complexRecipeIds.filter((i) => neededRecipes.indexOf(i) === -1 && !data.itemEntities[i]);
            if (JSON.stringify(oldDisabled) !== JSON.stringify(suggestedDisabled)) {
                console.log(`Suggested disabled recipes (${suggestedDisabled.length}):`);
                console.log(JSON.stringify(suggestedDisabled));
            }
            else {
                console.log('No suggested changes to default disabled recipes');
            }
            if (data.hash) {
                const hash = {
                    items: [...data.hash.items],
                    beacons: [...data.hash.beacons],
                    belts: [...data.hash.belts],
                    fuels: [...data.hash.fuels],
                    wagons: [...data.hash.wagons],
                    factories: [...data.hash.factories],
                    modules: [...data.hash.modules],
                    recipes: [...data.hash.recipes],
                };
                const old = JSON.stringify(hash);
                for (const id of [...data.itemIds]
                    .sort()
                    .filter((i) => hash.items.indexOf(i) === -1)) {
                    hash.items.push(id);
                }
                for (const id of [...data.beaconIds]
                    .sort()
                    .filter((i) => hash.beacons.indexOf(i) === -1)) {
                    hash.beacons.push(id);
                }
                for (const id of [...data.beltIds, ...data.pipeIds]
                    .sort()
                    .filter((i) => hash.belts.indexOf(i) === -1)) {
                    hash.belts.push(id);
                }
                if (data.fuelIds[_models__WEBPACK_IMPORTED_MODULE_1__.FuelType.Chemical]) {
                    for (const id of [...data.fuelIds[_models__WEBPACK_IMPORTED_MODULE_1__.FuelType.Chemical]]
                        .sort()
                        .filter((i) => hash.fuels.indexOf(i) === -1)) {
                        hash.fuels.push(id);
                    }
                }
                for (const id of [...data.cargoWagonIds, ...data.fluidWagonIds]
                    .sort()
                    .filter((i) => hash.wagons.indexOf(i) === -1)) {
                    hash.wagons.push(id);
                }
                for (const id of [...data.factoryIds]
                    .sort()
                    .filter((i) => hash.factories.indexOf(i) === -1)) {
                    hash.factories.push(id);
                }
                for (const id of [...data.moduleIds]
                    .sort()
                    .filter((i) => hash.modules.indexOf(i) === -1)) {
                    hash.modules.push(id);
                }
                for (const id of [...data.recipeIds]
                    .sort()
                    .filter((i) => hash.recipes.indexOf(i) === -1)) {
                    hash.recipes.push(id);
                }
                if (old === JSON.stringify(hash)) {
                    console.log('No change in hash');
                }
                else {
                    console.log('New hash:');
                    console.log(JSON.stringify(hash));
                }
            }
            if (data.defaults) {
                const filteredDisabledRecipeIds = data.defaults.disabledRecipeIds.filter((a) => data.complexRecipeIds.some((b) => b === a));
                if (filteredDisabledRecipeIds.length !==
                    data.defaults.disabledRecipeIds.length) {
                    console.log(`Filtered disabled recipes (${filteredDisabledRecipeIds.length}):`);
                    console.log(JSON.stringify(filteredDisabledRecipeIds));
                }
                else {
                    console.log('No unrecognized disabled recipes');
                }
            }
            const invalidRecipes = [];
            for (const id of data.recipeIds) {
                if (!data.recipeEntities[id].producers?.length) {
                    invalidRecipes.push(id);
                }
            }
            if (invalidRecipes.length) {
                console.log(`Found recipes with no producers: (${invalidRecipes.length}):`);
                console.log(JSON.stringify(invalidRecipes));
            }
        });
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_8__.GoogleAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService)); };
StateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);







const LAB_ICON_STYLE_ID = 'lab-icon-css';
const LAB_THEME_STYLE_ID = 'lab-theme-css';
class ThemeService {
    constructor(document, store) {
        this.document = document;
        this.store = store;
        this.head = this.document.getElementsByTagName('head')[0];
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        const prefersDark$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(prefersDark, 'change').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(prefersDark), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((list) => list.matches));
        this.theme$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
            this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Preferences.getTheme),
            prefersDark$,
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(([theme, prefersDark]) => {
            if (theme === _models__WEBPACK_IMPORTED_MODULE_0__.Theme.System) {
                // Don't need to test media query specifically
                // istanbul ignore next
                return prefersDark ? _models__WEBPACK_IMPORTED_MODULE_0__.Theme.Dark : _models__WEBPACK_IMPORTED_MODULE_0__.Theme.Light;
            }
            return theme;
        }));
    }
    initialize() {
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getDataset).subscribe((data) => {
            // Generate .lab-icon::before css rules stylesheet
            const old = this.document.getElementById(LAB_ICON_STYLE_ID);
            if (old) {
                this.head.removeChild(old);
            }
            const style = this.document.createElement('style');
            style.id = LAB_ICON_STYLE_ID;
            let css = '';
            data.iconIds.forEach((i) => {
                const icon = data.iconEntities[i];
                css += `.${i}::before { background-image: url("${icon.file}"); background-position: ${icon.position}; } `;
            });
            data.itemIds
                .filter((i) => data.itemEntities[i].icon)
                .forEach((i) => {
                const icon = data.iconEntities[data.itemEntities[i].icon];
                css += `.${i}.item::before { background-image: url("${icon.file}"); background-position: ${icon.position}; } `;
            });
            data.recipeIds
                .filter((i) => data.recipeEntities[i].icon)
                .forEach((i) => {
                const icon = data.iconEntities[data.recipeEntities[i].icon];
                css += `.${i}.recipe::before { background-image: url("${icon.file}"); background-position: ${icon.position}; } `;
            });
            data.categoryIds
                .filter((i) => data.categoryEntities[i].icon)
                .forEach((i) => {
                const icon = data.iconEntities[data.categoryEntities[i].icon];
                css += `.${i}.category::before { background-image: url("${icon.file}"); background-position: ${icon.position}; } `;
            });
            style.innerText = css;
            this.head.appendChild(style);
        });
        this.theme$.subscribe((theme) => {
            const themeLink = this.document.getElementById(LAB_THEME_STYLE_ID);
            if (themeLink) {
                const href = theme === _models__WEBPACK_IMPORTED_MODULE_0__.Theme.Dark ? 'theme-dark.css' : 'theme-light.css';
                if (!themeLink.href.endsWith(href)) {
                    // Need to switch theme, href has changed
                    // Create a temporary link tag to load the new style sheet
                    // Leave old href in place and wait for the new sheet to load
                    const tempLink = this.document.createElement('link');
                    tempLink.rel = 'stylesheet';
                    tempLink.href = href;
                    tempLink.onload = () => {
                        // New style sheet has loaded, update the main themeLink and delete the temporary link
                        themeLink.href = href;
                        this.head.removeChild(tempLink);
                    };
                    this.head.appendChild(tempLink);
                }
            }
        });
    }
    /**
     * Used to set up the initial theme without loading the full store.
     * Helps to prevent flashing that can occur if UI loads light theme and swaps to dark at runtime.
     * Unsafe to inject the full store in the app initializer because WASM may not be loaded yet.
     */
    static appInitTheme() {
        const state = _utilities__WEBPACK_IMPORTED_MODULE_2__.BrowserUtility.storedState;
        const theme = state?.preferencesState?.theme ??
            _store__WEBPACK_IMPORTED_MODULE_1__.Preferences.initialPreferencesState.theme;
        if (theme === _models__WEBPACK_IMPORTED_MODULE_0__.Theme.Light)
            return; // No action required
        if (theme === _models__WEBPACK_IMPORTED_MODULE_0__.Theme.Dark ||
            window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Need to switch to dark theme before app starts
            const themeLink = window.document.getElementById(LAB_THEME_STYLE_ID);
            if (themeLink) {
                themeLink.href = 'theme-dark.css';
            }
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9467:
/*!*******************************************!*\
  !*** ./src/app/services/track.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackService": () => (/* binding */ TrackService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TrackService {
    trackById(i, obj) {
        return obj.id;
    }
    trackByKey(i, r) {
        return r.key;
    }
    sortByValue(a, b) {
        return b.value.sub(a.value).toNumber();
    }
}
TrackService.ɵfac = function TrackService_Factory(t) { return new (t || TrackService)(); };
TrackService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrackService, factory: TrackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1926:
/*!********************************************!*\
  !*** ./src/app/store/analytics.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsEffects": () => (/* binding */ AnalyticsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-analytics */ 992);





class AnalyticsEffects {
    constructor(gaSvc, actions$) {
        this.gaSvc = gaSvc;
        this.actions$ = actions$;
        this.logEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)((action) => {
            this.gaSvc.event('action', action.type);
        })), { dispatch: false });
    }
}
AnalyticsEffects.ɵfac = function AnalyticsEffects_Factory(t) { return new (t || AnalyticsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__.GoogleAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions)); };
AnalyticsEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AnalyticsEffects, factory: AnalyticsEffects.ɵfac });


/***/ }),

/***/ 5294:
/*!**************************************!*\
  !*** ./src/app/store/app.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppActionType": () => (/* binding */ AppActionType),
/* harmony export */   "LoadAction": () => (/* binding */ LoadAction),
/* harmony export */   "ResetAction": () => (/* binding */ ResetAction)
/* harmony export */ });
var AppActionType;
(function (AppActionType) {
    AppActionType["LOAD"] = "[App] Load";
    AppActionType["RESET"] = "[App] Reset";
})(AppActionType || (AppActionType = {}));
class LoadAction {
    constructor(payload) {
        this.payload = payload;
        this.type = AppActionType.LOAD;
    }
}
class ResetAction {
    constructor() {
        this.type = AppActionType.RESET;
    }
}


/***/ }),

/***/ 5096:
/*!****************************************************!*\
  !*** ./src/app/store/datasets/datasets.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadModAction": () => (/* binding */ LoadModAction)
/* harmony export */ });
class LoadModAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Datasets] Load Mod" /* DatasetsActionType.LOAD_MOD */;
    }
}


/***/ }),

/***/ 2352:
/*!****************************************************!*\
  !*** ./src/app/store/datasets/datasets.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetsEffects": () => (/* binding */ DatasetsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.actions */ 5294);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products */ 8304);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ 2609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/services */ 1866);








class DatasetsEffects {
    constructor(actions$, dataSvc) {
        this.actions$ = actions$;
        this.dataSvc = dataSvc;
        this.appLoad$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppActionType.LOAD), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((a) => {
            const id = a.payload.settingsState?.modId || _settings__WEBPACK_IMPORTED_MODULE_2__.initialSettingsState.modId;
            return this.dataSvc.requestData(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(() => !a.payload.productsState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([data]) => new _products__WEBPACK_IMPORTED_MODULE_1__.ResetAction(data.items[0].id)));
        })));
        this.appReset$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.AppActionType.RESET), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.dataSvc
            .requestData(_settings__WEBPACK_IMPORTED_MODULE_2__.initialSettingsState.modId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([data]) => new _products__WEBPACK_IMPORTED_MODULE_1__.ResetAction(data.items[0].id))))));
        this.setModId$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)("[Settings] Set Mod" /* Settings.SettingsActionType.SET_MOD */), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((a) => this.dataSvc
            .requestData(a.payload)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([data]) => new _products__WEBPACK_IMPORTED_MODULE_1__.ResetAction(data.items[0].id))))));
    }
}
DatasetsEffects.ɵfac = function DatasetsEffects_Factory(t) { return new (t || DatasetsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
DatasetsEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: DatasetsEffects, factory: DatasetsEffects.ɵfac });


/***/ }),

/***/ 6521:
/*!****************************************************!*\
  !*** ./src/app/store/datasets/datasets.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "datasetsReducer": () => (/* binding */ datasetsReducer),
/* harmony export */   "initialDatasetsState": () => (/* binding */ initialDatasetsState)
/* harmony export */ });
/* harmony import */ var src_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/data */ 8755);

const initialDatasetsState = {
    ...src_data__WEBPACK_IMPORTED_MODULE_0__.data,
    dataEntities: {},
    hashEntities: {},
    i18nEntities: {},
};
function datasetsReducer(state = initialDatasetsState, action) {
    switch (action.type) {
        case "[Datasets] Load Mod" /* DatasetsActionType.LOAD_MOD */:
            return {
                ...state,
                ...{
                    dataEntities: action.payload.data
                        ? {
                            ...state.dataEntities,
                            ...{ [action.payload.data.id]: action.payload.data.value },
                        }
                        : state.dataEntities,
                    hashEntities: action.payload.hash
                        ? {
                            ...state.hashEntities,
                            ...{ [action.payload.hash.id]: action.payload.hash.value },
                        }
                        : state.hashEntities,
                    i18nEntities: action.payload.i18n
                        ? {
                            ...state.i18nEntities,
                            ...{ [action.payload.i18n.id]: action.payload.i18n.value },
                        }
                        : state.i18nEntities,
                },
            };
        default:
            return state;
    }
}


/***/ }),

/***/ 6819:
/*!******************************************************!*\
  !*** ./src/app/store/datasets/datasets.selectors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "datasetsState": () => (/* binding */ datasetsState),
/* harmony export */   "getAppData": () => (/* binding */ getAppData),
/* harmony export */   "getDataEntities": () => (/* binding */ getDataEntities),
/* harmony export */   "getHashEntities": () => (/* binding */ getHashEntities),
/* harmony export */   "getI18nEntities": () => (/* binding */ getI18nEntities),
/* harmony export */   "getModEntities": () => (/* binding */ getModEntities),
/* harmony export */   "getModInfoEntities": () => (/* binding */ getModInfoEntities),
/* harmony export */   "getModSets": () => (/* binding */ getModSets)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

/* Base selector functions */
const datasetsState = (state) => state.datasetsState;
const getAppData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(datasetsState, (state) => state.app);
const getModSets = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(datasetsState, (state) => state.mods);
const getDataEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(datasetsState, (state) => state.dataEntities);
const getI18nEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(datasetsState, (state) => state.i18nEntities);
const getHashEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(datasetsState, (state) => state.hashEntities);
/* Complex selectors */
const getModInfoEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getModSets, (mods) => mods.reduce((e, m) => {
    e[m.id] = m;
    return e;
}, {}));
const getModEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getModSets, getDataEntities, (mods, entities) => mods.reduce((e, m) => {
    if (entities[m.id]) {
        e[m.id] = { ...m, ...entities[m.id] };
    }
    return e;
}, {}));


/***/ }),

/***/ 9490:
/*!*****************************************!*\
  !*** ./src/app/store/datasets/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadModAction": () => (/* reexport safe */ _datasets_actions__WEBPACK_IMPORTED_MODULE_0__.LoadModAction),
/* harmony export */   "datasetsReducer": () => (/* reexport safe */ _datasets_reducer__WEBPACK_IMPORTED_MODULE_1__.datasetsReducer),
/* harmony export */   "datasetsState": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.datasetsState),
/* harmony export */   "getAppData": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.getAppData),
/* harmony export */   "getDataEntities": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.getDataEntities),
/* harmony export */   "getHashEntities": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.getHashEntities),
/* harmony export */   "getI18nEntities": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.getI18nEntities),
/* harmony export */   "getModEntities": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.getModEntities),
/* harmony export */   "getModInfoEntities": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.getModInfoEntities),
/* harmony export */   "getModSets": () => (/* reexport safe */ _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__.getModSets),
/* harmony export */   "initialDatasetsState": () => (/* reexport safe */ _datasets_reducer__WEBPACK_IMPORTED_MODULE_1__.initialDatasetsState)
/* harmony export */ });
/* harmony import */ var _datasets_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets.actions */ 5096);
/* harmony import */ var _datasets_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasets.reducer */ 6521);
/* harmony import */ var _datasets_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasets.selectors */ 6819);





/***/ }),

/***/ 2385:
/*!******************************************************!*\
  !*** ./src/app/store/factories/factories.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAction": () => (/* binding */ AddAction),
/* harmony export */   "LowerAction": () => (/* binding */ LowerAction),
/* harmony export */   "RaiseAction": () => (/* binding */ RaiseAction),
/* harmony export */   "RemoveAction": () => (/* binding */ RemoveAction),
/* harmony export */   "SetBeaconAction": () => (/* binding */ SetBeaconAction),
/* harmony export */   "SetBeaconCountAction": () => (/* binding */ SetBeaconCountAction),
/* harmony export */   "SetBeaconModuleAction": () => (/* binding */ SetBeaconModuleAction),
/* harmony export */   "SetFactoryAction": () => (/* binding */ SetFactoryAction),
/* harmony export */   "SetModuleRankAction": () => (/* binding */ SetModuleRankAction),
/* harmony export */   "SetOverclockAction": () => (/* binding */ SetOverclockAction)
/* harmony export */ });
class AddAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Add" /* FactoriesActionType.ADD */;
    }
}
class RemoveAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Remove" /* FactoriesActionType.REMOVE */;
    }
}
class RaiseAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Raise" /* FactoriesActionType.RAISE */;
    }
}
class LowerAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Lower" /* FactoriesActionType.LOWER */;
    }
}
class SetFactoryAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Set Factory" /* FactoriesActionType.SET_FACTORY */;
    }
}
class SetModuleRankAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Set Module Rank" /* FactoriesActionType.SET_MODULE_RANK */;
    }
}
class SetBeaconCountAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Set Beacon Count" /* FactoriesActionType.SET_BEACON_COUNT */;
    }
}
class SetBeaconAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Set Beacon" /* FactoriesActionType.SET_BEACON */;
    }
}
class SetBeaconModuleAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Set Beacon Module" /* FactoriesActionType.SET_BEACON_MODULE */;
    }
}
class SetOverclockAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Factories] Set Overclock" /* FactoriesActionType.SET_OVERCLOCK */;
    }
}


/***/ }),

/***/ 714:
/*!******************************************************!*\
  !*** ./src/app/store/factories/factories.effects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactoriesEffects": () => (/* binding */ FactoriesEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes */ 7542);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ 2609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);








class FactoriesEffects {
    constructor(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
        /** Resets recipe settings that are invalidated by changes to factory settings */
        this.resetRecipeSettings$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)("[Factories] Add" /* FactoriesActionType.ADD */, "[Factories] Remove" /* FactoriesActionType.REMOVE */, "[Factories] Raise" /* FactoriesActionType.RAISE */, "[Factories] Set Factory" /* FactoriesActionType.SET_FACTORY */), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.store.select(_recipes__WEBPACK_IMPORTED_MODULE_1__.recipesState),
            this.store.select(_recipes__WEBPACK_IMPORTED_MODULE_1__.getRecipeSettings),
            this.store.select(_settings__WEBPACK_IMPORTED_MODULE_2__.getDataset),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.first)())), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(([rawSettings, recipeSettings, data]) => {
            const effects = [];
            // Look for recipe settings with module effects specified
            for (const i of Object.keys(rawSettings)) {
                const r = rawSettings[i];
                if (r &&
                    (r.factoryModuleIds != null ||
                        r.beaconCount != null ||
                        r.beaconId != null ||
                        r.beaconModuleIds != null)) {
                    // Check that these recipe settings are still valid
                    const factoryId = recipeSettings[i].factoryId;
                    if (factoryId) {
                        const factory = data.factoryEntities[factoryId];
                        const recipe = data.recipeEntities[i];
                        if (!_utilities__WEBPACK_IMPORTED_MODULE_0__.RecipeUtility.allowsModules(recipe, factory) ||
                            (r.factoryModuleIds &&
                                r.factoryModuleIds.length !== factory.modules)) {
                            // Factory does not support module effects, reset these settings
                            effects.push(new _recipes__WEBPACK_IMPORTED_MODULE_1__.ResetRecipeModulesAction(i));
                        }
                    }
                }
            }
            return effects;
        })));
    }
}
FactoriesEffects.ɵfac = function FactoriesEffects_Factory(t) { return new (t || FactoriesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
FactoriesEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: FactoriesEffects, factory: FactoriesEffects.ɵfac });


/***/ }),

/***/ 9527:
/*!******************************************************!*\
  !*** ./src/app/store/factories/factories.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "factoriesReducer": () => (/* binding */ factoriesReducer),
/* harmony export */   "initialFactoriesState": () => (/* binding */ initialFactoriesState)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.actions */ 5294);


const initialFactoriesState = {
    entities: {},
};
function factoriesReducer(state = initialFactoriesState, action) {
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__.AppActionType.LOAD:
            return { ...initialFactoriesState, ...action.payload.factoriesState };
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__.AppActionType.RESET:
        case "[Settings] Set Mod" /* Settings.SettingsActionType.SET_MOD */:
        case "[Settings] Set Preset" /* Settings.SettingsActionType.SET_PRESET */:
            return initialFactoriesState;
        case "[Factories] Add" /* FactoriesActionType.ADD */: {
            const value = [
                ...(state.ids ?? action.payload.def ?? []),
                action.payload.value,
            ];
            const ids = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareRank(value, action.payload.def);
            return { ...state, ...{ ids } };
        }
        case "[Factories] Remove" /* FactoriesActionType.REMOVE */: {
            const value = (state.ids ?? action.payload.def ?? []).filter((i) => i !== action.payload.value);
            const ids = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareRank(value, action.payload.def);
            const newState = {
                ...state,
                ...{ ids, entities: { ...state.entities } },
            };
            delete newState.entities[action.payload.value];
            return newState;
        }
        case "[Factories] Raise" /* FactoriesActionType.RAISE */: {
            const value = [...(state.ids ?? action.payload.def ?? [])];
            const i = value.indexOf(action.payload.value);
            if (i !== -1 && i > 0) {
                value.splice(i - 1, 0, value.splice(i, 1)[0]);
                const ids = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareRank(value, action.payload.def);
                return { ...state, ...{ ids } };
            }
            return state;
        }
        case "[Factories] Lower" /* FactoriesActionType.LOWER */: {
            const value = [...(state.ids ?? action.payload.def ?? [])];
            const i = value.indexOf(action.payload.value);
            if (i !== -1 && i < value.length - 1) {
                value.splice(i + 1, 0, value.splice(i, 1)[0]);
                const ids = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareRank(value, action.payload.def);
                return { ...state, ...{ ids } };
            }
            return state;
        }
        case "[Factories] Set Factory" /* FactoriesActionType.SET_FACTORY */: {
            const value = [...(state.ids ?? action.payload.def ?? [])];
            const i = value.indexOf(action.payload.id);
            if (i !== -1) {
                value[i] = action.payload.value;
                const ids = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareRank(value, action.payload.def);
                const newState = {
                    ...state,
                    ...{ ids, entities: { ...state.entities } },
                };
                if (newState.entities[action.payload.id]) {
                    newState.entities[action.payload.value] =
                        newState.entities[action.payload.id];
                    delete newState.entities[action.payload.id];
                }
                return newState;
            }
            return state;
        }
        case "[Factories] Set Module Rank" /* FactoriesActionType.SET_MODULE_RANK */: {
            const entities = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state.entities, 'moduleRankIds', action.payload, true);
            return { ...state, ...{ entities } };
        }
        case "[Factories] Set Beacon Count" /* FactoriesActionType.SET_BEACON_COUNT */: {
            const entities = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state.entities, 'beaconCount', action.payload);
            return { ...state, ...{ entities } };
        }
        case "[Factories] Set Beacon" /* FactoriesActionType.SET_BEACON */: {
            const entities = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state.entities, 'beaconId', action.payload);
            return { ...state, ...{ entities } };
        }
        case "[Factories] Set Beacon Module" /* FactoriesActionType.SET_BEACON_MODULE */: {
            const entities = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state.entities, 'beaconModuleId', action.payload);
            return { ...state, ...{ entities } };
        }
        case "[Factories] Set Overclock" /* FactoriesActionType.SET_OVERCLOCK */: {
            const entities = _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state.entities, 'overclock', action.payload);
            return { ...state, ...{ entities } };
        }
        default:
            return state;
    }
}


/***/ }),

/***/ 261:
/*!********************************************************!*\
  !*** ./src/app/store/factories/factories.selectors.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "factoriesState": () => (/* binding */ factoriesState),
/* harmony export */   "getFactories": () => (/* binding */ getFactories),
/* harmony export */   "getFactoryOptions": () => (/* binding */ getFactoryOptions),
/* harmony export */   "getFactoryRows": () => (/* binding */ getFactoryRows)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ 2609);



/* Base selector functions */
const factoriesState = (state) => state.factoriesState;
/* Complex selectors */
const getFactories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(factoriesState, _settings__WEBPACK_IMPORTED_MODULE_1__.getDefaults, _settings__WEBPACK_IMPORTED_MODULE_1__.getDataset, (state, defaults, data) => {
    const ids = state.ids || defaults?.factoryRankIds || [];
    const entities = {};
    const def = { ...state.entities[''] };
    def.moduleRankIds = def.moduleRankIds || defaults?.moduleRankIds || [];
    if (data.game === _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio) {
        def.beaconCount = def.beaconCount || defaults?.beaconCount;
    }
    def.beaconId = def.beaconId || defaults?.beaconId;
    def.beaconModuleId = def.beaconModuleId || defaults?.beaconModuleId;
    if (data.game === _models__WEBPACK_IMPORTED_MODULE_0__.Game.Satisfactory) {
        // Default = 100%
        def.overclock = def.overclock || 100;
    }
    entities[''] = def;
    for (const id of data.factoryIds.filter((i) => data.itemEntities[i])) {
        const s = { ...state.entities[id] };
        const factory = data.factoryEntities[id];
        if (factory.modules) {
            s.moduleRankIds = s.moduleRankIds || def.moduleRankIds;
            s.beaconCount = s.beaconCount != null ? s.beaconCount : def.beaconCount;
            s.beaconId = s.beaconId || def.beaconId;
            s.beaconModuleId = s.beaconModuleId || def.beaconModuleId;
        }
        s.overclock = s.overclock || def.overclock;
        entities[id] = s;
    }
    return { ids, entities };
});
const getFactoryOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getFactories, _settings__WEBPACK_IMPORTED_MODULE_1__.getDataset, (factories, data) => data.factoryIds.map((f) => ({
    label: data.itemEntities[f].name,
    value: f,
    disabled: (factories.ids ?? []).indexOf(f) !== -1,
})));
const getFactoryRows = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getFactories, (factories) => [
    '',
    ...(factories.ids ?? []),
]);


/***/ }),

/***/ 5698:
/*!******************************************!*\
  !*** ./src/app/store/factories/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.AddAction),
/* harmony export */   "LowerAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.LowerAction),
/* harmony export */   "RaiseAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.RaiseAction),
/* harmony export */   "RemoveAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveAction),
/* harmony export */   "SetBeaconAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconAction),
/* harmony export */   "SetBeaconCountAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconCountAction),
/* harmony export */   "SetBeaconModuleAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconModuleAction),
/* harmony export */   "SetFactoryAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.SetFactoryAction),
/* harmony export */   "SetModuleRankAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.SetModuleRankAction),
/* harmony export */   "SetOverclockAction": () => (/* reexport safe */ _factories_actions__WEBPACK_IMPORTED_MODULE_0__.SetOverclockAction),
/* harmony export */   "factoriesReducer": () => (/* reexport safe */ _factories_reducer__WEBPACK_IMPORTED_MODULE_1__.factoriesReducer),
/* harmony export */   "factoriesState": () => (/* reexport safe */ _factories_selectors__WEBPACK_IMPORTED_MODULE_2__.factoriesState),
/* harmony export */   "getFactories": () => (/* reexport safe */ _factories_selectors__WEBPACK_IMPORTED_MODULE_2__.getFactories),
/* harmony export */   "getFactoryOptions": () => (/* reexport safe */ _factories_selectors__WEBPACK_IMPORTED_MODULE_2__.getFactoryOptions),
/* harmony export */   "getFactoryRows": () => (/* reexport safe */ _factories_selectors__WEBPACK_IMPORTED_MODULE_2__.getFactoryRows),
/* harmony export */   "initialFactoriesState": () => (/* reexport safe */ _factories_reducer__WEBPACK_IMPORTED_MODULE_1__.initialFactoriesState)
/* harmony export */ });
/* harmony import */ var _factories_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories.actions */ 2385);
/* harmony import */ var _factories_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories.reducer */ 9527);
/* harmony import */ var _factories_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories.selectors */ 261);





/***/ }),

/***/ 2322:
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* reexport module object */ _app_actions__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "Datasets": () => (/* reexport module object */ _datasets__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "Factories": () => (/* reexport module object */ _factories__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "Items": () => (/* reexport module object */ _items__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "Preferences": () => (/* reexport module object */ _preferences__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "Products": () => (/* reexport module object */ _products__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "Recipes": () => (/* reexport module object */ _recipes__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "Settings": () => (/* reexport module object */ _settings__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-store-freeze */ 107);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.actions */ 5294);
/* harmony import */ var _datasets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasets */ 9490);
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories */ 5698);
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items */ 1090);
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preferences */ 5703);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products */ 8304);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes */ 7542);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings */ 2609);
/* harmony import */ var _storage_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage.reducer */ 1201);











const reducers = {
    datasetsState: _datasets__WEBPACK_IMPORTED_MODULE_3__.datasetsReducer,
    productsState: _products__WEBPACK_IMPORTED_MODULE_7__.productsReducer,
    itemsState: _items__WEBPACK_IMPORTED_MODULE_5__.itemsReducer,
    recipesState: _recipes__WEBPACK_IMPORTED_MODULE_8__.recipesReducer,
    factoriesState: _factories__WEBPACK_IMPORTED_MODULE_4__.factoriesReducer,
    settingsState: _settings__WEBPACK_IMPORTED_MODULE_9__.settingsReducer,
    preferencesState: _preferences__WEBPACK_IMPORTED_MODULE_6__.preferencesReducer,
};
/* No need to test without storeFreeze, ignore that branch here. */
const metaReducers = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.testing
    ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__.storeFreeze]
    : /* istanbul ignore next */
        src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production
            ? [_storage_reducer__WEBPACK_IMPORTED_MODULE_10__.storageMetaReducer]
            : [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__.storeFreeze, _storage_reducer__WEBPACK_IMPORTED_MODULE_10__.storageMetaReducer];



/***/ }),

/***/ 1090:
/*!**************************************!*\
  !*** ./src/app/store/items/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IgnoreItemAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.IgnoreItemAction),
/* harmony export */   "ResetBeltsAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.ResetBeltsAction),
/* harmony export */   "ResetIgnoresAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.ResetIgnoresAction),
/* harmony export */   "ResetItemAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.ResetItemAction),
/* harmony export */   "ResetWagonsAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.ResetWagonsAction),
/* harmony export */   "SetBeltAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeltAction),
/* harmony export */   "SetRecipeAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.SetRecipeAction),
/* harmony export */   "SetWagonAction": () => (/* reexport safe */ _items_actions__WEBPACK_IMPORTED_MODULE_0__.SetWagonAction),
/* harmony export */   "getItemSettings": () => (/* reexport safe */ _items_selectors__WEBPACK_IMPORTED_MODULE_2__.getItemSettings),
/* harmony export */   "getItemsModified": () => (/* reexport safe */ _items_selectors__WEBPACK_IMPORTED_MODULE_2__.getItemsModified),
/* harmony export */   "initialItemsState": () => (/* reexport safe */ _items_reducer__WEBPACK_IMPORTED_MODULE_1__.initialItemsState),
/* harmony export */   "itemsReducer": () => (/* reexport safe */ _items_reducer__WEBPACK_IMPORTED_MODULE_1__.itemsReducer),
/* harmony export */   "itemsState": () => (/* reexport safe */ _items_selectors__WEBPACK_IMPORTED_MODULE_2__.itemsState)
/* harmony export */ });
/* harmony import */ var _items_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.actions */ 2725);
/* harmony import */ var _items_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.reducer */ 2869);
/* harmony import */ var _items_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.selectors */ 5999);





/***/ }),

/***/ 2725:
/*!**********************************************!*\
  !*** ./src/app/store/items/items.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IgnoreItemAction": () => (/* binding */ IgnoreItemAction),
/* harmony export */   "ResetBeltsAction": () => (/* binding */ ResetBeltsAction),
/* harmony export */   "ResetIgnoresAction": () => (/* binding */ ResetIgnoresAction),
/* harmony export */   "ResetItemAction": () => (/* binding */ ResetItemAction),
/* harmony export */   "ResetWagonsAction": () => (/* binding */ ResetWagonsAction),
/* harmony export */   "SetBeltAction": () => (/* binding */ SetBeltAction),
/* harmony export */   "SetRecipeAction": () => (/* binding */ SetRecipeAction),
/* harmony export */   "SetWagonAction": () => (/* binding */ SetWagonAction)
/* harmony export */ });
class IgnoreItemAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Items] Ignore Item" /* ItemsActionType.IGNORE_ITEM */;
    }
}
class SetBeltAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Items] Set Belt" /* ItemsActionType.SET_BELT */;
    }
}
class SetWagonAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Items] Set Wagon" /* ItemsActionType.SET_WAGON */;
    }
}
class SetRecipeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Items] Set Recipe" /* ItemsActionType.SET_RECIPE */;
    }
}
class ResetItemAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Items] Reset Item" /* ItemsActionType.RESET_ITEM */;
    }
}
class ResetIgnoresAction {
    constructor() {
        this.type = "[Items] Reset Ignores" /* ItemsActionType.RESET_IGNORES */;
    }
}
class ResetBeltsAction {
    constructor() {
        this.type = "[Items] Reset Belts" /* ItemsActionType.RESET_BELTS */;
    }
}
class ResetWagonsAction {
    constructor() {
        this.type = "[Items] Reset Wagon" /* ItemsActionType.RESET_WAGONS */;
    }
}


/***/ }),

/***/ 2869:
/*!**********************************************!*\
  !*** ./src/app/store/items/items.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialItemsState": () => (/* binding */ initialItemsState),
/* harmony export */   "itemsReducer": () => (/* binding */ itemsReducer)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.actions */ 5294);


const initialItemsState = {};
function itemsReducer(state = initialItemsState, action) {
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__.AppActionType.LOAD:
            return { ...initialItemsState, ...action.payload.itemsState };
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__.AppActionType.RESET:
        case "[Settings] Set Mod" /* Settings.SettingsActionType.SET_MOD */:
            return initialItemsState;
        case "[Items] Ignore Item" /* ItemsActionType.IGNORE_ITEM */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'ignore', {
                id: action.payload,
                value: !state[action.payload]?.ignore,
                def: false,
            });
        case "[Items] Set Belt" /* ItemsActionType.SET_BELT */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'beltId', action.payload);
        case "[Items] Set Wagon" /* ItemsActionType.SET_WAGON */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'wagonId', action.payload);
        case "[Items] Set Recipe" /* ItemsActionType.SET_RECIPE */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'recipeId', action.payload);
        case "[Items] Reset Item" /* ItemsActionType.RESET_ITEM */: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        case "[Items] Reset Ignores" /* ItemsActionType.RESET_IGNORES */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetField(state, 'ignore');
        case "[Items] Reset Belts" /* ItemsActionType.RESET_BELTS */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetField(state, 'beltId');
        case "[Items] Reset Wagon" /* ItemsActionType.RESET_WAGONS */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetField(state, 'wagonId');
        default:
            return state;
    }
}


/***/ }),

/***/ 5999:
/*!************************************************!*\
  !*** ./src/app/store/items/items.selectors.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItemSettings": () => (/* binding */ getItemSettings),
/* harmony export */   "getItemsModified": () => (/* binding */ getItemsModified),
/* harmony export */   "itemsState": () => (/* binding */ itemsState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ 2609);



/* Base selector functions */
const itemsState = (state) => state.itemsState;
/* Complex selectors */
const getItemSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(itemsState, _settings__WEBPACK_IMPORTED_MODULE_1__.getDataset, _settings__WEBPACK_IMPORTED_MODULE_1__.getSettings, (state, data, settings) => {
    const value = {};
    if (data?.itemIds?.length) {
        for (const item of data.itemIds.map((i) => data.itemEntities[i])) {
            const itemSettings = state[item.id]
                ? { ...state[item.id] }
                : { ignore: false };
            // Belt (or Pipe)
            if (!itemSettings.beltId) {
                if (item.stack) {
                    itemSettings.beltId = settings.beltId;
                }
                else if (settings.pipeId) {
                    itemSettings.beltId = settings.pipeId;
                }
                else {
                    itemSettings.beltId = _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Pipe;
                }
            }
            if (!itemSettings.wagonId) {
                itemSettings.wagonId = item.stack
                    ? settings.cargoWagonId
                    : settings.fluidWagonId;
            }
            value[item.id] = itemSettings;
        }
    }
    return value;
});
const getItemsModified = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(itemsState, (state) => ({
    ignore: Object.keys(state).some((id) => state[id].ignore != null),
    belts: Object.keys(state).some((id) => state[id].beltId != null),
    wagons: Object.keys(state).some((id) => state[id].wagonId != null),
}));


/***/ }),

/***/ 5703:
/*!********************************************!*\
  !*** ./src/app/store/preferences/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveStateAction": () => (/* reexport safe */ _preferences_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveStateAction),
/* harmony export */   "SaveStateAction": () => (/* reexport safe */ _preferences_actions__WEBPACK_IMPORTED_MODULE_0__.SaveStateAction),
/* harmony export */   "SetColumnsAction": () => (/* reexport safe */ _preferences_actions__WEBPACK_IMPORTED_MODULE_0__.SetColumnsAction),
/* harmony export */   "SetLanguageAction": () => (/* reexport safe */ _preferences_actions__WEBPACK_IMPORTED_MODULE_0__.SetLanguageAction),
/* harmony export */   "SetPowerUnitAction": () => (/* reexport safe */ _preferences_actions__WEBPACK_IMPORTED_MODULE_0__.SetPowerUnitAction),
/* harmony export */   "SetSimplexTypeAction": () => (/* reexport safe */ _preferences_actions__WEBPACK_IMPORTED_MODULE_0__.SetSimplexTypeAction),
/* harmony export */   "SetThemeAction": () => (/* reexport safe */ _preferences_actions__WEBPACK_IMPORTED_MODULE_0__.SetThemeAction),
/* harmony export */   "getColumns": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.getColumns),
/* harmony export */   "getLanguage": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.getLanguage),
/* harmony export */   "getPowerUnit": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.getPowerUnit),
/* harmony export */   "getSavedStates": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.getSavedStates),
/* harmony export */   "getSimplexType": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.getSimplexType),
/* harmony export */   "getStates": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.getStates),
/* harmony export */   "getTheme": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.getTheme),
/* harmony export */   "initialColumnsState": () => (/* reexport safe */ _preferences_reducer__WEBPACK_IMPORTED_MODULE_1__.initialColumnsState),
/* harmony export */   "initialPreferencesState": () => (/* reexport safe */ _preferences_reducer__WEBPACK_IMPORTED_MODULE_1__.initialPreferencesState),
/* harmony export */   "preferencesReducer": () => (/* reexport safe */ _preferences_reducer__WEBPACK_IMPORTED_MODULE_1__.preferencesReducer),
/* harmony export */   "preferencesState": () => (/* reexport safe */ _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__.preferencesState)
/* harmony export */ });
/* harmony import */ var _preferences_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferences.actions */ 1981);
/* harmony import */ var _preferences_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferences.reducer */ 8736);
/* harmony import */ var _preferences_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preferences.selectors */ 9428);





/***/ }),

/***/ 1981:
/*!**********************************************************!*\
  !*** ./src/app/store/preferences/preferences.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveStateAction": () => (/* binding */ RemoveStateAction),
/* harmony export */   "SaveStateAction": () => (/* binding */ SaveStateAction),
/* harmony export */   "SetColumnsAction": () => (/* binding */ SetColumnsAction),
/* harmony export */   "SetLanguageAction": () => (/* binding */ SetLanguageAction),
/* harmony export */   "SetPowerUnitAction": () => (/* binding */ SetPowerUnitAction),
/* harmony export */   "SetSimplexTypeAction": () => (/* binding */ SetSimplexTypeAction),
/* harmony export */   "SetThemeAction": () => (/* binding */ SetThemeAction)
/* harmony export */ });
class SaveStateAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Preferences] Save State" /* PreferencesActionType.SAVE_STATE */;
    }
}
class RemoveStateAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Preferences] Remove State" /* PreferencesActionType.REMOVE_STATE */;
    }
}
class SetColumnsAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Preferences] Set Columns" /* PreferencesActionType.SET_COLUMNS */;
    }
}
class SetSimplexTypeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Preferences] Set Simplex Type" /* PreferencesActionType.SET_SIMPLEX_TYPE */;
    }
}
class SetLanguageAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Preferences] Set Display Language" /* PreferencesActionType.SET_LANGUAGE */;
    }
}
class SetPowerUnitAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Preferences] Set Power Unit" /* PreferencesActionType.SET_POWER_UNIT */;
    }
}
class SetThemeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Preferences] Set Theme" /* PreferencesActionType.SET_THEME */;
    }
}


/***/ }),

/***/ 8736:
/*!**********************************************************!*\
  !*** ./src/app/store/preferences/preferences.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialColumnsState": () => (/* binding */ initialColumnsState),
/* harmony export */   "initialPreferencesState": () => (/* binding */ initialPreferencesState),
/* harmony export */   "preferencesReducer": () => (/* binding */ preferencesReducer)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.actions */ 5294);


const initialColumnsState = _models__WEBPACK_IMPORTED_MODULE_0__.allColumns.reduce((e, c) => {
    e[c] = { show: true, precision: 1 };
    return e;
}, {});
const initialPreferencesState = {
    states: {},
    columns: initialColumnsState,
    simplexType: _models__WEBPACK_IMPORTED_MODULE_0__.SimplexType.JsBigIntRational,
    language: _models__WEBPACK_IMPORTED_MODULE_0__.Language.English,
    powerUnit: _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.Auto,
    theme: _models__WEBPACK_IMPORTED_MODULE_0__.Theme.System,
};
function preferencesReducer(state = initialPreferencesState, action) {
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__.AppActionType.RESET:
            return initialPreferencesState;
        case "[Preferences] Save State" /* PreferencesActionType.SAVE_STATE */: {
            const states = {
                ...state.states,
                ...{ [action.payload.id]: action.payload.value },
            };
            return { ...state, ...{ states } };
        }
        case "[Preferences] Remove State" /* PreferencesActionType.REMOVE_STATE */: {
            const states = { ...state.states };
            delete states[action.payload];
            return { ...state, ...{ states } };
        }
        case "[Preferences] Set Columns" /* PreferencesActionType.SET_COLUMNS */:
            return {
                ...state,
                ...{
                    columns: action.payload,
                    powerUnit: action.payload[_models__WEBPACK_IMPORTED_MODULE_0__.Column.Power].show
                        ? state.powerUnit
                        : _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.Auto,
                },
            };
        case "[Preferences] Set Simplex Type" /* PreferencesActionType.SET_SIMPLEX_TYPE */:
            return { ...state, ...{ simplexType: action.payload } };
        case "[Preferences] Set Display Language" /* PreferencesActionType.SET_LANGUAGE */:
            return { ...state, ...{ language: action.payload } };
        case "[Preferences] Set Power Unit" /* PreferencesActionType.SET_POWER_UNIT */:
            return { ...state, ...{ powerUnit: action.payload } };
        case "[Preferences] Set Theme" /* PreferencesActionType.SET_THEME */:
            return { ...state, ...{ theme: action.payload } };
        default:
            return state;
    }
}


/***/ }),

/***/ 9428:
/*!************************************************************!*\
  !*** ./src/app/store/preferences/preferences.selectors.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColumns": () => (/* binding */ getColumns),
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage),
/* harmony export */   "getPowerUnit": () => (/* binding */ getPowerUnit),
/* harmony export */   "getSavedStates": () => (/* binding */ getSavedStates),
/* harmony export */   "getSimplexType": () => (/* binding */ getSimplexType),
/* harmony export */   "getStates": () => (/* binding */ getStates),
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "preferencesState": () => (/* binding */ preferencesState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

/* Base selector functions */
const preferencesState = (state) => state.preferencesState;
const getStates = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(preferencesState, (state) => state.states);
const getColumns = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(preferencesState, (state) => state.columns);
const getSimplexType = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(preferencesState, (state) => state.simplexType);
const getPowerUnit = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(preferencesState, (state) => state.powerUnit);
const getLanguage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(preferencesState, (state) => state.language);
const getTheme = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(preferencesState, (state) => state.theme);
/** Complex selectors */
const getSavedStates = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getStates, (states) => Object.keys(states).map((i) => ({
    label: i,
    value: i,
})));


/***/ }),

/***/ 8304:
/*!*****************************************!*\
  !*** ./src/app/store/products/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.AddAction),
/* harmony export */   "AdjustDisplayRateAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.AdjustDisplayRateAction),
/* harmony export */   "RemoveAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.RemoveAction),
/* harmony export */   "ResetAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.ResetAction),
/* harmony export */   "ResetViaAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.ResetViaAction),
/* harmony export */   "SetItemAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.SetItemAction),
/* harmony export */   "SetRateAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.SetRateAction),
/* harmony export */   "SetRateTypeAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.SetRateTypeAction),
/* harmony export */   "SetViaAction": () => (/* reexport safe */ _products_actions__WEBPACK_IMPORTED_MODULE_0__.SetViaAction),
/* harmony export */   "checkViaState": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.checkViaState),
/* harmony export */   "effPrecFrom": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.effPrecFrom),
/* harmony export */   "getBaseProducts": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getBaseProducts),
/* harmony export */   "getEffectivePowerUnit": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getEffectivePowerUnit),
/* harmony export */   "getEffectivePrecision": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getEffectivePrecision),
/* harmony export */   "getEntities": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getEntities),
/* harmony export */   "getIds": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getIds),
/* harmony export */   "getMatrixResult": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getMatrixResult),
/* harmony export */   "getNormalizedRates": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedRates),
/* harmony export */   "getNormalizedRatesByBelts": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedRatesByBelts),
/* harmony export */   "getNormalizedRatesByFactories": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedRatesByFactories),
/* harmony export */   "getNormalizedRatesByItems": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedRatesByItems),
/* harmony export */   "getNormalizedRatesByWagons": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedRatesByWagons),
/* harmony export */   "getNormalizedSteps": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedSteps),
/* harmony export */   "getNormalizedStepsWithBeacons": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedStepsWithBeacons),
/* harmony export */   "getNormalizedStepsWithBelts": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedStepsWithBelts),
/* harmony export */   "getNormalizedStepsWithOutputs": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getNormalizedStepsWithOutputs),
/* harmony export */   "getProductSteps": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getProductSteps),
/* harmony export */   "getProducts": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getProducts),
/* harmony export */   "getProductsBy": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getProductsBy),
/* harmony export */   "getProductsByBelts": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getProductsByBelts),
/* harmony export */   "getProductsByFactories": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getProductsByFactories),
/* harmony export */   "getProductsByItems": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getProductsByItems),
/* harmony export */   "getProductsByWagons": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getProductsByWagons),
/* harmony export */   "getRationalProducts": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalProducts),
/* harmony export */   "getStepByItemEntities": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getStepByItemEntities),
/* harmony export */   "getStepDetails": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getStepDetails),
/* harmony export */   "getStepTree": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getStepTree),
/* harmony export */   "getSteps": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getSteps),
/* harmony export */   "getStepsModified": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getStepsModified),
/* harmony export */   "getTotals": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getTotals),
/* harmony export */   "getViaOptions": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getViaOptions),
/* harmony export */   "getZipState": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.getZipState),
/* harmony export */   "initialProductsState": () => (/* reexport safe */ _products_reducer__WEBPACK_IMPORTED_MODULE_1__.initialProductsState),
/* harmony export */   "productsReducer": () => (/* reexport safe */ _products_reducer__WEBPACK_IMPORTED_MODULE_1__.productsReducer),
/* harmony export */   "productsState": () => (/* reexport safe */ _products_selectors__WEBPACK_IMPORTED_MODULE_2__.productsState)
/* harmony export */ });
/* harmony import */ var _products_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.actions */ 3202);
/* harmony import */ var _products_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.reducer */ 9209);
/* harmony import */ var _products_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.selectors */ 8764);





/***/ }),

/***/ 3202:
/*!****************************************************!*\
  !*** ./src/app/store/products/products.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAction": () => (/* binding */ AddAction),
/* harmony export */   "AdjustDisplayRateAction": () => (/* binding */ AdjustDisplayRateAction),
/* harmony export */   "RemoveAction": () => (/* binding */ RemoveAction),
/* harmony export */   "ResetAction": () => (/* binding */ ResetAction),
/* harmony export */   "ResetViaAction": () => (/* binding */ ResetViaAction),
/* harmony export */   "SetItemAction": () => (/* binding */ SetItemAction),
/* harmony export */   "SetRateAction": () => (/* binding */ SetRateAction),
/* harmony export */   "SetRateTypeAction": () => (/* binding */ SetRateTypeAction),
/* harmony export */   "SetViaAction": () => (/* binding */ SetViaAction)
/* harmony export */ });
class ResetAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Reset" /* ProductsActionType.RESET */;
    }
}
class AddAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Add" /* ProductsActionType.ADD */;
    }
}
class RemoveAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Remove" /* ProductsActionType.REMOVE */;
    }
}
class SetItemAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Set Item" /* ProductsActionType.SET_ITEM */;
    }
}
class SetRateAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Set Rate" /* ProductsActionType.SET_RATE */;
    }
}
class SetRateTypeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Set Rate Type" /* ProductsActionType.SET_RATE_TYPE */;
    }
}
class SetViaAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Set Via" /* ProductsActionType.SET_VIA */;
    }
}
class ResetViaAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Reset Via" /* ProductsActionType.RESET_VIA */;
    }
}
class AdjustDisplayRateAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Products] Adjust Display Rate" /* ProductsActionType.ADJUST_DISPLAY_RATE */;
    }
}


/***/ }),

/***/ 4653:
/*!****************************************************!*\
  !*** ./src/app/store/products/products.effects.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsEffects": () => (/* binding */ ProductsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _products_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.actions */ 3202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ProductsEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.adjustDisplayRate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)("[Settings] Set Display Rate" /* Settings.SettingsActionType.SET_DISPLAY_RATE */), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((a) => {
            const factor = _models__WEBPACK_IMPORTED_MODULE_0__.displayRateInfo[a.payload.value].value.div(_models__WEBPACK_IMPORTED_MODULE_0__.displayRateInfo[a.payload.prev].value);
            return new _products_actions__WEBPACK_IMPORTED_MODULE_1__.AdjustDisplayRateAction(factor.toString());
        })));
    }
}
ProductsEffects.ɵfac = function ProductsEffects_Factory(t) { return new (t || ProductsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions)); };
ProductsEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProductsEffects, factory: ProductsEffects.ɵfac });


/***/ }),

/***/ 9209:
/*!****************************************************!*\
  !*** ./src/app/store/products/products.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialProductsState": () => (/* binding */ initialProductsState),
/* harmony export */   "productsReducer": () => (/* binding */ productsReducer)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.actions */ 5294);



const initialProductsState = {
    ids: [],
    entities: {},
    index: 0,
};
function productsReducer(state = initialProductsState, action) {
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_2__.AppActionType.LOAD:
            return action.payload.productsState
                ? action.payload.productsState
                : initialProductsState;
        case _app_actions__WEBPACK_IMPORTED_MODULE_2__.AppActionType.RESET:
        case "[Settings] Set Mod" /* Settings.SettingsActionType.SET_MOD */:
            return initialProductsState;
        case "[Products] Reset" /* ProductsActionType.RESET */: {
            const id = '0';
            return {
                ids: [id],
                entities: {
                    [id]: {
                        id,
                        itemId: action.payload,
                        rate: '60',
                        rateType: _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Items,
                    },
                },
                index: 1,
            };
        }
        case "[Products] Add" /* ProductsActionType.ADD */: {
            let rate = '60';
            let rateType = _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Items;
            if (state.ids.length > 0) {
                // Use rate and rate type from last product in list
                const id = state.ids[state.ids.length - 1];
                rate = state.entities[id].rate;
                rateType = state.entities[id].rateType;
            }
            return {
                ...state,
                ...{
                    ids: [...state.ids, state.index.toString()],
                    entities: {
                        ...state.entities,
                        ...{
                            [state.index]: {
                                id: state.index.toString(),
                                itemId: action.payload,
                                rate,
                                rateType,
                            },
                        },
                    },
                    index: state.index + 1,
                },
            };
        }
        case "[Products] Remove" /* ProductsActionType.REMOVE */: {
            const newEntities = { ...state.entities };
            delete newEntities[action.payload];
            return {
                ...state,
                ...{
                    ids: state.ids.filter((i) => i !== action.payload),
                    entities: newEntities,
                },
            };
        }
        case "[Products] Set Item" /* ProductsActionType.SET_ITEM */: {
            const entities = _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.assignValue(state.entities, 'itemId', action.payload);
            if (entities[action.payload.id].rateType === _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Factories) {
                entities[action.payload.id].rateType = _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Items;
            }
            return {
                ...state,
                ...{
                    entities: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.resetFields(entities, ['viaId'], action.payload.id),
                },
            };
        }
        case "[Products] Set Rate" /* ProductsActionType.SET_RATE */:
            return {
                ...state,
                ...{
                    entities: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.assignValue(state.entities, 'rate', action.payload),
                },
            };
        case "[Products] Set Rate Type" /* ProductsActionType.SET_RATE_TYPE */:
            return {
                ...state,
                ...{
                    entities: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.resetFields(_utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.assignValue(state.entities, 'rateType', action.payload), ['viaId'], action.payload.id),
                },
            };
        case "[Products] Set Via" /* ProductsActionType.SET_VIA */:
            return {
                ...state,
                ...{
                    entities: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.assignValue(state.entities, 'viaId', action.payload),
                },
            };
        case "[Products] Reset Via" /* ProductsActionType.RESET_VIA */:
            return {
                ...state,
                ...{
                    entities: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.resetFields(state.entities, ['viaId'], action.payload),
                },
            };
        case "[Products] Adjust Display Rate" /* ProductsActionType.ADJUST_DISPLAY_RATE */: {
            const factor = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(action.payload);
            const newEntities = { ...state.entities };
            for (const id of state.ids.filter((i) => state.entities[i].rateType === _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Items ||
                state.entities[i].rateType === _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Wagons)) {
                const rate = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(state.entities[id].rate)
                    .mul(factor)
                    .toString();
                newEntities[id] = { ...state.entities[id], ...{ rate } };
            }
            return {
                ...state,
                ...{ entities: newEntities },
            };
        }
        default:
            return state;
    }
}


/***/ }),

/***/ 8764:
/*!******************************************************!*\
  !*** ./src/app/store/products/products.selectors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkViaState": () => (/* binding */ checkViaState),
/* harmony export */   "effPrecFrom": () => (/* binding */ effPrecFrom),
/* harmony export */   "getBaseProducts": () => (/* binding */ getBaseProducts),
/* harmony export */   "getEffectivePowerUnit": () => (/* binding */ getEffectivePowerUnit),
/* harmony export */   "getEffectivePrecision": () => (/* binding */ getEffectivePrecision),
/* harmony export */   "getEntities": () => (/* binding */ getEntities),
/* harmony export */   "getIds": () => (/* binding */ getIds),
/* harmony export */   "getMatrixResult": () => (/* binding */ getMatrixResult),
/* harmony export */   "getNormalizedRates": () => (/* binding */ getNormalizedRates),
/* harmony export */   "getNormalizedRatesByBelts": () => (/* binding */ getNormalizedRatesByBelts),
/* harmony export */   "getNormalizedRatesByFactories": () => (/* binding */ getNormalizedRatesByFactories),
/* harmony export */   "getNormalizedRatesByItems": () => (/* binding */ getNormalizedRatesByItems),
/* harmony export */   "getNormalizedRatesByWagons": () => (/* binding */ getNormalizedRatesByWagons),
/* harmony export */   "getNormalizedSteps": () => (/* binding */ getNormalizedSteps),
/* harmony export */   "getNormalizedStepsWithBeacons": () => (/* binding */ getNormalizedStepsWithBeacons),
/* harmony export */   "getNormalizedStepsWithBelts": () => (/* binding */ getNormalizedStepsWithBelts),
/* harmony export */   "getNormalizedStepsWithOutputs": () => (/* binding */ getNormalizedStepsWithOutputs),
/* harmony export */   "getProductSteps": () => (/* binding */ getProductSteps),
/* harmony export */   "getProducts": () => (/* binding */ getProducts),
/* harmony export */   "getProductsBy": () => (/* binding */ getProductsBy),
/* harmony export */   "getProductsByBelts": () => (/* binding */ getProductsByBelts),
/* harmony export */   "getProductsByFactories": () => (/* binding */ getProductsByFactories),
/* harmony export */   "getProductsByItems": () => (/* binding */ getProductsByItems),
/* harmony export */   "getProductsByWagons": () => (/* binding */ getProductsByWagons),
/* harmony export */   "getRationalProducts": () => (/* binding */ getRationalProducts),
/* harmony export */   "getStepByItemEntities": () => (/* binding */ getStepByItemEntities),
/* harmony export */   "getStepDetails": () => (/* binding */ getStepDetails),
/* harmony export */   "getStepTree": () => (/* binding */ getStepTree),
/* harmony export */   "getSteps": () => (/* binding */ getSteps),
/* harmony export */   "getStepsModified": () => (/* binding */ getStepsModified),
/* harmony export */   "getTotals": () => (/* binding */ getTotals),
/* harmony export */   "getViaOptions": () => (/* binding */ getViaOptions),
/* harmony export */   "getZipState": () => (/* binding */ getZipState),
/* harmony export */   "productsState": () => (/* binding */ productsState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories */ 5698);
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items */ 1090);
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../preferences */ 5703);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipes */ 7542);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings */ 2609);








/* Base selector functions */
const productsState = (state) => state.productsState;
const getIds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(productsState, (state) => state.ids);
const getEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(productsState, (state) => state.entities);
/* Complex selectors */
const getBaseProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getIds, getEntities, _settings__WEBPACK_IMPORTED_MODULE_6__.getDataset, (ids, entities, data) => ids.map((i) => entities[i]).filter((p) => data.itemEntities[p.itemId]));
const getProductSteps = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getBaseProducts, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _settings__WEBPACK_IMPORTED_MODULE_6__.getDisabledRecipeIds, _settings__WEBPACK_IMPORTED_MODULE_6__.getSimplexModifiers, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (products, itemSettings, disabledRecipeIds, adj, data) => products?.reduce((e, p) => {
    e[p.id] = _utilities__WEBPACK_IMPORTED_MODULE_1__.SimplexUtility.getSteps(p.itemId, itemSettings, disabledRecipeIds, adj.costInput, adj.costIgnored, adj.simplexType, data, p.rateType === _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Factories);
    return e;
}, {}));
const getProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getBaseProducts, getProductSteps, _settings__WEBPACK_IMPORTED_MODULE_6__.getDataset, (products, productSteps, data) => products?.map((p) => _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.adjustProduct(p, productSteps, data)));
const getViaOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProducts, getProductSteps, _settings__WEBPACK_IMPORTED_MODULE_6__.getDataset, (products, productSteps, data) => products.reduce((e, p) => {
    if (productSteps[p.id]) {
        e[p.id] = productSteps[p.id]
            .map((r) => r[0])
            .map((r) => ({
            label: p.rateType === _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Factories
                ? data.recipeEntities[r].name
                : data.itemEntities[r].name,
            value: r,
        }));
    }
    return e;
}, {}));
const getRationalProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProducts, (products) => products.map((p) => new _models__WEBPACK_IMPORTED_MODULE_0__.RationalProduct(p)));
const getProductsBy = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getRationalProducts, (products) => products.reduce((e, p) => {
    if (!e[p.rateType]) {
        e[p.rateType] = [];
    }
    e[p.rateType] = [...e[p.rateType], p];
    return e;
}, {}));
const getProductsByItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsBy, (products) => products[_models__WEBPACK_IMPORTED_MODULE_0__.RateType.Items]);
const getProductsByBelts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsBy, (products) => products[_models__WEBPACK_IMPORTED_MODULE_0__.RateType.Belts]);
const getProductsByWagons = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsBy, (products) => products[_models__WEBPACK_IMPORTED_MODULE_0__.RateType.Wagons]);
const getProductsByFactories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsBy, (products) => products[_models__WEBPACK_IMPORTED_MODULE_0__.RateType.Factories]);
const getNormalizedRatesByItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsByItems, getProductSteps, _settings__WEBPACK_IMPORTED_MODULE_6__.getDisplayRateInfo, (products, productSteps, dispRateInfo) => products?.reduce((e, p) => {
    const rate = p.rate.div(dispRateInfo.value);
    if (p.viaId === p.itemId) {
        e[p.id] = rate;
    }
    else {
        const via = _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.getProductStepData(productSteps, p);
        if (via) {
            e[p.id] = rate.div(via[1]);
        }
        else {
            e[p.id] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
        }
    }
    return e;
}, {}));
const getNormalizedRatesByBelts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsByBelts, getProductSteps, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _settings__WEBPACK_IMPORTED_MODULE_6__.getBeltSpeed, (products, productSteps, itemSettings, beltSpeed) => products?.reduce((e, p) => {
    if (p.viaId === p.itemId) {
        const id = itemSettings[p.itemId].beltId;
        if (id) {
            e[p.id] = p.rate.mul(beltSpeed[id]);
        }
    }
    else {
        const via = _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.getProductStepData(productSteps, p);
        if (via) {
            const id = itemSettings[via[0]].beltId;
            if (id) {
                e[p.id] = p.rate.mul(beltSpeed[id]).div(via[1]);
            }
        }
        else {
            e[p.id] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
        }
    }
    return e;
}, {}));
const getNormalizedRatesByWagons = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsByWagons, getProductSteps, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _settings__WEBPACK_IMPORTED_MODULE_6__.getDisplayRateInfo, _settings__WEBPACK_IMPORTED_MODULE_6__.getDataset, (products, productSteps, itemSettings, dispRateInfo, data) => products?.reduce((e, p) => {
    if (p.viaId === p.itemId) {
        e[p.id] = p.rate.div(dispRateInfo.value);
        const wagonId = itemSettings[p.itemId].wagonId;
        if (wagonId) {
            const item = data.itemEntities[p.itemId];
            const wagon = data.itemEntities[wagonId];
            if (item.stack && wagon.cargoWagon) {
                e[p.id] = e[p.id].mul(item.stack.mul(wagon.cargoWagon.size));
            }
            else if (wagon.fluidWagon) {
                e[p.id] = e[p.id].mul(wagon.fluidWagon.capacity);
            }
        }
    }
    else {
        const via = _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.getProductStepData(productSteps, p);
        if (via) {
            e[p.id] = p.rate.div(dispRateInfo.value);
            const wagonId = itemSettings[via[0]].wagonId;
            if (wagonId) {
                const item = data.itemEntities[via[0]];
                const wagon = data.itemEntities[wagonId];
                if (item.stack && wagon.cargoWagon) {
                    e[p.id] = e[p.id].mul(item.stack.mul(wagon.cargoWagon.size));
                }
                else if (wagon.fluidWagon) {
                    e[p.id] = e[p.id].mul(wagon.fluidWagon.capacity);
                }
            }
            e[p.id] = e[p.id].div(via[1]);
        }
        else {
            e[p.id] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
        }
    }
    return e;
}, {}));
const getNormalizedRatesByFactories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProductsByFactories, getProductSteps, _recipes__WEBPACK_IMPORTED_MODULE_5__.getRationalRecipeSettings, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _settings__WEBPACK_IMPORTED_MODULE_6__.getAdjustmentData, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (products, productSteps, recipeSettings, itemSettings, adj, data) => products?.reduce((e, p) => {
    let recipeId = data.itemRecipeId[p.itemId];
    if (recipeId && p.viaId === recipeId) {
        const recipe = data.recipeR[recipeId];
        e[p.id] = p.rate.div(recipe.time);
        if (recipe.out) {
            e[p.id] = e[p.id].mul(recipe.out[p.itemId]);
        }
        if (recipe.adjustProd && recipe.productivity) {
            e[p.id] = e[p.id].div(recipe.productivity);
        }
    }
    else {
        const via = _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.getProductStepData(productSteps, p);
        if (via) {
            recipeId = via[0];
            e[p.id] = p.rate.div(via[1]);
        }
        else {
            e[p.id] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
        }
    }
    return e;
}, {}));
const getNormalizedRates = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getNormalizedRatesByItems, getNormalizedRatesByBelts, getNormalizedRatesByWagons, getNormalizedRatesByFactories, (byItems, byBelts, byWagons, byFactories) => ({
    ...byItems,
    ...byBelts,
    ...byWagons,
    ...byFactories,
}));
const getNormalizedSteps = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getProducts, getNormalizedRates, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (products, rates, itemSettings, data) => {
    const steps = [];
    for (const product of products) {
        _utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.addStepsFor(product.itemId, rates[product.id], steps, itemSettings, data);
    }
    return steps;
});
const getMatrixResult = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getNormalizedSteps, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _settings__WEBPACK_IMPORTED_MODULE_6__.getDisabledRecipeIds, _settings__WEBPACK_IMPORTED_MODULE_6__.getSimplexModifiers, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (steps, itemSettings, disabledRecipeIds, adj, data) => _utilities__WEBPACK_IMPORTED_MODULE_1__.SimplexUtility.solve(_utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.copy(steps), itemSettings, disabledRecipeIds, adj.costInput, adj.costIgnored, adj.simplexType, data));
const getNormalizedStepsWithBelts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getMatrixResult, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _recipes__WEBPACK_IMPORTED_MODULE_5__.getRecipeSettings, _settings__WEBPACK_IMPORTED_MODULE_6__.getBeltSpeed, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (result, itemSettings, recipeSettings, beltSpeed, data) => _utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.calculateBelts(_utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.copy(result.steps), itemSettings, recipeSettings, beltSpeed, data));
const getNormalizedStepsWithOutputs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getNormalizedStepsWithBelts, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (steps, data) => _utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.calculateOutputs(_utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.copy(steps), data));
const getNormalizedStepsWithBeacons = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getNormalizedStepsWithOutputs, _settings__WEBPACK_IMPORTED_MODULE_6__.getRationalBeaconReceivers, _recipes__WEBPACK_IMPORTED_MODULE_5__.getRationalRecipeSettings, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (steps, beaconReceivers, recipeSettings, data) => _utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.calculateBeacons(_utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.copy(steps), beaconReceivers, recipeSettings, data));
const getSteps = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getNormalizedStepsWithBeacons, _settings__WEBPACK_IMPORTED_MODULE_6__.getDisplayRateInfo, (steps, dispRateInfo) => _utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.sortHierarchy(_utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.displayRate(_utilities__WEBPACK_IMPORTED_MODULE_1__.RateUtility.copy(steps), dispRateInfo)));
const checkViaState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getRationalProducts, getNormalizedRates, (products, rates) => ({ products, rates }));
const getZipState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(productsState, _items__WEBPACK_IMPORTED_MODULE_3__.itemsState, _recipes__WEBPACK_IMPORTED_MODULE_5__.recipesState, _factories__WEBPACK_IMPORTED_MODULE_2__.factoriesState, _settings__WEBPACK_IMPORTED_MODULE_6__.settingsState, (products, items, recipes, factories, settings) => ({
    products,
    items,
    recipes,
    factories,
    settings,
}));
const getStepsModified = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getSteps, _items__WEBPACK_IMPORTED_MODULE_3__.itemsState, _recipes__WEBPACK_IMPORTED_MODULE_5__.recipesState, (steps, itemSettings, recipeSettings) => ({
    items: steps.reduce((e, s) => {
        if (s.itemId) {
            e[s.itemId] = itemSettings[s.itemId] != null;
        }
        return e;
    }, {}),
    recipes: steps.reduce((e, s) => {
        if (s.recipeId) {
            e[s.recipeId] = recipeSettings[s.recipeId] != null;
        }
        return e;
    }, {}),
}));
const getTotals = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getSteps, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _recipes__WEBPACK_IMPORTED_MODULE_5__.getRecipeSettings, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, (steps, itemSettings, recipeSettings, data) => {
    const belts = {};
    const wagons = {};
    const factories = {};
    const beacons = {};
    let power = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
    let pollution = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
    for (const step of steps) {
        if (step.itemId != null) {
            // Total Belts
            if (step.belts?.nonzero()) {
                const belt = itemSettings[step.itemId].beltId;
                if (belt != null) {
                    if (!belts.hasOwnProperty(belt)) {
                        belts[belt] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                    }
                    belts[belt] = belts[belt].add(step.belts.ceil());
                }
            }
            // Total Wagons
            if (step.wagons?.nonzero()) {
                const wagon = itemSettings[step.itemId].wagonId;
                if (wagon != null) {
                    if (!wagons.hasOwnProperty(wagon)) {
                        wagons[wagon] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                    }
                    wagons[wagon] = wagons[wagon].add(step.wagons.ceil());
                }
            }
        }
        if (step.recipeId != null) {
            // Total Factories
            if (step.factories?.nonzero()) {
                const recipe = data.recipeEntities[step.recipeId];
                // Don't include silos from launch recipes
                if (!recipe.part) {
                    let factory = recipeSettings[step.recipeId].factoryId;
                    if (data.game === _models__WEBPACK_IMPORTED_MODULE_0__.Game.DysonSphereProgram &&
                        factory === _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.MiningDrill) {
                        // Use recipe id (vein type) in place of mining drill for DSP mining
                        factory = step.recipeId;
                    }
                    if (factory != null) {
                        if (!factories.hasOwnProperty(factory)) {
                            factories[factory] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                        }
                        factories[factory] = factories[factory].add(step.factories.ceil());
                    }
                }
            }
            // Total Beacons
            if (step.beacons?.nonzero()) {
                const beacon = recipeSettings[step.recipeId].beaconId;
                if (beacon != null) {
                    if (!beacons.hasOwnProperty(beacon)) {
                        beacons[beacon] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                    }
                    beacons[beacon] = beacons[beacon].add(step.beacons.ceil());
                }
            }
        }
        // Total Power
        if (step.power != null) {
            power = power.add(step.power);
        }
        // Total Pollution
        if (step.pollution != null) {
            pollution = pollution.add(step.pollution);
        }
    }
    return { belts, wagons, factories, beacons, power, pollution };
});
const getStepDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getSteps, _recipes__WEBPACK_IMPORTED_MODULE_5__.getAdjustedDataset, _settings__WEBPACK_IMPORTED_MODULE_6__.getDisabledRecipeIds, (steps, data, disabledRecipeIds) => steps.reduce((e, s) => {
    const tabs = [];
    let outputs = [];
    const recipeIds = [];
    const defaultableRecipeIds = [];
    if (s.itemId != null) {
        const itemId = s.itemId; // Store null-checked id
        tabs.push(_models__WEBPACK_IMPORTED_MODULE_0__.StepDetailTab.Item);
        outputs = steps
            .filter((a) => a.outputs?.[itemId] != null)
            .sort((a, b) => b.outputs[itemId].sub(a.outputs[itemId]).toNumber());
    }
    if (s.recipeId != null) {
        tabs.push(_models__WEBPACK_IMPORTED_MODULE_0__.StepDetailTab.Recipe);
    }
    if (s.factories?.nonzero()) {
        tabs.push(_models__WEBPACK_IMPORTED_MODULE_0__.StepDetailTab.Factory);
    }
    if (s.itemId != null) {
        for (const recipe of data.complexRecipeIds.map((r) => data.recipeR[r])) {
            if (recipe.produces(s.itemId)) {
                recipeIds.push(recipe.id);
                if (disabledRecipeIds.indexOf(recipe.id) === -1 &&
                    recipe.producesOnly(s.itemId)) {
                    defaultableRecipeIds.push(recipe.id);
                }
            }
        }
        if (recipeIds.length) {
            tabs.push(_models__WEBPACK_IMPORTED_MODULE_0__.StepDetailTab.Recipes);
        }
    }
    e[s.id] = {
        tabs: tabs.map((t) => ({ label: t })),
        outputs,
        recipeIds,
        defaultableRecipeIds,
    };
    return e;
}, {}));
const getStepByItemEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getSteps, (steps) => steps.reduce((e, s) => {
    if (s.itemId != null) {
        e[s.itemId] = s;
    }
    return e;
}, {}));
const getStepTree = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getSteps, (steps) => {
    const tree = {};
    const indents = {};
    for (const step of steps) {
        let indent = [];
        if (step.parents) {
            const keys = Object.keys(step.parents);
            if (keys.length === 1 && indents[keys[0]] != null) {
                indent = new Array(indents[keys[0]] + 1).fill(false);
            }
        }
        if (step.recipeId) {
            indents[step.recipeId] = indent.length;
        }
        tree[step.id] = indent;
    }
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        if (tree[step.id].length) {
            for (let j = i + 1; j < steps.length; j++) {
                const next = steps[j];
                if (tree[next.id]) {
                    if (tree[next.id].length === tree[step.id].length) {
                        for (let k = i; k < j; k++) {
                            const trail = steps[k];
                            if (tree[trail.id]) {
                                tree[trail.id][tree[step.id].length - 1] = true;
                            }
                        }
                        break;
                    }
                    else if (tree[next.id].length < tree[step.id].length) {
                        break;
                    }
                }
            }
        }
    }
    return tree;
});
const getEffectivePrecision = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getSteps, _settings__WEBPACK_IMPORTED_MODULE_6__.getColumnsState, (steps, columns) => {
    const effPrecision = {};
    effPrecision[_models__WEBPACK_IMPORTED_MODULE_0__.Column.Surplus] = effPrecFrom(steps, columns[_models__WEBPACK_IMPORTED_MODULE_0__.Column.Items].precision, (s) => s.surplus);
    for (const i of _models__WEBPACK_IMPORTED_MODULE_0__.precisionColumns.filter((i) => columns[i].show)) {
        effPrecision[i] = effPrecFrom(steps, columns[i].precision, (s) => i === _models__WEBPACK_IMPORTED_MODULE_0__.Column.Items
            ? (s.items || _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero).sub(s.surplus || _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero)
            : s[i.toLowerCase()]);
    }
    return effPrecision;
});
const getEffectivePowerUnit = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(getSteps, _preferences__WEBPACK_IMPORTED_MODULE_4__.getPowerUnit, (steps, powerUnit) => {
    if (powerUnit === _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.Auto) {
        let minPower;
        for (const step of steps) {
            if (step.power != null) {
                if (minPower == null || step.power.lt(minPower)) {
                    minPower = step.power;
                }
            }
        }
        minPower = minPower ?? _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
        if (minPower.lt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.thousand)) {
            return _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.kW;
        }
        else if (minPower.lt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.million)) {
            return _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.MW;
        }
        else {
            return _models__WEBPACK_IMPORTED_MODULE_0__.PowerUnit.GW;
        }
    }
    else {
        return powerUnit;
    }
});
function effPrecFrom(steps, precision, fn) {
    if (precision == null) {
        return precision;
    }
    let max = 0;
    for (const step of steps) {
        const dec = fn(step)?.toDecimals() ?? 0;
        if (dec >= precision) {
            return precision;
        }
        else if (dec > max) {
            max = dec;
        }
    }
    return max;
}


/***/ }),

/***/ 7542:
/*!****************************************!*\
  !*** ./src/app/store/recipes/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetBeaconsAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.ResetBeaconsAction),
/* harmony export */   "ResetCostAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.ResetCostAction),
/* harmony export */   "ResetFactoriesAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.ResetFactoriesAction),
/* harmony export */   "ResetRecipeAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.ResetRecipeAction),
/* harmony export */   "ResetRecipeModulesAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.ResetRecipeModulesAction),
/* harmony export */   "SetBeaconAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconAction),
/* harmony export */   "SetBeaconCountAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconCountAction),
/* harmony export */   "SetBeaconModulesAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconModulesAction),
/* harmony export */   "SetBeaconTotalAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconTotalAction),
/* harmony export */   "SetCostAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetCostAction),
/* harmony export */   "SetFactoryAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetFactoryAction),
/* harmony export */   "SetFactoryModulesAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetFactoryModulesAction),
/* harmony export */   "SetOverclockAction": () => (/* reexport safe */ _recipes_actions__WEBPACK_IMPORTED_MODULE_0__.SetOverclockAction),
/* harmony export */   "getAdjustedDataset": () => (/* reexport safe */ _recipes_selectors__WEBPACK_IMPORTED_MODULE_2__.getAdjustedDataset),
/* harmony export */   "getRationalRecipeSettings": () => (/* reexport safe */ _recipes_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalRecipeSettings),
/* harmony export */   "getRecipeSettings": () => (/* reexport safe */ _recipes_selectors__WEBPACK_IMPORTED_MODULE_2__.getRecipeSettings),
/* harmony export */   "getRecipesModified": () => (/* reexport safe */ _recipes_selectors__WEBPACK_IMPORTED_MODULE_2__.getRecipesModified),
/* harmony export */   "getSrc": () => (/* reexport safe */ _recipes_selectors__WEBPACK_IMPORTED_MODULE_2__.getSrc),
/* harmony export */   "initialRecipesState": () => (/* reexport safe */ _recipes_reducer__WEBPACK_IMPORTED_MODULE_1__.initialRecipesState),
/* harmony export */   "recipesReducer": () => (/* reexport safe */ _recipes_reducer__WEBPACK_IMPORTED_MODULE_1__.recipesReducer),
/* harmony export */   "recipesState": () => (/* reexport safe */ _recipes_selectors__WEBPACK_IMPORTED_MODULE_2__.recipesState)
/* harmony export */ });
/* harmony import */ var _recipes_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes.actions */ 9488);
/* harmony import */ var _recipes_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.reducer */ 2302);
/* harmony import */ var _recipes_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.selectors */ 6064);





/***/ }),

/***/ 9488:
/*!**************************************************!*\
  !*** ./src/app/store/recipes/recipes.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetBeaconsAction": () => (/* binding */ ResetBeaconsAction),
/* harmony export */   "ResetCostAction": () => (/* binding */ ResetCostAction),
/* harmony export */   "ResetFactoriesAction": () => (/* binding */ ResetFactoriesAction),
/* harmony export */   "ResetRecipeAction": () => (/* binding */ ResetRecipeAction),
/* harmony export */   "ResetRecipeModulesAction": () => (/* binding */ ResetRecipeModulesAction),
/* harmony export */   "SetBeaconAction": () => (/* binding */ SetBeaconAction),
/* harmony export */   "SetBeaconCountAction": () => (/* binding */ SetBeaconCountAction),
/* harmony export */   "SetBeaconModulesAction": () => (/* binding */ SetBeaconModulesAction),
/* harmony export */   "SetBeaconTotalAction": () => (/* binding */ SetBeaconTotalAction),
/* harmony export */   "SetCostAction": () => (/* binding */ SetCostAction),
/* harmony export */   "SetFactoryAction": () => (/* binding */ SetFactoryAction),
/* harmony export */   "SetFactoryModulesAction": () => (/* binding */ SetFactoryModulesAction),
/* harmony export */   "SetOverclockAction": () => (/* binding */ SetOverclockAction)
/* harmony export */ });
class SetFactoryAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Factory" /* RecipesActionType.SET_FACTORY */;
    }
}
class SetFactoryModulesAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Modules" /* RecipesActionType.SET_FACTORY_MODULES */;
    }
}
class SetBeaconCountAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Beacon Count" /* RecipesActionType.SET_BEACON_COUNT */;
    }
}
class SetBeaconAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Beacon" /* RecipesActionType.SET_BEACON */;
    }
}
class SetBeaconModulesAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Beacon Modules" /* RecipesActionType.SET_BEACON_MODULES */;
    }
}
class SetBeaconTotalAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Beacon Total" /* RecipesActionType.SET_BEACON_TOTAL */;
    }
}
class SetOverclockAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Overclock" /* RecipesActionType.SET_OVERCLOCK */;
    }
}
class SetCostAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Set Cost" /* RecipesActionType.SET_COST */;
    }
}
class ResetRecipeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Reset Recipe" /* RecipesActionType.RESET_RECIPE */;
    }
}
class ResetRecipeModulesAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Recipes] Reset Recipe Modules" /* RecipesActionType.RESET_RECIPE_MODULES */;
    }
}
class ResetFactoriesAction {
    constructor() {
        this.type = "[Recipes] Reset Factories" /* RecipesActionType.RESET_FACTORIES */;
    }
}
class ResetBeaconsAction {
    constructor() {
        this.type = "[Recipes] Reset Beacons" /* RecipesActionType.RESET_BEACONS */;
    }
}
class ResetCostAction {
    constructor() {
        this.type = "[Recipes] Reset Cost" /* RecipesActionType.RESET_COST */;
    }
}


/***/ }),

/***/ 2302:
/*!**************************************************!*\
  !*** ./src/app/store/recipes/recipes.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialRecipesState": () => (/* binding */ initialRecipesState),
/* harmony export */   "recipesReducer": () => (/* binding */ recipesReducer)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.actions */ 5294);


const initialRecipesState = {};
function recipesReducer(state = initialRecipesState, action) {
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__.AppActionType.LOAD:
            return { ...initialRecipesState, ...action.payload.recipesState };
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__.AppActionType.RESET:
        case "[Settings] Set Mod" /* Settings.SettingsActionType.SET_MOD */:
            return initialRecipesState;
        case "[Recipes] Set Factory" /* RecipesActionType.SET_FACTORY */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetFields(_utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'factoryId', action.payload), ['factoryModuleIds', 'beaconCount', 'beaconId', 'beaconModuleIds'], action.payload.id);
        case "[Recipes] Set Modules" /* RecipesActionType.SET_FACTORY_MODULES */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'factoryModuleIds', action.payload);
        case "[Recipes] Set Beacon Count" /* RecipesActionType.SET_BEACON_COUNT */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'beaconCount', action.payload);
        case "[Recipes] Set Beacon" /* RecipesActionType.SET_BEACON */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetField(_utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'beaconId', action.payload), 'beaconModuleIds', action.payload.id);
        case "[Recipes] Set Beacon Modules" /* RecipesActionType.SET_BEACON_MODULES */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'beaconModuleIds', action.payload);
        case "[Recipes] Set Beacon Total" /* RecipesActionType.SET_BEACON_TOTAL */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.assignValue(state, 'beaconTotal', action.payload);
        case "[Recipes] Set Overclock" /* RecipesActionType.SET_OVERCLOCK */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'overclock', action.payload);
        case "[Recipes] Set Cost" /* RecipesActionType.SET_COST */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.compareReset(state, 'cost', action.payload);
        case "[Recipes] Reset Recipe" /* RecipesActionType.RESET_RECIPE */: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        case "[Recipes] Reset Recipe Modules" /* RecipesActionType.RESET_RECIPE_MODULES */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetFields(state, [
                'factoryModuleIds',
                'beaconCount',
                'beaconId',
                'beaconModuleIds',
                'beaconTotal',
            ], action.payload);
        case "[Recipes] Reset Factories" /* RecipesActionType.RESET_FACTORIES */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetFields(state, [
                'factoryId',
                'overclock',
                'factoryModuleIds',
                'beaconCount',
                'beaconId',
                'beaconModuleIds',
                'beaconTotal',
            ]);
        case "[Recipes] Reset Beacons" /* RecipesActionType.RESET_BEACONS */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetFields(state, [
                'beaconCount',
                'beaconId',
                'beaconModuleIds',
                'beaconTotal',
            ]);
        case "[Recipes] Reset Cost" /* RecipesActionType.RESET_COST */:
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.StoreUtility.resetFields(state, ['cost']);
        default:
            return state;
    }
}


/***/ }),

/***/ 6064:
/*!****************************************************!*\
  !*** ./src/app/store/recipes/recipes.selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdjustedDataset": () => (/* binding */ getAdjustedDataset),
/* harmony export */   "getRationalRecipeSettings": () => (/* binding */ getRationalRecipeSettings),
/* harmony export */   "getRecipeSettings": () => (/* binding */ getRecipeSettings),
/* harmony export */   "getRecipesModified": () => (/* binding */ getRecipesModified),
/* harmony export */   "getSrc": () => (/* binding */ getSrc),
/* harmony export */   "recipesState": () => (/* binding */ recipesState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories */ 5698);
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items */ 1090);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings */ 2609);






/* Base selector functions */
const recipesState = (state) => state.recipesState;
/* Complex selectors */
const getRecipeSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(recipesState, _factories__WEBPACK_IMPORTED_MODULE_2__.getFactories, _settings__WEBPACK_IMPORTED_MODULE_4__.getDataset, (state, factories, data) => {
    const value = {};
    if (data?.recipeIds?.length) {
        for (const recipe of data.recipeIds.map((i) => data.recipeEntities[i])) {
            const s = { ...state[recipe.id] };
            if (!s.factoryId) {
                s.factoryId = _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.bestMatch(recipe.producers, factories.ids ?? []);
            }
            const factory = data.factoryEntities[s.factoryId];
            const def = factories.entities[s.factoryId];
            if (factory != null && _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.allowsModules(recipe, factory)) {
                if (!s.factoryModuleIds) {
                    s.factoryModuleIds = _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.defaultModules(data.recipeModuleIds[recipe.id], def.moduleRankIds ?? [], factory.modules ?? 0);
                }
                if (s.beaconCount == null) {
                    s.beaconCount = def.beaconCount;
                }
                s.beaconId = s.beaconId || def.beaconId;
                if (s.beaconId) {
                    const beacon = data.beaconEntities[s.beaconId];
                    if (beacon && !s.beaconModuleIds) {
                        s.beaconModuleIds = new Array(beacon.modules).fill(def.beaconModuleId);
                    }
                }
            }
            else {
                // Factory doesn't support modules, remove any
                delete s.factoryModuleIds;
                delete s.beaconCount;
                delete s.beaconId;
                delete s.beaconModuleIds;
            }
            if (s.beaconTotal &&
                (!s.beaconCount || _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromString(s.beaconCount).isZero())) {
                // No actual beacons, ignore the total beacons
                delete s.beaconTotal;
            }
            s.overclock = s.overclock || def?.overclock;
            value[recipe.id] = s;
        }
    }
    return value;
});
const getRationalRecipeSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getRecipeSettings, (recipeSettings) => Object.keys(recipeSettings).reduce((e, i) => {
    e[i] = new _models__WEBPACK_IMPORTED_MODULE_0__.RationalRecipeSettings(recipeSettings[i]);
    return e;
}, {}));
const getSrc = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(_settings__WEBPACK_IMPORTED_MODULE_4__.getFuelId, _settings__WEBPACK_IMPORTED_MODULE_4__.getRationalMiningBonus, _settings__WEBPACK_IMPORTED_MODULE_4__.getResearchFactor, _settings__WEBPACK_IMPORTED_MODULE_4__.getDataset, (fuelId, miningBonus, researchSpeed, data) => ({
    fuelId,
    miningBonus,
    researchSpeed,
    data,
}));
const getAdjustedDataset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getRationalRecipeSettings, _items__WEBPACK_IMPORTED_MODULE_3__.getItemSettings, _settings__WEBPACK_IMPORTED_MODULE_4__.getDisabledRecipeIds, _settings__WEBPACK_IMPORTED_MODULE_4__.getAdjustmentData, (recipeSettings, itemSettings, disabledRecipeIds, adj) => _utilities__WEBPACK_IMPORTED_MODULE_1__.RecipeUtility.adjustDataset(recipeSettings, itemSettings, disabledRecipeIds, adj.fuelId, adj.proliferatorSprayId, adj.miningBonus, adj.researchSpeed, adj.costFactor, adj.costFactory, adj.data));
const getRecipesModified = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(recipesState, (state) => ({
    factories: Object.keys(state).some((id) => state[id].factoryId || state[id].factoryModuleIds),
    overclock: Object.keys(state).some((id) => state[id].overclock),
    beacons: Object.keys(state).some((id) => state[id].beaconId ||
        state[id].beaconModuleIds ||
        state[id].beaconCount ||
        state[id].beaconTotal),
    cost: Object.keys(state).some((id) => state[id].cost),
}));


/***/ }),

/***/ 2609:
/*!*****************************************!*\
  !*** ./src/app/store/settings/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetCostAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.ResetCostAction),
/* harmony export */   "SetBeaconReceiversAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeaconReceiversAction),
/* harmony export */   "SetBeltAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetBeltAction),
/* harmony export */   "SetCargoWagonAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetCargoWagonAction),
/* harmony export */   "SetCostFactorAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetCostFactorAction),
/* harmony export */   "SetCostFactoryAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetCostFactoryAction),
/* harmony export */   "SetCostIgnoredAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetCostIgnoredAction),
/* harmony export */   "SetCostInputAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetCostInputAction),
/* harmony export */   "SetDisabledRecipesAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetDisabledRecipesAction),
/* harmony export */   "SetDisplayRateAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetDisplayRateAction),
/* harmony export */   "SetFlowRateAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetFlowRateAction),
/* harmony export */   "SetFluidWagonAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetFluidWagonAction),
/* harmony export */   "SetFuelAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetFuelAction),
/* harmony export */   "SetInserterCapacityAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetInserterCapacityAction),
/* harmony export */   "SetInserterTargetAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetInserterTargetAction),
/* harmony export */   "SetMiningBonusAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetMiningBonusAction),
/* harmony export */   "SetModAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetModAction),
/* harmony export */   "SetPipeAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetPipeAction),
/* harmony export */   "SetPresetAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetPresetAction),
/* harmony export */   "SetProliferatorSprayAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetProliferatorSprayAction),
/* harmony export */   "SetResearchSpeedAction": () => (/* reexport safe */ _settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetResearchSpeedAction),
/* harmony export */   "getAdjustmentData": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getAdjustmentData),
/* harmony export */   "getArrayEntities": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getArrayEntities),
/* harmony export */   "getBeaconReceivers": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getBeaconReceivers),
/* harmony export */   "getBeltSpeed": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getBeltSpeed),
/* harmony export */   "getBeltSpeedTxt": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getBeltSpeedTxt),
/* harmony export */   "getColumnOptions": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getColumnOptions),
/* harmony export */   "getColumnsState": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getColumnsState),
/* harmony export */   "getCostFactor": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getCostFactor),
/* harmony export */   "getCostFactory": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getCostFactory),
/* harmony export */   "getCostIgnored": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getCostIgnored),
/* harmony export */   "getCostInput": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getCostInput),
/* harmony export */   "getDataset": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getDataset),
/* harmony export */   "getDefaults": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getDefaults),
/* harmony export */   "getDisabledRecipeIds": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getDisabledRecipeIds),
/* harmony export */   "getDisplayRate": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getDisplayRate),
/* harmony export */   "getDisplayRateInfo": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getDisplayRateInfo),
/* harmony export */   "getEntities": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getEntities),
/* harmony export */   "getFlowRate": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getFlowRate),
/* harmony export */   "getFuelId": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getFuelId),
/* harmony export */   "getGame": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getGame),
/* harmony export */   "getHash": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getHash),
/* harmony export */   "getI18n": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getI18n),
/* harmony export */   "getIdOptions": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getIdOptions),
/* harmony export */   "getInserterCapacity": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getInserterCapacity),
/* harmony export */   "getInserterData": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getInserterData),
/* harmony export */   "getInserterTarget": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getInserterTarget),
/* harmony export */   "getMiningBonus": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getMiningBonus),
/* harmony export */   "getMod": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getMod),
/* harmony export */   "getModId": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getModId),
/* harmony export */   "getModOptions": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getModOptions),
/* harmony export */   "getOptions": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getOptions),
/* harmony export */   "getPreset": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getPreset),
/* harmony export */   "getPresetOptions": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getPresetOptions),
/* harmony export */   "getProliferatorSprayId": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getProliferatorSprayId),
/* harmony export */   "getRateTypeOptions": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRateTypeOptions),
/* harmony export */   "getRationalBeaconReceivers": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalBeaconReceivers),
/* harmony export */   "getRationalCostFactor": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalCostFactor),
/* harmony export */   "getRationalCostFactory": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalCostFactory),
/* harmony export */   "getRationalCostIgnored": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalCostIgnored),
/* harmony export */   "getRationalCostInput": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalCostInput),
/* harmony export */   "getRationalFlowRate": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalFlowRate),
/* harmony export */   "getRationalMiningBonus": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getRationalMiningBonus),
/* harmony export */   "getResearchFactor": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getResearchFactor),
/* harmony export */   "getResearchSpeed": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getResearchSpeed),
/* harmony export */   "getSettings": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getSettings),
/* harmony export */   "getSettingsModified": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getSettingsModified),
/* harmony export */   "getSimplexModifiers": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.getSimplexModifiers),
/* harmony export */   "initialSettingsState": () => (/* reexport safe */ _settings_reducer__WEBPACK_IMPORTED_MODULE_1__.initialSettingsState),
/* harmony export */   "reduceEntities": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.reduceEntities),
/* harmony export */   "settingsReducer": () => (/* reexport safe */ _settings_reducer__WEBPACK_IMPORTED_MODULE_1__.settingsReducer),
/* harmony export */   "settingsState": () => (/* reexport safe */ _settings_selectors__WEBPACK_IMPORTED_MODULE_2__.settingsState)
/* harmony export */ });
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.actions */ 2496);
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.reducer */ 811);
/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.selectors */ 6162);





/***/ }),

/***/ 2496:
/*!****************************************************!*\
  !*** ./src/app/store/settings/settings.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetCostAction": () => (/* binding */ ResetCostAction),
/* harmony export */   "SetBeaconReceiversAction": () => (/* binding */ SetBeaconReceiversAction),
/* harmony export */   "SetBeltAction": () => (/* binding */ SetBeltAction),
/* harmony export */   "SetCargoWagonAction": () => (/* binding */ SetCargoWagonAction),
/* harmony export */   "SetCostFactorAction": () => (/* binding */ SetCostFactorAction),
/* harmony export */   "SetCostFactoryAction": () => (/* binding */ SetCostFactoryAction),
/* harmony export */   "SetCostIgnoredAction": () => (/* binding */ SetCostIgnoredAction),
/* harmony export */   "SetCostInputAction": () => (/* binding */ SetCostInputAction),
/* harmony export */   "SetDisabledRecipesAction": () => (/* binding */ SetDisabledRecipesAction),
/* harmony export */   "SetDisplayRateAction": () => (/* binding */ SetDisplayRateAction),
/* harmony export */   "SetFlowRateAction": () => (/* binding */ SetFlowRateAction),
/* harmony export */   "SetFluidWagonAction": () => (/* binding */ SetFluidWagonAction),
/* harmony export */   "SetFuelAction": () => (/* binding */ SetFuelAction),
/* harmony export */   "SetInserterCapacityAction": () => (/* binding */ SetInserterCapacityAction),
/* harmony export */   "SetInserterTargetAction": () => (/* binding */ SetInserterTargetAction),
/* harmony export */   "SetMiningBonusAction": () => (/* binding */ SetMiningBonusAction),
/* harmony export */   "SetModAction": () => (/* binding */ SetModAction),
/* harmony export */   "SetPipeAction": () => (/* binding */ SetPipeAction),
/* harmony export */   "SetPresetAction": () => (/* binding */ SetPresetAction),
/* harmony export */   "SetProliferatorSprayAction": () => (/* binding */ SetProliferatorSprayAction),
/* harmony export */   "SetResearchSpeedAction": () => (/* binding */ SetResearchSpeedAction)
/* harmony export */ });
class SetPresetAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Preset" /* SettingsActionType.SET_PRESET */;
    }
}
class SetModAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Mod" /* SettingsActionType.SET_MOD */;
    }
}
class SetDisabledRecipesAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Disabled Recipes" /* SettingsActionType.SET_DISABLED_RECIPES */;
    }
}
class SetBeaconReceiversAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Beacon Receivers" /* SettingsActionType.SET_BEACON_RECEIVERS */;
    }
}
class SetBeltAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Belt" /* SettingsActionType.SET_BELT */;
    }
}
class SetPipeAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Pipe" /* SettingsActionType.SET_PIPE */;
    }
}
class SetFuelAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Fuel" /* SettingsActionType.SET_FUEL */;
    }
}
class SetFlowRateAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Flow Rate" /* SettingsActionType.SET_FLOW_RATE */;
    }
}
class SetCargoWagonAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Cargo Wagon" /* SettingsActionType.SET_CARGO_WAGON */;
    }
}
class SetFluidWagonAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Fluid Wagon" /* SettingsActionType.SET_FLUID_WAGON */;
    }
}
class SetDisplayRateAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Display Rate" /* SettingsActionType.SET_DISPLAY_RATE */;
    }
}
class SetMiningBonusAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Mining Bonus" /* SettingsActionType.SET_MINING_BONUS */;
    }
}
class SetResearchSpeedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Research Speed" /* SettingsActionType.SET_RESEARCH_SPEED */;
    }
}
class SetInserterTargetAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Inserter Target" /* SettingsActionType.SET_INSERTER_TARGET */;
    }
}
class SetInserterCapacityAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Inserter Capacity" /* SettingsActionType.SET_INSERTER_CAPACITY */;
    }
}
class SetCostFactorAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Cost Factor" /* SettingsActionType.SET_COST_FACTOR */;
    }
}
class SetCostFactoryAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Factory Cost" /* SettingsActionType.SET_COST_FACTORY */;
    }
}
class SetCostInputAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Input Cost" /* SettingsActionType.SET_COST_INPUT */;
    }
}
class SetCostIgnoredAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Ignored Cost" /* SettingsActionType.SET_COST_IGNORED */;
    }
}
class SetProliferatorSprayAction {
    constructor(payload) {
        this.payload = payload;
        this.type = "[Settings] Set Proliferator Spray" /* SettingsActionType.SET_PROLIFERATOR_SPRAY */;
    }
}
class ResetCostAction {
    constructor() {
        this.type = "[Settings] Reset Cost Modifiers" /* SettingsActionType.RESET_COST */;
    }
}


/***/ }),

/***/ 811:
/*!****************************************************!*\
  !*** ./src/app/store/settings/settings.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialSettingsState": () => (/* binding */ initialSettingsState),
/* harmony export */   "settingsReducer": () => (/* binding */ settingsReducer)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.actions */ 5294);



const initialSettingsState = {
    modId: '1.1',
    displayRate: _models__WEBPACK_IMPORTED_MODULE_0__.DisplayRate.PerMinute,
    preset: _models__WEBPACK_IMPORTED_MODULE_0__.Preset.Minimum,
    beaconReceivers: null,
    flowRate: 1500,
    miningBonus: 0,
    researchSpeed: _models__WEBPACK_IMPORTED_MODULE_0__.ResearchSpeed.Speed6,
    inserterTarget: _models__WEBPACK_IMPORTED_MODULE_0__.InserterTarget.ExpressTransportBelt,
    inserterCapacity: _models__WEBPACK_IMPORTED_MODULE_0__.InserterCapacity.Capacity7,
    costFactor: '1',
    costFactory: '1',
    costInput: '1000000',
    costIgnored: '0',
    proliferatorSprayId: _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Module,
};
function settingsReducer(state = initialSettingsState, action) {
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_2__.AppActionType.LOAD:
            return action.payload.settingsState
                ? { ...initialSettingsState, ...action.payload.settingsState }
                : initialSettingsState;
        case _app_actions__WEBPACK_IMPORTED_MODULE_2__.AppActionType.RESET:
            return initialSettingsState;
        case "[Settings] Set Preset" /* SettingsActionType.SET_PRESET */:
            return { ...state, ...{ preset: action.payload } };
        case "[Settings] Set Mod" /* SettingsActionType.SET_MOD */:
            const newState = {
                ...state,
                ...{
                    modId: action.payload,
                    preset: _models__WEBPACK_IMPORTED_MODULE_0__.Preset.Minimum,
                    beaconReceivers: null,
                    miningBonus: 0,
                    researchSpeed: _models__WEBPACK_IMPORTED_MODULE_0__.ResearchSpeed.Speed6,
                },
            };
            delete newState.disabledRecipeIds;
            delete newState.beltId;
            delete newState.pipeId;
            delete newState.fuelId;
            delete newState.cargoWagonId;
            delete newState.fluidWagonId;
            return newState;
        case "[Settings] Set Disabled Recipes" /* SettingsActionType.SET_DISABLED_RECIPES */:
            return {
                ...state,
                ...{
                    disabledRecipeIds: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.compareValues(action.payload),
                },
            };
        case "[Settings] Set Beacon Receivers" /* SettingsActionType.SET_BEACON_RECEIVERS */:
            return { ...state, ...{ beaconReceivers: action.payload } };
        case "[Settings] Set Belt" /* SettingsActionType.SET_BELT */:
            return {
                ...state,
                ...{ beltId: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.compareValue(action.payload) },
            };
        case "[Settings] Set Pipe" /* SettingsActionType.SET_PIPE */:
            return {
                ...state,
                ...{ pipeId: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.compareValue(action.payload) },
            };
        case "[Settings] Set Fuel" /* SettingsActionType.SET_FUEL */:
            return {
                ...state,
                ...{ fuelId: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.compareValue(action.payload) },
            };
        case "[Settings] Set Flow Rate" /* SettingsActionType.SET_FLOW_RATE */:
            return { ...state, ...{ flowRate: action.payload } };
        case "[Settings] Set Cargo Wagon" /* SettingsActionType.SET_CARGO_WAGON */:
            return {
                ...state,
                ...{ cargoWagonId: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.compareValue(action.payload) },
            };
        case "[Settings] Set Fluid Wagon" /* SettingsActionType.SET_FLUID_WAGON */:
            return {
                ...state,
                ...{ fluidWagonId: _utilities__WEBPACK_IMPORTED_MODULE_1__.StoreUtility.compareValue(action.payload) },
            };
        case "[Settings] Set Display Rate" /* SettingsActionType.SET_DISPLAY_RATE */:
            return { ...state, ...{ displayRate: action.payload.value } };
        case "[Settings] Set Mining Bonus" /* SettingsActionType.SET_MINING_BONUS */:
            return { ...state, ...{ miningBonus: action.payload } };
        case "[Settings] Set Research Speed" /* SettingsActionType.SET_RESEARCH_SPEED */:
            return { ...state, ...{ researchSpeed: action.payload } };
        case "[Settings] Set Inserter Target" /* SettingsActionType.SET_INSERTER_TARGET */:
            return { ...state, ...{ inserterTarget: action.payload } };
        case "[Settings] Set Inserter Capacity" /* SettingsActionType.SET_INSERTER_CAPACITY */:
            return { ...state, ...{ inserterCapacity: action.payload } };
        case "[Settings] Set Cost Factor" /* SettingsActionType.SET_COST_FACTOR */:
            return { ...state, ...{ costFactor: action.payload } };
        case "[Settings] Set Factory Cost" /* SettingsActionType.SET_COST_FACTORY */:
            return { ...state, ...{ costFactory: action.payload } };
        case "[Settings] Set Input Cost" /* SettingsActionType.SET_COST_INPUT */:
            return { ...state, ...{ costInput: action.payload } };
        case "[Settings] Set Ignored Cost" /* SettingsActionType.SET_COST_IGNORED */:
            return { ...state, ...{ costIgnored: action.payload } };
        case "[Settings] Set Proliferator Spray" /* SettingsActionType.SET_PROLIFERATOR_SPRAY */:
            return { ...state, ...{ proliferatorSprayId: action.payload } };
        case "[Settings] Reset Cost Modifiers" /* SettingsActionType.RESET_COST */:
            return {
                ...state,
                ...{
                    costFactor: initialSettingsState.costFactor,
                    costFactory: initialSettingsState.costFactory,
                    costInput: initialSettingsState.costInput,
                    costIgnored: initialSettingsState.costIgnored,
                },
            };
        default:
            return state;
    }
}


/***/ }),

/***/ 6162:
/*!******************************************************!*\
  !*** ./src/app/store/settings/settings.selectors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdjustmentData": () => (/* binding */ getAdjustmentData),
/* harmony export */   "getArrayEntities": () => (/* binding */ getArrayEntities),
/* harmony export */   "getBeaconReceivers": () => (/* binding */ getBeaconReceivers),
/* harmony export */   "getBeltSpeed": () => (/* binding */ getBeltSpeed),
/* harmony export */   "getBeltSpeedTxt": () => (/* binding */ getBeltSpeedTxt),
/* harmony export */   "getColumnOptions": () => (/* binding */ getColumnOptions),
/* harmony export */   "getColumnsState": () => (/* binding */ getColumnsState),
/* harmony export */   "getCostFactor": () => (/* binding */ getCostFactor),
/* harmony export */   "getCostFactory": () => (/* binding */ getCostFactory),
/* harmony export */   "getCostIgnored": () => (/* binding */ getCostIgnored),
/* harmony export */   "getCostInput": () => (/* binding */ getCostInput),
/* harmony export */   "getDataset": () => (/* binding */ getDataset),
/* harmony export */   "getDefaults": () => (/* binding */ getDefaults),
/* harmony export */   "getDisabledRecipeIds": () => (/* binding */ getDisabledRecipeIds),
/* harmony export */   "getDisplayRate": () => (/* binding */ getDisplayRate),
/* harmony export */   "getDisplayRateInfo": () => (/* binding */ getDisplayRateInfo),
/* harmony export */   "getEntities": () => (/* binding */ getEntities),
/* harmony export */   "getFlowRate": () => (/* binding */ getFlowRate),
/* harmony export */   "getFuelId": () => (/* binding */ getFuelId),
/* harmony export */   "getGame": () => (/* binding */ getGame),
/* harmony export */   "getHash": () => (/* binding */ getHash),
/* harmony export */   "getI18n": () => (/* binding */ getI18n),
/* harmony export */   "getIdOptions": () => (/* binding */ getIdOptions),
/* harmony export */   "getInserterCapacity": () => (/* binding */ getInserterCapacity),
/* harmony export */   "getInserterData": () => (/* binding */ getInserterData),
/* harmony export */   "getInserterTarget": () => (/* binding */ getInserterTarget),
/* harmony export */   "getMiningBonus": () => (/* binding */ getMiningBonus),
/* harmony export */   "getMod": () => (/* binding */ getMod),
/* harmony export */   "getModId": () => (/* binding */ getModId),
/* harmony export */   "getModOptions": () => (/* binding */ getModOptions),
/* harmony export */   "getOptions": () => (/* binding */ getOptions),
/* harmony export */   "getPreset": () => (/* binding */ getPreset),
/* harmony export */   "getPresetOptions": () => (/* binding */ getPresetOptions),
/* harmony export */   "getProliferatorSprayId": () => (/* binding */ getProliferatorSprayId),
/* harmony export */   "getRateTypeOptions": () => (/* binding */ getRateTypeOptions),
/* harmony export */   "getRationalBeaconReceivers": () => (/* binding */ getRationalBeaconReceivers),
/* harmony export */   "getRationalCostFactor": () => (/* binding */ getRationalCostFactor),
/* harmony export */   "getRationalCostFactory": () => (/* binding */ getRationalCostFactory),
/* harmony export */   "getRationalCostIgnored": () => (/* binding */ getRationalCostIgnored),
/* harmony export */   "getRationalCostInput": () => (/* binding */ getRationalCostInput),
/* harmony export */   "getRationalFlowRate": () => (/* binding */ getRationalFlowRate),
/* harmony export */   "getRationalMiningBonus": () => (/* binding */ getRationalMiningBonus),
/* harmony export */   "getResearchFactor": () => (/* binding */ getResearchFactor),
/* harmony export */   "getResearchSpeed": () => (/* binding */ getResearchSpeed),
/* harmony export */   "getSettings": () => (/* binding */ getSettings),
/* harmony export */   "getSettingsModified": () => (/* binding */ getSettingsModified),
/* harmony export */   "getSimplexModifiers": () => (/* binding */ getSimplexModifiers),
/* harmony export */   "reduceEntities": () => (/* binding */ reduceEntities),
/* harmony export */   "settingsState": () => (/* binding */ settingsState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments */ 7791);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _datasets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datasets */ 9490);
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preferences */ 5703);
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.reducer */ 811);






/* Base selector functions */
const settingsState = (state) => state.settingsState;
const getPreset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.preset);
const getModId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.modId);
const getBeaconReceivers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.beaconReceivers);
const getFlowRate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.flowRate);
const getDisplayRate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.displayRate);
const getMiningBonus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.miningBonus);
const getResearchSpeed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.researchSpeed);
const getInserterTarget = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.inserterTarget);
const getInserterCapacity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.inserterCapacity);
const getCostFactor = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.costFactor);
const getCostFactory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.costFactory);
const getCostInput = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.costInput);
const getCostIgnored = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.costIgnored);
const getProliferatorSprayId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => state.proliferatorSprayId);
/* Complex selectors */
const getMod = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getModId, _datasets__WEBPACK_IMPORTED_MODULE_2__.getModEntities, (id, data) => data[id]);
const getHash = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getModId, _datasets__WEBPACK_IMPORTED_MODULE_2__.getHashEntities, (id, hashEntities) => hashEntities[id]);
const getGame = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getModId, _datasets__WEBPACK_IMPORTED_MODULE_2__.getModInfoEntities, (id, data) => data[id].game);
const getColumnOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getGame, (game) => (0,_models__WEBPACK_IMPORTED_MODULE_1__.columnOptions)(game));
const getDisplayRateInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getDisplayRate, (displayRate) => _models__WEBPACK_IMPORTED_MODULE_1__.displayRateInfo[displayRate]);
const getRateTypeOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getGame, getDisplayRateInfo, (game, dispRateInfo) => (0,_models__WEBPACK_IMPORTED_MODULE_1__.rateTypeOptions)(dispRateInfo, game));
const getPresetOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getGame, (game) => (0,_models__WEBPACK_IMPORTED_MODULE_1__.presetOptions)(game));
const getModOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getGame, _datasets__WEBPACK_IMPORTED_MODULE_2__.getModSets, (game, modSets) => modSets
    .filter((b) => b.game === game)
    .map((m) => ({
    label: m.name,
    value: m.id,
})));
const getColumnsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getGame, _preferences__WEBPACK_IMPORTED_MODULE_3__.getColumns, (game, col) => {
    switch (game) {
        case _models__WEBPACK_IMPORTED_MODULE_1__.Game.CaptainOfIndustry:
            return {
                ..._preferences__WEBPACK_IMPORTED_MODULE_3__.initialColumnsState,
                ...col,
                ...{
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Wagons]: { ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Wagons], ...{ show: false } },
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Beacons]: { ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Beacons], ...{ show: false } },
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Power]: { ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Power], ...{ show: false } },
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Pollution]: {
                        ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Pollution],
                        ...{ show: false },
                    },
                },
            };
        case _models__WEBPACK_IMPORTED_MODULE_1__.Game.DysonSphereProgram:
            return {
                ..._preferences__WEBPACK_IMPORTED_MODULE_3__.initialColumnsState,
                ...col,
                ...{
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Wagons]: { ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Wagons], ...{ show: false } },
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Beacons]: { ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Beacons], ...{ show: false } },
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Pollution]: {
                        ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Pollution],
                        ...{ show: false },
                    },
                },
            };
        case _models__WEBPACK_IMPORTED_MODULE_1__.Game.Satisfactory:
            return {
                ..._preferences__WEBPACK_IMPORTED_MODULE_3__.initialColumnsState,
                ...col,
                ...{
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Beacons]: { ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Beacons], ...{ show: false } },
                    [_models__WEBPACK_IMPORTED_MODULE_1__.Column.Pollution]: {
                        ...col[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Pollution],
                        ...{ show: false },
                    },
                },
            };
        default:
            return {
                ..._preferences__WEBPACK_IMPORTED_MODULE_3__.initialColumnsState,
                ...col,
            };
    }
});
const getDefaults = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getPreset, getMod, (preset, base) => {
    if (base) {
        const m = base.defaults;
        if (m) {
            let moduleRank = [];
            switch (base.game) {
                case _models__WEBPACK_IMPORTED_MODULE_1__.Game.Factorio: {
                    moduleRank = preset === _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Minimum ? [] : m.moduleRank;
                    break;
                }
                case _models__WEBPACK_IMPORTED_MODULE_1__.Game.DysonSphereProgram: {
                    moduleRank = preset === _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Beacon8 ? m.moduleRank : [];
                    break;
                }
                case _models__WEBPACK_IMPORTED_MODULE_1__.Game.Satisfactory: {
                    moduleRank = m.moduleRank;
                }
            }
            const defaults = {
                beltId: preset === _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Minimum ? m.minBelt : m.maxBelt,
                pipeId: preset === _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Minimum ? m.minPipe : m.maxPipe,
                fuelId: m.fuel,
                cargoWagonId: m.cargoWagon,
                fluidWagonId: m.fluidWagon,
                disabledRecipeIds: m.disabledRecipes,
                factoryRankIds: preset === _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Minimum ? m.minFactoryRank : m.maxFactoryRank,
                moduleRankIds: moduleRank,
                beaconCount: preset < _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Beacon8 ? '0' : preset < _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Beacon12 ? '8' : '12',
                beaconId: m.beacon,
                beaconModuleId: preset < _models__WEBPACK_IMPORTED_MODULE_1__.Preset.Beacon8 ? _models__WEBPACK_IMPORTED_MODULE_1__.ItemId.Module : m.beaconModule,
            };
            return defaults;
        }
    }
    return null;
});
const getSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, getDefaults, (s, d) => ({
    ...s,
    ...{
        beltId: s.beltId ?? d?.beltId,
        pipeId: s.pipeId ?? d?.pipeId,
        fuelId: s.fuelId ?? d?.fuelId,
        cargoWagonId: s.cargoWagonId ?? d?.cargoWagonId,
        fluidWagonId: s.fluidWagonId ?? d?.fluidWagonId,
        disabledRecipeIds: s.disabledRecipeIds ?? d?.disabledRecipeIds ?? [],
    },
}));
const getFuelId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getSettings, (s) => s.fuelId);
const getDisabledRecipeIds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getSettings, (s) => s.disabledRecipeIds);
const getRationalMiningBonus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getMiningBonus, (bonus) => _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(bonus).div(_models__WEBPACK_IMPORTED_MODULE_1__.Rational.hundred));
const getResearchFactor = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getResearchSpeed, (speed) => _models__WEBPACK_IMPORTED_MODULE_1__.researchSpeedFactor[speed]);
const getRationalBeaconReceivers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getBeaconReceivers, (total) => (total ? _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromString(total) : null));
const getRationalFlowRate = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getFlowRate, (rate) => _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromNumber(rate));
const getRationalCostFactor = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getCostFactor, (cost) => _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromString(cost));
const getRationalCostFactory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getCostFactory, (cost) => _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromString(cost));
const getRationalCostInput = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getCostInput, (cost) => _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromString(cost));
const getRationalCostIgnored = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getCostIgnored, (cost) => _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromString(cost));
const getSimplexModifiers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getRationalCostInput, getRationalCostIgnored, _preferences__WEBPACK_IMPORTED_MODULE_3__.getSimplexType, (costInput, costIgnored, simplexType) => ({
    costInput,
    costIgnored,
    simplexType,
}));
const getI18n = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getMod, _datasets__WEBPACK_IMPORTED_MODULE_2__.getI18nEntities, _preferences__WEBPACK_IMPORTED_MODULE_3__.getLanguage, (base, i18n, lang) => (base ? i18n[`${base.id}-${lang}`] : null));
const getDataset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(_datasets__WEBPACK_IMPORTED_MODULE_2__.getAppData, getMod, getI18n, getHash, getDefaults, getGame, (app, mod, i18n, hash, defaults, game) => {
    // Map out entities with mods
    const categoryEntities = getEntities(app.categories, mod?.categories ?? []);
    const appIconPath = `data/${app.id}/icons.png`;
    const modIconPath = `data/${mod?.id}/icons.png`;
    const iconEntities = getEntities(app.icons.map((i) => ({
        ...i,
        ...{ file: i.file ?? appIconPath },
    })), (mod?.icons ?? []).map((i) => ({
        ...i,
        ...{ file: i.file ?? modIconPath },
    })));
    const itemData = getEntities(app.items, mod?.items ?? []);
    const recipeEntities = getEntities(app.recipes, mod?.recipes ?? []);
    const limitations = getArrayEntities(app.limitations, mod?.limitations ?? []);
    // Apply localization
    if (i18n) {
        for (const i of Object.keys(i18n.categories).filter((i) => categoryEntities[i])) {
            categoryEntities[i] = {
                ...categoryEntities[i],
                ...{
                    name: i18n.categories[i],
                },
            };
        }
        for (const i of Object.keys(i18n.items).filter((i) => itemData[i])) {
            itemData[i] = {
                ...itemData[i],
                ...{
                    name: i18n.items[i],
                },
            };
        }
        for (const i of Object.keys(i18n.recipes).filter((i) => recipeEntities[i])) {
            recipeEntities[i] = {
                ...recipeEntities[i],
                ...{
                    name: i18n.recipes[i],
                },
            };
        }
    }
    // Convert to id arrays
    let categoryIds = Object.keys(categoryEntities);
    const iconIds = Object.keys(iconEntities);
    const itemIds = Object.keys(itemData);
    const recipeIds = Object.keys(recipeEntities);
    // Generate temporary object arrays
    const items = itemIds.map((i) => itemData[i]);
    const recipes = recipeIds.map((r) => recipeEntities[r]);
    // Filter for item types
    const beaconIds = items
        .filter((i) => i.beacon != null)
        .sort((a, b) => a.beacon.modules - b.beacon.modules)
        .map((i) => i.id);
    const beltIds = items
        .filter((i) => i.belt)
        .sort((a, b) => 
    /** Don't sort belts in DSP, leave based on stacks */
    game === _models__WEBPACK_IMPORTED_MODULE_1__.Game.DysonSphereProgram
        ? 0
        : _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromJson(a.belt.speed)
            .sub(_models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromJson(b.belt.speed))
            .toNumber())
        .map((i) => i.id);
    const pipeIds = items
        .filter((i) => i.pipe)
        .sort((a, b) => _models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromJson(a.pipe.speed)
        .sub(_models__WEBPACK_IMPORTED_MODULE_1__.Rational.fromJson(b.pipe.speed))
        .toNumber())
        .map((i) => i.id);
    const cargoWagonIds = items
        .filter((i) => i.cargoWagon)
        .sort((a, b) => a.cargoWagon.size - b.cargoWagon.size)
        .map((i) => i.id);
    const fluidWagonIds = items
        .filter((i) => i.fluidWagon)
        .sort((a, b) => a.fluidWagon.capacity - b.fluidWagon.capacity)
        .map((i) => i.id);
    const factoryIds = items.filter((i) => i.factory).map((i) => i.id);
    const modules = items.filter((i) => i.module);
    const moduleIds = modules.map((i) => i.id);
    const beaconModuleIds = modules
        .filter((i) => i.module.productivity == null)
        .map((i) => i.id);
    const prodModuleIds = modules
        .filter((i) => i.module.productivity != null)
        .map((i) => i.id);
    const fuelIds = items
        .filter((i) => i.fuel)
        .sort((a, b) => a.fuel.value - b.fuel.value)
        .reduce((e, f) => {
        const cat = f.fuel.category;
        if (!e[cat]) {
            e[cat] = [];
        }
        e[cat].push(f.id);
        return e;
    }, {});
    // Calculate missing implicit recipe icons
    // For recipes with no icon, use icon of first output product
    recipes
        .filter((r) => !iconEntities[r.id] && !recipeEntities[r.id].icon)
        .forEach((r) => {
        recipeEntities[r.id] = {
            ...recipeEntities[r.id],
            ...{ icon: Object.keys(r.out)[0] },
        };
    });
    // Calculate category item rows
    const categoryItemRows = {};
    for (const id of categoryIds) {
        const rows = [[]];
        const rowItems = items
            .filter((i) => i.category === id)
            .sort((a, b) => a.row - b.row);
        if (rowItems.length) {
            let index = rowItems[0].row;
            for (const item of rowItems) {
                if (item.row > index) {
                    rows.push([]);
                    index = item.row;
                }
                rows[rows.length - 1].push(item.id);
            }
            categoryItemRows[id] = rows;
        }
    }
    categoryIds = categoryIds.filter((c) => categoryItemRows[c]);
    // Convert to rationals
    const beaconEntities = {};
    const beltEntities = {};
    const cargoWagonEntities = {};
    const fluidWagonEntities = {};
    const factoryEntities = {};
    const moduleEntities = {};
    const fuelEntities = {};
    const itemEntities = itemIds.reduce((e, i) => {
        const item = new _models__WEBPACK_IMPORTED_MODULE_1__.RationalItem(itemData[i]);
        if (item.beacon) {
            beaconEntities[i] = item.beacon;
        }
        if (item.belt) {
            beltEntities[i] = item.belt;
        }
        else if (item.pipe) {
            beltEntities[i] = item.pipe;
        }
        if (item.cargoWagon) {
            cargoWagonEntities[i] = item.cargoWagon;
        }
        if (item.fluidWagon) {
            fluidWagonEntities[i] = item.fluidWagon;
        }
        if (item.factory) {
            factoryEntities[i] = item.factory;
        }
        if (item.module) {
            moduleEntities[i] = item.module;
        }
        if (item.fuel) {
            fuelEntities[i] = item.fuel;
        }
        e[i] = item;
        return e;
    }, {});
    const recipeR = recipeIds.reduce((e, r) => {
        e[r] = new _models__WEBPACK_IMPORTED_MODULE_1__.RationalRecipe(recipeEntities[r]);
        return e;
    }, {});
    // Calculate item simple recipes
    const recipeMatches = recipeIds.reduce((e, r) => {
        const recipe = recipeR[r];
        const outputs = Object.keys(recipe.out);
        for (const o of outputs.filter((i) => recipe.produces(i))) {
            if (!e[o]) {
                e[o] = [recipe];
            }
            else {
                e[o].push(recipe);
            }
        }
        return e;
    }, {});
    const itemRecipeId = itemIds.reduce((e, i) => {
        const matches = recipeMatches.hasOwnProperty(i) ? recipeMatches[i] : [];
        if (matches.length === 1) {
            e[i] = matches[0].id;
        }
        return e;
    }, {});
    // Calculate allowed modules for recipes
    const recipeModuleIds = recipes.reduce((e, r) => {
        e[r.id] = modules
            .filter((m) => m.module.limitation == null ||
            limitations[m.module.limitation][r.id])
            .map((m) => m.id);
        return e;
    }, {});
    // Calculate complex recipes
    const simpleRecipeIds = Object.keys(itemRecipeId).map((i) => itemRecipeId[i]);
    const complexRecipeIds = recipeIds
        .filter((r) => simpleRecipeIds.indexOf(r) === -1 ||
        Object.keys(recipeEntities[r].out).length > 1)
        .sort();
    const dataset = {
        game,
        version: mod?.version,
        categoryIds,
        categoryEntities,
        categoryItemRows,
        iconIds,
        iconEntities,
        itemIds,
        itemEntities,
        itemRecipeId,
        beaconIds,
        beaconEntities,
        beltIds,
        pipeIds,
        beltEntities,
        cargoWagonIds,
        cargoWagonEntities,
        fluidWagonIds,
        fluidWagonEntities,
        factoryIds,
        factoryEntities,
        moduleIds,
        beaconModuleIds,
        prodModuleIds,
        moduleEntities,
        fuelIds,
        fuelEntities,
        recipeIds,
        complexRecipeIds,
        recipeEntities,
        recipeR,
        recipeModuleIds,
        hash,
        defaults,
    };
    return dataset;
});
const getOptions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getDataset, (data) => ({
    items: getIdOptions(data.itemIds, data.itemEntities),
    beacons: getIdOptions(data.beaconIds, data.itemEntities),
    belts: getIdOptions(data.beltIds, data.itemEntities),
    pipes: getIdOptions(data.pipeIds, data.itemEntities),
    cargoWagons: getIdOptions(data.cargoWagonIds, data.itemEntities),
    fluidWagons: getIdOptions(data.fluidWagonIds, data.itemEntities),
    modules: getIdOptions(data.moduleIds, data.itemEntities, true),
    beaconModules: getIdOptions(data.beaconModuleIds, data.itemEntities, true),
    prodModules: getIdOptions(data.prodModuleIds, data.itemEntities, true),
    chemicalFuels: getIdOptions(data.fuelIds[_models__WEBPACK_IMPORTED_MODULE_1__.FuelType.Chemical] ?? [], data.itemEntities),
    complexRecipes: getIdOptions(data.complexRecipeIds, data.recipeEntities),
}));
const getBeltSpeed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getDataset, getRationalFlowRate, (data, flowRate) => {
    const value = { [_models__WEBPACK_IMPORTED_MODULE_1__.ItemId.Pipe]: flowRate };
    if (data.beltIds) {
        for (const id of data.beltIds) {
            value[id] = data.beltEntities[id].speed;
        }
    }
    if (data.pipeIds) {
        for (const id of data.pipeIds) {
            value[id] = data.beltEntities[id].speed;
        }
    }
    return value;
});
const getBeltSpeedTxt = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getBeltSpeed, getDisplayRateInfo, (beltSpeed, dispRateInfo) => Object.keys(beltSpeed).reduce((e, beltId) => {
    const speed = beltSpeed[beltId].mul(dispRateInfo.value);
    const speedTxt = Number(speed.toNumber().toFixed(2));
    const rateTxt = dispRateInfo.label;
    e[beltId] = speedTxt + rateTxt;
    return e;
}, {}));
const getAdjustmentData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getFuelId, getProliferatorSprayId, getRationalMiningBonus, getResearchFactor, getRationalCostFactor, getRationalCostFactory, getDataset, (fuelId, proliferatorSprayId, miningBonus, researchSpeed, costFactor, costFactory, data) => ({
    fuelId,
    proliferatorSprayId,
    miningBonus,
    researchSpeed,
    costFactor,
    costFactory,
    data,
}));
const getSettingsModified = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(settingsState, (state) => ({
    cost: state.costFactor !== _settings_reducer__WEBPACK_IMPORTED_MODULE_4__.initialSettingsState.costFactor ||
        state.costFactory !== _settings_reducer__WEBPACK_IMPORTED_MODULE_4__.initialSettingsState.costFactory ||
        state.costInput !== _settings_reducer__WEBPACK_IMPORTED_MODULE_4__.initialSettingsState.costInput ||
        state.costIgnored !== _settings_reducer__WEBPACK_IMPORTED_MODULE_4__.initialSettingsState.costIgnored,
}));
const getInserterData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(getInserterTarget, getInserterCapacity, (target, capacity) => _models__WEBPACK_IMPORTED_MODULE_1__.InserterData[target][capacity]);
function getEntities(app, mod) {
    const entities = (0,_models__WEBPACK_IMPORTED_MODULE_1__.toEntities)(app);
    for (const i of mod) {
        // Used only in development to validate data files
        // istanbul ignore next
        if (src_environments__WEBPACK_IMPORTED_MODULE_0__.environment.debug && mod.filter((m) => m.id === i.id).length > 1) {
            console.warn(`Duplicate id: ${i.id}`);
        }
        entities[i.id] = i;
    }
    return entities;
}
function getArrayEntities(app, mod) {
    let entities = reduceEntities(app);
    entities = reduceEntities(mod, entities);
    return entities;
}
function reduceEntities(value, init = {}) {
    return Object.keys(value).reduce((e, x) => {
        e[x] = (0,_models__WEBPACK_IMPORTED_MODULE_1__.toBoolEntities)(value[x], init[x]);
        return e;
    }, init);
}
function getIdOptions(ids, entities, emptyModule = false) {
    const list = ids.map((i) => ({ label: entities[i].name, value: i }));
    if (emptyModule) {
        list.unshift({ label: 'None', value: _models__WEBPACK_IMPORTED_MODULE_1__.ItemId.Module });
    }
    return list;
}


/***/ }),

/***/ 1201:
/*!******************************************!*\
  !*** ./src/app/store/storage.reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageMetaReducer": () => (/* binding */ storageMetaReducer)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ 5426);

function storageMetaReducer(reducer) {
    let onInit = true;
    return function (state, action) {
        const nextState = reducer(state, action);
        if (onInit) {
            onInit = false;
            return _utilities__WEBPACK_IMPORTED_MODULE_0__.BrowserUtility.mergeState(nextState);
        }
        _utilities__WEBPACK_IMPORTED_MODULE_0__.BrowserUtility.saveState(nextState);
        return nextState;
    };
}


/***/ }),

/***/ 2040:
/*!**********************************************!*\
  !*** ./src/app/utilities/browser.utility.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserUtility": () => (/* binding */ BrowserUtility)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);

class BrowserUtility {
    static get storedState() {
        return this._storedState;
    }
    static get search() {
        return location.search.substring(1);
    }
    static get hash() {
        return location.hash.substring(1);
    }
    static get href() {
        return location.href;
    }
    static get zip() {
        const hash = this.hash;
        return this.search || (hash.length > 1 && hash[1] === '=' && hash) || '';
    }
    static loadState() {
        try {
            const stored = localStorage.getItem(_models__WEBPACK_IMPORTED_MODULE_0__.STATE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        }
        catch (e) {
            console.error('Failed to load state from local storage');
            console.error(e);
            // Delete local storage to repair
            localStorage.removeItem(_models__WEBPACK_IMPORTED_MODULE_0__.STATE_KEY);
        }
        return null;
    }
    static mergeState(initial) {
        const state = BrowserUtility.storedState;
        if (state) {
            if (this.zip) {
                return {
                    ...initial,
                    ...{
                        preferencesState: {
                            ...initial.preferencesState,
                            ...state.preferencesState,
                        },
                    },
                };
            }
            else {
                const merge = { ...initial };
                for (const key of Object.keys(merge)) {
                    merge[key] = {
                        ...merge[key],
                        ...state[key],
                    };
                }
                return merge;
            }
        }
        else {
            return initial;
        }
    }
    static saveState(state) {
        const newState = { ...state };
        delete newState.datasetsState;
        localStorage.setItem(_models__WEBPACK_IMPORTED_MODULE_0__.STATE_KEY, JSON.stringify(newState));
    }
}
BrowserUtility._storedState = BrowserUtility.loadState();


/***/ }),

/***/ 5417:
/*!*********************************************!*\
  !*** ./src/app/utilities/export.utility.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportUtility": () => (/* binding */ ExportUtility)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _browser_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser.utility */ 2040);
/* harmony import */ var _recipe_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.utility */ 46);




const CSV_TYPE = 'text/csv;charset=UTF-8';
const CSV_EXTENSION = '.csv';
const JSON_TYPE = 'text/json;charset=UTF-8';
const JSON_EXTENSION = '.json';
class ExportUtility {
    static stepsToCsv(steps, columns, itemSettings, recipeSettings, data) {
        const json = steps.map((s) => this.stepToJson(s, steps, columns, itemSettings, recipeSettings, data));
        const fields = Object.keys(json[0]);
        const csv = json.map((row) => fields.map((f) => row[f]).join(','));
        csv.unshift(fields.join(','));
        csv.unshift(`"${_browser_utility__WEBPACK_IMPORTED_MODULE_2__.BrowserUtility.href}"`);
        this.saveAsCsv(csv.join('\r\n'));
    }
    /* Don't test dependencies (file-saver) */
    /* istanbul ignore next */
    static saveAsCsv(data) {
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(new Blob([data], { type: CSV_TYPE }), 'factoriolab_list' + CSV_EXTENSION);
    }
    /* Don't test dependencies (file-saver) */
    /* istanbul ignore next */
    static saveAsJson(data) {
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(new Blob([data], { type: JSON_TYPE }), 'factoriolab_flow' + JSON_EXTENSION);
    }
    static stepToJson(step, steps, columns, itemSettings, recipeSettings, data) {
        const exp = {};
        if (step.itemId != null) {
            exp.Item = step.itemId;
            const settings = itemSettings[step.itemId];
            if (step.items != null) {
                exp.Items =
                    '=' + step.items.sub(step.surplus ?? _models__WEBPACK_IMPORTED_MODULE_1__.Rational.zero).toString();
            }
            if (step.surplus != null) {
                exp.Surplus = '=' + step.surplus.toString();
            }
            if (columns[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Belts].show) {
                if (step.belts != null) {
                    exp.Belts = '=' + step.belts.toString();
                }
                exp.Belt = settings.beltId;
            }
            if (columns[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Wagons].show) {
                if (step.wagons != null) {
                    exp.Wagons = '=' + step.wagons.toString();
                }
                exp.Wagon = settings.wagonId;
            }
        }
        if (step.recipeId != null) {
            const recipeId = step.recipeId; // Store non-null
            exp.Recipe = step.recipeId;
            const recipe = data.recipeR[step.recipeId];
            const settings = recipeSettings[step.recipeId];
            const inputs = Object.keys(recipe.in)
                .map((i) => {
                const inStep = steps.find((s) => s.itemId === i);
                return [i, inStep?.parents?.[recipeId]?.toString()];
            })
                .filter((v) => v[1])
                .map((v) => `${v[0]}:${v[1]}`)
                .join(',');
            if (inputs) {
                exp.Inputs = `"${inputs}"`;
            }
            if (settings.factoryId != null) {
                const factory = data.factoryEntities[settings.factoryId];
                const allowsModules = _recipe_utility__WEBPACK_IMPORTED_MODULE_3__.RecipeUtility.allowsModules(recipe, factory);
                if (columns[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Factories].show) {
                    if (step.factories != null) {
                        exp.Factories = '=' + step.factories.toString();
                    }
                    exp.Factory = settings.factoryId;
                    if (allowsModules && settings.factoryModuleIds != null) {
                        exp.FactoryModules = `"${settings.factoryModuleIds.join(',')}"`;
                    }
                }
                if (columns[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Beacons].show && allowsModules) {
                    exp.Beacons = settings.beaconCount;
                    exp.Beacon = settings.beaconId;
                    if (settings.beaconModuleIds != null) {
                        exp.BeaconModules = `"${settings.beaconModuleIds.join(',')}"`;
                    }
                }
                if (columns[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Power].show) {
                    if (step.power != null) {
                        exp.Power = '=' + step.power.toString();
                    }
                }
                if (columns[_models__WEBPACK_IMPORTED_MODULE_1__.Column.Pollution].show) {
                    if (step.pollution != null) {
                        exp.Pollution = '=' + step.pollution.toString();
                    }
                }
            }
        }
        if (step.outputs != null) {
            const outputs = step.outputs; // Store as non-null
            const outputsStr = Object.keys(outputs)
                .map((o) => `${o}:${outputs[o].toString()}`)
                .join(',');
            exp.Outputs = `"${outputsStr}"`;
        }
        if (step.parents != null) {
            const parents = step.parents; // Store as non-null
            const parentsStr = Object.keys(parents)
                .map((p) => `${p}:${parents[p].toString()}`)
                .join(',');
            exp.Targets = `"${parentsStr}"`;
        }
        return exp;
    }
}


/***/ }),

/***/ 5426:
/*!************************************!*\
  !*** ./src/app/utilities/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserUtility": () => (/* reexport safe */ _browser_utility__WEBPACK_IMPORTED_MODULE_0__.BrowserUtility),
/* harmony export */   "ExportUtility": () => (/* reexport safe */ _export_utility__WEBPACK_IMPORTED_MODULE_1__.ExportUtility),
/* harmony export */   "RateUtility": () => (/* reexport safe */ _rate_utility__WEBPACK_IMPORTED_MODULE_2__.RateUtility),
/* harmony export */   "RecipeUtility": () => (/* reexport safe */ _recipe_utility__WEBPACK_IMPORTED_MODULE_3__.RecipeUtility),
/* harmony export */   "SimplexUtility": () => (/* reexport safe */ _simplex_utility__WEBPACK_IMPORTED_MODULE_4__.SimplexUtility),
/* harmony export */   "StoreUtility": () => (/* reexport safe */ _store_utility__WEBPACK_IMPORTED_MODULE_5__.StoreUtility)
/* harmony export */ });
/* harmony import */ var _browser_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.utility */ 2040);
/* harmony import */ var _export_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./export.utility */ 5417);
/* harmony import */ var _rate_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate.utility */ 8662);
/* harmony import */ var _recipe_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.utility */ 46);
/* harmony import */ var _simplex_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simplex.utility */ 7940);
/* harmony import */ var _store_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.utility */ 1343);








/***/ }),

/***/ 8662:
/*!*******************************************!*\
  !*** ./src/app/utilities/rate.utility.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateUtility": () => (/* binding */ RateUtility)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);

const ROOT_ID = '';
class RateUtility {
    static addStepsFor(itemId, rate, steps, itemSettings, data, parentId) {
        let recipe;
        if (!itemSettings[itemId].ignore) {
            recipe = data.recipeR[data.itemRecipeId[itemId]];
            if (recipe &&
                (Object.keys(recipe.out).length > 1 || !recipe.produces(itemId))) {
                // Ignore dedicated recipe if it has multiple outputs
                // or does not produce a net-output of the item
                recipe = null;
            }
        }
        // Find existing step for this item
        let step = steps.find((s) => s.itemId === itemId);
        if (step != null) {
            steps.push(steps.splice(steps.indexOf(step), 1)[0]);
        }
        else {
            // No existing step found, create a new one
            step = {
                id: steps.length.toString(),
                itemId,
                items: _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero,
            };
            if (recipe) {
                step.recipeId = recipe.id;
            }
            steps.push(step);
        }
        // Adjust for consumption instead of production if desired
        if (recipe?.adjustProd) {
            rate = rate.mul(recipe.productivity);
        }
        // Add items to the step
        step.items = (step.items ?? _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero).add(rate);
        if (parentId != null) {
            this.addParentValue(step, parentId, rate);
        }
        else {
            step.output = step.items;
        }
        if (recipe) {
            // Calculate number of outputs from recipe
            const out = recipe.out[itemId].sub(recipe.in[itemId] ?? _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero);
            // Calculate factories
            step.factories = step.items.mul(recipe.time).div(out);
            this.adjustPowerPollution(step, recipe);
            // Recurse adding steps for ingredients
            if (step.items.nonzero()) {
                for (const ingredient of Object.keys(recipe.in)) {
                    const ingredientRate = rate.mul(recipe.in[ingredient]).div(out);
                    if (ingredient === itemId) {
                        this.addParentValue(step, recipe.id, ingredientRate);
                    }
                    else {
                        RateUtility.addStepsFor(ingredient, ingredientRate, steps, itemSettings, data, recipe.id);
                    }
                }
            }
        }
    }
    static addParentValue(step, parentId, rate) {
        if (!step.parents) {
            step.parents = {};
        }
        if (step.parents[parentId]) {
            step.parents[parentId] = step.parents[parentId].add(rate);
        }
        else {
            step.parents[parentId] = rate;
        }
    }
    static adjustPowerPollution(step, recipe) {
        if (step.factories?.nonzero() && !recipe.part) {
            if (recipe.drain?.nonzero() || recipe.consumption?.nonzero()) {
                // Reset power
                step.power = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                // Calculate drain
                if (recipe.drain?.nonzero()) {
                    step.power = step.power.add(step.factories.ceil().mul(recipe.drain));
                }
                // Calculate consumption
                if (recipe.consumption?.nonzero()) {
                    step.power = step.power.add(step.factories.mul(recipe.consumption));
                }
            }
            // Calculate pollution
            if (recipe.pollution?.nonzero()) {
                step.pollution = step.factories.mul(recipe.pollution);
            }
        }
    }
    static calculateBelts(steps, itemSettings, recipeSettings, beltSpeed, data) {
        for (const step of steps) {
            let noItems = false;
            if (step.recipeId != null) {
                const factoryId = recipeSettings[step.recipeId].factoryId;
                if (factoryId != null) {
                    const factory = data.factoryEntities[factoryId];
                    const recipe = data.recipeEntities[step.recipeId];
                    // No belts/wagons on research rows or rocket part rows
                    noItems = !!(factory.research || (factory.silo && !recipe.part));
                }
            }
            if (noItems) {
                delete step.belts;
                delete step.wagons;
            }
            else if (step.itemId != null) {
                const belt = itemSettings[step.itemId].beltId;
                if (step.items != null && belt != null) {
                    step.belts = step.items.div(beltSpeed[belt]);
                }
                const wagon = itemSettings[step.itemId].wagonId;
                if (step.items != null && wagon != null) {
                    const item = data.itemEntities[step.itemId];
                    if (item.stack) {
                        step.wagons = step.items.div(data.cargoWagonEntities[wagon].size.mul(item.stack));
                    }
                    else {
                        step.wagons = step.items.div(data.fluidWagonEntities[wagon].capacity);
                    }
                }
            }
        }
        return steps;
    }
    static calculateOutputs(steps, data) {
        for (const step of steps) {
            if (step.recipeId && step.factories?.nonzero()) {
                const recipe = data.recipeR[step.recipeId];
                const outputs = {};
                for (const id of Object.keys(recipe.out)) {
                    if (recipe.out[id].nonzero()) {
                        const val = recipe.out[id].mul(step.factories).div(recipe.time);
                        const outStep = steps.find((s) => s.itemId === id);
                        if (outStep?.items?.nonzero()) {
                            outputs[id] = val.div(outStep.items);
                        }
                    }
                }
                if (Object.keys(outputs).length > 0) {
                    step.outputs = outputs;
                }
            }
        }
        return steps;
    }
    static calculateBeacons(steps, beaconReceivers, recipeSettings, data) {
        if (beaconReceivers && beaconReceivers.nonzero()) {
            for (const step of steps) {
                if (step.recipeId &&
                    step.factories?.nonzero() &&
                    !data.recipeEntities[step.recipeId].part &&
                    recipeSettings[step.recipeId].beaconCount?.nonzero()) {
                    const settings = recipeSettings[step.recipeId];
                    if (settings.beaconId != null) {
                        if (settings.beaconTotal != null) {
                            step.beacons = settings.beaconTotal;
                        }
                        else if (settings.beaconCount != null) {
                            step.beacons = step.factories
                                .ceil()
                                .mul(settings.beaconCount)
                                .div(beaconReceivers);
                            if (step.beacons.lt(settings.beaconCount)) {
                                // Can't be less than beacon count
                                step.beacons = settings.beaconCount;
                            }
                        }
                        const beacon = data.beaconEntities[settings.beaconId];
                        if (beacon.usage?.nonzero() && step.beacons != null) {
                            step.power = (step.power ?? _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero).add(step.beacons.mul(beacon.usage));
                        }
                    }
                }
            }
        }
        return steps;
    }
    static displayRate(steps, dispRateInfo) {
        for (const step of steps) {
            if (step.items) {
                if (step.parents) {
                    for (const key of Object.keys(step.parents)) {
                        step.parents[key] = step.parents[key].div(step.items);
                    }
                }
                step.items = step.items.mul(dispRateInfo.value);
            }
            if (step.surplus) {
                step.surplus = step.surplus.mul(dispRateInfo.value);
            }
            if (step.wagons) {
                step.wagons = step.wagons.mul(dispRateInfo.value);
            }
            if (step.pollution) {
                step.pollution = step.pollution.mul(dispRateInfo.value);
            }
            if (step.output) {
                step.output = step.output.mul(dispRateInfo.value);
            }
        }
        return steps;
    }
    static sortHierarchy(steps) {
        // Determine parents
        const parents = {};
        for (const step of steps) {
            if (step.parents && Object.keys(step.parents).length === 1) {
                const recipeId = Object.keys(step.parents)[0];
                const parent = steps.find((s) => s.recipeId === recipeId);
                if (parent) {
                    if (step.id === parent.id) {
                        parents[step.id] = ROOT_ID;
                    }
                    else {
                        parents[step.id] = parent.id;
                    }
                }
            }
            else {
                parents[step.id] = ROOT_ID;
            }
        }
        // Set up hierarchy groups
        const groups = {};
        for (let i = 0; i < steps.length; i++) {
            const s = steps[i];
            const p = parents[s.id];
            if (!groups[p]) {
                groups[p] = [];
            }
            groups[p].push(s);
        }
        // Perform recursive sort
        const sorted = this.sortRecursive(groups, ROOT_ID, []);
        // Add back any steps left out (potentially circular loops)
        sorted.push(...steps.filter((s) => sorted.indexOf(s) === -1));
        return sorted;
    }
    static sortRecursive(groups, id, result) {
        if (!groups[id]) {
            return [];
        }
        const group = groups[id];
        for (let i = 0; i < group.length; i++) {
            const s = group[i];
            result.push(s);
            this.sortRecursive(groups, s.id, result);
        }
        return result;
    }
    static copy(steps) {
        return steps.map((s) => s.parents ? { ...s, ...{ parents: { ...s.parents } } } : { ...s });
    }
}


/***/ }),

/***/ 46:
/*!*********************************************!*\
  !*** ./src/app/utilities/recipe.utility.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeUtility": () => (/* binding */ RecipeUtility)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);

class RecipeUtility {
    /** Determines what option to use based on preferred rank */
    static bestMatch(options, rank) {
        if (options.length > 1) {
            for (const r of rank) {
                if (options.indexOf(r) !== -1) {
                    // Return first matching option in rank list
                    return r;
                }
            }
        }
        return options[0];
    }
    /** Determines default array of modules for a given recipe */
    static defaultModules(allowedModuleIds, moduleRankIds, count) {
        const module = this.bestMatch([_models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Module, ...allowedModuleIds], moduleRankIds);
        return new Array(count).fill(module);
    }
    static adjustRecipe(recipeId, fuelId, proliferatorSprayId, miningBonus, researchFactor, settings, itemSettings, data) {
        const recipe = new _models__WEBPACK_IMPORTED_MODULE_0__.RationalRecipe(data.recipeEntities[recipeId]);
        if (settings.factoryId != null) {
            const factory = data.factoryEntities[settings.factoryId];
            if (factory.speed != null) {
                // Adjust for factory speed
                recipe.time = recipe.time.div(factory.speed);
            }
            else {
                // Calculate based on belt speed
                // Use minimum speed of all inputs/outputs in recipe
                const ids = [
                    ...Object.keys(recipe.in).filter((i) => recipe.in[i].nonzero()),
                    ...Object.keys(recipe.out).filter((i) => recipe.out[i].nonzero()),
                ];
                const belts = ids
                    .map((i) => itemSettings[i].beltId)
                    .filter((b) => b != null)
                    .map((beltId) => data.beltEntities[beltId]);
                let minSpeed = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                for (const b of belts.filter((b) => b != null)) {
                    if (minSpeed.lt(b.speed)) {
                        minSpeed = b.speed;
                    }
                }
                recipe.time = recipe.time.div(minSpeed);
            }
            if (factory.research) {
                // Adjust for research factor
                recipe.time = recipe.time.div(researchFactor);
            }
            // Calculate factors
            let speed = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.one;
            let prod = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.one;
            let consumption = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.one;
            let pollution = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.one;
            if (factory.mining) {
                // Adjust for mining bonus
                prod = prod.add(miningBonus);
            }
            const proliferatorSprays = {};
            // Modules
            if (settings.factoryModuleIds && settings.factoryModuleIds.length) {
                for (const id of settings.factoryModuleIds) {
                    const module = data.moduleEntities[id];
                    if (module) {
                        if (module.speed) {
                            speed = speed.add(module.speed);
                        }
                        if (module.productivity) {
                            prod = prod.add(module.productivity);
                        }
                        if (module.consumption) {
                            consumption = consumption.add(module.consumption);
                        }
                        if (module.pollution) {
                            pollution = pollution.add(module.pollution);
                        }
                        if (module.sprays) {
                            let sprays = module.sprays;
                            // If proliferator is applied to proliferator, apply productivity bonus to sprays
                            const pModule = data.moduleEntities[proliferatorSprayId];
                            if (pModule) {
                                sprays = sprays
                                    .mul(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.one.add(pModule.productivity ?? _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero))
                                    .floor(); // DSP rounds down # of sprays
                            }
                            // Calculate amount of proliferator required for this recipe
                            const pId = module.proliferator;
                            if (pId) {
                                if (!proliferatorSprays[pId]) {
                                    proliferatorSprays[pId] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                                }
                                proliferatorSprays[pId] = proliferatorSprays[pId].add(sprays);
                            }
                        }
                    }
                }
            }
            // Beacons
            const beaconModules = settings.beaconModuleIds?.filter((m) => m !== _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Module && data.moduleEntities[m]);
            if (beaconModules?.length &&
                settings.beaconId &&
                settings.beaconCount?.nonzero()) {
                for (const id of beaconModules) {
                    const module = data.moduleEntities[id];
                    const beacon = data.beaconEntities[settings.beaconId];
                    const factor = settings.beaconCount.mul(beacon.effectivity);
                    if (module.speed) {
                        speed = speed.add(module.speed.mul(factor));
                    }
                    if (module.productivity) {
                        prod = prod.add(module.productivity.mul(factor));
                    }
                    if (module.consumption) {
                        consumption = consumption.add(module.consumption.mul(factor));
                    }
                    if (module.pollution) {
                        pollution = pollution.add(module.pollution.mul(factor));
                    }
                }
            }
            // Check for speed, consumption, or pollution below minimum value (20%)
            if (speed.lt(this.MIN_FACTOR)) {
                speed = this.MIN_FACTOR;
            }
            if (consumption.lt(this.MIN_FACTOR)) {
                consumption = this.MIN_FACTOR;
            }
            if (pollution.lt(this.MIN_FACTOR)) {
                pollution = this.MIN_FACTOR;
            }
            // Overclock effects
            let oc;
            if (settings.overclock && !settings.overclock.eq(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred)) {
                if (factory.overclockFactor) {
                    const ratio = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred.div(settings.overclock);
                    const factor = Math.pow(ratio.toNumber(), 1 / factory.overclockFactor);
                    oc = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(factor).reciprocal();
                }
                else {
                    oc = settings.overclock.div(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.hundred);
                }
                speed = speed.mul(oc);
            }
            // Calculate module/beacon effects
            // Speed
            recipe.time = recipe.time.div(speed);
            // Productivity
            for (const outId of Object.keys(recipe.out)) {
                if (recipe.catalyst?.[outId]) {
                    // Catalyst - only multiply prod by extra produced
                    const catalyst = recipe.catalyst[outId];
                    const affected = recipe.out[outId].sub(catalyst);
                    // Only change output if affected amount > 0
                    if (affected.gt(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero)) {
                        recipe.out[outId] = catalyst.add(affected.mul(prod));
                    }
                }
                else {
                    recipe.out[outId] = recipe.out[outId].mul(prod);
                }
            }
            recipe.productivity = prod;
            // Log to adjust prod for research products
            if (factory.research) {
                recipe.adjustProd = true;
            }
            // Power
            recipe.drain = factory.drain;
            let usage = (recipe.usage ? recipe.usage : factory.usage) || _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
            if (oc) {
                const factor = Math.pow(oc.toNumber(), 1.6);
                usage = usage.mul(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.fromNumber(factor));
            }
            recipe.consumption =
                factory.type === _models__WEBPACK_IMPORTED_MODULE_0__.EnergyType.Electric
                    ? usage.mul(consumption)
                    : _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
            // Pollution
            recipe.pollution =
                factory.pollution && settings.factoryId !== _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Pumpjack
                    ? factory.pollution
                        .div(this.POLLUTION_FACTOR)
                        .mul(pollution)
                        .mul(consumption)
                    : _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
            // Add factory consumption
            if (factory.consumption) {
                const consumption = factory.consumption;
                for (const id of Object.keys(consumption)) {
                    const amount = recipe.time.div(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.sixty).mul(consumption[id]);
                    recipe.in[id] = (recipe.in[id] || _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero).add(amount);
                }
            }
            // Calculate burner fuel inputs
            if (factory.type === _models__WEBPACK_IMPORTED_MODULE_0__.EnergyType.Burner && usage.nonzero()) {
                let rFuelId = fuelId;
                if (factory.category != null &&
                    factory.category !== _models__WEBPACK_IMPORTED_MODULE_0__.FuelType.Chemical) {
                    // Try to find matching input for burning recipes
                    const ins = Object.keys(recipe.in);
                    const fuels = data.fuelIds[factory.category];
                    rFuelId = ins.find((i) => fuels.indexOf(i) !== -1) || fuels[0];
                }
                if (rFuelId) {
                    const fuel = data.fuelEntities[rFuelId];
                    if (fuel) {
                        const fuelIn = recipe.time
                            .mul(usage)
                            .div(fuel.value)
                            .div(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.thousand);
                        recipe.in[rFuelId] = (recipe.in[rFuelId] || _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero).add(fuelIn);
                        if (fuel.result) {
                            recipe.out[fuel.result] = (recipe.out[fuel.result] || _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero).add(fuelIn);
                        }
                    }
                }
            }
            // Calculate proliferator usage
            if (Object.keys(proliferatorSprays).length > 0) {
                const proliferatorUses = {};
                for (const pId of Object.keys(proliferatorSprays)) {
                    proliferatorUses[pId] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                    for (const id of Object.keys(recipe.in)) {
                        const sprays = proliferatorSprays[pId];
                        const amount = recipe.in[id].div(sprays);
                        proliferatorUses[pId] = proliferatorUses[pId].add(amount);
                    }
                }
                // If proliferator spray is applied to proliferator, add its usage to inputs
                const pModule = data.moduleEntities[proliferatorSprayId];
                if (pModule && pModule.sprays) {
                    const sprays = pModule.sprays
                        .mul(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.one.add(pModule.productivity ?? _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero))
                        .floor() // DSP rounds down # of sprays
                        .sub(_models__WEBPACK_IMPORTED_MODULE_0__.Rational.one); // Subtract one spray of self
                    let usage = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                    for (const id of Object.keys(proliferatorUses)) {
                        const amount = proliferatorUses[id].div(sprays);
                        usage = usage.add(amount);
                    }
                    const pId = pModule.proliferator;
                    if (pId) {
                        if (!proliferatorUses[pId]) {
                            proliferatorUses[pId] = _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero;
                        }
                        proliferatorUses[pId] = proliferatorUses[pId].add(usage);
                    }
                }
                // Add proliferator consumption to recipe inputs
                // Assume recipe already has listed inputs, otherwise it could not be proliferated
                for (const pId of Object.keys(proliferatorUses)) {
                    if (!recipe.in[pId]) {
                        recipe.in[pId] = proliferatorUses[pId];
                    }
                    else {
                        recipe.in[pId] = recipe.in[pId].add(proliferatorUses[pId]);
                    }
                }
            }
        }
        return recipe;
    }
    /** Adjust rocket launch and rocket part recipes */
    static adjustSiloRecipes(recipeR, settings, data) {
        for (const partId of Object.keys(recipeR)) {
            const partFactoryId = settings[partId].factoryId;
            if (partFactoryId) {
                const rocketFactory = data.factoryEntities[partFactoryId];
                const rocketRecipe = recipeR[partId];
                if (rocketFactory?.silo && !rocketRecipe.part) {
                    const itemId = Object.keys(rocketRecipe.out)[0];
                    const factor = rocketFactory.silo.parts.div(rocketRecipe.out[itemId]);
                    for (const launchId of Object.keys(recipeR).filter((i) => recipeR[i].part === partId)) {
                        if (partFactoryId === settings[launchId].factoryId) {
                            recipeR[launchId].time = rocketRecipe.time
                                .mul(factor)
                                .add(rocketFactory.silo.launch);
                        }
                    }
                    rocketRecipe.time = rocketRecipe.time
                        .mul(factor)
                        .add(rocketFactory.silo.launch)
                        .div(factor);
                }
            }
        }
        return recipeR;
    }
    static getProductStepData(productSteps, product) {
        const steps = productSteps[product.id];
        if (steps.length === 0) {
            return null;
        }
        else if (product.viaId) {
            return steps.find((r) => r[0] === product.viaId) ?? null;
        }
        else {
            return steps[0];
        }
    }
    static allowsModules(recipe, factory) {
        return ((!factory.silo || !recipe.part) &&
            factory.modules != null &&
            factory.modules > 0);
    }
    static adjustDataset(recipeSettings, itemSettings, disabledRecipeIds, fuelId, proliferatorSprayId, miningBonus, researchSpeed, costFactor, costFactory, data) {
        const recipeR = this.adjustRecipes(recipeSettings, itemSettings, fuelId, proliferatorSprayId, miningBonus, researchSpeed, data);
        this.adjustCost(recipeR, recipeSettings, costFactor, costFactory);
        const itemRecipeId = { ...data.itemRecipeId };
        // Check for calculated default recipe ids
        for (const id of data.itemIds.filter((i) => !data.itemRecipeId[i])) {
            const rec = itemSettings[id].recipeId;
            if (rec && disabledRecipeIds.indexOf(rec) === -1) {
                itemRecipeId[id] = rec;
            }
            else {
                const recipes = data.recipeIds
                    .map((r) => recipeR[r])
                    .filter((r) => r.produces(id) && disabledRecipeIds.indexOf(r.id) === -1);
                if (recipes.length === 1) {
                    itemRecipeId[id] = recipes[0].id;
                }
            }
        }
        // Check for loops in default recipes
        for (const id of Object.keys(data.itemRecipeId)) {
            this.cleanCircularRecipes(id, recipeR, itemRecipeId);
        }
        return { ...data, ...{ recipeR, itemRecipeId } };
    }
    static defaultRecipe(itemId, disabledRecipeIds, data) {
        let recipeId;
        const recipes = data.recipeIds
            .map((r) => data.recipeR[r])
            .filter((r) => r.produces(itemId) && disabledRecipeIds.indexOf(r.id) === -1);
        if (recipes.length === 1 && Object.keys(recipes[0].out).length === 1) {
            recipeId = recipes[0].id;
        }
        return recipeId;
    }
    static adjustRecipes(recipeSettings, itemSettings, fuelId, proliferatorSprayId, miningBonus, researchSpeed, data) {
        return this.adjustSiloRecipes(data.recipeIds.reduce((e, i) => {
            e[i] = this.adjustRecipe(i, fuelId, proliferatorSprayId, miningBonus, researchSpeed, recipeSettings[i], itemSettings, data);
            return e;
        }, {}), recipeSettings, data);
    }
    static adjustCost(recipeR, recipeSettings, costFactor, costFactory) {
        for (const id of Object.keys(recipeR)) {
            const recipe = recipeR[id];
            if (recipeSettings[id].cost) {
                recipe.cost = recipeSettings[id].cost;
            }
            else if (recipe.cost) {
                // Recipe has a declared cost, base this on output items not factories
                // Calculate total output, sum, and multiply cost by output
                const output = Object.keys(recipe.out)
                    .reduce((v, o) => v.add(recipe.out[o]), _models__WEBPACK_IMPORTED_MODULE_0__.Rational.zero)
                    .div(recipe.time);
                recipe.cost = output.mul(recipe.cost).mul(costFactor);
            }
            else {
                // Adjust based on recipe time so that this is based on # factories
                recipe.cost = costFactory;
            }
        }
    }
    static adjustProduct(product, productSteps, data) {
        if (product.rateType === _models__WEBPACK_IMPORTED_MODULE_0__.RateType.Factories) {
            product = { ...product };
            if (!product.viaId) {
                const simpleRecipeId = data.itemRecipeId[product.itemId];
                if (simpleRecipeId) {
                    product.viaId = simpleRecipeId;
                }
                else {
                    const via = this.getProductStepData(productSteps, product);
                    if (via) {
                        product.viaId = via[0];
                    }
                }
            }
        }
        else if (!product.viaId) {
            product = { ...product, ...{ viaId: product.itemId } };
        }
        return product;
    }
    static cleanCircularRecipes(itemId, recipeR, itemRecipeId, itemIds = []) {
        const recipeId = itemRecipeId[itemId];
        if (recipeId) {
            if (itemIds.indexOf(itemId) !== -1) {
                // Found a circular loop
                delete itemRecipeId[itemId];
            }
            else {
                const recipe = recipeR[recipeId];
                if (recipe.produces(itemId) && recipe.in) {
                    // Need to check recipe inputs for circular loops
                    itemIds = [...itemIds, itemId];
                    for (const ingredient of Object.keys(recipe.in).filter((i) => i !== itemId)) {
                        this.cleanCircularRecipes(ingredient, recipeR, itemRecipeId, itemIds);
                    }
                }
            }
        }
    }
}
RecipeUtility.MIN_FACTOR = new _models__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(1), BigInt(5));
RecipeUtility.POLLUTION_FACTOR = new _models__WEBPACK_IMPORTED_MODULE_0__.Rational(BigInt(60));


/***/ }),

/***/ 7940:
/*!**********************************************!*\
  !*** ./src/app/utilities/simplex.utility.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplexUtility": () => (/* binding */ SimplexUtility)
/* harmony export */ });
/* harmony import */ var glpk_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glpk-ts */ 6675);
/* harmony import */ var glpk_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glpk_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments */ 7791);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _rate_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate.utility */ 8662);




const FLOAT_TOLERANCE = 1e-10;
const simplexConfig = src_environments__WEBPACK_IMPORTED_MODULE_1__.environment.debug
    ? // Don't test debug environment level
        // istanbul ignore next
        {}
    : { msgLevel: 'off' };
class SimplexUtility {
    /** Solve all remaining steps using simplex method, if necessary */
    static solve(steps, itemSettings, disabledRecipeIds, costInput, costIgnored, simplexType, data, error = true) {
        if (simplexType === _models__WEBPACK_IMPORTED_MODULE_2__.SimplexType.Disabled || !steps.length) {
            return { steps, resultType: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Skipped };
        }
        // Get matrix state
        const state = this.getState(steps, itemSettings, disabledRecipeIds, costInput, costIgnored, simplexType, data);
        if (state == null) {
            // Matrix solution is not required
            return { steps, resultType: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Skipped };
        }
        // Get solution for matrix state
        const solution = this.getSolution(state, error);
        if (solution.resultType === _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Solved ||
            solution.resultType === _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Cached) {
            // Update steps with solution
            this.updateSteps(steps, solution, state);
        }
        return {
            steps,
            resultType: solution.resultType,
            pivots: solution.pivots,
            time: solution.time,
            A: solution.A,
            O: solution.O,
            itemIds: solution.itemIds,
            recipeIds: solution.recipeIds,
            inputIds: solution.inputIds,
        };
    }
    /** Solve simplex for a given item id and return recipes or items in steps */
    static getSteps(itemId, itemSettings, disabledRecipeIds, costInput, costIgnored, simplexType, data, recipes) {
        let steps = [];
        _rate_utility__WEBPACK_IMPORTED_MODULE_3__.RateUtility.addStepsFor(itemId, _models__WEBPACK_IMPORTED_MODULE_2__.Rational.one, steps, itemSettings, data);
        steps = this.solve(steps, itemSettings, disabledRecipeIds, costInput, costIgnored, simplexType, data, false).steps;
        if (recipes) {
            return steps
                .filter((s) => s.recipeId != null)
                .sort((a, b) => data.recipeR[b.recipeId]
                .output(itemId)
                .sub(data.recipeR[a.recipeId].output(itemId))
                .toNumber())
                .map((s) => [s.recipeId, s.factories]);
        }
        else {
            return steps
                .filter((s) => s.itemId != null && s.items != null)
                .map((s) => [s.itemId, s.items]);
        }
    }
    //#region Setup
    static getState(steps, itemSettings, disabledRecipeIds, costInput, costIgnored, simplexType, data) {
        // Set up state object
        const state = {
            recipes: {},
            items: {},
            inputIds: [],
            recipeIds: data.recipeIds.filter((r) => disabledRecipeIds.indexOf(r) === -1),
            itemIds: data.itemIds.filter((i) => !itemSettings[i].ignore),
            costInput,
            costIgnored,
            simplexType,
            data,
        };
        // Check for unsolved steps where matrix is required
        const unsolved = this.unsolvedSteps(steps, state);
        if (unsolved.length === 0) {
            return null; // Matrix solution is not required
        }
        // Add unsolved steps to matrix state
        for (const step of unsolved) {
            if (step.itemId != null && step.items != null) {
                state.items[step.itemId] = step.items;
            }
        }
        // Parse unsolved items for recipes
        for (const step of unsolved) {
            if (step.itemId) {
                this.parseItemRecursively(step.itemId, state);
            }
        }
        // Include any output-only items to calculate surplus
        this.addSurplusVariables(state);
        // Parse items that are input-only (no recipe available)
        this.parseInputs(state);
        return state;
    }
    /** Determine which steps can be solved by the matrix */
    static unsolvedSteps(steps, state) {
        return steps.filter((s) => s.recipeId == null &&
            s.itemId != null &&
            state.itemIds.indexOf(s.itemId) !== -1 &&
            state.recipeIds.some((r) => s.itemId && state.data.recipeR[r].produces(s.itemId)));
    }
    /** Find matching recipes for an item that have not yet been parsed */
    static recipeMatches(itemId, state) {
        const recipes = state.recipeIds
            .filter((r) => !state.recipes[r])
            .map((r) => state.data.recipeR[r])
            .filter((r) => r.out && r.out[itemId]);
        for (const recipe of recipes) {
            state.recipes[recipe.id] = recipe;
        }
        return recipes;
    }
    /** Find matching item inputs for a recipe that have not yet been parsed */
    static itemMatches(recipe, state) {
        const itemIds = Object.keys(recipe.in).filter((i) => !state.items[i]);
        for (const itemId of itemIds) {
            state.items[itemId] = _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero;
        }
        return itemIds;
    }
    /** Look for item inputs for a recipe, recursively */
    static parseRecipeRecursively(recipe, state) {
        if (recipe.in) {
            const matches = this.itemMatches(recipe, state);
            for (const itemId of matches.filter((m) => state.itemIds.indexOf(m) !== -1)) {
                this.parseItemRecursively(itemId, state);
            }
        }
    }
    /** Look for recipes that output a passed item, recursively */
    static parseItemRecursively(itemId, state) {
        const simpleRecipeId = state.data.itemRecipeId[itemId];
        if (simpleRecipeId) {
            if (!state.recipes[simpleRecipeId]) {
                const recipe = state.data.recipeR[simpleRecipeId];
                state.recipes[simpleRecipeId] = recipe;
                this.parseRecipeRecursively(recipe, state);
            }
        }
        else {
            const matches = this.recipeMatches(itemId, state);
            for (const recipe of matches) {
                this.parseRecipeRecursively(recipe, state);
            }
        }
    }
    /** Include items that only function as outputs to calculate surplus values */
    static addSurplusVariables(state) {
        const recipes = Object.keys(state.recipes).map((r) => state.recipes[r]);
        for (const recipe of recipes) {
            for (const id of Object.keys(recipe.out).filter((o) => !state.items[o])) {
                state.items[id] = _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero;
            }
        }
    }
    /** Determines which items in the matrix are input-only (not produced by any recipe, or ignored) */
    static parseInputs(state) {
        const itemIds = Object.keys(state.items);
        const recipeIds = Object.keys(state.recipes);
        state.inputIds = itemIds.filter((i) => !recipeIds.some((r) => state.data.recipeR[r].produces(i)) ||
            state.itemIds.indexOf(i) === -1);
    }
    //#endregion
    //#region Simplex
    /** Convert state to canonical tableau, solve using simplex, and parse solution */
    static getSolution(state, error = true) {
        // Get glpk-wasm presolve solution
        const glpkResult = this.glpk(state);
        if (glpkResult.error) {
            // No solution found
            return {
                resultType: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Failed,
                surplus: {},
                recipes: {},
                inputs: {},
                pivots: 0,
                time: 0,
                A: [[]],
                O: [],
                itemIds: [],
                recipeIds: [],
                inputIds: [],
            };
        }
        // Convert state to canonical tableau
        const A = this.canonical(state);
        const [O, H] = this.hash(A);
        const itemIds = Object.keys(state.items);
        const recipeIds = Object.keys(state.recipes);
        const inputIds = state.inputIds;
        // Check cache
        const cache = this.checkCache(O, H);
        if (cache) {
            const [surplus, recipes, inputs] = this.parseSolution(cache.R, state);
            // Found cached result
            return {
                resultType: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Cached,
                surplus,
                recipes,
                inputs,
                pivots: cache.pivots,
                time: cache.time,
                A,
                O: cache.R,
                itemIds,
                recipeIds,
                inputIds,
            };
        }
        else {
            // Cache original tableau
            const A0 = A.map((R) => [...R]);
            const result = this.simplexType(A, state.simplexType, glpkResult, error);
            if (result.type === _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Solved) {
                // Parse solution into usable state
                this.cacheResult(O, H, result);
                const [surplus, recipes, inputs] = this.parseSolution(result.O, state);
                return {
                    resultType: result.type,
                    surplus,
                    recipes,
                    inputs,
                    pivots: result.pivots,
                    time: result.time,
                    A: A0,
                    O: result.O,
                    itemIds,
                    recipeIds,
                    inputIds,
                };
            }
            else {
                // No solution found
                return {
                    resultType: result.type,
                    surplus: {},
                    recipes: {},
                    inputs: {},
                    pivots: result.pivots,
                    time: result.time,
                    A: A0,
                    O: result.O,
                    itemIds,
                    recipeIds,
                    inputIds,
                };
            }
        }
    }
    static glpk(state) {
        const itemIds = Object.keys(state.items);
        const recipeIds = Object.keys(state.recipes);
        const m = new glpk_ts__WEBPACK_IMPORTED_MODULE_0__.Model({ sense: 'min' });
        const recipeVarEntities = {};
        const inputVarEntities = {};
        const itemConstrEntities = {};
        // Add recipe vars to model
        for (const recipeId of recipeIds) {
            const config = {
                obj: (state.recipes[recipeId].cost ?? _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero).toNumber(),
                lb: 0,
                name: recipeId,
            };
            recipeVarEntities[recipeId] = m.addVar(config);
        }
        // Add input vars to model
        for (const inputId of state.inputIds) {
            const cost = state.itemIds.indexOf(inputId) === -1
                ? state.costIgnored
                : state.costInput;
            const config = {
                obj: cost.toNumber(),
                lb: 0,
                name: inputId,
            };
            inputVarEntities[inputId] = m.addVar(config);
        }
        // Add item constraints to model
        for (const itemId of itemIds) {
            const coeffs = [];
            for (const recipeId of recipeIds) {
                let val = _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero;
                const recipe = state.recipes[recipeId];
                if (recipe.in[itemId]) {
                    val = val.sub(recipe.in[itemId]);
                }
                if (recipe.out[itemId]) {
                    val = val.add(recipe.out[itemId]);
                }
                if (val.nonzero()) {
                    coeffs.push([
                        recipeVarEntities[recipeId],
                        val.div(recipe.time).toNumber(),
                    ]);
                }
            }
            // Add input coeff
            if (state.inputIds.indexOf(itemId) !== -1) {
                coeffs.push([inputVarEntities[itemId], 1]);
            }
            const config = { coeffs, lb: state.items[itemId].toNumber() };
            itemConstrEntities[itemId] = m.addConstr(config);
        }
        // Run GLPK simplex
        const start = Date.now();
        const [returnCode, status] = this.glpkSimplex(m);
        const time = Date.now() - start;
        if (returnCode !== 'ok' || status !== 'optimal') {
            return { returnCode, status, time, O: [], error: true };
        }
        // Set up IBFS
        const O = [_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero];
        for (const itemId of itemIds) {
            if (
            // Include item if it is an input
            (inputVarEntities[itemId] &&
                !this.isFloatZero(inputVarEntities[itemId].value)) ||
                // Include item if it is part of solution recipes
                recipeIds.some((r) => !this.isFloatZero(recipeVarEntities[r].value) &&
                    (state.recipes[r].in[itemId] || state.recipes[r].out[itemId]))) {
                // Recipes for this item are part of the solution, include result
                O.push(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.fromNumber(itemConstrEntities[itemId].value).sub(state.items[itemId]));
            }
            else {
                // Item is not part of the solution, remove it
                delete state.items[itemId];
            }
        }
        // Clean up inputs
        state.inputIds = state.inputIds.filter((i) => state.items[i] != null);
        for (const recipeId of recipeIds) {
            if (this.isFloatZero(recipeVarEntities[recipeId].value)) {
                // Recipe is not part of the solution, remove it
                delete state.recipes[recipeId];
            }
            else {
                // Recipe is part of the solution, include result
                O.push(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.fromNumber(recipeVarEntities[recipeId].value));
            }
        }
        for (const inputId of state.inputIds) {
            O.push(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.fromNumber(inputVarEntities[inputId].value));
        }
        O.push(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.fromNumber(m.value));
        return { returnCode, status, time, O, error: false };
    }
    static isFloatZero(val) {
        return Math.abs(val) < FLOAT_TOLERANCE;
    }
    /** Simplex method wrapper mainly for test mocking */
    static glpkSimplex(model) {
        const returnCode = model.simplex(simplexConfig);
        return [returnCode, model.status];
    }
    /** Convert state into canonical tableau */
    static canonical(state) {
        const itemIds = Object.keys(state.items);
        const recipes = Object.keys(state.recipes).map((r) => state.recipes[r]);
        const A = [];
        // Build objective row
        const O = [_models__WEBPACK_IMPORTED_MODULE_2__.Rational.one]; // C
        for (const itemId of itemIds) {
            // Add item columns
            O.push(state.items[itemId].inverse());
        }
        // Add recipe columns, input columns, and cost
        O.push(...new Array(recipes.length + state.inputIds.length + 1).fill(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero));
        A.push(O);
        // Build recipe rows
        for (const recipe of recipes) {
            const R = [_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero]; // C
            // Add item columns
            for (const itemId of itemIds) {
                let val = _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero;
                if (recipe.in[itemId]) {
                    val = val.sub(recipe.in[itemId]);
                }
                if (recipe.out[itemId]) {
                    val = val.add(recipe.out[itemId]);
                }
                R.push(val.div(recipe.time));
            }
            // Add recipe columns
            for (const other of recipes) {
                R.push(recipe.id === other.id ? _models__WEBPACK_IMPORTED_MODULE_2__.Rational.one : _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero);
            }
            // Add input columns
            R.push(...new Array(state.inputIds.length).fill(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero));
            // Add cost column
            R.push(recipe.cost ?? _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero);
            A.push(R);
        }
        // Build input rows
        for (const itemId of state.inputIds) {
            const R = [_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero]; // C
            // Add item columns
            for (const other of itemIds) {
                R.push(itemId === other ? _models__WEBPACK_IMPORTED_MODULE_2__.Rational.one : _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero);
            }
            // Add recipe columns
            R.push(...new Array(recipes.length).fill(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero));
            // Add input columns
            for (const other of state.inputIds) {
                R.push(itemId === other ? _models__WEBPACK_IMPORTED_MODULE_2__.Rational.one : _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero);
            }
            // Add cost column
            if (state.itemIds.indexOf(itemId) === -1) {
                // Item is ignored, assume unlimited free input
                R.push(state.costIgnored);
            }
            else {
                // Avoid using items that cannot currently be produced
                R.push(state.costInput);
            }
            A.push(R);
        }
        return A;
    }
    /** Solve the canonical tableau using the selected simplex type */
    static simplexType(A, simplexType, glpkResult, error = true) {
        if (simplexType === _models__WEBPACK_IMPORTED_MODULE_2__.SimplexType.JsBigIntRational) {
            const result = this.simplex(A, error);
            result.time += glpkResult.time;
            return result;
        }
        else {
            return {
                type: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Solved,
                pivots: 0,
                time: glpkResult.time,
                O: glpkResult.O,
            };
        }
    }
    /** Solve the canonical tableau using the simplex method */
    static simplex(A, error = true) {
        const timeout = error ? 5000 : 1000;
        let time = 0;
        let check = true;
        let start = Date.now();
        let p = 0;
        while (true) {
            p++;
            let c = 0;
            const O = A[0];
            for (let i = 1; i < O.length - 1; i++) {
                if (O[i].lt(O[c])) {
                    c = i;
                }
            }
            if (!O[c].lt(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero)) {
                return {
                    type: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Solved,
                    pivots: p,
                    time: time + Date.now() - start,
                    O: A[0],
                };
            }
            if (!this.pivotCol(A, c)) {
                return {
                    type: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Failed,
                    pivots: p,
                    time: time + Date.now() - start,
                    O: A[0],
                };
            }
            if (check) {
                const time_check = Date.now() - start;
                if (time_check > timeout) {
                    const warn = _models__WEBPACK_IMPORTED_MODULE_2__.WARNING_HANG +
                        `\n\nmatrix size: ${A.length} x ${A[0].length}, pivots: ${p}, time: ${time_check}ms`;
                    if (error && confirm(warn)) {
                        start = Date.now();
                        time = time_check;
                        check = false;
                    }
                    else {
                        return {
                            type: _models__WEBPACK_IMPORTED_MODULE_2__.MatrixResultType.Cancelled,
                            pivots: p,
                            time: time_check,
                            O: A[0],
                        };
                    }
                }
            }
        }
    }
    /** Pivot a column of the tableau */
    static pivotCol(A, c) {
        const x = A[0].length - 1;
        let r = null;
        let rN = null;
        for (let i = 1; i < A.length; i++) {
            const R = A[i];
            if (R[c].gt(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero)) {
                const ratio = R[x].div(R[c]);
                if (rN === null || ratio.lt(rN)) {
                    r = i;
                    rN = ratio;
                }
            }
        }
        if (r === null) {
            return false;
        }
        return this.pivot(A, c, r);
    }
    /** Performs a simplex pivot operation */
    static pivot(A, c, r) {
        // Multiply pivot row by reciprocal of pivot element
        const P = A[r];
        const reciprocal = P[c].reciprocal();
        for (let i = 0; i < P.length; i++) {
            P[i] = P[i].mul(reciprocal);
        }
        // Add multiples of pivot row to other rows to change pivot column to 0
        for (let i = 0; i < A.length; i++) {
            if (i !== r && A[i][c].nonzero()) {
                const R = A[i];
                const factor = R[c];
                for (let j = 0; j < R.length; j++) {
                    R[j] = R[j].sub(P[j].mul(factor));
                }
            }
        }
        return true;
    }
    /** Parse solution from solved tableau */
    static parseSolution(O, state) {
        const itemIds = Object.keys(state.items);
        const recipeIds = Object.keys(state.recipes);
        // Parse items
        const surplus = {};
        for (let i = 0; i < itemIds.length; i++) {
            const c = i + 1;
            if (O[c].gt(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero)) {
                surplus[itemIds[i]] = O[c];
            }
        }
        // Parse recipes
        const recipes = {};
        const inputs = {};
        for (let i = 0; i < recipeIds.length; i++) {
            const c = 1 + itemIds.length + i;
            if (O[c].gt(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero)) {
                recipes[recipeIds[i]] = O[c];
            }
        }
        // Parse inputs
        for (let i = 0; i < state.inputIds.length; i++) {
            const c = i + itemIds.length + recipeIds.length + 1;
            if (O[c].gt(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero)) {
                inputs[state.inputIds[i]] = O[c];
            }
        }
        return [surplus, recipes, inputs];
    }
    //#endregion
    //#region Solution
    /** Update steps with matrix solution */
    static updateSteps(steps, solution, state) {
        for (const itemId of Object.keys(state.items)) {
            this.addItemStep(itemId, steps, solution, state);
        }
        this.assignRecipes(steps, solution, state);
        for (const recipe of Object.keys(solution.recipes).map((r) => state.recipes[r])) {
            this.addRecipeStep(recipe, steps, solution);
        }
        this.updateParents(steps, solution, state);
    }
    /** Update steps with item from matrix solution */
    static addItemStep(itemId, steps, solution, state) {
        let output = _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero;
        for (const recipe of Object.keys(solution.recipes)
            .map((r) => state.recipes[r])
            .filter((r) => r.out[itemId])) {
            output = output.add(recipe.out[itemId].mul(solution.recipes[recipe.id]).div(recipe.time));
        }
        if (solution.inputs[itemId]) {
            output = output.add(solution.inputs[itemId]);
        }
        if (output.nonzero()) {
            let step = steps.find((i) => i.itemId === itemId);
            if (step != null) {
                if (state.items[itemId].nonzero()) {
                    step.items = output;
                }
                else {
                    step.items = (step.items ?? _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero).add(output);
                }
            }
            else {
                const recipes = state.data.recipeIds
                    .map((r) => state.recipes[r])
                    .filter((r) => r);
                const index = steps.findIndex((i) => recipes.some((r) => i.itemId && r.produces(i.itemId) && r.produces(itemId)));
                step = {
                    id: steps.length.toString(),
                    itemId,
                    items: output,
                };
                if (index !== -1 && index < steps.length - 1) {
                    steps.splice(index + 1, 0, step);
                }
                else {
                    steps.push(step);
                }
            }
            if (solution.surplus[itemId]?.nonzero()) {
                if (step.items == null || state.itemIds.indexOf(itemId) !== -1) {
                    // If step has no items or item is enabled, just assign surplus
                    step.surplus = solution.surplus[itemId];
                }
                else {
                    // Don't add surplus to disabled items, instead reduce items
                    step.items = step.items.sub(solution.surplus[itemId]);
                    if (step.items.lt(_models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero)) {
                        // If this lowers items below zero, allow displaying as surplus
                        step.surplus = step.items.inverse();
                        step.items = _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero;
                    }
                }
            }
        }
    }
    /** Attempt to intelligently assign recipes to steps with no recipe */
    static assignRecipes(steps, solution, state) {
        const recipes = Object.keys(solution.recipes).map((r) => state.recipes[r]);
        // Check for exact id matches
        for (const step of steps.filter((s) => s.recipeId == null)) {
            const i = recipes.findIndex((r) => r.id === step.itemId && r.produces(step.itemId));
            if (i !== -1) {
                step.recipeId = recipes[i].id;
                recipes.splice(i, 1);
            }
        }
        // Find best recipe match for remaining steps
        const potentials = {};
        for (const step of steps.filter((s) => s.recipeId == null)) {
            if (step.itemId) {
                potentials[step.itemId] = recipes
                    .filter((r) => step.itemId && r.produces(step.itemId))
                    .sort((a, b) => Object.keys(a.out).length - Object.keys(b.out).length)
                    .map((r) => r.id);
            }
        }
        const order = Object.keys(potentials).sort((a, b) => potentials[a].length - potentials[b].length);
        for (const itemId of order) {
            for (const option of potentials[itemId]) {
                if (!steps.some((s) => s.recipeId === option)) {
                    const step = steps.find((s) => s.itemId === itemId);
                    if (step) {
                        step.recipeId = option;
                        break;
                    }
                }
            }
        }
    }
    /** Update steps with recipe from matrix solution */
    static addRecipeStep(recipe, steps, solution) {
        let step = steps.find((s) => s.recipeId === recipe.id);
        if (!step) {
            step = steps.find((s) => s.recipeId == null && s.itemId != null && recipe.produces(s.itemId));
        }
        if (!step) {
            const index = steps.findIndex((s) => s.itemId && recipe.produces(s.itemId));
            step = {
                id: steps.length.toString(),
            };
            if (index !== -1 && index < steps.length - 1) {
                steps.splice(index + 1, 0, step);
            }
            else {
                steps.push(step);
            }
        }
        step.recipeId = recipe.id;
        step.factories = solution.recipes[recipe.id].add(step.factories || _models__WEBPACK_IMPORTED_MODULE_2__.Rational.zero);
        _rate_utility__WEBPACK_IMPORTED_MODULE_3__.RateUtility.adjustPowerPollution(step, recipe);
    }
    /** Update parents of steps in matrix solution */
    static updateParents(steps, solution, state) {
        for (const recipe of Object.keys(solution.recipes)
            .map((r) => state.recipes[r])
            .filter((r) => r.in)) {
            const quantity = solution.recipes[recipe.id].div(recipe.time);
            for (const itemId of Object.keys(recipe.in).filter((i) => recipe.in[i].nonzero())) {
                const step = steps.find((s) => s.itemId === itemId);
                if (step) {
                    const rate = recipe.in[itemId].mul(quantity);
                    _rate_utility__WEBPACK_IMPORTED_MODULE_3__.RateUtility.addParentValue(step, recipe.id, rate);
                }
            }
        }
    }
    //#endregion
    //#region Cache
    static hash(A) {
        const O = [...A[0]];
        const B = A.filter((R, i) => i !== 0);
        const H = B.map((R) => R.map((c) => c.toString()).join(',')).join('\n');
        return [O, H];
    }
    static cacheResult(O, H, result) {
        if (!this.cache[H]) {
            this.cache[H] = [];
        }
        this.cache[H].push({
            O,
            R: result.O,
            pivots: result.pivots,
            time: result.time,
        });
    }
    static checkCache(O, H) {
        if (this.cache[H]) {
            // Check objective matches
            for (const c of this.cache[H]) {
                const ratio = this.objectiveRatio(O, c.O);
                if (ratio) {
                    if (ratio.isOne()) {
                        return c;
                    }
                    else {
                        return { ...c, ...{ R: c.R.map((r) => r.mul(ratio)) } };
                    }
                }
            }
        }
        return null;
    }
    static objectiveRatio(O, C) {
        // Check length first
        if (O.length !== C.length) {
            return null;
        }
        // Check ratio
        let ratio = null;
        for (let i = 1; i < O.length; i++) {
            if (C[i].isZero()) {
                if (!O[i].isZero()) {
                    // No match
                    return null;
                }
                // Keep looking, both 0
            }
            else {
                if (O[i].isZero()) {
                    // No match
                    return null;
                }
                else if (ratio) {
                    // Ratio must match
                    if (!ratio.eq(O[i].div(C[i]))) {
                        // No match
                        return null;
                    }
                    // Keep going
                }
                else {
                    // Log the ratio
                    ratio = O[i].div(C[i]);
                }
            }
        }
        return ratio;
    }
}
SimplexUtility.cache = {};


/***/ }),

/***/ 1343:
/*!********************************************!*\
  !*** ./src/app/utilities/store.utility.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreUtility": () => (/* binding */ StoreUtility)
/* harmony export */ });
class StoreUtility {
    static rankEquals(a, b) {
        if (b == null) {
            return false;
        }
        return a.length === b.length && a.every((v, i) => v === b[i]);
    }
    static arrayEquals(a, b) {
        if (b == null) {
            return false;
        }
        return this.rankEquals([...a].sort(), [...b].sort());
    }
    static payloadEquals(payload, rank = false) {
        return Array.isArray(payload.value) && Array.isArray(payload.def)
            ? rank
                ? this.rankEquals(payload.value, payload.def)
                : this.arrayEquals(payload.value, payload.def)
            : payload.value === payload.def;
    }
    /** Resets a passed fields of the state */
    static resetFields(state, fields, id) {
        // Spread into new state
        let newState = { ...state };
        for (const field of fields) {
            newState = this.resetField(newState, field, id);
        }
        return newState;
    }
    /** Resets a passed field of the state */
    static resetField(state, field, id) {
        // Spread into new state
        const newState = { ...state };
        for (const i of Object.keys(newState).filter((j) => (!id || id === j) && newState[j][field] !== undefined)) {
            if (Object.keys(newState[i]).length === 1) {
                delete newState[i];
            }
            else {
                // Spread into new state
                newState[i] = { ...newState[i] };
                delete newState[i][field];
            }
        }
        return newState;
    }
    static compareReset(state, field, payload, rank = false) {
        // Spread into new state
        if (this.payloadEquals(payload, rank)) {
            // Resetting to null
            const newState = { ...state };
            if (newState[payload.id] !== undefined) {
                newState[payload.id] = { ...newState[payload.id] };
                if (newState[payload.id][field] !== undefined) {
                    delete newState[payload.id][field];
                }
                if (Object.keys(newState[payload.id]).length === 0) {
                    delete newState[payload.id];
                }
            }
            return newState;
        }
        else {
            // Setting field
            return this.assignValue(state, field, payload);
        }
    }
    static assignValue(state, field, payload) {
        return {
            ...state,
            ...{
                [payload.id]: { ...state[payload.id], ...{ [field]: payload.value } },
            },
        };
    }
    static compareValue(payload) {
        return payload.value === payload.def ? undefined : payload.value;
    }
    static compareValues(payload) {
        return this.arrayEquals(payload.value, payload.def)
            ? undefined
            : payload.value;
    }
    static compareRank(value, def) {
        return this.rankEquals(value, def) ? undefined : value;
    }
}


/***/ }),

/***/ 4348:
/*!**********************************!*\
  !*** ./src/app/vendor.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorModule": () => (/* binding */ VendorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/autofocus */ 174);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menu */ 625);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/multiselect */ 850);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/splitbutton */ 3650);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabmenu */ 7077);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);






















const modules = [
    // primeng
    primeng_autofocus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
    primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
    primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule,
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule,
    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogModule,
    primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule,
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule,
    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__.InputNumberModule,
    primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule,
    primeng_menu__WEBPACK_IMPORTED_MODULE_9__.MenuModule,
    primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__.MultiSelectModule,
    primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule,
    primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
    primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_13__.ScrollPanelModule,
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_14__.SplitButtonModule,
    primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
    primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__.TabMenuModule,
    primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule,
    // ngx-translate
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule,
];
class VendorModule {
}
VendorModule.ɵfac = function VendorModule_Factory(t) { return new (t || VendorModule)(); };
VendorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: VendorModule });
VendorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, modules, 
        // primeng
        primeng_autofocus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__.InputNumberModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_9__.MenuModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__.MultiSelectModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_13__.ScrollPanelModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_14__.SplitButtonModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule,
        // ngx-translate
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](VendorModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, 
        // primeng
        primeng_autofocus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__.InputNumberModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_9__.MenuModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__.MultiSelectModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_13__.ScrollPanelModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_14__.SplitButtonModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule,
        // ngx-translate
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule], exports: [
        // primeng
        primeng_autofocus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__.InputNumberModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_9__.MenuModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__.MultiSelectModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_13__.ScrollPanelModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_14__.SplitButtonModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_16__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_17__.TabViewModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule,
        // ngx-translate
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule] }); })();


/***/ }),

/***/ 8755:
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _app_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/data.json */ 2641);


const app = _app_data_json__WEBPACK_IMPORTED_MODULE_1__;

const data = {
    app,
    mods: [
        { id: '1.1', name: '1.1.x', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: '1.1e', name: '1.1.x Expensive', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: '1.0', name: '1.0.0', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: '017', name: '0.17.79', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: '016', name: '0.16.51', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: '248', name: '248k Standalone', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: '248o', name: '248k Overhaul', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: '248kr2sxp', name: '248k + Krastorio 2 + SE', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'aai', name: 'AAI Industry', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'ang', name: `Angel's Industries`, game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'bio', name: 'Bio Industries', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'bob', name: `Bob's Mods`, game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'bobang', name: `Bob's & Angel's`, game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'fpp', name: 'Factorio Plus Plus', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'fep', name: 'FactorioExtended Plus', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'ir2', name: 'Industrial Revolution 2', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'kr2', name: 'Krastorio 2', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'kr2sxp', name: 'Krastorio 2 + SE', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'msc', name: 'More Science', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'nls', name: 'Nullius', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'pys', name: 'Pyanodons', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'pysalf', name: 'Pyanodons + AL', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'qat', name: `Qatavin's More Stuff`, game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'sea', name: 'Sea Block', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'sxp', name: 'Space Exploration', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'xan', name: 'Xander Mod', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Factorio },
        { id: 'dsp', name: 'Dyson Sphere Program', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.DysonSphereProgram },
        { id: 'sfy', name: 'Satisfactory', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Satisfactory },
        { id: 'fox', name: 'Foxhole', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.Foxhole },
        { id: 'coi', name: 'Captain of Industry', game: _models__WEBPACK_IMPORTED_MODULE_0__.Game.CaptainOfIndustry },
    ],
    v0: [
        '1.1',
        '1.0',
        '0.17',
        '0.16',
        'bio-industries',
        'bobs',
        'bobs-angels',
        'dsp',
        'factorio-extended-plus',
        'industrial-revolution',
        'krastorio2',
        'krastorio2+se',
        'pyanodons',
        'pyanodons+al',
        'seablock',
        'space-exploration',
        'xander',
    ],
    hash: [
        '1.1',
        '1.0',
        '017',
        '016',
        'bio',
        'bob',
        'bobang',
        'dsp',
        'fep',
        'ir2',
        'kr2',
        'kr2sxp',
        'pys',
        'pysalf',
        'sea',
        'sxp',
        'xan',
        'nls',
        'fpp',
        'ang',
        'msc',
        'sfy',
        'coi',
        'qat',
        '1.1e',
        '248',
        '248o',
        '248kr2sxp',
        'aai',
    ],
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! package.json */ 2598);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    testing: false,
    debug: true,
    baseHref: '/',
    version: `${package_json__WEBPACK_IMPORTED_MODULE_0__.version} (dev)`,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 7791:
/*!***********************************!*\
  !*** ./src/environments/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* reexport safe */ _environment__WEBPACK_IMPORTED_MODULE_0__.environment)
/* harmony export */ });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ 2340);



/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
console.info(`${_models__WEBPACK_IMPORTED_MODULE_0__.APP} ${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.version}`);
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 5762:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1874:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8165:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2598:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"foxholelab","description":"FactorioLab branch for Foxhole","version":"2.0.45","private":true,"contributors":["Doug Broad (https://github.com/dcbroad3)"],"repository":{"type":"git","url":"https://github.com/foxholelab/foxholelab.git"},"homepage":"https://foxholelab.github.io","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","build-stats":"ng build --stats-json","test":"ng test","test-build":"ng test --no-watch --browsers=ChromeHeadless","analyze":"webpack-bundle-analyzer dist/stats.json","process-mod":"ts-node scripts/process-mod.ts","lint":"ng lint"},"dependencies":{"@angular/animations":"^14.2.1","@angular/common":"^14.2.1","@angular/compiler":"^14.2.1","@angular/core":"^14.2.1","@angular/forms":"^14.2.1","@angular/platform-browser":"^14.2.1","@angular/platform-browser-dynamic":"^14.2.1","@angular/router":"^14.2.1","@angular/service-worker":"^14.2.1","@fortawesome/fontawesome-free":"^6.2.0","@ngneat/until-destroy":"^9.2.0","@ngrx/effects":"~14.3.0","@ngrx/store":"~14.3.0","@ngrx/store-devtools":"~14.3.0","@ngx-translate/core":"^14.0.0","@ngx-translate/http-loader":"^7.0.0","big-integer":"^1.6.51","bootstrap":"^5.2.0","elkjs":"^0.8.1","file-saver":"^2.0.5","glpk-ts":"^0.0.9","ngx-google-analytics":"^14.0.0","pako":"^2.0.4","primeicons":"^5.0.0","primeng":"^14.0.2","rxjs":"~7.5.0","tslib":"^2.4.0","vis-data":"^7.1.4","vis-network":"^9.1.2","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/architect":"^0.1402.1","@angular-devkit/build-angular":"^14.2.1","@angular-eslint/builder":"^14.0.0-alpha.3","@angular-eslint/eslint-plugin":"~14.0.0-alpha.3","@angular-eslint/eslint-plugin-template":"~14.0.0-alpha.3","@angular-eslint/schematics":"~14.0.0-alpha.3","@angular-eslint/template-parser":"~14.0.0-alpha.3","@angular/cli":"^14.2.1","@angular/compiler-cli":"^14.2.1","@angular/language-service":"^14.2.1","@types/file-saver":"^2.0.5","@types/jasmine":"^4.3.0","@types/node":"^16.11.10","@types/pako":"^2.0.0","@typescript-eslint/eslint-plugin":"~5.36.2","@typescript-eslint/parser":"~5.36.2","eslint":"^8.23.0","fast-average-color-node":"^2.4.0","jasmine-core":"~4.4.0","jasmine-spec-reporter":"~7.0.0","karma":"~6.4.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"^2.2.0","karma-jasmine":"^5.1.0","karma-jasmine-html-reporter":"^2.0.0","ngrx-store-freeze":"~0.2.4","ts-node":"^10.9.1","typescript":"~4.7.4","webpack-bundle-analyzer":"^4.6.1"},"browser":{"crypto":false,"fs":false,"path":false}}');

/***/ }),

/***/ 2641:
/*!********************************!*\
  !*** ./src/data/app/data.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"game":"None","id":"app","name":"factoriolab","version":{},"categories":[],"items":[],"recipes":[],"icons":[{"id":"captain-of-industry","color":"#ab5a30","position":"-1px -1px"},{"id":"dyson-sphere-program","color":"#867e74","position":"-66px -1px"},{"id":"factorio","color":"#945a2e","position":"-131px -1px"},{"id":"fast-inserter","color":"#608ea1","position":"-196px -1px"},{"id":"inserter","color":"#a5885c","position":"-1px -66px"},{"id":"long-handed-inserter","color":"#a2635f","position":"-66px -66px"},{"id":"module","color":"#e2e3e2","position":"-131px -66px"},{"id":"pipe","color":"#6d634e","position":"-196px -66px"},{"id":"satisfactory","color":"#8b9096","position":"-1px -131px"},{"id":"stack-inserter","color":"#839d5f","position":"-66px -131px"},{"id":"time","color":"#acabac","position":"-131px -131px"}],"limitations":{}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map