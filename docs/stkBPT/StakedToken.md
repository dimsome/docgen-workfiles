# Functions

## constructor()
`function constructor (address _nexus, address _rewardsToken, address _questManager, address _stakedToken, uint256 _cooldownSeconds, uint256 _unstakeWindow, bool _hasPriceCoeff) public`


### modifiers
- GamifiedVotingToken
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_nexus` | address | System nexus |
| `_rewardsToken` | address | Token that is being distributed as a reward. eg MTA |
| `_questManager` | address | Centralised manager of quests |
| `_stakedToken` | address | Core token that is staked and tracked (e.g. MTA) |
| `_cooldownSeconds` | uint256 | Seconds a user must wait after she initiates her cooldown before withdrawal is possible |
| `_unstakeWindow` | uint256 | Window in which it is possible to withdraw, following the cooldown period |
| `_hasPriceCoeff` | bool | true if raw staked amount is multiplied by price coeff to get staked amount. eg BPT Staked Token |

## stake()
`function stake (uint256 _amount) external`

Stake an `_amount` of STAKED_TOKEN in the system. This amount is added to the users stake andboosts their voting power.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of STAKED_TOKEN to stake |

## stake()
`function stake (uint256 _amount, bool _exitCooldown) external`

Stake an `_amount` of STAKED_TOKEN in the system. This amount is added to the users stake andboosts their voting power.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of STAKED_TOKEN to stake |
| `_exitCooldown` | bool | Bool signalling whether to take this opportunity to end any outstanding cooldown andreturn the user back to their full voting power |

## stake()
`function stake (uint256 _amount, address _delegatee) external`

Stake an `_amount` of STAKED_TOKEN in the system. This amount is added to the users stake andboosts their voting power. Take the opportunity to change delegatee.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of STAKED_TOKEN to stake |
| `_delegatee` | address | Address of the user to whom the sender would like to delegate their voting power |

## withdraw()
`function withdraw (uint256 _amount, address _recipient, bool _amountIncludesFee, bool _exitCooldown) external`

Withdraw raw tokens from the system, following an elapsed cooldown period.Note - May be subject to a transfer fee, depending on the users weightedTimestamp
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of raw token to withdraw |
| `_recipient` | address | Address of beneficiary who will receive the raw tokens |
| `_amountIncludesFee` | bool | Is the `_amount` specified inclusive of any applicable redemption fee? |
| `_exitCooldown` | bool | Should we take this opportunity to exit the cooldown period? |

## startCooldown()
`function startCooldown (uint256 _units) external`

Enters a cooldown period, after which (and before the unstake window elapses) a user will be ableto withdraw part or all of their staked tokens. Note, during this period, a users voting power is significantly reduced.If a user already has a cooldown period, then it will reset to the current block timestamp, so use wisely.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_units` | uint256 | Units of stake to cooldown for |

## endCooldown()
`function endCooldown () external`

Ends the cooldown of the sender and give them back their full voting power. This can be used to signal thatthe user no longer wishes to exit the system. Note, the cooldown can also be reset, more smoothly, as part of a stake orwithdraw transaction.

## emergencyRecollateralisation()
`function emergencyRecollateralisation () external`

This is a write function allowing the whitelisted recollateralisation module to slash stakers here and takethe capital to use to recollateralise any lost value in the system. Trusting that the recollateralisation module hassufficient protections put in place. Note, once this has been executed, the contract is now finished, and undercollateralised,meaning that all users must withdraw, and will only receive a proportionate amount back relative to the colRatio.
### modifiers
- onlyRecollateralisationModule
- onlyBeforeRecollateralisation

## createLock()
`function createLock (uint256 _value) external`

Allows for backwards compatibility with createLock fn, giving basic args to stake
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_value` | uint256 | Units to stake |

## increaseLockAmount()
`function increaseLockAmount (uint256 _value) external`

Allows for backwards compatibility with increaseLockAmount fn by simply staking more
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_value` | uint256 | Units to stake |

## exit()
`function exit () external`

Backwards compatibility. Previously a lock would run out and a user would call this. Now, it will take 2 callsto exit in order to leave. The first will initiate the cooldown period, and the second will execute a full withdrawal.

## calcRedemptionFeeRate()
`function calcRedemptionFeeRate (uint32 _weightedTimestamp) public returns (uint256 _feeRate)`

fee = sqrt(300/x)-2.5, where x = weeks since user has staked
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_weightedTimestamp` | uint32 | The users weightedTimestamp |

