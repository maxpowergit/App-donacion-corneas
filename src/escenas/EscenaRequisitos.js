import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

import mapaRequisitos from '../lib/mapaRequisitos.js'
import HeaderDefault from '../componentes/HeaderDefault.js'
import PreguntaRequisitos from '../componentes/PreguntaRequisitos.js'

class EscenaRequisitos extends Component {

  static navigationOptions = ({ navigation }) => {
    return ({
      header: <HeaderDefault texto={ navigation.state.routeName } />
    })
  }

  componentDidUpdate() {
    const { requisitosCumplidos, donacionImposible, navigation } = this.props
    const { navigate } = navigation

    if (donacionImposible) {
      Alert.alert(
        'Requisitos',
        'Todos los requisitos son necesarios. La donación no es viable.',
      )
    }

    if (requisitosCumplidos) {
      Alert.alert(
        'Requisitos',
        'Todos los requisitos fueron cumplidos.',
        [
          { text: 'CONTINUAR', onPress: () => navigate('Contraindicaciones') }
        ]
      )
    }
  }

  render() {
    const { cumplirRequisito, requisitos } = this.props

    const preguntas = Object.keys(mapaRequisitos).map(llave => (
      <PreguntaRequisitos
        key={ llave }
        llave={ llave }
        texto={ mapaRequisitos[llave] }
        cumplir={ () => cumplirRequisito(llave, true) }
        incumplir={ () => cumplirRequisito(llave, false) }
        cumplido = { requisitos[llave] }
      />
    ))

    return (
      <Container>
        <View flex= { 1 } style= {estilos.contenedorPreguntas}>
          { preguntas }
        </View>
      </Container>
    )
  }
}

const estilos = StyleSheet.create({
  contenedorPreguntas: {
    justifyContent: 'space-around',
    padding: 8,
  },
})

const mapStateToProps = ({ requisitos }) => {
  const donacionImposible = Object.values(requisitos).some((requisito) => !requisito)
  const requisitosCumplidos = Object.values(requisitos).length == 4 &&
    Object.values(requisitos).every((requisito) => requisito)

  return ({
    requisitos,
    donacionImposible,
    requisitosCumplidos
  })
}

const mapDispatchToProps = dispatch => ({
  //TODO Convertir a JS del futuro.
  cumplirRequisito: (llave, valor) => {
    dispatch({ type: 'REQUISITO_CUMPLIDO', llave: llave, valor: valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaRequisitos)
