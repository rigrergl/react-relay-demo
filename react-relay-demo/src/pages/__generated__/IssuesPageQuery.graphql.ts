/**
 * @generated SignedSource<<1cf33ec64e6dc8197a50564f36785525>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssuesPageQuery$variables = {
  name: string;
  owner: string;
};
export type IssuesPageQuery$data = {
  readonly repository: {
    readonly " $fragmentSpreads": FragmentRefs<"IssueListFragment_repository">;
  } | null;
};
export type IssuesPageQuery = {
  response: IssuesPageQuery$data;
  variables: IssuesPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IssuesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "IssueListFragment_repository"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "IssuesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
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
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "issues(last:100,states:\"OPEN\")"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bdca081996cf513a820e79cc26776735",
    "id": null,
    "metadata": {},
    "name": "IssuesPageQuery",
    "operationKind": "query",
    "text": "query IssuesPageQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ...IssueListFragment_repository\n    id\n  }\n}\n\nfragment IssueListFragment_repository on Repository {\n  name\n  issues(last: 100, states: OPEN) {\n    edges {\n      node {\n        id\n        ...Issue_issue\n      }\n    }\n  }\n}\n\nfragment Issue_issue on Issue {\n  title\n}\n"
  }
};
})();

(node as any).hash = "73dbc5f526fd8ebfba46a3355c4d8acb";

export default node;
