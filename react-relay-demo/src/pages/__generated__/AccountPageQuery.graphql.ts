/**
 * @generated SignedSource<<09fa2064a7d53721cf457f119bd67215>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountPageQuery$variables = {};
export type AccountPageQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"AccountHeader_user">;
  };
};
export type AccountPageQuery = {
  response: AccountPageQuery$data;
  variables: AccountPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AccountHeader_user"
          }
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
    "name": "AccountPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "login",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatarUrl",
            "storageKey": null
          },
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
    "cacheID": "8f6cb2c4a1eca60128ac340f451e5c43",
    "id": null,
    "metadata": {},
    "name": "AccountPageQuery",
    "operationKind": "query",
    "text": "query AccountPageQuery {\n  viewer {\n    ...AccountHeader_user\n    id\n  }\n}\n\nfragment AccountHeader_user on User {\n  login\n  avatarUrl\n}\n"
  }
};

(node as any).hash = "66c6019135c9488f3ba68a076e555b9c";

export default node;
