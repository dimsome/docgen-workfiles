# Functions

## constructor()
`function constructor (address _nexus) public`

Constructor to set immutable bytecode
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_nexus` | address | Nexus address |

## mint()
`function mint (address _input, uint256 _inputQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 mintOutput)`

Mint a single bAsset, at a 1:1 ratio with the bAsset. This contract must have approval to spend the senders bAsset
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_input` | address | Address of the bAsset to deposit for the minted mAsset. |
| `_inputQuantity` | uint256 | Quantity in bAsset units |
| `_minOutputQuantity` | uint256 | Minimum mAsset quanity to be minted. This protects against slippage. |
| `_recipient` | address | Receipient of the newly minted mAsset tokens |

## mintMulti()
`function mintMulti (address[] _inputs, uint256[] _inputQuantities, uint256 _minOutputQuantity, address _recipient) external returns (uint256 mintOutput)`

Mint with multiple bAssets, at a 1:1 ratio to mAsset. This contract must have approval to spend the senders bAssets
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_inputs` | address[] | Non-duplicate address array of bASset addresses to deposit for the minted mAsset tokens. |
| `_inputQuantities` | uint256[] | Quantity of each bAsset to deposit for the minted mAsset.Order of array should mirror the above bAsset addresses. |
| `_minOutputQuantity` | uint256 | Minimum mAsset quanity to be minted. This protects against slippage. |
| `_recipient` | address | Address to receive the newly minted mAsset tokens |

## getMintOutput()
`function getMintOutput (address _input, uint256 _inputQuantity) external returns (uint256 mintOutput)`

Get the projected output of a given mint
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_input` | address | Address of the bAsset to deposit for the minted mAsset |
| `_inputQuantity` | uint256 | Quantity in bAsset units |

## getMintMultiOutput()
`function getMintMultiOutput (address[] _inputs, uint256[] _inputQuantities) external returns (uint256 mintOutput)`

Get the projected output of a given mint
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_inputs` | address[] | Non-duplicate address array of addresses to bAssets to deposit for the minted mAsset tokens. |
| `_inputQuantities` | uint256[] | Quantity of each bAsset to deposit for the minted mAsset. |

## swap()
`function swap (address _input, address _output, uint256 _inputQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 swapOutput)`

Swaps one bAsset for another bAsset using the bAsset addresses.bAsset <> bAsset swaps will incur a small fee (swapFee()).
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_input` | address | Address of bAsset to deposit |
| `_output` | address | Address of bAsset to receive |
| `_inputQuantity` | uint256 | Units of input bAsset to swap |
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
`function redeem (address _output, uint256 _mAssetQuantity, uint256 _minOutputQuantity, address _recipient) external returns (uint256 outputQuantity)`

Redeems a specified quantity of mAsset in return for a bAsset specified by bAsset address.The bAsset is sent to the specified recipient.The bAsset quantity is relative to current vault balance levels and desired mAsset quantity.The quantity of mAsset is burnt as payment.A minimum quantity of bAsset is specified to protect against price slippage between the mAsset and bAsset.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_output` | address | Address of the bAsset to receive |
| `_mAssetQuantity` | uint256 | Quantity of mAsset to redeem |
| `_minOutputQuantity` | uint256 | Minimum bAsset quantity to receive for the burnt mAssets. This protects against slippage. |
| `_recipient` | address | Address to transfer the withdrawn bAssets to. |

## redeemMasset()
`function redeemMasset (uint256 _mAssetQuantity, uint256[] _minOutputQuantities, address _recipient) external returns (uint256[] outputQuantities)`

Credits a recipient with a proportionate amount of bAssets, relative to current vaultbalance levels and desired mAsset quantity. Burns the mAsset as payment.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_mAssetQuantity` | uint256 | Quantity of mAsset to redeem |
| `_minOutputQuantities` | uint256[] | Min units of output to receive |
| `_recipient` | address | Address to credit the withdrawn bAssets |

## redeemExactBassets()
`function redeemExactBassets (address[] _outputs, uint256[] _outputQuantities, uint256 _maxMassetQuantity, address _recipient) external returns (uint256 mAssetQuantity)`

Credits a recipient with a certain quantity of selected bAssets, in exchange for burning the relative Masset quantity from the sender. Sender also incurs a small fee on the outgoing asset.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_outputs` | address[] | Addresses of the bAssets to receive |
| `_outputQuantities` | uint256[] | Units of the bAssets to redeem |
| `_maxMassetQuantity` | uint256 | Maximum mAsset quantity to burn for the received bAssets. This protects against slippage. |
| `_recipient` | address | Address to receive the withdrawn bAssets |

## getRedeemOutput()
`function getRedeemOutput (address _output, uint256 _mAssetQuantity) external returns (uint256 bAssetOutput)`

Gets the estimated output from a given redeem
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_output` | address | Address of the bAsset to receive |
| `_mAssetQuantity` | uint256 | Quantity of mAsset to redeem |

## getRedeemExactBassetsOutput()
`function getRedeemExactBassetsOutput (address[] _outputs, uint256[] _outputQuantities) external returns (uint256 mAssetQuantity)`

Gets the estimated output from a given redeem
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_outputs` | address[] | Addresses of the bAsset to receive |
| `_outputQuantities` | uint256[] | Quantities of bAsset to redeem |

## getBasket()
`function getBasket () external returns (bool, bool)`

Get basket details for `Masset_MassetStructs.Basket`

## getBassets()
`function getBassets () external returns (struct MassetStructs.BassetPersonal[] personal, struct MassetStructs.BassetData[] data)`

Get data for a all bAssets in basket

## getBasset()
`function getBasset (address _bAsset) external returns (struct MassetStructs.BassetPersonal personal, struct MassetStructs.BassetData data)`

Get data for a specific bAsset, if it exists
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_bAsset` | address | Address of bAsset |

## getConfig()
`function getConfig () external returns (struct MassetStructs.InvariantConfig config)`

Gets all config needed for general InvariantValidator calls

