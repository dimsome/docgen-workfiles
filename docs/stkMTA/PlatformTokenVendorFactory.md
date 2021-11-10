# Functions

## dummy()
`function dummy () public returns (bool)`

for some reason Typechain will not generate the types if the library only has the create function

## create()
`function create (contract IERC20 _rewardsToken) public returns (address)`

Deploys a new PlatformTokenVendor contract
| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- | 
| `_rewardsToken` | contract IERC20 | reward or platform rewards token. eg MTA or WMATIC |

