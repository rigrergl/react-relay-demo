/**
 * @generated SignedSource<<57bff4d7fdfb6122875bc2dba01e31a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppAccountPageQuery$variables = {};
export type AppAccountPageQuery$data = {
  readonly viewer: {
    readonly login: string;
  };
};
export type AppAccountPageQuery = {
  response: AppAccountPageQuery$data;
  variables: AppAccountPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAccountPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAccountPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "be440ef4814c572b657274d2c4919221",
    "id": null,
    "metadata": {},
    "name": "AppAccountPageQuery",
    "operationKind": "query",
    "text": "query AppAccountPageQuery {\n  viewer {\n    login\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b9752de3ef9062cbccf1472ad2ec983d";

export default node;
