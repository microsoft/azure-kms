// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ccfapp from "@microsoft/ccf-app";
import { ServiceResult } from "../../common/index";
import { enableEndpoint } from "../../common/index";
import { keyReleasePolicyMap } from "../../common/index";
import { ServiceRequest } from "../../common/index";
import { KeyReleasePolicy } from "../../common/index";
import { IKeyReleasePolicy } from "../../common/index";
import { LogContext } from "../../common/index";

// Enable the endpoint
enableEndpoint();

/**
 * Retrieves the key release policy.
 * @returns A ServiceResult containing the key release policy properties.
 */
export const keyReleasePolicy = (
  request: ccfapp.Request<void>,
): ServiceResult<string | IKeyReleasePolicy> => {
  const logContext = new LogContext().appendScope("keyReleasePolicyEndpoint");
  const serviceRequest = new ServiceRequest<void>(logContext, request);

  // check if caller has a valid identity
  const [_, isValidIdentity] = serviceRequest.isAuthenticated();
  if (isValidIdentity.failure) return isValidIdentity;

  try {
    const result =
      KeyReleasePolicy.getKeyReleasePolicyFromMap(keyReleasePolicyMap, logContext);
      return ServiceResult.Succeeded<IKeyReleasePolicy>(result, logContext);
  } catch (error: any) {
    return ServiceResult.Failed<string>({ errorMessage: error.message }, 500, logContext);
  }
};
