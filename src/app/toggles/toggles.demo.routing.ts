/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";

import {TogglesDemo} from "./toggles.demo";

const ROUTES: Routes = [{path: "", component: TogglesDemo}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
