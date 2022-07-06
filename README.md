co.istrav.network
========

coin:
- cipher: a secret or disguised way of writing; a code.
- optimized: make the best or most effective use of (a situation, opportunity, or resource).
- istrav: innovation management system: storage and processing.
- network: an arrangement of intersecting horizontal and vertical lines.

### Why?
In the military higher ranking members who are commanders execute orders by telling lower ranking members what to do, such as attack or defend, or where to go. Which is known as the chain of command. Anyways, because the military fights it's enimies in foreign and domestic territories, their method of communication between one another must be kept private and not made public no matter what. If the enimy were to do this ... for example: wire tap a connection between two commanders ... it would reveal sensitive information such as the location of all our strategic submarines. Not good. 

### Who?
For anyone interested in secrets and the following:
- faking(SECRET)
- scrambling(ENIGMA)
- disguising(XOR)
- sending(DB) & receiving(DB)
- detecting(MATCH)
- puzzling(DEIGMA)
- genuine(SECRET)

### What?
Like an onion that has layers we want the security around our data to contain as many true things as possible and as few false things as possible. When we store and compute we keep that which is important around us and push that which is not away. So in a sense what we are building is some kind of kernel for secrets.

Computer Components:
- Computer hardware includes the physical parts of a computer, such as the case, central processing unit (CPU), random access memory (RAM), monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard.
- Computer software is a series of programs, data and instructions used in a computer's hardware to help the device operate and you complete tasks. Hardware is the physical components that comprise a computer, such as the graphics card, data storage and motherboard.
- Operating system is the software that supports a computer's basic functions, such as scheduling tasks, executing applications, and controlling peripherals.
- The kernel is the heart of the operating system and controls all the important functions of hardware – it is a computer program at the core of a computer's operating system and generally has complete control over everything in the system. It is the portion of the operating system code that is always resident in memory and facilitates interactions between hardware and software components.

Computer Functions:
- The four basic functions of a computer are: input, storage, processing, and output.

### When?
Secrets should be established from the very beginning then renewed every time the status of the secret changes. So, if three people know a secret and the group decides that they want a fourth person to know the secret then a new secret must be created, old members keep their historic secrets private just in case, then all members now use the newly establish sercret for further communication from now on. If a fifth member wants to join the process is repeated. In order to kick out a member roll back to the secret before him/her and then start a new secret from there.

### How?
Sort of like the antikythera mechanism which could tell you where the planets position would be at any given point in time ... OTP functions the same because if an attacker obtains our KEY then they would also need to know the latest settings of the ENIGMA machine in order to decode the SECRET. 

SECRET:
- MESSAGE = "the private thing" // up to 1.5MB chars
- SENDER = username // up to 64 chars
- RECIPIENT = username // up to 64 chars

LINK:
- ID = reference // block chain id
- HASH = random string // hash sum of the BLOCK

BLOCK:
- INDEX = number // position in the chain
- TIMESTAMP = timestamp // when block was added to the chain sometime after previous hash
- DATA = "the private thing" // SECRET up to 1.6MB chars
- PREVIOUS_HASH = "48y3fuhfo437hf3fuh..." // sum of previous block
- HASH = "4fg30q87fgublfa839..." // sum of current block

CHAIN:
- A machine that produces information // SECRET(LINK, BLOCK) // generate fake and genuine data
- A machine that encodes information // ENIGMA(1,112,064 chars x 7 spherical-rotor) = CODE
- A machine that shreds information // XOR(DECO, CODE) for [parity1, parity2] then destroy deco & code copy
- A machine that transfers information // NETWORK[parity1, parity2, ...] = astro sized shared database over websockets using TCP/IP
- A machine that assembles information // MATCH(parity1, parity2) for XOR(CODE, DECO) then destroy parity copies
- A machine that decodes information // DEIGMA(1,112,064 chars x 7 spherical-rotor) = CODE
- A machine that consumes information // SECRET(LINK, BLOCK) // obtain fake and genuine data