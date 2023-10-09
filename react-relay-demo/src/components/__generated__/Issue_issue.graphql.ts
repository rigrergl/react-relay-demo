/**
 * @generated SignedSource<<46c2220c5d29b0cfcebbdbf9d70225cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Issue_issue$data = {
  readonly title: string;
  readonly " $fragmentType": "Issue_issue";
};
export type Issue_issue$key = {
  readonly " $data"?: Issue_issue$data;
  readonly " $fragmentSpreads": FragmentRefs<"Issue_issue">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Issue_issue",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};

(node as any).hash = "58e2f0b5eaf951c4bd0d7354433e5ff8";

export default node;
