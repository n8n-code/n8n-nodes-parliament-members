import type { INodeProperties } from 'n8n-workflow';

export const referenceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					]
				}
			},
			"options": [
				{
					"name": "GET API Reference Answering Bodies",
					"value": "GET API Reference Answering Bodies",
					"action": "Returns a list of answering bodies.",
					"description": "Returns a list of answering bodies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Reference/AnsweringBodies"
						}
					}
				},
				{
					"name": "GET API Reference Departments",
					"value": "GET API Reference Departments",
					"action": "Returns a list of departments.",
					"description": "Returns a list of departments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Reference/Departments"
						}
					}
				},
				{
					"name": "GET API Reference Departments Logo",
					"value": "GET API Reference Departments Logo",
					"action": "Returns department logo.",
					"description": "Returns department logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Reference/Departments/{{$parameter[\"id\"]}}/Logo"
						}
					}
				},
				{
					"name": "GET API Reference Policy Interests",
					"value": "GET API Reference Policy Interests",
					"action": "Returns a list of policy interest.",
					"description": "Returns a list of policy interest.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Reference/PolicyInterests"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/Reference/AnsweringBodies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Answering Bodies"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Answering Bodies"
					]
				}
			}
		},
		{
			"displayName": "Name Contains",
			"name": "nameContains",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nameContains",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Answering Bodies"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Reference/Departments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Departments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Departments"
					]
				}
			}
		},
		{
			"displayName": "Name Contains",
			"name": "nameContains",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nameContains",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Departments"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Reference/Departments/{id}/Logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Departments Logo"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Logo by department ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Departments Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Reference/PolicyInterests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reference"
					],
					"operation": [
						"GET API Reference Policy Interests"
					]
				}
			}
		},
];
