# Functions

## mint()
`function mint (struct FeederData _data, struct FeederConfig _config, struct Asset _input, uint256 _inputQuantity, uint256 _minOutputQuantity) external returns (uint256 mintOutput)`

Transfers token in, updates internal balances and computes the fpToken output
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct FeederData | Feeder pool storage state |
| `_config` | struct FeederConfig | Core config for use in the invariant validator |
| `_input` | struct Asset | Data on the bAsset to deposit for the minted fpToken. |
| `_inputQuantity` | uint256 | Quantity in input token units. |
| `_minOutputQuantity` | uint256 | Minimum fpToken quantity to be minted. This protects against slippage. |

## mintMulti()
`function mintMulti (struct FeederData _data, struct FeederConfig _config, uint8[] _indices, uint256[] _inputQuantities, uint256 _minOutputQuantity) external returns (uint256 mintOutput)`

Transfers tokens in, updates internal balances and computes the fpToken output.Only fAsset & mAsset are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct FeederData | Feeder pool storage state |
| `_config` | struct FeederConfig | Core config for use in the invariant validator |
| `_indices` | uint8[] | Non-duplicate addresses of the bAssets to deposit for the minted fpToken. |
| `_inputQuantities` | uint256[] | Quantity of each input in input token units. |
| `_minOutputQuantity` | uint256 | Minimum fpToken quantity to be minted. This protects against slippage. |

## swap()
`function swap (struct FeederData _data, struct FeederConfig _config, struct Asset _input, struct Asset _output, uint256 _inputQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 swapOutput, uint256 localFee)`

Swaps two assets - either internally between fAsset<>mAsset, or between fAsset<>mpAsset byfirst routing through the mAsset pool.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct FeederData | Feeder pool storage state |
| `_config` | struct FeederConfig | Core config for use in the invariant validator |
| `_input` | struct Asset | Data on bAsset to deposit |
| `_output` | struct Asset | Data on bAsset to withdraw |
| `_inputQuantity` | uint256 | Units of input bAsset to swap in |
| `_minOutputQuantity` | uint256 | Minimum quantity of the swap output asset. This protects against slippage |
| `_recipient` | address | Address to transfer output asset to |

## redeem()
`function redeem (struct FeederData _data, struct FeederConfig _config, struct Asset _output, uint256 _fpTokenQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 outputQuantity, uint256 localFee)`

Burns a specified quantity of the senders fpToken in return for a bAsset. The output amount is derivedfrom the invariant. Supports redemption into either the fAsset, mAsset or assets in the mAsset basket.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct FeederData | Feeder pool storage state |
| `_config` | struct FeederConfig | Core config for use in the invariant validator |
| `_output` | struct Asset | Data on bAsset to withdraw |
| `_fpTokenQuantity` | uint256 | Quantity of fpToken to burn |
| `_minOutputQuantity` | uint256 | Minimum bAsset quantity to receive for the burnt fpToken. This protects against slippage. |
| `_recipient` | address | Address to transfer the withdrawn bAssets to. |

## redeemProportionately()
`function redeemProportionately (struct FeederData _data, struct FeederConfig _config, uint256 _inputQuantity, uint256[] _minOutputQuantities, address _recipient) external returns (uint256 scaledFee, address[] outputs, uint256[] outputQuantities)`

Credits a recipient with a proportionate amount of bAssets, relative to current vaultbalance levels and desired fpToken quantity. Burns the fpToken as payment. Only fAsset & mAsset are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct FeederData | Feeder pool storage state |
| `_config` | struct FeederConfig | Core config for use in the invariant validator |
| `_inputQuantity` | uint256 | Quantity of fpToken to redeem |
| `_minOutputQuantities` | uint256[] | Min units of output to receive |
| `_recipient` | address | Address to credit the withdrawn bAssets |

## redeemExactBassets()
`function redeemExactBassets (struct FeederData _data, struct FeederConfig _config, uint8[] _indices, uint256[] _outputQuantities, uint256 _maxInputQuantity, address _recipient) external returns (uint256 fpTokenQuantity, uint256 localFee)`

Credits a recipient with a certain quantity of selected bAssets, in exchange for burning the relative fpToken quantity from the sender. Only fAsset & mAsset (0,1) are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct FeederData | Feeder pool storage state |
| `_config` | struct FeederConfig | Core config for use in the invariant validator |
| `_indices` | uint8[] | Indices of the bAssets to receive |
| `_outputQuantities` | uint256[] | Units of the bAssets to receive |
| `_maxInputQuantity` | uint256 | Maximum fpToken quantity to burn for the received bAssets. This protects against slippage. |
| `_recipient` | address | Address to receive the withdrawn bAssets |

## computeMint()
`function computeMint (struct BassetData[] _bAssets, uint8 _i, uint256 _rawInput, struct FeederConfig _config) public returns (uint256 mintAmount)`

Compute the amount of fpToken received for mintingwith `quantity` amount of bAsset index `i`.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_i` | uint8 | Index of bAsset with which to mint |
| `_rawInput` | uint256 | Raw amount of bAsset to use in mint |
| `_config` | struct FeederConfig | Generalised FeederConfig stored externally |

## computeMintMulti()
`function computeMintMulti (struct BassetData[] _bAssets, uint8[] _indices, uint256[] _rawInputs, struct FeederConfig _config) public returns (uint256 mintAmount)`

Compute the amount of fpToken received for mintingwith the given array of inputs.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_indices` | uint8[] | Indexes of bAssets with which to mint |
| `_rawInputs` | uint256[] | Raw amounts of bAssets to use in mint |
| `_config` | struct FeederConfig | Generalised FeederConfig stored externally |

## computeSwap()
`function computeSwap (struct BassetData[] _bAssets, uint8 _i, uint8 _o, uint256 _rawInput, uint256 _feeRate, struct FeederConfig _config) public returns (uint256 bAssetOutputQuantity, uint256 scaledSwapFee)`

Compute the amount of bAsset received for swapping`quantity` amount of index `input_idx` to index `output_idx`.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_i` | uint8 | Index of bAsset to swap IN |
| `_o` | uint8 | Index of bAsset to swap OUT |
| `_rawInput` | uint256 | Raw amounts of input bAsset to input |
| `_feeRate` | uint256 | Swap fee rate to apply to output |
| `_config` | struct FeederConfig | Generalised FeederConfig stored externally |

## computeRedeem()
`function computeRedeem (struct BassetData[] _bAssets, uint8 _o, uint256 _netRedeemInput, struct FeederConfig _config) public returns (uint256 rawOutputUnits)`

Compute the amount of bAsset index `i` received forredeeming `quantity` amount of fpToken.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_o` | uint8 | Index of output bAsset |
| `_netRedeemInput` | uint256 | Net amount of fpToken to redeem |
| `_config` | struct FeederConfig | Generalised FeederConfig stored externally |

## computeRedeemExact()
`function computeRedeemExact (struct BassetData[] _bAssets, uint8[] _indices, uint256[] _rawOutputs, struct FeederConfig _config) public returns (uint256 redeemInput)`

Compute the amount of fpToken required to redeema given selection of bAssets.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_indices` | uint8[] | Indexes of output bAssets |
| `_rawOutputs` | uint256[] | Desired raw bAsset outputs |
| `_config` | struct FeederConfig | Generalised FeederConfig stored externally |

## computePrice()
`function computePrice (struct BassetData[] _bAssets, struct FeederConfig _config) public returns (uint256 price, uint256 k)`

Gets the price of the fpToken, and invariant value k
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_config` | struct FeederConfig | Generalised FeederConfig stored externally |

