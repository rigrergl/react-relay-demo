/**
 * @generated SignedSource<<95a089fcffecb92fc22a1b0024d45210>>
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "4c196738f384ecdf35f94ac234ad7593";

export default node;
