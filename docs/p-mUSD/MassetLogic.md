# Functions

## mint()
`function mint (struct MassetData _data, struct InvariantConfig _config, struct Asset _input, uint256 _inputQuantity, uint256 _minOutputQuantity) external returns (uint256 mintOutput)`

Transfers token in, updates internal balances and computes the mAsset output
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct MassetData | Masset storage state |
| `_config` | struct InvariantConfig | Core config for use in the invariant validator |
| `_input` | struct Asset | Data on the bAsset to deposit for the minted mAsset. |
| `_inputQuantity` | uint256 | Quantity in input token units. |
| `_minOutputQuantity` | uint256 | Minimum mAsset quantity to be minted. This protects against slippage. |

## mintMulti()
`function mintMulti (struct MassetData _data, struct InvariantConfig _config, uint8[] _indices, uint256[] _inputQuantities, uint256 _minOutputQuantity) external returns (uint256 mintOutput)`

Transfers tokens in, updates internal balances and computes the mAsset output.Only fAsset & mAsset are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct MassetData | Masset storage state |
| `_config` | struct InvariantConfig | Core config for use in the invariant validator |
| `_indices` | uint8[] | Non-duplicate addresses of the bAssets to deposit for the minted mAsset. |
| `_inputQuantities` | uint256[] | Quantity of each input in input token units. |
| `_minOutputQuantity` | uint256 | Minimum mAsset quantity to be minted. This protects against slippage. |

## swap()
`function swap (struct MassetData _data, struct InvariantConfig _config, struct Asset _input, struct Asset _output, uint256 _inputQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 swapOutput, uint256 scaledFee)`

Swaps two assets - either internally between fAsset<>mAsset, or between fAsset<>mpAsset byfirst routing through the mAsset pool.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct MassetData | Masset storage state |
| `_config` | struct InvariantConfig | Core config for use in the invariant validator |
| `_input` | struct Asset | Data on bAsset to deposit |
| `_output` | struct Asset | Data on bAsset to withdraw |
| `_inputQuantity` | uint256 | Units of input bAsset to swap in |
| `_minOutputQuantity` | uint256 | Minimum quantity of the swap output asset. This protects against slippage |
| `_recipient` | address | Address to transfer output asset to |

## redeem()
`function redeem (struct MassetData _data, struct InvariantConfig _config, struct Asset _output, uint256 _inputQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 bAssetQuantity, uint256 scaledFee)`

Burns a specified quantity of the senders mAsset in return for a bAsset. The output amount is derivedfrom the invariant. Supports redemption into either the fAsset, mAsset or assets in the mAsset basket.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct MassetData | Masset storage state |
| `_config` | struct InvariantConfig | Core config for use in the invariant validator |
| `_output` | struct Asset | Data on bAsset to withdraw |
| `_inputQuantity` | uint256 | Quantity of mAsset to burn |
| `_minOutputQuantity` | uint256 | Minimum bAsset quantity to receive for the burnt mAsset. This protects against slippage. |
| `_recipient` | address | Address to transfer the withdrawn bAssets to. |

## redeemProportionately()
`function redeemProportionately (struct MassetData _data, struct InvariantConfig _config, uint256 _inputQuantity, uint256[] _minOutputQuantities, address _recipient) external returns (uint256 scaledFee, address[] outputs, uint256[] outputQuantities)`

Credits a recipient with a proportionate amount of bAssets, relative to current vaultbalance levels and desired mAsset quantity. Burns the mAsset as payment. Only fAsset & mAsset are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct MassetData | Masset storage state |
| `_config` | struct InvariantConfig | Core config for use in the invariant validator |
| `_inputQuantity` | uint256 | Quantity of mAsset to redeem |
| `_minOutputQuantities` | uint256[] | Min units of output to receive |
| `_recipient` | address | Address to credit the withdrawn bAssets |

## redeemExactBassets()
`function redeemExactBassets (struct MassetData _data, struct InvariantConfig _config, uint8[] _indices, uint256[] _outputQuantities, uint256 _maxMassetQuantity, address _recipient) external returns (uint256 mAssetQuantity, uint256 fee)`

Credits a recipient with a certain quantity of selected bAssets, in exchange for burning the relative mAsset quantity from the sender. Only fAsset & mAsset (0,1) are supported in this path.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_data` | struct MassetData | Masset storage state |
| `_config` | struct InvariantConfig | Core config for use in the invariant validator |
| `_indices` | uint8[] | Indices of the bAssets to receive |
| `_outputQuantities` | uint256[] | Units of the bAssets to receive |
| `_maxMassetQuantity` | uint256 | Maximum mAsset quantity to burn for the received bAssets. This protects against slippage. |
| `_recipient` | address | Address to receive the withdrawn bAssets |

## computeMint()
`function computeMint (struct BassetData[] _bAssets, uint8 _i, uint256 _rawInput, struct InvariantConfig _config) public returns (uint256 mintAmount)`

Compute the amount of mAsset received for mintingwith `quantity` amount of bAsset index `i`.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_i` | uint8 | Index of bAsset with which to mint |
| `_rawInput` | uint256 | Raw amount of bAsset to use in mint |
| `_config` | struct InvariantConfig | Generalised invariantConfig stored externally |

## computeMintMulti()
`function computeMintMulti (struct BassetData[] _bAssets, uint8[] _indices, uint256[] _rawInputs, struct InvariantConfig _config) public returns (uint256 mintAmount)`

Compute the amount of mAsset received for mintingwith the given array of inputs.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_indices` | uint8[] | Indexes of bAssets with which to mint |
| `_rawInputs` | uint256[] | Raw amounts of bAssets to use in mint |
| `_config` | struct InvariantConfig | Generalised invariantConfig stored externally |

## computeSwap()
`function computeSwap (struct BassetData[] _bAssets, uint8 _i, uint8 _o, uint256 _rawInput, uint256 _feeRate, struct InvariantConfig _config) public returns (uint256 bAssetOutputQuantity, uint256 scaledSwapFee)`

Compute the amount of bAsset received for swapping`quantity` amount of index `input_idx` to index `output_idx`.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_i` | uint8 | Index of bAsset to swap IN |
| `_o` | uint8 | Index of bAsset to swap OUT |
| `_rawInput` | uint256 | Raw amounts of input bAsset to input |
| `_feeRate` | uint256 | Swap fee rate to apply to output |
| `_config` | struct InvariantConfig | Generalised invariantConfig stored externally |

## computeRedeem()
`function computeRedeem (struct BassetData[] _bAssets, uint8 _o, uint256 _grossMassetQuantity, struct InvariantConfig _config) public returns (uint256 rawOutputUnits, uint256 scaledFee)`

Compute the amount of bAsset index `i` received forredeeming `quantity` amount of mAsset.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_o` | uint8 | Index of output bAsset |
| `_grossMassetQuantity` | uint256 | Net amount of mAsset to redeem |
| `_config` | struct InvariantConfig | Generalised invariantConfig stored externally |

## computeRedeemExact()
`function computeRedeemExact (struct BassetData[] _bAssets, uint8[] _indices, uint256[] _rawOutputs, struct InvariantConfig _config) public returns (uint256 grossMasset, uint256 fee)`

Compute the amount of mAsset required to redeema given selection of bAssets.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_indices` | uint8[] | Indexes of output bAssets |
| `_rawOutputs` | uint256[] | Desired raw bAsset outputs |
| `_config` | struct InvariantConfig | Generalised invariantConfig stored externally |

## computePrice()
`function computePrice (struct BassetData[] _bAssets, struct InvariantConfig _config) public returns (uint256 price, uint256 k)`

Gets the price of the mAsset, and invariant value k
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAssets` | struct BassetData[] | Array of all bAsset Data |
| `_config` | struct InvariantConfig | Generalised InvariantConfig stored externally |

