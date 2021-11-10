# Functions

## addBasset()
`function addBasset (struct BassetPersonal[] _bAssetPersonal, struct BassetData[] _bAssetData, mapping(address => uint8) _bAssetIndexes, address _bAsset, address _integration, uint256 _mm, bool _hasTxFee) external`

Adds a bAsset to the given personal, data and mapping, provided it is valid
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct BassetPersonal[] | Basset data storage array |
| `_bAssetData` | struct BassetData[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_bAsset` | address | Address of the ERC20 token to add to the Basket |
| `_integration` | address | Address of the Platform Integration |
| `_mm` | uint256 | Base 1e8 var to determine measurement ratio |
| `_hasTxFee` | bool | Are transfer fees charged on this bAsset (e.g. USDT) |

## collectPlatformInterest()
`function collectPlatformInterest (struct BassetPersonal[] _bAssetPersonal, struct BassetData[] _bAssetData) external returns (uint8[] indices, uint256[] rawGains)`

Collects the interest generated from the Basket, minting a relative amount of mAsset and sending it over to the SavingsManager.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct BassetPersonal[] | Basset personal storage array |
| `_bAssetData` | struct BassetData[] | Basset data storage array |

## setTransferFeesFlag()
`function setTransferFeesFlag (struct BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAssetIndexes, address _bAsset, bool _flag) external`

Update transfer fee flag for a given bAsset, should it change its fee practice
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct BassetPersonal[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_bAsset` | address | bAsset address |
| `_flag` | bool | Charge transfer fee when its set to 'true', otherwise 'false' |

## migrateBassets()
`function migrateBassets (struct BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAssetIndexes, address[] _bAssets, address _newIntegration) external`

Transfers all collateral from one lending market to another - used initially to handle the migration between Aave V1 and Aave V2. Note - only supports non tx fee enabled assets. Supports going from no integration to integration, but not the other way around.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct BassetPersonal[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_bAssets` | address[] | Array of basket assets to migrate |
| `_newIntegration` | address | Address of the new platform integration |

## handlePegLoss()
`function handlePegLoss (struct BasketState _basket, struct BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAsset, address _belowPeg) external`

Executes the Auto Redistribution event by isolating the bAsset from the Basket
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_basket` | struct BasketState | Struct containing core basket info |
| `_bAssetPersonal` | struct BassetPersonal[] | Basset data storage array |
| `_bAsset` | mapping(address => uint8) | Address of the ERC20 token to isolate |
| `_belowPeg` | address | Bool to describe whether the bAsset deviated below peg (t)or above (f) |

## negateIsolation()
`function negateIsolation (struct BasketState _basket, struct BassetPersonal[] _bAssetPersonal, mapping(address => uint8) _bAssetIndexes, address _bAsset) external`

Negates the isolation of a given bAsset
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_basket` | struct BasketState | Struct containing core basket info |
| `_bAssetPersonal` | struct BassetPersonal[] | Basset data storage array |
| `_bAssetIndexes` | mapping(address => uint8) | Mapping of bAsset address to their index |
| `_bAsset` | address | Address of the bAsset |

## startRampA()
`function startRampA (struct AmpData _targetA, uint256 _rampEndTime) external`

Starts changing of the amplification var A
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_targetA` | struct AmpData | Target A value |
| `_rampEndTime` | uint256 | Time at which A will arrive at _targetA |

## stopRampA()
`function stopRampA () external`

Stops the changing of the amplification var A, settingit to whatever the current value is.

