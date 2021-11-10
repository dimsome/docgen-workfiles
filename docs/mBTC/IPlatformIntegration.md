# Functions

## deposit()
`function deposit (address _bAsset, uint256 _amount) external returns (uint256 quantityDeposited)`

Deposit the given bAsset to Lending platform
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAsset` | address | bAsset address |
| `_amount` | uint256 | Amount to deposit |

## withdraw()
`function withdraw () external`

Withdraw given bAsset from Lending platform

## withdraw()
`function withdraw () external`

Withdraw given bAsset from Lending platform

## withdrawRaw()
`function withdrawRaw () external`

Withdraw given bAsset from the cache

## checkBalance()
`function checkBalance () external returns (uint256 balance)`

Returns the current balance of the given bAsset

## bAssetToPToken()
`function bAssetToPToken () external returns (address pToken)`

Returns the pToken

