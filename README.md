# Compute Resource Optimization 2.0 🤖🚀

What follows is a brief methodological sketch for evaluating the effectiveness of optimizations proposed in the document "[Optimized Computational Cost Profile](https://github.com/smatthewenglish/LandslideLyndon)", a response to the Solidity Take Home Assignment prompt.  

## EVM Tracing

Using the command-line `evm` tool we can write bytecode directly using [Ethereum Virtual Machine Opcodes](https://ethervm.io/). This gives us the ability to granularly evaluate the gas-cost profile for each step of the computation. 

### Command-Line `evm` Tool

Using `homebrew` on MacOS we can install the tool like so: 
```bash
brew tap ethereum/ethereum
brew install ethereum
```

We can execute the following bytecode snippet like so: 

```bash
evm --debug --code 6002600401 run
```

This is the result: 

```
0x
#### TRACE ####
PUSH1           pc=00000000 gas=10000000000 cost=3

PUSH1           pc=00000002 gas=9999999997 cost=3
Stack:
00000000  0000000000000000000000000000000000000000000000000000000000000002

ADD             pc=00000004 gas=9999999994 cost=3
Stack:
00000000  0000000000000000000000000000000000000000000000000000000000000004
00000001  0000000000000000000000000000000000000000000000000000000000000002

STOP            pc=00000005 gas=9999999991 cost=0
Stack:
00000000  0000000000000000000000000000000000000000000000000000000000000006

#### LOGS ####
```
Using the disassembler tool we can examine the opcodes individually: 

`echo "6002600401" >> example.txt && evm disasm example.txt`

it shows

```
6002600401
00000: PUSH1 0x02
00002: PUSH1 0x04
00004: ADD
```

The following snippet uses the multiplication opcode, as opposed to the example above which uses addition.  

`evm --debug --code 6002600402 run`


### References

The above tools/techniques were refined with help from the Ethereum developer community, as seen by the following StackOverflow questions posed by me, more than three years ago:  

* [How to install geth disasm and other dev tools](https://ethereum.stackexchange.com/questions/26638/how-to-install-geth-disasm-and-other-dev-tools)
* [does the command `evm --debug --code OPCODES` still work?](https://ethereum.stackexchange.com/questions/26600/does-the-command-evm-debug-code-opcodes-still-work)

