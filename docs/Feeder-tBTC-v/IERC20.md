# Functions

## totalSupply()
`function totalSupply () external returns (uint256)`

Returns the amount of tokens in existence.

## balanceOf()
`function balanceOf () external returns (uint256)`

Returns the amount of tokens owned by `account`.

## transfer()
`function transfer () external returns (bool)`

Moves `amount` tokens from the caller's account to `recipient`.Returns a boolean value indicating whether the operation succeeded.Emits a {Transfer} event.

## allowance()
`function allowance () external returns (uint256)`

Returns the remaining number of tokens that `spender` will beallowed to spend on behalf of `owner` through {transferFrom}. This iszero by default.This value changes when {approve} or {transferFrom} are called.

## approve()
`function approve () external returns (bool)`

Sets `amount` as the allowance of `spender` over the caller's tokens.Returns a boolean value indicating whether the operation succeeded.IMPORTANT: Beware that changing an allowance with this method brings the riskthat someone may use both the old and the new allowance by unfortunatetransaction ordering. One possible solution to mitigate this racecondition is to first reduce the spender's allowance to 0 and set thedesired value afterwards:https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729Emits an {Approval} event.

## transferFrom()
`function transferFrom () external returns (bool)`

Moves `amount` tokens from `sender` to `recipient` using theallowance mechanism. `amount` is then deducted from the caller'sallowance.Returns a boolean value indicating whether the operation succeeded.Emits a {Transfer} event.

