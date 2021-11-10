# Functions

## totalSupply()
`function totalSupply () public returns (uint256)`

See {IERC20-totalSupply}.

## balanceOf()
`function balanceOf () public returns (uint256)`

See {IERC20-balanceOf}.

## transfer()
`function transfer () public returns (bool)`

See {IERC20-transfer}.Requirements:- `recipient` cannot be the zero address.- the caller must have a balance of at least `amount`.

## allowance()
`function allowance () public returns (uint256)`

See {IERC20-allowance}.

## approve()
`function approve () public returns (bool)`

See {IERC20-approve}.Requirements:- `spender` cannot be the zero address.

## transferFrom()
`function transferFrom () public returns (bool)`

See {IERC20-transferFrom}.Emits an {Approval} event indicating the updated allowance. This is notrequired by the EIP. See the note at the beginning of {ERC20};Requirements:- `sender` and `recipient` cannot be the zero address.- `sender` must have a balance of at least `amount`.- the caller must have allowance for `sender`'s tokens of at least`amount`.

## increaseAllowance()
`function increaseAllowance () public returns (bool)`

Atomically increases the allowance granted to `spender` by the caller.This is an alternative to {approve} that can be used as a mitigation forproblems described in {IERC20-approve}.Emits an {Approval} event indicating the updated allowance.Requirements:- `spender` cannot be the zero address.

## decreaseAllowance()
`function decreaseAllowance () public returns (bool)`

Atomically decreases the allowance granted to `spender` by the caller.This is an alternative to {approve} that can be used as a mitigation forproblems described in {IERC20-approve}.Emits an {Approval} event indicating the updated allowance.Requirements:- `spender` cannot be the zero address.- `spender` must have allowance for the caller of at least`subtractedValue`.

