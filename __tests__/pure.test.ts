import babelTraverse from '@babel/traverse';
import { parse, ParserPlugin } from '@babel/parser';
import generate from '@babel/generator';
import * as t from '@babel/types';

const expectCode = (ast) => {
  expect(
    generate(ast).code
  ).toMatchSnapshot();
}

const printCode = (ast) => {
  console.log(
    generate(ast).code
  );
}


it('works', () => {

  expectCode(
    {
      "type": "File",
      "errors": [],
      "program": {
        "type": "Program",
        "sourceType": "module",
        "interpreter": null,
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "useDeployment"
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "properties": [
                        {
                          "type": "ObjectProperty",
                          "method": false,
                          "key": {
                            "type": "Identifier",
                            "name": "request"
                          },
                          "computed": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "name": "request"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        },
                        {
                          "type": "ObjectProperty",
                          "method": false,
                          "key": {
                            "type": "Identifier",
                            "name": "options"
                          },
                          "computed": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "name": "options"
                          },
                          "extra": {
                            "shorthand": true
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "name": "UseDeploymentQuery"
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "name": "TData"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "useQuery"
                          },
                          "arguments": [
                            {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "StringLiteral",
                                  "extra": {
                                    "rawValue": "deploymentQuery",
                                    "raw": "\"deploymentQuery\""
                                  },
                                  "value": "deploymentQuery"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "request"
                                }
                              ]
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "UnaryExpression",
                                      "operator": "!",
                                      "prefix": true,
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "queryService"
                                      }
                                    },
                                    "consequent": {
                                      "type": "ThrowStatement",
                                      "argument": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "name": "Error"
                                        },
                                        "arguments": [
                                          {
                                            "type": "StringLiteral",
                                            "extra": {
                                              "rawValue": "Query Service not initialized",
                                              "raw": "\"Query Service not initialized\""
                                            },
                                            "value": "Query Service not initialized"
                                          }
                                        ]
                                      }
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "name": "queryService"
                                        },
                                        "computed": false,
                                        "property": {
                                          "type": "Identifier",
                                          "name": "deployment"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "request"
                                        }
                                      ]
                                    }
                                  }
                                ],
                                "directives": []
                              }
                            },
                            {
                              "type": "Identifier",
                              "name": "options"
                            }
                          ],
                          "typeParameters": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "name": "QueryDeploymentResponse"
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "name": "Error"
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "name": "TData"
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "directives": []
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": "TData",
                        "default": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "name": "QueryDeploymentResponse"
                          }
                        }
                      }
                    ],
                    // NOTE: we're NOT adding a comma...
                    // "extra": {
                    //   "trailingComma": 55
                    // }
                  }
                }
              }
            ],
            "kind": "const"
          }
        ],
        "directives": []
      },
      "comments": []
    }
  );


});