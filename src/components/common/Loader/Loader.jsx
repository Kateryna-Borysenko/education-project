/** @jsxImportSource @emotion/react */

import PulseLoader from 'react-spinners/PulseLoader';

const wrapperStyles = {
  position: 'absolute',
  top: 5,
  left: '23%',
};

const Loader = ({ className }) => {
  return (
    <div css={wrapperStyles}>
      <PulseLoader
        margin={4}
        size={13}
        color={'#cbd58b'}
        className={className}
      />
    </div>
  );
};

export default Loader;
