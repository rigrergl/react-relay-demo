/**
 * @generated SignedSource<<a7118149f5419df3f18923ad7cef9c2f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueListFragment_repository$data = {
  readonly issues: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"Issue_issue">;
      } | null;
    } | null> | null;
  };
  readonly name: string;
  readonly " $fragmentType": "IssueListFragment_repository";
};
export type IssueListFragment_repository$key = {
  readonly " $data"?: IssueListFragment_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueListFragment_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueListFragment_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
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
          "concreteType": "IssueEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Issue",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Issue_issue"
                }
              ],
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

(node as any).hash = "818025fa66633d6ae575dea074c02ad8";

export default node;
