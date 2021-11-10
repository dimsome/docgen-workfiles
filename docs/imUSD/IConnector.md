# Functions

## deposit()
`function deposit (uint256 _amount) external`

Deposits the mAsset into the connector
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of mAsset to receive and deposit |

## withdraw()
`function withdraw (uint256 _amount) external`

Withdraws a specific amount of mAsset from the connector
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_amount` | uint256 | Units of mAsset to withdraw |

## withdrawAll()
`function withdrawAll () external`

Withdraws all mAsset from the connector

## checkBalance()
`function checkBalance () external returns (uint256)`

Returns the available balance in the connector. In connectionswhere there is likely to be an initial dip in value due to conservativeexchange rates (e.g. with Curves `get_virtual_price`), it should returnmax(deposited, balance) to avoid temporary negative yield. Any negative yieldshould be corrected during a withdrawal or over time.

