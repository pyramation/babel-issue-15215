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

    expectCode({
        "type": "File",
        "errors": [],
        "program": {
            "type": "Program",
            "sourceType": "module",
            "interpreter": null,
            "body": [
                {
                    "type": "ImportDeclaration",
                    "importKind": "value",
                    "specifiers": [
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "Attribute"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "Attribute"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "AttributeSDKType"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "AttributeSDKType"
                            }
                        }
                    ],
                    "source": {
                        "type": "StringLiteral",
                        "extra": {
                            "rawValue": "../../base/v1beta1/attribute",
                            "raw": "\"../../base/v1beta1/attribute\""
                        },
                        "value": "../../base/v1beta1/attribute"
                    }
                },
                {
                    "type": "ImportDeclaration",
                    "importKind": "value",
                    "specifiers": [
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "Rpc"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "Rpc"
                            }
                        }
                    ],
                    "source": {
                        "type": "StringLiteral",
                        "extra": {
                            "rawValue": "../../../helpers",
                            "raw": "\"../../../helpers\""
                        },
                        "value": "../../../helpers"
                    }
                },
                {
                    "type": "ImportDeclaration",
                    "importKind": "value",
                    "specifiers": [
                        {
                            "type": "ImportNamespaceSpecifier",
                            "local": {
                                "type": "Identifier",
                                "name": "_m0"
                            }
                        }
                    ],
                    "source": {
                        "type": "StringLiteral",
                        "extra": {
                            "rawValue": "protobufjs/minimal",
                            "raw": "\"protobufjs/minimal\""
                        },
                        "value": "protobufjs/minimal"
                    }
                },
                {
                    "type": "ImportDeclaration",
                    "importKind": "value",
                    "specifiers": [
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributes"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributes"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributesSDKType"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributesSDKType"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributesResponse"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributesResponse"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributesResponseSDKType"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgSignProviderAttributesResponseSDKType"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributes"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributes"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributesSDKType"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributesSDKType"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributesResponse"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributesResponse"
                            }
                        },
                        {
                            "type": "ImportSpecifier",
                            "imported": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributesResponseSDKType"
                            },
                            "importKind": "value",
                            "local": {
                                "type": "Identifier",
                                "name": "MsgDeleteProviderAttributesResponseSDKType"
                            }
                        }
                    ],
                    "source": {
                        "type": "StringLiteral",
                        "extra": {
                            "rawValue": "./audit",
                            "raw": "\"./audit\""
                        },
                        "value": "./audit"
                    },
                    "trailingComments": [
                        {
                            "type": "CommentBlock",
                            "value": "* Msg defines the provider Msg service "
                        }
                    ]
                },
                {
                    "type": "ExportNamedDeclaration",
                    "exportKind": "type",
                    "specifiers": [],
                    "source": null,
                    "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                            "type": "Identifier",
                            "name": "Msg"
                        },
                        "body": {
                            "type": "TSInterfaceBody",
                            "body": [
                                {
                                    "type": "TSMethodSignature",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "signProviderAttributes"
                                    },
                                    "computed": false,
                                    "parameters": [
                                        {
                                            "type": "Identifier",
                                            "name": "request",
                                            "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                        "type": "Identifier",
                                                        "name": "MsgSignProviderAttributes"
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                                "type": "Identifier",
                                                "name": "Promise"
                                            },
                                            "typeParameters": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                    {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                            "type": "Identifier",
                                                            "name": "MsgSignProviderAttributesResponse"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "kind": "method",
                                    "trailingComments": [
                                        {
                                            "type": "CommentBlock",
                                            "value": "* DeleteProviderAttributes defines a method that deletes provider attributes "
                                        }
                                    ],
                                    "leadingComments": [
                                        {
                                            "type": "CommentBlock",
                                            "value": "* SignProviderAttributes defines a method that signs provider attributes "
                                        }
                                    ]
                                },
                                {
                                    "type": "TSMethodSignature",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "deleteProviderAttributes"
                                    },
                                    "computed": false,
                                    "parameters": [
                                        {
                                            "type": "Identifier",
                                            "name": "request",
                                            "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                        "type": "Identifier",
                                                        "name": "MsgDeleteProviderAttributes"
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                                "type": "Identifier",
                                                "name": "Promise"
                                            },
                                            "typeParameters": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                    {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                            "type": "Identifier",
                                                            "name": "MsgDeleteProviderAttributesResponse"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "kind": "method",
                                    "leadingComments": [
                                        {
                                            "type": "CommentBlock",
                                            "value": "* DeleteProviderAttributes defines a method that deletes provider attributes "
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "leadingComments": [
                        {
                            "type": "CommentBlock",
                            "value": "* Msg defines the provider Msg service "
                        }
                    ]
                },
                {
                    "type": "ExportNamedDeclaration",
                    "exportKind": "value",
                    "specifiers": [],
                    "source": null,
                    "declaration": {
                        "type": "ClassDeclaration",
                        "id": {
                            "type": "Identifier",
                            "name": "MsgClientImpl"
                        },
                        "superClass": null,
                        "implements": [
                            {
                                "type": "TSExpressionWithTypeArguments",
                                "expression": {
                                    "type": "Identifier",
                                    "name": "Msg"
                                }
                            }
                        ],
                        "body": {
                            "type": "ClassBody",
                            "body": [
                                {
                                    "type": "ClassProperty",
                                    "accessibility": "private",
                                    "readonly": true,
                                    "static": false,
                                    "key": {
                                        "type": "Identifier",
                                        "name": "rpc"
                                    },
                                    "computed": false,
                                    "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                                "type": "Identifier",
                                                "name": "Rpc"
                                            }
                                        }
                                    },
                                    "value": null
                                },
                                {
                                    "type": "ClassMethod",
                                    "static": false,
                                    "key": {
                                        "type": "Identifier",
                                        "name": "constructor"
                                    },
                                    "computed": false,
                                    "kind": "constructor",
                                    "id": null,
                                    "generator": false,
                                    "async": false,
                                    "params": [
                                        {
                                            "type": "Identifier",
                                            "name": "rpc",
                                            "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                        "type": "Identifier",
                                                        "name": "Rpc"
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                            "type": "ThisExpression"
                                                        },
                                                        "computed": false,
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "rpc"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "rpc"
                                                    }
                                                }
                                            }
                                        ],
                                        "directives": []
                                    },
                                    "trailingComments": [
                                        {
                                            "type": "CommentBlock",
                                            "value": " SignProviderAttributes defines a method that signs provider attributes "
                                        }
                                    ]
                                },
                                {
                                    "type": "ClassProperty",
                                    "static": false,
                                    "key": {
                                        "type": "Identifier",
                                        "name": "signProviderAttributes"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "ArrowFunctionExpression",
                                        "returnType": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                    "type": "Identifier",
                                                    "name": "Promise"
                                                },
                                                "typeParameters": {
                                                    "type": "TSTypeParameterInstantiation",
                                                    "params": [
                                                        {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                                "type": "Identifier",
                                                                "name": "MsgSignProviderAttributesResponse"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        "id": null,
                                        "generator": false,
                                        "async": true,
                                        "params": [
                                            {
                                                "type": "Identifier",
                                                "name": "request",
                                                "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                            "type": "Identifier",
                                                            "name": "MsgSignProviderAttributes"
                                                        }
                                                    }
                                                }
                                            }
                                        ],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "VariableDeclaration",
                                                    "declarations": [
                                                        {
                                                            "type": "VariableDeclarator",
                                                            "id": {
                                                                "type": "Identifier",
                                                                "name": "data"
                                                            },
                                                            "init": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "object": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "MsgSignProviderAttributes"
                                                                            },
                                                                            "computed": false,
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "encode"
                                                                            }
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "request"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "computed": false,
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "finish"
                                                                    }
                                                                },
                                                                "arguments": []
                                                            }
                                                        }
                                                    ],
                                                    "kind": "const"
                                                },
                                                {
                                                    "type": "VariableDeclaration",
                                                    "declarations": [
                                                        {
                                                            "type": "VariableDeclarator",
                                                            "id": {
                                                                "type": "Identifier",
                                                                "name": "promise"
                                                            },
                                                            "init": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "object": {
                                                                        "type": "MemberExpression",
                                                                        "object": {
                                                                            "type": "ThisExpression"
                                                                        },
                                                                        "computed": false,
                                                                        "property": {
                                                                            "type": "Identifier",
                                                                            "name": "rpc"
                                                                        }
                                                                    },
                                                                    "computed": false,
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "request"
                                                                    }
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "StringLiteral",
                                                                        "extra": {
                                                                            "rawValue": "akash.audit.v1beta1.Msg",
                                                                            "raw": "\"akash.audit.v1beta1.Msg\""
                                                                        },
                                                                        "value": "akash.audit.v1beta1.Msg"
                                                                    },
                                                                    {
                                                                        "type": "StringLiteral",
                                                                        "extra": {
                                                                            "rawValue": "SignProviderAttributes",
                                                                            "raw": "\"SignProviderAttributes\""
                                                                        },
                                                                        "value": "SignProviderAttributes"
                                                                    },
                                                                    {
                                                                        "type": "Identifier",
                                                                        "name": "data"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ],
                                                    "kind": "const"
                                                },
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                            "type": "MemberExpression",
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "promise"
                                                            },
                                                            "computed": false,
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "then"
                                                            }
                                                        },
                                                        "arguments": [
                                                            {
                                                                "type": "ArrowFunctionExpression",
                                                                "id": null,
                                                                "generator": false,
                                                                "async": false,
                                                                "params": [
                                                                    {
                                                                        "type": "Identifier",
                                                                        "name": "data"
                                                                    }
                                                                ],
                                                                "body": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                        "type": "MemberExpression",
                                                                        "object": {
                                                                            "type": "Identifier",
                                                                            "name": "MsgSignProviderAttributesResponse"
                                                                        },
                                                                        "computed": false,
                                                                        "property": {
                                                                            "type": "Identifier",
                                                                            "name": "decode"
                                                                        }
                                                                    },
                                                                    "arguments": [
                                                                        {
                                                                            "type": "NewExpression",
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "name": "_m0"
                                                                                },
                                                                                "computed": false,
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "Reader"
                                                                                }
                                                                            },
                                                                            "arguments": [
                                                                                {
                                                                                    "type": "Identifier",
                                                                                    "name": "data"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ],
                                            "directives": []
                                        }
                                    },
                                    "trailingComments": [
                                        {
                                            "type": "CommentBlock",
                                            "value": " DeleteProviderAttributes defines a method that deletes provider attributes "
                                        }
                                    ],
                                    "leadingComments": [
                                        {
                                            "type": "CommentBlock",
                                            "value": " SignProviderAttributes defines a method that signs provider attributes "
                                        }
                                    ]
                                },
                                {
                                    "type": "ClassProperty",
                                    "static": false,
                                    "key": {
                                        "type": "Identifier",
                                        "name": "deleteProviderAttributes"
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "ArrowFunctionExpression",
                                        "returnType": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                    "type": "Identifier",
                                                    "name": "Promise"
                                                },
                                                "typeParameters": {
                                                    "type": "TSTypeParameterInstantiation",
                                                    "params": [
                                                        {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                                "type": "Identifier",
                                                                "name": "MsgDeleteProviderAttributesResponse"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        "id": null,
                                        "generator": false,
                                        "async": true,
                                        "params": [
                                            {
                                                "type": "Identifier",
                                                "name": "request",
                                                "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                            "type": "Identifier",
                                                            "name": "MsgDeleteProviderAttributes"
                                                        }
                                                    }
                                                }
                                            }
                                        ],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "VariableDeclaration",
                                                    "declarations": [
                                                        {
                                                            "type": "VariableDeclarator",
                                                            "id": {
                                                                "type": "Identifier",
                                                                "name": "data"
                                                            },
                                                            "init": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "object": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "MsgDeleteProviderAttributes"
                                                                            },
                                                                            "computed": false,
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "encode"
                                                                            }
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "request"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "computed": false,
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "finish"
                                                                    }
                                                                },
                                                                "arguments": []
                                                            }
                                                        }
                                                    ],
                                                    "kind": "const"
                                                },
                                                {
                                                    "type": "VariableDeclaration",
                                                    "declarations": [
                                                        {
                                                            "type": "VariableDeclarator",
                                                            "id": {
                                                                "type": "Identifier",
                                                                "name": "promise"
                                                            },
                                                            "init": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "object": {
                                                                        "type": "MemberExpression",
                                                                        "object": {
                                                                            "type": "ThisExpression"
                                                                        },
                                                                        "computed": false,
                                                                        "property": {
                                                                            "type": "Identifier",
                                                                            "name": "rpc"
                                                                        }
                                                                    },
                                                                    "computed": false,
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "request"
                                                                    }
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "StringLiteral",
                                                                        "extra": {
                                                                            "rawValue": "akash.audit.v1beta1.Msg",
                                                                            "raw": "\"akash.audit.v1beta1.Msg\""
                                                                        },
                                                                        "value": "akash.audit.v1beta1.Msg"
                                                                    },
                                                                    {
                                                                        "type": "StringLiteral",
                                                                        "extra": {
                                                                            "rawValue": "DeleteProviderAttributes",
                                                                            "raw": "\"DeleteProviderAttributes\""
                                                                        },
                                                                        "value": "DeleteProviderAttributes"
                                                                    },
                                                                    {
                                                                        "type": "Identifier",
                                                                        "name": "data"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ],
                                                    "kind": "const"
                                                },
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                            "type": "MemberExpression",
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "promise"
                                                            },
                                                            "computed": false,
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "then"
                                                            }
                                                        },
                                                        "arguments": [
                                                            {
                                                                "type": "ArrowFunctionExpression",
                                                                "id": null,
                                                                "generator": false,
                                                                "async": false,
                                                                "params": [
                                                                    {
                                                                        "type": "Identifier",
                                                                        "name": "data"
                                                                    }
                                                                ],
                                                                "body": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                        "type": "MemberExpression",
                                                                        "object": {
                                                                            "type": "Identifier",
                                                                            "name": "MsgDeleteProviderAttributesResponse"
                                                                        },
                                                                        "computed": false,
                                                                        "property": {
                                                                            "type": "Identifier",
                                                                            "name": "decode"
                                                                        }
                                                                    },
                                                                    "arguments": [
                                                                        {
                                                                            "type": "NewExpression",
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "name": "_m0"
                                                                                },
                                                                                "computed": false,
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "Reader"
                                                                                }
                                                                            },
                                                                            "arguments": [
                                                                                {
                                                                                    "type": "Identifier",
                                                                                    "name": "data"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ],
                                            "directives": []
                                        }
                                    },
                                    "leadingComments": [
                                        {
                                            "type": "CommentBlock",
                                            "value": " DeleteProviderAttributes defines a method that deletes provider attributes "
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ],
            "directives": []
        },
        "comments": [
            {
                "type": "CommentBlock",
                "value": "* Msg defines the provider Msg service "
            },
            {
                "type": "CommentBlock",
                "value": "* SignProviderAttributes defines a method that signs provider attributes "
            },
            {
                "type": "CommentBlock",
                "value": "* DeleteProviderAttributes defines a method that deletes provider attributes "
            },
            {
                "type": "CommentBlock",
                "value": " SignProviderAttributes defines a method that signs provider attributes "
            },
            {
                "type": "CommentBlock",
                "value": " DeleteProviderAttributes defines a method that deletes provider attributes "
            }
        ]
    });


});