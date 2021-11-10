# Functions

## saveAndStake()
`function saveAndStake (address _mAsset, address _save, address _vault, uint256 _amount) external`

0. Simply saves an mAsset and then into the vault
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_mAsset` | address | mAsset address |
| `_save` | address | Save address |
| `_vault` | address | Boosted Savings Vault address |
| `_amount` | uint256 | Units of mAsset to deposit to savings |

## saveViaMint()
`function saveViaMint (address _mAsset, address _bAsset, address _save, address _vault, uint256 _amount, uint256 _minOut, bool _stake) external`

1. Mints an mAsset and then deposits to Save/Savings Vault
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_mAsset` | address | mAsset address |
| `_bAsset` | address | bAsset address |
| `_save` | address | Save address |
| `_vault` | address | Boosted Savings Vault address |
| `_amount` | uint256 | Amount of bAsset to mint with |
| `_minOut` | uint256 | Min amount of mAsset to get back |
| `_stake` | bool | Add the imAsset to the Boosted Savings Vault? |

## saveViaSwap()
`function saveViaSwap (address _mAsset, address _save, address _vault, address _feeder, address _fAsset, uint256 _fAssetQuantity, uint256 _minOutputQuantity, bool _stake) external`

2. Swaps fAsset for mAsset and then deposits to Save/Savings Vault
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_mAsset` | address | mAsset address |
| `_save` | address | Save address |
| `_vault` | address | Boosted Savings Vault address |
| `_feeder` | address | Feeder Pool address |
| `_fAsset` | address | fAsset address |
| `_fAssetQuantity` | uint256 | Quantity of fAsset sent |
| `_minOutputQuantity` | uint256 | Min amount of mAsset to be swapped and deposited |
| `_stake` | bool | Deposit the imAsset in the Savings Vault? |

## saveViaUniswapETH()
`function saveViaUniswapETH (address _mAsset, address _save, address _vault, address _uniswap, uint256 _amountOutMin, address[] _path, uint256 _minOutMStable, bool _stake) external`

3. Buys a bAsset on Uniswap with ETH, then mints imAsset via mAsset,optionally staking in the Boosted Savings Vault
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_mAsset` | address | mAsset address |
| `_save` | address | Save address |
| `_vault` | address | Boosted vault address |
| `_uniswap` | address | Uniswap router address |
| `_amountOutMin` | uint256 | Min uniswap output in bAsset units |
| `_path` | address[] | Sell path on Uniswap (e.g. [WETH, DAI]) |
| `_minOutMStable` | uint256 | Min amount of mAsset to receive |
| `_stake` | bool | Add the imAsset to the Savings Vault? |

## estimate_saveViaUniswapETH()
`function estimate_saveViaUniswapETH (address _mAsset, address _uniswap, uint256 _ethAmount, address[] _path) external returns (uint256 out)`

Gets estimated mAsset output from a WETH > bAsset > mAsset trade
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_mAsset` | address | mAsset address |
| `_uniswap` | address | Uniswap router address |
| `_ethAmount` | uint256 | ETH amount to sell |
| `_path` | address[] | Sell path on Uniswap (e.g. [WETH, DAI]) |

