import React from 'react';
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import RecordIcon from '@material-ui/icons/FiberManualRecord'

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
      return (
          <div className='widgets__article'>
              <div className="widgets__articleLeft">
                  <RecordIcon/>
              </div>
              <div className="widgets__articleRight">
                  <h4>{heading}</h4>
                  <p>{subtitle}</p>
              </div>
          </div>
      )
    }

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoIcon/>
            </div>
            {newsArticle('React News', 'Hola!')}
        </div>
    );
};

export default Widgets;