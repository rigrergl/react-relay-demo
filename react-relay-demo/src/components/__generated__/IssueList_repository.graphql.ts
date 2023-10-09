/**
 * @generated SignedSource<<51eb676b12b5b5c2840cee49c2eafffb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueList_repository$data = {
  readonly issues: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly number: number;
      readonly title: string;
    } | null> | null;
  };
  readonly " $fragmentType": "IssueList_repository";
};
export type IssueList_repository$key = {
  readonly " $data"?: IssueList_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueList_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueList_repository",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 100
        },
        {
          "kind": "Literal",
          "name": "states",
          "value": "OPEN"
        }
      ],
      "concreteType": "IssueConnection",
      "kind": "LinkedField",
      "name": "issues",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Issue",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "number",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "issues(last:100,states:\"OPEN\")"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "2861e99d5e7283adb5dfd94fc0500c1c";

export default node;
