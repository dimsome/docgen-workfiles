# Functions

## constructor()
`function constructor (address _nexus, address _rewardsToken, address _stakedToken, address _cooldownSeconds, uint256 _unstakeWindow) public`


### modifiers
- StakedToken
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_nexus` | address | System nexus |
| `_rewardsToken` | address | Token that is being distributed as a reward. eg MTA |
| `_stakedToken` | address | Core token that is staked and tracked (e.g. MTA) |
| `_cooldownSeconds` | address | Seconds a user must wait after she initiates her cooldown before withdrawal is possible |
| `_unstakeWindow` | uint256 | Window in which it is possible to withdraw, following the cooldown period |

## compoundRewards()
`function compoundRewards () external`

Allows a staker to compound their rewards IF the Staking token and the Rewards token are the samefor example, with $MTA as both staking token and rewards token. Calls 'claimRewards' on the HeadlessStakingRewardsbefore executing a stake here
### modifiers
- nonReentrant

