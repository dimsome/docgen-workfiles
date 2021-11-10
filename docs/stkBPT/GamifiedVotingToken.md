# Functions

## checkpoints()
`function checkpoints () public returns (struct GamifiedVotingToken.Checkpoint)`

Get the `pos`-th checkpoint for `account`.

## numCheckpoints()
`function numCheckpoints () public returns (uint32)`

Get number of checkpoints for `account`.

## delegates()
`function delegates (address delegator) public returns (address)`

Get the address the `delegator` is currently delegating to.Return the `delegator` account if not delegating to anyone.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `delegator` | address | the account that is delegating the votes from |

## getVotes()
`function getVotes () public returns (uint256)`

Gets the current votes balance for `account`

## getPastVotes()
`function getPastVotes () public returns (uint256)`

Retrieve the number of votes for `account` at the end of `blockNumber`.Requirements:- `blockNumber` must have been already mined

## getPastTotalSupply()
`function getPastTotalSupply () public returns (uint256)`

Retrieve the `totalSupply` at the end of `blockNumber`. Note, this value is the sum of all balances.It is but NOT the sum of all the delegated votes!Requirements:- `blockNumber` must have been already mined

## totalSupply()
`function totalSupply () public returns (uint256)`

Total sum of all scaled balances

## delegate()
`function delegate (address delegatee) public`

Delegate votes from the sender to `delegatee`.If `delegatee` is zero, the sender gets the voting power.
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `delegatee` | address | account that gets the voting power. |

