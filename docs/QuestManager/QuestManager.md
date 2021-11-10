# Functions

## constructor()
`function constructor (address _nexus) public`


### modifiers
- ImmutableModule
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_nexus` | address | System nexus |

## getQuest()
`function getQuest () external returns (struct Quest)`

Gets raw quest data

## hasCompleted()
`function hasCompleted (address _account, uint256 _id) public returns (bool)`

Simply checks if a given user has already completed a given quest
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User address |
| `_id` | uint256 | Position of quest in array |

## balanceData()
`function balanceData () external returns (struct QuestBalance)`

Raw quest balance

## completeUserQuests()
`function completeUserQuests (address _account, uint256[] _ids, bytes _signature) external`

Called by anyone to complete one or more quests for a staker. The user must first collect a signed messagefrom the whitelisted _signer.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | Account that has completed the quest |
| `_ids` | uint256[] | Quest IDs (its position in the array) |
| `_signature` | bytes | Signature from the verified _questSigner, containing keccak hash of account & ids |

## completeQuestUsers()
`function completeQuestUsers (uint256 _questId, address[] _accounts, bytes _signature) external`

Called by anyone to complete one or more accounts for a quest. The user must first collect a signed messagefrom the whitelisted _questMaster.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_questId` | uint256 | Quest ID (its position in the array) |
| `_accounts` | address[] | Accounts that has completed the quest |
| `_signature` | bytes | Signature from the verified _questMaster, containing keccak hash of id and accounts |

## checkForSeasonFinish()
`function checkForSeasonFinish (address _account) public returns (uint8 newQuestMultiplier)`

Checks if the season has just finished between now and the users last action.If it has, we reset the seasonMultiplier. Either way, we update the lastAction for the user.NOTE - it is important that this is called as a hook before each state change operation
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | Address of user that should be updated |

