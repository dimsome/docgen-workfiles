# Functions

## constructor()
`function constructor () public`



## balanceOfUnderlying()
`function balanceOfUnderlying (address _user) external returns (uint256 balance)`

Returns the underlying balance of a given user
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_user` | address | Address of the user to check |

## underlyingToCredits()
`function underlyingToCredits (uint256 _underlying) external returns (uint256 credits)`

Converts a given underlying amount into credits
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_underlying` | uint256 | Units of underlying |

## creditsToUnderlying()
`function creditsToUnderlying (uint256 _credits) external returns (uint256 amount)`

Converts a given credit amount into underlying
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_credits` | uint256 | Units of credits |

## creditBalances()
`function creditBalances () external returns (uint256)`



## preDeposit()
`function preDeposit (uint256 _underlying, address _beneficiary) external returns (uint256 creditsIssued)`

During a migration period, allow savers to deposit underlying here before the interest has been redirected
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_underlying` | uint256 | Units of underlying to deposit into savings vault |
| `_beneficiary` | address | Immediately transfer the imUSD token to this beneficiary address |

## depositSavings()
`function depositSavings (uint256 _underlying) external returns (uint256 creditsIssued)`

Deposit the senders savings to the vault, and credit them internally with "credits".
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_underlying` | uint256 | Units of underlying to deposit into savings vault |

## depositSavings()
`function depositSavings (uint256 _underlying, address _beneficiary) external returns (uint256 creditsIssued)`

Deposit the senders savings to the vault, and credit them internally with "credits".
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_underlying` | uint256 | Units of underlying to deposit into savings vault |
| `_beneficiary` | address | Immediately transfer the imUSD token to this beneficiary address |

## redeem()
`function redeem () external returns (uint256 massetReturned)`



## redeemCredits()
`function redeemCredits (uint256 _credits) external returns (uint256 massetReturned)`

Redeem specific number of the senders "credits" in exchange for underlying.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_credits` | uint256 | Amount of credits to redeem |

## redeemUnderlying()
`function redeemUnderlying (uint256 _underlying) external returns (uint256 creditsBurned)`

Redeem credits into a specific amount of underlying.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_underlying` | uint256 | Amount of underlying to redeem |

## poke()
`function poke () external`

External poke function allows for the redistribution of collateral between here and the
