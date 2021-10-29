import { Button } from '../../UI/components/Button'

const Home = () => {
  return (
    <div>
      <h1>IZIW - WEBSITE</h1>
      <Button
        variant='primary'
        children='Button'
        loading={false}
        mini={false}
        max={false}
        height='50px'
        widthCircle="32px"
        heightCircle="32px"
        fontSize="16px"
        onPress={() => { }}
      />
    </div>
  );
};

export default Home;
