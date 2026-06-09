import type { INodeProperties } from 'n8n-workflow';

export const lordsInterestsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					]
				}
			},
			"options": [
				{
					"name": "GET API Lords Interests Register",
					"value": "GET API Lords Interests Register",
					"action": "Returns a list of registered interests",
					"description": "Returns a list of registered interests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/LordsInterests/Register"
						}
					}
				},
				{
					"name": "GET API Lords Interests Staff",
					"value": "GET API Lords Interests Staff",
					"action": "Returns a list of staff",
					"description": "Returns a list of staff",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/LordsInterests/Staff"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/LordsInterests/Register",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					],
					"operation": [
						"GET API Lords Interests Register"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "searchTerm",
			"description": "Registered interests containing search term",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					],
					"operation": [
						"GET API Lords Interests Register"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page of results to return, default 0. Results per page 20.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					],
					"operation": [
						"GET API Lords Interests Register"
					]
				}
			}
		},
		{
			"displayName": "Include Deleted",
			"name": "includeDeleted",
			"description": "Registered interests that have been deleted",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeDeleted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					],
					"operation": [
						"GET API Lords Interests Register"
					]
				}
			}
		},
		{
			"displayName": "GET /api/LordsInterests/Staff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					],
					"operation": [
						"GET API Lords Interests Staff"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "searchTerm",
			"description": "Staff containing search term",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					],
					"operation": [
						"GET API Lords Interests Staff"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page of results to return, default 0. Results per page 20.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Lords Interests"
					],
					"operation": [
						"GET API Lords Interests Staff"
					]
				}
			}
		},
];
