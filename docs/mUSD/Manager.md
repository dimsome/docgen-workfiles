# Functions

## addBasset()
`function addBasset (struct MassetStructs.BassetPersonal[] _bAssetPersonal, struct MassetStructs.BassetData[] _bAssetData, mapping(address => uint8) _bAssetIndexes, uint8 _maxBassets, address _bAsset, address _integration, uint256 _mm, bool _hasTxFee) external`

Adds a bAsset to the given personal, data and mapping, provided it is valid
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct MassetStructs.BassetPersonal[] | Basset data storage array |
| `_bAssetData` | struct MassetStructs.BassetData[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_maxBassets` | uint8 | Max size of the basket |
| `_bAsset` | address | Address of the ERC20 token to add to the Basket |
| `_integration` | address | Address of the Platform Integration |
| `_mm` | uint256 | Base 1e8 var to determine measurement ratio |
| `_hasTxFee` | bool | Are transfer fees charged on this bAsset (e.g. USDT) |

## collectPlatformInterest()
`function collectPlatformInterest (struct MassetStructs.BassetPersonal[] _bAssetPersonal, struct MassetStructs.BassetData[] _bAssetData, contract IInvariantValidator _forgeValidator) external returns (uint256 mintAmount, uint256[] rawGains)`

Collects the interest generated from the Basket, minting a relative amount of mAsset and sending it over to the SavingsManager.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct MassetStructs.BassetPersonal[] | Basset personal storage array |
| `_bAssetData` | struct MassetStructs.BassetData[] | Basset data storage array |
| `_forgeValidator` | contract IInvariantValidator | Link to the current InvariantValidator |

## setTransferFeesFlag()
`function setTransferFeesFlag (struct MassetStructs.BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAssetIndexes, address _bAsset, bool _flag) external`

Update transfer fee flag for a given bAsset, should it change its fee practice
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct MassetStructs.BassetPersonal[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_bAsset` | address | bAsset address |
| `_flag` | bool | Charge transfer fee when its set to 'true', otherwise 'false' |

## migrateBassets()
`function migrateBassets (struct MassetStructs.BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAssetIndexes, address[] _bAssets, address _newIntegration) external`

Transfers all collateral from one lending market to another - used initially to handle the migration between Aave V1 and Aave V2. Note - only supports non tx fee enabled assets. Supports going from no integration to integration, but not the other way around.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct MassetStructs.BassetPersonal[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_bAssets` | address[] | Array of basket assets to migrate |
| `_newIntegration` | address | Address of the new platform integration |

## handlePegLoss()
`function handlePegLoss (struct MassetStructs.BasketState _basket, struct MassetStructs.BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAsset, address _belowPeg) external`

Executes the Auto Redistribution event by isolating the bAsset from the Basket
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_basket` | struct MassetStructs.BasketState | Struct containing core basket info |
| `_bAssetPersonal` | struct MassetStructs.BassetPersonal[] | Basset data storage array |
| `_bAsset` | mapping(address => uint8) | Address of the ERC20 token to isolate |
| `_belowPeg` | address | Bool to describe whether the bAsset deviated below peg (t)or above (f) |

## negateIsolation()
`function negateIsolation (struct MassetStructs.BasketState _basket, struct MassetStructs.BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAssetIndexes, address _bAsset) external`

Negates the isolation of a given bAsset
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_basket` | struct MassetStructs.BasketState | Struct containing core basket info |
| `_bAssetPersonal` | struct MassetStructs.BassetPersonal[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_bAsset` | address | Address of the bAsset |

## startRampA()
`function startRampA (struct MassetStructs.AmpData _targetA, uint256 _rampEndTime) external`

Starts changing of the amplification var A
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_targetA` | struct MassetStructs.AmpData | Target A value |
| `_rampEndTime` | uint256 | Time at which A will arrive at _targetA |

## stopRampA()
`function stopRampA () external`

Stops the changing of the amplification var A, settingit to whatever the current value is.

## depositTokens()
`function depositTokens () external returns (uint256 quantityDeposited)`

Deposits a given asset to the system. If there is sufficient room for the assetin the cache, then just transfer, otherwise reset the cache to the desired mid level bydepositing the delta in the platform

## withdrawTokens()
`function withdrawTokens () external`

Withdraws a given asset from its platformIntegration. If there is sufficient liquidityin the cache, then withdraw from there, otherwise withdraw from the lending market and reset thecache to the mid level.

