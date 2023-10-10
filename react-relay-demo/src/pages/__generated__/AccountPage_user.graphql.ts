/**
 * @generated SignedSource<<76821f559e70aa0fae180dd9d5aff24c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountPage_user$data = {
  readonly login: string;
  readonly status: {
    readonly message: string | null;
  } | null;
  readonly " $fragmentType": "AccountPage_user";
};
export type AccountPage_user$key = {
  readonly " $data"?: AccountPage_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountPage_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountPage_user",
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
      "concreteType": "UserStatus",
      "kind": "LinkedField",
      "name": "status",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "78c1cfa58cddb8c42f7ce92236b1743b";

export default node;
