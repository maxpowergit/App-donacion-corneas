import { StyleSheet, StatusBar } from 'react-native'

import { colores } from '../Base'

export default StyleSheet.create({
  centrado: {
    alignItems: 'center',
    backgroundColor: colores.terciario,
    flex: 1,
    justifyContent: 'center',
    margin: 8,
    marginTop: StatusBar.currentHeight + 8
  },
  icono: {
    color: colores.secundario,
    fontSize: 150,
    padding: '10%'
  }
})
