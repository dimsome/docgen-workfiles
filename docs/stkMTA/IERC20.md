# Functions

## totalSupply()
`function totalSupply () external returns (uint256)`

Returns the amount of tokens in existence.

## balanceOf()
`function balanceOf () external returns (uint256)`

Returns the amount of tokens owned by `account`.

## transfer()
`function transfer () external returns (bool)`

Moves `amount` tokens from the caller's account to `recipient`.Returns a boolean value indicating whether the operation succeeded.Emits a {Transfer} event.

## allowance()
`function allowance () external returns (uint256)`

Returns the remaining number of tokens that `spender` will beallowed to spend on behalf of `owner` through {transferFrom}. This iszero by default.This value changes when {approve} or {transferFrom} are called.

## approve()
`function approve () external returns (bool)`

Sets `amount` as the allowance of `spender` over the caller's tokens.Returns a boolean value indicating whether the operation succeeded.IMPORTANT: Beware that changing an allowance with this method brings the riskthat someone may use both the old and the new allowance by unfortunatetransaction ordering. One possible solution to mitigate this racecondition is to first reduce the spender's allowance to 0 and set thedesired value afterwards:https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729Emits an {Approval} event.

## transferFrom()
`function transferFrom () external returns (bool)`

Moves `amount` tokens from `sender` to `recipient` using theallowance mechanism. `amount` is then deducted from the caller'sallowance.Returns a boolean value indicating whether the operation succeeded.Emits a {Transfer} event.

