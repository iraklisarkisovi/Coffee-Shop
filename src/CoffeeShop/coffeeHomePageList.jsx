import React from 'react';

const CoffeeHomePageList = ({ key, Status, Remove, id}) => {
  return (
    <div key={key}> 
      <div className='coffeeRedact'>
        <div className='empty-cup'></div>
        <div className='filled-cup'></div>
        <h3>Empty cup of coffee</h3>
        <div>
          ingredients:
        </div>
        <div className='buttons'>
          <button onClick={() => Remove(id)}>Remove exact coffee</button>
          <button>+ Add ingredients</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeHomePageList;
