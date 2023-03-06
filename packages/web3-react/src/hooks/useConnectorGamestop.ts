import invariant from 'tiny-invariant';
import warning from 'tiny-warning';
import { useCallback } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useConnectors } from './useConnectors';
import { useWeb3 } from './useWeb3';
import { hasInjected, isGamestopProvider, openWindow } from '../helpers';
import { useForceDisconnect } from './useDisconnect';
import { ConnectorHookArgs } from './types';

type ConnectorHookResult = {
  connect: () => Promise<void>;
  connector: InjectedConnector;
};

const WALLET_URL = 'https://wallet.gamestop.com/';

export const useConnectorGamestop = (
  args?: ConnectorHookArgs,
): ConnectorHookResult => {
  const { injected } = useConnectors();
  const { activate } = useWeb3();
  const { disconnect } = useForceDisconnect();
  const onConnect = args?.onConnect;

  const suggestApp = useCallback(() => {
    try {
      openWindow(WALLET_URL);
    } catch (error) {
      warning(false, 'Failed to open the link');
    }
  }, []);

  const connect = useCallback(async () => {
    invariant(injected, 'Connector is required');

    if (hasInjected() && isGamestopProvider()) {
      await disconnect();
      await activate(injected);
      onConnect?.();
    } else {
      suggestApp();
    }
  }, [injected, disconnect, activate, onConnect, suggestApp]);

  return { connect, connector: injected };
};
