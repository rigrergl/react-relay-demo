/**
 * @generated SignedSource<<6b82f4aadd3364be544fac83e01522dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountHeader_user$data = {
  readonly avatarUrl: any;
  readonly login: string;
  readonly " $fragmentType": "AccountHeader_user";
};
export type AccountHeader_user$key = {
  readonly " $data"?: AccountHeader_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccountHeader_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountHeader_user",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "3496934854f3fccfb68b27bbcf5d2df0";

export default node;
