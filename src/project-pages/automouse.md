---
path: "projects/automouse"
name: "automouse"
---

## ABOUT
Automouse is a cross-platform CLI for automation of your mouse and keyboard. It can be used for really simple GUI automation.

### MODES
| Mode        |    Purpose |
| ------------|-------------
| interactive | enter commands continuously (like a REPL) |
| file        | read commands from a file
| execute     | takes input directly from the command line arguments and executes them immediately |

### COMMANDS
All modes use commands. Commands are not case sensitive.

| Command  | Effect |
| ---------|--------|
| RIGHT, R | set direction to right. |
| LEFT, L | set direction to left. |
| UP, U | set direction to up. |
| DOWN, D | set direction to down. |
| LEFT-CLICK, CLICK, LC, C | click the left mouse button. |
| RIGHT-CLICK, RC | click the right mouse button. |
| MOUSE-DOWN, MD | toggle the left mouse button state to down. |
| MOUSE-UP, MU | toggle the left mouse button state to up. |
| SLEEP, S:duration | waits the given amount of milliseconds. |
| MOVE, M:x,y | moves the mouse to the given x and y coordinates. |
| KEY, K:key | presses the given key. |
| PRINT, P | prints the current mouse location. |
| PRINT-COLOR, PC:x,y | prints the color of the pixel at the given coordinates. |
| [integer] | moves the mouse in the current direction by this amount. Example: `right 50` == move the mouse 50 pixels to the right. |
