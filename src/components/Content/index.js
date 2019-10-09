import React from 'react'
import styled from 'styled-components'
import { getHorizontallyCentralPoint, getVerticallyLowestPoint } from '../../utils/pointsUtils'
import { PolygonSelector } from '../../selectors'

const Container = styled.div`
  background: white;
  border-radius: 2px;
  box-shadow:
    0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;



  color: #363636!important;
`

function Content (props) {
  const { geometry } = props.annotation
  if (!geometry) return null

  const zoomBetweenZeroAndOne = Math.abs(((props.imageZoomAmount - 1) / 4) - 1);

  var style = {}

  if (geometry.type === PolygonSelector.TYPE){
    style ={
      marginRight:"50%",
      marginLeft:"-50%"
    }
  }
  else{
    style ={
      marginLeft:"8px"
    }
  }


  return (
    <div
      style={{
        position: 'absolute',
        left: ((geometry.type === PolygonSelector.TYPE) ? `${getHorizontallyCentralPoint(geometry.points)}%` : `${geometry.x}%`),
        top: ((geometry.type === PolygonSelector.TYPE) ? `${getVerticallyLowestPoint(geometry.points)}%` : `${geometry.y + geometry.height}%`),
        zIndex: 999,
        ...props.style
      }}
      className={props.className}
      geometry={geometry}
    >
      <Container
        style={style}
      >
        {props.annotation.data && props.annotation.data.text}
      </Container>
    </div>
  )
}

Content.defaultProps = {
  style: {},
  className: ''
}

export default Content
