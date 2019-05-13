import React from 'react'
import PropTypes from 'prop-types'
import { Form, Icon } from 'native-base'
import { connect } from 'react-redux'

import IngresarTelefono from '../componentes/IngresarTelefono'
import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'

import estilos from '../estilos/escenas/Telefono'

const Telefono = ({ navigation, telefono, guardarTelefono }) => {
  const botonFooter = (
    <BotonFooter
      texto="Confirmar"
      onPress={ () => navigation.goBack() }
    />
  )

  return (
    <Escena
      navigation={ navigation }
      footer={ botonFooter }
      contentContainerStyle={ estilos.centrado }
    >
      <Form style={ estilos.centrado }>
        <Icon
          name="call"
          style={ estilos.icono }
        />

        <IngresarTelefono
          guardarTelefono={ guardarTelefono }
          telefono={ telefono }
          floatingLabel={ false }
          autoFocus
        />
      </Form>
    </Escena>
  )
}

Telefono.propTypes = {
  guardarTelefono: PropTypes.func.isRequired,
  telefono: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ telefono }) => ({
  telefono
})

const mapDispatchToProps = dispatch => ({
  guardarTelefono: (telefono) => {
    dispatch({ type: 'GUARDAR_TELEFONO', telefono })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Telefono)
