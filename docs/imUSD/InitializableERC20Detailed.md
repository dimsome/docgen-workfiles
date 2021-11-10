# Functions

## name()
`function name () public returns (string)`

Returns the name of the token.

## symbol()
`function symbol () public returns (string)`

Returns the symbol of the token, usually a shorter version of thename.

## decimals()
`function decimals () public returns (uint8)`

Returns the number of decimals used to get its user representation.For example, if `decimals` equals `2`, a balance of `505` tokens shouldbe displayed to a user as `5,05` (`505 / 10 ** 2`).Tokens usually opt for a value of 18, imitating the relationship betweenEther and Wei.NOTE: This information is only used for _display_ purposes: it inno way affects any of the arithmetic of the contract, including{IERC20-balanceOf} and {IERC20-transfer}.

