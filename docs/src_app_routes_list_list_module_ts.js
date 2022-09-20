"use strict";
(self["webpackChunkfactoriolab"] = self["webpackChunkfactoriolab"] || []).push([["src_app_routes_list_list_module_ts"],{

/***/ 9532:
/*!****************************************************!*\
  !*** ./src/app/routes/list/list-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListRoutingModule": () => (/* binding */ ListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component */ 7282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent,
    },
];
class ListRoutingModule {
}
ListRoutingModule.ɵfac = function ListRoutingModule_Factory(t) { return new (t || ListRoutingModule)(); };
ListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ListRoutingModule });
ListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7282:
/*!***********************************************!*\
  !*** ./src/app/routes/list/list.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models */ 2139);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store */ 2322);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utilities */ 5426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/services */ 1866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/tabmenu */ 7077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/input-number/input-number.component */ 7468);
/* harmony import */ var _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/dropdown-base.directive */ 2897);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _pipes_tooltips_beacon_tooltip_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/tooltips/beacon-tooltip.pipe */ 6923);
/* harmony import */ var _pipes_tooltips_factory_tooltip_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/tooltips/factory-tooltip.pipe */ 1168);
/* harmony import */ var _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/tooltips/item-tooltip.pipe */ 7598);
/* harmony import */ var _pipes_tooltips_module_tooltip_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/tooltips/module-tooltip.pipe */ 7820);
/* harmony import */ var _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/tooltips/recipe-tooltip.pipe */ 8098);
/* harmony import */ var _pipes_factory_rate_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/factory-rate.pipe */ 5525);
/* harmony import */ var _pipes_factory_show_rate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/factory-show-rate.pipe */ 2753);
/* harmony import */ var _pipes_factory_show_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/factory-show.pipe */ 280);
/* harmony import */ var _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/icon-class.pipe */ 1969);
/* harmony import */ var _pipes_inserter_speed_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/inserter-speed.pipe */ 7534);
/* harmony import */ var _pipes_left_pad_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../pipes/left-pad.pipe */ 3683);
/* harmony import */ var _pipes_options_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../pipes/options.pipe */ 1616);
/* harmony import */ var _pipes_power_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../pipes/power.pipe */ 3769);
/* harmony import */ var _pipes_rate_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../pipes/rate.pipe */ 1198);
/* harmony import */ var _pipes_step_href_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../pipes/step-href.pipe */ 2833);




































const _c0 = ["stepsTable"];

function ListComponent_ng_container_0_ng_template_3_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, "list.tree"), " ");
  }
}

function ListComponent_ng_container_0_ng_template_3_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_3_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r22.resetIgnores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "list.itemsUndoTooltip"));
  }
}

function ListComponent_ng_container_0_ng_template_3_th_11_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_3_th_11_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r25.resetBelts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "list.beltsUndoTooltip"));
  }
}

function ListComponent_ng_container_0_ng_template_3_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th", 12)(1, "div", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_3_th_11_button_5_Template, 2, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 2, "list.belts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemsModified.belts);
  }
}

function ListComponent_ng_container_0_ng_template_3_th_12_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_3_th_12_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r29.resetWagons());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "list.wagonsUndoTooltip"));
  }
}

function ListComponent_ng_container_0_ng_template_3_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th", 12)(1, "div", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_3_th_12_button_5_Template, 2, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 2, "list.wagons") + vm_r1.dispRateInfo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemsModified.wagons);
  }
}

function ListComponent_ng_container_0_ng_template_3_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_3_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r32.resetFactories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "list.factoriesUndoTooltip"));
  }
}

function ListComponent_ng_container_0_ng_template_3_th_19_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_3_th_19_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r35.resetBeacons());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "list.beaconsUndoTooltip"));
  }
}

function ListComponent_ng_container_0_ng_template_3_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th", 12)(1, "div", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_3_th_19_button_5_Template, 2, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 2, "list.beacons"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.recipesModified.beacons);
  }
}

function ListComponent_ng_container_0_ng_template_3_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 1, "list.power"));
  }
}

function ListComponent_ng_container_0_ng_template_3_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 1, "list.pollution") + vm_r1.dispRateInfo.label);
  }
}

function ListComponent_ng_container_0_ng_template_3_th_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th", 10)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_3_th_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r39.export(vm_r1.steps, vm_r1.itemSettings, vm_r1.recipeSettings, vm_r1.columns, vm_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, "list.downloadTooltip"));
  }
}

function ListComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "th", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r42.contentSvc.showColumns$.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_3_th_4_Template, 3, 3, "th", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "th", 12)(6, "div", 13)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ListComponent_ng_container_0_ng_template_3_button_10_Template, 2, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ListComponent_ng_container_0_ng_template_3_th_11_Template, 6, 4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ListComponent_ng_container_0_ng_template_3_th_12_Template, 6, 4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "th", 12)(14, "div", 13)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, ListComponent_ng_container_0_ng_template_3_button_18_Template, 2, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](19, ListComponent_ng_container_0_ng_template_3_th_19_Template, 6, 4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, ListComponent_ng_container_0_ng_template_3_th_20_Template, 4, 3, "th", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, ListComponent_ng_container_0_ng_template_3_th_21_Template, 4, 3, "th", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, ListComponent_ng_container_0_ng_template_3_th_22_Template, 3, 3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 12, "list.openColumnSettings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r3.Column.Tree].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 14, "list.items") + vm_r1.dispRateInfo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemsModified.ignore);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r3.Column.Belts].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r3.Column.Wagons].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 16, "list.factories"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.recipesModified.factories);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r3.Column.Beacons].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r3.Column.Power].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r3.Column.Pollution].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r3.Column.Link].show);
  }
}

function ListComponent_ng_container_0_ng_template_4_td_5_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "div", 32);
  }

  if (rf & 2) {
    const i_r61 = ctx.$implicit;
    const last_r62 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("trail", i_r61)("last", last_r62);
  }
}

function ListComponent_ng_container_0_ng_template_4_td_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_td_5_ng_container_2_div_1_Template, 1, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", vm_r1.stepTree[step_r45.id]);
  }
}

function ListComponent_ng_container_0_ng_template_4_td_5_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 4, step_r45.itemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 6, step_r45.itemId, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_4_td_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 4, step_r45.recipeId, "recipe"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 7, step_r45.recipeId, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_4_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_td_5_ng_container_2_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_4_td_5_i_4_Template, 3, 9, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_4_td_5_ng_template_5_Template, 3, 10, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](6);

    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.stepTree[step_r45.id] == null ? null : vm_r1.stepTree[step_r45.id].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.itemId)("ngIfElse", _r58);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("(+", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, step_r45.surplus, vm_r1.effectivePrecision[ctx_r71.Column.Surplus]), ") ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_6_span_2_Template, 3, 4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "td", 37)(7, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_4_ng_container_6_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r76);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r74.ignoreItem(step_r45.itemId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.surplus && step_r45.surplus.nonzero());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 7, step_r45.items.sub(step_r45.surplus || ctx_r48.Rational.zero), vm_r1.effectivePrecision[ctx_r48.Column.Items]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("hover-active", vm_r1.itemSettings[step_r45.itemId].ignore);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](8, 10, step_r45.itemId))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](9, 12, step_r45.itemId, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_p_dropdown_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r89.value));
  }
}

const _c1 = function (a0, a1) {
  return {
    name: a0,
    speed: a1
  };
};

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_p_dropdown_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r90 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, "tooltip.belt", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](10, _c1, vm_r1.data.itemEntities[item_r90.value].name, vm_r1.beltSpeedTxt[item_r90.value])))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r90.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r90.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_p_dropdown_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_p_dropdown_7_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r92.setBelt(step_r45.itemId, $event.value, vm_r1.settings.beltId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_p_dropdown_7_ng_template_2_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_p_dropdown_7_ng_template_3_Template, 6, 13, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const beltId_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 4, "tooltip.belt", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](7, _c1, vm_r1.data.itemEntities[beltId_r81].name, vm_r1.beltSpeedTxt[beltId_r81])))("escape", false)("ngModel", beltId_r81)("options", vm_r1.options.belts);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_p_dropdown_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r101.value));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_p_dropdown_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r102 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](7).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, "tooltip.pipe", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](10, _c1, vm_r1.data.itemEntities[item_r102.value].name, vm_r1.beltSpeedTxt[item_r102.value])))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r102.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r102.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_p_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_p_dropdown_0_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r106);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r104.setBelt(step_r45.itemId, $event.value, vm_r1.settings.pipeId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_p_dropdown_0_ng_template_2_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_p_dropdown_0_ng_template_3_Template, 6, 13, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const beltId_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 4, "tooltip.pipe", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](7, _c1, vm_r1.data.itemEntities[beltId_r81].name, vm_r1.beltSpeedTxt[beltId_r81])))("escape", false)("ngModel", beltId_r81)("options", vm_r1.options.pipes);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_p_dropdown_0_Template, 4, 10, "p-dropdown", 40);
  }

  if (rf & 2) {
    const beltId_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](11);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.pipeIds.indexOf(beltId_r81) !== -1 && vm_r1.settings.pipeId)("ngIfElse", _r85);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const beltId_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 4, beltId_r81));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 6, "tooltip.pipe", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](9, _c1, vm_r1.data.itemEntities[beltId_r81].name, vm_r1.beltSpeedTxt[beltId_r81])))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 34)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "td", 37)(6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_p_dropdown_7_Template, 4, 10, "p-dropdown", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_8_Template, 1, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_ng_template_10_Template, 3, 12, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const beltId_r81 = ctx.ngIf;

    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](4, 3, step_r45.belts, vm_r1.effectivePrecision[ctx_r80.Column.Belts]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.beltIds.indexOf(beltId_r81) !== -1 && vm_r1.settings.beltId)("ngIfElse", _r83);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_ng_container_1_Template, 12, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemSettings[step_r45.itemId].beltId);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.itemId && step_r45.belts)("ngIfElse", _r6);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_p_dropdown_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r126.value));
  }
}

const _c2 = function (a0, a1) {
  return {
    name: a0,
    size: a1
  };
};

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_p_dropdown_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r127 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, "tooltip.cargoWagon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](10, _c2, vm_r1.data.itemEntities[item_r127.value].name, vm_r1.data.cargoWagonEntities[item_r127.value].size)))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r127.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r127.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_p_dropdown_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_p_dropdown_7_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r131);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r129.setWagon(step_r45.itemId, $event.value, vm_r1.settings.cargoWagonId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_p_dropdown_7_ng_template_2_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_p_dropdown_7_ng_template_3_Template, 6, 13, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const wagonId_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 4, "tooltip.cargoWagon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](7, _c2, vm_r1.data.itemEntities[wagonId_r120].name, vm_r1.data.cargoWagonEntities[wagonId_r120].size)))("escape", false)("ngModel", wagonId_r120)("options", vm_r1.options.cargoWagons);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_p_dropdown_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r138.value));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_p_dropdown_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r139 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, "tooltip.fluidWagon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](10, _c2, vm_r1.data.itemEntities[item_r139.value].name, vm_r1.data.fluidWagonEntities[item_r139.value].capacity)))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r139.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r139.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_p_dropdown_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_p_dropdown_0_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r143);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r141.setWagon(step_r45.itemId, $event.value, vm_r1.settings.fluidWagonId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_p_dropdown_0_ng_template_2_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_p_dropdown_0_ng_template_3_Template, 6, 13, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const wagonId_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 4, "tooltip.fluidWagon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](7, _c2, vm_r1.data.itemEntities[wagonId_r120].name, vm_r1.data.fluidWagonEntities[wagonId_r120].capacity)))("escape", false)("ngModel", wagonId_r120)("options", vm_r1.options.fluidWagons);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_p_dropdown_0_Template, 4, 10, "p-dropdown", 49);
  }

  if (rf & 2) {
    const wagonId_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.fluidWagonIds.indexOf(wagonId_r120) !== -1 && vm_r1.settings.fluidWagonId);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 34)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "td", 37)(6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_p_dropdown_7_Template, 4, 10, "p-dropdown", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_ng_template_8_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const wagonId_r120 = ctx.ngIf;

    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](4, 3, step_r45.wagons, vm_r1.effectivePrecision[ctx_r119.Column.Wagons]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.cargoWagonIds.indexOf(wagonId_r120) !== -1 && vm_r1.settings.cargoWagonId)("ngIfElse", _r122);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_ng_container_8_ng_container_1_Template, 10, 6, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.itemId && step_r45.wagons && vm_r1.itemSettings[step_r45.itemId].wagonId)("ngIfElse", _r6);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "factoryRate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const factoryId_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind3"](2, 1, step_r45.factories, vm_r1.effectivePrecision[ctx_r154.Column.Factories], factoryId_r153));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_dropdown_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r167.value));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_dropdown_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "factoryTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r168 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, item_r168.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r168.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r168.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_dropdown_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_dropdown_4_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r172);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r170.changeFactory(step_r45.recipeId, $event.value, vm_r1.factories, vm_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "factoryTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "options");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_dropdown_4_ng_template_3_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_dropdown_4_ng_template_4_Template, 6, 10, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const recipe_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const factoryId_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 4, factoryId_r153, vm_r1.data))("escape", false)("options", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 7, recipe_r160.producers, vm_r1.data.itemEntities))("ngModel", factoryId_r153);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_inputNumber_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-inputNumber", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onBlur", function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_inputNumber_5_Template_p_inputNumber_onBlur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r180);

      const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](1);

      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r178.changeRecipeField(step_r45.recipeId, _r177.value, vm_r1.recipeSettings, vm_r1.factories, ctx_r178.RecipeField.Overclock));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("min", 1)("max", 250)("step", 10)("size", 2)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 6, "list.overclockTooltip"))("ngModel", vm_r1.recipeSettings[step_r45.recipeId].overclock);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_p_dropdown_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r191 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r191.value));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_p_dropdown_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "moduleTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r192 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](7).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, item_r192.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r192.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r192.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_p_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_p_dropdown_1_Template_p_dropdown_onChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r196);
      const i_r187 = restoredCtx.index;
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r194.changeRecipeField(step_r45.recipeId, $event.value, vm_r1.recipeSettings, vm_r1.factories, ctx_r194.RecipeField.FactoryModules, i_r187, vm_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "moduleTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "options");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_p_dropdown_1_ng_template_3_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_p_dropdown_1_ng_template_4_Template, 6, 10, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const moduleId_r186 = ctx.$implicit;
    const last_r188 = ctx.last;
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("last", last_r188);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 6, moduleId_r186, vm_r1.data))("escape", false)("options", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind3"](2, 9, vm_r1.data.recipeModuleIds[step_r45.recipeId], vm_r1.data.itemEntities, true))("ngModel", moduleId_r186);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_p_dropdown_1_Template, 5, 13, "p-dropdown", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const moduleIds_r184 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", moduleIds_r184);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 13)(1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_dropdown_4_Template, 5, 10, "p-dropdown", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_p_inputNumber_5_Template, 3, 8, "p-inputNumber", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_ng_container_6_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const factoryId_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 7, step_r45.recipeId, "recipe"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 10, step_r45.recipeId, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.factoryEntities[factoryId_r153]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r159.Game.Satisfactory);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.recipeSettings[step_r45.recipeId].factoryModuleIds);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_div_1_Template, 7, 13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.recipeEntities[step_r45.recipeId]);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_9_span_2_Template, 3, 5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "factoryShowRate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_4_ng_container_9_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "factoryShow");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const factoryId_r153 = ctx.ngIf;
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.factories && step_r45.factories.nonzero() && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 2, factoryId_r153, vm_r1.data.game));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 5, factoryId_r153, vm_r1.data.game));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_lab_input_number_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "lab-input-number", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("setValue", function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_lab_input_number_2_Template_lab_input_number_setValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r216);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r214.changeRecipeField(step_r45.recipeId, $event, vm_r1.recipeSettings, vm_r1.factories, ctx_r214.RecipeField.BeaconCount));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const settings_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 3, "list.beaconEachTooltip"))("value", settings_r209.beaconCount)("hideButtons", true);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r221 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r221.value));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "beaconTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r222 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, item_r222.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r222.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r222.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_5_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r226);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r224.changeRecipeField(step_r45.recipeId, $event.value, vm_r1.recipeSettings, vm_r1.factories, ctx_r224.RecipeField.Beacon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "beaconTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_5_ng_template_2_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_5_ng_template_3_Template, 6, 10, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const settings_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 4, settings_r209.beaconId, vm_r1.data))("escape", false)("options", vm_r1.options.beacons)("ngModel", settings_r209.beaconId);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 20)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r235 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, item_r235.value));
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "moduleTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r236 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, item_r236.value, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 8, item_r236.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r236.label, " ");
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p-dropdown", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onChange", function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_6_Template_p_dropdown_onChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r240);
      const i_r231 = restoredCtx.index;
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r238.changeRecipeField(step_r45.recipeId, $event.value, vm_r1.recipeSettings, vm_r1.factories, ctx_r238.RecipeField.BeaconModules, i_r231, vm_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "moduleTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_6_ng_template_2_Template, 3, 4, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_6_ng_template_3_Template, 6, 10, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const moduleId_r230 = ctx.$implicit;
    const last_r232 = ctx.last;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("last", last_r232);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 6, moduleId_r230, vm_r1.data))("escape", false)("options", vm_r1.options.beaconModules)("ngModel", moduleId_r230);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_lab_input_number_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "lab-input-number", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("setValue", function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_lab_input_number_7_Template_lab_input_number_setValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r245);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r243.setBeaconTotal(step_r45.recipeId, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 3, "list.beaconTotalTooltip"))("value", step_r45.beacons.toString())("hideButtons", true);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_lab_input_number_2_Template, 2, 5, "lab-input-number", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 37)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_5_Template, 4, 7, "p-dropdown", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_p_dropdown_6_Template, 4, 9, "p-dropdown", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_lab_input_number_7_Template, 2, 5, "lab-input-number", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const settings_r209 = ctx.ngIf;
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", settings_r209.beaconId && settings_r209.beaconCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", settings_r209.beaconId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", settings_r209.beaconModuleIds);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.beacons);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_ng_container_1_Template, 8, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.recipeSettings[step_r45.recipeId]);
  }
}

function ListComponent_ng_container_0_ng_template_4_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.recipeId)("ngIfElse", _r6);
  }
}

function ListComponent_ng_container_0_ng_template_4_td_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "power");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind3"](2, 1, step_r45.power, vm_r1.effectivePrecision[ctx_r251.Column.Power], vm_r1.effectivePowerUnit));
  }
}

function ListComponent_ng_container_0_ng_template_4_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_td_11_span_1_Template, 3, 5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.power && step_r45.power.nonzero());
  }
}

function ListComponent_ng_container_0_ng_template_4_td_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, step_r45.pollution, vm_r1.effectivePrecision[ctx_r255.Column.Pollution]));
  }
}

function ListComponent_ng_container_0_ng_template_4_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_4_td_12_span_1_Template, 3, 4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.pollution && step_r45.pollution.nonzero());
  }
}

function ListComponent_ng_container_0_ng_template_4_td_13_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_4_td_13_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r262);
      const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
      const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r260.resetStep(step_r45));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "list.stepUndoTooltip"));
  }
}

function ListComponent_ng_container_0_ng_template_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "div", 20)(2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "stepHref");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_4_td_13_button_6_Template, 2, 3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const step_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 3, step_r45, vm_r1.data), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 6, "list.openNewTabTooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.recipeId && vm_r1.stepsModified.recipes[step_r45.recipeId] || step_r45.itemId && vm_r1.stepsModified.items[step_r45.itemId]);
  }
}

function ListComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_4_td_5_Template, 7, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_4_ng_container_6_Template, 11, 15, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ListComponent_ng_container_0_ng_template_4_ng_container_7_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ListComponent_ng_container_0_ng_template_4_ng_container_8_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ListComponent_ng_container_0_ng_template_4_ng_container_9_Template, 7, 8, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ListComponent_ng_container_0_ng_template_4_ng_container_10_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ListComponent_ng_container_0_ng_template_4_td_11_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ListComponent_ng_container_0_ng_template_4_td_12_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, ListComponent_ng_container_0_ng_template_4_td_13_Template, 7, 8, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r45 = ctx.$implicit;
    const expanded_r46 = ctx.expanded;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](7);

    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("id", step_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("fa-rotate-90", expanded_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 16, expanded_r46 ? "list.hideDetails" : "list.showDetails"))("pRowToggler", step_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r4.Column.Tree].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.itemId && step_r45.items)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r4.Column.Belts].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r4.Column.Wagons].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r45.recipeId && vm_r1.recipeSettings[step_r45.recipeId].factoryId)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r4.Column.Beacons].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r4.Column.Power].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r4.Column.Pollution].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r4.Column.Link].show);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    const item_r273 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, "options.stepDetailTab." + item_r273.label), " ");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_1_1_ng_template_0_Template(rf, ctx) {}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_1_1_Template, 1, 0, null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 2, "list.sources"), " ");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a11) {
  return {
    items: a0,
    itemId: a1,
    belts: a2,
    beltId: a3,
    wagons: a4,
    wagonId: a5,
    factories: a6,
    factoryId: a7,
    recipeId: a8,
    percent: a9,
    percentOnDest: true,
    destId: a11
  };
};

function ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const value_r283 = ctx.ngIf;
    const output_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunctionV"](2, _c3, [step_r266.items.mul(value_r283), step_r266.itemId, step_r266.belts == null ? null : step_r266.belts.mul(value_r283), vm_r1.itemSettings[step_r266.itemId].beltId, step_r266.wagons == null ? null : step_r266.wagons.mul(value_r283), vm_r1.itemSettings[step_r266.itemId].wagonId, output_r280.factories, vm_r1.recipeSettings[output_r280.recipeId].factoryId, output_r280.recipeId, value_r283, step_r266.itemId]));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_ng_container_1_ng_container_1_Template, 2, 14, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const output_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", output_r280.outputs[step_r266.itemId]);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const output_r280 = ctx.$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", output_r280.outputs && output_r280.recipeId && step_r266.itemId);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_3_1_ng_template_0_Template(rf, ctx) {}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_3_1_Template, 1, 0, null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 2, "list.destinations"), " ");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

const _c4 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  return {
    items: a0,
    itemId: a1,
    belts: a2,
    beltId: a3,
    wagons: a4,
    wagonId: a5,
    factories: a6,
    factoryId: a7,
    recipeId: a8,
    percent: a9,
    destId: a10,
    destIsRecipe: true
  };
};

function ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const parent_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunctionV"](2, _c4, [step_r266.items == null ? null : step_r266.items.mul(parent_r293.value), step_r266.itemId, step_r266.belts == null ? null : step_r266.belts.mul(parent_r293.value), vm_r1.itemSettings[step_r266.itemId].beltId, step_r266.wagons == null ? null : step_r266.wagons.mul(parent_r293.value), vm_r1.itemSettings[step_r266.itemId].wagonId, vm_r1.stepDetails[step_r266.id].outputs.length === 1 ? step_r266.factories == null ? null : step_r266.factories.mul(parent_r293.value) : null, vm_r1.stepDetails[step_r266.id].outputs.length === 1 && step_r266.recipeId ? vm_r1.recipeSettings[step_r266.recipeId].factoryId : null, step_r266.recipeId, parent_r293.value, parent_r293.key]));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_4_ng_container_1_Template, 2, 14, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r266.itemId);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_1_Template, 5, 4, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_2_Template, 2, 1, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_5_ng_container_9_tr_3_Template, 5, 4, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_5_ng_container_9_ng_container_4_Template, 2, 1, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.stepDetails[step_r266.id].outputs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", vm_r1.stepDetails[step_r266.id].outputs);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r266.parents);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 4, step_r266.parents, ctx_r269.trackSvc.sortByValue));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

const _c5 = function (a0, a1) {
  return {
    items: a0,
    itemId: a1
  };
};

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const output_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](2, _c5, row_r313.step.items.mul(row_r313.percent).div(vm_r1.data.recipeR[step_r266.recipeId].productivity), output_r311.key));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r313 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r313.step && row_r313.percent && row_r313.step.items);
  }
}

const _c6 = function (a0, a1) {
  return {
    step: a0,
    percent: a1
  };
};

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const output_r311 = ctx.$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](1, _c6, vm_r1.stepByItemEntities[output_r311.key], step_r266.outputs == null ? null : step_r266.outputs[output_r311.key]));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_2_Template, 1, 0, null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_ng_container_6_Template, 2, 4, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 3, "list.depletion"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](7, 5, step_r266.outputs, ctx_r304.trackSvc.sortByValue));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const input_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunctionV"](2, _c4, [row_r328.step.items == null ? null : row_r328.step.items.mul(row_r328.percent), input_r326.key, row_r328.step.belts == null ? null : row_r328.step.belts.mul(row_r328.percent), vm_r1.itemSettings[row_r328.step.itemId].beltId, row_r328.step.wagons == null ? null : row_r328.step.wagons.mul(row_r328.percent), vm_r1.itemSettings[row_r328.step.itemId].wagonId, row_r328.step.factories == null ? null : row_r328.step.factories.mul(row_r328.percent), row_r328.step.recipeId && vm_r1.recipeSettings[row_r328.step.recipeId].factoryId, row_r328.step.recipeId, row_r328.percent, step_r266.recipeId]));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_ng_container_1_ng_container_1_Template, 2, 14, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r328 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r328.step.itemId && row_r328.percent);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const input_r326 = ctx.$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](1, _c6, vm_r1.stepByItemEntities[input_r326.key], vm_r1.stepByItemEntities[input_r326.key].parents == null ? null : vm_r1.stepByItemEntities[input_r326.key].parents[step_r266.recipeId]));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_2_Template, 1, 0, null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_ng_container_6_Template, 2, 4, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 3, "list.inputs"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](7, 5, vm_r1.data.recipeR[step_r266.recipeId].in, ctx_r305.trackSvc.sortByValue));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_5_ng_template_0_Template(rf, ctx) {}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

const _c7 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a11) {
  return {
    items: a0,
    itemId: a1,
    belts: a2,
    beltId: a3,
    wagons: a4,
    wagonId: a5,
    factories: a6,
    factoryId: a7,
    recipeId: a8,
    percent: a9,
    percentOnDest: true,
    destId: a11,
    destIsRecipe: true
  };
};

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const output_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunctionV"](2, _c7, [row_r342.step.items == null ? null : row_r342.step.items.mul(row_r342.percent), output_r340.key, row_r342.step.belts == null ? null : row_r342.step.belts.mul(row_r342.percent), vm_r1.itemSettings[row_r342.step.itemId].beltId, row_r342.step.wagons == null ? null : row_r342.step.wagons.mul(row_r342.percent), vm_r1.itemSettings[row_r342.step.itemId].wagonId, row_r342.step.factories == null ? null : row_r342.step.factories.mul(row_r342.percent), row_r342.step.recipeId && vm_r1.recipeSettings[row_r342.step.recipeId].factoryId, row_r342.step.recipeId, row_r342.percent, step_r266.recipeId]));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_ng_container_1_ng_container_1_Template, 2, 14, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r342 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r342.step.itemId && row_r342.percent);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const output_r340 = ctx.$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](1, _c6, vm_r1.stepByItemEntities[output_r340.key], step_r266.outputs == null ? null : step_r266.outputs[output_r340.key]));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_1_Template, 8, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_2_Template, 8, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_5_Template, 1, 0, null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_ng_container_9_Template, 2, 4, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const settings_r303 = ctx.ngIf;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r302.Game.Factorio && settings_r303.factoryId && (vm_r1.data.itemEntities[settings_r303.factoryId].factory == null ? null : vm_r1.data.itemEntities[settings_r303.factoryId].factory.mining));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 5, vm_r1.data.recipeR[step_r266.recipeId].in).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](8, 7, "list.outputs"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](10, 9, vm_r1.data.recipeR[step_r266.recipeId].out, ctx_r302.trackSvc.sortByValue));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_10_ng_container_1_Template, 11, 12, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.recipeSettings[step_r266.recipeId]);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

const _c8 = function (a0, a1) {
  return {
    value: a0,
    itemId: a1
  };
};

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const input_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();

    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](16);

    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r360)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](5, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 2, row_r364.step.items.mul(row_r364.percent).div(step_r266.factories), vm_r1.effectivePrecision[ctx_r366.Column.Items]), input_r362.key));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const beltId_r376 = ctx.ngIf;
    const row_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);

    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](16);

    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r360)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](5, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 2, row_r364.step.belts.mul(row_r364.percent).div(step_r266.factories), vm_r1.effectivePrecision[ctx_r375.Column.Belts]), beltId_r376));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_ng_container_1_ng_container_1_Template, 3, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const input_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemSettings[input_r362.key].beltId);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r364.step.belts);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ins_r386 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](6);

    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](16);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r360)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](5, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 2, ins_r386.value, 1), ins_r386.id));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_ng_container_2_ng_container_1_Template, 3, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "inserterSpeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).ngIf;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, row_r364.step.items.mul(row_r364.percent).div(step_r266.factories).div(vm_r1.dispRateInfo.value), vm_r1.settings));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_ng_container_2_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const input_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    const ctx_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemSettings[input_r362.key].beltId !== ctx_r368.ItemId.Pipe && row_r364.step.items);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_2_Template, 3, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_td_3_Template, 2, 1, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_ng_container_4_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5).ngIf;
    const ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r364.step.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r365.Column.Belts].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r365.Game.Factorio);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_tr_1_Template, 5, 3, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const row_r364 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", row_r364.percent);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const input_r362 = ctx.$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](1, _c6, vm_r1.stepByItemEntities[input_r362.key], vm_r1.stepByItemEntities[input_r362.key].parents == null ? null : vm_r1.stepByItemEntities[input_r362.key].parents[step_r266.recipeId]));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 13)(1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "factoryTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const factoryId_r398 = ctx.ngIf;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 8, step_r266.recipeId, "recipe"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 11, step_r266.recipeId, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 14, factoryId_r398));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 16, factoryId_r398, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ins_r409 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5);

    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](16);

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r360)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](5, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 2, ins_r409.value, 1), ins_r409.id));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_ng_container_2_ng_container_1_Template, 3, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "inserterSpeed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const items_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](5).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, items_r403, vm_r1.settings));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_ng_container_2_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const output_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemSettings[output_r401.key].beltId !== ctx_r404.ItemId.Pipe);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_td_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_td_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const beltId_r416 = ctx.ngIf;
    const items_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);

    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](16);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).ngIf;
    const ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r360)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](5, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 2, items_r403.div(vm_r1.beltSpeed[beltId_r416]), vm_r1.effectivePrecision[ctx_r415.Column.Belts]), beltId_r416));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_td_2_ng_container_1_Template, 3, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const output_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.itemSettings[output_r401.key].beltId);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_1_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_td_2_Template, 2, 1, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_ng_container_4_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const items_r403 = ctx.ngIf;
    const output_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();

    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](16);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).ngIf;
    const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r402.Game.Factorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r402.Column.Belts].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r360)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](7, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 4, items_r403.mul(vm_r1.dispRateInfo.value), vm_r1.effectivePrecision[ctx_r402.Column.Items]), output_r401.key));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_tr_1_Template, 6, 10, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const output_r401 = ctx.$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", output_r401.value.div(vm_r1.data.recipeR[step_r266.recipeId].time));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 84)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const value_r426 = ctx.value;
    const itemId_r427 = ctx.itemId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](value_r426);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 5, itemId_r427));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 7, itemId_r427, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 13)(1, "table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_2_Template, 2, 4, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "table", 81)(6, "tr")(7, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_div_10_Template, 7, 19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_container_13_Template, 2, 1, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](14, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_ng_template_15_Template, 6, 10, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 3, vm_r1.data.recipeR[step_r266.recipeId].in, ctx_r355.trackSvc.sortByValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.recipeSettings[step_r266.recipeId] == null ? null : vm_r1.recipeSettings[step_r266.recipeId].factoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](14, 6, vm_r1.data.recipeR[step_r266.recipeId].out, ctx_r355.trackSvc.sortByValue));
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, "list.inserterCountInfo"), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}

function ListComponent_ng_container_0_ng_template_5_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_5_tr_11_div_3_Template, 17, 9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_5_tr_11_div_4_Template, 3, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r266.recipeId && step_r266.factories);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.game === ctx_r271.Game.Factorio);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 91)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](3, 1, "list.defaultRecipeInfo3"));
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_ng_container_1_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_ng_container_1_button_21_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r441);
      const recipeId_r438 = restoredCtx.$implicit;
      const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
      const ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r439.toggleDefaultRecipe(step_r266.itemId, recipeId_r438, vm_r1.itemSettings, vm_r1.settings, vm_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const recipeId_r438 = ctx.$implicit;
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("p-button-text", vm_r1.data.itemRecipeId[step_r266.itemId] !== recipeId_r438);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, recipeId_r438, "recipe"))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 8, recipeId_r438, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 69)(4, "div")(5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div")(9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div")(13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_ng_container_1_div_16_Template, 4, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "td", 69)(20, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_ng_container_1_button_21_Template, 3, 11, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 5, "list.defaultRecipe"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](11, 7, "list.defaultRecipeInfo1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](15, 9, "list.defaultRecipeInfo2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.itemRecipeId[step_r266.itemId] === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", vm_r1.stepDetails[step_r266.id].defaultableRecipeIds);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_button_17_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r449);
      const recipeId_r447 = restoredCtx.$implicit;
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
      const ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r448.toggleRecipe(recipeId_r447, vm_r1.settings, vm_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconSmClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const recipeId_r447 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("hover-active", vm_r1.settings.disabledRecipeIds.indexOf(recipeId_r447) !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 5, recipeId_r447, "recipe"))("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 8, recipeId_r447, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_ng_container_1_Template, 22, 11, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td", 69)(5, "div")(6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div")(10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "td", 69)(16, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_button_17_Template, 4, 11, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.stepDetails[step_r266.id].defaultableRecipeIds.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](8, 4, "list.enabledRecipes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](12, 6, "list.enabledRecipesInfo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", vm_r1.stepDetails[step_r266.id].recipeIds);
  }
}

function ListComponent_ng_container_0_ng_template_5_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_5_ng_container_12_ng_container_1_Template, 18, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", step_r266.itemId);
  }
}

function ListComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td", 69)(5, "p-tabMenu", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ListComponent_ng_container_0_ng_template_5_ng_template_7_Template, 2, 3, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](8, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ListComponent_ng_container_0_ng_template_5_ng_container_9_Template, 6, 7, "ng-container", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ListComponent_ng_container_0_ng_template_5_ng_container_10_Template, 2, 1, "ng-container", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ListComponent_ng_container_0_ng_template_5_tr_11_Template, 5, 2, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ListComponent_ng_container_0_ng_template_5_ng_container_12_Template, 2, 1, "ng-container", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const step_r266 = ctx.$implicit;

    const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](6);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", "#" + step_r266.id, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("model", vm_r1.stepDetails[step_r266.id].tabs)("activeItem", vm_r1.stepDetails[step_r266.id].tabs[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitch", _r267.activeItem.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx_r5.StepDetailTab.Item);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx_r5.StepDetailTab.Recipe);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx_r5.StepDetailTab.Factory);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngSwitchCase", ctx_r5.StepDetailTab.Recipes);
  }
}

function ListComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "td", 12);
  }
}

function ListComponent_ng_container_0_ng_template_8_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "td");
  }
}

function ListComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_8_td_1_Template, 1, 0, "td", 0);
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r9.Column.Tree].show);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_1_ng_template_0_Template(rf, ctx) {}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_10_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 34)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "td", 37)(6, "div", 20)(7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r482 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    const belts_r460 = ctx_r482.belts;
    const beltId_r461 = ctx_r482.beltId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](4, 5, belts_r460, vm_r1.effectivePrecision[ctx_r481.Column.Belts]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](8, 8, beltId_r461));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](9, 10, "tooltip.belt", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](13, _c1, vm_r1.data.itemEntities[beltId_r461].name, vm_r1.beltSpeedTxt[beltId_r461])))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_11_ng_container_1_Template, 10, 16, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r484 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    const belts_r460 = ctx_r484.belts;
    const beltId_r461 = ctx_r484.beltId;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", belts_r460 && beltId_r461);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_ng_container_1_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const wagonId_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).wagonId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 4, wagonId_r463));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 6, "tooltip.cargoWagon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](9, _c2, vm_r1.data.itemEntities[wagonId_r463].name, vm_r1.data.cargoWagonEntities[wagonId_r463].size)))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const wagonId_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).wagonId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 4, wagonId_r463));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 6, "tooltip.fluidWagon", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](9, _c2, vm_r1.data.itemEntities[wagonId_r463].name, vm_r1.data.fluidWagonEntities[wagonId_r463].capacity)))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 34)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "td", 37)(6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_ng_container_1_i_7_Template, 3, 12, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_ng_container_1_ng_template_8_Template, 3, 12, "ng-template", null, 96, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r487 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    const ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    const wagons_r462 = ctx_r493.wagons;
    const wagonId_r463 = ctx_r493.wagonId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](4, 3, wagons_r462, vm_r1.effectivePrecision[ctx_r485.Column.Wagons]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.data.cargoWagonIds.indexOf(wagonId_r463) !== -1)("ngIfElse", _r487);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_ng_container_1_Template, 10, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    const wagons_r462 = ctx_r495.wagons;
    const wagonId_r463 = ctx_r495.wagonId;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", wagons_r462 && wagonId_r463);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "factoryRate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    const factories_r464 = ctx_r496.factories;
    const factoryId_r465 = ctx_r496.factoryId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind3"](2, 1, factories_r464, vm_r1.effectivePrecision[ctx_r475.Column.Factories], factoryId_r465));
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "factoryTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    const recipeId_r466 = ctx_r498.recipeId;
    const factoryId_r465 = ctx_r498.factoryId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 8, recipeId_r466, "recipe"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 11, recipeId_r466, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 14, factoryId_r465));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 16, factoryId_r465, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_22_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 100);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_22_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 100);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_22_i_1_Template, 1, 0, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "leftPad");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_22_i_6_Template, 1, 0, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "recipeTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r502 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    const percentOnDest_r468 = ctx_r502.percentOnDest;
    const percent_r467 = ctx_r502.percent;
    const destId_r469 = ctx_r502.destId;
    const destIsRecipe_r470 = ctx_r502.destIsRecipe;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", percentOnDest_r468);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 7, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 9, percent_r467, -2)), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !percentOnDest_r468);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](8, 12, destId_r469, destIsRecipe_r470 ? "recipe" : "item"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", destIsRecipe_r470 ? _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](9, 15, destId_r469, vm_r1.data) : _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](10, 18, destId_r469, vm_r1.data))("escape", false);
  }
}

function ListComponent_ng_container_0_ng_template_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_10_ng_container_1_1_Template, 1, 0, null, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "td", 34)(3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "td", 37)(7, "div", 20)(8, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "itemTooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_11_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_12_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, ListComponent_ng_container_0_ng_template_10_ng_container_1_span_14_Template, 3, 5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "factoryShowRate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "td", 94)(17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_18_Template, 7, 19, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](19, "factoryShow");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_template_20_Template, 4, 0, "ng-template", null, 95, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, ListComponent_ng_container_0_ng_template_10_ng_container_1_ng_container_22_Template, 11, 21, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r477 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](21);

    const ctx_r504 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    const items_r458 = ctx_r504.items;
    const itemId_r459 = ctx_r504.itemId;
    const factories_r464 = ctx_r504.factories;
    const factoryId_r465 = ctx_r504.factoryId;
    const percent_r467 = ctx_r504.percent;
    const destId_r469 = ctx_r504.destId;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](9);

    const ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 12, items_r458, vm_r1.effectivePrecision[ctx_r471.Column.Items]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 15, itemId_r459));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](10, 17, itemId_r459, vm_r1.data))("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r471.Column.Belts].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r471.Column.Wagons].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", factories_r464 && factories_r464.nonzero() && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](15, 20, factoryId_r465, vm_r1.data.game));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](19, 23, factoryId_r465, vm_r1.data.game))("ngIfElse", _r477);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", percent_r467 && destId_r469);
  }
}

function ListComponent_ng_container_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ListComponent_ng_container_0_ng_template_10_ng_container_1_Template, 23, 26, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const itemId_r459 = ctx.itemId;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", itemId_r459);
  }
}

function ListComponent_ng_container_0_ng_template_12_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "td");
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainer"](0);
  }
}

function ListComponent_ng_container_0_ng_template_12_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 103)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "power");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const ctx_r511 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind3"](3, 1, vm_r1.totals.power, vm_r1.effectivePrecision[ctx_r511.Column.Power], vm_r1.effectivePowerUnit));
  }
}

function ListComponent_ng_container_0_ng_template_12_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 103)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    const ctx_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 1, vm_r1.totals.pollution, vm_r1.effectivePrecision[ctx_r512.Column.Pollution]));
  }
}

function ListComponent_ng_container_0_ng_template_12_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "td");
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_template_13_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 108)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const tot_r523 = ctx.$implicit;
    const column_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).column;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 1, tot_r523.value, vm_r1.effectivePrecision[column_r518]));
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_template_13_ng_container_0_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "iconClass");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tot_r526 = ctx.$implicit;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](1, 3, tot_r526.key, "item"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("pTooltip", (vm_r1.data.itemEntities[tot_r526.key] == null ? null : vm_r1.data.itemEntities[tot_r526.key].name) || vm_r1.data.recipeEntities[tot_r526.key].name);
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_12_ng_template_13_ng_container_0_div_2_Template, 4, 4, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_12_ng_template_13_ng_container_0_i_5_Template, 2, 6, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const totals_r519 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().totals;
    const ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 2, totals_r519, ctx_r520.trackSvc.sortByValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 5, totals_r519, ctx_r520.trackSvc.sortByValue));
  }
}

function ListComponent_ng_container_0_ng_template_12_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_ng_template_12_ng_template_13_ng_container_0_Template, 7, 8, "ng-container", 0);
  }

  if (rf & 2) {
    const column_r518 = ctx.column;
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[column_r518].show);
  }
}

const _c9 = function (a0, a1) {
  return {
    column: a0,
    totals: a1
  };
};

function ListComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ListComponent_ng_container_0_ng_template_12_td_2_Template, 1, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_12_ng_container_6_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ListComponent_ng_container_0_ng_template_12_ng_container_7_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ListComponent_ng_container_0_ng_template_12_ng_container_8_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ListComponent_ng_container_0_ng_template_12_ng_container_9_Template, 1, 0, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ListComponent_ng_container_0_ng_template_12_td_10_Template, 4, 5, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ListComponent_ng_container_0_ng_template_12_td_11_Template, 4, 4, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ListComponent_ng_container_0_ng_template_12_td_12_Template, 1, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, ListComponent_ng_container_0_ng_template_12_ng_template_13_Template, 1, 1, "ng-template", null, 102, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const _r514 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](14);

    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r12.Column.Tree].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 13, "list.total"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r514)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](15, _c9, ctx_r12.Column.Belts, vm_r1.totals.belts));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r514)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](18, _c9, ctx_r12.Column.Wagons, vm_r1.totals.wagons));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r514)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](21, _c9, ctx_r12.Column.Factories, vm_r1.totals.factories));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngTemplateOutlet", _r514)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction2"](24, _c9, ctx_r12.Column.Beacons, vm_r1.totals.beacons));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r12.Column.Power].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r12.Column.Pollution].show);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", vm_r1.columns[ctx_r12.Column.Link].show);
  }
}

function ListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "p-table", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ListComponent_ng_container_0_ng_template_3_Template, 23, 18, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ListComponent_ng_container_0_ng_template_4_Template, 14, 18, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ListComponent_ng_container_0_ng_template_5_Template, 13, 8, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ListComponent_ng_container_0_ng_template_6_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ListComponent_ng_container_0_ng_template_8_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ListComponent_ng_container_0_ng_template_10_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ListComponent_ng_container_0_ng_template_12_Template, 15, 27, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("rowTrackBy", ctx_r0.trackSvc.trackById)("value", vm_r1.steps);
  }
}

class ListComponent {
  constructor(contentSvc, trackSvc, route, store) {
    this.contentSvc = contentSvc;
    this.trackSvc = trackSvc;
    this.route = route;
    this.store = store;
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Factories.getFactories), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Items.getItemSettings), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Items.getItemsModified), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getStepsModified), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getTotals), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getSteps), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getStepDetails), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getStepByItemEntities), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getStepTree), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getEffectivePrecision), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getEffectivePowerUnit), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Recipes.getRecipeSettings), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Recipes.getRecipesModified), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Recipes.getAdjustedDataset), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getColumnsState), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getSettings), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getDisplayRateInfo), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getOptions), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getBeltSpeed), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Settings.getBeltSpeedTxt)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.map)(([factories, itemSettings, itemsModified, stepsModified, totals, steps, stepDetails, stepByItemEntities, stepTree, effectivePrecision, effectivePowerUnit, recipeSettings, recipesModified, data, columns, settings, dispRateInfo, options, beltSpeed, beltSpeedTxt]) => ({
      factories,
      itemSettings,
      itemsModified,
      stepsModified,
      totals,
      steps,
      stepDetails,
      stepByItemEntities,
      stepTree,
      effectivePrecision,
      effectivePowerUnit,
      recipeSettings,
      recipesModified,
      data,
      columns,
      settings,
      dispRateInfo,
      options,
      beltSpeed,
      beltSpeedTxt
    })));
    this.Column = _models__WEBPACK_IMPORTED_MODULE_0__.Column;
    this.ItemId = _models__WEBPACK_IMPORTED_MODULE_0__.ItemId;
    this.StepDetailTab = _models__WEBPACK_IMPORTED_MODULE_0__.StepDetailTab;
    this.Game = _models__WEBPACK_IMPORTED_MODULE_0__.Game;
    this.RecipeField = _models__WEBPACK_IMPORTED_MODULE_0__.RecipeField;
    this.Rational = _models__WEBPACK_IMPORTED_MODULE_0__.Rational;
  }

  ngOnInit() {
    this.route.fragment.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.filter)(f => f != null)).subscribe(id => {
      // Store the fragment to navigate to it after the component loads
      this.fragmentId = id;
    });
  }

  ngAfterViewInit() {
    // Now that component is loaded, try navigating to the fragment
    try {
      if (this.fragmentId) {
        document.querySelector('#\\' + this.fragmentId)?.scrollIntoView();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getSteps), this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__.Products.getStepDetails)]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.first)()).subscribe(([steps, stepDetails]) => {
          const step = steps.find(s => s.id === this.fragmentId);

          if (step) {
            const tabs = stepDetails[step.id].tabs;

            if (tabs.length) {
              if (this.stepsTable) {
                this.stepsTable.toggleRow(step);
              }
            }
          }
        });
      }
    } catch (e) {}
  }

  resetStep(step) {
    if (step.itemId) {
      this.resetItem(step.itemId);
    }

    if (step.recipeId) {
      this.resetRecipe(step.recipeId);
    }
  }

  export(steps, itemSettings, recipeSettings, columns, data) {
    _utilities__WEBPACK_IMPORTED_MODULE_2__.ExportUtility.stepsToCsv(steps, columns, itemSettings, recipeSettings, data);
  }

  toggleDefaultRecipe(itemId, recipeId, itemSettings, settings, data) {
    if (itemSettings[itemId].recipeId === recipeId) {
      // Reset to null
      this.setDefaultRecipe(itemId);
    } else {
      // Set default recipe
      this.setDefaultRecipe(itemId, recipeId, _utilities__WEBPACK_IMPORTED_MODULE_2__.RecipeUtility.defaultRecipe(itemId, settings.disabledRecipeIds ?? [], data));
    }
  }

  toggleRecipe(id, settings, data) {
    const disabledRecipes = settings.disabledRecipeIds ?? [];
    const def = data.defaults?.disabledRecipeIds;

    if (disabledRecipes.indexOf(id) === -1) {
      this.setDisabledRecipes([...disabledRecipes, id], def);
    } else {
      this.setDisabledRecipes(disabledRecipes.filter(i => i !== id), def);
    }
  }

  changeFactory(recipeId, value, factories, data) {
    this.setFactory(recipeId, value, _utilities__WEBPACK_IMPORTED_MODULE_2__.RecipeUtility.bestMatch(data.recipeEntities[recipeId].producers, factories.ids ?? []));
  }

  changeRecipeField(recipeId, event, recipeSettings, factories, field, index, data) {
    const recipe = recipeSettings[recipeId];

    if (recipe.factoryId) {
      const factory = factories.entities[recipe.factoryId];

      switch (field) {
        case _models__WEBPACK_IMPORTED_MODULE_0__.RecipeField.FactoryModules:
          {
            if (factory.moduleRankIds != null && data != null && typeof event === 'string' && index != null && recipe.factoryModuleIds != null) {
              const count = recipe.factoryModuleIds.length;
              const options = [...data.recipeModuleIds[recipeId], _models__WEBPACK_IMPORTED_MODULE_0__.ItemId.Module];
              const def = _utilities__WEBPACK_IMPORTED_MODULE_2__.RecipeUtility.defaultModules(options, factory.moduleRankIds, count);
              const modules = this.generateModules(index, event, recipe.factoryModuleIds);
              this.setFactoryModules(recipeId, modules, def);
            }

            break;
          }

        case _models__WEBPACK_IMPORTED_MODULE_0__.RecipeField.BeaconCount:
          {
            if (typeof event === 'string') {
              const def = factory.beaconCount;
              this.setBeaconCount(recipeId, event, def);
            }

            break;
          }

        case _models__WEBPACK_IMPORTED_MODULE_0__.RecipeField.Beacon:
          {
            if (typeof event === 'string') {
              const def = factory.beaconId;
              this.setBeacon(recipeId, event, def);
            }

            break;
          }

        case _models__WEBPACK_IMPORTED_MODULE_0__.RecipeField.BeaconModules:
          {
            if (typeof event === 'string' && index != null && recipe.beaconModuleIds != null) {
              const count = recipe.beaconModuleIds.length;
              const def = new Array(count).fill(factory.beaconModuleId);
              const value = this.generateModules(index, event, recipe.beaconModuleIds);
              this.setBeaconModules(recipeId, value, def);
            }

            break;
          }

        case _models__WEBPACK_IMPORTED_MODULE_0__.RecipeField.Overclock:
          {
            if (typeof event === 'number') {
              const def = factory.overclock;
              const value = Math.max(1, Math.min(250, event));
              this.setOverclock(recipeId, value, def);
            }

            break;
          }
      }
    }
  }

  generateModules(index, value, original) {
    const modules = [...original]; // Copy
    // Fill in index to the right

    for (let i = index; i < modules.length; i++) {
      modules[i] = value;
    }

    return modules;
  }
  /** Action Dispatch Methods */


  ignoreItem(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.IgnoreItemAction(value));
  }

  setBelt(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.SetBeltAction({
      id,
      value,
      def
    }));
  }

  setWagon(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.SetWagonAction({
      id,
      value,
      def
    }));
  }

  setFactory(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.SetFactoryAction({
      id,
      value,
      def
    }));
  }

  setFactoryModules(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.SetFactoryModulesAction({
      id,
      value,
      def
    }));
  }

  setBeaconCount(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.SetBeaconCountAction({
      id,
      value,
      def
    }));
  }

  setBeacon(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.SetBeaconAction({
      id,
      value,
      def
    }));
  }

  setBeaconModules(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.SetBeaconModulesAction({
      id,
      value,
      def
    }));
  }

  setBeaconTotal(id, value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.SetBeaconTotalAction({
      id,
      value
    }));
  }

  setOverclock(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.SetOverclockAction({
      id,
      value,
      def
    }));
  }

  resetItem(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.ResetItemAction(value));
  }

  resetRecipe(value) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.ResetRecipeAction(value));
  }

  resetIgnores() {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.ResetIgnoresAction());
  }

  resetBelts() {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.ResetBeltsAction());
  }

  resetWagons() {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.ResetWagonsAction());
  }

  resetFactories() {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.ResetFactoriesAction());
  }

  resetBeacons() {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Recipes.ResetBeaconsAction());
  }

  setDisabledRecipes(value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Settings.SetDisabledRecipesAction({
      value,
      def
    }));
  }

  setDefaultRecipe(id, value, def) {
    this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__.Items.SetRecipeAction({
      id,
      value,
      def
    }));
  }

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.TrackService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_27__.Store));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["lab-list"]],
  viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.stepsTable = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-sm", 3, "rowTrackBy", "value"], ["stepsTable", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["emptyCol2", ""], ["leftPad", ""], ["detailRow", ""], ["pTemplate", "footer"], [1, "w-0"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-table-columns", 1, "p-button-outlined", "p-button-rounded", 3, "pTooltip", "click"], ["colspan", "2"], [1, "d-flex", "align-items-center"], ["pButton", "", "pRipple", "", "type", "button", "class", "ms-2 p-button-outlined p-button-rounded", "icon", "fa-solid fa-rotate-left", 3, "pTooltip", "click", 4, "ngIf"], ["colspan", "2", 4, "ngIf"], ["class", "w-0", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "ms-2", "p-button-outlined", "p-button-rounded", 3, "pTooltip", "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-file-arrow-down", "data-test", "lab-list-export", "tooltipPosition", "left", 1, "p-button-outlined", "p-button-rounded", 3, "pTooltip", "click"], [1, "w-0", 3, "id"], [1, "d-flex"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-angle-right", 1, "p-button-text", "p-button-rounded", "p-button-plain", "transition-ease", 3, "pTooltip", "pRowToggler"], ["class", "p-0", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "text-end", 4, "ngIf"], [1, "p-0"], [1, "d-flex", "align-items-center", "links"], [1, "icon"], [3, "class", "pTooltip", "escape", 4, "ngIf", "ngIfElse"], ["recipeIcon", ""], ["class", "connect", 3, "trail", "last", 4, "ngFor", "ngForOf"], [1, "indent"], [1, "connect"], [3, "pTooltip", "escape"], [1, "w-0", "text-end"], ["class", "monospace", 4, "ngIf"], [1, "monospace"], [1, "ps-0"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "icon", "pTooltip", "escape", "click"], [1, "hover-icon", "fa-solid", "fa-eye-slash"], ["labDropdownBase", "icon", 3, "pTooltip", "escape", "ngModel", "options", "onChange", 4, "ngIf", "ngIfElse"], ["pipesDropdown", ""], ["pipeIcon", ""], ["labDropdownBase", "icon", 3, "pTooltip", "escape", "ngModel", "options", "onChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip", "escape"], [1, "ms-3", "text-truncate"], ["fluidWagonsDropdown", ""], ["labDropdownBase", "icon", 3, "pTooltip", "escape", "ngModel", "options", "onChange", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], ["labDropdownBase", "icon", 3, "pTooltip", "escape", "options", "ngModel", "onChange", 4, "ngIf"], ["suffix", "%", 3, "min", "max", "step", "size", "pTooltip", "ngModel", "onBlur", 4, "ngIf"], ["labDropdownBase", "icon", 3, "pTooltip", "escape", "options", "ngModel", "onChange"], ["suffix", "%", 3, "min", "max", "step", "size", "pTooltip", "ngModel", "onBlur"], ["overclockInput", ""], ["labDropdownBase", "icon", "class", "module-dropdown", "tooltipPosition", "top", 3, "last", "pTooltip", "escape", "options", "ngModel", "onChange", 4, "ngFor", "ngForOf"], ["labDropdownBase", "icon", "tooltipPosition", "top", 1, "module-dropdown", 3, "pTooltip", "escape", "options", "ngModel", "onChange"], ["tooltipPosition", "left", "class", "text-end", "width", "3rem", 3, "pTooltip", "value", "hideButtons", "setValue", 4, "ngIf"], ["class", "text-end", "width", "4rem", 3, "pTooltip", "value", "hideButtons", "setValue", 4, "ngIf"], ["tooltipPosition", "left", "width", "3rem", 1, "text-end", 3, "pTooltip", "value", "hideButtons", "setValue"], ["width", "4rem", 1, "text-end", 3, "pTooltip", "value", "hideButtons", "setValue"], [1, "text-end"], ["target", "_blank", 1, "text-decoration-none", 3, "href"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-arrow-up-right-from-square", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-text p-button-rounded p-button-plain", "icon", "fa-solid fa-rotate-left", "tooltipPosition", "left", 3, "pTooltip", "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pTooltip", "click"], [1, "text-decoration-none", 3, "href"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-link", 1, "p-button-text", "p-button-rounded", "p-button-plain"], ["colspan", "100"], [3, "model", "activeItem"], ["expandTabMenu", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "detail", 4, "ngSwitchCase"], ["class", "detail", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "detail"], [4, "ngTemplateOutlet"], ["colspan", "100", 1, "fw-bold"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mw-0"], [1, "fa-solid", "fa-arrow-right", "mx-3"], ["factoryValueCell", ""], [1, "d-flex", "align-items-center", "justify-content-end"], [3, "innerHTML"], [1, "fw-bold"], [1, "d-flex", "flex-wrap"], ["pButton", "", "pRipple", "", "type", "button", "class", "hover-action p-button-rounded p-button-text me-2", 3, "hover-active", "icon", "pTooltip", "escape", "click", 4, "ngFor", "ngForOf"], ["class", "p-error", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-rounded me-2", 3, "p-button-text", "icon", "pTooltip", "escape", "click", 4, "ngFor", "ngForOf"], [1, "p-error"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-rounded", "me-2", 3, "icon", "pTooltip", "escape", "click"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-rounded", "p-button-text", "me-2", 3, "icon", "pTooltip", "escape", "click"], ["colspan", "100", 1, "p-0"], ["factoryFill", ""], ["fluidWagonIcon", ""], [1, "d-flex", "invisible"], [1, "lab-icon"], ["class", "m-1 p-2 fa-solid fa-arrow-right", 4, "ngIf"], [1, "m-1", "p-2", "fa-solid", "fa-arrow-right"], ["class", "text-end inherit", 4, "ngIf"], ["totalCell", ""], [1, "text-end", "inherit"], [1, "w-0", "text-end", "inherit"], ["class", "py-2 icon-height", 4, "ngFor", "ngForOf"], [1, "ps-0", "inherit"], ["class", "d-block", 3, "class", "pTooltip", 4, "ngFor", "ngForOf"], [1, "py-2", "icon-height"], [1, "d-block", 3, "pTooltip"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](0, ListComponent_ng_container_0_Template, 13, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](1, 1, ctx.vm$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgSwitchCase, primeng_button__WEBPACK_IMPORTED_MODULE_29__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_30__.PrimeTemplate, primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__.InputNumber, primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_34__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_35__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_35__.RowToggler, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_36__.TabMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.NgModel, _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__.InputNumberComponent, _directives_dropdown_base_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownBaseDirective, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslatePipe, _pipes_tooltips_beacon_tooltip_pipe__WEBPACK_IMPORTED_MODULE_6__.BeaconTooltipPipe, _pipes_tooltips_factory_tooltip_pipe__WEBPACK_IMPORTED_MODULE_7__.FactoryTooltipPipe, _pipes_tooltips_item_tooltip_pipe__WEBPACK_IMPORTED_MODULE_8__.ItemTooltipPipe, _pipes_tooltips_module_tooltip_pipe__WEBPACK_IMPORTED_MODULE_9__.ModuleTooltipPipe, _pipes_tooltips_recipe_tooltip_pipe__WEBPACK_IMPORTED_MODULE_10__.RecipeTooltipPipe, _pipes_factory_rate_pipe__WEBPACK_IMPORTED_MODULE_11__.FactoryRatePipe, _pipes_factory_show_rate_pipe__WEBPACK_IMPORTED_MODULE_12__.FactoryShowRatePipe, _pipes_factory_show_pipe__WEBPACK_IMPORTED_MODULE_13__.FactoryShowPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_14__.IconClassPipe, _pipes_icon_class_pipe__WEBPACK_IMPORTED_MODULE_14__.IconSmClassPipe, _pipes_inserter_speed_pipe__WEBPACK_IMPORTED_MODULE_15__.InserterSpeedPipe, _pipes_left_pad_pipe__WEBPACK_IMPORTED_MODULE_16__.LeftPadPipe, _pipes_options_pipe__WEBPACK_IMPORTED_MODULE_17__.OptionsPipe, _pipes_power_pipe__WEBPACK_IMPORTED_MODULE_18__.PowerPipe, _pipes_rate_pipe__WEBPACK_IMPORTED_MODULE_19__.RatePipe, _pipes_step_href_pipe__WEBPACK_IMPORTED_MODULE_20__.StepHrefPipe],
  styles: [".links[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  margin-left: 16px;\n}\n.links[_ngcontent-%COMP%]   .connect.last[_ngcontent-%COMP%], .links[_ngcontent-%COMP%]   .connect.trail[_ngcontent-%COMP%] {\n  border-left: 2px dotted var(--text-color-secondary);\n}\n.links[_ngcontent-%COMP%]   .connect.last[_ngcontent-%COMP%]:not(.trail) {\n  margin-bottom: 25px;\n  height: 25px;\n}\n.links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]    + .connect[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.links[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-top: 2px dotted var(--text-color-secondary);\n  width: 16px;\n}\n.links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n}\n[_nghost-%COMP%]     .p-dropdown:not(:hover):not(:focus):not(.ng-invalid), [_nghost-%COMP%]     .p-inputtext:not(:hover):not(:focus):not(.ng-invalid) {\n  border-color: transparent;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .module-dropdown:not(.last) {\n  margin-right: -0.5rem;\n}\n[_nghost-%COMP%]     .module-dropdown:not(.last) .p-dropdown {\n  border-right-color: transparent;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown:not(.last) .p-dropdown {\n  border-top-color: var(--primary-color);\n  border-bottom-color: var(--primary-color);\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown.last .p-dropdown {\n  border-color: var(--primary-color);\n  border-left-color: transparent;\n}\ntr.detail[_ngcontent-%COMP%] {\n  background-color: var(--surface-ground);\n}\ndiv.icon-height[_ngcontent-%COMP%] {\n  height: 32px;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3JpZXNcXGZveGhvbGVsYWJcXHNyY1xcYXBwXFxyb3V0ZXNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFBO0FDQUY7QURHRTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FDRko7QURLSTtFQUVFLG1EQUFBO0FDSk47QURRSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ05OO0FEVUk7RUFDRSxpQkFBQTtBQ1JOO0FEWUU7RUFDRSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSxXQUFBO0FDVko7QURhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNaSjtBRG9CSTs7RUFDRSx5QkFBQTtFQUVBLDZCQUFBO0FDakJOO0FEc0JFO0VBQ0UscUJBQUE7QUNwQko7QURzQkk7RUFDRSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNwQk47QUR5Qkk7RUFDRSxzQ0FBQTtFQUNBLHlDQUFBO0FDdkJOO0FEMEJJO0VBQ0Usa0NBQUE7RUFDQSw4QkFBQTtBQ3hCTjtBRDZCQTtFQUNFLHVDQUFBO0FDMUJGO0FENkJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzFCRiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmtzIHtcclxuICAvLyBUcmVlIGNvbnRhaW5lclxyXG4gIGhlaWdodDogNTBweDtcclxuXHJcbiAgLy8gT25lIHdpZHRoIHNlZ21lbnQgb2YgdGhlIHRyZWVcclxuICAuY29ubmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgLy8gU2VnbWVudCBjb250YWlucyB0cmFpbFxyXG4gICAgJi5sYXN0LFxyXG4gICAgJi50cmFpbCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggZG90dGVkIHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZWdtZW50IGVuZHMgYXQgdGhpcyByb3dcclxuICAgICYubGFzdDpub3QoLnRyYWlsKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZWdtZW50cyBzaG91bGQgcGFkIGJldHdlZW5cclxuICAgICYgKyAuY29ubmVjdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluZGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGJvcmRlci10b3A6IDJweCBkb3R0ZWQgdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAvLyBNYXNrIGlucHV0IGZpZWxkc1xyXG4gIC5wLWRyb3Bkb3duLFxyXG4gIC5wLWlucHV0dGV4dCB7XHJcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6Zm9jdXMpOm5vdCgubmctaW52YWxpZCkge1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBIaWdobGlnaHQgbW9kdWxlcyB0byByaWdodCBvZiB0aGUgaG92ZXJlZCBtb2R1bGVcclxuICAubW9kdWxlLWRyb3Bkb3duOm5vdCgubGFzdCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xyXG5cclxuICAgIC5wLWRyb3Bkb3duIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vZHVsZS1kcm9wZG93bjpob3ZlciB+IC5tb2R1bGUtZHJvcGRvd24ge1xyXG4gICAgJjpub3QoLmxhc3QpIC5wLWRyb3Bkb3duIHtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgICYubGFzdCAucC1kcm9wZG93biB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnRyLmRldGFpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xyXG59XHJcblxyXG5kaXYuaWNvbi1oZWlnaHQge1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbiIsIi5saW5rcyB7XG4gIGhlaWdodDogNTBweDtcbn1cbi5saW5rcyAuY29ubmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5saW5rcyAuY29ubmVjdC5sYXN0LCAubGlua3MgLmNvbm5lY3QudHJhaWwge1xuICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubGlua3MgLmNvbm5lY3QubGFzdDpub3QoLnRyYWlsKSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cbi5saW5rcyAuY29ubmVjdCArIC5jb25uZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubGlua3MgLmluZGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAycHggZG90dGVkIHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgd2lkdGg6IDE2cHg7XG59XG4ubGlua3MgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wLWRyb3Bkb3duOm5vdCg6aG92ZXIpOm5vdCg6Zm9jdXMpOm5vdCgubmctaW52YWxpZCksXG46aG9zdCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0Om5vdCg6aG92ZXIpOm5vdCg6Zm9jdXMpOm5vdCgubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubW9kdWxlLWRyb3Bkb3duOm5vdCgubGFzdCkge1xuICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZHVsZS1kcm9wZG93bjpub3QoLmxhc3QpIC5wLWRyb3Bkb3duIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2R1bGUtZHJvcGRvd246aG92ZXIgfiAubW9kdWxlLWRyb3Bkb3duOm5vdCgubGFzdCkgLnAtZHJvcGRvd24ge1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vZHVsZS1kcm9wZG93bjpob3ZlciB+IC5tb2R1bGUtZHJvcGRvd24ubGFzdCAucC1kcm9wZG93biB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudHIuZGV0YWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1ncm91bmQpO1xufVxuXG5kaXYuaWNvbi1oZWlnaHQge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufSJdfQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8249:
/*!********************************************!*\
  !*** ./src/app/routes/list/list.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListModule": () => (/* binding */ ListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app-shared.module */ 453);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-routing.module */ 9532);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component */ 7282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ListModule {
}
ListModule.ɵfac = function ListModule_Factory(t) { return new (t || ListModule)(); };
ListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ListModule });
ListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_shared_module__WEBPACK_IMPORTED_MODULE_0__.AppSharedModule, _list_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ListModule, { declarations: [_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _app_shared_module__WEBPACK_IMPORTED_MODULE_0__.AppSharedModule, _list_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_routes_list_list_module_ts.js.map