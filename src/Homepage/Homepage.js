import React from 'react';
import { Link } from 'react-router-dom';
const Homepage = () => {
    return (
        <div>
        {/*<Link to={'/add-preset'}>
          <Button icon={null} label={"add a preset"} className="btn btn-white" onClickHandler={bringPresetFromPlayer} />
        </Link>*/}
        <Link to="/athletix">
          <button icon={null} label={"new design"} className="btn btn-transparent" onClickHandler={() => {}}/>
        </Link>
      </div>
    );
  };
  
  export default Homepage;