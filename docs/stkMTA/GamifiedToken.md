# Functions

## name()
`function name () public returns (string)`



## symbol()
`function symbol () public returns (string)`



## totalSupply()
`function totalSupply () public returns (uint256)`

Total sum of all scaled balancesIn this instance, leave to the child token.

## balanceOf()
`function balanceOf () public returns (uint256)`

Simply gets scaled balance

## rawBalanceOf()
`function rawBalanceOf () public returns (uint256, uint256)`

Simply gets raw balance

## balanceData()
`function balanceData () external returns (struct Balance)`

Raw staked balance without any multipliers

## userPriceCoeff()
`function userPriceCoeff () external returns (uint256)`

Raw staked balance without any multipliers

## reviewTimestamp()
`function reviewTimestamp () external`

Called by anyone to poke the timestamp of a given account. This allows users toeffectively 'claim' any new timeMultiplier, but will revert if there is no change there.

## applyQuestMultiplier()
`function applyQuestMultiplier (address _account, uint8 _newMultiplier) external`

Adds the multiplier awarded from quest completion to a users data, taking the opportunityto check time multipliers etc.
### modifiers
- onlyQuestManager
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | Address of user that should be updated |
| `_newMultiplier` | uint8 | New Quest Multiplier |

