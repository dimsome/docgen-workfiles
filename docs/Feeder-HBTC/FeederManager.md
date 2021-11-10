# Functions

## calculatePlatformInterest()
`function calculatePlatformInterest (struct BassetPersonal[] _bAssetPersonal, struct BassetData[] _bAssetData) external returns (uint8[] idxs, uint256[] rawGains)`

Calculates the gains accrued across all lending markets.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct BassetPersonal[] | Basset personal storage array |
| `_bAssetData` | struct BassetData[] | Basset data storage array |

## migrateBassets()
`function migrateBassets (struct BassetPersonal[] _bAssetPersonal, address[] _bAssets, address _newIntegration) external`

Transfers all collateral from one lending market to another - used initially to handle the migration between Aave V1 and Aave V2. Note - only supports non tx fee enabled assets. Supports going from no integration to integration, but not the other way around.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssetPersonal` | struct BassetPersonal[] | Basset data storage array |
| `_bAssets` | address[] | Array of basket assets to migrate |
| `_newIntegration` | address | Address of the new platform integration |

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

