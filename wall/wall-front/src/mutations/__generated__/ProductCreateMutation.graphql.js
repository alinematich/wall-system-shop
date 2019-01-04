/**
 * @flow
 * @relayHash 9e1644f0b6d8955a86398bfc8ee56eda
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ProductCreateMutationVariables = {|
  input: {
    title: string;
    address: string;
    description: string;
    prodYear?: ?number;
    category: "DIGITAL_GOODS" | "PROPERTY" | "VEHICLE" | "BEAUTY" | "CLOTHING" | "HOME_KITCHEN" | "BOOK_MEDIA" | "ENTERTAINMENT" | "SPORT" | "OTHERS";
    image?: ?string;
    clientMutationId?: ?string;
  };
|};
export type ProductCreateMutationResponse = {|
  +productCreate: ?{|
    +ok: boolean;
    +errors: ?{|
      +address: ?$ReadOnlyArray<?string>;
      +category: ?$ReadOnlyArray<?string>;
      +prodYear: ?$ReadOnlyArray<?string>;
      +title: ?$ReadOnlyArray<?string>;
    |};
  |};
|};
*/


/*
mutation ProductCreateMutation(
  $input: ProductCreateInput!
) {
  productCreate(input: $input) {
    ok
    errors {
      address
      category
      prodYear
      title
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ProductCreateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductCreateMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ProductCreateInput!"
          }
        ],
        "concreteType": "ProductCreatePayload",
        "name": "productCreate",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "ok",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ProductCreateError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "address",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "category",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "prodYear",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
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
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ProductCreateMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ProductCreateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ProductCreateMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ProductCreateInput!"
          }
        ],
        "concreteType": "ProductCreatePayload",
        "name": "productCreate",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "ok",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ProductCreateError",
            "name": "errors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "address",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "category",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "prodYear",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
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
  "text": "mutation ProductCreateMutation(\n  $input: ProductCreateInput!\n) {\n  productCreate(input: $input) {\n    ok\n    errors {\n      address\n      category\n      prodYear\n      title\n    }\n  }\n}\n"
};

module.exports = batch;
