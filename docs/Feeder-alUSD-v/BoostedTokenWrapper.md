# Functions

## constructor()
`function constructor (address _stakingToken, address _boostDirector, uint256 _priceCoeff, uint256 _boostCoeff) public`

TokenWrapper constructor
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_stakingToken` | address | Wrapped token to be staked |
| `_boostDirector` | address | vMTA boost director |
| `_priceCoeff` | uint256 | Rough price of a given LP token, to be used in boost calculations, where $1 = 1e18 |
| `_boostCoeff` | uint256 | Boost coefficent using the the boost formula |

## name()
`function name () public returns (string)`



## symbol()
`function symbol () public returns (string)`



## decimals()
`function decimals () public returns (uint8)`



## totalSupply()
`function totalSupply () public returns (uint256)`

Get the total boosted amount

## balanceOf()
`function balanceOf (address _account) public returns (uint256)`

Get the boosted balance of a given account
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User for which to retrieve balance |

## rawBalanceOf()
`function rawBalanceOf (address _account) public returns (uint256)`

Get the RAW balance of a given account
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User for which to retrieve balance |

## getBoost()
`function getBoost (address _account) public returns (uint256)`

Read the boost for the given address
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_account` | address | User for which to return the boost |

