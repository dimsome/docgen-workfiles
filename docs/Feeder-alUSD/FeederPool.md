# Functions

## constructor()
`function constructor (address _nexus, address _mAsset) public`

Constructor to set immutable bytecode
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_nexus` | address | Nexus address |
| `_mAsset` | address | Immutable mAsset address |

## mint()
`function mint (address _input, uint256 _inputQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 mintOutput)`

Mint fpTokens with a single bAsset. This contract must have approval to spend the senders bAsset.Supports either fAsset, mAsset or mpAsset as input - with mpAssets used to mint mAsset before depositing.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_input` | address | Address of the bAsset to deposit. |
| `_inputQuantity` | uint256 | Quantity in input token units. |
| `_minOutputQuantity` | uint256 | Minimum fpToken quantity to be minted. This protects against slippage. |
| `_recipient` | address | Receipient of the newly minted fpTokens |

## mintMulti()
`function mintMulti (address[] _inputs, uint256[] _inputQuantities, uint256 _minOutputQuantity, address _recipient) external returns (uint256 mintOutput)`

Mint fpTokens with multiple bAssets. This contract must have approval to spend the senders bAssets.Supports only fAsset or mAsset as inputs.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_inputs` | address[] | Address of the bAssets to deposit. |
| `_inputQuantities` | uint256[] | Quantity in input token units. |
| `_minOutputQuantity` | uint256 | Minimum fpToken quantity to be minted. This protects against slippage. |
| `_recipient` | address | Receipient of the newly minted fpTokens |

## getMintOutput()
`function getMintOutput (address _input, uint256 _inputQuantity) external returns (uint256 mintOutput)`

Get the projected output of a given mint.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_input` | address | Address of the bAsset to deposit |
| `_inputQuantity` | uint256 | Quantity in bAsset units |

## getMintMultiOutput()
`function getMintMultiOutput (address[] _inputs, uint256[] _inputQuantities) external returns (uint256 mintOutput)`

Get the projected output of a given mint
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_inputs` | address[] | Non-duplicate address array of addresses to bAssets to deposit for the minted mAsset tokens. |
| `_inputQuantities` | uint256[] | Quantity of each bAsset to deposit for the minted fpToken. |

## swap()
`function swap (address _input, address _output, uint256 _inputQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 swapOutput)`

Swaps two assets - either internally between fAsset<>mAsset, or between fAsset<>mpAsset byfirst routing through the mAsset pool.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_input` | address | Address of bAsset to deposit |
| `_output` | address | Address of bAsset to withdraw |
| `_inputQuantity` | uint256 | Units of input bAsset to swap in |
| `_minOutputQuantity` | uint256 | Minimum quantity of the swap output asset. This protects against slippage |
| `_recipient` | address | Address to transfer output asset to |

## getSwapOutput()
`function getSwapOutput (address _input, address _output, uint256 _inputQuantity) external returns (uint256 swapOutput)`

Determines both if a trade is valid, and the expected fee or output.Swap is valid if it does not result in the input asset exceeding its maximum weight.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_input` | address | Address of bAsset to deposit |
| `_output` | address | Address of bAsset to receive |
| `_inputQuantity` | uint256 | Units of input bAsset to swap |

## redeem()
`function redeem (address _output, uint256 _fpTokenQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 outputQuantity)`

Burns a specified quantity of the senders fpToken in return for a bAsset. The output amount is derivedfrom the invariant. Supports redemption into either the fAsset, mAsset or assets in the mAsset basket.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_output` | address | Address of the bAsset to withdraw |
| `_fpTokenQuantity` | uint256 | Quantity of LP Token to burn |
| `_minOutputQuantity` | uint256 | Minimum bAsset quantity to receive for the burnt fpToken. This protects against slippage. |
| `_recipient` | address | Address to transfer the withdrawn bAssets to. |

## redeemProportionately()
`function redeemProportionately (uint256 _inputQuantity, uint256[] _minOutputQuantities, address _recipient) external returns (uint256[] outputQuantities)`

Credits a recipient with a proportionate amount of bAssets, relative to current vaultbalance levels and desired fpToken quantity. Burns the fpToken as payment. Only fAsset & mAsset are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_inputQuantity` | uint256 | Quantity of fpToken to redeem |
| `_minOutputQuantities` | uint256[] | Min units of output to receive |
| `_recipient` | address | Address to credit the withdrawn bAssets |

## redeemExactBassets()
`function redeemExactBassets (address[] _outputs, uint256[] _outputQuantities, uint256 _maxInputQuantity, address _recipient) external returns (uint256 fpTokenQuantity)`

Credits a recipient with a certain quantity of selected bAssets, in exchange for burning the relative fpToken quantity from the sender. Only fAsset & mAsset (0,1) are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_outputs` | address[] | Addresses of the bAssets to receive |
| `_outputQuantities` | uint256[] | Units of the bAssets to receive |
| `_maxInputQuantity` | uint256 | Maximum fpToken quantity to burn for the received bAssets. This protects against slippage. |
| `_recipient` | address | Address to receive the withdrawn bAssets |

## getRedeemOutput()
`function getRedeemOutput (address _output, uint256 _fpTokenQuantity) external returns (uint256 bAssetOutput)`

Gets the estimated output from a given redeem
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_output` | address | Address of the bAsset to receive |
| `_fpTokenQuantity` | uint256 | Quantity of fpToken to redeem |

## getRedeemExactBassetsOutput()
`function getRedeemExactBassetsOutput (address[] _outputs, uint256[] _outputQuantities) external returns (uint256 fpTokenQuantity)`

Gets the estimated output from a given redeem
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_outputs` | address[] | Addresses of the bAsset to receive |
| `_outputQuantities` | uint256[] | Quantities of bAsset to redeem |

## getPrice()
`function getPrice () public returns (uint256 price, uint256 k)`

Gets the price of the fpToken, and invariant value k

## getConfig()
`function getConfig () external returns (struct FeederConfig config)`

Gets all config needed for general InvariantValidator calls

## getBasset()
`function getBasset (address _bAsset) external returns (struct BassetPersonal personal, struct BassetData vaultData)`

Get data for a specific bAsset, if it exists
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAsset` | address | Address of bAsset |

## getBassets()
`function getBassets () external returns (struct BassetPersonal[], struct BassetData[] vaultData)`

Get data for a all bAssets in basket

