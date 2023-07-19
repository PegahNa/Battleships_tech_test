```mermaid
flowchart TD;

Start[Start] --> EnterCommands{Enter commands}

EnterCommands -->|Place Ship| PlaceShip(Place Ship)
EnterCommands -->|Fire Shot| FireShot(Fire Shot)
EnterCommands -->|Exit| ExitGame(Exit)

PlaceShip -->|Valid Placement| ValidatePlacement
ValidatePlacement -->|Invalid| DisplayInvalidPlacementMessage
ValidatePlacement -->|Valid| AddShip(Add Ship)

AddShip --> UpdateBoard(Update Board)
UpdateBoard -->|All Ships Placed?| AllShipsPlaced(All Ships Placed)

FireShot -->|Valid Shot| ValidateShot
ValidateShot -->|Miss| DisplayMissMessage
ValidateShot -->|Hit| DisplayHitMessage
ValidateShot -->|Sunk| DisplaySunkMessage
ValidateShot -->|Invalid| DisplayInvalidShotMessage

```

1. Start: The game begins at the "Start" node.<br><br>

2. Enter Commands: The player is prompted to enter commands. They have three options:<br>

Place Ship: If the player selects "Place Ship," they move to the "PlaceShip" step.<br>
Fire Shot: If the player selects "Fire Shot," they move to the "FireShot" step.<br>
Exit: If the player selects "Exit," the game ends at the "ExitGame" step.<br><br>

3. Place Ship: If the player chooses to place a ship, they move to the "PlaceShip" step. Here, the placement of the ship is validated.<br>

Valid Placement: If the placement is valid, the game moves to the "ValidatePlacement" step.<br>
Invalid Placement: If the placement is invalid, the game displays an "Invalid Placement" message and returns to the "PlaceShip" step.<br> 4. Validate Placement: At this step, the placement of the ship is validated.<br>

Invalid: If the placement is invalid, the game displays an "Invalid Placement" message and returns to the "PlaceShip" step.<br>
Valid: If the placement is valid, the ship is added to the game board, and the game progresses.<br><br>

5. Fire Shot: If the player chooses to fire a shot, they move to the "FireShot" step. Here, the shot is validated.

Valid Shot: If the shot is valid, the game moves to the "ValidateShot" step.<br>
Invalid Shot: If the shot is invalid, the game displays an "Invalid Shot" message and returns to the "FireShot" step.<br><br>

6. Validate Shot: At this step, the shot is validated.<br>

Miss: If the shot is a miss, the game displays a "Miss" message and returns to the "FireShot" step.<br>
Hit: If the shot is a hit, the game displays a "Hit" message and returns to the "FireShot" step.<br>
Sunk: If the shot results in sinking a ship, the game displays a "Sunk" message and returns to the "FireShot" step.<br>
