// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "plugin",
  id: "skymen_better_input_manager",
  name: "Better Input Manager",
  version: "1.0.0.3",
  category: "input",
  author: "skymen",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description: "An improved input manager",
  type: "object",
  additionalFiles: [],
  info: {
    Set: {
      IsResizable: false,
      IsRotatable: false,
      Is3D: false,
      HasImage: false,
      DefaultImageURL: null,
      IsTiled: false,
      IsDeprecated: false,
      IsSingleGlobal: true,
      SupportsZElevation: false,
      SupportsColor: false,
      SupportsEffects: false,
      MustPreDraw: false,
      CanBeBundled: true,
    },
    AddCommonACEs: {
      Position: false,
      SceneGraph: false,
      Size: false,
      Angle: false,
      Appearance: false,
      ZOrder: false,
    },
  },
  properties: [
    {
      type: "float",
      id: "default-axis-deadzone",
      value: 0.2,
      options: {
        interpolatable: false,
      },
      name: "Default Axis Deadzone",
      desc: "A value between 0 and 1 that determines the default deadzone for all axes",
    },
    {
      type: "float",
      id: "default-joystick-deadzone",
      value: 0.2,
      options: {
        interpolatable: false,
      },
      name: "Default Joystick Deadzone",
      desc: "A value between 0 and 1 that determines the default deadzone for all joysticks",
    },
    {
      type: "text",
      id: "default-control-scheme",
      value: "",
      options: {
        interpolatable: false,
      },
      name: "Default Control Scheme",
      desc: "The default control scheme to use",
    },
    {
      type: "check",
      id: "auto-switch-control-scheme",
      value: true,
      options: {
        interpolatable: false,
      },
      name: "Auto Switch Control Scheme",
      desc: "Whether to automatically switch control schemes when the user inputs a new control scheme",
    },
  ],
  aceCategories: {
    digital: "Digital",
    analog: "Analog",
    simulate: "Simulate",
    control: "Control Scheme",
    general: "General",
    wire: "Wire",
  },
  Acts: {
    SetDownInput: {
      category: "digital",
      forward: "_SetDownInput",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "control-scheme",
          name: "Control Scheme",
          desc: "The control scheme ID",
          type: "string",
          value: "",
        },
        {
          id: "prevent-auto-switch",
          name: "Prevent Auto Switch",
          desc: "Whether to prevent the control scheme from automatically switching",
          type: "boolean",
          value: false,
        },
      ],
      listName: "Set Down Input",
      displayText:
        "Set down input [i]{0}[/i] for player [i]{1}[/i] with control scheme [i]{2}[/i] (prevent auto switch: [i]{3}[/i])",
      description: "Set an input to a down state",
    },
    SetUpInput: {
      category: "digital",
      forward: "_SetUpInput",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "control-scheme",
          name: "Control Scheme",
          desc: "The control scheme ID",
          type: "string",
          value: "",
        },
      ],
      listName: "Set Up Input",
      displayText:
        "Set up input [i]{0}[/i] for player [i]{1}[/i] with control scheme [i]{2}[/i]",
      description: "Set an input to an up state",
    },
    SimulateDownInput: {
      category: "digital",
      forward: "_SimulateDownInput",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Simulate Down Input",
      displayText: "Simulate down input [i]{0}[/i] for player [i]{1}[/i]",
      description:
        "This only triggers the down event, it does not set the input to a down state",
    },
    SimulateUpInput: {
      category: "digital",
      forward: "_SimulateUpInput",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Simulate Up Input",
      displayText: "Simulate up input [i]{0}[/i] for player [i]{1}[/i]",
      description:
        "This only triggers the up event, it does not set the input to an up state",
    },
    SetAxisValue: {
      category: "analog",
      forward: "_SetAxisValue",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "value",
          name: "Value",
          desc: "The value of the axis from -1 to 1",
          type: "number",
          value: 0,
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "control-scheme",
          name: "Control Scheme",
          desc: "The control scheme ID",
          type: "string",
          value: "",
        },
        {
          id: "prevent-auto-switch",
          name: "Prevent Auto Switch",
          desc: "Whether to prevent the control scheme from automatically switching",
          type: "boolean",
          value: false,
        },
      ],
      listName: "Set Axis Value",
      displayText:
        "Set axis [i]{0}[/i] to [i]{1}[/i] for player [i]{2}[/i] with control scheme [i]{3}[/i] (prevent auto switch: [i]{4}[/i])",
      description: "Set an axis to a value",
    },
    SetJoystickValue: {
      category: "analog",
      forward: "_SetJoystickValue",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "x",
          name: "X",
          desc: "The X value of the joystick from -1 to 1",
          type: "number",
          value: 0,
        },
        {
          id: "y",
          name: "Y",
          desc: "The Y value of the joystick from -1 to 1",
          type: "number",
          value: 0,
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "control-scheme",
          name: "Control Scheme",
          desc: "The control scheme ID",
          type: "string",
          value: "",
        },
        {
          id: "prevent-auto-switch",
          name: "Prevent Auto Switch",
          desc: "Whether to prevent the control scheme from automatically switching",
          type: "boolean",
          value: false,
        },
      ],
      listName: "Set Joystick Value",
      displayText:
        "Set joystick [i]{0}[/i] to [i]{1}[/i], [i]{2}[/i] for player [i]{3}[/i] with control scheme [i]{4}[/i] (prevent auto switch: [i]{5}[/i])",
      description: "Set a joystick to a value",
    },
    SetJoystickValueX: {
      category: "analog",
      forward: "_SetJoystickValueX",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "value",
          name: "Value",
          desc: "The value of the joystick from -1 to 1",
          type: "number",
          value: 0,
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "control-scheme",
          name: "Control Scheme",
          desc: "The control scheme ID",
          type: "string",
          value: "",
        },
        {
          id: "prevent-auto-switch",
          name: "Prevent Auto Switch",
          desc: "Whether to prevent the control scheme from automatically switching",
          type: "boolean",
          value: false,
        },
      ],
      listName: "Set Joystick Value X",
      displayText:
        "Set joystick [i]{0}[/i] X to [i]{1}[/i] for player [i]{2}[/i] with control scheme [i]{3}[/i] (prevent auto switch: [i]{4}[/i])",
      description: "Set a joystick X value",
    },
    SetJoystickValueY: {
      category: "analog",
      forward: "_SetJoystickValueY",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "value",
          name: "Value",
          desc: "The value of the joystick from -1 to 1",
          type: "number",
          value: 0,
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "control-scheme",
          name: "Control Scheme",
          desc: "The control scheme ID",
          type: "string",
          value: "",
        },
        {
          id: "prevent-auto-switch",
          name: "Prevent Auto Switch",
          desc: "Whether to prevent the control scheme from automatically switching",
          type: "boolean",
          value: false,
        },
      ],
      listName: "Set Joystick Value Y",
      displayText:
        "Set joystick [i]{0}[/i] Y to [i]{1}[/i] for player [i]{2}[/i] with control scheme [i]{3}[/i] (prevent auto switch: [i]{4}[/i])",
      description: "Set a joystick Y value",
    },
    SetControlScheme: {
      category: "control",
      forward: "_SetControlScheme",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "control-scheme",
          name: "Control Scheme",
          desc: "The control scheme ID",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Set Control Scheme",
      displayText: "Set control scheme [i]{0}[/i] for player [i]{1}[/i]",
      description: "Switch to a control scheme",
    },
    SetAutoSwitchControlScheme: {
      category: "control",
      forward: "_SetAutoSwitchControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: -1,
        },
        {
          id: "enabled",
          name: "Enabled",
          desc: "Whether auto switch is enabled",
          type: "boolean",
          value: true,
        },
      ],
      listName: "Set Auto Switch Control Scheme",
      displayText: "Set auto switch to [i]{1}[/i] for player [i]{0}[/i]",
      description: "Enable or disable auto switch",
    },
    SetDefaultAxisDeadzone: {
      category: "analog",
      forward: "_SetDefaultAxisDeadzone",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "deadzone",
          name: "Deadzone",
          desc: "The default deadzone for all axes",
          type: "number",
          value: 0.2,
        },
      ],
      listName: "Set Default Axis Deadzone",
      displayText: "Set default axis deadzone to [i]{0}[/i]",
      description:
        "Set the default deadzone for all axes that don't have a custom deadzone set",
    },
    SetDefaultJoystickDeadzone: {
      category: "analog",
      forward: "_SetDefaultJoystickDeadzone",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "deadzone",
          name: "Deadzone",
          desc: "The default deadzone for all joysticks",
          type: "number",
          value: 0.2,
        },
      ],
      listName: "Set Default Joystick Deadzone",
      displayText: "Set default joystick deadzone to [i]{0}[/i]",
      description:
        "Set the default deadzone for all joysticks that don't have a custom deadzone set",
    },
    SetAxisDeadzone: {
      category: "analog",
      forward: "_SetAxisDeadzone",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "deadzone",
          name: "Deadzone",
          desc: "The deadzone for the axis (0-1). Negative value to use default deadzone",
          type: "number",
          value: 0.2,
        },
      ],
      listName: "Set Axis Deadzone",
      displayText: "Set axis [i]{0}[/i] deadzone to [i]{1}[/i]",
      description: "Set the deadzone for an axis",
    },
    SetJoystickDeadzone: {
      category: "analog",
      forward: "_SetJoystickDeadzone",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "deadzone",
          name: "Deadzone",
          desc: "The deadzone for the joystick (0-1). Negative value to use default deadzone",
          type: "number",
          value: 0.2,
        },
      ],
      listName: "Set Joystick Deadzone",
      displayText: "Set joystick [i]{0}[/i] deadzone to [i]{1}[/i]",
      description: "Set the deadzone for a joystick",
    },
    WireTo: {
      category: "wire",
      forward: "_WireTo",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the wire",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Map Wire To Player",
      displayText: "Map wire [i]{0}[/i] to player [i]{1}[/i]",
      description: "Map a wire to a player",
    },
  },
  Cnds: {
    IsDown: {
      category: "digital",
      forward: "_IsDown",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Is Down",
      displayText: "Is [i]{0}[/i] down for player [i]{1}[/i]",
      description: "Test if an input is down",
    },
    IsAnyDown: {
      category: "digital",
      forward: "_IsAnyDown",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Is Any Down",
      displayText: "Is any input down for player [i]{0}[/i]",
      description: "Test if any input is down",
    },
    IsDownControlScheme: {
      category: "digital",
      forward: "_IsDownControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "controlScheme",
          name: "Control Scheme",
          desc: "The control scheme to test",
          type: "string",
          value: "",
        },
      ],
      listName: "Is Down For Control Scheme",
      displayText:
        "Is [i]{0}[/i] down for player [i]{1}[/i] with control scheme [i]{2}[/i]",
      description: "Test if an input is down for a specific control scheme",
    },
    IsAnyDownControlScheme: {
      category: "digital",
      forward: "_IsAnyDownControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "controlScheme",
          name: "Control Scheme",
          desc: "The control scheme to test",
          type: "string",
          value: "",
        },
      ],
      listName: "Is Any Down For Control Scheme",
      displayText:
        "Is any input down for player [i]{0}[/i] with control scheme [i]{1}[/i]",
      description: "Test if any input is down for a specific control scheme",
    },
    OnDown: {
      category: "digital",
      forward: "_OnDown",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      isTrigger: true,
      listName: "On Down",
      displayText: "On [i]{0}[/i] down for player [i]{1}[/i]",
      description: "Trigger an event when an input is pressed down",
    },
    OnUp: {
      category: "digital",
      forward: "_OnUp",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the input",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      isTrigger: true,
      listName: "On Up",
      displayText: "On [i]{0}[/i] up for player [i]{1}[/i]",
      description: "Trigger an event when an input is released",
    },
    OnAnyDown: {
      category: "digital",
      forward: "_OnAnyDown",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      isTrigger: true,
      listName: "On Any Down",
      displayText: "On any input down for player [i]{0}[/i]",
      description: "Trigger an event when any input is pressed down",
    },
    OnAnyUp: {
      category: "digital",
      forward: "_OnAnyUp",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      isTrigger: true,
      listName: "On Any Up",
      displayText: "On any input up for player [i]{0}[/i]",
      description: "Trigger an event when any input is released",
    },
    IsControlSchemeEnabled: {
      category: "control",
      forward: "_IsControlSchemeEnabled",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the control scheme",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Is Control Scheme Enabled",
      displayText: "Is control scheme [i]{0}[/i] enabled for player [i]{1}[/i]",
      description: "Test if a control scheme is enabled",
    },
    IsAxisOutsideDeadzone: {
      category: "analog",
      forward: "_IsAxisOutsideDeadzone",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the axis",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Is Axis Outside Deadzone",
      displayText: "Is axis [i]{0}[/i] outside deadzone for player [i]{1}[/i]",
      description: "Test if an axis is outside its deadzone",
    },
    IsAxisOutsideDeadzoneControlScheme: {
      category: "analog",
      forward: "_IsAxisOutsideDeadzoneControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the axis",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "controlScheme",
          name: "Control Scheme",
          desc: "The control scheme to test",
          type: "string",
          value: "",
        },
      ],
      listName: "Is Axis Outside Deadzone For Control Scheme",
      displayText:
        "Is axis [i]{0}[/i] outside deadzone for player [i]{1}[/i] and control scheme [i]{2}[/i]",
      description:
        "Test if an axis is outside its deadzone for a control scheme",
    },
    IsAnyAxisOutsideDeadzone: {
      category: "analog",
      forward: "_IsAnyAxisOutsideDeadzone",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Is Any Axis Outside Deadzone",
      displayText: "Is any axis outside deadzone for player [i]{0}[/i]",
      description: "Test if any axis is outside its deadzone",
    },
    IsAnyAxisOutsideDeadzoneControlScheme: {
      category: "analog",
      forward: "_IsAnyAxisOutsideDeadzoneControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "controlScheme",
          name: "Control Scheme",
          desc: "The control scheme to test",
          type: "string",
          value: "",
        },
      ],
      listName: "Is Any Axis Outside Deadzone For Control Scheme",
      displayText:
        "Is any axis outside deadzone for player [i]{0}[/i] and control scheme [i]{1}[/i]",
      description:
        "Test if any axis is outside its deadzone for a control scheme",
    },
    IsJoystickOutsideDeadzone: {
      category: "analog",
      forward: "_IsJoystickOutsideDeadzone",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Is Joystick Outside Deadzone",
      displayText:
        "Is joystick [i]{0}[/i] outside deadzone for player [i]{1}[/i]",
      description: "Test if a joystick is outside its deadzone",
    },
    IsJoystickOutsideDeadzoneControlScheme: {
      category: "analog",
      forward: "_IsJoystickOutsideDeadzoneControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "controlScheme",
          name: "Control Scheme",
          desc: "The control scheme to test",
          type: "string",
          value: "",
        },
      ],
      listName: "Is Joystick Outside Deadzone For Control Scheme",
      displayText:
        "Is joystick [i]{0}[/i] outside deadzone for player [i]{1}[/i] and control scheme [i]{2}[/i]",
      description:
        "Test if a joystick is outside its deadzone for a control scheme",
    },
    IsAnyJoystickOutsideDeadzone: {
      category: "analog",
      forward: "_IsAnyJoystickOutsideDeadzone",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
      ],
      listName: "Is Any Joystick Outside Deadzone",
      displayText: "Is any joystick outside deadzone for player [i]{0}[/i]",
      description: "Test if any joystick is outside its deadzone",
    },
    IsAnyJoystickOutsideDeadzoneControlScheme: {
      category: "analog",
      forward: "_IsAnyJoystickOutsideDeadzoneControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID, -1 for all players",
          type: "number",
          value: 0,
        },
        {
          id: "controlScheme",
          name: "Control Scheme",
          desc: "The control scheme to test",
          type: "string",
          value: "",
        },
      ],
      listName: "Is Any Joystick Outside Deadzone For Control Scheme",
      displayText:
        "Is any joystick outside deadzone for player [i]{0}[/i] and control scheme [i]{1}[/i]",
      description:
        "Test if any joystick is outside its deadzone for a control scheme",
    },
  },
  Exps: {
    LastInput: {
      category: "digital",
      forward: "_GetLastInput",
      autoScriptInterface: true,
      highlight: false,
      params: [],
      returnType: "string",
      description: "Get the name of the last input from trigger",
    },
    LastPlayer: {
      category: "digital",
      forward: "_GetLastPlayer",
      autoScriptInterface: true,
      highlight: false,
      params: [],
      returnType: "number",
      description: "Get the ID of the last player from trigger",
    },
    GetAxis: {
      category: "analog",
      forward: "_GetAxis",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the axis",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the value of an axis",
    },
    GetRawAxis: {
      category: "analog",
      forward: "_GetRawAxis",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the axis",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the raw value of an axis",
    },
    GetJoystickX: {
      category: "analog",
      forward: "_GetJoystickX",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the x value of a joystick",
    },
    GetRawJoystickX: {
      category: "analog",
      forward: "_GetRawJoystickX",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the raw x value of a joystick",
    },
    GetJoystickY: {
      category: "analog",
      forward: "_GetJoystickY",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the y value of a joystick",
    },
    GetRawJoystickY: {
      category: "analog",
      forward: "_GetRawJoystickY",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the raw y value of a joystick",
    },
    GetJoystickAngle: {
      category: "analog",
      forward: "_GetJoystickAngle",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the angle of a joystick",
    },
    GetJoystickMagnitude: {
      category: "analog",
      forward: "_GetJoystickMagnitude",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the magnitude of a joystick",
    },
    GetRawJoystickMagnitude: {
      category: "analog",
      forward: "_GetRawJoystickMagnitude",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the joystick",
          type: "string",
          value: "",
        },
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "number",
      description: "Get the raw magnitude of a joystick",
    },
    GetControlScheme: {
      category: "control",
      forward: "_GetControlScheme",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "player",
          name: "Player",
          desc: "The player ID",
          type: "number",
          value: 0,
        },
      ],
      returnType: "string",
      description: "Get the name of the current control scheme",
    },
    WireFrom: {
      category: "wire",
      forward: "_WireFrom",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the wire",
          type: "string",
          value: "",
        },
      ],
      returnType: "number",
      description: "Wire a control scheme to a player using an id",
    },
  },
};
