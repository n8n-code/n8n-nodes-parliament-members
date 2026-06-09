import type { INodeProperties } from 'n8n-workflow';

export const locationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					]
				}
			},
			"options": [
				{
					"name": "GET API Location Browse",
					"value": "GET API Location Browse",
					"action": "Returns a list of locations, both parent and child",
					"description": "Returns a list of locations, both parent and child",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Browse/{{$parameter[\"locationType\"]}}/{{$parameter[\"locationName\"]}}"
						}
					}
				},
				{
					"name": "GET API Location Constituency Search",
					"value": "GET API Location Constituency Search",
					"action": "Returns a list of constituencies",
					"description": "Returns a list of constituencies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/Search"
						}
					}
				},
				{
					"name": "GET API Location Constituency",
					"value": "GET API Location Constituency",
					"action": "Returns a constituency by ID",
					"description": "Returns a constituency by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET API Location Constituency Election Result Latest",
					"value": "GET API Location Constituency Election Result Latest",
					"action": "Returns latest election result by constituency id",
					"description": "Returns latest election result by constituency id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/{{$parameter[\"id\"]}}/ElectionResult/Latest"
						}
					}
				},
				{
					"name": "GET API Location Constituency Election Result",
					"value": "GET API Location Constituency Election Result",
					"action": "Returns an election result by constituency and election id",
					"description": "Returns an election result by constituency and election id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/{{$parameter[\"id\"]}}/ElectionResult/{{$parameter[\"electionId\"]}}"
						}
					}
				},
				{
					"name": "GET API Location Constituency Election Results",
					"value": "GET API Location Constituency Election Results",
					"action": "Returns a list of election results by constituency ID",
					"description": "Returns a list of election results by constituency ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/{{$parameter[\"id\"]}}/ElectionResults"
						}
					}
				},
				{
					"name": "GET API Location Constituency Geometry",
					"value": "GET API Location Constituency Geometry",
					"action": "Returns geometry by constituency ID",
					"description": "Returns geometry by constituency ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/{{$parameter[\"id\"]}}/Geometry"
						}
					}
				},
				{
					"name": "GET API Location Constituency Representations",
					"value": "GET API Location Constituency Representations",
					"action": "Returns a list of representations by constituency ID",
					"description": "Returns a list of representations by constituency ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/{{$parameter[\"id\"]}}/Representations"
						}
					}
				},
				{
					"name": "GET API Location Constituency Synopsis",
					"value": "GET API Location Constituency Synopsis",
					"action": "Returns a synopsis by constituency ID",
					"description": "Returns a synopsis by constituency ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Location/Constituency/{{$parameter[\"id\"]}}/Synopsis"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/Location/Browse/{locationType}/{locationName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Browse"
					]
				}
			}
		},
		{
			"displayName": "Location Type",
			"name": "locationType",
			"required": true,
			"description": "Location by type of location",
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
				},
				{
					"name": "3",
					"value": 3
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Browse"
					]
				}
			}
		},
		{
			"displayName": "Location Name",
			"name": "locationName",
			"required": true,
			"description": "Location by name specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Browse"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/Search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Search"
					]
				}
			}
		},
		{
			"displayName": "Search Text",
			"name": "searchText",
			"description": "Constituencies containing serach term in their name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchText",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Search"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "The number of records to skip from the first, default is 0",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Search"
					]
				}
			}
		},
		{
			"displayName": "Take",
			"name": "take",
			"description": "The number of records to return, default is 20. Maximum is 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "take",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Search"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Constituency by ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/{id}/ElectionResult/Latest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Election Result Latest"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Latest election result by constituency id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Election Result Latest"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/{id}/ElectionResult/{electionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Election Result"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Election result by constituency id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Election Result"
					]
				}
			}
		},
		{
			"displayName": "Election ID",
			"name": "electionId",
			"required": true,
			"description": "Election result by election id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Election Result"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/{id}/ElectionResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Election Results"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Elections results by constituency ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Election Results"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/{id}/Geometry",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Geometry"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Geometry by constituency ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Geometry"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/{id}/Representations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Representations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Representations by constituency ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Representations"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Location/Constituency/{id}/Synopsis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Synopsis"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Synopsis by constituency ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Location"
					],
					"operation": [
						"GET API Location Constituency Synopsis"
					]
				}
			}
		},
];
