var contractAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nomeDoador",
				"type": "string"
			}
		],
		"name": "doe",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"doacao": true,
		"stateMutability": "doacao",
		"type": "function"
	},
	{
		"inputs": [],
		"doacao": false,
		"stateMutability": "nondoacao",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "arrecadarfundos",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"doacao": false,
		"stateMutability": "nondoacao",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ong",
		"outputs": [
			{
				"internalType": "address doacao",
				"name": "",
				"type": "address"
			}
		],
		"doacao": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalarrecadado",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"doacao": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nomeDoador",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"doacao": false,
		"stateMutability": "view",
		"type": "function"
	}
];
