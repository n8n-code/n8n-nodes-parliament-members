import type { INodeProperties } from 'n8n-workflow';

export const postsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					]
				}
			},
			"options": [
				{
					"name": "GET Api Posts Departments",
					"value": "GET Api Posts Departments",
					"action": "Returns a list of departments.",
					"description": "Returns a list of departments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Posts/Departments/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "GET Api Posts Government Posts",
					"value": "GET Api Posts Government Posts",
					"action": "Returns a list of government posts.",
					"description": "Returns a list of government posts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Posts/GovernmentPosts"
						}
					}
				},
				{
					"name": "GET Api Posts Opposition Posts",
					"value": "GET Api Posts Opposition Posts",
					"action": "Returns a list of opposition posts.",
					"description": "Returns a list of opposition posts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Posts/OppositionPosts"
						}
					}
				},
				{
					"name": "GET Api Posts Speaker And Deputies",
					"value": "GET Api Posts Speaker And Deputies",
					"action": "Returns a list containing the speaker and deputy speakers.",
					"description": "Returns a list containing the speaker and deputy speakers.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Posts/SpeakerAndDeputies/{{$parameter[\"forDate\"]}}"
						}
					}
				},
				{
					"name": "GET Api Posts Spokespersons",
					"value": "GET Api Posts Spokespersons",
					"action": "Returns a list of spokespersons.",
					"description": "Returns a list of spokespersons.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Posts/Spokespersons"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/Posts/Departments/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Departments"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Departments by type",
			"default": 0,
			"type": "options",
			"options": [
				{
					"name": "0",
					"value": 0
				},
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
						"Posts"
					],
					"operation": [
						"GET Api Posts Departments"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Posts/GovernmentPosts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Government Posts"
					]
				}
			}
		},
		{
			"displayName": "Department Id",
			"name": "departmentId",
			"description": "Government posts by department ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "departmentId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Government Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Posts/OppositionPosts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Opposition Posts"
					]
				}
			}
		},
		{
			"displayName": "Department Id",
			"name": "departmentId",
			"description": "Opposition posts by department ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "departmentId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Opposition Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Posts/SpeakerAndDeputies/{forDate}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Speaker And Deputies"
					]
				}
			}
		},
		{
			"displayName": "For Date",
			"name": "forDate",
			"required": true,
			"description": "Speaker and deputy speakers for date specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Speaker And Deputies"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Posts/Spokespersons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Spokespersons"
					]
				}
			}
		},
		{
			"displayName": "Party Id",
			"name": "partyId",
			"description": "Spokespersons by party ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "partyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Posts"
					],
					"operation": [
						"GET Api Posts Spokespersons"
					]
				}
			}
		},
];
