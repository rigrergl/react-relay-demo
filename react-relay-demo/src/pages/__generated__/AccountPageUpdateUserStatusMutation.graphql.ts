/**
 * @generated SignedSource<<980ddad5cb42fcacbec38ad0faca5631>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ChangeUserStatusInput = {
  clientMutationId?: string | null;
  emoji?: string | null;
  expiresAt?: any | null;
  limitedAvailability?: boolean | null;
  message?: string | null;
  organizationId?: string | null;
};
export type AccountPageUpdateUserStatusMutation$variables = {
  input: ChangeUserStatusInput;
};
export type AccountPageUpdateUserStatusMutation$data = {
  readonly changeUserStatus: {
    readonly status: {
      readonly message: string | null;
    } | null;
  } | null;
};
export type AccountPageUpdateUserStatusMutation = {
  response: AccountPageUpdateUserStatusMutation$data;
  variables: AccountPageUpdateUserStatusMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountPageUpdateUserStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeUserStatusPayload",
        "kind": "LinkedField",
        "name": "changeUserStatus",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserStatus",
            "kind": "LinkedField",
            "name": "status",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountPageUpdateUserStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeUserStatusPayload",
        "kind": "LinkedField",
        "name": "changeUserStatus",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserStatus",
            "kind": "LinkedField",
            "name": "status",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9214b644ad6393d017069a9a130bb756",
    "id": null,
    "metadata": {},
    "name": "AccountPageUpdateUserStatusMutation",
    "operationKind": "mutation",
    "text": "mutation AccountPageUpdateUserStatusMutation(\n  $input: ChangeUserStatusInput!\n) {\n  changeUserStatus(input: $input) {\n    status {\n      message\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2f45d13f1a2d6f26618120788df787e";

export default node;
