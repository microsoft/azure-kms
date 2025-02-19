// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { LastestItemStore } from "../../../common/index";
import { IKeyItem } from "../../../common/index";

//#region KMS Stores
// Stores
export const hpkeKeyMapName = "hpkeKey";
export const hpkeKeyMap = new LastestItemStore<number, IKeyItem>(
  hpkeKeyMapName,
);
//#endregion
