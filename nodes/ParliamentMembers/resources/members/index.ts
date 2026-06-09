import type { INodeProperties } from 'n8n-workflow';

export const membersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					]
				}
			},
			"options": [
				{
					"name": "GET Api Members History",
					"value": "GET Api Members History",
					"action": "Return members by ID with list of their historical names, parties and memberships",
					"description": "Return members by ID with list of their historical names, parties and memberships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/History"
						}
					}
				},
				{
					"name": "GET Api Members Search",
					"value": "GET Api Members Search",
					"action": "Returns a list of current members of the Commons or Lords",
					"description": "Returns a list of current members of the Commons or Lords",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/Search"
						}
					}
				},
				{
					"name": "GET Api Members Search Historical",
					"value": "GET Api Members Search Historical",
					"action": "Returns a list of members of the Commons or Lords",
					"description": "Returns a list of members of the Commons or Lords",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/SearchHistorical"
						}
					}
				},
				{
					"name": "GET Api Members",
					"value": "GET Api Members",
					"action": "Return member by ID",
					"description": "Return member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Api Members Biography",
					"value": "GET Api Members Biography",
					"action": "Return biography of member by ID",
					"description": "Return biography of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Biography"
						}
					}
				},
				{
					"name": "GET Api Members Contact",
					"value": "GET Api Members Contact",
					"action": "Return list of contact details of member by ID",
					"description": "Return list of contact details of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Contact"
						}
					}
				},
				{
					"name": "GET Api Members Contribution Summary",
					"value": "GET Api Members Contribution Summary",
					"action": "Return contribution summary of member by ID",
					"description": "Return contribution summary of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/ContributionSummary"
						}
					}
				},
				{
					"name": "GET Api Members Edms",
					"value": "GET Api Members Edms",
					"action": "Return list of early day motions of member by ID",
					"description": "Return list of early day motions of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Edms"
						}
					}
				},
				{
					"name": "GET Api Members Experience",
					"value": "GET Api Members Experience",
					"action": "Return experience of member by ID",
					"description": "Return experience of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Experience"
						}
					}
				},
				{
					"name": "GET Api Members Focus",
					"value": "GET Api Members Focus",
					"action": "Return list of areas of focus of member by ID",
					"description": "Return list of areas of focus of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Focus"
						}
					}
				},
				{
					"name": "GET Api Members Latest Election Result",
					"value": "GET Api Members Latest Election Result",
					"action": "Return latest election result of member by ID",
					"description": "Return latest election result of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/LatestElectionResult"
						}
					}
				},
				{
					"name": "GET Api Members Portrait",
					"value": "GET Api Members Portrait",
					"action": "Return portrait of member by ID",
					"description": "Return portrait of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Portrait"
						}
					}
				},
				{
					"name": "GET Api Members Portrait Url",
					"value": "GET Api Members Portrait Url",
					"action": "Return portrait url of member by ID",
					"description": "Return portrait url of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/PortraitUrl"
						}
					}
				},
				{
					"name": "GET Api Members Registered Interests",
					"value": "GET Api Members Registered Interests",
					"action": "Return list of registered interests of member by ID",
					"description": "Return list of registered interests of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/RegisteredInterests"
						}
					}
				},
				{
					"name": "GET Api Members Staff",
					"value": "GET Api Members Staff",
					"action": "Return list of staff of member by ID",
					"description": "Return list of staff of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Staff"
						}
					}
				},
				{
					"name": "GET Api Members Synopsis",
					"value": "GET Api Members Synopsis",
					"action": "Return synopsis of member by ID",
					"description": "Return synopsis of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Synopsis"
						}
					}
				},
				{
					"name": "GET Api Members Thumbnail",
					"value": "GET Api Members Thumbnail",
					"action": "Return thumbnail of member by ID",
					"description": "Return thumbnail of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Thumbnail"
						}
					}
				},
				{
					"name": "GET Api Members Thumbnail Url",
					"value": "GET Api Members Thumbnail Url",
					"action": "Return thumbnail url of member by ID",
					"description": "Return thumbnail url of member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/ThumbnailUrl"
						}
					}
				},
				{
					"name": "GET Api Members Voting",
					"value": "GET Api Members Voting",
					"action": "Return list of votes by member by ID",
					"description": "Return list of votes by member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/Voting"
						}
					}
				},
				{
					"name": "GET Api Members Written Questions",
					"value": "GET Api Members Written Questions",
					"action": "Return list of written questions by member by ID",
					"description": "Return list of written questions by member by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/Members/{{$parameter[\"id\"]}}/WrittenQuestions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/Members/History",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members History"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"description": "List of MemberIds to find",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members History"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/Search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Members where name contains term specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"description": "Members where postcode or geographical location matches the term specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Post Title",
			"name": "PostTitle",
			"description": "Members which have held the post specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "PostTitle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Party Id",
			"name": "PartyId",
			"description": "Members which are currently affiliated with party with party ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "PartyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "House",
			"description": "Members where their most recent house is the house specified",
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
			"routing": {
				"send": {
					"type": "query",
					"property": "House",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Constituency Id",
			"name": "ConstituencyId",
			"description": "Members which currently hold the constituency with constituency id",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "ConstituencyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Name Starts With",
			"name": "NameStartsWith",
			"description": "Members with surname begining with letter(s) specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NameStartsWith",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "Gender",
			"description": "Members with the gender specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Gender",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Membership Started Since",
			"name": "MembershipStartedSince",
			"description": "Members who started on or after the date given",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MembershipStartedSince",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Membership Ended Membership Ended Since",
			"name": "MembershipEnded-MembershipEndedSince",
			"description": "Members who left the House on or after the date given",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MembershipEnded.MembershipEndedSince",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Membership Ended Membership End Reason Ids",
			"name": "MembershipEnded-MembershipEndReasonIds",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "MembershipEnded.MembershipEndReasonIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Membership In Date Range Was Member On Or After",
			"name": "MembershipInDateRange-WasMemberOnOrAfter",
			"description": "Members who were active on or after the date specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MembershipInDateRange.WasMemberOnOrAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Membership In Date Range Was Member On Or Before",
			"name": "MembershipInDateRange-WasMemberOnOrBefore",
			"description": "Members who were active on or before the date specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MembershipInDateRange.WasMemberOnOrBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Membership In Date Range Was Member Of House",
			"name": "MembershipInDateRange-WasMemberOfHouse",
			"description": "Members who were active in the house specifid",
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
			"routing": {
				"send": {
					"type": "query",
					"property": "MembershipInDateRange.WasMemberOfHouse",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Is Eligible",
			"name": "IsEligible",
			"description": "Members currently Eligible to sit in their House",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "IsEligible",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Is Current Member",
			"name": "IsCurrentMember",
			"description": "Members who are current or former members",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "IsCurrentMember",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Policy Interest Id",
			"name": "PolicyInterestId",
			"description": "Members with specified policy interest",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "PolicyInterestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "Experience",
			"name": "Experience",
			"description": "Members with specified experience",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Experience",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search"
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
						"Members"
					],
					"operation": [
						"GET Api Members Search"
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
						"Members"
					],
					"operation": [
						"GET Api Members Search"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/SearchHistorical",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search Historical"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Members with names containing the term specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search Historical"
					]
				}
			}
		},
		{
			"displayName": "Date To Search For",
			"name": "dateToSearchFor",
			"description": "Members that were an active member of the Commons or Lords on the date specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dateToSearchFor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Search Historical"
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
						"Members"
					],
					"operation": [
						"GET Api Members Search Historical"
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
						"Members"
					],
					"operation": [
						"GET Api Members Search Historical"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members"
					]
				}
			}
		},
		{
			"displayName": "Details For Date",
			"name": "detailsForDate",
			"description": "Member object will be populated with details from the date specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "detailsForDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Biography",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Biography"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Biography of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Biography"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Contact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Contact"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Contact details of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Contact"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/ContributionSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Contribution Summary"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Contribution summary of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Contribution Summary"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
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
						"Members"
					],
					"operation": [
						"GET Api Members Contribution Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Edms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Edms"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Early day motions of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Edms"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
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
						"Members"
					],
					"operation": [
						"GET Api Members Edms"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Experience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Experience"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Experience of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Experience"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Focus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Focus"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Areas of focus of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Focus"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/LatestElectionResult",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Latest Election Result"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Latest election result of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Latest Election Result"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Portrait",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Portrait"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Portrait of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Portrait"
					]
				}
			}
		},
		{
			"displayName": "Crop Type",
			"name": "cropType",
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
			"routing": {
				"send": {
					"type": "query",
					"property": "cropType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Portrait"
					]
				}
			}
		},
		{
			"displayName": "Web Version",
			"name": "webVersion",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "webVersion",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Portrait"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/PortraitUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Portrait Url"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Portrait url of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Portrait Url"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/RegisteredInterests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Registered Interests"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Registered interests of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Registered Interests"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "house",
			"description": "Registered interests of Member by House specified",
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
			"routing": {
				"send": {
					"type": "query",
					"property": "house",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Registered Interests"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Staff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Staff"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Staff of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Staff"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Synopsis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Synopsis"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Synopsis of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Synopsis"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Thumbnail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Thumbnail"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Thumbnail of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Thumbnail"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/ThumbnailUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Thumbnail Url"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Thumbnail url of Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Thumbnail Url"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/Voting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Voting"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Votes by Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Voting"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "house",
			"required": true,
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
			"routing": {
				"send": {
					"type": "query",
					"property": "house",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Voting"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
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
						"Members"
					],
					"operation": [
						"GET Api Members Voting"
					]
				}
			}
		},
		{
			"displayName": "GET /api/Members/{id}/WrittenQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Written Questions"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Written questions by Member by ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Members"
					],
					"operation": [
						"GET Api Members Written Questions"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
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
						"Members"
					],
					"operation": [
						"GET Api Members Written Questions"
					]
				}
			}
		},
];
