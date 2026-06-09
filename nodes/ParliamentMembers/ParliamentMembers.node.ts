import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { locationDescription } from './resources/location';
import { lordsInterestsDescription } from './resources/lords-interests';
import { membersDescription } from './resources/members';
import { partiesDescription } from './resources/parties';
import { postsDescription } from './resources/posts';
import { referenceDescription } from './resources/reference';

export class ParliamentMembers implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Parliament Members',
		name: 'N8nDevParliamentMembers',
		icon: { light: 'file:./parliament-members.svg', dark: 'file:./parliament-members.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API which retrieves Members data.',
		defaults: { name: 'Parliament Members' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevParliamentMembersApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Location",
					"value": "Location",
					"description": ""
				},
				{
					"name": "Lords Interests",
					"value": "Lords Interests",
					"description": ""
				},
				{
					"name": "Members",
					"value": "Members",
					"description": ""
				},
				{
					"name": "Parties",
					"value": "Parties",
					"description": ""
				},
				{
					"name": "Posts",
					"value": "Posts",
					"description": ""
				},
				{
					"name": "Reference",
					"value": "Reference",
					"description": ""
				}
			],
			"default": ""
		},
		...locationDescription,
		...lordsInterestsDescription,
		...membersDescription,
		...partiesDescription,
		...postsDescription,
		...referenceDescription
		],
	};
}
