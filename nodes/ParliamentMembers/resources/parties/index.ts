import type { INodeProperties } from 'n8n-workflow';

export const partiesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					]
				}
			},
			"options": [
				{
					"name": "GET API Parties Get Active",
					"value": "GET API Parties Get Active",
					"action": "Returns a list of current parties with at least one active member.",
					"description": "Returns a list of current parties with at least one active member.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Parties/GetActive/{{$parameter[\"house\"]}}"
						}
					}
				},
				{
					"name": "GET API Parties Lords By Type",
					"value": "GET API Parties Lords By Type",
					"action": "Returns the composition of the House of Lords by peerage type.",
					"description": "Returns the composition of the House of Lords by peerage type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Parties/LordsByType/{{$parameter[\"forDate\"]}}"
						}
					}
				},
				{
					"name": "GET API Parties State Of The Parties",
					"value": "GET API Parties State Of The Parties",
					"action": "Returns current state of parties",
					"description": "Returns current state of parties",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Parties/StateOfTheParties/{{$parameter[\"house\"]}}/{{$parameter[\"forDate\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/Parties/GetActive/{house}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					],
					"operation": [
						"GET API Parties Get Active"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "house",
			"required": true,
			"description": "Current parties by house",
			"default": 1,
			"type": "options",
			"options": [
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "2",
					"value": 2
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					],
					"operation": [
						"GET API Parties Get Active"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Parties/LordsByType/{forDate}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					],
					"operation": [
						"GET API Parties Lords By Type"
					]
				}
			}
		},
		{
			"displayName": "For Date",
			"name": "forDate",
			"required": true,
			"description": "Composition of the Lords for date specified.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					],
					"operation": [
						"GET API Parties Lords By Type"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Parties/StateOfTheParties/{house}/{forDate}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					],
					"operation": [
						"GET API Parties State Of The Parties"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "house",
			"required": true,
			"description": "State of parties in Commons or Lords.",
			"default": 1,
			"type": "options",
			"options": [
				{
					"name": "1",
					"value": 1
				},
				{
					"name": "2",
					"value": 2
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					],
					"operation": [
						"GET API Parties State Of The Parties"
					]
				}
			}
		},
		{
			"displayName": "For Date",
			"name": "forDate",
			"required": true,
			"description": "State of parties for the date specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Parties"
					],
					"operation": [
						"GET API Parties State Of The Parties"
					]
				}
			}
		},
];
