# Functions

## constructor()
`function constructor (address _nexus, address _rewardsToken, address _stakedToken, address _cooldownSeconds, uint256 _unstakeWindow, uint256 _bal, address[2] _poolId) public`


### modifiers
- StakedToken
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_nexus` | address | System nexus |
| `_rewardsToken` | address | Token that is being distributed as a reward. eg MTA |
| `_stakedToken` | address | Core token that is staked and tracked (e.g. MTA) |
| `_cooldownSeconds` | address | Seconds a user must wait after she initiates her cooldown before withdrawal is possible |
| `_unstakeWindow` | uint256 | Window in which it is possible to withdraw, following the cooldown period |
| `_bal` | uint256 | Balancer addresses, [0] = $BAL addr, [1] = BAL vault |
| `_poolId` | address[2] | Balancer Pool identifier |

## claimBal()
`function claimBal () external`

Claims any $BAL tokens present on this address as part of any potential liquidity mining program

## convertFees()
`function convertFees () external`

Converts fees accrued in BPT into MTA, before depositing to the rewards contract
### modifiers
- nonReentrant

## fetchPriceCoefficient()
`function fetchPriceCoefficient () external`

Allows the governor or keeper to update the price coeff
### modifiers
- governorOrKeeper

## getProspectivePriceCoefficient()
`function getProspectivePriceCoefficient () public returns (uint256 newPriceCoeff)`

Fetches most recent priceCoeff from the balancer pool.PriceCoeff = units of MTA per BPT, scaled to 1:1 = 10000Assuming an 80/20 BPT, it is possible to calculatePriceCoeff (p) = balanceOfMTA in pool (b) / bpt supply (s) / 0.8p = b * 1.25 / s

