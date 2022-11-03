import { useCallback } from 'react';
import { useConnectors } from './useConnectors';
import { useForceDisconnect } from './useDisconnect';
import { useWeb3 } from './useWeb3';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

type ConnectorHookResult = {
  connect: () => Promise<void>;
  connector: WalletConnectConnector;
};

export const useConnectorWalletConnect = (): ConnectorHookResult => {
  const { walletconnect } = useConnectors();
  const { activate } = useWeb3();
  const { disconnect } = useForceDisconnect();

  const connect = useCallback(async () => {
    await disconnect();
    await activate(walletconnect);
  }, [activate, disconnect, walletconnect]);

  return { connect, connector: walletconnect };
};
