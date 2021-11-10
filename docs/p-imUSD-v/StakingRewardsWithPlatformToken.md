# Functions

## constructor()
`function constructor (address _nexus, address _stakingToken, address _rewardsToken, address _platformToken) public`


| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_nexus` | address | mStable system Nexus address |
| `_stakingToken` | address | token that is beinf rewarded for being staked. eg MTA, imUSD or fPmUSD/GUSD |
| `_rewardsToken` | address | first token that is being distributed as a reward. eg MTA |
| `_platformToken` | address | second token that is being distributed as a reward. eg wMATIC on Polygon |

## stake()
`function stake (uint256 _amount) external`

Stakes a given amount of the StakingToken for the sender
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of StakingToken |

## stake()
`function stake (address _beneficiary, uint256 _amount) external`

Stakes a given amount of the StakingToken for a given beneficiary
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_beneficiary` | address | Staked tokens are credited to this address |
| `_amount` | uint256 | Units of StakingToken |

## exit()
`function exit () external`

Withdraws stake from pool and claims any rewards

## withdraw()
`function withdraw (uint256 _amount) public`

Withdraws given stake amount from the pool
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of the staked token to withdraw |

## claimReward()
`function claimReward () public`

Claims outstanding rewards (both platform and native) for the sender.First updates outstanding reward allocation and then transfers.

## claimRewardOnly()
`function claimRewardOnly () public`

Claims outstanding rewards for the sender. Only the nativerewards token, and not the platform rewards

## getRewardToken()
`function getRewardToken () external returns (contract IERC20)`

Gets the RewardsToken

## getPlatformToken()
`function getPlatformToken () external returns (contract IERC20)`

Gets the PlatformToken

## lastTimeRewardApplicable()
`function lastTimeRewardApplicable () public returns (uint256)`

Gets the last applicable timestamp for this reward period

## rewardPerToken()
`function rewardPerToken () public returns (uint256, uint256)`

Calculates the amount of unclaimed rewards a user has earned

## earned()
`function earned (address _account) public returns (uint256, uint256)`

Calculates the amount of unclaimed rewards a user has earned
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User address |

## notifyRewardAmount()
`function notifyRewardAmount (uint256 _reward) external`

Notifies the contract that new rewards have been added.Calculates an updated rewardRate based on the rewards in period.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_reward` | uint256 | Units of RewardToken that have been added to the pool |

