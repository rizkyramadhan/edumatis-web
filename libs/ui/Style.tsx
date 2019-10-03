import { Dimensions, StyleSheet, Platform } from 'react-native';
const inputSpacing = 12;
const fontSize = 14;

export const ResponsiveHandler = (obs: any) => {
  const handler = () => {
    obs.width = Dimensions.get('window').width;
  };
  return () => {
    Dimensions.addEventListener('change', handler);
    handler();
    return () => {
      Dimensions.removeEventListener('change', handler);
    };
  };
};

export const Responsive = (
  style: {
    xs?: any; // <= 410 pt	phones
    sm?: any; // >= 411 pt	large phones
    md?: any; // >= 568 pt	phones - landscape
    lg?: any; // >= 768 pt	tablets
    xl?: any; // >= 1024 pt	tablets - landscape, large tablets
    xxl?: any; // >= 1280 pt	large tablets - landscape
  },
  width: number
) => {
  const styleKeys = Object.keys(style);
  const firstKey = styleKeys[0];
  const first = (style as any)[firstKey];

  if (width <= 410) {
    return style.xs || first;
  } else if (width >= 411 && width <= 567) {
    return style.sm || style.xs || first;
  } else if (width >= 568 && width <= 767) {
    return style.md || style.sm || style.xs || first;
  } else if (width >= 768 && width <= 1023) {
    return style.lg || style.md || style.sm || style.xs || first;
  } else if (width >= 1024 && width <= 1279) {
    return style.xl || style.lg || style.md || style.sm || style.xs || first;
  } else if (width >= 1280) {
    return (
      style.xxl ||
      style.xl ||
      style.lg ||
      style.md ||
      style.sm ||
      style.xs ||
      first
    );
  }

  return first;
};

export const S = (...style: any[]) => {
  return { ...StyleSheet.flatten(style) };
};

export const St = StyleSheet.create({
  Field: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff'
  },
  FieldActive: {
    borderColor: '#bf151c'
  },
  Label: {
    position: 'absolute',
    top: 6,
    fontSize: 13,
    color: '#666'
  },
  SubLabel: {
    fontSize: 12,
    color: '#999'
  },
  LabelFocus: {
    position: 'absolute',
    fontSize: 13,
    left: -4,
    transform: [{ translateY: -17 }, { scaleY: 1 }],
    backgroundColor: '#fff',
    color: '#666',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5
  },
  LabelActive: {
    color: '#bf151c'
  },
  TextInput: {
    fontSize: 14,
    lineHeight: 30,
    outline: 'none'
  },
  Button: {
    shadowColor: '#bf151c',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  ButtonLabel: {
    fontSize: fontSize,
    padding: 8,
    paddingLeft: 8,
    paddingRight: 8
  },
  ButtonLabelSmall: {
    fontSize: 12,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8
  },
  ButtonLabelLarge: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  ButtonLabelSolid: {
    color: '#fff'
  },
  ButtonLabelClear: {
    color: '#bf151c'
  },
  ButtonBlock: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5
  },
  ButtonFull: {
    width: '100%'
  },
  ButtonSolid: {
    backgroundColor: '#bf151c'
  },
  ButtonClear: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },
  ButtonOutline: {
    borderColor: '#bf151c',
    borderWidth: 1
  },
  Select2: {
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  SelectHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ccc'
  },
  SelectList: {},
  SelectItem: {
    margin: 0,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    elevation: 0
  },
  SelectItemLabel: {
    color: '#bf151c',
    fontSize: 18
  },
  LabelHidden: {
    display: 'none'
  },
  SelectLabel: {
    width: '100%',
    marginRight: -15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5
  },
  SelectLabelActive: {
    color: '#000'
  },
  SelectIcon: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  Modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090',
    height: '100%'
  },
  ModalView: {
    display: 'flex',
    height: '50%',
    width: '95%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: 10
  },
  ModalHeader: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalContent: {
    paddingBottom: 10,
    height: '80%'
  },
  ModalFooter: {
    paddingLeft: 10,
    paddingRight: 10,
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  Card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    minHeight: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },

  Row: {
    flexDirection: 'row'
  },
  Col1: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing) + '%'
  },
  Col2: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 2) + '%'
  },
  Col3: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 3) + '%'
  },
  Col4: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 4) + '%'
  },
  Col5: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 5) + '%'
  },
  Col6: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 6) + '%'
  },
  Col7: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 7) + '%'
  },
  Col8: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 8) + '%'
  },
  Col9: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 9) + '%'
  },
  Col10: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 10) + '%'
  },
  Col11: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * 11) + '%'
  },
  ColinputSpacing: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round((100 / inputSpacing) * inputSpacing) + '%'
  },
  Table: {
    flex: 1,
    padding: 16,
    paddingTop: 30
  },
  TableHead: {
    height: 50,
    backgroundColor: '#537791',
    fontWeight: '100'
  },
  TableRow: {
    height: 40,
    backgroundColor: '#fff',
    fontWeight: '80'
  },
  TableWrapper: {
    marginTop: -1
  }
});
