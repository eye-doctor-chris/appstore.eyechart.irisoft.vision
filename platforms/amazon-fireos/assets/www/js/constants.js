var irisoft = {};

irisoft.constants = {
    
  keyCodes: {
    CENTER_BUTTON: 13,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    PLAY_PAUSE: 0,
    NEXT: 228, //123
    PREVIOUS: 227, //121
    F12: 123,
    F10: 121,
    M: 77,
    B: 66
  },
  chartStates: {
    FULL: 1,
    SINGLE_LINE: 2,
    SINGLE_LETTER: 3
  },
  chartTypes: {
    ICON_CHART: 0,
    SNELLEN_CHART: 1,
    HOTV_CHART: 2,
    TUMBLING_E_CHART: 3,
    TUMBLING_C_CHART: 4,
    NUMBERS_CHART: 5
  },
  pixelsin2020: 0,
  //ICONS_CHART_ARRAY: ['house', 'BdayCake', 'circle', 'house', 'square', 'circle', 'square', 'circle', 'BdayCake', 'house', 'house', 'circle', 'square', 'BdayCake', 'house', 'circle', 'circle', 'square', 'BdayCake', 'house', 'square', 'BdayCake', 'square', 'BdayCake', 'house', 'circle', 'house', 'square', 'BdayCake', 'house', 'circle', 'square', 'circle', 'house', 'BdayCake', 'circle', 'square', 'house', 'BdayCake', 'square', 'square', 'BdayCake', 'circle', 'house', 'BdayCake', 'circle', 'house', 'BdayCake', 'circle', 'square', 'circle', 'BdayCake', 'circle', 'square', 'house', 'BdayCake', 'square', 'circle'],
  //SNELLEN_CHART_ARRAY: ['E', 'Z', 'P', 'F', 'V', 'N', 'P', 'H', 'T', 'C', 'V', 'L', 'N', 'E', 'Z', 'D', 'A', 'O', 'F', 'V', 'E', 'K', 'N', 'D', 'H', 'F', 'Z', 'O', 'D', 'E', 'O', 'F', 'L', 'T', 'C', 'A', 'P', 'E', 'O', 'T', 'T', 'Z', 'V', 'E', 'C', 'O', 'H', 'P', 'N', 'T'],
  //HOTV_CHART_ARRAY: ['H','V','O','H','T','O','T','O','V','H','H','O','T','V','H','O','V','T','V','H','T','V','O','V','H','O','H','T','V','H','O','T','O','H','V','H','T','O','V','T','T','V','O','H','V','V','H','V','O','T'],
  //TUMBLING_E_CHART_ARRAY: ['E1', 'E4', 'E2', 'E1', 'E3', 'E2', 'E3', 'E2', 'E4', 'E1', 'E1', 'E2', 'E3', 'E4', 'E1', 'E2', 'E2', 'E3', 'E4', 'E1', 'E3', 'E4', 'E3', 'E4', 'E1', 'E2', 'E1', 'E3', 'E4', 'E1', 'E2', 'E3', 'E2', 'E1', 'E4', 'E2', 'E3', 'E1', 'E4', 'E3', 'E3', 'E4', 'E2', 'E1', 'E4', 'E2', 'E1', 'E4', 'E2', 'E3', 'E2', 'E4', 'E2', 'E3', 'E1', 'E4', 'E3', 'E2'],
  //NUMBERS_CHART_ARRAY: ['3', '8', '5', '2', '9', '3', '8', '7', '5', '4', '6', '3', '9', '5', '2', '4', '2', '8', '3', '5', '3', '7', '4', '6', '2', '8', '5', '7', '2', '6', '6', '4', '7', '9', '3', '3', '8', '7', '5', '2', '6', '4', '6', '9', '3', '3', '4', '2', '5', '6'],
  //TUMBLING_C_CHART_ARRAY: ['C1', 'C4', 'C2', 'C1', 'C3', 'C2', 'C3', 'C2', 'C4', 'C1', 'C1', 'C2', 'C3', 'C4', 'C1', 'C2', 'C2', 'C3', 'C4', 'C1', 'C3', 'C4', 'C3', 'C4', 'C1', 'C2', 'C1', 'C3', 'C4', 'C1', 'C2', 'C3', 'C2', 'C1', 'C4', 'C2', 'C3', 'C1', 'C4', 'C3', 'C3', 'C4', 'C2', 'C1', 'C4', 'C2', 'C1', 'C4', 'C2', 'C3', 'C2', 'C4', 'C2', 'C3', 'C1', 'C4', 'C3', 'C2'],
  charts: [
    [0,['house', 'BdayCake', 'circle', 'house', 'square', 'circle', 'square', 'circle', 'BdayCake', 'house', 'house', 'circle', 'square', 'BdayCake', 'house', 'circle', 'circle', 'square', 'BdayCake', 'house', 'square', 'BdayCake', 'square', 'BdayCake', 'house', 'circle', 'house', 'square', 'BdayCake', 'house', 'circle', 'square', 'circle', 'house', 'BdayCake', 'circle', 'square', 'house', 'BdayCake', 'square', 'square', 'BdayCake', 'circle', 'house', 'BdayCake', 'circle', 'house', 'BdayCake', 'circle', 'square', 'circle', 'BdayCake', 'circle', 'square', 'house', 'BdayCake', 'square', 'circle'], 
      ['circle', 'BdayCake', 'house', 'square', 'circle', 'house', 'house', 'square', 'circle', 'BdayCake', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house', 'BdayCake', 'square', 'house', 'circle', 'BdayCake', 'square', 'circle', 'house', 'square', 'house', 'circle', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house', 'square', 'BdayCake', 'circle', 'BdayCake', 'square', 'circle', 'house', 'square', 'BdayCake', 'circle', 'house', 'square', 'BdayCake', 'house', 'square', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house'],
      ['square', 'BdayCake', 'circle', 'circle', 'house', 'BdayCake', 'circle', 'house', 'BdayCake', 'square', 'circle', 'square', 'BdayCake', 'house', 'square', 'circle', 'square', 'BdayCake', 'circle', 'house', 'BdayCake', 'square', 'circle', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'circle', 'BdayCake', 'square', 'house', 'BdayCake', 'circle', 'square', 'circle', 'BdayCake', 'house', 'BdayCake', 'square', 'house', 'circle', 'square', 'BdayCake', 'house', 'circle', 'circle', 'square', 'BdayCake', 'house', 'square', 'BdayCake', 'square', 'BdayCake', 'house', 'circle', 'house', 'square'],
      ['BdayCake', 'circle', 'square', 'house', 'circle', 'square', 'BdayCake', 'square', 'house', 'circle', 'square', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'BdayCake', 'house', 'circle', 'square', 'circle', 'house', 'square', 'circle', 'BdayCake', 'house', 'BdayCake', 'square', 'square', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house', 'BdayCake', 'circle', 'house', 'square', 'circle', 'square', 'circle', 'BdayCake', 'house', 'square', 'circle', 'house', 'BdayCake', 'circle', 'square', 'circle', 'BdayCake', 'BdayCake', 'house', 'circle', 'square', 'BdayCake', 'house'],
      ['house', 'house', 'circle', 'BdayCake', 'house', 'circle', 'square', 'BdayCake', 'house', 'circle', 'square', 'circle', 'BdayCake', 'house', 'square', 'circle', 'house', 'BdayCake', 'circle', 'square', 'circle', 'BdayCake', 'BdayCake', 'house', 'circle', 'square', 'BdayCake', 'house', 'circle', 'square', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house', 'square', 'house', 'circle', 'BdayCake', 'house', 'square', 'circle', 'BdayCake', 'house', 'square', 'BdayCake', 'circle', 'BdayCake', 'square', 'circle', 'house', 'square', 'BdayCake']
    ],
    [1,['E', 'Z', 'P', 'F', 'V', 'N', 'P', 'H', 'T', 'C', 'V', 'L', 'N', 'E', 'Z', 'D', 'A', 'O', 'F', 'V', 'E', 'K', 'N', 'D', 'H', 'F', 'Z', 'O', 'D', 'E', 'O', 'F', 'L', 'T', 'C', 'A', 'P', 'E', 'O', 'T', 'T', 'Z', 'V', 'E', 'C', 'O', 'H', 'P', 'N', 'T'], 
      ['F', 'K', 'N', 'C', 'L', 'F', 'F', 'P', 'Z', 'H', 'Z', 'A', 'N', 'V', 'F', 'N', 'C', 'T', 'H', 'P', 'Z', 'E', 'N', 'L', 'V', 'V', 'F', 'O', 'A', 'D', 'H', 'D', 'N', 'K', 'E', 'E', 'D', 'O', 'Z', 'F', 'T', 'C', 'L', 'F', 'P', 'A', 'O', 'T', 'E', 'P'],
      ['P', 'A', 'L', 'O', 'A', 'D', 'E', 'N', 'C', 'T', 'V', 'D', 'O', 'F', 'P', 'Z', 'C', 'N', 'A', 'E', 'C', 'E', 'O', 'K', 'F', 'O', 'P', 'V', 'N', 'E', 'D', 'K', 'O', 'C', 'T', 'P', 'L', 'O', 'D', 'E', 'F', 'V', 'N', 'A', 'Z', 'T', 'C', 'L', 'F', 'O'],
      ['C', 'V', 'Z', 'T', 'C', 'N', 'D', 'H', 'O', 'F', 'N', 'L', 'E', 'V', 'Z', 'T', 'C', 'O', 'K', 'D', 'V', 'D', 'T', 'K', 'E', 'T', 'P', 'H', 'D', 'C', 'C', 'E', 'F', 'K', 'O', 'Z', 'A', 'N', 'V', 'F', 'P', 'H', 'T', 'C', 'N', 'E', 'D', 'O', 'Z', 'F'],
      ['T', 'D', 'N', 'N', 'Z', 'A', 'E', 'K', 'C', 'L', 'V', 'O', 'E', 'K', 'N', 'T', 'H', 'P', 'C', 'D', 'E', 'N', 'V', 'P', 'O', 'T', 'C', 'O', 'K', 'D', 'E', 'K', 'V', 'D', 'T', 'O', 'L', 'P', 'A', 'Z', 'D', 'L', 'N', 'F', 'O', 'H', 'D', 'N', 'K', 'E']
    ],
    [2,['H','V','O','H','T','O','T','O','V','H','H','O','T','V','H','O','V','T','V','H','T','V','O','V','H','O','H','T','V','H','O','T','O','H','V','H','T','O','V','T','T','V','O','H','V','V','H','V','O','T'], 
      ['O', 'V', 'H', 'T', 'O', 'H', 'H', 'T', 'O', 'V', 'V', 'H', 'T', 'O', 'V', 'H', 'T', 'O', 'V', 'H', 'V', 'T', 'H', 'O', 'V', 'T', 'O', 'H', 'T', 'H', 'O', 'V', 'H', 'T', 'O', 'V', 'H', 'T', 'V', 'O', 'V', 'T', 'O', 'H', 'T', 'V', 'O', 'H', 'T', 'V', 'H', 'T', 'V', 'H', 'T', 'O', 'V', 'H'],
      ['T', 'V', 'O', 'O', 'H', 'V', 'O', 'H', 'V', 'T', 'O', 'T', 'V', 'H', 'T', 'O', 'T', 'V', 'O', 'H', 'V', 'T', 'O', 'V', 'H', 'T', 'O', 'V', 'O', 'V', 'T', 'H', 'V', 'O', 'T', 'O', 'V', 'H', 'V', 'T', 'H', 'O', 'T', 'V', 'H', 'O', 'H', 'T', 'V', 'H', 'T', 'V', 'T', 'V', 'H', 'O', 'H', 'T'],
      ['V', 'O', 'T', 'H', 'O', 'T', 'V', 'T', 'H', 'O', 'T', 'V', 'H', 'T', 'O', 'V', 'V', 'H', 'O', 'T', 'O', 'H', 'T', 'O', 'V', 'H', 'V', 'T', 'T', 'V', 'H', 'T', 'O', 'V', 'H', 'V', 'O', 'H', 'T', 'O', 'T', 'O', 'V', 'H', 'T', 'O', 'H', 'V', 'O', 'T', 'O', 'V', 'V', 'H', 'O', 'T', 'V', 'H'],
      ['H', 'H', 'O', 'V', 'H', 'O', 'T', 'V', 'H', 'O', 'T', 'O', 'V', 'H', 'T', 'O', 'H', 'V', 'O', 'T', 'O', 'V', 'V', 'H', 'O', 'T', 'V', 'H', 'O', 'T', 'V', 'H', 'T', 'O', 'V', 'H', 'T', 'O', 'V', 'H', 'T', 'H', 'O', 'V', 'H', 'T', 'O', 'V', 'H', 'T', 'V', 'O', 'V', 'T', 'O', 'H', 'T', 'V']
    ],
    [3,['E1', 'E4', 'E2', 'E1', 'E3', 'E2', 'E3', 'E2', 'E4', 'E1', 'E1', 'E2', 'E3', 'E4', 'E1', 'E2', 'E2', 'E3', 'E4', 'E1', 'E3', 'E4', 'E3', 'E4', 'E1', 'E2', 'E1', 'E3', 'E4', 'E1', 'E2', 'E3', 'E2', 'E1', 'E4', 'E2', 'E3', 'E1', 'E4', 'E3', 'E3', 'E4', 'E2', 'E1', 'E4', 'E2', 'E1', 'E4', 'E2', 'E3', 'E2', 'E4', 'E2', 'E3', 'E1', 'E4', 'E3', 'E2'], 
      ['E2', 'E4', 'E1', 'E3', 'E2', 'E1', 'E1', 'E3', 'E2', 'E4', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1', 'E4', 'E3', 'E1', 'E2', 'E4', 'E3', 'E2', 'E1', 'E3', 'E1', 'E2', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1', 'E3', 'E4', 'E2', 'E4', 'E3', 'E2', 'E1', 'E3', 'E4', 'E2', 'E1', 'E3', 'E4', 'E1', 'E3', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1'],
      ['E3', 'E4', 'E2', 'E2', 'E1', 'E4', 'E2', 'E1', 'E4', 'E3', 'E2', 'E3', 'E4', 'E1', 'E3', 'E2', 'E3', 'E4', 'E2', 'E1', 'E4', 'E3', 'E2', 'E4', 'E1', 'E3', 'E2', 'E4', 'E2', 'E4', 'E3', 'E1', 'E4', 'E2', 'E3', 'E2', 'E4', 'E1', 'E4', 'E3', 'E1', 'E2', 'E3', 'E4', 'E1', 'E2', 'E2', 'E3', 'E4', 'E1', 'E3', 'E4', 'E3', 'E4', 'E1', 'E2', 'E1', 'E3'],
      ['E4', 'E2', 'E3', 'E1', 'E2', 'E3', 'E4', 'E3', 'E1', 'E2', 'E3', 'E4', 'E1', 'E3', 'E2', 'E4', 'E4', 'E1', 'E2', 'E3', 'E2', 'E1', 'E3', 'E2', 'E4', 'E1', 'E4', 'E3', 'E3', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1', 'E4', 'E2', 'E1', 'E3', 'E2', 'E3', 'E2', 'E4', 'E1', 'E3', 'E2', 'E1', 'E4', 'E2', 'E3', 'E2', 'E4', 'E4', 'E1', 'E2', 'E3', 'E4', 'E1'],
      ['E1', 'E1', 'E2', 'E4', 'E1', 'E2', 'E3', 'E4', 'E1', 'E2', 'E3', 'E2', 'E4', 'E1', 'E3', 'E2', 'E1', 'E4', 'E2', 'E3', 'E2', 'E4', 'E4', 'E1', 'E2', 'E3', 'E4', 'E1', 'E2', 'E3', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1', 'E3', 'E1', 'E2', 'E4', 'E1', 'E3', 'E2', 'E4', 'E1', 'E3', 'E4', 'E2', 'E4', 'E3', 'E2', 'E1', 'E3', 'E4']
    ],
    [4,['C1', 'C4', 'C2', 'C1', 'C3', 'C2', 'C3', 'C2', 'C4', 'C1', 'C1', 'C2', 'C3', 'C4', 'C1', 'C2', 'C2', 'C3', 'C4', 'C1', 'C3', 'C4', 'C3', 'C4', 'C1', 'C2', 'C1', 'C3', 'C4', 'C1', 'C2', 'C3', 'C2', 'C1', 'C4', 'C2', 'C3', 'C1', 'C4', 'C3', 'C3', 'C4', 'C2', 'C1', 'C4', 'C2', 'C1', 'C4', 'C2', 'C3', 'C2', 'C4', 'C2', 'C3', 'C1', 'C4', 'C3', 'C2'], 
      ['C2', 'C4', 'C1', 'C3', 'C2', 'C1', 'C1', 'C3', 'C2', 'C4', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1', 'C4', 'C3', 'C1', 'C2', 'C4', 'C3', 'C2', 'C1', 'C3', 'C1', 'C2', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1', 'C3', 'C4', 'C2', 'C4', 'C3', 'C2', 'C1', 'C3', 'C4', 'C2', 'C1', 'C3', 'C4', 'C1', 'C3', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1'],
      ['C3', 'C4', 'C2', 'C2', 'C1', 'C4', 'C2', 'C1', 'C4', 'C3', 'C2', 'C3', 'C4', 'C1', 'C3', 'C2', 'C3', 'C4', 'C2', 'C1', 'C4', 'C3', 'C2', 'C4', 'C1', 'C3', 'C2', 'C4', 'C2', 'C4', 'C3', 'C1', 'C4', 'C2', 'C3', 'C2', 'C4', 'C1', 'C4', 'C3', 'C1', 'C2', 'C3', 'C4', 'C1', 'C2', 'C2', 'C3', 'C4', 'C1', 'C3', 'C4', 'C3', 'C4', 'C1', 'C2', 'C1', 'C3'],
      ['C4', 'C2', 'C3', 'C1', 'C2', 'C3', 'C4', 'C3', 'C1', 'C2', 'C3', 'C4', 'C1', 'C3', 'C2', 'C4', 'C4', 'C1', 'C2', 'C3', 'C2', 'C1', 'C3', 'C2', 'C4', 'C1', 'C4', 'C3', 'C3', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1', 'C4', 'C2', 'C1', 'C3', 'C2', 'C3', 'C2', 'C4', 'C1', 'C3', 'C2', 'C1', 'C4', 'C2', 'C3', 'C2', 'C4', 'C4', 'C1', 'C2', 'C3', 'C4', 'C1'],
      ['C1', 'C1', 'C2', 'C4', 'C1', 'C2', 'C3', 'C4', 'C1', 'C2', 'C3', 'C2', 'C4', 'C1', 'C3', 'C2', 'C1', 'C4', 'C2', 'C3', 'C2', 'C4', 'C4', 'C1', 'C2', 'C3', 'C4', 'C1', 'C2', 'C3', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1', 'C3', 'C1', 'C2', 'C4', 'C1', 'C3', 'C2', 'C4', 'C1', 'C3', 'C4', 'C2', 'C4', 'C3', 'C2', 'C1', 'C3', 'C4']
    ],
    [5,['3', '8', '5', '2', '9', '3', '8', '7', '5', '4', '6', '3', '9', '5', '2', '4', '2', '8', '3', '5', '3', '7', '4', '6', '2', '8', '5', '7', '2', '6', '6', '4', '7', '9', '3', '3', '8', '7', '5', '2', '6', '4', '6', '9', '3', '3', '4', '2', '5', '6'], 
      ['4', '7', '6', '8', '2', '7', '8', '7', '5', '2', '8', '5', '6', '3', '7', '3', '9', '7', '4', '6', '4', '6', '7', '9', '3', '8', '5', '3', '4', '6', '7', '3', '6', '8', '5', '3', '2', '6', '9', '5', '6', '7', '3', '2', '4', '2', '5', '3', '8', '7'],
      ['7', '9', '5', '8', '7', '4', '2', '8', '4', '3', '7', '5', '9', '6', '2', '3', '2', '7', '9', '5', '8', '6', '4', '5', '3', '9', '4', '2', '8', '3', '7', '3', '6', '5', '8', '8', '5', '4', '6', '3', '8', '3', '4', '7', '6', '4', '8', '2', '6', '3'],
      ['5', '3', '7', '3', '4', '2', '6', '4', '5', '9', '2', '6', '4', '7', '3', '4', '6', '3', '5', '8', '3', '7', '6', '8', '5', '5', '9', '7', '3', '2', '3', '9', '7', '6', '4', '6', '2', '7', '5', '8', '8', '3', '9', '4', '5', '2', '5', '6', '9', '3'],
      ['6', '5', '2', '5', '6', '4', '3', '4', '7', '6', '3', '8', '2', '4', '9', '2', '3', '8', '9', '5', '7', '3', '5', '6', '8', '8', '6', '4', '3', '5', '7', '5', '9', '6', '2', '3', '7', '8', '5', '6', '2', '4', '5', '6', '3', '3', '8', '5', '6', '2']
    ]

  ]
}
