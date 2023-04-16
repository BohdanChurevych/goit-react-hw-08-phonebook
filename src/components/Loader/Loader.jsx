import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderContainer>
      <InfinitySpin width="100" color="#4d79a9" />
    </LoaderContainer>
  );
};

export default Loader;