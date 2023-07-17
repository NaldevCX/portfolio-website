import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../../index.css'

const Fader = ({text}) => {
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
      const timeout = setInterval(() =>{
        if(fadeProp.fade === 'fade-out'){
          setFadeProp({
            fade:'fade-in'
          })
        }
    }, 2000);

    return () =>{}
  }, [fadeProp])

  return (
    <div className={fadeProp.fade}>{text}</div>
  )
}

Fader.defaultProps = {
  text: 'Hello World'
}

Fader.propTypes = {

}
export default Fader