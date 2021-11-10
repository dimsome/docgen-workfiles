# Functions

## constructor()
`function constructor () public`



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

Withdraws stake from pool and claims any unlocked rewards.Note, this function is costly - the args for _claimRewardsshould be determined off chain and then passed to other fn

## exit()
`function exit (uint256 _first, uint256 _last) external`

Withdraws stake from pool and claims any unlocked rewards.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_first` | uint256 | Index of the first array element to claim |
| `_last` | uint256 | Index of the last array element to claim |

## withdraw()
`function withdraw (uint256 _amount) external`

Withdraws given stake amount from the pool
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of the staked token to withdraw |

## claimReward()
`function claimReward () external`

Claims only the tokens that have been immediately unlocked, not includingthose that are in the lockers.

## claimRewards()
`function claimRewards () external`

Claims all unlocked rewards for sender.Note, this function is costly - the args for _claimRewardsshould be determined off chain and then passed to other fn

## claimRewards()
`function claimRewards (uint256 _first, uint256 _last) external`

Claims all unlocked rewards for sender. Both immediately unlockedrewards and also locked rewards past their time lock.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_first` | uint256 | Index of the first array element to claim |
| `_last` | uint256 | Index of the last array element to claim |

## pokeBoost()
`function pokeBoost () external`

Pokes a given account to reset the boost

## getRewardToken()
`function getRewardToken () external returns (contract IERC20)`

Gets the RewardsToken

## lastTimeRewardApplicable()
`function lastTimeRewardApplicable () public returns (uint256)`

Gets the last applicable timestamp for this reward period

## rewardPerToken()
`function rewardPerToken () public returns (uint256)`

Calculates the amount of unclaimed rewards per token since last update,and sums with stored to give the new cumulative reward per token

## earned()
`function earned (address _account) public returns (uint256)`

Returned the units of IMMEDIATELY claimable rewards a user has to receive. Note - thisdoes NOT include the majority of rewards which will be locked up.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User address |

## unclaimedRewards()
`function unclaimedRewards (address _account) external returns (uint256 amount, uint256 first, uint256 last)`

Calculates all unclaimed reward data, finding both immediately unlocked rewardsand those that have passed their time lock.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User address |

## notifyRewardAmount()
`function notifyRewardAmount (uint256 _reward) external`

Notifies the contract that new rewards have been added.Calculates an updated rewardRate based on the rewards in period.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_reward` | uint256 | Units of RewardToken that have been added to the pool |

