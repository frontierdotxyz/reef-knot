import { FC, useCallback } from 'react';
import { useConnectorWalletConnect } from '@reef-knot/web3-react';
import { WalletConnectCircle } from '@lidofinance/lido-ui';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';

const ConnectWalletConnect: FC<ConnectWalletProps> = (props) => {
  const { onConnect, ...rest } = props;
  const { connect } = useConnectorWalletConnect();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    await connect();
  }, [onConnect, connect]);

  return (
    <ConnectButton
      {...rest}
      iconSrcOrReactElement={<WalletConnectCircle />}
      onClick={handleConnect}
    >
      WalletConnect
    </ConnectButton>
  );
};

export default ConnectWalletConnect;
