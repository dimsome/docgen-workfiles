# Functions

## claimReward()
`function claimReward () public`

Claims outstanding rewards for the sender.First updates outstanding reward allocation and then transfers.

## claimReward()
`function claimReward () public`

Claims outstanding rewards for the sender.First updates outstanding reward allocation and then transfers.

## getRewardToken()
`function getRewardToken () external returns (contract IERC20)`

Gets the RewardsToken

## lastTimeRewardApplicable()
`function lastTimeRewardApplicable () public returns (uint256)`

Gets the last applicable timestamp for this reward period

## rewardPerToken()
`function rewardPerToken () public returns (uint256)`

Calculates the amount of unclaimed rewards per token since last update,and sums with stored to give the new cumulative reward per token

## earned()
`function earned (address _account) public returns (uint256)`

Calculates the amount of unclaimed rewards a user has earned
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User address |

## balanceOf()
`function balanceOf () public returns (uint256)`



## totalSupply()
`function totalSupply () public returns (uint256)`



## notifyRewardAmount()
`function notifyRewardAmount (uint256 _reward) external`

Notifies the contract that new rewards have been added.Calculates an updated rewardRate based on the rewards in period.
### modifiers
- onlyRewardsDistributor
- updateReward
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_reward` | uint256 | Units of RewardToken that have been added to the pool |

