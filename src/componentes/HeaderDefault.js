import React from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Body, Right, Button, Icon, Text } from 'native-base'
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu'

import estilos from '../estilos/componentes/HeaderDefault'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
const HeaderDefault = ({ texto }) => (
  <Header style={ estilos.header }>
    <Left style={ { flex: 1 } } />
    <Body style={ { flex: 3, alignItems: 'center' } }>
      <Text style={ estilos.textoHeader }>
        { texto.toUpperCase() }
      </Text>
    </Body>

    <Right style={ { flex: 1 } }>
      <Menu renderer={renderers.Popover} rendererProps={{ placement: 'bottom' }} >
        <MenuTrigger>
          <Icon name="more" style={ estilos.iconoHeader } />
        </MenuTrigger>

        <MenuOptions>
          <MenuOption onSelect={() => alert(`Delete`)} >
            <Text>Cambiar teléfono</Text>
          </MenuOption>

          <MenuOption onSelect={() => alert(`Delete`)} >
            <Text>Cambiar teléfono</Text>
          </MenuOption>

          <MenuOption onSelect={() => alert(`Delete`)} >
            <Text>Cambiar teléfono</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </Right>
  </Header>
)

HeaderDefault.propTypes = {
  texto: PropTypes.string.isRequired
}

export default HeaderDefault
